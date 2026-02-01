# 🎬 EXEMPLO PRÁTICO: Event Horizon Cinematografado

Este arquivo demonstra a transformação CORRETA do código Stitch.

## ANÁLISE DO CÓDIGO ORIGINAL

### Elementos Identificados (Event Horizon - Sovereign State)

```
HEADER
├── Logo + Brand text
├── Navigation links
└── Connect Vault button

HERO (main)
├── Background layers
│   ├── Grid pattern
│   ├── Radial gradient
│   └── Gold gradient blur
├── Accretion disk (visual orb effect)
├── Photon ring (rotating ring)
├── Content
│   ├── Badge "Event Horizon Reached"
│   ├── Title "SOVEREIGNTY IS A CHOICE"
│   ├── Subtitle
│   └── CTA "Initialize"
└── Side panels (Market Gravity, Singularity Point)

FOOTER
├── Copyright
├── Links
└── Status indicator
```

---

## SCRIPT DE CINEMATOGRAFIA

Cole este script ANTES do `</body>` do código original:

```html
<!-- CINEMATOGRAPHER RUNTIME v1.0 -->
<!-- NÃO MODIFICA HTML - APENAS ADICIONA VIDA -->

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script src="https://unpkg.com/lenis@1.1.13/dist/lenis.min.js"></script>

<script>
(function() {
  'use strict';
  
  // ═══════════════════════════════════════════════════════════
  // CAMADA 0: SMOOTH SCROLL FOUNDATION
  // ═══════════════════════════════════════════════════════════
  
  const lenis = new Lenis({
    duration: 1.4,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 0.8,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Sync GSAP com Lenis
  gsap.registerPlugin(ScrollTrigger);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  // ═══════════════════════════════════════════════════════════
  // CAMADA 1: HERO ENTRANCE SEQUENCE
  // ═══════════════════════════════════════════════════════════
  
  const heroTL = gsap.timeline({
    defaults: { 
      ease: 'power4.out',
      duration: 1.2 
    }
  });

  // Badge entrada
  heroTL.from('.inline-flex.items-center.gap-3', {
    y: -30,
    opacity: 0,
    duration: 0.8,
  });

  // Título principal - "SOVEREIGNTY"
  heroTL.from('h1 span:first-child', {
    y: 120,
    opacity: 0,
    skewY: 7,
    duration: 1.5,
  }, '-=0.4');

  // Subtítulo - "IS A CHOICE"
  heroTL.from('h1 span:last-child', {
    y: 80,
    opacity: 0,
    duration: 1.2,
  }, '-=0.8');

  // Descrição
  heroTL.from('.max-w-xl.mx-auto', {
    y: 40,
    opacity: 0,
    duration: 0.8,
  }, '-=0.6');

  // CTA Button
  heroTL.from('button.relative.group', {
    y: 30,
    opacity: 0,
    scale: 0.9,
    duration: 0.8,
  }, '-=0.4');

  // ═══════════════════════════════════════════════════════════
  // CAMADA 2: ORB & RING ANIMATIONS
  // ═══════════════════════════════════════════════════════════
  
  // Accretion Disk - Scale entrada dramática
  gsap.from('.accretion-disk', {
    scale: 0,
    opacity: 0,
    duration: 2,
    ease: 'elastic.out(1, 0.5)',
    delay: 0.3,
  });

  // Photon Ring - já tem animação CSS, mas adicionar glow pulse
  gsap.to('.photon-ring', {
    opacity: 0.6,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });

  // Parallax no orb durante scroll
  gsap.to('.accretion-disk', {
    yPercent: -30,
    scrollTrigger: {
      trigger: 'main',
      start: 'top top',
      end: 'bottom top',
      scrub: 1.5,
    }
  });

  gsap.to('.photon-ring', {
    yPercent: -50,
    scrollTrigger: {
      trigger: 'main',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    }
  });

  // ═══════════════════════════════════════════════════════════
  // CAMADA 3: SIDE PANELS REVEAL
  // ═══════════════════════════════════════════════════════════
  
  // Left panel (Market Gravity)
  gsap.from('.absolute.bottom-16.left-12', {
    x: -100,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out',
    delay: 1.5,
  });

  // Right panel (Singularity Point)
  gsap.from('.absolute.bottom-16.right-12', {
    x: 100,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out',
    delay: 1.7,
  });

  // Progress bar animation
  gsap.from('.h-px.w-full.bg-white\\/10 > div', {
    width: 0,
    duration: 2,
    ease: 'power2.inOut',
    delay: 2,
  });

  // ═══════════════════════════════════════════════════════════
  // CAMADA 4: MICROINTERAÇÕES
  // ═══════════════════════════════════════════════════════════
  
  // Magnetic CTA Button
  const ctaButton = document.querySelector('button.relative.group');
  if (ctaButton) {
    ctaButton.addEventListener('mousemove', (e) => {
      const rect = ctaButton.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      gsap.to(ctaButton, {
        x: x * 0.2,
        y: y * 0.2,
        duration: 0.4,
        ease: 'power2.out'
      });
    });

    ctaButton.addEventListener('mouseleave', () => {
      gsap.to(ctaButton, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: 'elastic.out(1, 0.3)'
      });
    });
  }

  // Header nav links hover
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mouseenter', () => {
      gsap.to(link, {
        y: -2,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
    link.addEventListener('mouseleave', () => {
      gsap.to(link, {
        y: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });

  // ═══════════════════════════════════════════════════════════
  // CAMADA 5: BACKGROUND PARALLAX
  // ═══════════════════════════════════════════════════════════
  
  // Grid pattern parallax
  gsap.to('.bg-grid-pattern', {
    backgroundPosition: '0 100px',
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 2,
    }
  });

  // Gold gradient blur parallax
  gsap.to('.from-gold\\/5', {
    y: 100,
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1,
    }
  });

  // ═══════════════════════════════════════════════════════════
  // CAMADA 6: SCROLL PROGRESS INDICATOR
  // ═══════════════════════════════════════════════════════════
  
  // Criar indicador de progresso (não modifica HTML existente)
  const progressBar = document.createElement('div');
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 2px;
    background: linear-gradient(90deg, #D4AF37, #F8F1D2);
    z-index: 9999;
    box-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
  `;
  document.body.appendChild(progressBar);

  gsap.to(progressBar, {
    width: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.3,
    }
  });

  // ═══════════════════════════════════════════════════════════
  // CAMADA 7: TEXT GLOW ANIMATION
  // ═══════════════════════════════════════════════════════════
  
  // Title glow pulse
  gsap.to('.text-glow-gold', {
    textShadow: '0 0 60px rgba(212, 175, 55, 0.8)',
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });

  // Status indicator pulse (mais pronunciado)
  gsap.to('.animate-pulse', {
    scale: 1.3,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });

  // ═══════════════════════════════════════════════════════════
  // MOBILE OPTIMIZATION
  // ═══════════════════════════════════════════════════════════
  
  if (window.innerWidth < 768) {
    // Desabilitar parallax pesado em mobile
    ScrollTrigger.getAll().forEach(st => {
      if (st.vars.scrub) {
        st.disable();
      }
    });
    
    // Manter apenas animações de entrada
    lenis.destroy();
  }

  console.log('🎬 Cinematographer Runtime loaded - Event Horizon');
})();
</script>
```

---

## CÓDIGO FINAL COMPLETO

O código final é simplesmente:

```html
[TODO O HTML ORIGINAL DO STITCH - INTOCADO]

<!-- Cole antes do </body> -->
[SCRIPT ACIMA]
```

**Resultado:**
- ✅ Design preservado 100%
- ✅ Smooth scroll adicionado
- ✅ Animações de entrada cinematográficas
- ✅ Parallax em múltiplas camadas
- ✅ Microinterações magnéticas
- ✅ Progress bar de scroll
- ✅ Otimização mobile
