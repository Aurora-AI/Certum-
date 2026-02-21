'use client';

import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, Truck, Tractor, Wrench } from 'lucide-react';

const categories = [
  {
    id: "01",
    title: "Fundação Patrimonial",
    subtitle: "Imóveis",
    desc: "Aquisição de terrenos, construção e imóveis comerciais/residenciais. A base intransponível.",
    icon: Building2,
    image: "/assets/tradicional_imoveis.png",
    gridClass: "md:col-span-5 md:row-span-2 h-[50vh] md:h-auto"
  },
  {
    id: "02",
    title: "Símbolos de Poder",
    subtitle: "Veículos",
    desc: "Acesso estruturado à alta arquearia automotiva, incluindo esportivos britânicos e utilitários de luxo.",
    icon: Truck,
    image: "/assets/carro.png", // The Aston Martin backup
    gridClass: "md:col-span-7 md:row-span-1 h-[40vh] md:h-[40vh]"
  },
  {
    id: "03",
    title: "Mobilidade Dinâmica",
    subtitle: "Motocicletas",
    desc: "Liberdade geográfica com planejamento tático. Esportivas, custons e big trails.",
    icon: Wrench,
    image: "/assets/moto.jpeg",
    gridClass: "md:col-span-4 md:row-span-1 h-[40vh] md:h-[45vh]"
  },
  {
    id: "04",
    title: "Tração Logística",
    subtitle: "Veículos & Frota",
    desc: "Caminhões de alta tonelagem, implementos rodoviários e renovação de frota corporativa.",
    icon: Truck,
    image: "/assets/tradicional_veiculos.png",
    gridClass: "md:col-span-3 md:row-span-1 h-[40vh] md:h-[45vh]"
  },
  {
    id: "05",
    title: "Poder Produtivo",
    subtitle: "Maquinário & Agro",
    desc: "Colheitadeiras e tratores essenciais para escalar o agronegócio de precisão.",
    icon: Tractor,
    image: "/assets/tradicional_agro.png",
    gridClass: "md:col-span-7 md:row-span-1 h-[40vh] md:h-auto"
  },
  {
    id: "06",
    title: "Estética & Controle",
    subtitle: "Serviços Premium",
    desc: "Cirurgias estéticas, reformas estruturais e liquidez programada.",
    icon: Wrench,
    image: "/assets/tradicional_servicos.png",
    gridClass: "md:col-span-5 md:row-span-1 h-[40vh] md:h-[45vh]"
  }
];

export default function ConsorcioCategories() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(".assymetric-card",
        { y: "10vw", opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          stagger: 0.15,
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
      className="w-full bg-[#FAFAF8] text-dark py-[10vh] md:py-[20vh] relative"
    >
      <div className="s-grid relative mb-[8vh] md:mb-[10vh] items-end">
        <div className="col-span-12 lg:col-span-7">
          <span className="text-label uppercase tracking-widest text-[#888] mb-[2vw] block">
            Espectro Operacional
          </span>
          <h2 className="text-h1 font-serif leading-tight">
            As Quatro <span className="text-accent italic">Forças.</span>
          </h2>
        </div>
        
        <div className="col-span-12 lg:col-span-5">
          <p className="text-p text-[#444] leading-relaxed">
            Nossa arquitetura de alavancagem não se limita a pedras. Nós mapeamos e tracionamos todos os principais ativos geradores de fluxo da economia primária.
          </p>
        </div>
      </div>

      {/* Editorial Asymmetry Grid */}
      <div className="s-grid gap-[4vw] md:gap-[1.5vw]">
        
        {categories.map((cat) => (
          <div 
            key={cat.id} 
            className={`assymetric-card group relative w-full overflow-hidden bg-[#111] cursor-pointer ${cat.gridClass}`}
          >
            {/* Background Image - Monochrome & Depth */}
            <div className="absolute inset-0 z-0">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-[2s] ease-s-tier group-hover:scale-110 grayscale brightness-75 group-hover:grayscale-0"
                style={{ backgroundImage: `url(${cat.image})` }}
                role="img"
                aria-label={`Consórcio Rodobens para ${cat.subtitle} - ${cat.title}`}
              />
            </div>

            {/* Overlays */}
            <div className="absolute inset-0 z-1 bg-linear-to-t from-[#0d0e13]/90 via-[#0d0e13]/40 to-black/20 opacity-80 transition-opacity duration-700 group-hover:opacity-100" />
            
            {/* Content Flex Container */}
            <div className="relative z-10 w-full h-full p-[6vw] md:p-[3vw] flex flex-col justify-between">
              
              {/* Top: Icon and Number */}
              <div className="flex justify-between items-start opacity-60 transition-opacity duration-500 group-hover:opacity-100">
                <cat.icon className="w-[8vw] h-[8vw] md:w-[2vw] md:h-[2vw] text-light" strokeWidth={1.5} />
                <span className="text-[4vw] md:text-[1.2vw] font-body tracking-[0.2em] text-accent">
                  {cat.id}
                </span>
              </div>

              {/* Bottom: Text Content */}
              <div className="transform transition-transform duration-700 ease-s-tier md:translate-y-[2vw] group-hover:translate-y-0">
                <span className="text-[3vw] md:text-[0.8vw] uppercase tracking-widest text-accent mb-[1.5vw] block">
                  {cat.subtitle}
                </span>
                <h3 className="text-[6.5vw] md:text-[2.2vw] font-serif font-bold text-white mb-[1.5vw] leading-[1.1]">
                  {cat.title}
                </h3>
                <div className="overflow-hidden">
                  <p className="text-[4vw] md:text-[1vw] font-body text-zinc-300 font-light leading-relaxed opacity-0 transition-opacity duration-700 delay-100 group-hover:opacity-100 md:h-0 group-hover:h-auto">
                    {cat.desc}
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
