// ============================================================
// HERO EVENT HORIZON - SPIRAL VORTEX UPGRADE
// ============================================================
// Este arquivo contém as modificações necessárias para transformar
// o black hole reveal básico em uma versão Spiral Vortex mais épica.

// INSTRUÇÕES: Aplique estas mudanças no HeroEventHorizon.tsx existente

// ============================================================
// 1. ADICIONAR ESTAS VARIÁVEIS NO INÍCIO DO COMPONENTE
// ============================================================

const SPIRAL_CONFIG = {
  // Rotação máxima do conteúdo quando sugado
  maxRotation: 180,
  // Escala mínima antes de desaparecer
  minScale: 0.5,
  // Ativar efeito de twist 3D
  enable3DTwist: true,
  // Rotação 3D máxima
  maxRotateX: 15,
  // Variação de opacidade
  fadeSpeed: 1.5,
};

// ============================================================
// 2. SUBSTITUIR O onUpdate DO ScrollTrigger (linhas ~67-90)
// ============================================================

/*
CÓDIGO ORIGINAL:
onUpdate: (self) => {
  const progress = self.progress;
  const easedProgress = Math.pow(progress, 2); 
  const holeSize = easedProgress * 150; 
  const edgeEnd = holeSize + (5 + progress * 10); 

  if (heroLayerRef.current) {
    const mask = `radial-gradient(circle at 50% 50%, transparent ${holeSize}%, black ${edgeEnd}%)`;
    heroLayerRef.current.style.maskImage = mask;
    heroLayerRef.current.style.webkitMaskImage = mask;
    heroLayerRef.current.style.pointerEvents = progress > 0.8 ? "none" : "auto";
  }

  if (contentRef.current) {
    const scale = 1 + (easedProgress * 0.2);
    const opacity = 1 - (easedProgress * 1.5);
    contentRef.current.style.transform = `scale(${scale})`;
    contentRef.current.style.opacity = Math.max(0, opacity).toString();
  }
}

SUBSTITUIR POR:
*/

const spiralOnUpdate = (self: ScrollTrigger) => {
  const progress = self.progress;
  const easedProgress = Math.pow(progress, 2); // easeInQuad
  
  // ═══════════════════════════════════════════════════════════
  // BLACK HOLE MASK (igual ao original)
  // ═══════════════════════════════════════════════════════════
  const holeSize = easedProgress * 150;
  const edgeEnd = holeSize + (5 + progress * 10);

  if (heroLayerRef.current) {
    const mask = `radial-gradient(circle at 50% 50%, transparent ${holeSize}%, black ${edgeEnd}%)`;
    heroLayerRef.current.style.maskImage = mask;
    heroLayerRef.current.style.webkitMaskImage = mask;
    heroLayerRef.current.style.pointerEvents = progress > 0.8 ? "none" : "auto";
  }

  // ═══════════════════════════════════════════════════════════
  // SPIRAL VORTEX CONTENT TRANSFORMATION (NOVO!)
  // ═══════════════════════════════════════════════════════════
  if (contentRef.current) {
    // Escala: começa em 1, vai até minScale
    const scale = 1 - (easedProgress * (1 - SPIRAL_CONFIG.minScale));
    
    // Rotação: começa em 0, gira até maxRotation
    const rotation = easedProgress * SPIRAL_CONFIG.maxRotation;
    
    // Opacity: fade out mais rápido que a escala
    const opacity = Math.max(0, 1 - (easedProgress * SPIRAL_CONFIG.fadeSpeed));
    
    // Transform base
    let transform = `scale(${scale}) rotate(${rotation}deg)`;
    
    // Adicionar 3D twist se habilitado
    if (SPIRAL_CONFIG.enable3DTwist) {
      const rotateX = easedProgress * SPIRAL_CONFIG.maxRotateX;
      const translateZ = easedProgress * -100; // Afunda no espaço
      transform = `perspective(1000px) ${transform} rotateX(${rotateX}deg) translateZ(${translateZ}px)`;
    }
    
    contentRef.current.style.transform = transform;
    contentRef.current.style.opacity = opacity.toString();
  }

  // ═══════════════════════════════════════════════════════════
  // RINGS REAGEM AO SCROLL (NOVO!)
  // ═══════════════════════════════════════════════════════════
  if (ringsRef.current) {
    const ringsScale = 1 + (easedProgress * 2); // Expandem
    const ringsOpacity = 0.4 - (easedProgress * 0.4); // Desvanecem
    const ringsRotation = progress * 90; // Rotação suave
    
    ringsRef.current.style.transform = `translate(-50%, -50%) scale(${ringsScale}) rotate(${ringsRotation}deg)`;
    ringsRef.current.style.opacity = Math.max(0, ringsOpacity).toString();
  }

  // ═══════════════════════════════════════════════════════════
  // GLOW INTENSIFICA (NOVO!)
  // ═══════════════════════════════════════════════════════════
  if (glowRef.current) {
    // Glow pulsa e intensifica antes de ser sugado
    const glowIntensity = Math.sin(progress * Math.PI); // Pico no meio
    const glowScale = 1 + (glowIntensity * 0.3);
    
    glowRef.current.style.transform = `translate(-50%, -50%) scale(${glowScale})`;
    glowRef.current.style.opacity = (0.15 + (glowIntensity * 0.2)).toString();
  }
};

