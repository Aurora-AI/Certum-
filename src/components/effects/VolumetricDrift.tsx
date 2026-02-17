'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface VolumetricDriftProps {
  children: React.ReactNode;
  /**
   * Intensity of the drift effect (Atmospheric Density).
   * @default 15
   */
  intensity?: number;
  /**
   * Time scale for the noise (Wind Speed).
   * @default 0.5
   */
  timeScale?: number;
  className?: string;
}

/**
 * FX-02: Volumetric Drift Memory (Reconstructed)
 * 
 * **Alpha Visionary**: Applied "Atmospheric Turbulence" logic using pseudo-noise (Shader-like mathematics).
 * **Beta Physicist**: Implemented "Ghost Kinetic" inertia using GSAP QuickTo for performant, interruptible physics.
 * **Gamma Engineer**: Optimized using `gsap.ticker` for non-blocking 60fps execution.
 */
export default function VolumetricDrift({
  children,
  intensity = 15,
  timeScale = 0.5,
  className = '',
}: VolumetricDriftProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Physics Context (Beta)
  const xTo = useRef<((value: number) => void) | null>(null);
  const yTo = useRef<((value: number) => void) | null>(null);
  
  // State for Atmospheric Noise (Alpha)
  const time = useRef(0);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    time.current = Math.random() * 100;

    if (!contentRef.current) return;

    // Beta: Setup GSAP QuickTo for "Heavy Air" Inertia
    xTo.current = gsap.quickTo(contentRef.current, "x", { 
      duration: 1.2, 
      ease: "power3.out" // Disney Principle: Slow In/Out 
    });
    yTo.current = gsap.quickTo(contentRef.current, "y", { 
      duration: 1.2, 
      ease: "power3.out" 
    });

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize (-1 to 1) for "Sovereign" centering
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      
      mouse.current = { x: nx, y: ny };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Alpha: Atmospheric Simulation Loop
    const tick = (_delta: number, _frame: number) => {
      // Increment time (Wind)
      time.current += 0.005 * timeScale;

      // Pseudo-Perlin Noise (Shader Logic in JS)
      // Sin/Cos layering to create non-repeating "organic" drift
      const noiseX = Math.sin(time.current) * Math.cos(time.current * 0.7) * intensity;
      const noiseY = Math.cos(time.current * 0.8) * Math.sin(time.current * 1.2) * intensity;

      // Interaction Vector (Mouse Repulsion/Attraction)
      const mouseX = mouse.current.x * (intensity * 1.5); // Mouse has 1.5x gravity of noise
      const mouseY = mouse.current.y * (intensity * 1.5);

      // Final Composite Force
      const finalX = noiseX + mouseX;
      const finalY = noiseY + mouseY;

      // Apply to Physics Engine
      if (xTo.current && yTo.current) {
        xTo.current(finalX);
        yTo.current(finalY);
      }
    };

    // Gamma: Attach to GSAP Ticker for single-raf efficiency
    gsap.ticker.add(tick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      gsap.ticker.remove(tick);
    };
  }, [intensity, timeScale]);

  return (
    <div ref={containerRef} className={`${className} relative`}>
      <div ref={contentRef} className="will-change-transform">
        {children}
      </div>
    </div>
  );
}
