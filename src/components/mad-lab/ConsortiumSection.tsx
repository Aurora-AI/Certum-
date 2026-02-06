"use client";

import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RevealText } from "@/components/ui/RevealText";

gsap.registerPlugin(ScrollTrigger);

export function ConsortiumSection() {
  return (
    <section 
        className="relative w-full min-h-[50vh] bg-[#F4F4F4] text-[#1A1A1A] py-20 border-t border-[#1A1A1A]/10 z-20 flex flex-col items-center justify-center"
    >
      <div className="container mx-auto px-12 text-center flex flex-col items-center gap-8">
        
        <RevealText tag="h2" className="text-4xl md:text-6xl font-thin tracking-widest uppercase opacity-50 text-[#1A1A1A]">
            Certum Consortium
        </RevealText>
        
        <RevealText delay={0.2} className="max-w-md text-[#1A1A1A]/60 font-light text-sm leading-relaxed">
            Planejamento estratégico para aquisição de bens. Carros, Imóveis e Pesados com a segurança da Rodobens.
        </RevealText>

        <RevealText delay={0.4}>
            <Link href="/consorcio" className="inline-block border-b border-[#1A1A1A] pb-1 text-xs font-bold tracking-[0.2em] uppercase hover:opacity-50 transition-opacity">
                Acessar Simulador Interno
            </Link>
        </RevealText>

      </div>
    </section>
  );
}

