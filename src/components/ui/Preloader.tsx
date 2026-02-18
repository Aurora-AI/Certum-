'use client';

import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Preloader() {
    const counterRef = useRef<HTMLSpanElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isComplete, setIsComplete] = useState(false);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const counterElement = counterRef.current;
            if (!counterElement) return;

            let currentVal = 0;
            
            // O "Ritual" de carregamento
            const interval = setInterval(() => {
                // Incremento não linear (começa rápido, termina lento - simula carregamento real)
                currentVal += Math.floor(Math.random() * 5) + 1; 
                
                if (currentVal > 100) currentVal = 100;

                // Atualiza o texto
                counterElement.innerText = currentVal + "%";

                // FIM DO PRELOADER
                if (currentVal === 100) {
                    clearInterval(interval);
                    
                    // Dispara a animação de saída
                    const tl = gsap.timeline({
                        onComplete: () => {
                            setIsComplete(true);
                            // Dispatch event for Hero to start
                            window.dispatchEvent(new CustomEvent('preloader-complete'));
                        }
                    });

                    tl.to(".preloader-content", {
                        y: -50,
                        opacity: 0,
                        duration: 0.8,
                        ease: "power2.in"
                    })
                    .to(containerRef.current, {
                        yPercent: -100,
                        duration: 1.2,
                        ease: "expo.inOut",
                    }, "-=0.2");
                }
            }, 30); // Velocidade do update (30ms = ~30fps visual para os números)

            return () => clearInterval(interval);

        }, containerRef);

        return () => ctx.revert();
    }, []);

    if (isComplete) return null;

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white"
        >
            <div className="preloader-content flex flex-col items-center">
                {/* Numeric Decryption Display */}
                <div className="text-8xl font-light tracking-tighter" style={{ fontFamily: 'monospace' }}>
                    <span ref={counterRef}>0%</span>
                </div>
                
                {/* Context Label */}
                <div className="mt-4 text-xs tracking-[0.2em] uppercase text-white/50">
                    System Decryption
                </div>
            </div>
        </div>
    );
}
