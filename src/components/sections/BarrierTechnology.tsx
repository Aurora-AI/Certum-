'use client';

import { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParticleHighlight from '@/components/ui/ParticleHighlight';

gsap.registerPlugin(ScrollTrigger);

// --- 1. Sub-Component: Glass Card (Sanctuary Block) ---
const GlassCard = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
    <div 
        className={`glass-card relative overflow-hidden rounded-3xl border border-white/40 bg-white/60 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${className}`}
        data-delay={delay}
    >
        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/80 via-transparent to-transparent opacity-50 pointer-events-none" />
        <div className="relative z-10 p-8 h-full flex flex-col">
            {children}
        </div>
    </div>
);

// --- 2. Sub-Component: Liquid Sphere (The Guardian) ---
const LiquidSphere = () => {
    return (
        <Canvas 
            className="w-full h-full pointer-events-auto"
            dpr={[1, 1.5]} // Sentinel: Clamp pixel ratio for performance
            gl={{ powerPreference: "high-performance", antialias: true, alpha: true }}
        >
            <Environment preset="studio" />
            <ambientLight intensity={0.8} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <Sphere args={[1, 64, 64]} scale={2.5}>
                    <MeshDistortMaterial 
                        color="#ffffff" 
                        envMapIntensity={1} 
                        clearcoat={1} 
                        clearcoatRoughness={0} 
                        metalness={0.1} 
                        roughness={0}
                        distort={0.4} // Liquid effect
                        speed={2}
                        transparent
                        opacity={0.6}
                        transmission={0.5} // Glass-like
                    />
                </Sphere>
            </Float>
        </Canvas>
    );
};

// --- 3. Main Component: Barrier Technology ---
export default function BarrierTechnology() {
    const containerRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            // Animate Cards Staggered
            gsap.from(".glass-card", {
                y: 50,
                autoAlpha: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power3.out",
                immediateRender: false,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                    toggleActions: "play none none reverse"
                }
            });

            // Animate Title
            gsap.from(titleRef.current, {
                y: 30,
                autoAlpha: 0,
                duration: 1.2,
                ease: "power2.out",
                immediateRender: false,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%"
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section 
            ref={containerRef} 
            className="relative z-10 w-full min-h-screen py-32 px-4 md:px-12 bg-[#F5F5F7] text-[#1D1D1F]" // Apple-like Light Gray
            id="barrier-tech"
        >
            {/* Background Narrative: Gentle Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF] to-[#F5F5F7] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* Header (Intro) */}
                <div className="mb-20 text-center md:text-left">
                    <span className="inline-block px-4 py-1 rounded-full bg-[#E8E8ED] text-[#86868B] text-sm font-medium tracking-wide mb-4">
                        QUEM NOS SUSTENTA
                    </span>
                    <h2 ref={titleRef} className="text-5xl md:text-7xl font-bold tracking-tight text-[#1D1D1F] mb-6">
                        <ParticleHighlight density={50} opacity={0.12} spread={1.2}>Rodobens.</ParticleHighlight> <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007C4A] to-[#00441F] opacity-90">
                            Desde 1949.
                        </span>
                    </h2>
                    <p className="text-xl md:text-2xl text-[#86868B] max-w-2xl font-light">
                        Uma das maiores administradoras de consórcios do Brasil. 
                        Mais de 3 mil pontos de venda. 40+ seguradoras parceiras.
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[800px]">
                    
                    {/* Card 1: Solidez (Visual Anchor) */}
                    <GlassCard className="md:col-span-1 md:row-span-2 bg-gradient-to-b from-[#FFFFFF] to-[#F2F2F7]">
                        <h3 className="text-2xl font-semibold mb-2 text-[#1D1D1F]">Solidez</h3>
                        <p className="text-[#86868B] text-sm mb-8">75+ anos construindo patrimônios no Brasil.</p>
                        <div className="flex-1 w-full relative min-h-[300px]">
                            <div className="absolute inset-0 rounded-2xl overflow-hidden">
                                <LiquidSphere />
                            </div>
                        </div>
                    </GlassCard>

                    {/* Card 2: Escala */}
                    <GlassCard className="md:col-span-2 md:row-span-1 flex flex-row items-center justify-between p-12">
                         <div className="max-w-lg">
                            <h3 className="text-3xl font-semibold mb-4 text-[#1D1D1F]">Escala Nacional</h3>
                            <p className="text-lg text-[#86868B]">
                                <ParticleHighlight density={25} opacity={0.12} color="#007C4A"><span className="text-[#007C4A] font-medium">+1.9 milhão</span></ParticleHighlight> de cotas vendidas. <ParticleHighlight density={20} opacity={0.12} color="#007C4A"><span className="text-[#007C4A] font-medium">+530 mil</span></ParticleHighlight> sonhos realizados. 
                                Resultados que só quem tem 75 anos de mercado entrega.
                            </p>
                         </div>
                         <div className="hidden md:block w-32 h-32 bg-white/40 rounded-full blur-2xl animate-pulse" />
                    </GlassCard>

                    {/* Card 3: Regulado */}
                    <GlassCard className="md:col-span-1 md:row-span-1 bg-white">
                        <div className="w-12 h-12 rounded-xl bg-[#E8F2FF] text-[#007AFF] flex items-center justify-center mb-6">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Regulado</h3>
                        <p className="text-[#86868B]">Autorizado e fiscalizado pelo Banco Central do Brasil.</p>
                    </GlassCard>

                    {/* Card 4: Reconhecido (Dark) */}
                    <GlassCard className="md:col-span-1 md:row-span-1 bg-[#1D1D1F] text-white">
                        <div className="h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-white">Reconhecido</h3>
                                <p className="text-gray-400">Top 3 Reclame Aqui · MESC 2025</p>
                            </div>
                            <div className="mt-8 text-4xl font-mono font-bold">
                                <ParticleHighlight density={30} opacity={0.2} color="#30D9C4">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#30D9C4] to-[#007C4A]">+33 mil</span>
                                </ParticleHighlight>
                            </div>
                            <p className="text-gray-500 text-xs mt-1">clientes ativos em seguros</p>
                        </div>
                    </GlassCard>

                </div>
            </div>
        </section>
    );
}

// Add global styles for Poppins if not already there, or ensure font-nfinite maps to it.
