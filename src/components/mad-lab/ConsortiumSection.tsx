"use client";

import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SovereignCard } from "@/components/ui/SovereignCard";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const PRODUCTS = [
    {
        title: "Auto",
        subtitle: "Blindados & Superesportivos",
        gradientFrom: "from-[#1A1A1A]",
        gradientTo: "to-[#BFB38F]",
    },
    {
        title: "Imóvel",
        subtitle: "High-End Residential & Commercial",
        gradientFrom: "from-[#1A1A1A]",
        gradientTo: "to-[#5D5D5D]",
    },
    {
        title: "Heavy",
        subtitle: "Agro, Frota & Máquinas",
        gradientFrom: "from-[#1A1A1A]",
        gradientTo: "to-[#8C8C8C]",
    }
];

export function ConsortiumSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#111111] text-[#EAEAEA] py-32 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] to-[#000000] z-0" />
      
      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col gap-20">
        
        {/* Header */}
        <div className="text-center space-y-4">
            <h2 className="text-[10px] font-medium uppercase tracking-[0.4em] text-[#BFB38F]/60 font-mono">
                The Collection
            </h2>
            <h3 className="text-4xl md:text-6xl font-light tracking-tight uppercase text-white">
                Portfólio <span className="text-[#BFB38F]">Sovereign</span>
            </h3>
        </div>

        {/* Product Grid (The Map) */}
        {/* FX-03 Focus Interaction: implemented via group/hover CSS */}
        <div className="group/grid grid grid-cols-1 md:grid-cols-3 gap-8 w-full perspective-[2000px]">
            {PRODUCTS.map((prod, idx) => (
                <div 
                    key={idx}
                    className="relative transition-all duration-500 ease-out group-hover/grid:blur-[4px] group-hover/grid:scale-95 group-hover/grid:opacity-60 hover:!blur-0 hover:!scale-100 hover:!opacity-100 hover:z-10"
                >
                    <SovereignCard 
                        title={prod.title} 
                        subtitle={prod.subtitle}
                        gradientFrom={prod.gradientFrom}
                        gradientTo={prod.gradientTo}
                    />
                </div>
            ))}
        </div>

        {/* Footer / CTA */}
        <div className="text-center mt-12">
             <Link 
                href="/consorcio" 
                data-magnetic="true"
                className="inline-flex items-center gap-3 px-8 py-4 border border-white/10 rounded-full hover:bg-white/5 transition-colors group"
            >
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/80">
                    Acessar Simulador
                </span>
                <span className="text-[#BFB38F] group-hover:translate-x-1 transition-transform">→</span>
            </Link>
        </div>

      </div>
    </section>
  );
}


