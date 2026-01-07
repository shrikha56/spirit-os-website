# Contact Form API Setup

This document describes the contact form email flow implementation using Resend.

## Overview

The contact form sends two emails:

1. **Internal notification** to your team with submission details
2. **Auto-reply** to the submitter confirming receipt

## Environment Variables

Create a `.env` file in the project root with the following variables:

```env
# Resend API Configuration
RESEND_API_KEY=re_your_api_key_here

# Email Configuration
CONTACT_TO_EMAIL=your-team@example.com
CONTACT_FROM_EMAIL=hello@yourdomain.com

# Server Configuration (optional)
PORT=3002
```

### Getting Your Resend API Key

1. Sign up at [resend.com](https://resend.com)
2. Go to API Keys section
3. Create a new API key
4. Copy the key (starts with `re_`)

### Email Configuration

- **CONTACT_TO_EMAIL**: The email address where you want to receive contact form submissions
- **CONTACT_FROM_EMAIL**: Must be a verified domain/email in Resend. For testing, you can use `onboarding@resend.dev` (Resend's test domain)

## Installation

Install the required dependencies:

```bash
npm install
```

This will install:

- `express` - Web server
- `cors` - CORS middleware
- `resend` - Email service
- `express-rate-limit` - Rate limiting
- `dotenv` - Environment variables
- `concurrently` - Run frontend and backend together

## Running the Server

### Option 1: Run Frontend and Backend Together

```bash
npm run dev:all
```

This starts:

- Frontend on `http://localhost:3001` (or next available port)
- Backend API on `http://localhost:3002`

### Option 2: Run Separately

**Terminal 1 - Frontend:**

```bash
npm run dev
```

**Terminal 2 - Backend:**

```bash
npm run dev:server
```

## API Endpoint

### POST `/api/contact`

**Request Body:**

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "company": "Academy Name", // optional
  "message": "Your message here"
}
```

**Validation:**

- `name`: Required, 2-80 characters
- `email`: Required, valid email format
- `company`: Optional, max 120 characters
- `message`: Required, 10-2000 characters

**Responses:**

**Success (200):**

```json
{
  "ok": true
}
```

**Validation Error (400):**

```json
{
  "ok": false,
  "error": "validation_error",
  "fields": {
    "email": "Invalid email format"
  }
}
```

**Rate Limited (429):**

```json
{
  "ok": false,
  "error": "rate_limited"
}
```

**Server Error (500):**

```json
{
  "ok": false,
  "error": "server_error"
}
```

## Security Features

### Rate Limiting

- 5 requests per 15 minutes per IP address
- Returns 429 status when limit exceeded

### Honeypot Field

- Hidden `website` field in the form
- If filled, the request is silently accepted but no emails are sent
- Helps prevent bot submissions

### Input Sanitization

- All user input is sanitized before being embedded in HTML emails
- Prevents XSS attacks

## Testing Locally

### 1. Test with curl

```bash
curl -X POST http://localhost:3002/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "company": "Test Company",
    "message": "This is a test message to verify the contact form is working correctly."
  }'
```

### 2. Test Honeypot

```bash
curl -X POST http://localhost:3002/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Bot",
    "email": "bot@example.com",
    "message": "Spam message",
    "website": "http://spam.com"
  }'
```

Should return `{"ok": true}` but no emails are sent.

### 3. Test Rate Limiting

Send 6 requests quickly. The 6th should return:

```json
{
  "ok": false,
  "error": "rate_limited"
}
```

### 4. Test Validation

```bash
curl -X POST http://localhost:3002/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "A",
    "email": "invalid-email",
    "message": "short"
  }'
```

Should return validation errors.

## Frontend Integration

The Contact component (`components/Contact.tsx`) is already configured to call the API. It:

- Sends POST requests to `http://localhost:3002/api/contact`
- Handles loading, success, and error states
- Displays validation errors to users
- Includes a hidden honeypot field

### Changing the API URL

If you deploy the backend to a different URL, update the fetch call in `components/Contact.tsx`:

```typescript
const response = await fetch("https://your-api-domain.com/api/contact", {
  // ...
});
```

## Email Templates

### Internal Notification Email

**To:** `CONTACT_TO_EMAIL`  
**Subject:** `New contact form submission — {company or name}`  
**Content:** Includes name, email, company (if provided), message, and timestamp

### Auto-Reply Email

**To:** Submitter's email  
**Subject:** `Thanks for reaching out!`  
**Content:** Friendly confirmation message with expected response time (24 hours)

## Troubleshooting

### Emails not sending

1. Check that `RESEND_API_KEY` is set correctly
2. Verify `CONTACT_FROM_EMAIL` is a verified domain in Resend
3. Check server logs for error messages
4. Ensure Resend account has sufficient credits

### CORS errors

The server includes CORS middleware. If you see CORS errors:

- Ensure the backend is running on port 3002
- Check that the frontend is calling the correct URL

### Rate limiting too strict

Edit `server/index.js` to adjust rate limits:

```javascript
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // Change window
  max: 5, // Change max requests
  // ...
});
```

## Production Deployment

1. Set environment variables in your hosting platform
2. Ensure `CONTACT_FROM_EMAIL` uses a verified domain
3. Update frontend API URL to production endpoint
4. Consider using a more robust rate limiting solution (Redis-based)
5. Add request logging/monitoring

## Notes

- The server uses in-memory rate limiting (resets on server restart)
- For production, consider Redis-based rate limiting
- Email content is sanitized but not logged in production
- Server logs success/failure but not full message content
