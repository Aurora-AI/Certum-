'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import HeroParticleMorph from '../HeroParticleMorph';
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
      
      {/* S-Tier Particle Layer (Background) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <HeroParticleMorph 
          particleCount={4000}
          autoAdvance={false} 
          dark={false} 
          className="w-full h-full opacity-60"
        />
      </div>

      <div className="relative h-[80%] w-[80%] overflow-hidden shadow-2xl z-10">
      {/* Vídeos empilhados */}
      <div className="absolute inset-0">
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
                filter: isActive ? 'blur(0px)' : isNext ? 'blur(2px)' : 'blur(0px)',
                transform: prefersReducedMotion
                  ? 'none'
                  : `translate3d(${parallax.x * 10}px, ${parallax.y * 10}px, 0) scale(1.02)`,
              }}
              src={v.src}
              muted
              playsInline
              preload="auto"
            />
          );
        })}
      </div>

      {/* Aurora Field Overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          // “densidade”: leve vinheta + micro-grain via gradient
          background:
            'radial-gradient(1200px 700px at 50% 40%, rgba(255,255,255,0) 0%, rgba(255,255,255,0.02) 55%, rgba(0,0,0,0.06) 100%)',
          mixBlendMode: 'multiply',
          opacity: 0.85,
        }}
      />

      {/* Micro-grain (CSS-only). Se quiser, substitua por textura PNG depois */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(0,0,0,0.012) 0px, rgba(0,0,0,0.012) 1px, rgba(255,255,255,0) 2px, rgba(255,255,255,0) 3px)',
          opacity: 0.10,
          mixBlendMode: 'overlay',
        }}
      />



      {/* Conteúdo */}
      <div className="relative z-10 flex h-full w-full items-center justify-start px-8 md:px-24">
        <div className="max-w-xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md shadow-2xl">
          <div className="mb-4 text-[10px] tracking-[0.35em] uppercase text-black/60 font-medium">
            MAD LAB AURORA
          </div>

          <h1 className="text-balance text-4xl font-light tracking-tight text-black md:text-5xl lg:text-6xl text-left drop-shadow-sm">
            {VIDEOS[active]?.headline}
          </h1>

          <p className="mt-6 text-sm tracking-wide text-black/70 md:text-base text-left font-medium">
            Consórcios · Seguros · Wealth Management
          </p>

          <div className="mt-8 flex flex-col items-start justify-start gap-4 sm:flex-row pointer-events-auto">
            <MagneticButton strength={0.2} radius={120}>
              <span className="inline-block rounded-full bg-black px-6 py-3 text-[10px] font-bold tracking-[0.2em] uppercase text-white hover:bg-black/80 transition-colors shadow-lg">
                Iniciar agora
              </span>
            </MagneticButton>
            
            <MagneticButton strength={0.2} radius={120}>
              <span className="inline-block rounded-full border border-black/10 bg-white/40 px-6 py-3 text-[10px] font-bold tracking-[0.2em] uppercase text-black backdrop-blur hover:bg-white/60 transition-colors">
                Ver opções
              </span>
            </MagneticButton>
          </div>
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
