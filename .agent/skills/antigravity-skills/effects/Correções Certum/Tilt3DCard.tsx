"use client";

import React, { useRef, ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface Tilt3DCardProps {
  children: ReactNode;
  /** Maximum tilt angle in degrees */
  maxTilt?: number;
  /** Perspective value */
  perspective?: number;
  /** Scale on hover */
  scale?: number;
  /** Transition speed */
  speed?: number;
  /** Enable glow effect that follows mouse */
  glowEffect?: boolean;
  /** Glow color */
  glowColor?: string;
  /** Additional className */
  className?: string;
  /** Enable shine/reflection effect */
  shine?: boolean;
}

export default function Tilt3DCard({
  children,
  maxTilt = 15,
  perspective = 1000,
  scale = 1.02,
  speed = 0.4,
  glowEffect = true,
  glowColor = "rgba(212, 175, 53, 0.3)",
  className = "",
  shine = true,
}: Tilt3DCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);
  const bounds = useRef<DOMRect | null>(null);

  useGSAP(() => {
    if (!containerRef.current || !cardRef.current) return;

    const container = containerRef.current;
    const card = cardRef.current;
    const glow = glowRef.current;
    const shineEl = shineRef.current;

    const handleMouseEnter = () => {
      bounds.current = container.getBoundingClientRect();
      gsap.to(card, {
        scale: scale,
        duration: speed,
        ease: "power2.out",
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!bounds.current) return;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Calculate position relative to card center
      const centerX = bounds.current.left + bounds.current.width / 2;
      const centerY = bounds.current.top + bounds.current.height / 2;

      // Calculate rotation
      const percentX = (mouseX - centerX) / (bounds.current.width / 2);
      const percentY = (mouseY - centerY) / (bounds.current.height / 2);

      const rotateX = -percentY * maxTilt;
      const rotateY = percentX * maxTilt;

      // Apply 3D transform
      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        duration: speed,
        ease: "power2.out",
        transformPerspective: perspective,
      });

      // Move glow to mouse position
      if (glow && glowEffect) {
        const glowX = ((mouseX - bounds.current.left) / bounds.current.width) * 100;
        const glowY = ((mouseY - bounds.current.top) / bounds.current.height) * 100;
        
        gsap.to(glow, {
          opacity: 1,
          background: `radial-gradient(circle at ${glowX}% ${glowY}%, ${glowColor}, transparent 50%)`,
          duration: speed,
        });
      }

      // Move shine reflection
      if (shineEl && shine) {
        const shineX = ((mouseX - bounds.current.left) / bounds.current.width) * 100;
        const shineY = ((mouseY - bounds.current.top) / bounds.current.height) * 100;
        
        gsap.to(shineEl, {
          opacity: 0.15,
          background: `linear-gradient(
            ${135 + percentX * 30}deg,
            transparent 0%,
            rgba(255, 255, 255, 0.4) ${shineX}%,
            transparent 100%
          )`,
          duration: speed,
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: speed * 1.5,
        ease: "elastic.out(1, 0.5)",
      });

      if (glow) {
        gsap.to(glow, {
          opacity: 0,
          duration: speed,
        });
      }

      if (shineEl) {
        gsap.to(shineEl, {
          opacity: 0,
          duration: speed,
        });
      }

      bounds.current = null;
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ perspective: `${perspective}px` }}
    >
      <div
        ref={cardRef}
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        {/* Glow effect layer */}
        {glowEffect && (
          <div
            ref={glowRef}
            className="absolute inset-0 pointer-events-none rounded-[inherit] opacity-0 z-10"
            style={{
              transition: `opacity ${speed}s`,
            }}
          />
        )}

        {/* Shine/reflection layer */}
        {shine && (
          <div
            ref={shineRef}
            className="absolute inset-0 pointer-events-none rounded-[inherit] opacity-0 z-20 mix-blend-overlay"
          />
        )}

        {/* Content */}
        <div className="relative z-0 w-full h-full">
          {children}
        </div>

        {/* Depth shadow */}
        <div
          className="absolute inset-0 rounded-[inherit] pointer-events-none -z-10"
          style={{
            transform: "translateZ(-50px)",
            background: "rgba(0, 0, 0, 0.3)",
            filter: "blur(20px)",
          }}
        />
      </div>
    </div>
  );
}

// Hook version for more control
export function useTilt3D(options: Omit<Tilt3DCardProps, 'children'> = {}) {
  const {
    maxTilt = 15,
    perspective = 1000,
    scale = 1.02,
    speed = 0.4,
  } = options;

  const elementRef = useRef<HTMLElement>(null);
  const bounds = useRef<DOMRect | null>(null);

  useGSAP(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseEnter = () => {
      bounds.current = element.getBoundingClientRect();
      gsap.to(element, {
        scale: scale,
        duration: speed,
        ease: "power2.out",
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!bounds.current) return;

      const centerX = bounds.current.left + bounds.current.width / 2;
      const centerY = bounds.current.top + bounds.current.height / 2;

      const percentX = (e.clientX - centerX) / (bounds.current.width / 2);
      const percentY = (e.clientY - centerY) / (bounds.current.height / 2);

      gsap.to(element, {
        rotateX: -percentY * maxTilt,
        rotateY: percentX * maxTilt,
        duration: speed,
        ease: "power2.out",
        transformPerspective: perspective,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: speed * 1.5,
        ease: "elastic.out(1, 0.5)",
      });
      bounds.current = null;
    };

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [maxTilt, perspective, scale, speed]);

  return elementRef;
}
