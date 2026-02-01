"use client";

import React, { useRef, ReactNode, useMemo } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimationType = 
  | "chars" 
  | "words" 
  | "lines" 
  | "chars-up" 
  | "chars-down" 
  | "chars-fade" 
  | "words-slide" 
  | "lines-clip"
  | "chars-rotate"
  | "blur-in";

interface TextSplitRevealProps {
  children: string;
  /** Type of animation */
  type?: AnimationType;
  /** Tag to render */
  as?: keyof JSX.IntrinsicElements;
  /** Animation duration for each element */
  duration?: number;
  /** Stagger delay between elements */
  stagger?: number;
  /** Custom easing */
  ease?: string;
  /** Trigger animation on scroll */
  scrollTrigger?: boolean;
  /** Scroll trigger start position */
  triggerStart?: string;
  /** Delay before animation starts */
  delay?: number;
  /** Additional className */
  className?: string;
  /** Play animation on mount or wait for trigger */
  autoPlay?: boolean;
  /** Callback when animation completes */
  onComplete?: () => void;
}

export default function TextSplitReveal({
  children,
  type = "chars",
  as: Tag = "div",
  duration = 0.8,
  stagger = 0.02,
  ease = "power3.out",
  scrollTrigger = true,
  triggerStart = "top 80%",
  delay = 0,
  className = "",
  autoPlay = true,
  onComplete,
}: TextSplitRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  // Split text into elements
  const { chars, words, lines } = useMemo(() => {
    const text = children;
    const wordsArray = text.split(" ");
    const charsArray = text.split("");
    const linesArray = text.split("\n");

    return {
      chars: charsArray,
      words: wordsArray,
      lines: linesArray,
    };
  }, [children]);

  // Get animation config based on type
  const getAnimationConfig = (type: AnimationType) => {
    const configs: Record<AnimationType, { from: gsap.TweenVars; to: gsap.TweenVars }> = {
      "chars": {
        from: { opacity: 0, y: 50 },
        to: { opacity: 1, y: 0 },
      },
      "chars-up": {
        from: { opacity: 0, y: 100, rotateX: -90 },
        to: { opacity: 1, y: 0, rotateX: 0 },
      },
      "chars-down": {
        from: { opacity: 0, y: -100 },
        to: { opacity: 1, y: 0 },
      },
      "chars-fade": {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      "chars-rotate": {
        from: { opacity: 0, rotateY: 90, transformOrigin: "left center" },
        to: { opacity: 1, rotateY: 0 },
      },
      "words": {
        from: { opacity: 0, y: 30 },
        to: { opacity: 1, y: 0 },
      },
      "words-slide": {
        from: { opacity: 0, x: -50 },
        to: { opacity: 1, x: 0 },
      },
      "lines": {
        from: { opacity: 0, y: 50 },
        to: { opacity: 1, y: 0 },
      },
      "lines-clip": {
        from: { clipPath: "inset(100% 0 0 0)" },
        to: { clipPath: "inset(0% 0 0 0)" },
      },
      "blur-in": {
        from: { opacity: 0, filter: "blur(20px)" },
        to: { opacity: 1, filter: "blur(0px)" },
      },
    };

    return configs[type];
  };

  useGSAP(() => {
    if (!containerRef.current || hasAnimated.current) return;

    const elements = containerRef.current.querySelectorAll(".split-element");
    if (!elements.length) return;

    const config = getAnimationConfig(type);

    // Set initial state
    gsap.set(elements, config.from);

    const animationConfig: gsap.TweenVars = {
      ...config.to,
      duration,
      stagger,
      ease,
      delay,
      onComplete: () => {
        hasAnimated.current = true;
        onComplete?.();
      },
    };

    if (scrollTrigger && autoPlay) {
      gsap.to(elements, {
        ...animationConfig,
        scrollTrigger: {
          trigger: containerRef.current,
          start: triggerStart,
          once: true,
        },
      });
    } else if (autoPlay) {
      gsap.to(elements, animationConfig);
    }
  }, { scope: containerRef, dependencies: [type, duration, stagger, ease, delay, scrollTrigger, triggerStart, autoPlay] });

  // Render based on split type
  const renderContent = () => {
    const isCharBased = type.startsWith("char") || type === "blur-in";
    const isWordBased = type.startsWith("word");
    const isLineBased = type.startsWith("line");

    if (isCharBased) {
      return (
        <>
          {chars.map((char, index) => (
            <span
              key={index}
              className="split-element inline-block"
              style={{ 
                whiteSpace: char === " " ? "pre" : "normal",
                perspective: "1000px",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </>
      );
    }

    if (isWordBased) {
      return (
        <>
          {words.map((word, index) => (
            <span key={index} className="inline-block overflow-hidden mr-[0.25em]">
              <span className="split-element inline-block">
                {word}
              </span>
            </span>
          ))}
        </>
      );
    }

    if (isLineBased) {
      return (
        <>
          {lines.map((line, index) => (
            <span 
              key={index} 
              className="split-element block overflow-hidden"
              style={type === "lines-clip" ? { display: "block" } : undefined}
            >
              {line}
            </span>
          ))}
        </>
      );
    }

    return children;
  };

  return (
    <Tag
      ref={containerRef as React.RefObject<any>}
      className={`${className}`}
      style={{ perspective: "1000px" }}
    >
      {renderContent()}
    </Tag>
  );
}

// Utility component for wrapping existing elements
export function SplitTextWrapper({
  children,
  type = "chars",
  duration = 0.8,
  stagger = 0.02,
  ease = "power3.out",
  scrollTrigger = true,
  triggerStart = "top 80%",
  delay = 0,
  className = "",
}: Omit<TextSplitRevealProps, 'children' | 'as'> & { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const config = {
      "chars": { from: { opacity: 0, y: 50 }, to: { opacity: 1, y: 0 } },
      "words": { from: { opacity: 0, y: 30 }, to: { opacity: 1, y: 0 } },
      "lines": { from: { opacity: 0, y: 50 }, to: { opacity: 1, y: 0 } },
    }[type.split("-")[0] as "chars" | "words" | "lines"] || { 
      from: { opacity: 0, y: 50 }, 
      to: { opacity: 1, y: 0 } 
    };

    gsap.set(containerRef.current, config.from);

    const animationConfig: gsap.TweenVars = {
      ...config.to,
      duration,
      stagger,
      ease,
      delay,
    };

    if (scrollTrigger) {
      gsap.to(containerRef.current, {
        ...animationConfig,
        scrollTrigger: {
          trigger: containerRef.current,
          start: triggerStart,
          once: true,
        },
      });
    } else {
      gsap.to(containerRef.current, animationConfig);
    }
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
