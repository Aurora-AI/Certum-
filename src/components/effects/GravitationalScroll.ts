import { useEffect, useRef } from 'react';

/**
 * FX-05: Gravitational Scroll Compression
 * Fenômeno quebrado: Scroll altera densidade espacial.
 * Base matemática: Compressão volumétrica proporcional à velocidade do scroll.
 * Agente dominante: Alpha (controle estrutural)
 */
export function useGravitationalScroll(scrollContainerRef: React.RefObject<HTMLElement | null>, itemSelector: string) {
  const lastScrollX = useRef(0);
  const velocity = useRef(0);
  const requestRef = useRef<number>(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const items = container.querySelectorAll(itemSelector);
    if (items.length === 0) return;

    const updatePhysics = () => {
      if (!container) return;

      const currentScrollX = container.scrollLeft;
      // Calculate velocity: delta distance
      const delta = currentScrollX - lastScrollX.current;
      
      // Smoothing velocity (Interia)
      velocity.current += (delta - velocity.current) * 0.1;

      // Apply skew/compression based on velocity
      // Max skew limited to 5deg to maintain "Trustware" (readability)
      const skew = Math.max(Math.min(velocity.current * 0.05, 5), -5);
      const scale = 1 - Math.min(Math.abs(velocity.current * 0.001), 0.05); // Subtle compression

      items.forEach((item) => {
        (item as HTMLElement).style.transform = `skewX(${-skew}deg) scaleX(${scale})`;
      });

      lastScrollX.current = currentScrollX;
      requestRef.current = requestAnimationFrame(updatePhysics);
    };

    const onScroll = () => {
      // Trigger update loop if not running, or just let the loop handle it
      // For physics, a constant loop is often smoother than event-driven for decay
    };

    // Start loop
    requestRef.current = requestAnimationFrame(updatePhysics);
    container.addEventListener('scroll', onScroll);

    return () => {
      container.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(requestRef.current);
    };
  }, [scrollContainerRef, itemSelector]);
}
