'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface GlassMonolithProps {
  children?: React.ReactNode;
  className?: string;
  pressure?: number; // 0 to 1, represents scroll velocity intensity
}

/**
 * COMPONENT: GlassMonolith
 * 
 * "The Glass Monolith" - A Volume of Distorted Glass.
 * Replaces the KineticCard for the V2 Sovereign System.
 * 
 * Physics:
 * - Responds to 'pressure' prop (scroll velocity) by slightly compressing visuals.
 * - Uses border-image/lab colors from V2 tokens.
 */
export default function GlassMonolith({ children, className = '', pressure = 0 }: GlassMonolithProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // React to pressure changes
  useGSAP(() => {
    if (!cardRef.current) return;
    
    // Scale X slightly down, Scale Y slightly up to simulate "stretching" under speed
    // This is the "Spectral Pressure" visual effect
    const stretch = 1 + (pressure * 0.05);
    const compress = 1 - (pressure * 0.02);
    
    gsap.to(cardRef.current, {
      scaleY: stretch,
      scaleX: compress,
      duration: 0.4,
      ease: "power2.out",
      overwrite: "auto"
    });
    
  }, [pressure]);

  return (
    <div 
      ref={cardRef}
      className={`
        relative overflow-hidden
        bg-deep-void/40 backdrop-blur-[20px] 
        border border-glass-border
        rounded-[var(--radius-physics)]
        transition-all duration-500 ease-out
        group
        ${className}
      `}
    >
      {/* Noise Overlay (Simulates 'Atomized Air') */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" 
           style={{ backgroundImage: 'url("/noise.png")' }}></div>
      
      {/* Interaction Sheen (Subtle) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />

      {/* Content Plane */}
      <div className="relative z-20 h-full w-full p-[var(--gap-fluid)]">
        {children}
      </div>
    </div>
  );
}
