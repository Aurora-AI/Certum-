"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ConsortiumPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroParticlesRef = useRef<HTMLDivElement>(null);
  const [activeChapter, setActiveChapter] = useState(0);

  // SECTION REFS for Navigation
  const heroRef = useRef<HTMLElement>(null);
  const chPontualRef = useRef<HTMLElement>(null);
  const chAutoRef = useRef<HTMLElement>(null);
  const chImovelRef = useRef<HTMLElement>(null);
  const chPesadosRef = useRef<HTMLElement>(null);
  const chMotosRef = useRef<HTMLElement>(null);
  const chServicosRef = useRef<HTMLElement>(null);
  const finaleRef = useRef<HTMLElement>(null);

  const scrollToSection = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // 1. HERO PARTICLES
      if (heroParticlesRef.current) {
        // Clear existing particles if any (React strict mode safety)
        heroParticlesRef.current.innerHTML = '';
        for (let i = 0; i < 25; i++) {
          const p = document.createElement('div');
          p.className = 'absolute rounded-full bg-[#BFB38F] opacity-0 animate-floatUp';
          const size = 2 + Math.random() * 4;
          p.style.width = size + 'px';
          p.style.height = size + 'px';
          p.style.left = Math.random() * 100 + '%';
          p.style.animationDuration = (8 + Math.random() * 12) + 's';
          p.style.animationDelay = Math.random() * 10 + 's';
          // Define keyframes in global CSS or style tag below
          heroParticlesRef.current.appendChild(p);
        }
      }

      // 2. HERO ENTRANCE
      const heroTl = gsap.timeline({ delay: 0.3 });
      heroTl.to('.hero-overline', { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0)
            .to('.hero-title-line1', { yPercent: 0, duration: 1.4, ease: "power4.out" }, 0.2)
            .to('.hero-title-line2', { yPercent: 0, duration: 1.4, ease: "power4.out" }, 0.35)
            .to('.hero-divider', { scaleX: 1, duration: 0.8, ease: "power3.inOut" }, 0.8)
            .to('.hero-desc', { opacity: 1, y: 0, duration: 0.8 }, 1.0)
            .to('.hero-scroll-cue', { opacity: 1, duration: 0.6 }, 1.4);

      // Hero Scroll Cue Pulse
      gsap.to('.scroll-line-fill', {
        y: 30, duration: 1.4, ease: "power2.inOut", repeat: -1, yoyo: true, delay: 2
      });

      // Hero Parallax
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => {
          gsap.set('.hero-content', {
            yPercent: self.progress * -30,
            opacity: 1 - self.progress * 1.5
          });
        }
      });

      // 3. CHAPTER REVEALS
      const chapters = gsap.utils.toArray<HTMLElement>('.chapter');
      chapters.forEach((chapter, i) => {
        const imageWrap = chapter.querySelector('.chapter-image-wrap');
        const img = chapter.querySelector('img');
        const index = chapter.querySelector('.ch-index');
        const overline = chapter.querySelector('.ch-overline');
        const titleWords = chapter.querySelectorAll('.ch-title-word');
        const desc = chapter.querySelector('.ch-desc');
        const stats = chapter.querySelector('.ch-stats');
        const features = chapter.querySelector('.ch-features');
        const cta = chapter.querySelector('.ch-cta');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: chapter,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
            onEnter: () => setActiveChapter(i + 1), // Offset by 1 for Hero
            onEnterBack: () => setActiveChapter(i + 1)
          }
        });

        // Image Reveal
        if (imageWrap) {
          tl.to(imageWrap, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.6, ease: "power4.inOut" }, 0);
          // Zoom settle simulation via animation class or separate tween
          if (img) tl.to(img, { scale: 1.0, duration: 2.5, ease: "power2.out", delay: 0.2 }, 0); 
        }

        // Text Content
        if (index) tl.to(index, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0.3);
        if (overline) tl.to(overline, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0.4);
        
        if (titleWords.length) {
            tl.to(titleWords, { yPercent: 0, duration: 1.2, ease: "power4.out", stagger: 0.1 }, 0.5);
        }

        if (desc) tl.to(desc, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0.8);
        if (stats) tl.to(stats, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 1.0);
        if (features) tl.to(features, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 1.1);
        if (cta) tl.to(cta, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 1.2);

        // Parallax Image
        if (img) {
          gsap.to(img, {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
              trigger: chapter,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6
            }
          });
        }
      });

      // 4. COUNTERS
      const counters = document.querySelectorAll('[data-count]');
      counters.forEach((el: Element) => {
        const target = parseInt(el.getAttribute('data-count') || '0');
        ScrollTrigger.create({
            trigger: el,
            start: "top 85%",
            once: true,
            onEnter: () => {
                const obj = { val: 0 };
                gsap.to(obj, {
                    val: target,
                    duration: 2,
                    ease: "power2.out",
                    onUpdate: () => {
                        el.textContent = Math.floor(obj.val).toString();
                    }
                })
            }
        })
      });

      // 5. TRANSITIONS
      const transitions = document.querySelectorAll('.scene-transition');
      transitions.forEach(trans => {
        const line = trans.querySelector('.transition-line');
        const text = trans.querySelector('.transition-text');
        
        gsap.timeline({
            scrollTrigger: {
                trigger: trans,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        })
        .to(line, { scaleX: 1, duration: 1.2, ease: "power3.inOut" }, 0)
        .to(text, { opacity: 1, duration: 0.8 }, 0.4);
      });

      // 6. FINALE
      const finaleTl = gsap.timeline({
          scrollTrigger: {
              trigger: finaleRef.current,
              start: "top 70%",
              toggleActions: "play none none reverse",
          }
      });
      finaleTl.to('.finale-overline', { opacity: 1, duration: 0.8 }, 0)
              .to('.finale-title-span', { yPercent: 0, duration: 1.2, ease: "power4.out" }, 0.2)
              .to('.finale-desc', { opacity: 1, duration: 0.8 }, 0.6)
              .to('.finale-cta', { opacity: 1, y: 0, duration: 0.7 }, 0.8);

      gsap.to('.finale-glow', {
          scale: 1.2, opacity: 0.8, duration: 4, ease: "power1.inOut", repeat: -1, yoyo: true
      });

      // Update Nav Dots for Hero
      ScrollTrigger.create({
          trigger: heroRef.current,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveChapter(0),
          onEnterBack: () => setActiveChapter(0)
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="bg-[#1A1A1A] text-white min-h-screen relative font-sans overflow-x-hidden selection:bg-[#BFB38F] selection:text-[#1A1A1A]">
        
        {/* GRAIN */}
        <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.04] mix-blend-overlay" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} 
        />

        {/* CSS FOR PARTICLES */}
        <style jsx global>{`
            @keyframes floatUp {
                0% { transform: translateY(100vh) scale(0); opacity: 0; }
                10% { opacity: 0.3; }
                90% { opacity: 0.1; }
                100% { transform: translateY(-10vh) scale(1); opacity: 0; }
            }
            .animate-floatUp {
                animation: floatUp linear infinite;
            }
        `}</style>

        {/* NAV */}
        <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[5vw] py-6 mix-blend-difference pointer-events-none">
            <span className="text-[12px] font-bold tracking-[0.3em] uppercase text-white">Certum</span>
            <Link href="/" className="pointer-events-auto text-[10px] font-medium tracking-[0.25em] uppercase text-white/50 hover:text-white transition-opacity flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" /> Voltar
            </Link>
        </nav>

        {/* CHAPTER TRACKER */}
        <div className="fixed right-[5vw] top-1/2 -translate-y-1/2 z-[100] hidden md:flex flex-col gap-3 items-end mix-blend-difference">
            {[heroRef, chPontualRef, chAutoRef, chImovelRef, chPesadosRef, chMotosRef, chServicosRef].map((ref, i) => (
                <div 
                    key={i}
                    onClick={() => scrollToSection(ref)}
                    className={`w-1.5 h-1.5 rounded-full cursor-pointer transition-all duration-500 ${activeChapter === i ? 'bg-[#BFB38F] w-2 h-2 shadow-[0_0_12px_rgba(191,179,143,0.4)]' : 'bg-white/20 hover:bg-white/50'}`}
                />
            ))}
        </div>

        {/* 1. HERO */}
        <section ref={heroRef} className="hero relative h-screen flex items-center justify-center bg-[#1A1A1A] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(191,179,143,0.08)_0%,transparent_70%)]" />
            <div ref={heroParticlesRef} className="absolute inset-0 overflow-hidden" />
            
            <div className="hero-content relative z-10 text-center flex flex-col items-center gap-6">
                <div className="hero-overline text-[10px] font-medium tracking-[0.4em] uppercase text-[#BFB38F] opacity-0 translate-y-[20px]">Consórcio Rodobens — Certum Private</div>
                <div className="hero-title overflow-hidden">
                    <h1 className="hero-title-line1 text-[clamp(3rem,10vw,9rem)] font-bold uppercase tracking-[-0.04em] leading-[0.85] translate-y-[120%]">Seu Novo</h1>
                </div>
                <div className="hero-title overflow-hidden">
                    <h1 className="hero-title-line2 text-[clamp(3rem,10vw,9rem)] font-bold uppercase tracking-[-0.04em] leading-[0.85] translate-y-[120%] text-[#BFB38F]">Patrimônio</h1>
                </div>
                <div className="hero-divider w-[60px] h-[1px] bg-[#BFB38F] scale-x-0 origin-center" />
                <p className="hero-desc max-w-[500px] text-[14px] leading-[1.8] text-white/40 font-light opacity-0 translate-y-[20px]">
                    Onde sonhos ganham forma através de planejamento estratégico. <br/> Cada capítulo abaixo é uma porta para o seu próximo ativo.
                </p>
            </div>

            <div className="hero-scroll-cue absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0">
                <span className="text-[9px] font-medium uppercase tracking-[0.4em] text-white/20">Explore</span>
                <div className="scroll-line w-[1px] h-[40px] bg-white/10 relative overflow-hidden">
                    <div className="scroll-line-fill absolute top-0 left-0 w-full h-[10px] bg-[#BFB38F] rounded-sm" />
                </div>
            </div>
        </section>

        {/* CH.01 - PONTUAL */}
        <section ref={chPontualRef} className="chapter relative min-h-screen flex flex-col md:flex-row items-stretch bg-[#1A1A1A] text-white overflow-hidden">
            <div className="chapter-image-side relative w-full md:w-[55%] h-[50vh] md:h-auto overflow-hidden">
                <div className="chapter-image-wrap absolute inset-0" style={{ clipPath: "inset(100% 0% 0% 0%)" }}>
                    <Image src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1400&q=80" alt="Pontual" fill className="object-cover transform scale-120" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/60 via-transparent to-transparent" />
                </div>
            </div>
            <div className="chapter-content-side w-full md:w-[45%] flex flex-col justify-center px-[5vw] py-[8vh]">
                <div className="ch-index text-[10px] font-mono tracking-[0.2em] uppercase mb-6 text-white/30 opacity-0 translate-y-[15px]">Cap. 01 — Protocolo Pontual</div>
                <div className="ch-overline text-[10px] font-semibold tracking-[0.3em] uppercase text-[#BFB38F] mb-3 opacity-0 translate-y-[15px]">Plano Pontual Rodobens</div>
                <h2 className="ch-title text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase tracking-[-0.02em] leading-[1] mb-6">
                    <span className="block overflow-hidden"><span className="ch-title-word inline-block translate-y-[110%]">Seu Carro em</span></span>
                    <span className="block overflow-hidden"><span className="ch-title-word inline-block translate-y-[110%]">6 Meses</span></span>
                </h2>
                <p className="ch-desc text-[14px] leading-[1.8] font-light max-w-[420px] mb-8 text-white/45 opacity-0 translate-y-[20px]">
                    Esqueça o sorteio. Com o Pontual Rodobens, você antecipa as parcelas a partir da 6ª assembleia e retira seu 0km. Planejamento, não sorte.
                </p>
                <div className="ch-stats flex gap-10 mb-10 opacity-0 translate-y-[20px]">
                    <div>
                        <div className="ch-stat-value text-[clamp(1.8rem,3vw,2.5rem)] font-bold tracking-[-0.03em] leading-none text-[#BFB38F]" data-count="6">0</div>
                        <div className="ch-stat-label text-[9px] font-medium uppercase tracking-[0.25em] mt-1 text-white/30">Meses p/ Entrega</div>
                    </div>
                    <div>
                        <div className="ch-stat-value text-[clamp(1.8rem,3vw,2.5rem)] font-bold tracking-[-0.03em] leading-none text-[#BFB38F]">0%</div>
                        <div className="ch-stat-label text-[9px] font-medium uppercase tracking-[0.25em] mt-1 text-white/30">Juros</div>
                    </div>
                </div>
                <div className="ch-features flex flex-col gap-2 mb-8 opacity-0 translate-y-[20px]">
                     {["Menor taxa do mercado", "2 em 1: Crédito com preço de consórcio", "Liberdade total de escolha"].map((feat, i) => (
                         <div key={i} className="flex items-center gap-3 text-[12px] text-white/50">
                             <div className="w-1.5 h-1.5 rounded-full bg-[#BFB38F]" /> {feat}
                         </div>
                     ))}
                </div>
                <div className="ch-cta opacity-0 translate-y-[15px]">
                    <Link href="/consorcio/pontual" className="btn-chapter inline-flex items-center gap-3 px-9 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] bg-[#BFB38F] text-[#1A1A1A] hover:bg-[#D4C9A8] transition-colors">
                        Simular Pontual <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </div>
            </div>
        </section>

        {/* TRANSITION */}
        <div className="scene-transition h-[35vh] flex items-center justify-center bg-[#1A1A1A] relative overflow-hidden">
            <div className="transition-line absolute left-[5vw] right-[5vw] top-1/2 h-[1px] bg-white/5 scale-x-0 origin-center" />
            <div className="transition-text text-[10px] font-mono tracking-[0.35em] uppercase text-white/10 opacity-0">Próximo Capítulo</div>
        </div>

        {/* CH.02 - AUTO */}
        <section ref={chAutoRef} className="chapter chapter--light relative min-h-screen flex flex-col md:flex-row-reverse items-stretch bg-white text-[#1A1A1A] overflow-hidden">
            <div className="chapter-image-side relative w-full md:w-[55%] h-[50vh] md:h-auto overflow-hidden">
                <div className="chapter-image-wrap absolute inset-0" style={{ clipPath: "inset(100% 0% 0% 0%)" }}>
                    <Image src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1400&q=80" alt="Auto" fill className="object-cover transform scale-120" />
                    <div className="absolute inset-0 bg-gradient-to-l from-white/50 via-transparent to-transparent" />
                </div>
            </div>
            <div className="chapter-content-side w-full md:w-[45%] flex flex-col justify-center px-[5vw] py-[8vh]">
                <div className="ch-index text-[10px] font-mono tracking-[0.2em] uppercase mb-6 text-[#1A1A1A]/30 opacity-0 translate-y-[15px]">Cap. 02 — Rodobens Auto</div>
                <div className="ch-overline text-[10px] font-semibold tracking-[0.3em] uppercase text-[#BFB38F] mb-3 opacity-0 translate-y-[15px]">Consórcio de Automóveis</div>
                <h2 className="ch-title text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase tracking-[-0.02em] leading-[1] mb-6 text-[#1A1A1A]">
                    <span className="block overflow-hidden"><span className="ch-title-word inline-block translate-y-[110%]">Seu Carro</span></span>
                    <span className="block overflow-hidden"><span className="ch-title-word inline-block translate-y-[110%]">0km</span></span>
                </h2>
                <p className="ch-desc text-[14px] leading-[1.8] font-light max-w-[420px] mb-8 text-[#1A1A1A]/50 opacity-0 translate-y-[20px]">
                    O consórcio tradicional com as melhores condições do mercado. Parcelas que cabem no bolso e liberdade para escolher qualquer marca ou modelo.
                </p>
                <div className="ch-stats flex gap-10 mb-10 opacity-0 translate-y-[20px]">
                    <div>
                        <div className="ch-stat-value text-[clamp(1.8rem,3vw,2.5rem)] font-bold tracking-[-0.03em] leading-none text-[#1A1A1A]" data-count="80">0</div>
                        <div className="ch-stat-label text-[9px] font-medium uppercase tracking-[0.25em] mt-1 text-[#1A1A1A]/35">Meses de Prazo</div>
                    </div>
                    <div>
                        <div className="ch-stat-value text-[clamp(1.8rem,3vw,2.5rem)] font-bold tracking-[-0.03em] leading-none text-[#1A1A1A]">R$ 350K</div>
                        <div className="ch-stat-label text-[9px] font-medium uppercase tracking-[0.25em] mt-1 text-[#1A1A1A]/35">Crédito Máx.</div>
                    </div>
                </div>
                <div className="ch-cta opacity-0 translate-y-[15px]">
                    <Link href="/consorcio/auto" className="btn-chapter inline-flex items-center gap-3 px-9 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] bg-[#1A1A1A] text-white hover:bg-[#2a2a2a] transition-colors">
                        Simular Auto <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </div>
            </div>
        </section>

        {/* TRANSITION */}
        <div className="scene-transition h-[35vh] flex items-center justify-center bg-white relative overflow-hidden">
            <div className="transition-line absolute left-[5vw] right-[5vw] top-1/2 h-[1px] bg-[#1A1A1A]/5 scale-x-0 origin-center" />
            <div className="transition-text text-[10px] font-mono tracking-[0.35em] uppercase text-[#1A1A1A]/10 opacity-0">Próximo Capítulo</div>
        </div>

        {/* CH.03 - IMOVEL */}
        <section ref={chImovelRef} className="chapter relative min-h-screen flex flex-col md:flex-row items-stretch bg-[#1A1A1A] text-white overflow-hidden">
            <div className="chapter-image-side relative w-full md:w-[55%] h-[50vh] md:h-auto overflow-hidden">
                <div className="chapter-image-wrap absolute inset-0" style={{ clipPath: "inset(100% 0% 0% 0%)" }}>
                    <Image src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=80" alt="Imovel" fill className="object-cover transform scale-120" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/60 via-transparent to-transparent" />
                </div>
            </div>
            <div className="chapter-content-side w-full md:w-[45%] flex flex-col justify-center px-[5vw] py-[8vh]">
                <div className="ch-index text-[10px] font-mono tracking-[0.2em] uppercase mb-6 text-white/30 opacity-0 translate-y-[15px]">Cap. 03 — Rodobens Imóveis</div>
                <div className="ch-overline text-[10px] font-semibold tracking-[0.3em] uppercase text-[#BFB38F] mb-3 opacity-0 translate-y-[15px]">Consórcio Imobiliário</div>
                <h2 className="ch-title text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase tracking-[-0.02em] leading-[1] mb-6">
                    <span className="block overflow-hidden"><span className="ch-title-word inline-block translate-y-[110%]">Seu Novo</span></span>
                    <span className="block overflow-hidden"><span className="ch-title-word inline-block translate-y-[110%]">Imóvel</span></span>
                </h2>
                <p className="ch-desc text-[14px] leading-[1.8] font-light max-w-[420px] mb-8 text-white/45 opacity-0 translate-y-[20px]">
                    A forma inteligente de ampliar seu patrimônio. Compra, construção ou reforma sem juros abusivos. Créditos de até R$ 1 Milhão com prazos flexíveis.
                </p>
                <div className="ch-stats flex gap-10 mb-10 opacity-0 translate-y-[20px]">
                    <div>
                        <div className="ch-stat-value text-[clamp(1.8rem,3vw,2.5rem)] font-bold tracking-[-0.03em] leading-none text-[#BFB38F]" data-count="216">0</div>
                        <div className="ch-stat-label text-[9px] font-medium uppercase tracking-[0.25em] mt-1 text-white/30">Meses de Prazo</div>
                    </div>
                    <div>
                        <div className="ch-stat-value text-[clamp(1.8rem,3vw,2.5rem)] font-bold tracking-[-0.03em] leading-none text-[#BFB38F]">R$ 1M</div>
                        <div className="ch-stat-label text-[9px] font-medium uppercase tracking-[0.25em] mt-1 text-white/30">Crédito Máx.</div>
                    </div>
                </div>
                <div className="ch-cta opacity-0 translate-y-[15px]">
                    <Link href="/consorcio/imovel" className="btn-chapter inline-flex items-center gap-3 px-9 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] bg-[#BFB38F] text-[#1A1A1A] hover:bg-[#D4C9A8] transition-colors">
                        Simular Imóvel <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </div>
            </div>
        </section>

        {/* TRANSITION */}
        <div className="scene-transition h-[35vh] flex items-center justify-center bg-[#1A1A1A] relative overflow-hidden">
            <div className="transition-line absolute left-[5vw] right-[5vw] top-1/2 h-[1px] bg-white/5 scale-x-0 origin-center" />
            <div className="transition-text text-[10px] font-mono tracking-[0.35em] uppercase text-white/10 opacity-0">Próximo Capítulo</div>
        </div>

         {/* CH.04 - PESADOS */}
        <section ref={chPesadosRef} className="chapter chapter--light relative min-h-screen flex flex-col md:flex-row-reverse items-stretch bg-white text-[#1A1A1A] overflow-hidden">
            <div className="chapter-image-side relative w-full md:w-[55%] h-[50vh] md:h-auto overflow-hidden">
                <div className="chapter-image-wrap absolute inset-0" style={{ clipPath: "inset(100% 0% 0% 0%)" }}>
                    <Image src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1400&q=80" alt="Pesados" fill className="object-cover transform scale-120" />
                    <div className="absolute inset-0 bg-gradient-to-l from-white/50 via-transparent to-transparent" />
                </div>
            </div>
            <div className="chapter-content-side w-full md:w-[45%] flex flex-col justify-center px-[5vw] py-[8vh]">
                <div className="ch-index text-[10px] font-mono tracking-[0.2em] uppercase mb-6 text-[#1A1A1A]/30 opacity-0 translate-y-[15px]">Cap. 04 — Rodobens Pesados</div>
                <div className="ch-overline text-[10px] font-semibold tracking-[0.3em] uppercase text-[#BFB38F] mb-3 opacity-0 translate-y-[15px]">Frota & Agro</div>
                <h2 className="ch-title text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase tracking-[-0.02em] leading-[1] mb-6 text-[#1A1A1A]">
                    <span className="block overflow-hidden"><span className="ch-title-word inline-block translate-y-[110%]">Transporte</span></span>
                    <span className="block overflow-hidden"><span className="ch-title-word inline-block translate-y-[110%]">& Força</span></span>
                </h2>
                <p className="ch-desc text-[14px] leading-[1.8] font-light max-w-[420px] mb-8 text-[#1A1A1A]/50 opacity-0 translate-y-[20px]">
                    Para quem transporta o Brasil. Caminhões, máquinas e implementos com planos que respeitam o fluxo de caixa do seu negócio.
                </p>
                <div className="ch-stats flex gap-10 mb-10 opacity-0 translate-y-[20px]">
                    <div>
                        <div className="ch-stat-value text-[clamp(1.8rem,3vw,2.5rem)] font-bold tracking-[-0.03em] leading-none text-[#1A1A1A]" data-count="120">0</div>
                        <div className="ch-stat-label text-[9px] font-medium uppercase tracking-[0.25em] mt-1 text-[#1A1A1A]/35">Meses</div>
                    </div>
                </div>
                <div className="ch-cta opacity-0 translate-y-[15px]">
                    <Link href="/consorcio/pesados" className="btn-chapter inline-flex items-center gap-3 px-9 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] bg-[#1A1A1A] text-white hover:bg-[#2a2a2a] transition-colors">
                        Cotar Pesados <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </div>
            </div>
        </section>

        {/* TRANSITION */}
        <div className="scene-transition h-[35vh] flex items-center justify-center bg-white relative overflow-hidden">
            <div className="transition-line absolute left-[5vw] right-[5vw] top-1/2 h-[1px] bg-[#1A1A1A]/5 scale-x-0 origin-center" />
            <div className="transition-text text-[10px] font-mono tracking-[0.35em] uppercase text-[#1A1A1A]/10 opacity-0">Próximo Capítulo</div>
        </div>

        {/* CH.05 - MOTOS */}
        <section ref={chMotosRef} className="chapter relative min-h-screen flex flex-col md:flex-row items-stretch bg-[#1A1A1A] text-white overflow-hidden">
            <div className="chapter-image-side relative w-full md:w-[55%] h-[50vh] md:h-auto overflow-hidden">
                <div className="chapter-image-wrap absolute inset-0" style={{ clipPath: "inset(100% 0% 0% 0%)" }}>
                    <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1400&q=80" alt="Moto" fill className="object-cover transform scale-120" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/60 via-transparent to-transparent" />
                </div>
            </div>
            <div className="chapter-content-side w-full md:w-[45%] flex flex-col justify-center px-[5vw] py-[8vh]">
                <div className="ch-index text-[10px] font-mono tracking-[0.2em] uppercase mb-6 text-white/30 opacity-0 translate-y-[15px]">Cap. 05 — Lifestyle</div>
                <div className="ch-overline text-[10px] font-semibold tracking-[0.3em] uppercase text-[#BFB38F] mb-3 opacity-0 translate-y-[15px]">Motos & Náutica</div>
                <h2 className="ch-title text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase tracking-[-0.02em] leading-[1] mb-6">
                    <span className="block overflow-hidden"><span className="ch-title-word inline-block translate-y-[110%]">Liberdade</span></span>
                    <span className="block overflow-hidden"><span className="ch-title-word inline-block translate-y-[110%]">Sobre Rodas</span></span>
                </h2>
                <div className="ch-stats flex gap-10 mb-10 opacity-0 translate-y-[20px]">
                     <div>
                        <div className="ch-stat-value text-[clamp(1.8rem,3vw,2.5rem)] font-bold tracking-[-0.03em] leading-none text-[#BFB38F]">R$ 200K</div>
                        <div className="ch-stat-label text-[9px] font-medium uppercase tracking-[0.25em] mt-1 text-white/30">Crédito Máx.</div>
                    </div>
                </div>
                <div className="ch-cta opacity-0 translate-y-[15px]">
                    <Link href="/consorcio/motos" className="btn-chapter inline-flex items-center gap-3 px-9 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] bg-[#BFB38F] text-[#1A1A1A] hover:bg-[#D4C9A8] transition-colors">
                        Simular Motos <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </div>
            </div>
        </section>

        {/* TRANSITION */}
        <div className="scene-transition h-[35vh] flex items-center justify-center bg-[#1A1A1A] relative overflow-hidden">
            <div className="transition-line absolute left-[5vw] right-[5vw] top-1/2 h-[1px] bg-white/5 scale-x-0 origin-center" />
            <div className="transition-text text-[10px] font-mono tracking-[0.35em] uppercase text-white/10 opacity-0">Capítulo Final</div>
        </div>

        {/* CH.06 - SERVIÇOS */}
        <section ref={chServicosRef} className="chapter chapter--light relative min-h-screen flex flex-col md:flex-row-reverse items-stretch bg-white text-[#1A1A1A] overflow-hidden">
            <div className="chapter-image-side relative w-full md:w-[55%] h-[50vh] md:h-auto overflow-hidden">
                <div className="chapter-image-wrap absolute inset-0" style={{ clipPath: "inset(100% 0% 0% 0%)" }}>
                    <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1400&q=80" alt="Servicos" fill className="object-cover transform scale-120" />
                    <div className="absolute inset-0 bg-gradient-to-l from-white/50 via-transparent to-transparent" />
                </div>
            </div>
            <div className="chapter-content-side w-full md:w-[45%] flex flex-col justify-center px-[5vw] py-[8vh]">
                <div className="ch-index text-[10px] font-mono tracking-[0.2em] uppercase mb-6 text-[#1A1A1A]/30 opacity-0 translate-y-[15px]">Cap. 06 — Crédito Livre</div>
                <div className="ch-overline text-[10px] font-semibold tracking-[0.3em] uppercase text-[#BFB38F] mb-3 opacity-0 translate-y-[15px]">Consórcio de Serviços</div>
                <h2 className="ch-title text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase tracking-[-0.02em] leading-[1] mb-6 text-[#1A1A1A]">
                    <span className="block overflow-hidden"><span className="ch-title-word inline-block translate-y-[110%]">Crédito para</span></span>
                    <span className="block overflow-hidden"><span className="ch-title-word inline-block translate-y-[110%]">Realizar</span></span>
                </h2>
                <p className="ch-desc text-[14px] leading-[1.8] font-light max-w-[420px] mb-8 text-[#1A1A1A]/50 opacity-0 translate-y-[20px]">
                    Utilize sua carta de crédito para o que desejar: reformas, cirurgias estéticas, viagens, educação. Liberdade financeira.
                </p>
                <div className="ch-cta opacity-0 translate-y-[15px]">
                    <Link href="/consorcio/servicos" className="btn-chapter inline-flex items-center gap-3 px-9 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] bg-[#1A1A1A] text-white hover:bg-[#2a2a2a] transition-colors">
                        Explorar Serviços <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </div>
            </div>
        </section>

        {/* FINALE */}
        <section ref={finaleRef} className="finale relative h-screen flex items-center justify-center bg-[#1A1A1A] text-center overflow-hidden">
            <div className="finale-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(191,179,143,0.06)_0%,transparent_70%)]" />
            <div className="finale-content relative z-10 flex flex-col items-center gap-8">
                <div className="finale-overline text-[10px] font-medium tracking-[0.4em] uppercase text-[#BFB38F] opacity-0">Todos os capítulos levam ao mesmo destino</div>
                <h2 className="finale-title text-[clamp(2rem,5vw,4rem)] font-bold uppercase tracking-[-0.02em] leading-[1]">
                    <span className="finale-title-span block translate-y-[110%]">Seu Patrimônio</span>
                    <span className="finale-title-span block translate-y-[110%]">Começa Aqui</span>
                </h2>
                <p className="finale-desc text-[14px] leading-[1.8] text-white/35 font-light max-w-[450px] opacity-0">
                    Fale com um especialista Certum e descubra qual capítulo é o seu próximo passo.
                </p>
                <div className="finale-cta opacity-0 translate-y-[15px]">
                    <Link href="/agent" className="btn-chapter inline-flex items-center gap-3 px-12 py-5 text-[13px] font-semibold uppercase tracking-[0.25em] bg-[#BFB38F] text-[#1A1A1A] hover:bg-[#D4C9A8] transition-colors">
                        Falar com Banker <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </div>
            </div>
        </section>

    </main>
  );
}
