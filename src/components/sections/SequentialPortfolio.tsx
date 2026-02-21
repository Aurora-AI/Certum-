'use client';

import React, { useEffect, useState } from 'react';
import { Shield, Landmark, CarFront } from 'lucide-react';

const portfolioData = [
  {
    id: 0,
    title: 'Riscos Complexos & Engenharia',
    description: 'Subscrição tática para operações de alto vulto e responsabilidade técnica irrestrita.',
    icon: Shield,
    image: '/assets/portfolio_engenharia.png',
    subItems: [
      { title: 'Engenharia Civil (Construção e Reforma)' },
      { title: 'Resp. Civil Profissional (Médicos, Dentistas, Advogados)' },
      { title: 'RC Ambiental e Obras' },
      { title: 'Aeronáutico, Drones e Casco Marítimo' },
    ]
  },
  {
    id: 1,
    title: 'Mobilidade Estratégica',
    description: 'Blindagem e expansão logística contínua.',
    icon: CarFront,
    image: '/assets/portfolio_mobilidade.png',
    subItems: [
      { title: 'Frota Comercial (Rodobens / Suhai)' },
      { title: 'Auto Premium, Van e Caminhão' },
    ]
  },
  {
    id: 2,
    title: 'Acelerador de Patrimônio',
    description: 'Arquitetura estruturada para alavancagem de imóveis e frota pesada.',
    icon: Landmark,
    image: '/assets/pontual_imoveis.png',
    link: '/pontual',
    linkText: 'Acessar Plano Pontual',
    subItems: [
      { title: 'Plano Pontual (Lances Embutidos)' },
      { title: 'Imóveis de Alto Padrão & Construção' },
      { title: 'Renovação de Frota Pesada' }
    ]
  },
  {
    id: 3,
    title: 'Consórcio Tradicional',
    description: 'Plataforma completa para aquisição programada de ativos geradores de fluxo.',
    icon: Shield,
    image: '/assets/tradicional_imoveis.png',
    link: '/consorcio',
    linkText: 'Explorar Pilares',
    subItems: [
      { title: 'Imóveis Comerciais e Residenciais' },
      { title: 'Veículos Premium e Motocicletas' },
      { title: 'Maquinário Agrícola' },
      { title: 'Serviços Especializados' }
    ]
  },
  {
    id: 4,
    title: 'Intelligence Hub',
    description: 'Nossa divisão de análise tática. Onde dados de mercado encontram estratégia consorcial.',
    icon: Landmark,
    image: '/assets/portfolio_engenharia.png', // Fallback image for now
    link: '/blog',
    linkText: 'Acessar Hub de Inteligência',
    subItems: [
      { title: 'Análises em Tempo Real (Market Pulse)' },
      { title: 'Teses de Alavancagem Global' },
      { title: 'Relatórios de Exposição de Risco' }
    ]
  }
];

