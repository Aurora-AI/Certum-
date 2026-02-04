
"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full px-12 py-8 flex justify-between items-center z-50 bg-black/80 backdrop-blur-md transition-all duration-300">
      <div className="text-xl font-bold uppercase tracking-widest text-white">
        CERTUM
      </div>
      <div className="hidden md:flex gap-8">
        {["Work", "Studio", "News", "Contact"].map((item) => (
          <Link 
            key={item} 
            href="#" 
            className="text-sm font-medium uppercase tracking-widest text-white/80 hover:text-white transition-colors"
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
}
