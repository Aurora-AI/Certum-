"use client";

import { useRef, useLayoutEffect } from "react";
import Image, { ImageProps } from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface TelhaImageProps extends ImageProps {
  containerClassName?: string;
  aspectRatio?: "square" | "video" | "portrait" | "auto";
}

export function TelhaImage({ 
  src, 
  alt, 
  className, 
  containerClassName, 
  aspectRatio = "auto",
  ...props 
}: TelhaImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  // No maskRef needed for Clip-Path strategy

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom-=10%", 
          end: "bottom center", // Animate over a longer scroll distance
          scrub: 1.5, // Scrub for direct control "as mouse goes down"
        }
      });

      // 1. The "Frame" Expansion (Clip Path)
      // Starts cropped (inset 15%) and opens up to full (inset 0%)
      gsap.set(containerRef.current, { clipPath: "inset(15% 15% 15% 15%)" });
      
      tl.to(containerRef.current, 
        { 
          clipPath: "inset(0% 0% 0% 0%)", 
          duration: 1, 
          ease: "power2.inOut" 
        }
      );

      // 2. The "Digital Zoom" (Far to Near)
      // Image scales DOWN from 1.3 to 1.0 (creating the "arriving" illusion)
      // While the frame opens, the image settles.
      gsap.set(imageRef.current, { scale: 1.3 });
      
      tl.to(imageRef.current, 
        { 
          scale: 1.0, 
          duration: 1, 
          ease: "linear" // Linear because scrub handles the smoothing
        }, 
        "<" // Sync start
      );

      // Hover Effect (Breathing)
      const container = containerRef.current;
      if (container && imageRef.current) {
         container.addEventListener("mouseenter", () => {
             gsap.to(imageRef.current, { scale: 1.05, duration: 1.0, ease: "power2.out", overwrite: "auto" });
         });
         
         container.addEventListener("mouseleave", () => {
             // Return to 1.0 (or current scroll state if we weren't scrubbing, but here 1.0 is safe baseline)
             gsap.to(imageRef.current, { scale: 1.0, duration: 1.0, ease: "power2.out", overwrite: "auto" });
         });
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Aspect Ratio Mapping
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    auto: "",
  };

  return (
    <div 
        ref={containerRef}
        className={cn(
            "relative overflow-hidden bg-[#E5E5E5]", 
            aspectClasses[aspectRatio],
            containerClassName
        )}
    >
      <Image
        ref={imageRef as any}
        src={src}
        alt={alt}
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={cn("object-cover w-full h-full will-change-transform z-10", className)}
        {...props}
      />
    </div>
  );
}
