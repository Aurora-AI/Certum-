'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { MoveRight } from 'lucide-react';
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
      
      <div className="absolute inset-0 w-full h-full overflow-hidden z-10">
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

      {/* 2. O CONTÊINER RETANGULAR (A Realidade) - Sovereign Monolith */}
      <div className="relative z-30 w-full h-full flex flex-col justify-end pb-12 px-6 md:pb-0 md:justify-center md:px-24 pointer-events-none">
        
        {/* O MONOLITO */}
        <div className="
            group
            relative
            max-w-lg w-full
            bg-[#0A0A0A]/90 backdrop-blur-md /* Fundo escuro sólido com leve blur */
            border border-white/10 /* Borda sutil de luxo */
            p-8 md:p-10
            shadow-2xl shadow-black/50
            overflow-hidden
            pointer-events-auto
        ">
          
          {/* Efeito de brilho ao passar o mouse (opcional, Aurora touch) */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Tagline / Disclaimer */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-amber-500/80"></div>
            <span className="text-amber-500 text-xs font-bold tracking-[0.25em] uppercase">
              Certum Private
            </span>
          </div>

          {/* Headline - Clara e Direta */}
          <h1 className="text-white text-3xl md:text-4xl font-light leading-tight mb-4">
            Não vendemos o carro.<br />
            <span className="font-semibold text-white">Nós financiamos o acesso.</span>
          </h1>

          {/* Texto de Apoio - Legibilidade Máxima */}
          <p className="text-gray-400 text-sm leading-relaxed mb-8 border-l-2 border-white/10 pl-4">
            A inteligência financeira para adquirir ativos de alto valor sem descapitalização. 
            O veículo é o alvo. O consórcio é a estratégia.
          </p>

          {/* CTA - Botão Sólido + Magnetic Wrapper */}
          <div className="w-full md:w-auto">
            <MagneticButton strength={0.1} radius={100}>
                <button className="
                    w-full
                    flex items-center justify-between gap-6
                    bg-white text-black 
                    px-6 py-4 
                    text-xs font-bold tracking-widest uppercase
                    hover:bg-gray-200 transition-colors
                ">
                    <span>Entenda o Modelo</span>
                    <MoveRight className="w-4 h-4" />
                </button>
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
