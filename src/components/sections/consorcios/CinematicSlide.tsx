'use client';

import React from 'react';
import Link from 'next/link';

interface CinematicSlideProps {
  title: string;
  subtitle: string;
  description: string;
  color: string;
  active: boolean;
  phase: 'entrance' | 'depth' | 'morph' | 'explosion' | 'reconstruction';
}

export default function CinematicSlide({
  title,
  subtitle,
  description,
  color,
  active,
  phase
}: CinematicSlideProps) {
  if (!active) return null;

  return (
    <div className="absolute inset-0 flex flex-col items-start justify-center text-left px-12 md:px-24 pointer-events-none">
      <div className="max-w-2xl space-y-8">
        
        {/* Hierarchy 1: Intro / Headline */}
        <div className={`transition-all duration-1000 ease-out transform
          ${phase === 'entrance' ? 'opacity-100 translate-y-0 scale-100 blur-0' : 
            phase === 'depth' ? 'opacity-80 -translate-y-8 scale-95 blur-[2px]' :
            'opacity-0 translate-y-12 scale-110 blur-xl'}`}
        >
          <span className="inline-block px-3 py-1 bg-black/5 border border-black/10 text-[10px] tracking-[0.3em] uppercase rounded-full mb-6" style={{ color }}>
            {subtitle}
          </span>
          <h2 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[0.9] text-black selection:bg-black selection:text-white">
            {title.split(' ').map((word, i) => (
              <span key={i} className="block">{word}</span>
            ))}
          </h2>
        </div>

        {/* Hierarchy 2: Deep Info */}
        <div className={`transition-all duration-1000 delay-100 ease-out
          ${phase === 'depth' ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-4 blur-sm'}`}
        >
          <p className="text-lg md:text-xl text-black/70 font-light leading-relaxed">
            {description}
          </p>
        </div>

        {/* Hierarchy 3: Action (CTA) */}
        <div className={`transition-all duration-1000 delay-300 ease-out pointer-events-auto
          ${phase === 'reconstruction' || phase === 'entrance' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <Link 
            href="#contato"
            className="group inline-flex items-center px-6 py-3 bg-black text-white rounded-full text-sm font-medium tracking-tight hover:bg-opacity-90 transition-all"
          >
            Explorar Tecnologia
            <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

      </div>
      
      {/* Visual Phase Indicator (Subtle Debug/UX) */}
      <div className="absolute bottom-12 left-12 flex flex-col gap-2 opacity-10 hover:opacity-100 transition-opacity">
        <div className="flex items-center gap-2">
            <div className={`w-1 h-1 rounded-full ${phase === 'entrance' ? 'bg-black scale-125' : 'bg-gray-300'}`} />
            <span className="text-[8px] tracking-widest uppercase font-mono text-black">Entrance</span>
        </div>
        <div className="flex items-center gap-2">
            <div className={`w-1 h-1 rounded-full ${phase === 'depth' ? 'bg-black scale-125' : 'bg-gray-300'}`} />
            <span className="text-[8px] tracking-widest uppercase font-mono text-black">Depth</span>
        </div>
        <div className="flex items-center gap-2">
            <div className={`w-1 h-1 rounded-full ${phase === 'morph' ? 'bg-black scale-125' : 'bg-gray-300'}`} />
            <span className="text-[8px] tracking-widest uppercase font-mono text-black">Morph</span>
        </div>
        <div className="flex items-center gap-2">
            <div className={`w-1 h-1 rounded-full ${phase === 'explosion' ? 'bg-black scale-125' : 'bg-gray-300'}`} />
            <span className="text-[8px] tracking-widest uppercase font-mono text-black">Explosion</span>
        </div>
        <div className="flex items-center gap-2">
            <div className={`w-1 h-1 rounded-full ${phase === 'reconstruction' ? 'bg-black scale-125' : 'bg-gray-300'}`} />
            <span className="text-[8px] tracking-widest uppercase font-mono text-black">Reconstruction</span>
        </div>
      </div>

    </div>
  );
}
