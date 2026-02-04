
"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full px-12 py-8 flex justify-between items-center z-50 bg-black/80 backdrop-blur-md transition-all duration-300">
      <div className="text-xl font-bold uppercase tracking-widest text-white">
        CERTUM
      </div>
      <div className="flex items-center gap-8 text-xs font-bold tracking-[0.2em] relative z-50">
        <Link href="/work" className="hover:text-gray-400 transition-colors">WORK</Link>
        <Link href="/agent" className="text-[#bfb38f] hover:text-white transition-colors flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#bfb38f] animate-pulse" />
            CENTRUM
        </Link>
        <Link href="/news" className="hover:text-gray-400 transition-colors">NEWS</Link>
        <Link href="/contact" className="hover:text-gray-400 transition-colors">CONTACT</Link>
      </div>
    </nav>
  );
}
