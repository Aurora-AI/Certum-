"use client";

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticButton from '@/components/ui/MagneticButton';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

// --- REVEAL COMPONENT (Exo Ape Style: translateY + clip mask) ---
const LineReveal = ({ 
    children, 
    delay = 0, 
    className = "" 
}: { 
    children: React.ReactNode; 
    delay?: number; 
    className?: string;
}) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(innerRef.current,
                { yPercent: 100, opacity: 0 },
                {
                    yPercent: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    delay,
                    scrollTrigger: {
                        trigger: wrapperRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            );
        }, wrapperRef);
        return () => ctx.revert();
    }, [delay]);

    return (
        <div ref={wrapperRef} className={`overflow-hidden ${className}`}>
            <div ref={innerRef}>{children}</div>
        </div>
    );
};

// --- PARAGRAPH REVEAL (Fade + subtle Y) ---
const ParagraphReveal = ({ 
    children, 
    delay = 0 
}: { 
    children: React.ReactNode; 
    delay?: number;
}) => {
    const ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(ref.current,
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.4,
                    ease: "power2.out",
                    delay,
                    scrollTrigger: {
                        trigger: ref.current,
                        start: "top 88%",
                        toggleActions: "play none none none"
                    }
                }
            );
        }, ref);
        return () => ctx.revert();
    }, [delay]);

    return <div ref={ref}>{children}</div>;
};


