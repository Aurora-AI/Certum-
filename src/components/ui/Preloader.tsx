'use client';

import { useState, useEffect } from 'react';

export default function Preloader() {
    const [isVisible, setIsVisible] = useState(true);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const minDisplayTime = 2500; // Minimum time to show preloader (ms)
        const startTime = Date.now();

        const dismiss = () => {
            const elapsed = Date.now() - startTime;
            const remaining = Math.max(0, minDisplayTime - elapsed);

            setTimeout(() => {
                setIsFading(true);
                // Remove from DOM after fade animation completes
                setTimeout(() => setIsVisible(false), 800);
            }, remaining);
        };

        // Wait for everything to load
        if (document.readyState === 'complete') {
            dismiss();
        } else {
            window.addEventListener('load', dismiss);
            return () => window.removeEventListener('load', dismiss);
        }
    }, []);

    if (!isVisible) return null;

    return (
        <div
            className={`preloader ${isFading ? 'preloader--fade' : ''}`}
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 9999,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#FFFFFF',
                transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                opacity: isFading ? 0 : 1,
                pointerEvents: isFading ? 'none' : 'auto',
            }}
        >
            {/* Main Title */}
            <h1
                style={{
                    fontSize: 'clamp(1.4rem, 3vw, 2.4rem)',
                    fontFamily: '"Manrope", "Inter", sans-serif',
                    fontWeight: 300,
                    letterSpacing: '0.35em',
                    color: '#0A0A0A',
                    margin: 0,
                    textTransform: 'uppercase',
                    animation: 'preloader-title 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                    opacity: 0,
                }}
            >
                Centrum Private
            </h1>

            {/* Horizontal Line */}
            <div
                style={{
                    width: '0%',
                    maxWidth: '280px',
                    height: '1px',
                    backgroundColor: '#0A0A0A',
                    margin: '20px 0 16px',
                    animation: 'preloader-line 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards',
                }}
            />

            {/* Subtitle */}
            <p
                style={{
                    fontSize: 'clamp(0.6rem, 1vw, 0.75rem)',
                    fontFamily: '"Space Mono", monospace',
                    fontWeight: 400,
                    letterSpacing: '0.2em',
                    color: '#86868B',
                    margin: 0,
                    textTransform: 'lowercase',
                    opacity: 0,
                    animation: 'preloader-subtitle 0.8s ease-out 0.8s forwards',
                }}
            >
                by Mad Lab Aurora
            </p>

            {/* Minimal pulse indicator */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '48px',
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    backgroundColor: '#0A0A0A',
                    animation: 'preloader-pulse 1.5s ease-in-out infinite',
                }}
            />

            {/* Inline keyframes — no external CSS dependency */}
            <style>{`
                @keyframes preloader-title {
                    0% {
                        opacity: 0;
                        letter-spacing: 0.6em;
                    }
                    100% {
                        opacity: 1;
                        letter-spacing: 0.35em;
                    }
                }

                @keyframes preloader-line {
                    0% {
                        width: 0%;
                    }
                    100% {
                        width: 100%;
                    }
                }

                @keyframes preloader-subtitle {
                    0% {
                        opacity: 0;
                        transform: translateY(8px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes preloader-pulse {
                    0%, 100% {
                        opacity: 0.2;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 1;
                        transform: scale(1.5);
                    }
                }
            `}</style>
        </div>
    );
}
