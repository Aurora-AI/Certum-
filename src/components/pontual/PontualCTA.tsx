'use client';

import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PontualCTA() {
    const containerRef = useRef<HTMLDivElement>(null);
    const btnRef = useRef<HTMLAnchorElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(containerRef.current,
                { opacity: 0, scale: 0.95 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const whatsappMessage = encodeURIComponent("Olá, gostaria de simular o Plano Pontual e entender a antecipação de 6 meses.");

    return (
        <section ref={containerRef} className="w-full py-[10vw] flex flex-col items-center justify-center bg-accent text-dark relative overflow-hidden">
            
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10" 
                style={{ 
                    backgroundImage: 'url("/assets/noise.png")', 
                    backgroundSize: '200px' 
                }} 
            />

            <div className="relative z-10 text-center px-[5vw]">
                <h2 className="text-h2 font-serif font-light mb-[2vw] text-[#0d0e13]">
                    Não jogue dados com seu <span className="italic font-medium">Futuro.</span>
                </h2>
                <p className="text-xl mb-[4vw] max-w-xl mx-auto text-[#0d0e13]/80 font-sans">
                    A matemática do Plano Pontual é finita. Vagas limitadas por grupo.
                    <br/>
                    <span className="font-bold border-b border-[#0d0e13]/20 pb-1 inline-block mt-2">Garanta sua posição no cronograma agora.</span>
                </p>

                <a 
                    ref={btnRef}
                    href={`https://wa.me/5541997946451?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-[3vw] py-[1.5vw] bg-[#0d0e13] text-white text-md uppercase tracking-[0.1EM] hover:bg-white hover:text-[#0d0e13] border border-transparent hover:border-[#0d0e13] transition-all duration-300 shadow-2xl"
                >
                    <span className="material-symbols-outlined mr-2">verified_user</span>
                    Validar Minha Estratégia
                </a>
            </div>

        </section>
    );
}
