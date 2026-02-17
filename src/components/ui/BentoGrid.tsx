'use client';

import React from 'react';
import KineticCard from './KineticCard';

export default function BentoGrid() {
  return (
    <section className="gallery-item relative inline-flex h-screen w-screen min-w-full items-center justify-center px-8 md:px-20 bg-void">
      <div className="w-full max-w-7xl h-[80vh] flex flex-col md:flex-row gap-6">
        
        {/* Pillar 1: Wealth Architecture (Large Vertical) */}
        <div className="flex-1 flex flex-col gap-6">
            <KineticCard className="h-full" intensity={25}>
                <div className="flex flex-col h-full justify-between">
                    <div>
                        <span className="font-mono text-xs text-primary/80 mb-2 block tracking-widest">PILLAR 01</span>
                        <h3 className="font-display text-4xl text-white mb-4">Wealth <br/> Architecture</h3>
                        <p className="text-stone text-sm leading-relaxed max-w-xs">
                            Structural engineering for intergenerational capital. We build rigid frameworks for fluid markets.
                        </p>
                    </div>
                    <div className="w-full h-32 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale mix-blend-overlay rounded-lg" />
                </div>
            </KineticCard>
        </div>

        {/* Center Column (Split) */}
        <div className="flex-[1.5] flex flex-col gap-6">
            {/* Top: Sovereign Funds (Wide) */}
            <KineticCard className="flex-1" intensity={15}>
                <div className="flex flex-col md:flex-row items-center gap-8 h-full">
                     <div className="md:w-1/2">
                        <span className="font-mono text-xs text-primary/80 mb-2 block tracking-widest">PILLAR 02</span>
                        <h3 className="font-display text-4xl text-white mb-4">Sovereign <br/> Funds</h3>
                     </div>
                     <div className="md:w-1/2 text-right md:text-left">
                        <p className="text-stone text-sm leading-relaxed">
                            Access to nation-state level investment vehicles. 
                            <br/><span className="text-primary">Yield: 12.4% APY (Hist.)</span>
                        </p>
                     </div>
                </div>
                {/* Decorative Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none -z-10" />
            </KineticCard>

            {/* Bottom: Consortium (Wide) */}
            <KineticCard className="flex-1" intensity={30}>
                 <div className="flex flex-col justify-end h-full relative">
                    <div className="absolute top-0 right-0 p-4">
                        <span className="material-symbols-outlined text-stone/50 text-4xl">hub</span>
                    </div>
                    <span className="font-mono text-xs text-primary/80 mb-2 block tracking-widest">PILLAR 03</span>
                    <h3 className="font-display text-3xl text-white">The Consortium</h3>
                    <div className="mt-4 flex items-center gap-4">
                        <div className="flex -space-x-3">
                            {[1,2,3].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full border border-void bg-stone/20 backdrop-blur-sm" />
                            ))}
                        </div>
                        <span className="text-xs text-stone font-mono">128 MEMBERS ACTIVE</span>
                    </div>
                 </div>
            </KineticCard>
        </div>

        {/* Pillar 3: Analytics (Narrow Vertical) */}
        <div className="flex-[0.5] hidden md:flex flex-col gap-6">
             <KineticCard className="h-full bg-primary/5 border-primary/20" intensity={10}>
                <div className="h-full flex flex-col items-center justify-center gap-8">
                    <div className="w-px h-24 bg-gradient-to-b from-transparent via-primary to-transparent" />
                    <span className="text-xs font-mono text-primary rotate-90 whitespace-nowrap tracking-[0.2em]">LIVE DATA</span>
                    <div className="w-px h-24 bg-gradient-to-b from-transparent via-primary to-transparent" />
                </div>
             </KineticCard>
        </div>

      </div>
    </section>
  );
}
