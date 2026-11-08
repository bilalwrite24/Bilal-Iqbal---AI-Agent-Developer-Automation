import React from 'react';
import { Star, Award, Sparkles, CheckCircle2 } from 'lucide-react';

interface TopRatedBadgeProps {
  size?: 'sm' | 'md' | 'lg';
  showStats?: boolean;
  className?: string;
}

export const TopRatedBadge: React.FC<TopRatedBadgeProps> = ({ 
  size = 'md', 
  showStats = false,
  className = '' 
}) => {
  if (size === 'sm') {
    return (
      <div 
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-500/20 via-yellow-500/25 to-amber-500/20 border border-amber-400/50 shadow-[0_0_12px_rgba(245,158,11,0.25)] backdrop-blur-md ${className}`}
        title="Top Rated Freelancer • 4+ Years Experience • 50+ Freelance Platform Projects • 100+ Direct Projects"
      >
        <Star className="w-3 h-3 text-amber-300 fill-amber-300 shrink-0" />
        <span className="text-[10px] font-extrabold tracking-wider bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300 bg-clip-text text-transparent uppercase">
          TOP RATED FREELANCER
        </span>
      </div>
    );
  }

  if (size === 'lg') {
    return (
      <div className={`flex flex-col items-start gap-2 ${className}`}>
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 via-yellow-500/30 to-amber-600/20 border border-amber-400/60 shadow-[0_0_20px_rgba(245,158,11,0.35)] backdrop-blur-md">
          <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-300 flex items-center justify-center text-slate-950 shadow-sm">
            <Star className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
          </div>
          <span className="text-xs sm:text-sm font-extrabold tracking-widest bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300 bg-clip-text text-transparent uppercase">
            TOP RATED FREELANCER
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
        </div>

        {showStats && (
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-amber-200/90 font-medium pl-1">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
              <span>4+ Years Experience</span>
            </span>
            <span className="text-amber-500/60">•</span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
              <span>50+ Freelance Platform Projects</span>
            </span>
            <span className="text-amber-500/60">•</span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
              <span>100+ Direct Projects</span>
            </span>
          </div>
        )}
      </div>
    );
  }

  // Default 'md' size
  return (
    <div 
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-yellow-500/25 to-amber-500/20 border border-amber-400/50 shadow-[0_0_15px_rgba(245,158,11,0.25)] backdrop-blur-md ${className}`}
      title="Top Rated Freelancer: 4+ Years Exp • 50+ Freelance Projects • 100+ Direct Projects"
    >
      <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-200 flex items-center justify-center text-slate-950">
        <Star className="w-2.5 h-2.5 fill-slate-950 text-slate-950" />
      </div>
      <span className="text-[11px] font-extrabold tracking-wider bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300 bg-clip-text text-transparent uppercase">
        TOP RATED FREELANCER
      </span>
      <Sparkles className="w-3 h-3 text-amber-300" />
    </div>
  );
};
