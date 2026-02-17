'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface KineticCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number; // Physics intensity (0-100)
}

/**
 * COMPONENT: KineticCard (Ghost Physics)
 * 
 * Implements "Ghost Kinetic" interaction:
 * - Laggy, fluid movement using gsap.quickTo (Verlet approximation)
 * - 3D Tilt based on mouse position
 * - Specular sheen based on angle
 */
export default function KineticCard({ 
  children, 
  className = '', 
  intensity = 20 
}: KineticCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Physics State (Mutable for performance, no re-renders)
  // Physics State (Mutable for performance, no re-renders)
  const xTo = useRef<((value: number) => void) | null>(null);
  const yTo = useRef<((value: number) => void) | null>(null);
  const rotXTo = useRef<((value: number) => void) | null>(null);
  const rotYTo = useRef<((value: number) => void) | null>(null);

  useEffect(() => {
    if (!cardRef.current || !contentRef.current || !glowRef.current) return;

    // --- SETUP PHYSICS ---
    // Using gsap.quickTo for "heavy air" inertia
    xTo.current = gsap.quickTo(cardRef.current, "x", { duration: 0.8, ease: "power3.out" });
    yTo.current = gsap.quickTo(cardRef.current, "y", { duration: 0.8, ease: "power3.out" });
    
    // Tilt physics (More responsive than position)
    rotXTo.current = gsap.quickTo(contentRef.current, "rotationX", { duration: 0.5, ease: "power2.out" });
    rotYTo.current = gsap.quickTo(contentRef.current, "rotationY", { duration: 0.5, ease: "power2.out" });

    return () => {
       // Cleanup if needed
    };
  }, [intensity]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = cardRef.current?.getBoundingClientRect();
      if (!rect || !xTo.current || !yTo.current || !rotXTo.current || !rotYTo.current || !glowRef.current) return;

      // Calculate relative position (-1 to 1)
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const percentX = (x - centerX) / centerX; // -1 to 1
      const percentY = (y - centerY) / centerY; // -1 to 1

      // 1. Position Drift (Subtle movement of the container)
      // Multiplied by intensity factor
      const driftAmount = intensity; 
      xTo.current(percentX * driftAmount);
      yTo.current(percentY * driftAmount);

      // 2. 3D Tilt (applied to content wrapper)
      const tiltAmount = intensity * 0.5;
      rotXTo.current(-percentY * tiltAmount); // Invert Y for correct tilt
      rotYTo.current(percentX * tiltAmount);

      // 3. Specular Glow (Sheen)
      // Moves opposite to mouse to simulate light source reflection
      gsap.to(glowRef.current, {
        x: x,
        y: y,
        opacity: 0.6,
        duration: 0.1, // Fast response for light
        ease: "none"
      });
  };

  const handleMouseLeave = () => {
      // Reset all physics to neutral
      if (!xTo.current || !yTo.current || !rotXTo.current || !rotYTo.current || !glowRef.current) return;
      
      xTo.current(0);
      yTo.current(0);
      rotXTo.current(0);
      rotYTo.current(0);
      
      gsap.to(glowRef.current, {
        opacity: 0,
        duration: 0.5
      });
  };

  return (
    <div 
        className={`relative perspective-1000 ${className}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
    >
      <div 
        ref={cardRef}
        className="relative transform-style-3d will-change-transform cursor-none group/card"
      >
        {/* Content Wrapper (Tilt Target) */}
        <div 
            ref={contentRef}
            className="relative overflow-hidden rounded-xl border border-white/10 bg-void/40 backdrop-blur-md shadow-2xl transition-colors duration-500 group-hover/card:border-primary/30"
        >
            {/* Satin Sheen Layer */}
            <div 
                ref={glowRef}
                className="pointer-events-none absolute -inset-full h-[200%] w-[200%] opacity-0 bg-[radial-gradient(circle_at_center,rgba(237,70,29,0.15)_0%,transparent_50%)] blur-2xl"
                style={{ transform: 'translate(-50%, -50%)' }}
            />
            
            {/* Inner Content */}
            <div className="relative z-10 p-8">
                {children}
            </div>
        </div>
      </div>
    </div>
  );
}
