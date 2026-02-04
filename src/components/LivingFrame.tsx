import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface LivingFrameProps {
  videoSrc: string;
  imageSrc: string;
  alt: string;
  className?: string;
  // New props for Z-Pattern metadata if needed inside, but mostly used in parent
}

export default function LivingFrame({
  videoSrc,
  imageSrc,
  alt,
  className = "",
}: LivingFrameProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Note: Hover effects are handled via CSS classes 'group video-frame-hover' in parent or self
  // We keep GSAP for entrance animations if needed, but the snippet relies on CSS transitions.
  // We will adopt the snippet's class structure.

  return (
    <div className={`relative w-full aspect-[3/4.2] overflow-hidden rounded-sm bg-gray-900 shadow-2xl group video-frame-hover cursor-pointer ${className}`}>
      {/* 1. VIDEO BACKGROUND (The Frame) */}
      <div className="absolute inset-0 z-0 video-bg overflow-hidden">
        {/* Using video tag instead of img for the background as originally requested 'video frame' */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60 scale-110 transition-opacity duration-500"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        
        {/* Play Icon Overlay (Optional from snippet) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-60 transition-opacity duration-500">
           {/* Simple Circle placeholder */}
           <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm">
             <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
           </div>
        </div>
      </div>

      {/* 2. INSET PHOTO (The Subject) */}
      <div className="inset-photo absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] z-10 overflow-hidden shadow-2xl border border-white/10 transition-transform duration-700 ease-[cubic-bezier(0.2,0,0.2,1)] group-hover:scale-105 group-hover:-translate-y-[55%]">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
