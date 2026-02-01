"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollVelocityOptions {
  /** Damping factor for smoothing velocity (0-1) */
  damping?: number;
  /** Maximum velocity value */
  maxVelocity?: number;
  /** Minimum velocity threshold before effects apply */
  threshold?: number;
}

interface VelocityState {
  velocity: number;
  direction: "up" | "down" | "none";
  normalizedVelocity: number; // -1 to 1
  isScrolling: boolean;
}

/**
 * Hook to track scroll velocity for dynamic effects
 */
export function useScrollVelocity(options: ScrollVelocityOptions = {}) {
  const { 
    damping = 0.9, 
    maxVelocity = 100,
    threshold = 0.1,
  } = options;

  const [state, setState] = useState<VelocityState>({
    velocity: 0,
    direction: "none",
    normalizedVelocity: 0,
    isScrolling: false,
  });

  const lastScrollY = useRef(0);
  const lastTime = useRef(Date.now());
  const velocity = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentTime = Date.now();
      const deltaY = currentScrollY - lastScrollY.current;
      const deltaTime = currentTime - lastTime.current || 1;

      // Calculate instantaneous velocity
      const instantVelocity = (deltaY / deltaTime) * 16; // Normalize to ~60fps

      // Smooth velocity with damping
      velocity.current = velocity.current * damping + instantVelocity * (1 - damping);

      // Clamp to max velocity
      velocity.current = Math.max(-maxVelocity, Math.min(maxVelocity, velocity.current));

      // Determine direction
      const direction = Math.abs(velocity.current) < threshold 
        ? "none" 
        : velocity.current > 0 ? "down" : "up";

      // Normalize velocity to -1 to 1 range
      const normalizedVelocity = velocity.current / maxVelocity;

      setState({
        velocity: velocity.current,
        direction,
        normalizedVelocity,
        isScrolling: true,
      });

      lastScrollY.current = currentScrollY;
      lastTime.current = currentTime;

      // Clear existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Set scrolling to false after scroll stops
      scrollTimeout.current = setTimeout(() => {
        velocity.current = 0;
        setState(prev => ({
          ...prev,
          velocity: 0,
          direction: "none",
          normalizedVelocity: 0,
          isScrolling: false,
        }));
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [damping, maxVelocity, threshold]);

  return state;
}

/**
 * Hook to apply velocity-based transforms to an element
 */
export function useVelocityTransform(
  elementRef: React.RefObject<HTMLElement>,
  options: {
    skewFactor?: number;
    scaleFactor?: number;
    yFactor?: number;
    duration?: number;
  } = {}
) {
  const {
    skewFactor = 2,
    scaleFactor = 0.02,
    yFactor = 0,
    duration = 0.3,
  } = options;

  const { normalizedVelocity, isScrolling } = useScrollVelocity();

  useEffect(() => {
    if (!elementRef.current) return;

    const skewY = normalizedVelocity * skewFactor;
    const scaleY = 1 + Math.abs(normalizedVelocity) * scaleFactor;
    const y = normalizedVelocity * yFactor;

    gsap.to(elementRef.current, {
      skewY,
      scaleY,
      y,
      duration,
      ease: "power2.out",
    });
  }, [normalizedVelocity, elementRef, skewFactor, scaleFactor, yFactor, duration]);

  return { normalizedVelocity, isScrolling };
}

/**
 * Component wrapper for velocity-based effects
 */
interface VelocityWrapperProps {
  children: React.ReactNode;
  className?: string;
  skewFactor?: number;
  scaleFactor?: number;
  stretchOnScroll?: boolean;
}

export function VelocityWrapper({
  children,
  className = "",
  skewFactor = 2,
  scaleFactor = 0.02,
  stretchOnScroll = true,
}: VelocityWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  useVelocityTransform(ref, {
    skewFactor: stretchOnScroll ? skewFactor : 0,
    scaleFactor: stretchOnScroll ? scaleFactor : 0,
  });

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}

/**
 * Hook for parallax with velocity
 */
export function useVelocityParallax(
  elementRef: React.RefObject<HTMLElement>,
  options: {
    speed?: number;
    direction?: "vertical" | "horizontal";
  } = {}
) {
  const { speed = 0.5, direction = "vertical" } = options;
  const { normalizedVelocity } = useScrollVelocity();

  useEffect(() => {
    if (!elementRef.current) return;

    const value = normalizedVelocity * speed * 50;

    if (direction === "vertical") {
      gsap.to(elementRef.current, {
        y: value,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(elementRef.current, {
        x: value,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [normalizedVelocity, elementRef, speed, direction]);

  return normalizedVelocity;
}

/**
 * GSAP ScrollTrigger velocity-based animation
 */
export function createVelocityScrollTrigger(
  element: HTMLElement,
  options: {
    trigger?: string | Element;
    onVelocityChange?: (velocity: number) => void;
    maxSkew?: number;
  } = {}
) {
  const { 
    trigger = element, 
    onVelocityChange,
    maxSkew = 5,
  } = options;

  let lastProgress = 0;
  let velocity = 0;

  return ScrollTrigger.create({
    trigger,
    start: "top bottom",
    end: "bottom top",
    scrub: true,
    onUpdate: (self) => {
      const progress = self.progress;
      const delta = progress - lastProgress;
      
      // Calculate velocity from progress delta
      velocity = delta * 1000; // Amplify for visible effect
      velocity = Math.max(-maxSkew, Math.min(maxSkew, velocity));

      gsap.to(element, {
        skewY: velocity,
        duration: 0.1,
      });

      onVelocityChange?.(velocity);
      lastProgress = progress;
    },
    onLeave: () => {
      gsap.to(element, { skewY: 0, duration: 0.3 });
    },
    onLeaveBack: () => {
      gsap.to(element, { skewY: 0, duration: 0.3 });
    },
  });
}
