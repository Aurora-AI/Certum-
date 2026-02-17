'use client';

import { useRef, useEffect } from 'react';

interface SpectralPressureProps {
  children: React.ReactNode;
  /**
   * Radius of influence in pixels.
   * @default 300
   */
  radius?: number;
  /**
   * Strength of the displacement.
   * Trustware Limit: Keep subtle. If it breaks layout, it's failed.
   * @default 15
   */
  strength?: number;
  className?: string;
  disableOnMobile?: boolean;
}

/**
 * FX-01: Spectral Pressure Field
 * Fenômeno quebrado: Pressão atmosférica localizada invisível.
 * Base matemática: Campo escalar radial com decaimento exponencial.
 * Agente dominante: Beta (campo analítico)
 */
export default function SpectralPressure({
  children,
  radius = 300,
  strength = 15,
  className = '',
  disableOnMobile = true
}: SpectralPressureProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Check if reduced motion is preferred
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    if (disableOnMobile && window.innerWidth < 768) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !contentRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dist = Math.sqrt(
        Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
      );

      // Physics: Exponential Falloff
      // P(r) = A * e^(-k r²)
      // We simplify to a normalized 0-1 range based on radius for CSS performance
      if (dist < radius) {
        const factor = 1 - (dist / radius); // Linear falloff for predictability in UI
        const power = Math.pow(factor, 2); // Exponential feel

        const dirX = (e.clientX - centerX) / dist;
        const dirY = (e.clientY - centerY) / dist;

        // Displace AWAY from cursor (Pressure)
        const moveX = -dirX * strength * power;
        const moveY = -dirY * strength * power;

        contentRef.current.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) scale(${1 + (power * 0.02)})`;
      } else {
        // Reset
        contentRef.current.style.transform = 'translate3d(0, 0, 0) scale(1)';
      }
    };

    const container = containerRef.current;
    // We attach to window to detect "pressure" even before entering the element
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [radius, strength, disableOnMobile]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div ref={contentRef} className="transition-transform duration-100 ease-out will-change-transform">
        {children}
      </div>
    </div>
  );
}
