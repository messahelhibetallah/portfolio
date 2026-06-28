import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Mail, Github, Clock, ShieldAlert, Send } from 'lucide-react';

interface ContactViewProps {
  onBack: () => void;
  key?: string;
}

export default function ContactView({ onBack }: ContactViewProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    inquiryType: '',
    message: ''
  });
  const [charCount, setCharCount] = useState(0);
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'message') {
      setCharCount(value.length);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSendError(null);
    try {
      const response = await fetch("https://formsubmit.co/ajax/hibet.allah.messahel@ensia.edu.dz", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          inquiryType: formData.inquiryType || 'General Inquiry',
          message: formData.message
        })
      });
      if (response.ok) {
        setIsSent(true);
        setSendError(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        throw new Error('Failed to send message. Please try again or email directly.');
      }
    } catch (err: any) {
      setSendError(err.message || 'An error occurred. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="min-h-screen bg-[#fdfcfb] text-[#1a1a1a] font-sans antialiased"
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 md:px-12 h-20 bg-[#fdfcfb]/95 backdrop-blur-md border-b border-[#1a1a1a]/10">
        <span className="text-xs tracking-[0.3em] font-bold uppercase text-[#1a1a1a]">Hibet Allah Messahel</span>
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[11px] uppercase tracking-widest font-bold hover:opacity-80 transition-all cursor-pointer"
          id="btn-back-portfolio"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to portfolio
        </button>
      </nav>

      {/* Page Content */}
      <div className="max-w-[760px] mx-auto px-8 md:px-12 pt-32 pb-24">
        <div className="font-mono text-[10px] text-[#1a1a1a]/40 tracking-[0.25em] uppercase mb-4">
          04 // Contact
        </div>
        <h1 className="text-5xl md:text-6xl font-serif tracking-tight leading-[1.0] mb-6 text-[#1a1a1a] italic">
          Let's connect
        </h1>
        <p className="text-sm md:text-base text-[#1a1a1a]/60 mb-12 leading-relaxed max-w-[520px]">
          I'm actively looking for a PFE internship in AI, ML, or Data Science. Fill out the form and I'll get back to you as soon as possible.
        </p>

        {isSent && (
          <div className="flex items-start gap-4 bg-emerald-50 border border-emerald-200/60 rounded-none p-6 mb-8" id="successBanner">
            <div className="w-9 h-9 rounded-none bg-[#1a1a1a] flex items-center justify-center shrink-0 text-white">
              <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div className="text-sm">
              <strong className="block text-[#1a1a1a] font-serif italic text-base mb-1">Message sent successfully</strong>
              <span className="text-[#1a1a1a]/60">Thank you for reaching out. I'll reply to your email shortly.</span>
            </div>
          </div>
        )}

        {sendError && (
          <div className="flex items-start gap-4 bg-red-50 border border-red-200/60 rounded-none p-6 mb-8" id="errorBanner">
            <div className="w-9 h-9 rounded-none bg-red-600 flex items-center justify-center shrink-0 text-white font-bold text-lg font-serif italic">
              !
            </div>
            <div className="text-sm">
              <strong className="block text-red-800 font-serif italic text-base mb-1">Could not send message</strong>
              <span className="text-red-700/80">{sendError}</span>
            </div>
          </div>
        )}

        {!isSent ? (
          <div className="bg-[#f9f8f6] border border-[#1a1a1a]/10 rounded-none p-8 md:p-12">
            <form onSubmit={handleSubmit} id="contactForm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[10px] font-mono uppercase tracking-wider text-[#1a1a1a]/50">Full name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="p-3 border border-[#1a1a1a]/20 rounded-none font-sans text-sm text-[#1a1a1a] bg-white outline-none focus:border-[#1a1a1a] transition-all"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[10px] font-mono uppercase tracking-wider text-[#1a1a1a]/50">Email address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="p-3 border border-[#1a1a1a]/20 rounded-none font-sans text-sm text-[#1a1a1a] bg-white outline-none focus:border-[#1a1a1a] transition-all"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5 mb-6">
                <label htmlFor="subject" className="text-[10px] font-mono uppercase tracking-wider text-[#1a1a1a]/50">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. PFE internship opportunity"
                  className="p-3 border border-[#1a1a1a]/20 rounded-none font-sans text-sm text-[#1a1a1a] bg-white outline-none focus:border-[#1a1a1a] transition-all"
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5 mb-6">
                <label htmlFor="type" className="text-[10px] font-mono uppercase tracking-wider text-[#1a1a1a]/50">Type of inquiry</label>
                <div className="relative">
                  <select
                    id="type"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full p-3 border border-[#1a1a1a]/20 rounded-none font-sans text-sm text-[#1a1a1a] bg-white outline-none focus:border-[#1a1a1a] transition-all cursor-pointer appearance-none pr-10"
                  >
                    <option value="">Select an option</option>
                    <option value="PFE Internship">PFE Internship</option>
                    <option value="Job Opportunity">Job Opportunity</option>
                    <option value="Project Collaboration">Project Collaboration</option>
                    <option value="Research">Research</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-[#1a1a1a]/40">
                    <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="1.5" viewBox="0 0 24 24">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 mb-6">
                <label htmlFor="message" className="text-[10px] font-mono uppercase tracking-wider text-[#1a1a1a]/50">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about the opportunity, project, or question you have..."
                  className="p-3 border border-[#1a1a1a]/20 rounded-none font-sans text-sm text-[#1a1a1a] bg-white outline-none focus:border-[#1a1a1a] transition-all min-h-[160px] resize-none leading-relaxed"
                  required
                  maxLength={2000}
                ></textarea>
                <div className="text-[10px] font-mono text-[#1a1a1a]/40 text-right mt-1">
                  <span id="charCount">{charCount}</span> / 2000
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-8">
                <div className="text-xs text-[#1a1a1a]/50 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4" />
                  Your message goes directly to my inbox
                </div>
                <button
                  type="submit"
                  disabled={isSending}
                  className="px-8 py-4 bg-[#1a1a1a] text-white uppercase text-[11px] tracking-[0.2em] hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer inline-flex items-center gap-2 justify-center"
                  id="submitBtn"
                >
                  <Send className="w-3.5 h-3.5" />
                  {isSending ? 'Sending...' : 'Send message'}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-12">
            <button
              onClick={() => {
                setIsSent(false);
                setFormData({ name: '', email: '', subject: '', inquiryType: '', message: '' });
                setCharCount(0);
              }}
              className="px-8 py-4 border border-[#1a1a1a] text-[#1a1a1a] uppercase text-[11px] tracking-[0.2em] hover:bg-[#1a1a1a] hover:text-white transition-all cursor-pointer"
            >
              Send another message
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
          <div className="flex items-center gap-4 p-5 border border-[#1a1a1a]/10 bg-white rounded-none hover:bg-[#f9f8f6] transition-colors">
            <div className="w-9 h-9 rounded-none bg-[#efeeea] flex items-center justify-center shrink-0 text-[#1a1a1a]">
              <Mail className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] uppercase tracking-wider text-[#1a1a1a]/40 font-mono">Email</div>
              <div className="text-xs font-serif italic text-[#1a1a1a] truncate">hibet.allah.messahel@ensia.edu.dz</div>
            </div>
          </div>

          <a
            href="https://github.com/messahelhibetallah"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 p-5 border border-[#1a1a1a]/10 bg-white hover:bg-[#f9f8f6] transition-colors"
          >
            <div className="w-9 h-9 rounded-none bg-[#efeeea] flex items-center justify-center shrink-0 text-[#1a1a1a]">
              <Github className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] uppercase tracking-wider text-[#1a1a1a]/40 font-mono">GitHub</div>
              <div className="text-xs font-serif italic text-[#1a1a1a] truncate">messahelhibetallah</div>
            </div>
          </a>

          <div className="flex items-center gap-4 p-5 border border-[#1a1a1a]/10 bg-white hover:bg-[#f9f8f6] transition-colors">
            <div className="w-9 h-9 rounded-none bg-[#efeeea] flex items-center justify-center shrink-0 text-[#1a1a1a]">
              <Clock className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] uppercase tracking-wider text-[#1a1a1a]/40 font-mono">Response Time</div>
              <div className="text-xs font-serif italic text-[#1a1a1a]">Within 24–48 hours</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
