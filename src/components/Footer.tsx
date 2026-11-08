import React from 'react';
import { 
  ArrowUp, 
  Bot, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Instagram, 
  Calendar,
  Sparkles,
  Heart
} from 'lucide-react';

import { TopRatedBadge } from './TopRatedBadge';

interface FooterProps {
  personal: {
    fullName: string;
    title: string;
    email: string;
    phone: string;
    whatsappUrl: string;
    githubUrl: string;
    linkedinUrl: string;
    instagramUrl: string;
    calendlyUrl: string;
  };
  onOpenEditModal: () => void;
  onOpenChat: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  personal, 
  onOpenEditModal, 
  onOpenChat 
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070A11] border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-24 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center font-bold text-white shadow-md">
                BI
              </div>
              <div>
                <h3 className="font-extrabold text-white text-lg tracking-tight">
                  {personal.fullName}
                </h3>
                <p className="text-xs text-blue-400 font-medium">
                  AI Agent Developer & B2B Specialist
                </p>
              </div>
            </div>

            {/* Small Top Rated Recognition Badge in Footer */}
            <div>
              <TopRatedBadge size="sm" />
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Empowering global founders and businesses with autonomous AI agents, automated prospect research, and robust outbound pipelines.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4 text-purple-400" />
              </a>
              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4 text-blue-400" />
              </a>
              <a
                href={personal.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                title="WhatsApp"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
              </a>
              <a
                href={personal.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                title="Instagram (Editable)"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="#pricing" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a></li>
              <li><a href="#education" className="hover:text-blue-400 transition-colors text-blue-300 font-semibold">Education</a></li>
              <li><a href="#pricing" className="hover:text-blue-400 transition-colors">Earnings & ROI</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Featured Projects Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Key Projects
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a 
                  href="https://practical-ai-lead-finder.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-400 transition-colors flex items-center gap-1"
                >
                  <span>Practical AI Lead Finder</span>
                  <span className="text-[10px] text-emerald-400 font-bold">LIVE</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/bilalwrite24/Ai-lead" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-400 transition-colors"
                >
                  GitHub: Ai-lead
                </a>
              </li>
              <li><span className="text-slate-500">PropelMatch AI Agent</span></li>
              <li><span className="text-slate-500">AI Lead Research Agent</span></li>
              <li><span className="text-slate-500">AI Business Automation</span></li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <span className="text-slate-500 block text-[11px]">Email:</span>
                <a href={`mailto:${personal.email}`} className="text-slate-200 hover:text-blue-400 font-mono">
                  {personal.email}
                </a>
              </li>
              <li>
                <span className="text-slate-500 block text-[11px]">WhatsApp / Phone:</span>
                <a href={personal.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-emerald-400 font-mono">
                  {personal.phone}
                </a>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenEditModal}
                  className="text-xs text-blue-400 hover:text-blue-300 underline"
                >
                  Edit Profile Links
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {personal.fullName}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenChat}
              className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1"
            >
              <Bot className="w-3.5 h-3.5" />
              <span>Bilal AI Assistant</span>
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="hover:text-white flex items-center gap-1 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
