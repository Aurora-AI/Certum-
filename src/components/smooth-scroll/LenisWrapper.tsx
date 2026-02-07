"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const LenisWrapper = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef<Lenis | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Initialize Lenis (Heavy Gold Config)
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.8, // Slightly heavier feel
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // 2. Sync with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // 3. FX-12 Velocity Distortion (Skew) - DISABLED FOR PERFORMANCE
    // The previous implementation of skewing the entire wrapper caused severe layout thrashing.
    // We will re-enable it only on specific elements if needed, not globally.
    
    // 3. FX-12 Velocity Distortion (Skew) - ENABLED (S-Tier)
    const updateSkew = () => {
        // Only apply on larger screens to save mobile performance
        if (window.innerWidth < 768) return;
        
        const vel = lenis.velocity;
        // Subtle skew logic (Optimized for lightness)
        const skew = Math.max(Math.min(vel * 0.02, 1.5), -1.5); 
        
        // Apply to body or specific wrapper? Applying to body is simplest for global effect
        // but wrapperRef is safer context.
        if (wrapperRef.current) {
            gsap.to(wrapperRef.current, {
                skewY: skew,
                duration: 0.8,
                ease: "power3.out",
                overwrite: "auto"
            });
        }
    };
    
    lenis.on('scroll', updateSkew);


    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);

  return (
    <div ref={wrapperRef} className="w-full min-h-screen origin-center transform-gpu">
      {children}
    </div>
  );
};
