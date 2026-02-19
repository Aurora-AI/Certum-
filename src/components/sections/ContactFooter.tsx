"use client";

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactFooter = () => {
    const sectionRef = useRef(null);
    const magnetRef = useRef<HTMLAnchorElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);
    const iconRef = useRef<HTMLDivElement>(null);

    // 1. MAGNETIC PHYSICS (The Illusion of Life)
    // "O campo reage a presença."
    useEffect(() => {
        const magnet = magnetRef.current;
        const text = textRef.current;
        const icon = iconRef.current;

        if (!magnet || !text || !icon) return;

        const handleMouseMove = (e: MouseEvent) => {
            const bounds = magnet.getBoundingClientRect();
            
            // Calcula a força da atração (distância do centro)
            const x = e.clientX - bounds.left - bounds.width / 2;
            const y = e.clientY - bounds.top - bounds.height / 2;
            
            // Move o botão LEVEMENTE em direção ao mouse (Física)
            // Lei da Proporcionalidade: Resposta proporcional a pergunta (movimento do mouse)
            gsap.to(magnet, {
                x: x * 0.3, // Fator de força (0.3 é suave)
                y: y * 0.3,
                duration: 0.6,
                ease: "power3.out"
            });
            
            // Move o texto um pouco mais (Parallax interno = Profundidade)
            gsap.to([text, icon], {
                x: x * 0.1,
                y: y * 0.1,
                duration: 0.6
            });
        };

        const handleMouseLeave = () => {
            // Solta o ímã (Volta ao centro com elasticidade)
            // Follow Through: A energia dissipa elasticamente
            gsap.to(magnet, {
                x: 0,
                y: 0,
                duration: 1, 
                ease: "elastic.out(1, 0.3)" 
            });
            
            gsap.to([text, icon], { x: 0, y: 0, duration: 1 });
        };

        magnet.addEventListener('mousemove', handleMouseMove);
        magnet.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            magnet.removeEventListener('mousemove', handleMouseMove);
            magnet.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    // 2. SCROLL REVEAL (Sem Cinema, Apenas Arquitetura)
    useEffect(() => {
      const ctx = gsap.context(() => {
        // Nada voa. Apenas aparece com dignidade.
        gsap.fromTo(".footer-content", 
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%", // Começa quando o topo do footer atinge 80% da viewport
            }
          }
        );
      }, sectionRef);

      return () => ctx.revert();
    }, []);

    return (
        <footer ref={sectionRef} className="footer-section s-grid theme-dark relative overflow-hidden" style={{ paddingTop: '8vw', paddingBottom: '4vw', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
             {/* Background Gradient Subtle (Volume) */}
             <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e13] to-transparent pointer-events-none" />

            {/* ZONA 1: A PROMESSA (Hero Text) */}
            <div className="footer-content" style={{ gridColumn: '2 / span 6', position: 'relative', zIndex: 2 }}>
                <h2 className="text-hero" style={{ fontSize: '6vw', lineHeight: '0.9' }}>
                    <div className="u-clip-parent"><span className="u-clip-child">Start Your</span></div>
                    <div className="u-clip-parent"><span className="u-clip-child" style={{ color: 'var(--color-accent)' }}>Legacy.</span></div>
                </h2>
                
                <p className="footer-content" style={{ marginTop: '2vw', fontSize: '1.2vw', color: 'rgba(255,255,255,0.6)', maxWidth: '25vw', lineHeight: '1.4' }}>
                    Consórcios estruturados e seguros high-end. <br/>
                    Atendimento private em Curitiba e todo o Brasil.
                </p>
            </div>

            {/* ZONA 2: O CONCIERGE (Magnetic Anchor) */}
            <div className="footer-content" style={{ gridColumn: '9 / span 4', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', position: 'relative', zIndex: 10 }}>
                <a ref={magnetRef} href="https://wa.me/5541997946451" className="magnetic-btn" aria-label="Falar com Concierge">
                    <div className="magnetic-fill"></div>
                    <span ref={textRef} className="magnetic-text">Falar com<br/>Concierge</span>
                    <div ref={iconRef} className="magnetic-icon">↗</div>
                </a>
            </div>

            {/* ZONA 3: O TRUST (Endereço & Legal) */}
            <div className="footer-content" style={{ gridColumn: '2 / span 10', marginTop: '8vw', paddingTop: '2vw', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', position: 'relative', zIndex: 2 }}>
                
                <address style={{ fontStyle: 'normal', fontSize: '0.9vw', color: 'rgba(255,255,255,0.4)', lineHeight: '1.6' }}>
                    <strong>Certum Prime Headquarters</strong><br/>
                    Av. do Batel, 1230 - Curitiba, PR<br/>
                    Brasil - 80420-090
                </address>

                <div className="flex gap-[2vw]" style={{ fontSize: '0.9vw' }}>
                    <a href="#" className="hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.4)' }}>Política de Privacidade</a>
                    <a href="#" className="hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.4)' }}>Termos de Uso</a>
                </div>

                <div style={{ fontSize: '0.9vw', color: 'rgba(255,255,255,0.2)' }}>
                    © 2026 Certum Prime.
                </div>
            </div>

            {/* SYSTEM: SEO SCHEMA (Invisible) */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Certum Prime",
                "url": "https://certumprime.com.br", // Ajuste conforme URL real
                "logo": "https://certumprime.com.br/logo.png", // Ajuste conforme logo real
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+55-41-99794-6451",
                    "contactType": "sales",
                    "areaServed": "BR",
                    "availableLanguage": "Portuguese"
                },
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Av. do Batel, 1230",
                    "addressLocality": "Curitiba",
                    "addressRegion": "PR",
                    "postalCode": "80420-090",
                    "addressCountry": "BR"
                }
            })}} />

        </footer>
    );
};

export default ContactFooter;
