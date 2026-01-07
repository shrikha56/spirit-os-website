
import React, { useState } from 'react';
import { Send, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

export const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    website: '' // Honeypot field
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || undefined,
          message: formData.message,
          website: formData.website, // Honeypot
        }),
      });
      
      const data = await response.json();
      
      if (data.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', message: '', website: '' });
      } else {
        setStatus('error');
        if (data.fields) {
          // Validation errors
          const firstError = Object.values(data.fields)[0] as string;
          setErrorMessage(firstError);
        } else {
          setErrorMessage(data.error === 'rate_limited' 
            ? 'Too many requests. Please try again later.' 
            : 'Something went wrong. Please try again.');
        }
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
      console.error('Contact form error:', error);
    }
  };

  return (
    <section id="contact" className="py-40 px-6 relative bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
        <div className="lg:w-1/2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-cluely bg-blue-50 text-[#5B8FDE] text-xs font-bold mb-8">
            <Sparkles className="w-3 h-3" />
            Limited Deployments Remaining
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-10 leading-[0.95] text-[#1F2937]">
            Engineer Your <br />
            <span className="text-[#5B8FDE]">Operations.</span>
          </h2>
          <p className="text-xl text-[#6B7280] mb-12 max-w-md font-medium leading-relaxed">
            We only take on 3 new infrastructure projects per quarter to ensure premium execution.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-cluely bg-[#E5E9F0] flex items-center justify-center transition-all group-hover:bg-[#5B8FDE] group-hover:text-white">
                <ArrowRight className="w-6 h-6" />
              </div>
              <p className="text-xl font-bold text-[#1F2937]">Free Infrastructure Audit</p>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-cluely bg-[#E5E9F0] flex items-center justify-center transition-all group-hover:bg-[#5B8FDE] group-hover:text-white">
                <ArrowRight className="w-6 h-6" />
              </div>
              <p className="text-xl font-bold text-[#1F2937]">Q1 2026 Reservation</p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full">
          <div className="p-10 md:p-14 rounded-[3.5rem] glass border-gray-100 shadow-2xl relative">
            {status === 'success' ? (
              <div className="text-center py-24 animate-fade-in">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-3xl font-black mb-4 text-[#1F2937]">Inquiry Received</h3>
                <p className="text-[#6B7280] font-medium text-lg">Our engineering lead will contact you <br /> within 24 hours.</p>
                <button onClick={() => { setStatus('idle'); setErrorMessage(''); }} className="mt-10 text-[#5B8FDE] font-bold text-lg hover:underline">Send another transmission</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field - hidden from users */}
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={e => setFormData({...formData, website: e.target.value})}
                  style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#6B7280] uppercase tracking-widest ml-1">Full Name</label>
                    <input 
                      required
                      className="w-full bg-white/50 border border-gray-200 rounded-cluely px-6 py-4 outline-none focus:ring-2 focus:ring-[#5B8FDE] transition-all font-semibold text-[#1F2937] placeholder:text-gray-300"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#6B7280] uppercase tracking-widest ml-1">Work Email</label>
                    <input 
                      required
                      type="email"
                      className="w-full bg-white/50 border border-gray-200 rounded-cluely px-6 py-4 outline-none focus:ring-2 focus:ring-[#5B8FDE] transition-all font-semibold text-[#1F2937] placeholder:text-gray-300"
                      placeholder="jane@academy.com"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#6B7280] uppercase tracking-widest ml-1">Tutoring Entity</label>
                  <input 
                    className="w-full bg-white/50 border border-gray-200 rounded-cluely px-6 py-4 outline-none focus:ring-2 focus:ring-[#5B8FDE] transition-all font-semibold text-[#1F2937] placeholder:text-gray-300"
                    placeholder="Academy Name (optional)"
                    value={formData.company}
                    onChange={e => setFormData({...formData, company: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#6B7280] uppercase tracking-widest ml-1">Context</label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full bg-white/50 border border-gray-200 rounded-cluely px-6 py-4 outline-none focus:ring-2 focus:ring-[#5B8FDE] transition-all font-semibold text-[#1F2937] placeholder:text-gray-300 resize-none"
                    placeholder="Describe your administrative friction..."
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                
                {status === 'error' && errorMessage && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-cluely text-red-700 text-sm font-medium">
                    {errorMessage}
                  </div>
                )}
                
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-6 bg-[#5B8FDE] text-white rounded-cluely text-xl font-bold hover:bg-[#4A8FEF] hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 flex items-center justify-center gap-4 group"
                >
                  {status === 'loading' ? (
                    <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Initiate Consultation <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
