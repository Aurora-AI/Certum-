import { useState, useEffect } from 'react';

/**
 * Hook to detect if the user prefers reduced motion.
 * Used to conditionally disable or simplify GSAP or CSS animations for accessibility.
 */
export function useReducedMotion() {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => 
        typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false
    );

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        
        const handleChange = () => {
            setPrefersReducedMotion(mediaQuery.matches);
        };
        
        mediaQuery.addEventListener('change', handleChange);
        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    return prefersReducedMotion;
}
