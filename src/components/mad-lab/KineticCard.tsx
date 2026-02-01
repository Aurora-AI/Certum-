'use client';

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface KineticCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number; // How strong the tilt is (Default: 20)
}

export function KineticCard({ children, className = "", intensity = 20 }: KineticCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  // 1. MOUSE TRACKING (Physics Input)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // 2. INERTIA (Disney: Slow In / Slow Out)
  // Spring smooths the movement. Without it, the tilt is robotic.
  const mouseX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.5 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.5 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position relative to card center (-0.5 to 0.5)
    const mouseXRelative = (e.clientX - rect.left) / width - 0.5;
    const mouseYRelative = (e.clientY - rect.top) / height - 0.5;

    // Apply intensity (Invert Y for natural tilt)
    x.set(mouseYRelative * intensity * -1); 
    y.set(mouseXRelative * intensity);
  }

  function handleMouseLeave() {
    // Return to center smoothly (Elastic Snapback)
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: mouseX,
        rotateY: mouseY,
        transformStyle: "preserve-3d", // Enables real depth on children
      }}
      className={`relative will-change-transform ${className}`}
    >
      {/* SPECULAR HIGHLIGHT */}
      {/* A shine that moves opposite to tilt, simulating glass/metal surface */}
      <motion.div 
        style={{
            x: useTransform(y, [-intensity, intensity], [20, -20]),
            y: useTransform(x, [-intensity, intensity], [20, -20]),
            opacity: useTransform(x, (current) => Math.abs(current) / intensity * 0.5) // Glows more at edges
        }}
        className="absolute inset-0 z-50 bg-linear-to-tr from-white/20 to-transparent pointer-events-none mix-blend-overlay rounded-sm"
      />
      
      {/* CONTENT (With Z elevation) */}
      <div style={{ transform: "translateZ(20px)" }} className="h-full w-full">
        {children}
      </div>

    </motion.div>
  );
}
