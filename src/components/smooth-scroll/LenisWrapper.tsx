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

    // 3. FX-12 Velocity Distortion (Skew)
    // We apply skew to a wrapper, or the body if possible, but wrapper is safer for React.
    // However, skewing the entire layout can be jarring if not done carefully.
    // The requirement is "O conteúdo estica levemente no eixo Y".
    
    // We'll use a GSAP ticker to monitor velocity and apply skew
    const updateSkew = () => {
        if (!wrapperRef.current) return;
        
        // Mobile Check: Disable on small screens
        if (window.innerWidth < 768) {
            gsap.set(wrapperRef.current, { skewY: 0 });
            return;
        }

        const vel = lenis.velocity;
        // Limit skew to avoid breaking layout
        const skew = Math.max(Math.min(vel * 0.05, 5), -5); 
        
        gsap.to(wrapperRef.current, {
            skewY: skew,
            duration: 0.8,
            ease: "power3.out",
            overwrite: "auto"
        });
    };
    
    // Attach listener to lenis scroll event for lighter updates, 
    // or use ticker if we want constant monitoring. 
    // Lenis 'scroll' event is sufficient.
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