export default function SequentialPortfolio() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let ctx: any = null;
    let ScrollTrigger: any = null;

    // Dynamically import GSAP
    Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger')
    ]).then(([{ default: gsap }, { default: st }]) => {
      ScrollTrigger = st;
      gsap.registerPlugin(ScrollTrigger);
      
      ctx = gsap.context(() => {
        const sections = document.querySelectorAll('.portfolio-text-section');
        
        sections.forEach((section, index) => {
          ScrollTrigger.create({
            trigger: section,
            start: "top 50%", 
            end: "bottom 50%",
            onEnter: () => setActiveIndex(index),
            onEnterBack: () => setActiveIndex(index),
          });
        });
      });
    });

    return () => {
      if (ctx) ctx.revert(); // clean up GSAP context
      if (ScrollTrigger) ScrollTrigger.killAll();
    };
  }, []);

  return (
    <section className="relative w-full bg-[#0d0e13] text-white">
      <div className="flex flex-col md:flex-row relative">
        
        {/* LEFT/BACKGROUND: The Sticky Image Container */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-screen sticky top-0 left-0 overflow-hidden border-r border-[rgba(255,255,255,0.05)]">
           {portfolioData.map((item, index) => (
             <div 
               key={item.id}
               className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-[cubic-bezier(1,0,0,1)] ${activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
             >
                <div 
                  className="absolute inset-0 bg-cover bg-center transform transition-transform duration-[3s] ease-out"
                  style={{ 
                    backgroundImage: `url(${item.image})`,
                    transform: activeIndex === index ? 'scale(1)' : 'scale(1.05)'
                  }}
                  role="img"
                  aria-label={`${item.title} - ${item.description}`}
                />
                
                {/* Overlays for contrast */}
                <div className="absolute inset-0 bg-[#0d0e13]/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e13] via-transparent to-transparent opacity-80" />
                
                {/* Large background number to add editorial feel */}
                <div className="absolute bottom-[-5vh] left-[-2vw] text-[40vh] md:text-[60vh] font-display text-white/5 pointer-events-none leading-none select-none">
                  0{index + 1}
                </div>
             </div>
           ))}
        </div>

        {/* RIGHT: The Scrolling Content */}
        <div className="w-full md:w-1/2 flex flex-col px-[6vw] py-[10vh] md:py-[20vh] relative z-10">
          
          {/* Header */}
          <div className="mb-[15vh]">
            <h2 className="text-[10vw] md:text-[4vw] font-display font-light leading-none mb-[2vw] text-white">
              Sovereign<br/>Portfolio.
            </h2>
            <div className="w-[10vw] md:w-[4vw] h-[1px] bg-accent mb-[3vw]" />
            <p className="text-[4.5vw] md:text-[1.2vw] font-body text-zinc-400 font-light max-w-md leading-relaxed">
              Nós não apenas sugerimos; <strong className="text-white font-medium">executamos.</strong> Nosso ecossistema Sovereign é amparado por um braço de subscrição de classe mundial.
            </p>
          </div>

          {/* Pillars List */}
          <div className="flex flex-col">
            {portfolioData.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeIndex === index;
              return (
                <div 
                  key={item.id} 
                  className="portfolio-text-section min-h-[50vh] md:min-h-[70vh] flex flex-col justify-center border-t border-[rgba(255,255,255,0.1)] py-[5vh] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left"
                  style={{ 
                    opacity: isActive ? 1 : 0.2,
                    transform: isActive ? 'translateX(0)' : 'translateX(-10px)'
                  }}
                >
                  <div className="flex items-center gap-[1.5vw] md:gap-[1vw] mb-[3vw] md:mb-[2vw]">
                    <Icon className="w-[6vw] h-[6vw] md:w-[1.8vw] md:h-[1.8vw]" color={isActive ? "var(--color-accent)" : "#666"} />
                    <span className="text-[3vw] md:text-[0.9vw] uppercase tracking-[0.2em] text-accent font-medium">
                      Pilar 0{index + 1}
                    </span>
                  </div>
                  
                  <h3 className="text-[7vw] md:text-[2.8vw] font-display text-white mb-[2vw] leading-[1.1]">
                    {item.title}
                  </h3>
                  
                  <p className="text-[4.5vw] md:text-[1.1vw] font-body font-light text-zinc-400 mb-[4vw] max-w-lg leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="flex flex-col gap-[1.5vw] md:gap-[1vw]">
                    {item.subItems.map((sub, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-[2vw] md:gap-[1vw] text-[3.8vw] md:text-[1vw] text-zinc-300 font-body font-light">
                        <div className="w-[4px] h-[4px] md:w-[3px] md:h-[3px] bg-accent rounded-full" />
                        {sub.title}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Link to Specific Page */}
                  {item.link && (
                    <div className="mt-[6vw] md:mt-[3vw]">
                      <a 
                        href={item.link}
                        style={{ pointerEvents: isActive ? 'auto' : 'none' }}
                        className="group flex items-center gap-[2vw] md:gap-[1vw] text-[3.5vw] md:text-[0.9vw] font-body uppercase tracking-widest text-white hover:text-accent transition-colors duration-300 cursor-pointer"
                      >
                        <span className="border-b border-transparent group-hover:border-accent transition-colors pb-1">
                          {item.linkText}
                        </span>
                        <svg className="w-[4vw] h-[4vw] md:w-[1vw] md:h-[1vw] transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
