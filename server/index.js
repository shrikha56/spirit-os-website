import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Middleware
app.use(cors());
app.use(express.json());

// Rate limiting: 5 requests per 15 minutes per IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: { ok: false, error: 'rate_limited' },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use('/api/contact', limiter);

// Validation helpers
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sanitizeHtml(text) {
  if (typeof text !== 'string') return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

function validateContactForm(body) {
  const errors = {};
  
  // Name validation
  if (!body.name || typeof body.name !== 'string') {
    errors.name = 'Name is required';
  } else {
    const name = body.name.trim();
    if (name.length < 2 || name.length > 80) {
      errors.name = 'Name must be between 2 and 80 characters';
    }
  }
  
  // Email validation
  if (!body.email || typeof body.email !== 'string') {
    errors.email = 'Email is required';
  } else {
    const email = body.email.trim();
    if (!validateEmail(email)) {
      errors.email = 'Invalid email format';
    }
  }
  
  // Company validation (optional)
  if (body.company !== undefined && body.company !== null) {
    if (typeof body.company !== 'string') {
      errors.company = 'Company must be a string';
    } else {
      const company = body.company.trim();
      if (company.length > 120) {
        errors.company = 'Company must be 120 characters or less';
      }
    }
  }
  
  // Message validation
  if (!body.message || typeof body.message !== 'string') {
    errors.message = 'Message is required';
  } else {
    const message = body.message.trim();
    if (message.length < 10 || message.length > 2000) {
      errors.message = 'Message must be between 10 and 2000 characters';
    }
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    data: {
      name: body.name?.trim() || '',
      email: body.email?.trim() || '',
      company: body.company?.trim() || null,
      message: body.message?.trim() || '',
    }
  };
}

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    // Honeypot check
    if (req.body.website && req.body.website.trim() !== '') {
      // Bot detected - return 200 but do nothing
      console.log('[Honeypot] Bot submission detected from IP:', req.ip);
      return res.status(200).json({ ok: true });
    }
    
    // Validate input
    const validation = validateContactForm(req.body);
    
    if (!validation.isValid) {
      return res.status(400).json({
        ok: false,
        error: 'validation_error',
        fields: validation.errors
      });
    }
    
    const { name, email, company, message } = validation.data;
    
    // Check required env vars
    if (!process.env.RESEND_API_KEY) {
      console.error('[Error] RESEND_API_KEY not configured');
      return res.status(500).json({ ok: false, error: 'server_error' });
    }
    
    if (!process.env.CONTACT_TO_EMAIL) {
      console.error('[Error] CONTACT_TO_EMAIL not configured');
      return res.status(500).json({ ok: false, error: 'server_error' });
    }
    
    if (!process.env.CONTACT_FROM_EMAIL) {
      console.error('[Error] CONTACT_FROM_EMAIL not configured');
      return res.status(500).json({ ok: false, error: 'server_error' });
    }
    
    const timestamp = new Date().toISOString();
    const companyDisplay = company || name;
    
    // Prepare emails
    const internalEmail = {
      from: process.env.CONTACT_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL,
      subject: `New contact form submission — ${sanitizeHtml(companyDisplay)}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${sanitizeHtml(name)}</p>
        <p><strong>Email:</strong> ${sanitizeHtml(email)}</p>
        ${company ? `<p><strong>Company:</strong> ${sanitizeHtml(company)}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${sanitizeHtml(message)}</p>
        <hr>
        <p><small>Submitted at: ${timestamp}</small></p>
      `
    };
    
    const autoReplyEmail = {
      from: process.env.CONTACT_FROM_EMAIL,
      to: email,
      subject: 'Thanks for reaching out!',
      html: `
        <p>Hi ${sanitizeHtml(name)},</p>
        <p>Thank you for reaching out to Spirit OS. We've received your inquiry and our engineering lead will review it and get back to you within 24 hours.</p>
        <p>We appreciate your interest in our bespoke infrastructure solutions.</p>
        <p>Best regards,<br>Spirit OS Team</p>
      `
    };
    
    // Send emails using batch if available, otherwise sequential
    try {
      const result = await resend.emails.sendBatch([internalEmail, autoReplyEmail]);
      console.log('[Success] Contact form submitted:', { name, email, company, timestamp });
      return res.status(200).json({ ok: true });
    } catch (emailError) {
      // Fallback to sequential sends if batch fails
      console.warn('[Warning] Batch send failed, trying sequential:', emailError.message);
      try {
        await resend.emails.send(internalEmail);
        await resend.emails.send(autoReplyEmail);
        console.log('[Success] Contact form submitted (sequential):', { name, email, company, timestamp });
        return res.status(200).json({ ok: true });
      } catch (seqError) {
        console.error('[Error] Failed to send emails:', seqError);
        return res.status(500).json({ ok: false, error: 'server_error' });
      }
    }
  } catch (error) {
    console.error('[Error] Contact form error:', error);
    return res.status(500).json({ ok: false, error: 'server_error' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ ok: true, status: 'healthy' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

