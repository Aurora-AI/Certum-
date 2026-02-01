'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SequenceCanvasProps {
  frameCount: number; // Ex: 120 frames
  folderPath: string; // Ex: '/assets/sequence/explosion'
  fileNamePrefix: string; // Ex: 'frame_'
  extension?: string; // Ex: 'webp' ou 'jpg'
}

export function SequenceCanvas({ 
  frameCount, 
  folderPath, 
  fileNamePrefix,
  extension = 'webp' 
}: SequenceCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // 1. PRELOADER (Crítico: Carrega tudo na memória antes de permitir scroll)
  useEffect(() => {
    let loadedCount = 0;
    const imgs: HTMLImageElement[] = [];

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      // Formata número com zeros à esquerda: frame_001.webp
      const paddedIndex = i.toString().padStart(4, '0');
      img.src = `${folderPath}/${fileNamePrefix}${paddedIndex}.${extension}`;
      
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setIsLoaded(true);
        }
      };
      imgs.push(img);
    }
    setImages(imgs);
  }, [frameCount, folderPath, fileNamePrefix, extension]);

  // 2. RENDER LOOP & SCROLLTRIGGER
  useEffect(() => {
    if (!isLoaded || !canvasRef.current || images.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Ajusta tamanho do canvas para Alta DPI
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Objeto para controlar o frame atual via GSAP
    const sequence = { frame: 0 };

    // Desenha o primeiro frame imediatamente
    const render = () => {
      const img = images[Math.round(sequence.frame)];
      if (img) {
        // Lógica de "Cover": Mantém a proporção da imagem preenchendo a tela
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
          img, 
          0, 0, img.width, img.height,
          centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
        );
      }
    };

    // Anima o índice do frame baseado no Scroll
    ScrollTrigger.create({
      trigger: "#sequence-container", // Container pai
      start: "top top",
      end: "bottom bottom", // Duração definida pela altura do pai (ex: 300vh)
      scrub: 0.5, // Suavização extra
      onUpdate: (self) => {
        // Mapeia o progresso (0 a 1) para o número de frames (0 a 119)
        sequence.frame = self.progress * (frameCount - 1);
        requestAnimationFrame(render);
      }
    });

    render(); // Draw initial

    // Resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      requestAnimationFrame(render);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

  }, [isLoaded, images, frameCount]);

  if (!isLoaded) return <div className="fixed inset-0 flex items-center justify-center bg-black text-[#00F0FF] font-mono">LOADING SEQUENCE...</div>;

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none"
    />
  );
}
