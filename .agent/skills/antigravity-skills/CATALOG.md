# 🎬 AURORA EFFECTS CATALOG

## Referência Visual Rápida

---

## EFEITOS POR CATEGORIA

### 🕳️ BLACK HOLE FAMILY

```
┌─────────────────────────────────────────────────────────────┐
│  BLACK HOLE REVEAL                                          │
│                                                              │
│  Scroll: 0%        25%         50%         100%             │
│                                                              │
│  ████████████   ████████████   ████    ████                 │
│  ████████████   ████    ████   ██        ██                 │
│  ████████████   ████    ████   ██        ██   →   (vazio)   │
│  ████████████   ████    ████   ██        ██                 │
│  ████████████   ████████████   ████    ████                 │
│                                                              │
│  Hero fixo é "sugado" revelando conteúdo abaixo             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  BLACK HOLE SPIRAL                                          │
│                                                              │
│  ████████████   ███╲  ╱███   ██╲      ╱██                   │
│  ████████████     ████████      ╲    ╱                      │
│  ████████████   ███╱  ╲███   ██╱      ╲██   →   (vazio)     │
│                                                              │
│  Conteúdo GIRA enquanto é sugado (720° total)               │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  BLACK HOLE SHATTER                                         │
│                                                              │
│  ████████████   ████  ██████   ██    ████                   │
│  ████████████   ██      ████   █        ██                  │
│  ████████████   ████  ██  ██     ██  ██      →   (vazio)    │
│  ████████████   ██████    ██   ██    ██                     │
│                                                              │
│  Múltiplos buracos = efeito vidro quebrado                  │
└─────────────────────────────────────────────────────────────┘
```

### 🌀 SPIRAL VORTEX MENU

```
┌─────────────────────────────────────────────────────────────┐
│  FECHADO          →          ABERTO                         │
│                                                              │
│  [≡ MENU]                        ∙ Contact                  │
│                                ∙ Services                   │
│                              ◉ Work                         │
│                           ∙ About                           │
│                        ∙ Home                               │
│                                                              │
│  Items orbitam singularidade central                        │
│  Scroll/Wheel rotaciona a espiral                           │
└─────────────────────────────────────────────────────────────┘
```

### 📐 PARALLAX DEPTH STACK

```
┌─────────────────────────────────────────────────────────────┐
│  CAMADAS (velocity)                                         │
│                                                              │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ← Layer 0: BG (0.2)         │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓        ← Layer 1: Grid (0.3)        │
│      ◇         ○              ← Layer 2: Decorations (0.5) │
│         [ CONTENT ]           ← Layer 3: Content (0.6)     │
│  ──────────────────           ← Layer 4: Foreground (0.9)  │
│                                                              │
│  Cada camada move em velocidade diferente                   │
│  Lento = mais movimento, Rápido = menos movimento           │
└─────────────────────────────────────────────────────────────┘
```

### 🧲 MAGNETIC INTERACTIONS

```
┌─────────────────────────────────────────────────────────────┐
│  CURSOR CUSTOM                                              │
│                                                              │
│  Normal:  ○·                                                │
│  Hover:   ◯  (ring expande 1.5x, gold)                     │
│  Click:   ● (dot shrinks, ring shrinks)                    │
│                                                              │
│  ELEMENTOS MAGNÉTICOS                                       │
│                                                              │
│  Cursor longe:  [ BUTTON ]                                  │
│  Cursor perto:  [  BUTTON→]  (elemento "puxa" pro cursor)  │
│  Mouse leave:   [ BUTTON ]  (elastic bounce back)          │
│                                                              │
│  data-magnetic="0.3" → força do efeito (0.1 - 0.5)         │
└─────────────────────────────────────────────────────────────┘
```

---

## COMBINAÇÕES RECOMENDADAS

### 🏦 SWISS BANKING SITE

```
Hero:        Black Hole Reveal
Scroll:      Lenis smooth (1.4s)
Parallax:    Depth Stack (3 layers)
Buttons:     Magnetic (0.3)
Transitions: Fade + slide
Timing:      Slow (1s+)
Easing:      power2.out
```

### 🚀 TECH/STARTUP SITE

```
Hero:        Black Hole Shatter
Menu:        Spiral Vortex
Cursor:      Custom + Trail
Buttons:     Magnetic (0.4)
Timing:      Fast (0.3-0.5s)
Easing:      power4.out
```

### 🌿 ORGANIC/LUXURY SITE

```
Hero:        Parallax Depth Stack
Scroll:      Lenis smooth (1.8s)
Elements:    Floating animation
Buttons:     Magnetic subtle (0.2)
Timing:      Fluid (0.8-1.2s)
Easing:      elastic.out
```

---

## DEPENDÊNCIAS POR EFEITO

| Efeito | GSAP | ScrollTrigger | Lenis |
|--------|:----:|:-------------:|:-----:|
| Black Hole | ✅ | ✅ | ✅ |
| Spiral Menu | ✅ | ❌ | ❌ |
| Parallax | ✅ | ✅ | ✅ |
| Magnetic | ✅ | ❌ | ❌ |
| Floating | ✅ | ❌ | ❌ |
| Split Text | ✅ | ✅ | ❌ |

---

## TIMING PRESETS

```javascript
// SLOW (Swiss Banking)
const TIMING_SLOW = {
    duration: 1.2,
    stagger: 0.15,
    ease: 'power2.out',
    scrub: 1.5,
};

// MEDIUM (Default)
const TIMING_MEDIUM = {
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out',
    scrub: 1,
};

// FAST (Tech)
const TIMING_FAST = {
    duration: 0.4,
    stagger: 0.05,
    ease: 'power4.out',
    scrub: 0.5,
};

// ELASTIC (Organic)
const TIMING_ELASTIC = {
    duration: 1,
    stagger: 0.12,
    ease: 'elastic.out(1, 0.5)',
    scrub: 1,
};
```

---

## EASING GUIDE

```
power1.out   ──────────▸  Suave, natural
power2.out   ─────────▸   Padrão, profissional
power3.out   ────────▸    Dramático
power4.out   ───────▸     Muito dramático

elastic.out  ~~~~────▸    Bounce orgânico
back.out     ◀───────▸    Overshoot (ultrapassa e volta)
expo.out     ━━━━━━━▸     Luxuoso, premium

none         ─────────    Linear (parallax, scrub)
```

---

## MOBILE CONSIDERATIONS

```javascript
// Detectar mobile
const isMobile = window.innerWidth < 768;

// Reduzir animações
if (isMobile) {
    config.duration *= 0.7;
    config.parallaxIntensity *= 0.5;
    // Desabilitar cursor custom
    // Simplificar Black Hole para fade
}

// Respeitar reduced-motion
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.globalTimeline.timeScale(0);
}
```

---

*Aurora Effects Catalog — Quick Reference*
