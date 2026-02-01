"use client";

import Image from "next/image";
import { ArrowRight, Anchor, Cpu, Tractor, Bike } from "lucide-react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PORTFOLIO_ITEMS = [
  {
    id: "03",
    title: "Náutico",
    subtitle: "Jurisdições Internacionais",
    description: "Soberania em águas internacionais.",
    icon: Anchor,
    image: "/assets/nano-banana/3.png", 
    colSpan: "lg:col-span-8",
    rowSpan: "lg:row-span-1"
  },
  {
    id: "04",
    title: "Máquinas",
    subtitle: "Liberdade Mecânica",
    description: "Engenharia sobre duas rodas.",
    icon: Bike,
    image: "/assets/nano-banana/4.png", 
    colSpan: "lg:col-span-4",
    rowSpan: "lg:row-span-2"
  },
  {
    id: "05",
    title: "Terra Firme",
    subtitle: "Produção Real",
    description: "Onde a riqueza brota.",
    icon: Tractor,
    image: "/assets/nano-banana/5.png",
    colSpan: "lg:col-span-4",
    rowSpan: "lg:row-span-1"
  },
  {
    id: "06",
    title: "Serviços",
    subtitle: "Estrutura & Cirurgia Patrimonial",
    description: "Concierge de alta complexidade.",
    icon: Cpu,
    image: "/assets/nano-banana/6.png",
    colSpan: "lg:col-span-4",
    rowSpan: "lg:row-span-1",
  },
];

export function ExpansionGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
        gsap.from(titleRef.current, {
            y: 50,
            opacity: 0,
            duration: 1.2,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
            }
        });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full py-24 bg-[#f2f2f0] border-t border-gray-200 text-[#181611]">
      <div className="px-6 lg:px-12 max-w-[1800px] mx-auto">
        
        {/* Header da Seção */}
        <h2 ref={titleRef} className="text-4xl md:text-6xl font-light tracking-tighter text-[#181611] mb-24 opacity-0 text-center">
            THE EXPANSION <span className="font-serif italic font-normal">PROTOCOLS</span>
        </h2>

        {/* CSS GRID COMPLEXO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-[400px]">
          {PORTFOLIO_ITEMS.map((item) => (
            <div 
              key={item.id}
              className={`relative group overflow-hidden bg-gray-200 ${item.colSpan} ${item.rowSpan}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-8 w-full text-white">
                 <div className="flex items-center gap-3 mb-2 opacity-70">
                    <item.icon size={16} />
                    <span className="text-xs font-bold uppercase tracking-widest">{item.subtitle}</span>
                 </div>
                 <h3 className="text-3xl font-light mb-2">{item.title}</h3>
                 <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                      {item.description}
                 </p>
              </div>

               {/* ID Tag */}
               <div className="absolute top-6 right-6 text-white/50 text-xs font-bold uppercase tracking-widest">
                  PORTFOLIO {item.id}
               </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
