"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll Lock
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full px-6 md:px-12 py-6 md:py-8 flex justify-between items-center z-50 bg-transparent transition-all duration-300">
        <div className="text-xl font-bold uppercase tracking-widest text-[#1A1A1A] mix-blend-exclusion z-50 relative">
          CERTUM
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-xs font-bold tracking-[0.2em] relative z-50 mix-blend-exclusion text-white">
          <Link href="/work" className="hover:text-gray-300 transition-colors">WORK</Link>
          <Link href="/agent" className="text-[#bfb38f] hover:text-[#d4c59a] transition-colors flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#bfb38f] animate-pulse" />
              CENTRUM
          </Link>
          <Link href="/news" className="hover:text-gray-300 transition-colors">NEWS</Link>
          <Link href="/contact" className="hover:text-gray-300 transition-colors">CONTACT</Link>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden z-50 flex flex-col gap-1.5 p-2 mix-blend-difference"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 transition-opacity duration-500 flex flex-col justify-center items-center gap-8 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-8 text-sm font-bold tracking-[0.25em] text-white">
           <Link href="/work" onClick={() => setIsMenuOpen(false)} className="hover:text-[#bfb38f] transition-colors scale-100 hover:scale-110 duration-300">WORK</Link>
           <Link href="/agent" onClick={() => setIsMenuOpen(false)} className="text-[#bfb38f] hover:text-white transition-colors flex items-center gap-2 scale-100 hover:scale-110 duration-300">
              <span className="w-2 h-2 rounded-full bg-[#bfb38f]" />
              CENTRUM
           </Link>
           <Link href="/news" onClick={() => setIsMenuOpen(false)} className="hover:text-[#bfb38f] transition-colors scale-100 hover:scale-110 duration-300">NEWS</Link>
           <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-[#bfb38f] transition-colors scale-100 hover:scale-110 duration-300">CONTACT</Link>
        </div>
      </div>
    </>
  );
}
