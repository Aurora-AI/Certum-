"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import gsap from "gsap";
import Link from "next/link";

interface MenuItem {
  label: string;
  href: string;
  description?: string;
}

interface SpiralVortexMenuProps {
  items?: MenuItem[];
  isOpen: boolean;
  onClose: () => void;
  /** Configuração da espiral */
  config?: {
    baseRadius?: number;
    radiusIncrement?: number;
    angleIncrement?: number;
    startAngle?: number;
    rotationPerScroll?: number;
  };
}

const defaultItems: MenuItem[] = [
  { label: "Vault", href: "/vault", description: "Asset Management" },
  { label: "Concierge", href: "/concierge", description: "Personal Service" },
  { label: "Oracle", href: "/oracle", description: "AI Intelligence" },
  { label: "Genesis", href: "/genesis", description: "Protocol Core" },
  { label: "Manifesto", href: "/manifesto", description: "Our Philosophy" },
  { label: "Contact", href: "/contact", description: "Get in Touch" },
];

const defaultConfig = {
  baseRadius: 180,
  radiusIncrement: 40,
  angleIncrement: 45,
  startAngle: -90,
  rotationPerScroll: 30,
};

export default function SpiralVortexMenu({
  items = defaultItems,
  isOpen,
  onClose,
  config = defaultConfig,
}: SpiralVortexMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const singularityRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const vortexRingsRef = useRef<HTMLDivElement[]>([]);
  
  const [currentRotation, setCurrentRotation] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const mergedConfig = { ...defaultConfig, ...config };

  // Calcular posição de cada item na espiral
  const calculatePosition = useCallback((index: number, rotation: number) => {
    const angle = mergedConfig.startAngle + (index * mergedConfig.angleIncrement) + rotation;
    const radius = mergedConfig.baseRadius + (index * mergedConfig.radiusIncrement);
    const radians = angle * (Math.PI / 180);
    
    const x = Math.cos(radians) * radius;
    const y = Math.sin(radians) * radius;
    
    // Scale e opacity baseados na posição Y
    const normalizedY = (y / radius + 1) / 2;
    const scale = 1.2 - (normalizedY * 0.5);
    const opacity = 1 - (normalizedY * 0.5);
    
    return { x, y, scale, opacity, angle };
  }, [mergedConfig]);

  // Abrir menu
  useEffect(() => {
    if (!isOpen || !menuRef.current) return;

    const tl = gsap.timeline();

    // Mostrar overlay
    gsap.set(menuRef.current, { visibility: "visible", opacity: 0 });
    tl.to(menuRef.current, { opacity: 1, duration: 0.4 });

    // Singularidade aparece
    if (singularityRef.current) {
      tl.fromTo(singularityRef.current, 
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.2"
      );
    }

    // Anéis do vortex expandem
    vortexRingsRef.current.forEach((ring, index) => {
      if (ring) {
        gsap.fromTo(ring,
          { scale: 0, opacity: 0 },
          { 
            scale: 1, 
            opacity: 1, 
            duration: 0.5, 
            delay: index * 0.1,
            ease: "power2.out"
          }
        );
      }
    });

    // Itens espiralam para fora
    itemsRef.current.forEach((item, index) => {
      if (!item) return;
      
      const pos = calculatePosition(index, 0);
      
      gsap.fromTo(item,
        { x: 0, y: 0, scale: 0, opacity: 0, rotation: -180 },
        {
          x: pos.x,
          y: pos.y,
          scale: pos.scale,
          opacity: pos.opacity,
          rotation: 0,
          duration: 0.6,
          delay: index * 0.08,
          ease: "back.out(1.2)",
        }
      );
    });

    setCurrentRotation(0);
  }, [isOpen, calculatePosition]);

  // Fechar menu
  const closeMenu = useCallback(() => {
    if (!menuRef.current) return;

    const tl = gsap.timeline({
      onComplete: () => {
        if (menuRef.current) {
          menuRef.current.style.visibility = "hidden";
        }
        onClose();
      }
    });

    // Itens espiralam para o centro
    itemsRef.current.forEach((item, index) => {
      if (!item) return;
      gsap.to(item, {
        x: 0,
        y: 0,
        scale: 0,
        opacity: 0,
        rotation: 180,
        duration: 0.4,
        delay: index * 0.05,
        ease: "power2.in",
      });
    });

    // Singularidade desaparece
    tl.to(singularityRef.current, {
      scale: 0,
      duration: 0.4,
      ease: "power2.in",
    }, 0.3);

    // Anéis colapsam
    tl.to(vortexRingsRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.4,
      stagger: 0.05,
      ease: "power2.in",
    }, 0.2);

    // Fade out overlay
    tl.to(menuRef.current, {
      opacity: 0,
      duration: 0.3,
    }, 0.4);
  }, [onClose]);

  // Rotação via scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      const delta = e.deltaY > 0 ? 1 : -1;
      const newRotation = currentRotation + (delta * mergedConfig.rotationPerScroll);
      
      setCurrentRotation(newRotation);

      // Atualizar posições dos itens
      itemsRef.current.forEach((item, index) => {
        if (!item) return;
        const pos = calculatePosition(index, newRotation);
        
        gsap.to(item, {
          x: pos.x,
          y: pos.y,
          scale: pos.scale,
          opacity: pos.opacity,
          duration: 0.4,
          ease: "power2.out",
        });
        
        item.style.zIndex = String(Math.round((1 - ((pos.y / (mergedConfig.baseRadius + index * mergedConfig.radiusIncrement)) + 1) / 2) * 100));
      });

      // Atualizar item ativo
      let topMostIndex = 0;
      let topMostY = Infinity;
      
      itemsRef.current.forEach((item, index) => {
        const pos = calculatePosition(index, newRotation);
        if (pos.y < topMostY) {
          topMostY = pos.y;
          topMostIndex = index;
        }
      });
      
      setActiveIndex(topMostIndex);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isOpen, currentRotation, calculatePosition, mergedConfig]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
      } else if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        setCurrentRotation(prev => prev + mergedConfig.angleIncrement);
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        setCurrentRotation(prev => prev - mergedConfig.angleIncrement);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeMenu, mergedConfig.angleIncrement]);

  // Mouse follow no singularity
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!singularityRef.current || !menuRef.current) return;
    
    const rect = menuRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const deltaX = (e.clientX - rect.left - centerX) / centerX * 20;
    const deltaY = (e.clientY - rect.top - centerY) / centerY * 20;
    
    gsap.to(singularityRef.current, {
      x: deltaX,
      y: deltaY,
      duration: 0.5,
      ease: "power2.out",
    });
  }, []);

  return (
    <div
      ref={menuRef}
      className="fixed inset-0 z-[900] bg-void"
      style={{ visibility: "hidden", opacity: 0 }}
      onMouseMove={handleMouseMove}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,53,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,53,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      {/* Central Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,53,0.08)_0%,transparent_50%)]" />

      {/* Vortex Rings */}
      {[200, 400, 600, 800, 1000].map((size, index) => (
        <div
          key={size}
          ref={el => { if (el) vortexRingsRef.current[index] = el; }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10 pointer-events-none"
          style={{ 
            width: size, 
            height: size,
            animation: `spin ${60 + index * 10}s linear infinite ${index % 2 === 0 ? '' : 'reverse'}`
          }}
        />
      ))}

      {/* Singularity */}
      <div
        ref={singularityRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full z-10"
        style={{
          background: "radial-gradient(circle, var(--color-primary) 0%, var(--color-void) 70%)",
          boxShadow: "0 0 60px rgba(212, 175, 53, 0.3), 0 0 120px rgba(212, 175, 53, 0.1)"
        }}
      >
        <div 
          className="absolute -inset-2.5 rounded-full border border-primary/30"
          style={{ animation: "pulse 2s ease-in-out infinite" }}
        />
      </div>

      {/* Spiral Items Container */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
        {items.map((item, index) => (
          <div
            key={item.label}
            ref={el => { if (el) itemsRef.current[index] = el; }}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer group ${
              activeIndex === index ? 'z-50' : ''
            }`}
            onClick={() => {
              gsap.to(itemsRef.current[index], {
                scale: 1.3,
                duration: 0.2,
                yoyo: true,
                repeat: 1,
              });
              setTimeout(closeMenu, 400);
            }}
          >
            <Link href={item.href} className="block text-center">
              <div className={`relative px-8 py-6 transition-all duration-300 ${
                activeIndex === index 
                  ? 'bg-primary/10 border-primary/50' 
                  : 'bg-white/5 border-white/10 hover:border-primary/30 hover:bg-primary/5'
              } border backdrop-blur-sm`}>
                {/* Active indicator */}
                {activeIndex === index && (
                  <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(212,175,53,0.8)]" />
                )}
                
                <span className={`block text-lg font-semibold tracking-[0.1em] uppercase transition-colors ${
                  activeIndex === index ? 'text-primary' : 'text-white group-hover:text-primary'
                }`}>
                  {item.label}
                </span>
                
                {item.description && (
                  <span className="block text-[10px] font-mono text-gray-500 mt-1 tracking-widest uppercase">
                    {item.description}
                  </span>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Close Button */}
      <button
        onClick={closeMenu}
        className="absolute top-8 right-8 z-50 flex items-center gap-4 px-6 py-4 border border-white/10 bg-transparent hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer"
      >
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white hover:text-primary transition-colors">
          Close
        </span>
        <div className="relative w-6 h-6">
          <span className="absolute top-1/2 left-0 w-full h-0.5 bg-white rotate-45 -translate-y-1/2" />
          <span className="absolute top-1/2 left-0 w-full h-0.5 bg-white -rotate-45 -translate-y-1/2" />
        </div>
      </button>

      {/* Instructions */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
        <p className="text-[10px] font-mono text-gray-500 tracking-[0.2em] uppercase">
          Scroll to Navigate • Click to Select • ESC to Close
        </p>
      </div>

      {/* Debug Info (development only) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute bottom-8 left-8 text-[10px] font-mono text-gray-600">
          <div>Rotation: {Math.round(currentRotation)}°</div>
          <div>Active: {items[activeIndex]?.label}</div>
        </div>
      )}

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.5; }
        }
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

// Hook para controlar o menu
export function useSpiralMenu() {
  const [isOpen, setIsOpen] = useState(false);
  
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen(prev => !prev), []);

  // Keyboard shortcut 'M' para abrir
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'm' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        const target = e.target as HTMLElement;
        if (target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA') {
          toggle();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggle]);

  return { isOpen, open, close, toggle };
}
