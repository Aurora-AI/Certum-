"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export const SovereignCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const isMobile = useRef(false);

  useEffect(() => {
    // Mobile Check
    const checkMobile = () => {
        isMobile.current = window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches;
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    if (isMobile.current) return;

    // References
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    // Initial Position (Center)
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(ring, { xPercent: -50, yPercent: -50 });

    // State Variables
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    
    // Track Mouse
    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Direct follow for dot
      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.1,
        ease: "power2.out"
      });

      // Elastic follow for ring (unless magnetic)
      if (!isHovering) {
        gsap.to(ring, {
            x: mouseX,
            y: mouseY,
            duration: 0.6,
            ease: "power3.out"
        });
      }
    };

    // Magnetic Logic
    const onMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const magnetic = target.closest('[data-magnetic]') as HTMLElement;

        if (magnetic) {
            setIsHovering(true);
            const rect = magnetic.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // Grow ring and snap to center of magnetic element
            gsap.to(ring, {
                x: centerX,
                y: centerY,
                width: rect.width + 20,
                height: rect.height + 20,
                borderRadius: "8px", // Assuming buttons are somewhat rectangular
                backgroundColor: "rgba(191, 179, 143, 0.1)", // Gold Tint
                borderColor: "rgba(191, 179, 143, 0.4)",
                duration: 0.5,
                ease: "elastic.out(1, 0.4)"
            });

            // Hide dot
            gsap.to(cursor, { scale: 0, duration: 0.2 });
        } else if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('a') || target.closest('button')) {
            // Standard hover (scale up slightly)
             gsap.to(ring, {
                scale: 1.5,
                borderColor: "rgba(191, 179, 143, 0.8)",
                duration: 0.3
            });
        }
    };

    const onMouseOut = (e: MouseEvent) => {
         const target = e.target as HTMLElement;
        const magnetic = target.closest('[data-magnetic]');
        
        if (magnetic) {
            setIsHovering(false);
            // Return to ring
            gsap.to(ring, {
                width: 40,
                height: 40,
                borderRadius: "50%",
                backgroundColor: "transparent",
                borderColor: "rgba(191, 179, 143, 0.4)",
                scale: 1,
                x: mouseX,
                y: mouseY, // Will be updated by mouse move immediately
                duration: 0.5,
                ease: "power3.out"
            });
            // Show dot
            gsap.to(cursor, { scale: 1, duration: 0.2 });
        } else if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('a') || target.closest('button')) {
             gsap.to(ring, {
                scale: 1,
                borderColor: "rgba(191, 179, 143, 0.4)",
                duration: 0.3
            });
        }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);


    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, [isHovering]);

  if (isMobile.current) return null;

  return (
    <>
      <div 
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 border border-[#BFB38F]/40 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-colors duration-300" 
      />
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#BFB38F] rounded-full pointer-events-none z-[9999] mix-blend-difference"
      />
    </>
  );
};
