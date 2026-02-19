"use client";

import React, { useRef, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
    { id: "01", title: "Alavancagem Patrimonial", subtitle: "Imóveis, Terrenos e Construção", meta: "High-Ticket Real Estate", imageColor: "#4a4a4a" },
    { id: "02", title: "Mobilidade Premium", subtitle: "Automóveis de Luxo e Blindados", meta: "Luxury Automotive", imageColor: "#5c5c5c" },
    { id: "03", title: "Eficiência Operacional", subtitle: "Caminhões, Maquinário e Frotas", meta: "Heavy Asset Management", imageColor: "#6e6e6e" },
    { id: "04", title: "Blindagem de Capital", subtitle: "Seguros Corporativos e Sucessão", meta: "Wealth Protection", imageColor: "#808080" }
];

const ServicesList = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const revealImgRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Mouse Follower Setup
            const xTo = gsap.quickTo(revealImgRef.current, "x", { duration: 0.6, ease: "power3", anchor: 0.5 });
            const yTo = gsap.quickTo(revealImgRef.current, "y", { duration: 0.6, ease: "power3", anchor: 0.5 });

            // Shared mouse move handler
            const handleMouseMove = (e: MouseEvent) => {
                if (!revealImgRef.current) return;
                xTo(e.clientX);
                yTo(e.clientY);
            };

            // Add Listener
            window.addEventListener("mousemove", handleMouseMove);

            // AUTO-HIDE MECHANISM: Force hide lens when scrolling away
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                onLeave: () => {
                    gsap.to(revealImgRef.current, { scale: 0, opacity: 0, duration: 0.3, overwrite: true });
                    setActiveIndex(null);
                },
                onLeaveBack: () => {
                    gsap.to(revealImgRef.current, { scale: 0, opacity: 0, duration: 0.3, overwrite: true });
                    setActiveIndex(null);
                }
            });

            // Return cleanup function for the listener specifically
            return () => {
                window.removeEventListener("mousemove", handleMouseMove);
            };

        }, containerRef);

        // React Cleanup: Revert GSAP + Remove Listener (redundancy safety)
        return () => ctx.revert();
    }, []);

    // Handle Hover Reveal
    const handleMouseEnter = (index: number) => {
        setActiveIndex(index);
        gsap.to(revealImgRef.current, { scale: 1, opacity: 1, duration: 0.4, ease: "power2.out", overwrite: true });
    };

    const handleMouseLeave = () => {
        setActiveIndex(null);
        gsap.to(revealImgRef.current, { scale: 0, opacity: 0, duration: 0.3, ease: "power2.in", overwrite: true });
    };

    return (
        <section ref={containerRef} className="services-section s-grid relative w-full bg-[#0d0e13] text-light" style={{paddingTop: '10vw', paddingBottom: '10vw'}}>
            
            {/* Context Label */}
            <div className="col-span-12 lg:col-start-2 lg:col-span-3 mb-[8vw] lg:mb-[4vw]">
                <span className="text-label block opacity-60 tracking-widest text-xs uppercase" style={{ color: 'var(--color-accent)' }}>
                    /// 03. Expertise
                </span>
            </div>

            {/* List Container */}
            <div className="service-list-container col-span-12 lg:col-start-5 lg:col-span-8 flex flex-col group relative z-20">
                
                {services.map((service, index) => (
                    <div 
                        key={service.id}
                        className="service-item relative py-[3vw] flex justify-between items-center cursor-pointer border-t border-white/10 last:border-b"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="service-header flex items-center">
                            <span className="service-num text-[1vw] mr-[2vw] font-mono text-accent">
                                {service.id}
                            </span>
                            <div>
                                <h3 className="service-title text-[6vw] lg:text-[4vw] font-light text-white m-0 tracking-tight transition-transform duration-400">
                                    {service.title}
                                </h3>
                                <p className="service-subtitle">
                                    {service.subtitle}
                                </p>
                            </div>
                        </div>
                        <div className="service-arrow text-[2vw] opacity-0 -translate-x-5 transition-all duration-400 group-hover:opacity-100 group-hover:translate-x-0">
                            →
                        </div>
                        
                        {/* SEO Metadata */}
                        <meta itemProp="serviceType" content={service.meta} />
                    </div>
                ))}

            </div>

            {/* Floating Lens ("Óculos") Reveal */}
            <div 
                ref={revealImgRef}
                className="fixed top-0 left-0 w-[24vw] h-[16vw] pointer-events-none z-10 rounded-full opacity-0 scale-0"
                style={{
                    background: 'rgba(255, 255, 255, 0.03)', // Quase transparente
                    backdropFilter: 'blur(6px)', // Efeito de lente
                    border: '1px solid rgba(255, 255, 255, 0.15)', // Borda fina
                    boxShadow: '0 0 40px rgba(255, 255, 255, 0.05), inset 0 0 20px rgba(255, 255, 255, 0.02)', // Glow sutil
                    transform: 'translate(-50%, -50%)' // Garante centralização no cursor
                }}
            >
                {/* Micro-Noise Texture for Glass Realism */}
                <div className="absolute inset-0 opacity-[0.2] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat rounded-full mix-blend-overlay"></div>
            </div>

        </section>
    );
};

export default ServicesList;
