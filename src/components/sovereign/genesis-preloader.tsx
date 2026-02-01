"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function GenesisPreloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Bloqueia o scroll durante o preloader
    document.body.style.overflow = "hidden";

    // Sequência de Animação
    tl.to(textRef.current, { 
      y: 0, 
      opacity: 1,
      duration: 1.2, 
      ease: "power4.out", 
      delay: 0.2 
    })
    .to(lineRef.current, { 
      width: "100%", 
      duration: 1, 
      ease: "power2.inOut" 
    })
    .to(containerRef.current, { 
      y: "-100%", 
      duration: 1.2, 
      ease: "power4.inOut", 
      delay: 0.4,
      onComplete: () => {
        // Libera o scroll
        document.body.style.overflow = "";
      }
    });

    return () => {
      // Cleanup se necessário
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-[#0d0b07] flex flex-col items-center justify-center text-primary"
    >
                <div className="overflow-hidden mb-2">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
                        <span className="block translate-y-full animate-text-reveal">
                            PROTOCOL: GENESIS
                        </span>
                    </h1>
                </div>
                <div className="overflow-hidden">
                     <p className="text-sm md:text-base font-mono text-[#ecb613] tracking-widest uppercase">
                        <span className="block translate-y-full animate-text-reveal delay-100">
                           SOVEREIGN ARCHITECTURE LOADING...
                        </span>
                     </p>
                </div>
      <div 
        ref={lineRef} 
        className="w-0 h-[2px] bg-primary shadow-[0_0_20px_rgba(236,182,19,0.5)]" 
      />
    </div>
  );
}
