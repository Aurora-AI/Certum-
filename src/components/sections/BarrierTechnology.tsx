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
                        NOSSOS PRODUTOS
                    </span>
                    <h2 ref={titleRef} className="text-5xl md:text-7xl font-bold tracking-tight text-[#1D1D1F] mb-6">
                        Consórcio. <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007C4A] to-[#00441F] opacity-90">
                            Sem Juros.
                        </span>
                    </h2>
                    <p className="text-xl md:text-2xl text-[#86868B] max-w-2xl font-light">
                        A forma mais inteligente de adquirir seu bem. 
                        Planejamento financeiro sem juros abusivos.
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[800px]">
                    
                    {/* Card 1: Como Funciona (Visual Anchor) */}
                    <GlassCard className="md:col-span-1 md:row-span-2 bg-gradient-to-b from-[#FFFFFF] to-[#F2F2F7]">
                        <h3 className="text-2xl font-semibold mb-2 text-[#1D1D1F]">Como Funciona</h3>
                        <p className="text-[#86868B] text-sm mb-8">Planejamento financeiro inteligente para realizar seus objetivos.</p>
                        <div className="flex-1 w-full relative min-h-[300px]">
                            <div className="absolute inset-0 rounded-2xl overflow-hidden">
                                <LiquidSphere />
                            </div>
                        </div>
                    </GlassCard>

                    {/* Card 2: Vantagens */}
                    <GlassCard className="md:col-span-2 md:row-span-1 flex flex-row items-center justify-between p-12">
                         <div className="max-w-lg">
                            <h3 className="text-3xl font-semibold mb-4 text-[#1D1D1F]">Vantagens vs Financiamento</h3>
                            <p className="text-lg text-[#86868B]">
                                <ParticleHighlight density={25} opacity={0.12} color="#007C4A"><span className="text-[#007C4A] font-medium">Sem juros</span></ParticleHighlight> sobre o valor do bem. <ParticleHighlight density={20} opacity={0.12} color="#007C4A"><span className="text-[#007C4A] font-medium">Parcelas fixas</span></ParticleHighlight> que cabem no seu bolso. 
                                Você paga apenas a taxa de administração e fundo de reserva.
                            </p>
                         </div>
                         <div className="hidden md:block w-32 h-32 bg-white/40 rounded-full blur-2xl animate-pulse" />
                    </GlassCard>

                    {/* Card 3: Flexibilidade */}
                    <GlassCard className="md:col-span-1 md:row-span-1 bg-white">
                        <div className="w-12 h-12 rounded-xl bg-[#E8F2FF] text-[#007AFF] flex items-center justify-center mb-6">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Flexibilidade</h3>
                        <p className="text-[#86868B]">Escolha o valor da parcela e o prazo que cabem no seu orçamento.</p>
                    </GlassCard>

                    {/* Card 4: Contemplação (Dark) */}
                    <GlassCard className="md:col-span-1 md:row-span-1 bg-[#1D1D1F] text-white">
                        <div className="h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-white">Contemplação</h3>
                                <p className="text-gray-400">Sorteio mensal ou lance para antecipar</p>
                            </div>
                            <div className="mt-8 text-4xl font-mono font-bold">
                                <ParticleHighlight density={30} opacity={0.2} color="#30D9C4">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#30D9C4] to-[#007C4A]">2 formas</span>
                                </ParticleHighlight>
                            </div>
                            <p className="text-gray-500 text-xs mt-1">de realizar seu sonho mais rápido</p>
                        </div>
                    </GlassCard>

                </div>
            </div>
        </section>
    );
}

// Add global styles for Poppins if not already there, or ensure font-nfinite maps to it.
