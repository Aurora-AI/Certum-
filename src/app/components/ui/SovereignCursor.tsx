"use client";

import React, { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";

interface SovereignCursorProps {
  /** Color of the cursor elements */
  color?: string;
  /** Size of the inner dot */
  dotSize?: number;
  /** Size of the outer circle */
  circleSize?: number;
  /** Enable magnetic effect on interactive elements */
  magnetic?: boolean;
  /** Enable blend mode on text */
  blend?: boolean;
  /** Enable trail effect */
  trail?: boolean;
}

export default function SovereignCursor({
  color = "#d4af35",
  dotSize = 8,
  circleSize = 40,
  magnetic = true,
  blend = true,
  trail = false,
}: SovereignCursorProps) {
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<HTMLDivElement[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const circlePos = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);
  const currentTarget = useRef<HTMLElement | null>(null);

  // Trail configuration
  const trailColors = [
    `${color}40`,
    `${color}30`,
    `${color}20`,
    `${color}10`,
    `${color}05`,
  ];

  // Update cursor position - Defined as a function to avoid hoisting issues in useCallback if referenced internaly
  const updateCursor = useCallback(() => {
    if (!dotRef.current || !circleRef.current) return;

    // Dot follows immediately
    gsap.set(dotRef.current, {
      x: mousePos.current.x,
      y: mousePos.current.y,
    });

    // Circle follows with lag
    circlePos.current.x += (mousePos.current.x - circlePos.current.x) * 0.15;
    circlePos.current.y += (mousePos.current.y - circlePos.current.y) * 0.15;

    gsap.set(circleRef.current, {
      x: circlePos.current.x,
      y: circlePos.current.y,
    });

    // Update trail
    if (trail && trailRefs.current.length > 0) {
      trailRefs.current.forEach((trailEl, index) => {
        if (trailEl) {
          const delay = (index + 1) * 0.05;
          gsap.to(trailEl, {
            x: mousePos.current.x,
            y: mousePos.current.y,
            duration: 0.3 + delay,
            ease: "power2.out",
          });
        }
      });
    }

    requestAnimationFrame(updateCursor);
  }, [trail]);

  // Handle mouse movement
  const handleMouseMove = useCallback((e: MouseEvent) => {
    mousePos.current = { x: e.clientX, y: e.clientY };

    // Magnetic effect
    if (magnetic && currentTarget.current && isHovering.current) {
      const rect = currentTarget.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const maxDistance = Math.max(rect.width, rect.height);
      
      if (distance < maxDistance) {
        const magnetStrength = 0.3;
        gsap.to(currentTarget.current, {
          x: deltaX * magnetStrength,
          y: deltaY * magnetStrength,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    }
  }, [magnetic]);

  // Handle hover states
  const handleMouseEnter = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    
    // Safety check: target might not be an Element (e.g. document)
    if (!target || typeof target.matches !== 'function') return;
    
    // Check for interactive elements
    const isInteractive = target.matches(
      'a, button, [data-cursor="pointer"], [data-cursor="magnetic"], input, textarea, [role="button"]'
    );
    const isText = target.matches(
      'h1, h2, h3, h4, h5, h6, p, span, [data-cursor="text"]'
    );
    const isExpand = target.matches('[data-cursor="expand"]');
    const isHidden = target.matches('[data-cursor="hidden"]');

    if (isHidden) {
      gsap.to([dotRef.current, circleRef.current], {
        scale: 0,
        opacity: 0,
        duration: 0.3,
      });
      return;
    }

    if (isExpand) {
      isHovering.current = true;
      currentTarget.current = target;
      gsap.to(circleRef.current, {
        scale: 2,
        opacity: 0.5,
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(dotRef.current, {
        scale: 0,
        duration: 0.3,
      });
      return;
    }

    if (isInteractive) {
      isHovering.current = true;
      currentTarget.current = target;
      gsap.to(circleRef.current, {
        scale: 1.5,
        opacity: 0.8,
        borderWidth: "1px",
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(dotRef.current, {
        scale: 0.5,
        duration: 0.3,
      });
    }

    if (isText && blend) {
      gsap.to(circleRef.current, {
        scale: 2.5,
        mixBlendMode: "difference",
        backgroundColor: "#ffffff",
        duration: 0.4,
      });
      gsap.to(dotRef.current, {
        scale: 0,
        duration: 0.3,
      });
    }
  }, [blend]);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    
    // Safety check
    if (!target || typeof target.matches !== 'function') return;
    
    if (currentTarget.current === target) {
      // Reset magnetic position
      gsap.to(target, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)",
      });
    }

    isHovering.current = false;
    currentTarget.current = null;

    // Reset cursor
    gsap.to(circleRef.current, {
      scale: 1,
      opacity: 1,
      borderWidth: "2px",
      mixBlendMode: "normal",
      backgroundColor: "transparent",
      duration: 0.4,
      ease: "power2.out",
    });
    gsap.to(dotRef.current, {
      scale: 1,
      duration: 0.3,
    });
  }, []);

  // Handle click animation
  const handleClick = useCallback(() => {
    gsap.to(circleRef.current, {
      scale: 0.8,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });
    gsap.to(dotRef.current, {
      scale: 1.5,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
    });
  }, []);

  // Initialize
  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = "none";
    
    // Add global styles
    const style = document.createElement("style");
    style.textContent = `
      * { cursor: none !important; }
      a, button, input, textarea, [role="button"] { cursor: none !important; }
    `;
    document.head.appendChild(style);

    // Set initial position
    circlePos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    mousePos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    // Start animation loop
    const animId = requestAnimationFrame(updateCursor);

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    return () => {
      cancelAnimationFrame(animId);
      document.body.style.cursor = "";
      style.remove();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, [updateCursor, handleMouseMove, handleMouseEnter, handleMouseLeave, handleClick]);

  return (
    <>
      {/* Trail elements */}
      {trail && trailColors.map((trailColor, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) trailRefs.current[index] = el;
          }}
          className="fixed pointer-events-none z-9998 rounded-full"
          style={{
            width: dotSize + index * 2,
            height: dotSize + index * 2,
            backgroundColor: trailColor,
            transform: "translate(-50%, -50%)",
            top: 0,
            left: 0,
          }}
        />
      ))}

      {/* Main dot */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-10000 rounded-full mix-blend-difference"
        style={{
          width: dotSize,
          height: dotSize,
          backgroundColor: color,
          transform: "translate(-50%, -50%)",
          top: 0,
          left: 0,
        }}
      />

      {/* Outer circle */}
      <div
        ref={circleRef}
        className="fixed pointer-events-none z-9999 rounded-full"
        style={{
          width: circleSize,
          height: circleSize,
          border: `2px solid ${color}`,
          backgroundColor: "transparent",
          transform: "translate(-50%, -50%)",
          top: 0,
          left: 0,
          transition: "background-color 0.3s, mix-blend-mode 0.3s",
        }}
      />
    </>
  );
}
