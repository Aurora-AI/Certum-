"use client";
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    href?: string;
    onClick?: () => void;
    strength?: number; // Magnetic pull strength (default 0.5)
}

const MagneticButton = ({ children, className = "", href, onClick, strength = 0.5 }: MagneticButtonProps) => {
    const btnRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
    const contentRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const btn = btnRef.current;
        const content = contentRef.current;
        if (!btn || !content) return;

        const xToBtn = gsap.quickTo(btn, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yToBtn = gsap.quickTo(btn, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });
        
        const xToContent = gsap.quickTo(content, "x", { duration: 1, ease: "power2.out" });
        const yToContent = gsap.quickTo(content, "y", { duration: 1, ease: "power2.out" });

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = btn.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);

            // Move button slightly
            xToBtn(x * strength);
            yToBtn(y * strength);

            // Move content bit more for parallax feel inside
            xToContent(x * (strength * 0.2));
            yToContent(y * (strength * 0.2));
        };

        const handleMouseLeave = () => {
            xToBtn(0);
            yToBtn(0);
            xToContent(0);
            yToContent(0);
        };

        btn.addEventListener("mousemove", handleMouseMove as unknown as EventListener);
        btn.addEventListener("mouseleave", handleMouseLeave as unknown as EventListener);

        return () => {
            btn.removeEventListener("mousemove", handleMouseMove as unknown as EventListener);
            btn.removeEventListener("mouseleave", handleMouseLeave as unknown as EventListener);
        };
    }, [strength]);

    const Component = href ? 'a' : 'button';

    return (
        <Component
            ref={btnRef as any}
            href={href}
            onClick={onClick}
            className={`btn-magnetic group relative inline-flex items-center gap-4 text-current hover:text-[var(--color-accent)] transition-colors duration-300 ${className}`}
            style={{ display: 'inline-flex' }} // Ensure inline-flex for proper box model
        >
            {/* Wrapper for internal parallax if needed, or proper alignment */}
            <span ref={contentRef} className="relative flex items-center gap-4">
                <span className="btn-text uppercase tracking-widest text-sm font-medium">
                    {children}
                </span>
                <div className="btn-circle w-3 h-3 rounded-full border border-current group-hover:bg-current transition-all duration-300"></div>
            </span>
        </Component>
    );
};

export default MagneticButton;
