"use client";

import { useEffect, useRef, useState } from "react";

interface HeroSectionProps {
  mode: "dream" | "chat";
  onActivate: (prompt?: string) => void;
}

export function HeroSection({ mode: _mode, onActivate }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const targetDurationSeconds = 7;
  const [backgroundTone, setBackgroundTone] = useState("rgb(246, 246, 246)");

  const syncPlaybackRate = () => {
    if (!videoRef.current) return;
    const { duration } = videoRef.current;
    if (!Number.isFinite(duration) || duration <= 0) return;
    videoRef.current.playbackRate = duration / targetDurationSeconds;
  };

  const syncBackgroundTone = () => {
    if (!videoRef.current) return;
    const { videoWidth, videoHeight, readyState } = videoRef.current;
    if (readyState < 2 || videoWidth <= 0 || videoHeight <= 0) return;

    const canvas = document.createElement("canvas");
    canvas.width = videoWidth;
    canvas.height = videoHeight;

    const context = canvas.getContext("2d", { willReadFrequently: true });
    if (!context) return;

    context.drawImage(videoRef.current, 0, 0, videoWidth, videoHeight);

    const marginX = Math.max(12, Math.floor(videoWidth * 0.03));
    const marginY = Math.max(12, Math.floor(videoHeight * 0.03));
    const points = [
      [marginX, marginY],
      [Math.floor(videoWidth * 0.25), marginY],
      [Math.floor(videoWidth * 0.5), marginY],
      [Math.floor(videoWidth * 0.75), marginY],
      [videoWidth - marginX, marginY],
    ];

    let red = 0;
    let green = 0;
    let blue = 0;
    let count = 0;

    for (const [x, y] of points) {
      const data = context.getImageData(x, y, 1, 1).data;
      if (data[3] === 0) continue;
      red += data[0];
      green += data[1];
      blue += data[2];
      count += 1;
    }

    if (count === 0) return;

    setBackgroundTone(
      `rgb(${Math.round(red / count)}, ${Math.round(green / count)}, ${Math.round(blue / count)})`
    );
  };

  useEffect(() => {
    syncPlaybackRate();
  }, []);

  const handleMetadata = () => {
    syncPlaybackRate();
  };

  const handleLoadedData = () => {
    setBackgroundTone("rgb(246, 246, 246)");
    syncBackgroundTone();
    window.setTimeout(syncBackgroundTone, 120);
  };

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden text-[#111111]"
      style={{ backgroundColor: backgroundTone }}
    >
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <video
          ref={videoRef}
          className="h-[70%] w-[70%] object-contain"
          src="/assets/Hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedMetadata={handleMetadata}
          onLoadedData={handleLoadedData}
        />
      </div>

      <div className="relative z-20 pointer-events-none flex min-h-screen">
        <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-between px-6 py-[9vh] md:px-10">
          <div className="max-w-3xl">
            <p className="hero-text-entry grain-text-soft text-[10px] uppercase tracking-[0.28em]">
              Prime Private Architecture
            </p>
            <h1 className="hero-text-entry hero-text-entry-delay-1 grain-text mt-4 font-display text-[clamp(2.4rem,5.8vw,6.8rem)] leading-[0.92] uppercase tracking-tight">
              White Field
            </h1>
            <p className="hero-text-entry hero-text-entry-delay-2 grain-text-soft mt-4 max-w-xl text-sm leading-relaxed md:text-base">
              Campo visual em camada frontal com tipografia granular sobre vídeo centralizado.
              Loop ajustado para 7 segundos por ciclo.
            </p>
          </div>

          <div className="pointer-events-auto hero-text-entry hero-text-entry-delay-3 mt-auto flex flex-wrap gap-3">
            <button
              onClick={() => onActivate("Quero simular um plano para Mercedes.")}
              className="px-6 py-3 text-[11px] uppercase tracking-[0.2em] border border-black/20 bg-white/70 text-black hover:border-black transition-colors"
            >
              Simular Mercedes
            </button>
            <button
              onClick={() => onActivate("Quero simular uma mansão padrão moderno.")}
              className="px-6 py-3 text-[11px] uppercase tracking-[0.2em] border border-black/20 bg-white/70 text-black hover:border-black transition-colors"
            >
              Simular Mansão
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
