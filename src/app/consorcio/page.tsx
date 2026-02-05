"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowUpRight, Shield, Truck, Home, Car, Heart, Zap, ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ConsortiumPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Title Reveal
      gsap.from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.2
      });

      // Z-Pattern Entrances
      const sections = gsap.utils.toArray<HTMLElement>(".z-section");
      sections.forEach((section) => {
        const image = section.querySelector(".z-image");
        const content = section.querySelector(".z-content");

        gsap.from(image, {
            scale: 0.9,
            opacity: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: section,
                start: "top center+=20%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.from(content, {
            y: 50,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
            delay: 0.3,
            scrollTrigger: {
                trigger: section,
                start: "top center+=20%",
                toggleActions: "play none none reverse"
            }
        });
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="bg-black text-white min-h-screen">
      
      {/* 1. HERO SECTION (Full Screen) */}
      <section className="relative h-screen w-full overflow-hidden flex items-end pb-24 px-6 md:px-12 mb-32">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
            <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover opacity-60"
            >
                <source src="/assets/generated/consorcio_hero.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-screen-2xl mx-auto border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="hero-title">
                <span className="block text-xs font-bold uppercase tracking-[0.2em] mb-4 text-[#bfb38f]">Consórcio Rodobens</span>
                <h1 className="text-[12vw] md:text-[7vw] leading-[0.85] font-light tracking-tighter uppercase">
                    Seu Novo<br/>Patrimônio
                </h1>
            </div>
            <div className="hidden md:block animate-bounce">
                <ChevronDown className="w-8 h-8 text-white/50" />
            </div>
        </div>
      </section>


      {/* CONTAINER FOR Z-PATTERN BLOCKS */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 space-y-48 pb-48">

        {/* 2. AUTO SECTION (Image RIGHT -> Text LEFT) */}
        <section className="z-section flex flex-col md:flex-row items-center gap-12 md:gap-24">
            {/* Content (Left) */}
            <div className="z-content w-full md:w-1/2 flex flex-col items-start text-left">
                <div className="flex items-center gap-3 mb-6">
                    <Car className="w-6 h-6 text-[#bfb38f]" />
                    <span className="text-xs font-bold uppercase tracking-widest text-white/70">Rodobens Auto</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-light uppercase leading-none mb-6">Seu Carro<br/>0km</h2>
                <div className="w-24 h-px bg-[#bfb38f] mb-8" />
                <p className="text-gray-400 text-lg font-light leading-relaxed mb-6 max-w-xl">
                    O <strong>Consórcio Pontual Rodobens</strong> é diferente de tudo o que você já conhece. A partir da <strong>6ª assembleia</strong>, você pode antecipar parcelas e retirar seu carro zero.
                </p>
                <ul className="text-gray-500 text-sm font-light space-y-2 mb-8 uppercase tracking-wide">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#bfb38f] rounded-full" /> Menor taxa do mercado (Sem Juros)</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#bfb38f] rounded-full" /> 2 em 1: Crédito com preço de Consórcio</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#bfb38f] rounded-full" /> Liberdade total de escolha</li>
                </ul>
                <div className="flex gap-4">
                    <Link href="/consorcio/auto">
                        <button className="px-8 py-3 bg-[#bfb38f] text-black text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors">
                            Simular Agora
                        </button>
                    </Link>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#bfb38f]">
                        <Shield className="w-4 h-4" />
                        <span>Em até 6 Meses</span>
                    </div>
                </div>
            </div>

             {/* Image (Right) */}
             <div className="z-image w-full md:w-1/2 aspect-[4/5] md:aspect-square relative overflow-hidden rounded-sm border border-white/10">
                <img 
                    src="/assets/generated/auto_garage.png" 
                    alt="Garagem Auto" 
                    className="w-full h-full object-cover opacity-90 transition-transform duration-1000 hover:scale-105"
                />
            </div>
        </section>


        {/* 3. REAL ESTATE SECTION (Image LEFT -> Text RIGHT) */}
        <section className="z-section flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24">
            {/* Image (Left) */}
            <div className="z-image w-full md:w-1/2 aspect-[4/5] md:aspect-square relative overflow-hidden rounded-sm border border-white/10">
                <img 
                    src="/assets/generated/real_estate_villa.png" 
                    alt="Casa Moderna" 
                    className="w-full h-full object-cover opacity-90 transition-transform duration-1000 hover:scale-105"
                />
            </div>

            {/* Content (Right) */}
            <div className="z-content w-full md:w-1/2 flex flex-col items-start md:items-end text-left md:text-right">
                <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-white/70">Rodobens Imóveis</span>
                    <Home className="w-6 h-6 text-[#bfb38f]" />
                </div>
                <h2 className="text-5xl md:text-7xl font-light uppercase leading-none mb-6">Seu Novo<br/>Imóvel</h2>
                <div className="w-24 h-px bg-[#bfb38f] mb-8" />
                <p className="text-gray-400 text-lg font-light leading-relaxed mb-8 max-w-md ml-auto">
                    A forma inteligente de ampliar seu patrimônio. Créditos de até <strong>R$ 1 Milhão</strong> com prazos flexíveis de até 216 meses. Compra, construção ou reforma sem juros abusivos.
                </p>
                <div className="flex gap-4 justify-end w-full">
                     <div className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#bfb38f] mr-4">
                        <ArrowUpRight className="w-4 h-4" />
                        <span>Até 216 Meses</span>
                    </div>
                    <Link href="/consorcio/imovel">
                        <button className="px-8 py-3 border border-white text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                            Simular Imóvel
                        </button>
                    </Link>
                </div>
            </div>
        </section>


        {/* 4. HEAVY METAL (Image RIGHT -> Text LEFT) */}
        <section className="z-section flex flex-col md:flex-row items-center gap-12 md:gap-24">
            {/* Content (Left) */}
            <div className="z-content w-full md:w-1/2 flex flex-col items-start text-left">
                <div className="flex items-center gap-3 mb-6">
                    <Truck className="w-6 h-6 text-[#bfb38f]" />
                    <span className="text-xs font-bold uppercase tracking-widest text-white/70">Rodobens Pesados</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-light uppercase leading-none mb-6">Frota &<br/>Agro</h2>
                <div className="w-24 h-px bg-[#bfb38f] mb-8" />
                <p className="text-gray-400 text-lg font-light leading-relaxed mb-8 max-w-md">
                    Para quem transporta o Brasil. Caminhões, máquinas e implementos com planos que respeitam o fluxo de caixa do seu negócio.
                </p>
                <Link href="/consorcio/pesados">
                    <button className="px-8 py-3 border-2 border-[#bfb38f] text-[#bfb38f] text-xs font-bold uppercase tracking-widest hover:bg-[#bfb38f] hover:text-black transition-colors">
                        Cotar Pesados
                    </button>
                </Link>
            </div>

             {/* Image (Right) */}
             <div className="z-image w-full md:w-1/2 aspect-[16/9] md:aspect-video relative overflow-hidden rounded-sm border border-white/10">
                <img 
                    src="/assets/generated/truck_industrial.png" 
                    alt="Caminhão Scania" 
                    className="w-full h-full object-cover opacity-80 transition-transform duration-1000 hover:scale-105"
                />
            </div>
        </section>

        {/* 5. MOTOS & SERVICES (Image LEFT -> Text RIGHT) */}
        <section className="z-section flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24">
            {/* Image (Left) */}
            <div className="z-image w-full md:w-1/2 aspect-[16/9] md:aspect-video relative overflow-hidden rounded-sm border border-white/10">
                <img 
                    src="/assets/generated/lifestyle_moto_boat.png" 
                    alt="Moto e Barco" 
                    className="w-full h-full object-cover opacity-90 transition-transform duration-1000 hover:scale-105"
                />
            </div>

            {/* Content (Right) */}
            <div className="z-content w-full md:w-1/2 flex flex-col items-start md:items-end text-left md:text-right">
                <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-white/70">Rodobens Outros</span>
                    <Zap className="w-6 h-6 text-[#bfb38f]" />
                </div>
                <h2 className="text-5xl md:text-7xl font-light uppercase leading-none mb-6">Motos &<br/>Náutica</h2>
                <div className="w-24 h-px bg-[#bfb38f] mb-8" />
                <p className="text-gray-400 text-lg font-light leading-relaxed mb-8 max-w-md ml-auto">
                    Liberdade para conquistar motos de alta cilindrada e embarcações. Cartas de crédito versáteis para serviços estéticos, cirurgias e muito mais.
                </p>
                <div className="flex gap-4 justify-end w-full">
                    <Link href="/consorcio/motos">
                        <button className="px-8 py-3 border border-white text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                            Simular Motos & Náutica
                        </button>
                    </Link>
                </div>
            </div>
        </section>

      </div>

      {/* FOOTER / SEGUROS BRIEF */}
      <section className="py-24 px-6 md:px-12 bg-[#050505] border-t border-white/5">
        <div className="max-w-screen-2xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
                <Shield className="w-6 h-6 text-[#bfb38f]" />
                <h2 className="text-2xl font-light uppercase tracking-wide text-white">Seguros & Proteção</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { title: "Vida", desc: "Blindagem Familiar e Sucessão.", icon: Heart },
                    { title: "Auto", desc: "Proteção total para seu veículo.", icon: Car },
                    { title: "Residencial", desc: "Segurança para seu patrimônio.", icon: Home }
                ].map((item, i) => (
                    <Link key={i} href="/consorcio/protecao">
                        <div className="group p-8 border border-white/5 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer h-full">
                            <div className="flex justify-between items-start">
                                <item.icon className="w-8 h-8 text-[#bfb38f] mb-4 group-hover:scale-110 transition-transform" />
                                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 text-white/50" />
                            </div>
                            <h3 className="text-xl uppercase font-light mb-2">{item.title}</h3>
                            <p className="text-gray-400 font-light text-sm">{item.desc}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
      </section>

    </main>
  );
}
