'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
// import HeroParticleMorph from '../HeroParticleMorph'; // Removed for video focus
import MagneticButton from '../ui/MagneticButton';

type HeroVideo = {
  key: string;
  src: string;
  headline: string;
  subline?: string;
};

const VIDEOS: HeroVideo[] = [
  { key: 'mercedes', src: '/assets/Mercedes.mp4', headline: 'Engenharia que decide.' },
  { key: 'harley', src: '/assets/harley.mp4', headline: 'Liberdade com direção.' },
  { key: 'barco', src: '/assets/Barco.mp4', headline: 'Patrimônio em movimento.' },
];

// tempos fixos (ms) — ajuste depois de ver no layout final
const DURATIONS_MS = [8000, 8000, 8000];

// crossfade/blur timing
const FADE_MS = 900;

export default function HeroVideoAurora() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const v0 = useRef<HTMLVideoElement | null>(null);
  const v1 = useRef<HTMLVideoElement | null>(null);
  const v2 = useRef<HTMLVideoElement | null>(null);
  const vids = useMemo(() => [v0, v1, v2], []);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const [active, setActive] = useState(0);
  const [next, setNext] = useState(1);

  // Aurora Field state
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (prefersReducedMotion) return;

    // Ensure videos are ready
    vids.forEach((r) => {
      const el = r.current;
      if (!el) return;
      el.muted = true;
      el.playsInline = true;
      el.loop = false; // loop gerenciado pelo sequenciador
      el.preload = 'auto';
    });

    // Start all paused at 0; play only active
    const start = async () => {
      const a = vids[active]?.current;
      if (!a) return;
      try {
        a.currentTime = 0;
        await a.play();
      } catch {
        // autoplay pode falhar em alguns contexts; permanece silencioso
      }
    };

    start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersReducedMotion]);

  // Sequenciador
  useEffect(() => {
    if (prefersReducedMotion) return;

    const a = vids[active]?.current;
    const n = vids[next]?.current;
    if (!a || !n) return;

    let timer: number | undefined;

    const schedule = () => {
      timer = window.setTimeout(async () => {
        // Pré-start do próximo (para evitar frame preto)
        try {
          n.currentTime = 0;
          await n.play();
        } catch {
          // ok
        }

        // Crossfade: troca active -> next
        setActive(next);
        setNext((next + 1) % VIDEOS.length);

        // Pause vídeo antigo após fade (economia)
        window.setTimeout(() => {
          try {
            a.pause();
          } catch {}
        }, FADE_MS + 50);
      }, DURATIONS_MS[active] - FADE_MS);
    };

    schedule();

    return () => {
      if (timer) window.clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, next, prefersReducedMotion]);

  // Parallax / mouse
  useEffect(() => {
    if (prefersReducedMotion) return;

    const el = containerRef.current;
    if (!el) return;

    let raf = 0;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;

      // clamp sutil
      const tx = Math.max(-0.5, Math.min(0.5, nx));
      const ty = Math.max(-0.5, Math.min(0.5, ny));

      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setParallax({ x: tx, y: ty });
      });
    };

    const onLeave = () => setParallax({ x: 0, y: 0 });

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [prefersReducedMotion]);

  return (
    <section ref={containerRef} className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-white">
      
      <div className="relative h-full w-full md:h-[80%] md:w-[80%] md:rounded-3xl overflow-hidden shadow-none md:shadow-2xl z-10 transition-all duration-700 ease-out">
      {/* Vídeos empilhados (A/B Buffer) */}
      <div className="absolute inset-0 bg-black">
        {VIDEOS.map((v, i) => {
          const isActive = i === active;
          const isNext = i === next;

          // ativo: opaco; próximo: quase invisível mas tocando na transição; demais: 0
          const opacity = isActive ? 1 : isNext ? 0 : 0;

          return (
            <video
              key={v.key}
              ref={i === 0 ? v0 : i === 1 ? v1 : v2}
              className="absolute inset-0 h-full w-full object-cover"
              style={{
                opacity,
                transition: `opacity ${FADE_MS}ms cubic-bezier(0.16,1,0.3,1)`,
                filter: isActive ? 'blur(0px)' : isNext ? 'blur(4px)' : 'blur(0px)', // Blur transition for smoothness
                transform: prefersReducedMotion
                  ? 'none'
                  : `translate3d(${parallax.x * 12}px, ${parallax.y * 12}px, 0) scale(1.05)`, // Increased scale for safety
              }}
              src={v.src}
              muted
              playsInline
              preload="auto"
            />
          );
        })}
      </div>

      {/* Aurora Field Overlay (Gradient Only - No Grain) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-20"
        style={{
          // Gradient for legibility and atmosphere
          background:
            'radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.6) 100%)',
          mixBlendMode: 'multiply',
        }}
      />

      {/* MOBILE CONTENT (Vertical Cinema) */}
      <div className="absolute inset-0 flex flex-col justify-end pb-12 px-8 z-30 md:hidden pointer-events-none">
          {/* Gradient Invisible */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" style={{ top: '30%' }} />
          
          <div className="relative z-10 flex flex-col items-start text-left pointer-events-auto">
            <span className="text-[#BFB38F] text-[10px] font-bold tracking-[0.2em] uppercase mb-3">
              Sovereign Strategy
            </span>
            <h1 className="text-3xl text-white leading-[1.1] font-medium tracking-tight mb-4">
              Não compre o carro.<br />
              <span className="text-white/50">Compre o acesso.</span>
            </h1>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed max-w-[90%]">
              A Certum não vende máquinas. Nós desenhamos a engenharia financeira para você possuí-las sem descapitalizar.
            </p>
            <MagneticButton strength={0.2} radius={100} className="w-full">
               <button className="w-full bg-white text-black py-4 rounded-lg text-xs font-bold tracking-[0.15em] uppercase active:scale-95 transition-transform hover:bg-[#BFB38F] hover:text-white">
                 Simular Consórcio
               </button>
            </MagneticButton>
          </div>
      </div>

      {/* DESKTOP CONTENT (Glass Lens) */}
      <div className="hidden md:flex absolute bottom-8 left-8 max-w-md 
                      backdrop-blur-xl bg-black/60 border border-white/10 
                      p-8 rounded-2xl shadow-2xl overflow-hidden
                      flex-col items-start z-30 pointer-events-auto
                      translate-y-4 -translate-x-4"> {/* Slight overlap tweaking based on 'drawing' intuition, but keeping it inside for safety, maybe just closer to corner */}
          
          {/* Noise Texture */}
          <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay"
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
          />

          <span className="relative text-[#BFB38F] text-[10px] font-bold tracking-[0.25em] uppercase mb-4 border-b border-[#BFB38F]/30 pb-2">
            Engenharia de Acesso
          </span>

          <h1 className="relative text-4xl font-light text-white tracking-tight mb-4 leading-[1.1]">
             Não compre o carro.
             <span className="block font-bold text-white">Compre o acesso.</span>
          </h1>
          
          <p className="relative text-sm text-gray-300 leading-relaxed mb-8 border-l-2 border-white/10 pl-4">
             A Certum não vende máquinas. Nós desenhamos a engenharia financeira 
             para você possuí-las sem descapitalizar.
          </p>

          <div className="relative flex gap-4 w-full">
             <MagneticButton strength={0.2} radius={100}>
                <button className="text-xs font-bold uppercase tracking-widest text-white border-b border-white/30 pb-1 hover:border-[#BFB38F] hover:text-[#BFB38F] transition-all">
                   Entenda o Mecanismo
                </button>
             </MagneticButton>
          </div>
      </div>

      {/* Reduced motion: overlay leve */}
      {prefersReducedMotion && (
        <div className="absolute inset-0 bg-white/85" aria-hidden />
      )}
      </div>
    </section>
  );
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(!!mq.matches);
    update();
    mq.addEventListener?.('change', update);
    return () => mq.removeEventListener?.('change', update);
  }, []);

  return reduced;
}
