import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  MapPin, 
  Sparkles, 
  Calendar, 
  Binary, 
  Calculator, 
  CheckCircle2, 
  Award,
  Clock
} from 'lucide-react';
import { EducationItem } from '../data/portfolioData';

interface EducationSectionProps {
  education: EducationItem[];
}

export const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  return (
    <section id="education" className="py-20 bg-[#0B0F19]/95 relative overflow-hidden">
      {/* Background glow halos */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-600/10 via-indigo-600/10 to-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-4 h-4 text-blue-400" />
            <span>Academic Background</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Mathematical Foundation
          </h2>

          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Rigorous mathematical training powering algorithm design, quantitative analysis, autonomous logic, and machine intelligence.
          </p>
        </div>

        {/* Education Timeline & Glassmorphism Card Grid */}
        <div className="max-w-4xl mx-auto">
          {education.map((item, index) => (
            <div key={index} className="relative group">
              
              {/* Outer decorative halo */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 blur-xl opacity-50 group-hover:opacity-80 transition-opacity -z-10" />

              {/* Glassmorphism Card */}
              <div className="rounded-3xl bg-slate-900/90 border border-slate-800/90 hover:border-blue-500/40 p-6 sm:p-10 backdrop-blur-xl shadow-2xl transition-all duration-300">
                
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-800">
                  
                  {/* Left: Cap Icon and Degree Info */}
                  <div className="flex items-start gap-4 sm:gap-5">
                    {/* Graduation Cap Icon Box */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 p-0.5 shadow-xl shadow-blue-600/25 shrink-0 flex items-center justify-center">
                      <div className="w-full h-full bg-slate-950/60 rounded-[14px] flex items-center justify-center">
                        <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 text-white group-hover:scale-110 transition-transform" />
                      </div>
                    </div>

                    <div>
                      {/* Degree Name */}
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-blue-300 transition-colors tracking-tight">
                        {item.degree}
                      </h3>

                      {/* University Name */}
                      <p className="text-base sm:text-lg font-semibold text-blue-400 mt-1">
                        {item.university}
                      </p>

                      {/* Location & Field */}
                      <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          <span>{item.location}</span>
                        </span>
                        <span className="text-slate-600">•</span>
                        <span className="flex items-center gap-1 text-slate-300">
                          <Binary className="w-3.5 h-3.5 text-purple-400" />
                          <span>Field: <strong className="text-white font-medium">{item.field}</strong></span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Currently Studying Status Badge */}
                  <div className="flex items-center self-start">
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold shadow-md shadow-emerald-500/10">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                      </span>
                      <span>{item.status}</span>
                    </span>
                  </div>

                </div>

                {/* Academic Highlights & Connection to AI */}
                <div className="mt-6 space-y-4">
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800/80">
                    <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start gap-2.5">
                      <Calculator className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-bold text-white">Mathematical Modeling</p>
                        <p className="text-[11px] text-slate-400 mt-0.5">Statistical formulations and optimization algorithms</p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start gap-2.5">
                      <Binary className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-bold text-white">Algorithmic Logic</p>
                        <p className="text-[11px] text-slate-400 mt-0.5">Foundations of LLM reasoning and agent orchestration</p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start gap-2.5">
                      <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-bold text-white">ICP Scoring Heuristics</p>
                        <p className="text-[11px] text-slate-400 mt-0.5">Quantitative scoring matrices for prospect qualification</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
