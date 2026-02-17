'use client';

import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { useLenis } from 'lenis/react';
import GlassMonolith from './GlassMonolith';

/**
 * COMPONENT: InfiniteLedger (V2)
 * 
 * The central axis of the Sovereign Design System.
 * - Architecture: Dual infinite columns moving in opposition.
 * - Physics: "Spectral Pressure" - items distort based on global scroll velocity.
 * - Aesthetics: V2 Lab Colors + Fluid Typography + Glass Monoliths.
 */
export default function InfiniteLedger() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [velocity, setVelocity] = useState(0);
  
  // Hook into global scroll physics (Lenis)
  useLenis(({ velocity }) => {
    // Normalize velocity for pressure (clamp between 0 and 1)
    const pressure = Math.min(Math.abs(velocity) * 0.05, 1);
    setVelocity(pressure);
  });

  // Data for the ledger (Sovereign Pillars)
  const items = [
    { title: "Wealth Architecture", desc: "Sovereign Structure", id: "01" },
    { title: "Sovereign Funds", desc: "Capital Flow", id: "02" },
    { title: "The Consortium", desc: "Network State", id: "03" },
    { title: "Asset Vault", desc: "Secured Holdings", id: "04" },
    // Duplicate for loop density
    { title: "Wealth Architecture", desc: "Sovereign Structure", id: "01-B" },
    { title: "Sovereign Funds", desc: "Capital Flow", id: "02-B" },
    { title: "The Consortium", desc: "Network State", id: "03-B" },
    { title: "Asset Vault", desc: "Secured Holdings", id: "04-B" },
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-deep-void py-[5vh] flex justify-center items-center">
      
      {/* --- Ambient Grid (V2 Spec: 1/24th units) --- */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-10 flex justify-between px-[var(--margin)]">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-[1px] h-full bg-starlight/20"></div>
        ))}
      </div>

      <div className="relative z-10 flex h-full justify-center gap-[var(--grid-unit)] w-full max-w-[90vw]">
        
        {/* --- Column 1: Ascending Stream --- */}
        <div className="w-[25vw] h-[120%] -mt-[10%] relative overflow-hidden mask-gradient-vertical">
             <div className="animate-infinite-scroll flex flex-col gap-[var(--gap-fluid)] pointer-events-auto hover:[animation-play-state:paused]">
                {[...items, ...items].map((item, i) => (
                    <GlassMonolith key={`col1-${i}`} pressure={velocity} className="w-full h-[30vh]">
                        <div className="h-full flex flex-col justify-between">
                            <span className="text-mono text-starlight/50">{item.id}</span>
                            <div>
                                <h3 className="text-h2 font-display text-starlight mb-[0.5vw] leading-none">{item.title}</h3>
                                <p className="text-mono text-xs text-starlight/60 uppercase tracking-widest">{item.desc}</p>
                            </div>
                        </div>
                    </GlassMonolith>
                ))}
             </div>
        </div>

        {/* --- Column 2: Descending Stream (Offset) --- */}
        <div className="w-[25vw] h-[120%] -mt-[10%] relative overflow-hidden mask-gradient-vertical pt-[15vh]">
             <div className="animate-infinite-scroll flex flex-col gap-[var(--gap-fluid)] pointer-events-auto hover:[animation-play-state:paused]" style={{ animationDirection: 'reverse' }}>
                {[...items, ...items].map((item, i) => (
                    <GlassMonolith key={`col2-${i}`} pressure={velocity} className="w-full h-[30vh]">
                        <div className="h-full flex flex-col justify-between">
                            <span className="text-mono text-starlight/50">{item.id}</span>
                            <div>
                                <h3 className="text-h2 font-display text-starlight mb-[0.5vw] leading-none">{item.title}</h3>
                                <p className="text-mono text-xs text-starlight/60 uppercase tracking-widest">{item.desc}</p>
                            </div>
                        </div>
                    </GlassMonolith>
                ))}
             </div>
        </div>

      </div>
      
      {/* --- Overlay Title (V2 Typography) --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none mix-blend-exclusion">
        <h2 className="text-h0 font-display text-starlight opacity-40 whitespace-nowrap">
            THE LEDGER
        </h2>
      </div>

      <style jsx>{`
        .mask-gradient-vertical {
          mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
        }
      `}</style>

    </section>
  );
}
