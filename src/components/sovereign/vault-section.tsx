"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function VaultSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const shieldRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
        // Animação de entrada do Bunker (Fundo escurece ou Elementos emergem)
        gsap.from(sectionRef.current, {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                toggleClass: { targets: sectionRef.current, className: "is-active" } // Opcional para CSS extra
            }
        });

        // Parallax suave no escudo abstrato
        gsap.to(shieldRef.current, {
            y: 50,
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-32 lg:py-48 bg-[#0d0b07] text-white relative overflow-hidden">
        
        {/* Abstract Glow (Ambiente) */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1a1a1a] rounded-full blur-[150px] opacity-30 pointer-events-none" />

        <div className="px-6 lg:px-12 max-w-[1800px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-20 relative z-10">
            
            <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        
                <div className="mb-8 overflow-hidden">
                    <span ref={titleRef} className="block text-[#ecb613] text-sm font-bold tracking-[0.3em] uppercase opacity-0">
                        Escudo Soberano
                    </span>
                </div>

                <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8">
                    Protegendo <br/> <span className="text-[#888]">O Eterno.</span>
                </h2>

                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
                    A verdadeira riqueza é vulnerável apenas a uma coisa: o imprevisto. 
                    Blinde o legado contra a erosão do tempo e do acaso.
                </p>

                <button className="group flex items-center gap-4 mx-auto px-8 py-4 border border-[#ecb613]/30 hover:border-[#ecb613] hover:bg-[#ecb613]/10 transition-all duration-500">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#ecb613]">Acessar o Cofre</span>
                    <span className="material-symbols-outlined text-[#ecb613] group-hover:rotate-90 transition-transform duration-500">
                        shield_lock
                    </span>
                </button>

            </div>

            {/* Abstract Graphic (CSS Animation) */}
            <div ref={shieldRef} className="relative w-64 h-64 lg:w-96 lg:h-96 flex items-center justify-center opacity-80">
                 {/* Anéis giratórios (Tailwind classes) */}
                 <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
                 <div className="absolute inset-8 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                 <div className="absolute inset-16 border border-white/5 rounded-full animate-[spin_30s_linear_infinite]"></div>
                 
                 {/* Ícone Central */}
                 <span className="material-symbols-outlined text-6xl text-white/30">
                    lock
                 </span>
            </div>
        </div>
    </section>
  );
}