// ============================================================
// 3. CSS ADICIONAL PARA SUAVIZAR TRANSFORMS
// ============================================================

const additionalStyles = `
  /* Adicionar ao componente ou globals.css */
  
  .hero-content {
    transform-style: preserve-3d;
    transform-origin: center center;
    will-change: transform, opacity;
    backface-visibility: hidden;
  }
  
  .hero-rings {
    will-change: transform, opacity;
  }
  
  /* Suavizar a transição */
  .hero-layer * {
    transition: filter 0.3s ease-out;
  }
  
  /* Blur sutil no conteúdo quando sendo sugado */
  .hero-content.being-absorbed {
    filter: blur(2px);
  }
`;

// ============================================================
// 4. VARIAÇÕES ALTERNATIVAS (Escolha uma)
// ============================================================

// VARIAÇÃO A: Implode & Twist (mais dramático)
const implodeTwistConfig = {
  maxRotation: 360, // Gira completamente
  minScale: 0.1,
  enable3DTwist: true,
  maxRotateX: 45, // Twist mais agressivo
  fadeSpeed: 1.2,
};

// VARIAÇÃO B: Gravitational Pull (mais suave)
const gravitationalConfig = {
  maxRotation: 90, // Meia rotação
  minScale: 0.7,
  enable3DTwist: false,
  maxRotateX: 0,
  fadeSpeed: 2.0, // Fade mais rápido que escala
};

// VARIAÇÃO C: Cinematic Slow (para impacto máximo)
const cinematicConfig = {
  maxRotation: 45, // Rotação sutil
  minScale: 0.8,
  enable3DTwist: true,
  maxRotateX: 8, // Twist muito sutil
  fadeSpeed: 1.0, // Sincronizado
};

// ============================================================
// 5. EFEITO ADICIONAL: PARTÍCULAS SENDO SUGADAS
// ============================================================

/*
Para um efeito ainda mais impressionante, adicione partículas
que são puxadas para o centro junto com o scroll.

Adicionar após a seção de rings no JSX:
*/

const ParticleVortex = ({ progress }: { progress: number }) => {
  const particleCount = 20;
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: particleCount }).map((_, i) => {
        const angle = (i / particleCount) * 360;
        const baseRadius = 200 + Math.random() * 300;
        const currentRadius = baseRadius * (1 - progress);
        const rotation = angle + (progress * 180);
        
        const x = Math.cos((rotation * Math.PI) / 180) * currentRadius;
        const y = Math.sin((rotation * Math.PI) / 180) * currentRadius;
        const opacity = 1 - progress;
        const scale = 1 - (progress * 0.5);
        
        return (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-primary/60"
            style={{
              transform: `translate(-50%, -50%) translate(${x}px, ${y}px) scale(${scale})`,
              opacity,
              boxShadow: `0 0 ${4 + progress * 4}px rgba(212, 175, 53, 0.5)`,
            }}
          />
        );
      })}
    </div>
  );
};

// ============================================================
// 6. EXEMPLO COMPLETO DE INTEGRAÇÃO
// ============================================================

/*
No ScrollTrigger.create, substituir:

ScrollTrigger.create({
  trigger: containerRef.current, 
  start: "top top",
  end: "bottom top",
  scrub: 1, 
  onUpdate: spiralOnUpdate  // ← Use a nova função
});

E no JSX, adicionar o ParticleVortex se quiser:

<div ref={heroLayerRef} ...>
  {/* Existing content *//*}
  
  {/* Adicionar partículas *//*}
  <ParticleVortex progress={scrollProgress} />
</div>
*/

export {
  SPIRAL_CONFIG,
  spiralOnUpdate,
  implodeTwistConfig,
  gravitationalConfig,
  cinematicConfig,
  ParticleVortex,
};