const AboutManifesto = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const breachRef = useRef<HTMLDivElement>(null);
    
    // Act I: A Realidade (Cold/Warm Sandwich)
    const frame1Ref = useRef<HTMLDivElement>(null);
    const photo1Ref = useRef<HTMLDivElement>(null);
    
    // Act II: O Manifesto (Restored)
    const frame2Ref = useRef<HTMLDivElement>(null);
    const photo2Ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            // DAWN BREACH: The transition from Hero to Manifesto
            gsap.fromTo(breachRef.current,
                { 
                    clipPath: "inset(20% 10% 0% 10% round 40px 40px 0 0)",
                    y: 100
                },
                {
                    clipPath: "inset(0% 0% 0% 0% round 0px 0px 0 0)",
                    y: 0,
                    ease: "power2.inOut",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "top 20%",
                        scrub: 1.2
                    }
                }
            );

            // ACT I PHYSICS: A Realidade
            const tl1 = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%", // Start much earlier (when section enters bottom quarter)
                    end: "top 40%",   // Finish before it hits center
                    scrub: 1,         // Faster response
                }
            });

            // Start at scale 0.7 (70%) to match the video size (hidden behind it)
            // No opacity fade - it starts visible but occluded
            tl1.fromTo(frame1Ref.current, 
                { scale: 0.7 },
                { scale: 1, ease: "power2.out" } // Changed ease for smoother "pop"
            );

            tl1.fromTo(photo1Ref.current,
                { scale: 1.1 },
                { scale: 1, ease: "power2.out" },
                "<" 
            );

            // ACT II PHYSICS: O Manifesto
            const tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "40% 75%", // Relative to section height
                    end: "60% 40%", 
                    scrub: 1,
                }
            });

            // Consistency for second container
            tl2.fromTo(frame2Ref.current, 
                { scale: 0.7, opacity: 0 }, 
                { scale: 1, opacity: 1, ease: "power2.out" }
            );

            tl2.fromTo(photo2Ref.current,
                { scale: 1.1 },
                { scale: 1, ease: "power2.out" },
                "<" 
            );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section 
            ref={sectionRef} 
            className="about-section relative w-full theme-light overflow-hidden"
            style={{ 
                marginTop: '-20vh', 
                zIndex: 10,
                backgroundColor: 'transparent'
            }}
        >
            <div ref={breachRef} className="w-full bg-[#FAFAF8] pt-[20vw] pb-[10vw]">
                
                {/* --- ACT I: PERGUNTA & SÍNTESE (Side-by-Side) --- */}
                <div className="s-grid relative items-center px-[5vw] mb-[15vw]">
                    
                    {/* LEFT: PORTAL VISUAL */}
                    <div className="col-span-12 lg:col-span-6 relative mb-[10vw] lg:mb-0">
                         {/* CLICKABLE PORTAL WRAPPER */}
                         <a href="#simulator" className="group block cursor-pointer">
                            {/* Standardized Width to match second container (35vw) */}
                            <div className="portal-container relative w-full md:w-[35vw] mx-auto lg:mx-0" style={{ aspectRatio: '9/16' }}>
                                <div ref={frame1Ref} className="portal-frame-wrapper absolute inset-0 z-10 overflow-hidden rounded-[4px] shadow-[0_20px_60px_rgba(0,0,0,0.3)] origin-center transition-transform duration-700 group-hover:scale-[1.02]">
                                     <Image
                                        src="/assets/Manifesto2.jpeg"
                                        alt="Chronos Frame"
                                        fill
                                        className="object-cover scale-[1.05]"
                                        priority
                                     />
                                     {/* Removed bg-black/10 overlay to remove 'border' effect or dimming */}
                                     <div className="absolute inset-0 group-hover:bg-transparent transition-colors duration-500"></div>
                                     
                                     {/* HOVER LABEL */}
                                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                         <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 text-white uppercase tracking-widest text-xs font-medium">
                                             Simular Agora
                                         </div>
                                     </div>
                                </div>
                                <div ref={photo1Ref} className="portal-photo-wrapper absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] z-20 overflow-hidden shadow-xl will-change-transform">
                                    <video 
                                        className="w-full h-full object-cover sepia-15 contrast-120 grayscale group-hover:grayscale-0 transition-all duration-700 will-change-transform"
                                        autoPlay muted loop playsInline
                                        src="/assets/manifesto_video_2.mp4"
                                    />
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* RIGHT: TEXT CONTENT */}
                    <div className="col-span-12 lg:col-start-8 lg:col-span-5 flex flex-col justify-center">
                        <LineReveal delay={0}>
                             <h2 className="text-[clamp(32px,4vw,64px)] leading-[1.1] tracking-[-0.02em] font-normal text-(--color-dark) mb-[3vw]">
                                E se você pudesse juntar o melhor dos dois mundos?
                             </h2>
                        </LineReveal>
                        
                        <div className="mb-[3vw]">
                             <ParagraphReveal delay={0.1}>
                                <p className="text-[clamp(16px,1.2vw,20px)] leading-[1.5] font-mono text-(--color-dark) mb-[1vw] opacity-80">
                                    35 anos. 3 imóveis pagos, 1 recebido.
                                </p>
                            </ParagraphReveal>
                            <ParagraphReveal delay={0.2}>
                                <p className="text-[clamp(16px,1.2vw,20px)] leading-[1.5] font-mono text-(--color-dark) opacity-80 mb-[2vw]">
                                    O financiamento tradicional drena 70% do seu capital em juros compostos. 
                                    Não é uma oportunidade, é uma servidão vitalícia. 
                                    Os números não mentem: <span className="text-red-900 border-b border-red-900/30">você está pagando o lucro do banco com o seu tempo.</span>
                                </p>
                            </ParagraphReveal>
                        </div>

                         <div className="pl-[2vw] border-l-2 border-amber-700/30">
                             <ParagraphReveal delay={0.3}>
                                <p className="text-[clamp(18px,1.4vw,24px)] leading-[1.4] font-normal text-(--color-dark) mb-[2vw] text-amber-900">
                                    No Plano Pontual você terá as taxas do consórcio, com a previsibilidade do financiamento. 
                                    Saiba exatamente quando você terá acesso ao seu sonho!
                                </p>
                            </ParagraphReveal>
                            <ParagraphReveal delay={0.4}>
                                <MagneticButton href="#simulator">
                                    <span className="text-[14px] tracking-[0.15em] uppercase text-(--color-dark) font-bold group-hover:text-amber-700 transition-colors">
                                        Simular Agora
                                    </span>
                                </MagneticButton>
                            </ParagraphReveal>
                        </div>
                    </div>
                </div>

                {/* --- ACT II: O MANIFESTO (RESTORED) --- */}
                <div className="s-grid relative items-center px-[5vw]">
                     {/* --- PORTAL COLUMN (Right on Desktop to alternate) --- */}
                     <div className="col-span-12 md:col-start-2 md:col-span-12 lg:col-start-2 lg:col-span-6 relative mb-[10vw] md:mb-0 order-1 lg:order-1">
                         <a href="#about" className="group block cursor-pointer">
                            <div className="portal-container relative w-full md:w-[35vw] mx-auto md:mx-0" style={{ aspectRatio: '9/16' }}>
                                {/* THE FRAME */}
                                <div ref={frame2Ref} className="portal-frame-wrapper absolute inset-0 z-10 overflow-hidden rounded-[4px] shadow-[0_20px_60px_rgba(0,0,0,0.3)] origin-center transition-transform duration-700 group-hover:scale-[1.02]">
                                     <Image
                                        src="/assets/Manifesto1.jpeg"
                                        alt="Manifesto Seed"
                                        fill
                                        className="object-cover scale-[1.05] opacity-80"
                                    />
                                     <div className="absolute inset-0 bg-gold/10 pointer-events-none group-hover:bg-transparent transition-colors duration-500"></div>
                                      {/* HOVER LABEL */}
                                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                         <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 text-white uppercase tracking-widest text-xs font-medium">
                                             Ler Manifesto
                                         </div>
                                     </div>
                                </div>

                                {/* THE SEED */}
                                <div ref={photo2Ref} className="portal-photo-wrapper absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] z-20 overflow-hidden shadow-xl will-change-transform">
                                    <video 
                                        className="w-full h-full object-cover contrast-110 saturate-110 will-change-transform"
                                        autoPlay muted loop playsInline
                                        src="/assets/manifesto_video1.mp4"
                                    />
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* --- TEXT COLUMN --- */}
                    <div className="col-span-12 md:col-start-9 md:col-span-4 lg:col-start-9 lg:col-span-3 py-[5vw] order-2 lg:order-2">
                        <ParagraphReveal delay={0.1}>
                            <div className="flex items-center gap-[10px] mb-[3vw]">
                                <span className="text-[14px] text-(--color-dark) opacity-40 leading-none">+</span>
                                <span className="text-[clamp(10px,0.7vw,14px)] uppercase tracking-[0.2em] text-(--color-dark) opacity-60 font-medium">
                                    A Tese
                                </span>
                            </div>
                        </ParagraphReveal>

                        <ParagraphReveal delay={0.2}>
                            <p className="text-[clamp(20px,1.6vw,32px)] leading-[1.3] font-normal text-(--color-dark) mb-[2.5vw]">
                                A verdadeira riqueza não grita. Ela espera. Em um cenário de erosão monetária, o Consórcio 
                                deixa de ser uma compra para se tornar um protocolo de alavancagem assimétrica.
                            </p>
                        </ParagraphReveal>

                        <ParagraphReveal delay={0.35}>
                            <p className="text-[clamp(14px,1.1vw,18px)] leading-[1.6] text-(--color-dark) opacity-60 mb-[4vw]">
                                Transformamos fluxo de caixa em legado.
                            </p>
                        </ParagraphReveal>

                        <ParagraphReveal delay={0.45}>
                            <MagneticButton href="#contact">
                                <span className="text-[clamp(10px,0.75vw,14px)] tracking-[0.15em] uppercase text-(--color-dark)">
                                    Iniciar Arquitetura
                                </span>
                            </MagneticButton>
                        </ParagraphReveal>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default AboutManifesto;
