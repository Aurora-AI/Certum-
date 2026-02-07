"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";

interface TransitionPortalProps {
  isExiting: boolean;
  onComplete: () => void;
  targetUrl: string;
}

export const TransitionPortal = ({ isExiting, onComplete, targetUrl }: TransitionPortalProps) => {
  const portalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isExiting && portalRef.current) {
      const tl = gsap.timeline({
        onComplete: () => {
             router.push(targetUrl);
             // Short delay then onComplete to cleanup if component stays mounted
             setTimeout(onComplete, 500);
        }
      });

      // FX-21 Portal Transition
      // We assume a 'shutter' or 'iris' close, or a massive zoom in.
      // Let's do a "Void Consumes All" effect (Scale up a black circle)
      
      tl.set(portalRef.current, { display: "block" });
      
      tl.to(".portal-circle", {
        scale: 50,
        duration: 1.2,
        ease: "power2.inOut"
      });
      
      tl.to(".portal-content", {
        opacity: 0,
        scale: 1.1,
        duration: 0.8,
        ease: "power2.in"
      }, 0);
    }
  }, [isExiting, router, targetUrl, onComplete]);

  if (!isExiting) return null;

  return (
    <div ref={portalRef} className="fixed inset-0 z-[10000] pointer-events-none display-none flex items-center justify-center overflow-hidden">
        <div className="portal-circle w-10 h-10 bg-[#BFB38F] rounded-full" />
    </div>
  );
};
