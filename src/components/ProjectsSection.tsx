import React, { useState } from 'react';
import { 
  ExternalLink, 
  Github, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  Bot, 
  Filter, 
  Clock, 
  Zap,
  Info,
  ChevronRight
} from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectsSectionProps {
  projects: ProjectItem[];
  onOpenChatWithPrompt?: (prompt: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ 
  projects,
  onOpenChatWithPrompt
}) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-20 bg-[#0B0F19] relative">
      {/* Background glow accents */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Bot className="w-3.5 h-3.5" />
              <span>Engineered Systems</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured AI Agents & Client Projects
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
              Real-world systems engineered for automated prospect discovery, algorithmic ICP qualification, and intelligent workflow execution.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              Live Projects Ready for Demo
            </span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Featured Hero Project Card: Practical AI Lead Finder */}
          {projects.length > 0 && (
            <div className="lg:col-span-12 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-blue-500/30 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none -z-10 group-hover:bg-blue-500/25 transition-all" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  
                  {/* Status & Category */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      {projects[0].status}
                    </span>
                    <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider">
                      Flagship Application
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                    {projects[0].title}
                  </h3>

                  <p className="text-sm font-semibold text-slate-300 mt-1">
                    {projects[0].subtitle}
                  </p>

                  <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                    {projects[0].description}
                  </p>

                  {/* Feature Checkmarks */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {projects[0].features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack pills */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {projects[0].tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-800 text-blue-200 border border-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    {projects[0].liveUrl && (
                      <a
                        href={projects[0].liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 flex items-center gap-2 transition-all"
                      >
                        <span>Open Live Demo</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}

                    {projects[0].githubUrl && (
                      <a
                        href={projects[0].githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm flex items-center gap-2 transition-all"
                      >
                        <Github className="w-4 h-4 text-purple-400" />
                        <span>View GitHub Repository</span>
                      </a>
                    )}

                    {onOpenChatWithPrompt && (
                      <button
                        onClick={() => onOpenChatWithPrompt("Tell me about Practical AI Lead Finder and how it works")}
                        className="px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-medium flex items-center gap-1.5 transition-all"
                      >
                        <Bot className="w-4 h-4 text-blue-400" />
                        <span>Ask AI About This Project</span>
                      </button>
                    )}
                  </div>

                </div>

                {/* Right Hero Preview Window */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5 shadow-2xl relative">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                        <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                        <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-500">practical-ai-lead-finder.vercel.app</span>
                    </div>

                    <div className="space-y-3 font-mono text-xs">
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
                        <div className="flex items-center justify-between text-blue-400 mb-1">
                          <span>&gt; target_criteria: "B2B SaaS / IT Services"</span>
                          <span className="text-emerald-400 text-[10px]">VERIFIED</span>
                        </div>
                        <p className="text-slate-400 text-[11px]">Executing ICP scoring algorithm against domain profiles...</p>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-white font-semibold">ICP Match Score</span>
                          <span className="text-emerald-400 font-bold">96% (Tier A)</span>
                        </div>
                        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-blue-500 to-emerald-400 h-full w-[96%]"></div>
                        </div>
                        <div className="flex justify-between text-[11px] text-slate-400">
                          <span>Decision Maker: Found</span>
                          <span>Email Status: Validated</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-800/40 text-blue-200 flex items-center justify-between">
                        <span className="text-[11px]">Ready for CRM Export</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">CSV / API</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Remaining 4 Projects */}
          {projects.slice(1).map((project) => (
            <div
              key={project.id}
              className="lg:col-span-6 rounded-3xl bg-slate-900/80 border border-slate-800/90 hover:border-slate-700 p-6 sm:p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Header row */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
                    project.status === 'In Development'
                      ? 'bg-blue-500/15 text-blue-300 border-blue-500/30'
                      : project.status === 'Production'
                      ? 'bg-purple-500/15 text-purple-300 border-purple-500/30'
                      : 'bg-slate-800 text-slate-300 border-slate-700'
                  }`}>
                    {project.status}
                  </span>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                      title="Open Live"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-xs font-semibold text-slate-300 mt-1">
                  {project.subtitle}
                </p>

                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mt-5 space-y-2">
                  {project.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 mt-1.5"></span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom footer */}
              <div className="mt-6 pt-5 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <a
                    href="#contact"
                    className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 group/btn"
                  >
                    <span>Request Similar Solution</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>

                  {onOpenChatWithPrompt && (
                    <button
                      onClick={() => onOpenChatWithPrompt(`Tell me more about ${project.title}`)}
                      className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1"
                    >
                      <Bot className="w-3 h-3 text-indigo-400" />
                      <span>Chat Details</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
