"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface RevealTextProps {
  children: React.ReactNode;
  className?: string; // Class for the TEXT itself
  containerClassName?: string; // Class for the MASK (overflow-hidden)
  delay?: number;
  threshold?: number; // 0-1 (ScrollTrigger start)
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "div" | "span";
}

export function RevealText({
  children,
  className,
  containerClassName,
  delay = 0,
  threshold = 0.6,
  tag: Tag = "div",
}: RevealTextProps) {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { y: "100%" },
        {
          y: "0%",
          duration: 1.5,
          ease: "power4.out",
          delay: delay,
          scrollTrigger: {
            trigger: containerRef.current,
            start: `top ${threshold * 100}%`,
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [delay, threshold]);

  return (
    <Tag
      ref={containerRef as any}
      className={cn("overflow-hidden relative block", containerClassName)}
    >
      <span ref={textRef} className={cn("block", className)}>
        {children}
      </span>
    </Tag>
  );
}
