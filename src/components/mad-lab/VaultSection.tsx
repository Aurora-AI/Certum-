"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
// import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SimulationCTA } from "./SimulationCTA";

gsap.registerPlugin(ScrollTrigger);

export function VaultSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        // Vault Header Reveal
        const headerTl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
                toggleActions: "play none none reverse",
            }
        });

        headerTl.to(".vault-index", { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0)
                .to(".vault-title-span", { yPercent: 0, duration: 1.2, ease: "power4.out" }, 0.15)
                .to(".vault-title-divider", { scaleX: 1, duration: 0.8, ease: "power3.inOut" }, 0.5)
                .to(".vault-header-right", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0.6);

        // Vault Cards Staggered Reveal
        const cards = gsap.utils.toArray<HTMLElement>("[data-vault-card]");
        cards.forEach((card) => {
            const imageWrap = card.querySelector(".card-image-wrap");
            const image = card.querySelector(".card-image");
            const number = card.querySelector(".card-number");
            const badges = card.querySelector(".card-category-badge");
            const content = card.querySelector(".card-content");

            const cardTl = gsap.timeline({
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                }
            });

            cardTl.to(imageWrap, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: "power4.inOut" }, 0)
                  .to(image, { scale: 1.0, duration: 2.0, ease: "power3.out" }, 0.2)
                  .to(number, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 0.6)
                  .to(badges, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 0.7)
                  .to(content, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }, 0.8);
            
            // Parallax
            gsap.to(image, {
                yPercent: 10,
                ease: "none",
                scrollTrigger: {
                    trigger: card,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.6
                }
            });
        });

        // Footer Reveal
        gsap.to(".vault-footer", {
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".vault-footer",
                start: "top 95%",
                toggleActions: "play none none reverse",
            }
        });



    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="vault relative w-full min-h-screen bg-white text-[#1A1A1A] py-[12vh] px-[5vw] overflow-hidden flex flex-col justify-center">
        
        {/* GRAIN */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.025] mix-blend-multiply" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}
        />

        {/* HEADER */}
        <div className="vault-header flex flex-wrap items-end justify-between mb-[8vh] gap-8">
            <div className="vault-header-left flex flex-col gap-4">
                <div className="vault-index text-[10px] font-mono uppercase tracking-[0.25em] text-[#1A1A1A]/45 opacity-0 translate-y-[20px]">
                    Protocol 2026 // Sovereign Assets
                </div>
                <h2 className="vault-title text-[clamp(2.5rem,7vw,6rem)] font-bold uppercase tracking-[-0.03em] leading-[0.9] overflow-hidden text-[#1A1A1A]">
                    <span className="vault-title-span inline-block translate-y-[110%]">The Vault</span>
                </h2>
                <div className="vault-title-divider w-[80px] h-[1px] bg-[#BFB38F] origin-left scale-x-0 mt-2" />
            </div>
            <div className="vault-header-right max-w-[300px] opacity-0 translate-y-[20px]">
                <p className="text-[13px] leading-[1.7] text-[#1A1A1A]/45 font-light">
                    Acesso estratégico a ativos reais. Três verticais de preservação patrimonial com a disciplina do sistema de consórcio.
                </p>
            </div>
        </div>

        {/* GRID */}
        <div className="vault-grid grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-stretch">
            
            {/* CARD 1: CARROS (row-span-2) */}
            <div className="vault-card group relative cursor-pointer md:mt-0 z-10 hover:z-20 transition-all duration-500" data-vault-card>
                <div className="card-image-wrap relative w-full h-[60vh] overflow-hidden" style={{ clipPath: "inset(100% 0% 0% 0%)" }}>
                    <Image 
                        src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1000&q=80"
                        alt="Luxury Car"
                        fill
                        className="card-image object-cover w-full h-full block transform scale-115 transition-transform duration-[1.2s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
                    />
                    <div className="card-image-overlay absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/55 via-[#1A1A1A]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-70" />
                    <div className="card-number absolute top-6 left-6 text-[10px] font-mono uppercase tracking-[0.2em] text-white/50 z-10 opacity-0 translate-y-[10px]">001</div>
                    <div className="card-category-badge absolute bottom-6 left-6 flex gap-2 z-10 opacity-0 translate-y-[10px]">
                        <span className="badge text-[9px] font-semibold uppercase tracking-[0.2em] px-[14px] py-[6px] bg-white/10 backdrop-blur-md border border-white/15 text-white/85">Entrega Garantida</span>
                        <span className="badge text-[9px] font-semibold uppercase tracking-[0.2em] px-[14px] py-[6px] bg-white/10 backdrop-blur-md border border-white/15 text-white/85">Sem Juros</span>
                    </div>
                </div>
                <div className="card-content pt-[1.8rem] opacity-0 translate-y-[20px]">
                    <p className="card-overline text-[10px] font-medium uppercase tracking-[0.3em] text-[#BFB38F] mb-[0.6rem]">Plano Pontual Rodobens</p>
                    <h3 className="card-title text-[clamp(1.3rem,2.5vw,2rem)] font-bold tracking-[-0.02em] leading-[1.1] mb-[0.8rem] uppercase text-[#1A1A1A]">Seu Próximo<br/>Carro</h3>
                    <p className="card-desc text-[13px] leading-[1.7] text-[#1A1A1A]/45 font-light max-w-[400px] mb-[1.2rem]">
                        Previsibilidade contratual. O Plano Pontual permite agendar a entrega do seu carro a partir da 6 parcela, sem depender da sorte.
                    </p>
                    <div className="card-stats flex gap-6 mb-6">
                        <div className="stat flex flex-col gap-[2px]">
                            <span className="stat-value text-[18px] font-bold tracking-[-0.02em] text-[#1A1A1A]">12–24</span>
                            <span className="stat-label text-[9px] font-medium uppercase tracking-[0.25em] text-[#1A1A1A]/45">Meses p/ Entrega</span>
                        </div>
                        <div className="stat flex flex-col gap-[2px]">
                            <span className="stat-value text-[18px] font-bold tracking-[-0.02em] text-[#1A1A1A]">0%</span>
                            <span className="stat-label text-[9px] font-medium uppercase tracking-[0.25em] text-[#1A1A1A]/45">Juros</span>
                        </div>
                    </div>
                    <SimulationCTA href="/consorcio/pontual" label="Simular Auto" />
                </div>
            </div>

            {/* CARD 2: CASAS */}
            <div className="vault-card group relative cursor-pointer md:mt-12 z-10 hover:z-20 transition-all duration-500" data-vault-card>
                <div className="card-image-wrap relative w-full h-[60vh] overflow-hidden" style={{ clipPath: "inset(100% 0% 0% 0%)" }}>
                    <Image 
                        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000&q=80"
                        alt="Luxury Home"
                        fill
                        className="card-image object-cover w-full h-full block transform scale-115 transition-transform duration-[1.2s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
                    />
                    <div className="card-image-overlay absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/55 via-[#1A1A1A]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-70" />
                    <div className="card-number absolute top-6 left-6 text-[10px] font-mono uppercase tracking-[0.2em] text-white/50 z-10 opacity-0 translate-y-[10px]">002</div>
                    <div className="card-category-badge absolute bottom-6 left-6 flex gap-2 z-10 opacity-0 translate-y-[10px]">
                        <span className="badge text-[9px] font-semibold uppercase tracking-[0.2em] px-[14px] py-[6px] bg-white/10 backdrop-blur-md border border-white/15 text-white/85">Crédito até R$ 800K</span>
                        <span className="badge text-[9px] font-semibold uppercase tracking-[0.2em] px-[14px] py-[6px] bg-white/10 backdrop-blur-md border border-white/15 text-white/85">216 Meses</span>
                    </div>
                </div>
                <div className="card-content pt-[1.8rem] opacity-0 translate-y-[20px]">
                    <p className="card-overline text-[10px] font-medium uppercase tracking-[0.3em] text-[#BFB38F] mb-[0.6rem]">Consórcio Imobiliário</p>
                    <h3 className="card-title text-[clamp(1.3rem,2.5vw,2rem)] font-bold tracking-[-0.02em] leading-[1.1] mb-[0.8rem] uppercase text-[#1A1A1A]">Seu Novo<br/>Imóvel</h3>
                    <p className="card-desc text-[13px] leading-[1.7] text-[#1A1A1A]/45 font-light max-w-[400px] mb-[1.2rem]">
                        A compra inteligente da casa própria ou investimento. Prazos estendidos para viabilizar seu patrimônio.
                    </p>
                    <div className="card-stats flex gap-6 mb-6">
                        <div className="stat flex flex-col gap-[2px]">
                            <span className="stat-value text-[18px] font-bold tracking-[-0.02em] text-[#1A1A1A]">216</span>
                            <span className="stat-label text-[9px] font-medium uppercase tracking-[0.25em] text-[#1A1A1A]/45">Meses</span>
                        </div>
                        <div className="stat flex flex-col gap-[2px]">
                            <span className="stat-value text-[18px] font-bold tracking-[-0.02em] text-[#1A1A1A]">R$ 800K</span>
                            <span className="stat-label text-[9px] font-medium uppercase tracking-[0.25em] text-[#1A1A1A]/45">Crédito Máx.</span>
                        </div>
                    </div>
                    <SimulationCTA href="/consorcio" label="Simular Imóvel" />
                </div>
            </div>

            {/* CARD 3: SEGUROS */}
            <div className="vault-card group relative cursor-pointer md:mt-24 z-10 hover:z-20 transition-all duration-500" data-vault-card>
                <div className="card-image-wrap relative w-full h-[60vh] overflow-hidden" style={{ clipPath: "inset(100% 0% 0% 0%)" }}>
                    <Image 
                        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1000&q=80"
                        alt="Insurance Protection"
                        fill
                        className="card-image object-cover w-full h-full block transform scale-115 transition-transform duration-[1.2s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
                    />
                    <div className="card-image-overlay absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/55 via-[#1A1A1A]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-70" />
                    <div className="card-number absolute top-6 left-6 text-[10px] font-mono uppercase tracking-[0.2em] text-white/50 z-10 opacity-0 translate-y-[10px]">003</div>
                    <div className="card-category-badge absolute bottom-6 left-6 flex gap-2 z-10 opacity-0 translate-y-[10px]">
                        <span className="badge text-[9px] font-semibold uppercase tracking-[0.2em] px-[14px] py-[6px] bg-white/10 backdrop-blur-md border border-white/15 text-white/85">Proteção Total</span>
                        <span className="badge text-[9px] font-semibold uppercase tracking-[0.2em] px-[14px] py-[6px] bg-white/10 backdrop-blur-md border border-white/15 text-white/85">Multi-Ramo</span>
                    </div>
                </div>
                <div className="card-content pt-[1.8rem] opacity-0 translate-y-[20px]">
                    <p className="card-overline text-[10px] font-medium uppercase tracking-[0.3em] text-[#BFB38F] mb-[0.6rem]">Seguros Personalizados</p>
                    <h3 className="card-title text-[clamp(1.3rem,2.5vw,2rem)] font-bold tracking-[-0.02em] leading-[1.1] mb-[0.8rem] uppercase text-[#1A1A1A]">Blindagem<br/>Patrimonial</h3>
                    <p className="card-desc text-[13px] leading-[1.7] text-[#1A1A1A]/45 font-light max-w-[400px] mb-[1.2rem]">
                        Proteção inteligente para o que importa. Auto, residencial, vida e empresarial — com as melhores seguradoras.
                    </p>
                    <div className="card-stats flex gap-6 mb-6">
                        <div className="stat flex flex-col gap-[2px]">
                            <span className="stat-value text-[18px] font-bold tracking-[-0.02em] text-[#1A1A1A]">4+</span>
                            <span className="stat-label text-[9px] font-medium uppercase tracking-[0.25em] text-[#1A1A1A]/45">Ramos</span>
                        </div>
                        <div className="stat flex flex-col gap-[2px]">
                            <span className="stat-value text-[18px] font-bold tracking-[-0.02em] text-[#1A1A1A]">24h</span>
                            <span className="stat-label text-[9px] font-medium uppercase tracking-[0.25em] text-[#1A1A1A]/45">Assistência</span>
                        </div>
                    </div>
                    <SimulationCTA href="/seguros" label="Cotar Seguro" />
                </div>
            </div>

        </div>

        {/* FOOTER */}
        <div className="vault-footer mt-[8vh] pt-8 border-t border-[#1A1A1A]/12 flex justify-between items-center opacity-0">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#1A1A1A]/25">Certum Private — Sovereign Assets</span>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#1A1A1A]/25">3 Verticais Ativas</span>
        </div>

    </section>
  );
}
