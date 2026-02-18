'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function ConsortiumHero() {
  const ctaRefs = useRef<(HTMLButtonElement | HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    // Magnetic hover effect for CTAs
    const handleMouseMove = (e: Event, btn: HTMLElement) => {
      const mouseEvent = e as unknown as MouseEvent;
      const rect = btn.getBoundingClientRect();
      const x = mouseEvent.clientX - rect.left - rect.width / 2;
      const y = mouseEvent.clientY - rect.top - rect.height / 2;
      
      btn.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px) translateY(-2px)`;
    };

    const handleMouseLeave = (btn: HTMLElement) => {
      btn.style.transform = 'translateY(-2px)';
    };

    ctaRefs.current.forEach(btn => {
      if (!btn) return;
      
      const moveHandler = (e: Event) => handleMouseMove(e, btn);
      const leaveHandler = () => handleMouseLeave(btn);
      
      btn.addEventListener('mousemove', moveHandler);
      btn.addEventListener('mouseleave', leaveHandler);
      
      return () => {
        btn.removeEventListener('mousemove', moveHandler);
        btn.removeEventListener('mouseleave', leaveHandler);
      };
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0a0a0f]">
      
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 animate-gradient-shift">
        <div className="absolute inset-0 bg-gradient-radial from-violet-600/15 via-transparent to-transparent" style={{ backgroundPosition: '20% 80%' }} />
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/12 via-transparent to-transparent" style={{ backgroundPosition: '80% 20%' }} />
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/8 via-transparent to-transparent" style={{ backgroundPosition: '50% 50%' }} />
      </div>

      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="particle absolute w-1 h-1 bg-white/30 rounded-full animate-float-1" style={{ left: '15%', top: '20%' }} />
        <div className="particle absolute w-1 h-1 bg-white/30 rounded-full animate-float-2" style={{ left: '85%', top: '15%' }} />
        <div className="particle absolute w-1 h-1 bg-white/30 rounded-full animate-float-3" style={{ left: '45%', top: '80%' }} />
        <div className="particle absolute w-1 h-1 bg-white/30 rounded-full animate-float-4" style={{ left: '75%', top: '60%' }} />
        <div className="particle absolute w-1 h-1 bg-white/30 rounded-full animate-float-5" style={{ left: '25%', top: '70%' }} />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/[0.03] border border-white/[0.08] rounded-full backdrop-blur-xl animate-fade-in-down">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm text-zinc-400">Disponível para veículos e imóveis</span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in-up" style={{ fontFamily: "'Clash Display', sans-serif", animationDelay: '0.1s', animationFillMode: 'both' }}>
          Consórcio <span className="relative inline-block bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            reinventado
            <span className="absolute bottom-[8%] left-0 right-0 h-[20%] bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 opacity-20 blur-xl -z-10" />
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          Zero juros. Zero surpresas. Zero burocracia.
          <br className="hidden sm:block" />
          Planejamento patrimonial com precisão cirúrgica e transparência total.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
          <button
            ref={el => { ctaRefs.current[0] = el; }}
            className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-[0_8px_40px_-8px_rgba(120,80,220,0.4)]"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Simular meu plano
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
              background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent)',
              padding: '2px',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude'
            }} />
          </button>

          <Link
            href="#contato"
            ref={el => { ctaRefs.current[1] = el; }}
            className="px-8 py-4 bg-white/[0.03] border border-white/[0.08] text-white rounded-xl font-medium backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20"
          >
            Falar com consultor
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-8 justify-center pt-8 border-t border-white/[0.08] animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
          <div className="flex items-center gap-3 text-sm text-zinc-400">
            <div className="w-6 h-6 flex items-center justify-center bg-white/[0.03] border border-white/[0.08] rounded-lg text-green-500">✓</div>
            <span>Administradora autorizada pelo BACEN</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-zinc-400">
            <div className="w-6 h-6 flex items-center justify-center bg-white/[0.03] border border-white/[0.08] rounded-lg text-green-500">🔒</div>
            <span>Contrato 100% digital e seguro</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-zinc-400">
            <div className="w-6 h-6 flex items-center justify-center bg-white/[0.03] border border-white/[0.08] rounded-lg text-green-500">⚡</div>
            <span>Contemplação em até 6 meses*</span>
          </div>
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 text-xs animate-bounce">
        <svg className="w-5 h-5 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
        <span>Explore</span>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(2%, -1%) scale(1.02); }
          66% { transform: translate(-1%, 2%) scale(0.98); }
        }

        @keyframes float-1 {
          0% { transform: translateY(0) translateX(0); opacity: 0.6; }
          50% { opacity: 0.3; }
          100% { transform: translateY(-100vh) translateX(30px); opacity: 0; }
        }

        @keyframes float-2 {
          0% { transform: translateY(0) translateX(0); opacity: 0.6; }
          50% { opacity: 0.3; }
          100% { transform: translateY(-100vh) translateX(30px); opacity: 0; }
        }

        @keyframes float-3 {
          0% { transform: translateY(0) translateX(0); opacity: 0.6; }
          50% { opacity: 0.3; }
          100% { transform: translateY(-100vh) translateX(30px); opacity: 0; }
        }

        @keyframes float-4 {
          0% { transform: translateY(0) translateX(0); opacity: 0.6; }
          50% { opacity: 0.3; }
          100% { transform: translateY(-100vh) translateX(30px); opacity: 0; }
        }

        @keyframes float-5 {
          0% { transform: translateY(0) translateX(0); opacity: 0.6; }
          50% { opacity: 0.3; }
          100% { transform: translateY(-100vh) translateX(30px); opacity: 0; }
        }

        .animate-gradient-shift {
          animation: gradient-shift 18s ease infinite;
        }

        .animate-float-1 {
          animation: float-1 25s infinite linear;
        }

        .animate-float-2 {
          animation: float-2 30s infinite linear;
          animation-delay: -5s;
        }

        .animate-float-3 {
          animation: float-3 22s infinite linear;
          animation-delay: -12s;
        }

        .animate-float-4 {
          animation: float-4 28s infinite linear;
          animation-delay: -8s;
        }

        .animate-float-5 {
          animation: float-5 26s infinite linear;
          animation-delay: -3s;
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
