'use client';

import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number; // 0.1 to 1.0 (default 0.3)
  radius?: number;   // pixels (default 100)
}

export default function MagneticButton({
  children,
  className = '',
  onClick,
  strength = 0.3,
  radius = 100,
}: MagneticButtonProps) {
  const btnRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const dist = Math.sqrt(
        Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
      );

      if (dist < radius) {
        // Within magnetic field
        const x = (e.clientX - centerX) * strength;
        const y = (e.clientY - centerY) * strength;

        gsap.to(btn, {
          x: x,
          y: y,
          duration: 0.5,
          ease: 'power3.out',
          overwrite: 'auto',
        });
        setIsHovered(true);
      } else if (isHovered) {
        // Left magnetic field
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.8,
          ease: 'elastic.out(1, 0.3)',
          overwrite: 'auto',
        });
        setIsHovered(false);
      }
    };

    // const handleMouseLeave = () => {
    //   gsap.to(btn, {
    //     x: 0,
    //     y: 0,
    //     duration: 0.8,
    //     ease: 'elastic.out(1, 0.3)',
    //     overwrite: 'auto',
    //   });
    //   setIsHovered(false);
    // };

    // Attach to window to detect "field" even if not directly over button
    // Optimization: Only attach if near? No, for S-Tier we want consistent feel.
    // Actually, attaching to window is expensive. Let's attach to parent or use a larger clear trigger area.
    // Better approach for React: use specific event listener on window but throttled, 
    // OR just use a larger transparent container. 
    // "Standard" FX-15 implementation usually tracks mouse globally or on a large section.
    // Let's stick to standard GSAP mousemove on the element + padding, or just standard hover for now if the radius is small.
    // Re-reading FX-15: "Element moves towards mouse BEFORE hover real".
    // This implies looking at window mouse move. 
    
    // For performance, we'll add the listener to the window but check distance.
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [radius, strength, isHovered]);

  return (
    <div
      ref={btnRef}
      onClick={onClick}
      className={`relative inline-block active:scale-95 transition-transform ${className}`}
      role={onClick ? "button" : undefined}
    >
      {children}
    </div>
  );
}
