'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParticleHighlight from '@/components/ui/ParticleHighlight';

gsap.registerPlugin(ScrollTrigger);

export default function IdentitySection() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const subTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
        // Parallax Effect for "WE BUILD"
        gsap.to(textRef.current, {
            y: 100, // Moves down slightly slower than scroll
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });

        // Fade In Entrance
        gsap.fromTo(textRef.current, 
            { opacity: 0, scale: 0.95 }, 
            { 
                opacity: 1, 
                scale: 1, 
                duration: 1.5, 
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                    end: "top 30%",
                    scrub: 1
                }
            }
        );
        
        // Subtext Reveal
        gsap.fromTo(subTextRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                scrollTrigger: {
                    trigger: subTextRef.current,
                    start: "top 85%"
                }
            }
        );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-[80vh] flex flex-col items-center justify-center bg-white px-6 overflow-hidden">
      
      {/* Background Architectural Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div className="absolute left-1/4 h-full w-[1px] bg-black" />
          <div className="absolute right-1/4 h-full w-[1px] bg-black" />
          <div className="absolute top-1/2 w-full h-[1px] bg-black" />
      </div>

      <div className="z-10 text-center max-w-[90vw]">
        
        {/* Tag */}
        <span className="block font-mono text-xs tracking-[0.2em] text-gray-400 uppercase mb-8">
            PLANO PONTUAL · EXCLUSIVO RODOBENS
        </span>

        {/* Massive Headline */}
        <h2 
            ref={textRef} 
            className="text-[12vw] md:text-[10vw] leading-[0.85] font-bold text-[#111] tracking-tighter mix-blend-exclusion"
        >
            SEU CARRO.<br/>
            <ParticleHighlight density={45} opacity={0.12} color="#007C4A" spread={1.3}>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#AA8A2E]">6 PARCELAS.</span>
            </ParticleHighlight>
        </h2>
        
        {/* Manifesto Block */}
        <div ref={subTextRef} className="mt-12 md:mt-24 max-w-2xl mx-auto border-l-2 border-[#D4AF37] pl-6 text-left">
             <p className="text-xl md:text-2xl text-gray-800 font-light leading-relaxed">
                Contemplação rápida e controlada. <span className="font-semibold">Sem juros. Sem surpresas.</span>{' '}
                O bem na sua mão em 6 ou 12 meses. Nenhum financiamento oferece isso.
            </p>
            <a href="/pontual" className="inline-block mt-8 px-8 py-3 border border-[#D4AF37] text-[#D4AF37] rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-white transition-all pointer-events-auto">
                Conhecer o Pontual →
            </a>
        </div>
      </div>
    </section>
  );
}
