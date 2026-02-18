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
    const frameRef = useRef<HTMLDivElement>(null);
    const photoRef = useRef<HTMLDivElement>(null);

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

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top center", 
                    end: "center center", 
                    scrub: 1.5,
                }
            });

            // THE SOVEREIGN PORTAL PHYSICS
            tl.fromTo(frameRef.current, 
                { scale: 0.75, opacity: 0 },
                { scale: 1, opacity: 1, ease: "none" }
            );

            tl.fromTo(photoRef.current,
                { scale: 1.1 },
                { scale: 1, ease: "none" },
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
            <div ref={breachRef} className="w-full bg-[#FAFAF8] pt-[20vw] pb-[15vw]">
                
                {/* HEADING BLOCK — FLUID TYPOGRAPHY */}
                <div className="mb-[10vw] px-[5vw]">
                    <LineReveal delay={0}>
                        <h2 className="text-[clamp(64px,12vw,180px)] leading-[0.85] tracking-[-0.04em] font-normal text-[var(--color-dark)]">
                            A Tese
                        </h2>
                    </LineReveal>
                </div>

                {/* RELOCATED GRID — BALANCED & CENTERED */}
                <div className="s-grid relative items-center px-[5vw] md:px-0">

                    {/* --- PORTAL COLUMN --- */}
                    <div className="col-span-12 md:col-start-2 md:col-span-12 lg:col-start-2 lg:col-span-6 relative mb-[10vw] md:mb-0">
                        <div className="portal-container relative w-full md:w-[35vw] mx-auto md:mx-0" style={{ aspectRatio: '9/16' }}>
                            
                            {/* THE FRAME */}
                            <div ref={frameRef} className="portal-frame-wrapper absolute inset-0 z-10 overflow-hidden rounded-[4px] shadow-[0_20px_60px_rgba(0,0,0,0.3)] origin-center">
                                 <Image
                                    src="/assets/Manifesto1.jpeg"
                                    alt="Manifesto Seed"
                                    fill
                                    className="object-cover scale-[1.05] opacity-80"
                                    priority
                                 />
                                 <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
                            </div>

                            {/* THE SEED */}
                            <div ref={photoRef} className="portal-photo-wrapper absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] z-20 overflow-hidden shadow-xl">
                                <video 
                                    className="w-full h-full object-cover sepia-[10%] contrast-[110%]"
                                    autoPlay muted loop playsInline
                                    src="/assets/manifesto_video1.mp4"
                                />
                            </div>
                        </div>
                    </div>

                    {/* --- TEXT COLUMN --- */}
                    <div className="col-span-12 md:col-start-9 md:col-span-4 lg:col-start-9 lg:col-span-3 py-[5vw]">
                        <ParagraphReveal delay={0.1}>
                            <div className="flex items-center gap-[10px] mb-[3vw]">
                                <span className="text-[14px] text-(--color-dark) opacity-40 leading-none">+</span>
                                <span className="text-[clamp(10px,0.7vw,14px)] uppercase tracking-[0.2em] text-(--color-dark) opacity-60 font-medium">
                                    Manifesto
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
                                Transformamos fluxo de caixa em patrimônio, eliminando a fricção dos juros 
                                bancários e garantindo a soberania do seu futuro.
                            </p>
                        </ParagraphReveal>

                        <ParagraphReveal delay={0.45}>
                            <MagneticButton href="#contact">
                                <span className="text-[clamp(10px,0.75vw,14px)] tracking-[0.15em] uppercase text-(--color-dark)">
                                    Iniciar Protocolo
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
