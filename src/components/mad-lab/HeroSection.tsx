"use client";

import { useRef, useLayoutEffect, useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNeuroSensor } from "@/hooks/useNeuroSensor";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

interface HeroSectionProps {
  mode: "dream" | "chat";
  onActivate: (prompt?: string) => void;
}

export function HeroSection({ onActivate }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  // ─── PARTICLE SYSTEM ───
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W: number, H: number, dpr: number;
    let animId: number;
    const particles: Particle[] = [];
    
    // Mouse state
    const mouse = { x: -9999, y: -9999, active: false };

    // Configuration
    const PALETTE = [
        { r: 191, g: 179, b: 143, a: 0.6 },   // Gold primary
        { r: 212, g: 201, b: 168, a: 0.5 },   // Gold light
        { r: 168, g: 152, b: 109, a: 0.5 },   // Gold dark
        { r: 200, g: 190, b: 175, a: 0.35 },  // Warm gray
        { r: 180, g: 165, b: 145, a: 0.4 },   // Taupe
        { r: 160, g: 130, b: 100, a: 0.3 },   // Bronze
        { r: 80, g: 75, b: 70, a: 0.15 },     // Charcoal
    ];

    const CONFIG = {
        count: 180,
        minRadius: 2,
        maxRadius: 7,
        mouseRadius: 200,
        mouseForce: 0.08,
        friction: 0.92,
        returnForce: 0.008,
        drift: 0.15,
        noiseScale: 0.001,
        noiseSpeed: 0.0003,
    };

    // Helper: Noise 2D
    const noise2D = (x: number, y: number) => {
        const xi = Math.floor(x), yi = Math.floor(y);
        const xf = x - xi, yf = y - yi;
        const hash = (a: number, b: number) => {
            let h = (a * 2654435761 ^ b * 2246822519) & 0x7fffffff;
            h = ((h >> 16) ^ h) * 0x45d9f3b;
            return ((h >> 16) ^ h) & 0x7fffffff;
        };
        const unit = 1 / 0x7fffffff;
        const aa = hash(xi, yi) * unit;
        const ab = hash(xi, yi + 1) * unit;
        const ba = hash(xi + 1, yi) * unit;
        const bb = hash(xi + 1, yi + 1) * unit;
        const sx = xf * xf * (3 - 2 * xf);
        const sy = yf * yf * (3 - 2 * yf);
        return aa * (1-sx)*(1-sy) + ba * sx*(1-sy) + ab * (1-sx)*sy + bb * sx*sy;
    };

    class Particle {
        x: number = 0; y: number = 0;
        ox: number = 0; oy: number = 0;
        vx: number = 0; vy: number = 0;
        radius: number = 0;
        color: { r: number, g: number, b: number, a: number };
        baseAlpha: number = 0;
        alpha: number = 0;
        phase: number = 0;
        noiseOffsetX: number = 0;
        noiseOffsetY: number = 0;
        pulseSpeed: number = 0;
        pulseAmount: number = 0;

        constructor() {
            this.color = PALETTE[0]; // Default
            this.reset();
        }

        reset() {
            this.ox = Math.random() * W;
            this.oy = Math.random() * H;
            this.x = this.ox;
            this.y = this.oy;
            this.vx = 0; 
            this.vy = 0;
            
            const c = PALETTE[Math.floor(Math.random() * PALETTE.length)];
            this.color = c;
            this.baseAlpha = c.a;
            this.alpha = c.a;
            
            this.radius = CONFIG.minRadius + Math.random() * (CONFIG.maxRadius - CONFIG.minRadius);
            this.phase = Math.random() * Math.PI * 2;
            this.noiseOffsetX = Math.random() * 1000;
            this.noiseOffsetY = Math.random() * 1000;
            this.pulseSpeed = 0.5 + Math.random() * 1.5;
            this.pulseAmount = 0.15 + Math.random() * 0.25;
        }

        update(time: number) {
            // Mouse Repulsion
            if (mouse.active) {
                const dx = this.x - mouse.x;
                const dy = this.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < CONFIG.mouseRadius && dist > 0) {
                    const force = (1 - dist / CONFIG.mouseRadius) * CONFIG.mouseForce;
                    const angle = Math.atan2(dy, dx);
                    this.vx += Math.cos(angle) * force * (CONFIG.mouseRadius / dist) * 0.5;
                    this.vy += Math.sin(angle) * force * (CONFIG.mouseRadius / dist) * 0.5;
                    this.alpha = Math.min(1, this.baseAlpha + (1 - dist / CONFIG.mouseRadius) * 0.5);
                } else {
                    this.alpha += (this.baseAlpha - this.alpha) * 0.05;
                }
            } else {
                this.alpha += (this.baseAlpha - this.alpha) * 0.05;
            }

            // Noise Drift
            const n = noise2D(
                (this.x + this.noiseOffsetX) * CONFIG.noiseScale + time * CONFIG.noiseSpeed,
                (this.y + this.noiseOffsetY) * CONFIG.noiseScale + time * CONFIG.noiseSpeed
            );
            const driftAngle = n * Math.PI * 4;
            this.vx += Math.cos(driftAngle) * CONFIG.drift * 0.02;
            this.vy += Math.sin(driftAngle) * CONFIG.drift * 0.02;

            // Spring Return
            this.vx += (this.ox - this.x) * CONFIG.returnForce;
            this.vy += (this.oy - this.y) * CONFIG.returnForce;

            // Friction
            this.vx *= CONFIG.friction;
            this.vy *= CONFIG.friction;

            // Move
            this.x += this.vx;
            this.y += this.vy;
        }

        draw(time: number) {
            if (!ctx) return;
            const pulse = 1 + Math.sin(time * this.pulseSpeed + this.phase) * this.pulseAmount;
            const r = this.radius * pulse;
            
            // Soft glow
            const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, r * 2.5);
            gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.alpha * 0.8})`);
            gradient.addColorStop(0.4, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.alpha * 0.3})`);
            gradient.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`);
            
            ctx.beginPath();
            ctx.arc(this.x, this.y, r * 2.5, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();

            // Core dot
            ctx.beginPath();
            ctx.arc(this.x, this.y, r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.alpha})`;
            ctx.fill();
        }
    }

    const init = () => {
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        W = window.innerWidth;
        H = window.innerHeight;
        canvas.width = W * dpr;
        canvas.height = H * dpr;
        canvas.style.width = W + 'px';
        canvas.style.height = H + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        particles.length = 0;
        for (let i = 0; i < CONFIG.count; i++) {
            particles.push(new Particle());
        }
    };

    const startTime = performance.now();
    const animate = () => {
        const time = (performance.now() - startTime) * 0.001;
        ctx.clearRect(0, 0, W, H);
        for (const p of particles) {
            p.update(time);
            p.draw(time);
        }
        animId = requestAnimationFrame(animate);
    };

    // Event Listeners
    const onResize = () => {
        init();
    };

    const onMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
        mouse.active = true;
    };
    
    const onMouseLeave = () => {
        mouse.active = false;
    };

    window.addEventListener('resize', onResize);
    // Bind mouse events to a wrapper or window if canvas is behind
    // We'll bind to window for broader capture or container
    if (containerRef.current) {
        containerRef.current.addEventListener('mousemove', onMouseMove);
        containerRef.current.addEventListener('mouseleave', onMouseLeave);
    }

    init();
    animate();

    return () => {
        window.removeEventListener('resize', onResize);
        if (containerRef.current) {
            containerRef.current.removeEventListener('mousemove', onMouseMove);
            containerRef.current.removeEventListener('mouseleave', onMouseLeave);
        }
        cancelAnimationFrame(animId);
    };
  }, []); // Run once on mount

  // ─── GSAP ANIMATION ───
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        const tl = gsap.timeline({
            defaults: { ease: "power4.out" },
            onComplete: () => setPreloaderComplete(true)
        });

        // 0. Preloader Sequence (Simulated)
        const counter = { val: 0 };
        tl.to(counter, {
            val: 100, duration: 2.0, ease: "power2.inOut",
            onUpdate: () => {
                const el = document.querySelector('.preloader-count');
                if (el) el.textContent = String(Math.floor(counter.val)).padStart(3, '0');
            }
        }, 0)
        .to('.preloader-bar', { width: '100%', duration: 2.0, ease: "power2.inOut" }, 0)
        .to('.preloader', { yPercent: -100, duration: 1.0, ease: "power4.inOut" }, 2.2);

        // Hero Entrance (Starts after preloader roughly)
        const heroTl = gsap.timeline({ defaults: { ease: "power4.out" }, delay: 2.4 });
        
        // 1. Image Clip Reveal
        heroTl.to('.hero-image-wrap', { clipPath: "inset(0% 0% 0% 0%)", duration: 1.8, ease: "power4.inOut" }, 0);
        heroTl.to('.hero-image-inner', { scale: 1.0, duration: 2.6, ease: "power3.out" }, 0);

        // 2. Text Reveal
        heroTl.to('.hero-line', { yPercent: 0, rotateX: 0, duration: 1.3, stagger: 0.12 }, 0.8);
        
        // 3. Divider
        heroTl.to('.hero-divider', { scaleX: 1, duration: 1.0, ease: "power3.inOut" }, 1.5);

        // 4. Tagline & CTAs
        heroTl.to('.hero-tagline', { opacity: 1, y: 0, duration: 0.9 }, 1.7);
        heroTl.to('.hero-cta', { opacity: 1, y: 0, duration: 0.9, stagger: 0.1 }, 1.9);

        // 5. Corners
        heroTl.to('.corner', { opacity: 1, duration: 0.7, stagger: 0.1 }, 2.1);
        
        // 6. Scroll Indicator
        heroTl.to('.scroll-indicator', { opacity: 1, duration: 0.6 }, 2.5);
        gsap.to('.scroll-dot', { y: 24, duration: 1.3, ease: "power2.inOut", repeat: -1, yoyo: true, delay: 3.0 });

        // Parallax
        ScrollTrigger.create({
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.8,
            onUpdate: (self) => {
                const p = self.progress;
                gsap.set('.hero-image-inner', { yPercent: p * 18, scale: 1 + p * 0.06 });
                gsap.set('.hero-text-content', { yPercent: p * -12 });
                const overlay = document.querySelector('.hero-image-overlay') as HTMLElement;
                if(overlay) overlay.style.opacity = String(0.12 + p * 0.5);
            }
        });

        // Magnetic Buttons
        const btns = document.querySelectorAll('.btn-magnetic');
        btns.forEach(btn => {
            btn.addEventListener('mousemove', (e: any) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.4, ease: "power3.out" });
            });
            btn.addEventListener('mouseleave', () => {
                gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1,0.3)" });
            });
        });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-white text-[#1A1A1A] font-sans">
        
        {/* PRELOADER */}
        <div className="preloader fixed inset-0 z-[9999] bg-[#1A1A1A] flex flex-col items-center justify-center gap-4">
            <div className="preloader-text text-[11px] font-medium uppercase tracking-[0.35em] text-white/40 font-mono">
                Certum Private
            </div>
            <div className="preloader-bar-track w-[120px] h-[1px] bg-white/10 relative overflow-hidden">
                <div className="preloader-bar absolute left-0 top-0 h-full w-0 bg-[#BFB38F]" />
            </div>
            <div className="preloader-count text-[10px] font-mono text-white/30 tracking-[0.15em]">
                000
            </div>
        </div>

        {/* PARTICLE CANVAS */}
        <canvas ref={canvasRef} id="particleCanvas" className="absolute inset-0 z-[1] w-full h-full pointer-events-none" />

        {/* HERO IMAGE */}
        <div className="hero-image-wrap absolute top-[5vh] right-[5vw] w-[48vw] h-[88vh] z-10" style={{ clipPath: "inset(100% 0% 0% 0%)" }}>
            <div className="hero-image-inner w-full h-full relative overflow-hidden transform scale-140 origin-center">
                <Image 
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=80"
                    alt="Sovereign Estates"
                    fill
                    className="object-cover block"
                    priority
                />
                <div className="hero-image-overlay absolute inset-0 bg-[#1A1A1A]/12 mix-blend-multiply" />
            </div>
        </div>

        {/* BOTTOM GRADIENT */}
        <div className="hero-gradient absolute bottom-0 left-0 right-0 h-[30vh] z-15 pointer-events-none bg-gradient-to-t from-white via-white/60 to-transparent" />

        {/* TEXT CONTENT */}
        <div className="hero-text-content absolute inset-0 z-20 flex flex-col justify-end p-[5vw] pb-[9vh] pointer-events-none">
            <div className="flex flex-col gap-0 pointer-events-auto">
                <div className="overflow-hidden perspective-[600px]">
                    <h1 className="hero-line text-[#1A1A1A] text-[clamp(3.2rem,12vw,11rem)] font-bold uppercase tracking-tighter leading-[0.85] origin-bottom transform translate-y-[110%] rotate-x-12">
                        Sovereign
                    </h1>
                </div>
                <div className="overflow-hidden perspective-[600px] ml-0 md:ml-[12vw]">
                    <h1 className="hero-line text-[#BFB38F] text-[clamp(3.2rem,12vw,11rem)] font-bold uppercase tracking-tighter leading-[0.85] origin-bottom transform translate-y-[110%] rotate-x-12">
                        Standard
                    </h1>
                </div>
            </div>

            <div className="hero-divider mt-8 w-[400px] max-w-[50vw] h-[1px] bg-[#1A1A1A]/20 origin-left scale-x-0" />

            <div className="hero-bottom mt-[1.8rem] flex flex-wrap items-end justify-between gap-12 pointer-events-auto">
                <div className="hero-tagline max-w-[360px] opacity-0 translate-y-[30px]">
                    <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#1A1A1A]/40 mb-1.5 font-mono">
                        Arquitetura de Riqueza
                    </p>
                    <p className="text-sm leading-relaxed text-[#1A1A1A]/55 font-light">
                        Preservação de Capital & Acesso a Ativos Reais<br className="hidden md:block"/> através do Sistema de Consórcio.
                    </p>
                </div>

                <div className="hero-ctas flex gap-3 flex-wrap">
                    <div className="hero-cta opacity-0 translate-y-[20px]">
                        <button 
                            onClick={() => onActivate()}
                            className="btn-magnetic flex items-center gap-2.5 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.25em] bg-[#1A1A1A] text-white hover:bg-[#2a2a2a] transition-colors border-none cursor-pointer font-sans"
                        >
                            Falar com Banker
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    <div className="hero-cta opacity-0 translate-y-[20px]">
                        <button 
                            onClick={() => onActivate("Mostre-me os ativos disponíveis.")}
                            className="btn-magnetic flex items-center gap-2.5 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.25em] bg-transparent text-[#1A1A1A] border border-[#1A1A1A]/15 hover:border-[#1A1A1A] transition-colors cursor-pointer font-sans"
                        >
                            Ver Projetos
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* CORNERS */}
        <div className="corner absolute top-8 left-[5vw] z-30 pointer-events-none text-[10px] font-medium uppercase tracking-[0.35em] text-[#1A1A1A]/30 opacity-0">
            Certum Private
        </div>
        <div className="corner absolute top-8 right-[5vw] z-30 pointer-events-none text-[10px] font-medium uppercase tracking-[0.2em] text-[#1A1A1A]/20 opacity-0 font-mono">
            Protocol 001 — 2025
        </div>
        <div className="corner hidden md:block absolute bottom-[10vh] right-[5vw] z-30 pointer-events-none text-[9px] uppercase tracking-[0.4em] text-[#1A1A1A]/20 opacity-0 origin-bottom-right rotate-[-90deg] translate-x-full translate-y-full">
            Consórcio • Seguros • Wealth
        </div>

        {/* SCROLL INDICATOR */}
        <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex flex-col items-center gap-2 opacity-0">
            <span className="text-[9px] font-medium uppercase tracking-[0.4em] text-[#1A1A1A]/25">Scroll</span>
            <div className="w-[1px] h-[32px] bg-[#1A1A1A]/08 relative overflow-hidden">
                <div className="scroll-dot absolute top-0 left-0 w-full h-[8px] bg-[#1A1A1A]/30 rounded-full" />
            </div>
        </div>

    </div>
  );
}
