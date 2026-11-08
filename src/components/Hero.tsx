import React from 'react';
import { 
  Bot, 
  Sparkles, 
  ArrowRight, 
  Phone, 
  Mail, 
  Github, 
  Linkedin, 
  Instagram, 
  Calendar, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  TrendingUp, 
  ShieldCheck,
  Download
} from 'lucide-react';

import { TopRatedBadge } from './TopRatedBadge';

interface HeroProps {
  personal: {
    fullName: string;
    title: string;
    shortBio: string;
    email: string;
    phone: string;
    whatsappUrl: string;
    githubUrl: string;
    linkedinUrl: string;
    instagramUrl: string;
    calendlyUrl: string;
    portraitImage: string;
  };
  stats: Array<{ label: string; value: string; unit: string }>;
  onOpenChat: () => void;
  onOpenEditModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  personal, 
  stats, 
  onOpenChat, 
  onOpenEditModal 
}) => {
  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Anchor for About */}
      <div id="about" className="absolute top-0" />
      {/* Background radial gradient halos */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-purple-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0f_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Row: Availability pill & Gold Top Rated Freelancer Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              {/* Status pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 shadow-inner backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-semibold text-slate-300">
                  Available for New Projects
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-xs text-blue-400 font-medium">Remote Worldwide</span>
              </div>

              {/* Gold Top Rated Freelancer Badge (Header Placement) */}
              <TopRatedBadge size="sm" />
            </div>

            {/* Premium Gold Top Rated Freelancer Hero Badge (Placement: Above Name) */}
            <div className="mb-4">
              <TopRatedBadge size="lg" showStats={true} />
            </div>

            {/* Main Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">{personal.fullName}</span>
            </h1>

            {/* Professional Title Badges + Beside Title Top Rated Badge */}
            <div className="mt-4 flex flex-wrap items-center gap-2.5">
              <span className="text-base sm:text-lg font-bold text-slate-200">
                AI Agent Developer
              </span>
              <span className="text-slate-600 font-bold hidden sm:inline">|</span>
              <span className="text-base sm:text-lg font-bold text-blue-400">
                AI Automation Specialist
              </span>
              <span className="text-slate-600 font-bold hidden sm:inline">|</span>
              <span className="text-base sm:text-lg font-bold text-purple-400">
                B2B Growth & Lead Gen
              </span>
              {/* Placement: Beside Title */}
              <TopRatedBadge size="sm" className="hidden sm:inline-flex" />
            </div>

            {/* Bio paragraph */}
            <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              I design and deploy <strong className="text-white font-semibold">autonomous AI agents</strong>, custom LLM pipelines, and <strong className="text-white font-semibold">high-converting B2B outreach automations</strong> that eliminate manual bottlenecks, qualify prospects with precision, and drive scalable revenue.
            </p>

            {/* Quick value bullets */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xl text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Autonomous Multi-Agent Workflows</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Algorithmic ICP Scoring & Lead Research</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>End-to-End n8n, Python & API Automations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Verified Deliverability & Meeting Gen</span>
              </div>
            </div>

            {/* Main CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              {/* Hire button */}
              <a
                href="#contact"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Hire Me Directly</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* WhatsApp CTA */}
              <a
                href={personal.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600/15 hover:bg-emerald-600/25 border border-emerald-500/40 text-emerald-300 font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Chatbot trigger */}
              <button
                onClick={onOpenChat}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-medium text-sm transition-all flex items-center justify-center gap-2"
              >
                <Bot className="w-4 h-4 text-blue-400" />
                <span>Ask AI Assistant</span>
              </button>

              {/* Calendly */}
              <a
                href={personal.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-purple-600/15 hover:bg-purple-600/25 text-purple-300 border border-purple-500/30 font-medium text-sm transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-purple-400" />
                <span>Book Strategy Call</span>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="mt-8 flex items-center gap-4 pt-6 border-t border-slate-800/80 w-full">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                Connect Directly:
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={`mailto:${personal.email}`}
                  title={`Email Bilal: ${personal.email}`}
                  className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                >
                  <Mail className="w-4 h-4 text-blue-400" />
                </a>
                <a
                  href={personal.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp: +92 320 9635410"
                  className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                </a>
                <a
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn Profile"
                  className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                </a>
                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub Profile"
                  className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                >
                  <Github className="w-4 h-4 text-purple-400" />
                </a>
                <a
                  href={personal.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram (Editable)"
                  className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors group relative"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                </a>
              </div>

              <button
                onClick={onOpenEditModal}
                className="text-xs text-slate-500 hover:text-slate-300 underline underline-offset-4 ml-auto"
              >
                Edit links
              </button>
            </div>

          </div>

          {/* Right Column: Hero Portrait Cutout with Glow & Floating Cards */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-full max-w-[420px] aspect-[4/5] flex items-end justify-center">
              
              {/* Circular ambient aura backdrops */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-blue-600/20 via-indigo-600/10 to-purple-600/20 border border-slate-800/80 shadow-2xl backdrop-blur-sm -z-10" />
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 blur-xl opacity-60 -z-20" />
              
              {/* Concentric rings behind cutout */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-blue-500/20 -z-10 animate-[spin_60s_linear_infinite]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-88 h-88 rounded-full border border-purple-500/15 border-dashed -z-10 animate-[spin_80s_linear_infinite_reverse]" />

              {/* Professional portrait image cutout */}
              <img
                src={personal.portraitImage}
                alt={personal.fullName}
                className="w-full h-auto max-h-[480px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] z-10 select-none pointer-events-none"
              />

              {/* Floating Badge 1: Top Right */}
              <div className="absolute top-4 -right-2 sm:-right-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-2.5 z-20">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Expertise</p>
                  <p className="text-xs font-bold text-white">AI Agent Architect</p>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Left */}
              <div className="absolute bottom-6 -left-2 sm:-left-6 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 px-3.5 py-2.5 rounded-xl shadow-xl flex items-center gap-3 z-20">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Proven Track Record</p>
                  <p className="text-xs font-bold text-white">100+ Client Projects</p>
                </div>
              </div>

              {/* Floating Badge 3: Bottom Right Pill */}
              <div className="absolute -bottom-3 right-4 bg-gradient-to-r from-blue-900/90 to-purple-900/90 backdrop-blur-md border border-indigo-500/40 px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 z-20 text-[11px] font-semibold text-blue-200">
                <Sparkles className="w-3.5 h-3.5 text-blue-300" />
                <span>Gemini & Python AI</span>
              </div>

            </div>
          </div>

        </div>

        {/* Stats Grid Strip */}
        <div className="mt-16 pt-8 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm hover:border-slate-700 transition-all hover:-translate-y-0.5 group"
              >
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-indigo-300 transition-all">
                    {stat.value}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                    {stat.unit}
                  </span>
                </div>
                <p className="mt-1.5 text-xs sm:text-sm font-medium text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
