'use client';

import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const assetData = [
  {
    id: '01',
    title: 'Acervo Imobiliário',
    subtitle: 'Alavancagem Fixa',
    description: 'De lotes em condomínios premium a aquisições comerciais estruturais. O alicerce da sucessão passiva.',
    image: '/assets/pontual_imoveis.png'
  },
  {
    id: '02',
    title: 'Frota Soberana',
    subtitle: 'Mobilidade Pesada',
    description: 'Renovação de frotas comerciais, maquinário logístico e veículos de blindagem executiva sem descapitalização.',
    image: '/assets/pontual_frota.png'
  },
  {
    id: '03',
    title: 'Poder Agrário',
    subtitle: 'Tração Produtiva',
    description: 'Implementos agrícolas hiper-massivos e expansão de infraestrutura para o agronegócio de precisão.',
    image: '/assets/pontual_agro.png'
  }
];

export default function AssetGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate cards staggering in
      gsap.fromTo(".asset-card",
        { y: "10vw", opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          stagger: 0.2,
          ease: "cubic-bezier(0.16, 1, 0.3, 1)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-[#0d0e13] text-light py-[15vh] px-[4vw] md:px-[6vw] relative border-t border-[rgba(255,255,255,0.05)]"
    >
      {/* Title Section */}
      <div className="max-w-[1400px] mx-auto mb-[8vh] md:mb-[12vh]">
        <h2 className="text-[8vw] md:text-[3.5vw] font-display font-light leading-[1.1] mb-[2vw]">
          Classes de <span className="text-accent italic">Ativos.</span>
        </h2>
        <p className="text-[4.5vw] md:text-[1.1vw] font-body text-zinc-400 font-light max-w-xl leading-relaxed">
          O protocolo consorcial não distingue o bem, ele audita apenas o peso do seu fluxo de caixa. Selecione a classe de imobilização.
        </p>
      </div>

      {/* monolithic hover cards grid */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-[4vw] md:gap-[1.5vw]">
        {assetData.map((item) => (
          <div 
            key={item.id}
            className="asset-card group relative w-full h-[60vh] md:h-[75vh] overflow-hidden cursor-pointer"
          >
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-[1.5s] ease-s-tier group-hover:scale-105"
                    style={{ backgroundImage: `url(${item.image})` }}
                />
            </div>
            
            {/* Dark Gradient overlays */}
            <div className="absolute inset-0 z-1 bg-[#0d0e13]/40 transition-opacity duration-700 group-hover:bg-[#0d0e13]/20" />
            <div className="absolute inset-0 z-1 bg-linear-to-t from-[#0d0e13] via-[#0d0e13]/60 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-100" />
            
            {/* Content Container */}
            <div className="relative z-10 w-full h-full flex flex-col justify-between p-[6vw] md:p-[3vw]">
                {/* Top Number */}
                <div className="text-[4vw] md:text-[1vw] font-body tracking-[0.2em] text-accent opacity-50 transition-opacity duration-500 group-hover:opacity-100">
                    {item.id}
                </div>
                
                {/* Bottom Text Area */}
                <div className="transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:translate-y-[4vw] group-hover:translate-y-0">
                    <span className="text-[3vw] md:text-[0.8vw] uppercase tracking-widest text-zinc-400 mb-[1vw] block">
                        {item.subtitle}
                    </span>
                    <h3 className="text-[7vw] md:text-[2.5vw] font-display font-light text-white mb-[2vw] leading-none">
                        {item.title}
                    </h3>
                    
                    {/* Expandable description */}
                    <div className="overflow-hidden">
                        <p className="text-[4vw] md:text-[1vw] font-body text-zinc-300 font-light leading-relaxed opacity-0 transition-opacity duration-700 delay-100 group-hover:opacity-100 md:h-0 group-hover:h-auto">
                            {item.description}
                        </p>
                    </div>
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
