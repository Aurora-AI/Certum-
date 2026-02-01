"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export function PillarsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Elementos Pilar 1
  const p1ContainerRef = useRef<HTMLDivElement>(null);
  const p1ImageRef = useRef<HTMLDivElement>(null);
  const p1TextRef = useRef<HTMLDivElement>(null);
  
  // Elementos Pilar 2
  const p2ContainerRef = useRef<HTMLDivElement>(null);
  const p2ImageRef = useRef<HTMLDivElement>(null);
  const p2TextRef = useRef<HTMLDivElement>(null);

  // Vídeos Refs (para forçar play)
  const v1Ref = useRef<HTMLVideoElement>(null);
  const v2Ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // 1. FORCE VIDEO PLAY
    [v1Ref.current, v2Ref.current].forEach(v => {
        if (v) { v.muted = true; v.play().catch(e => console.error(e)); }
    });

    const ctx = gsap.context(() => {
      const isDesktop = window.innerWidth > 1024;

      if (isDesktop) {
        
        // === GLOBAL ATMOSPHERE ===
        // O fundo muda de cor suavemente ao passar pela secção
        gsap.to("body", {
            backgroundColor: "#e8e6e1", // Um tom mais "pedra quente"
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 50%",
                end: "bottom 50%",
                toggleActions: "play reverse play reverse"
            }
        });

        // === PILAR 1: IMÓVEL (PARALLAX PESADO) ===
        
        // A Imagem move-se MAIS DEVAGAR que o scroll (0.8x) -> Sensação de peso
        gsap.to(p1ContainerRef.current, {
            yPercent: 20, 
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1 // Inércia (Exo Ape feel)
            }
        });

        // A Foto dentro da moldura faz Zoom Out (1.2 -> 1.0)
        gsap.fromTo(p1ImageRef.current, 
            { scale: 1.2 },
            { 
              scale: 1.0,
              ease: "none",
              scrollTrigger: {
                trigger: p1ContainerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
              }
            }
        );

        // O Texto move-se MAIS RÁPIDO que o scroll (1.2x) -> Sensação de leveza
        gsap.to(p1TextRef.current, {
            yPercent: -30,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2
            }
        });


        // === PILAR 2: AUTO (VELOCITY) ===
        
        // A Imagem sobe rápido (Overlap)
        gsap.to(p2ContainerRef.current, {
            yPercent: -15,
            ease: "none",
            scrollTrigger: {
                trigger: p2ContainerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });

        // O Texto tenta "acompanhar" mas fica para trás
        gsap.to(p2TextRef.current, {
            yPercent: 10,
            ease: "none",
            scrollTrigger: {
                trigger: p2ContainerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5
            }
        });

      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full py-40 px-6 lg:px-12 max-w-[1920px] mx-auto overflow-hidden">
      
      <div className="flex flex-col gap-40 lg:gap-64">
        
        {/* === ROW 1: THE FORTRESS === */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
            
            {/* TEXTO (PARALLAX FAST) */}
            <div ref={p1TextRef} className="w-full lg:w-[40%] flex flex-col justify-center order-2 lg:order-1 relative z-20">
                <div className="flex items-center gap-4 mb-8">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ecb613]">Classe de Ativo A: Permanência</span>
                    <div className="h-px w-16 bg-[#181611]/30"></div>
                </div>
                <h2 className="text-6xl lg:text-8xl font-light tracking-tight leading-[0.95] mb-8 text-[#181611]">
                    A <br/><span className="font-serif italic font-medium ml-4">Fortaleza</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed max-w-sm ml-2">
                    O concreto não oscila. O imóvel é o alicerce da soberania física num mundo digital volátil.
                </p>
            </div>

            {/* MOLDURA VIVA (PARALLAX SLOW) */}
            <div ref={p1ContainerRef} className="w-full lg:w-[60%] relative group order-1 lg:order-2">
                {/* Aspect Ratio Vertical Esticado */}
                <div className="aspect-[3.5/5] relative">
                    
                    {/* VIDEO BACK (ATMOSFERA) */}
                    <div className="absolute -inset-4 lg:-inset-12 bg-gray-200 rounded-sm overflow-hidden z-0">
                         <video ref={v1Ref} muted loop playsInline className="w-full h-full object-cover opacity-40 blur-sm scale-110">
                            <source src="https://cdn.coverr.co/videos/coverr-shadow-of-plants-on-a-wall-6380/1080p.mp4" type="video/mp4" />
                         </video>
                    </div>

                    {/* IMAGEM PRINCIPAL (O ATIVO) */}
                    <div className="absolute inset-0 z-10 overflow-hidden shadow-2xl">
                        <div ref={p1ImageRef} className="w-full h-full relative">
                            <Image 
                                src="/assets/nano-banana/fortress.png" 
                                alt="Fortress"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Overlay sutil para unificar tons */}
                        <div className="absolute inset-0 bg-[#181611]/10 mix-blend-multiply"></div>
                    </div>
                    
                    {/* Floating Label (Exo Detail) */}
                    <div className="absolute -bottom-8 -left-8 z-20 bg-white p-4 shadow-xl hidden lg:block">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#181611]">Ver Territórios</span>
                    </div>
                </div>
            </div>
        </div>


        {/* === ROW 2: KINETIC ART === */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
            
            {/* MOLDURA VIVA */}
            <div ref={p2ContainerRef} className="w-full lg:w-[60%] relative group">
                <div className="aspect-[16/10] relative">
                    
                    {/* VIDEO BACK */}
                    <div className="absolute -inset-4 lg:-inset-12 bg-gray-200 rounded-sm overflow-hidden z-0">
                         <video ref={v2Ref} muted loop playsInline className="w-full h-full object-cover opacity-50 blur-sm scale-110">
                            <source src="https://cdn.coverr.co/videos/coverr-car-driving-at-night-5467/1080p.mp4" type="video/mp4" />
                         </video>
                    </div>

                    {/* IMAGEM */}
                    <div className="absolute inset-0 z-10 overflow-hidden shadow-2xl">
                        <div ref={p2ImageRef} className="w-full h-full relative">
                             <Image 
                                src="/assets/nano-banana/kinetic.png" 
                                alt="Kinetic"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Floating Label */}
                    <div className="absolute -top-6 -right-6 z-20 bg-[#ecb613] p-4 shadow-xl hidden lg:block">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#181611]">Ver Coleção</span>
                    </div>
                </div>
            </div>

            {/* TEXTO */}
            <div ref={p2TextRef} className="w-full lg:w-[40%] flex flex-col justify-center lg:items-end text-left lg:text-right relative z-20">
                <div className="flex items-center gap-4 mb-8 lg:flex-row-reverse">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ecb613]">Classe de Ativo B: Velocidade</span>
                    <div className="h-px w-16 bg-[#181611]/30"></div>
                </div>
                <h2 className="text-6xl lg:text-8xl font-light tracking-tight leading-[0.95] mb-8 text-[#181611]">
                    Arte <br/><span className="font-serif italic font-medium mr-4">Cinética</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed max-w-sm mr-2">
                    Engenharia que desafia a entropia. Preservação de valor através da raridade e do movimento.
                </p>
            </div>

        </div>

      </div>
    </section>
  );
}
