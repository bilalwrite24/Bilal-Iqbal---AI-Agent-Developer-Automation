import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Instagram, 
  Calendar, 
  Send, 
  Check, 
  Copy, 
  ExternalLink, 
  Sparkles, 
  MessageSquare,
  Clock,
  MapPin,
  Bot
} from 'lucide-react';

interface ContactSectionProps {
  personal: {
    fullName: string;
    email: string;
    phone: string;
    whatsappUrl: string;
    githubUrl: string;
    linkedinUrl: string;
    instagramUrl: string;
    calendlyUrl: string;
    location: string;
  };
  selectedTier?: string;
  onOpenEditModal: () => void;
  onOpenChat: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  personal, 
  selectedTier, 
  onOpenEditModal,
  onOpenChat 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: selectedTier || 'AI Agent Development',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.projectType,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setStatusMessage('Thank you! Your inquiry has been received. Bilal will follow up directly.');
      } else {
        // Fallback open mailto
        window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(
          `Project Inquiry: ${formData.projectType} from ${formData.name}`
        )}&body=${encodeURIComponent(
          `Hi Bilal,\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`
        )}`;
        setSubmitted(true);
        setStatusMessage('Opening your email client to send message to Bilal directly...');
      }
    } catch (err) {
      // Graceful fallback
      window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(
        `Project Inquiry: ${formData.projectType}`
      )}&body=${encodeURIComponent(
        `Hi Bilal,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`;
      setSubmitted(true);
      setStatusMessage('Opening email client...');
    } finally {
      setSubmitting(false);
    }
  };

  const generateWhatsAppMessage = () => {
    const text = encodeURIComponent(
      `Hi Bilal, I visited your portfolio website. I'm interested in discussing a project (${formData.projectType || 'AI Development'}).`
    );
    return `https://wa.me/923209635410?text=${text}`;
  };

  return (
    <section id="contact" className="py-20 bg-[#0B0F19]/90 relative">
      {/* Background glow halos */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Your Next AI Agent or B2B Pipeline
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Reach out through your preferred channel for project consultations, custom AI automations, or direct contracts. Response within 24 hours guaranteed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Address</p>
                    <p className="text-sm sm:text-base font-bold text-white font-mono break-all">
                      {personal.email}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400">Direct Inquiries & RFPs</span>
                <a
                  href={`mailto:${personal.email}`}
                  className="px-3 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <span>Send Email</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* WhatsApp & Phone Card */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Phone / WhatsApp</p>
                    <p className="text-sm sm:text-base font-bold text-white font-mono">
                      {personal.phone}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                  title="Copy Phone Number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Fastest response channel
                </span>
                <a
                  href={personal.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <span>WhatsApp Chat</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Meeting Booking (Calendly) Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-900/30 to-indigo-900/30 border border-purple-500/30 hover:border-purple-500/50 transition-all">
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-11 h-11 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300 shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-purple-300 uppercase tracking-wider">1-on-1 Consultation</p>
                  <p className="text-base font-bold text-white">Book a Strategy Call</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Schedule a 20-minute architecture session on Calendly to audit your sales workflows or plan a custom AI agent.
              </p>
              <a
                href={personal.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-purple-600/25"
              >
                <Calendar className="w-4 h-4" />
                <span>Open Calendly Booking Calendar</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Social Professional Links Grid */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Professional Profiles:
                </p>
                <button
                  onClick={onOpenEditModal}
                  className="text-[11px] text-blue-400 hover:text-blue-300 underline"
                >
                  Edit Links
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-blue-500/50 flex items-center gap-2.5 text-xs text-slate-200 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="truncate font-medium">LinkedIn</span>
                </a>

                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-purple-500/50 flex items-center gap-2.5 text-xs text-slate-200 transition-colors"
                >
                  <Github className="w-4 h-4 text-purple-400 shrink-0" />
                  <span className="truncate font-medium">GitHub</span>
                </a>

                <a
                  href={personal.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-pink-500/50 flex items-center gap-2.5 text-xs text-slate-200 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                  <span className="truncate font-medium">Instagram</span>
                </a>

                <button
                  onClick={onOpenChat}
                  className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-blue-500/50 flex items-center gap-2.5 text-xs text-blue-300 transition-colors text-left"
                >
                  <Bot className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="truncate font-medium">Bilal AI Bot</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 backdrop-blur-md shadow-2xl relative">
              
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Fill in your project requirements below to receive a custom proposal and scope breakdown.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <Check className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">Inquiry Submitted Successfully</h4>
                      <p className="text-xs text-slate-300">{statusMessage}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-emerald-500/20 flex flex-wrap gap-3">
                    <a
                      href={generateWhatsAppMessage()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center gap-2"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Also Ping on WhatsApp</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Service / Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="AI Agent Development">AI Agent Development ($1,000–$3,000+)</option>
                      <option value="Intermediate AI Solution">Intermediate AI Solution ($500–$1,000)</option>
                      <option value="Basic AI Project">Basic AI Automation ($150–$500)</option>
                      <option value="B2B Lead Generation Pipeline">B2B Lead Generation & ICP Scoring</option>
                      <option value="Monthly Retainer & Maintenance">Monthly Maintenance ($100–$300/mo)</option>
                      <option value="Custom Consultation">Custom Enterprise Architecture</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Project Details & Goals *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe what you want to automate, your target market, or the AI agent you'd like to build..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submission buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{submitting ? 'Submitting...' : 'Send Inquiry to Bilal'}</span>
                    </button>

                    <a
                      href={generateWhatsAppMessage()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-emerald-400" />
                      <span>Or Send via WhatsApp</span>
                    </a>
                  </div>

                  <p className="text-[11px] text-slate-500 text-center sm:text-left pt-2">
                    Direct Email: <span className="text-slate-400 font-mono">bilalwrite24@gmail.com</span> | WhatsApp: <span className="text-slate-400 font-mono">+92 320 9635410</span>
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
