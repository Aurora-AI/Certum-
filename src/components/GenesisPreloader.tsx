"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function GenesisPreloader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 1.5, // Slow, cinematic reveal ("Surgir")
          ease: "power2.inOut",
          onComplete: onComplete
        });
      }
    });

    // Initial Set
    gsap.set([logoRef.current, textRef.current], { opacity: 0, y: 20 });

    // 1. Enter
    tl.to(logoRef.current, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })
      .to(textRef.current, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.8");

    // 2. Hold for reading ("Curiosity")
    tl.to({}, { duration: 1.0 });

    // 3. Fade Out sequence starts via onComplete above

  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center pointer-events-none"
    >
      {/* Main Logo (Solid) */}
      <img 
        ref={logoRef}
        src="/assets/nano-banana/certum_logo_watermark.png" 
        alt="Certum" 
        className="w-32 h-32 md:w-48 md:h-48 object-contain mb-8"
      />

      <p 
        ref={textRef}
        className="text-sm md:text-lg text-white/60 tracking-[0.3em] font-light uppercase"
      >
        Consórcio <span className="text-[#ecb613] mx-2">•</span> Seguros <span className="text-[#ecb613] mx-2">•</span> Wealth
      </p>
      
      {/* Subtle Grain/Noise could go here for "Curiosity/Clima" */}
      <div className="absolute inset-0 z-[-1] opacity-60 bg-[radial-gradient(circle_at_center,rgba(50,50,50,0.2),transparent_70%)]" />
    </div>
  );
}
