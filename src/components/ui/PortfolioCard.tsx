import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PortfolioSubItem {
  title: string;
}

interface PortfolioCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  subItems: PortfolioSubItem[];
  className?: string; // To allow external grid placement control
}

export default function PortfolioCard({
  title,
  description,
  icon: Icon,
  subItems,
  className,
}: PortfolioCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden",
        "bg-carbon-black border border-glass-border p-[4vw] md:p-[2vw]",
        "transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform hover:border-gold/50 hover:-translate-y-[0.5vw]",
        className
      )}
    >
      {/* Background Glare / Deep Void simulation */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 mix-blend-overlay pointer-events-none" />
      
      {/* Top Header */}
      <div className="relative z-10 space-y-[2vw] md:space-y-[1vw]">
        <Icon className="w-[8vw] h-[8vw] md:w-[2.5vw] md:h-[2.5vw] text-off-white/80 transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-gold" strokeWidth={1.5} />
        <div>
          <h3 className="text-[5vw] md:text-[1.5vw] font-display text-off-white tracking-tight leading-tight">
            {title}
          </h3>
          <p className="text-[3.5vw] md:text-[0.9vw] font-body text-zinc-400 mt-[1vw] max-w-sm">
            {description}
          </p>
        </div>
      </div>

      {/* RAG Content (SubItems) Revealed on Hover/Interaction */}
      <div className="relative z-10 mt-[8vw] md:mt-[4vw] pt-[2vw] border-t border-glass-border/50">
        <ul className="space-y-[1.5vw] md:space-y-[0.5vw]">
          {subItems.map((item, index) => (
            <li
              key={index}
              className="text-[3vw] md:text-[0.85vw] font-body text-zinc-500 flex items-center transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-zinc-300"
            >
              <span className="w-[1vw] md:w-[0.3vw] h-px bg-gold/50 mr-[2vw] md:mr-[0.5vw] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-[3vw] md:group-hover:w-[1vw] group-hover:bg-gold will-change-[width,background-color]" />
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
