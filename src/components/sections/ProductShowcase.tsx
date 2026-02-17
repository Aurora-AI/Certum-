'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ParticleHighlight from '@/components/ui/ParticleHighlight';

gsap.registerPlugin(ScrollTrigger);

// --- VFX: Spectral Pressure Shader (Placeholder for complex gold reveal) ---
// For now, we use CSS variables and DOM manipulation for the "pressure" effect
// to keep performance high. The WebGL part can be a subtle distortion overlay.

const ProductColumn = ({ id, title, subtitle, description, cta, href }: { id: string, title: string, subtitle: string, description: string, cta: string, href: string }) => {
    const columnRef = useRef<HTMLDivElement>(null);
    
    return (
        <div 
            ref={columnRef}
            className="group relative flex-1 h-[60vh] md:h-[90vh] border-r border-[#E5E5E5] last:border-r-0 overflow-hidden cursor-pointer transition-all duration-700 ease-[0.16,1,0.3,1] hover:flex-[1.5]"
        >
            {/* Background: Idle White -> Hover Gold */}
            <div className="absolute inset-0 bg-white transition-colors duration-700 group-hover:bg-[#FAFAFA]" />
            
            {/* Spectral Reveal Layer (The Gold) */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37] to-[#AA8A2E] opacity-0 group-hover:opacity-10 transition-opacity duration-700" />
            
            <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12">
                {/* Header: Number & Subtitle */}
                <div className="flex justify-between items-start">
                    <span className="font-mono text-xs tracking-widest text-gray-400 group-hover:text-[#D4AF37] transition-colors">
                        {id}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-widest text-[#D4AF37] opacity-0 transform -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                        {subtitle}
                    </span>
                </div>

                {/* Main Content */}
                <div className="mt-auto transform transition-transform duration-700 group-hover:-translate-y-12">
                     <h3 className="text-4xl md:text-6xl font-light text-[#1D1D1F] mb-6 mix-blend-multiply group-hover:drop-shadow-lg">
                        <ParticleHighlight density={35} opacity={0.1} color="#007C4A" animate={false}>{title}</ParticleHighlight>
                    </h3>
                    
                    {/* Description Reveal */}
                    <div className="max-w-xs h-0 opacity-0 overflow-hidden group-hover:h-auto group-hover:opacity-100 transition-all duration-500 delay-200">
                        <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                            {description}
                        </p>
                        <a href={href} className="inline-block mt-8 px-6 py-3 border border-[#D4AF37] text-[#D4AF37] rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-white transition-all">
                            {cta}
                        </a>
                    </div>
                </div>
            </div>

            {/* Vertical Line Animation */}
            <div className="absolute bottom-0 left-1/2 w-[1px] h-0 bg-[#D4AF37] group-hover:h-full transition-all duration-1000 ease-in-out opacity-20" />
        </div>
    );
};

export default function ProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const products = [
    {
        id: '01',
        title: 'Pontual',
        subtitle: 'Precisão',
        description: 'Seu carro 0km em até 6 parcelas. Sem juros, sem sorteio, sem espera. O instrumento definitivo de aquisição.',
        cta: 'Simular agora',
        href: '/pontual'
    },
    {
        id: '02',
        title: 'Consórcios',
        subtitle: 'Estratégia',
        description: 'Imóveis, veículos, caminhões e serviços. Planejamento patrimonial com o poder do grupo. Sem juros bancários.',
        cta: 'Ver planos',
        href: '/consorcios'
    },
    {
        id: '03',
        title: 'Seguros',
        subtitle: 'Proteção',
        description: 'Auto, vida, residencial e saúde. Mais de 40 seguradoras parceiras. 30+ anos protegendo patrimônios.',
        cta: 'Fazer cotação',
        href: '/seguros'
    }
  ];

  useGSAP(() => {
    // Staggered Entrance
    gsap.from(containerRef.current?.children as any, {
        y: 100,
        // opacity: 0, // Removed to ensure visibility
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%"
        }
    });
  }, { scope: containerRef });

  return (
    <section className="relative z-10 w-full bg-white border-t border-[#E5E5E5] min-h-screen">
        <div ref={containerRef} className="flex flex-col md:flex-row w-full max-w-[1920px] mx-auto min-h-screen">
            {products.map((p) => (
                <ProductColumn key={p.id} {...p} />
            ))}
        </div>
    </section>
  );
}
