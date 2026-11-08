import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Building2, Shield, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
import { ExperienceItem } from '../data/portfolioData';

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  return (
    <section id="experience" className="py-20 bg-[#0B0F19]/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work History & Industry Experience
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Over 4+ years delivering 100+ direct client engagements and 50+ freelance platform projects in AI automation, B2B lead generation, and digital growth.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l border-slate-800 ml-4 md:ml-32 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-6 md:pl-10 group">
              
              {/* Timeline marker node */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-xl bg-slate-900 border-2 border-blue-500/60 flex items-center justify-center text-blue-400 group-hover:border-blue-400 group-hover:scale-110 transition-all shadow-md shadow-blue-500/20">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
              </div>

              {/* Main Card */}
              <div className="rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-slate-700/80 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-xl">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800/80">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors flex items-center gap-2">
                      <span>{exp.company}</span>
                    </h3>
                    <p className="text-sm font-semibold text-blue-400 mt-0.5">
                      {exp.role}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Focus summary */}
                <div className="mt-4 p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs sm:text-sm text-slate-300">
                  <span className="text-blue-300 font-semibold">Core Focus: </span>
                  {exp.focus}
                </div>

                {/* Description */}
                <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {exp.description}
                </p>

                {/* Highlights */}
                <div className="mt-5 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Key Execution Responsibilities:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                    {exp.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills tags */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Global Summary Badge */}
        <div className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-blue-900/30 via-indigo-900/20 to-purple-900/30 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Looking for an experienced AI Specialist?</h4>
              <p className="text-xs sm:text-sm text-slate-400">4+ years building bespoke automations, scrapers, and autonomous agents for international clients.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shrink-0 transition-colors"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
