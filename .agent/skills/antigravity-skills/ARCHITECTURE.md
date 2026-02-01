# Antigravity Architecture

A arquitetura do Antigravity segue o modelo mental do Remotion: **Compositions → Scenes → Components → Animations**.

---

## Hierarquia de Composição

```
┌─────────────────────────────────────────────────────────────────┐
│                        WEBSITE (Composition)                     │
│                                                                  │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │                     SECTION (Scene)                        │ │
│  │                                                            │ │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐       │ │
│  │  │  COMPONENT  │  │  COMPONENT  │  │  COMPONENT  │       │ │
│  │  │             │  │             │  │             │       │ │
│  │  │ ┌─────────┐ │  │ ┌─────────┐ │  │ ┌─────────┐ │       │ │
│  │  │ │ANIMATION│ │  │ │ANIMATION│ │  │ │ANIMATION│ │       │ │
│  │  │ └─────────┘ │  │ └─────────┘ │  │ └─────────┘ │       │ │
│  │  └─────────────┘  └─────────────┘  └─────────────┘       │ │
│  │                                                            │ │
│  │  TRANSITION IN ──────────────────────► TRANSITION OUT     │ │
│  └────────────────────────────────────────────────────────────┘ │
│                              │                                   │
│                              ▼                                   │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │                   NEXT SECTION (Scene)                     │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Estrutura de Pastas

```
project/
├── public/
│   ├── fonts/
│   │   ├── display-font.woff2
│   │   └── body-font.woff2
│   ├── images/
│   │   ├── hero-bg.webp
│   │   ├── logo.svg
│   │   └── ...
│   ├── videos/
│   │   └── showreel.mp4
│   └── textures/
│       ├── grain.png
│       └── noise.svg
│
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   └── ...
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Container.jsx
│   │   └── animated/
│   │       ├── SplitText.jsx
│   │       ├── RevealImage.jsx
│   │       ├── ParallaxLayer.jsx
│   │       └── MagneticButton.jsx
│   │
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── About.jsx
│   │   ├── Showcase.jsx
│   │   └── Contact.jsx
│   │
│   ├── animations/
│   │   ├── gsap-config.js
│   │   ├── scroll-triggers.js
│   │   ├── transitions.js
│   │   └── effects.js
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   ├── variables.css
│   │   ├── typography.css
│   │   └── animations.css
│   │
│   ├── hooks/
│   │   ├── useScrollTrigger.js
│   │   ├── useLenis.js
│   │   └── useAnimateOnView.js
│   │
│   └── pages/
│       └── index.jsx (composes all sections)
│
├── package.json
└── README.md
```

---

## Anatomia de uma Section (Scene)

```jsx
// sections/Hero.jsx

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Components
import { SplitText } from '@/components/animated/SplitText';
import { Button } from '@/components/ui/Button';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const sublineRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for load animation
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' }
      });

      // Choreographed entrance
      tl.from(headlineRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2
      })
      .from(sublineRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8
      }, '-=0.6')
      .from(ctaRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6
      }, '-=0.4');

      // Scroll-triggered exit
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          gsap.to(sectionRef.current, {
            opacity: 1 - self.progress,
            y: self.progress * -100
          });
        }
      });

    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <section ref={sectionRef} className="hero">
      <div className="hero__content">
        <h1 ref={headlineRef} className="hero__headline">
          <SplitText>Premium Experiences</SplitText>
        </h1>
        
        <p ref={sublineRef} className="hero__subline">
          Crafted with precision and purpose
        </p>
        
        <div ref={ctaRef}>
          <Button variant="primary">Explore</Button>
        </div>
      </div>
    </section>
  );
}
```

---

## Composing Sections (The Main Page)

```jsx
// pages/index.jsx

import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Sections (Scenes)
import { Hero } from '@/sections/Hero';
import { Features } from '@/sections/Features';
import { Showcase } from '@/sections/Showcase';
import { About } from '@/sections/About';
import { Contact } from '@/sections/Contact';

// Layout
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Initialize smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });

    // Connect Lenis to GSAP
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <>
      <Header />
      
      <main>
        {/* Each section is a "scene" with its own animations */}
        <Hero />
        <Features />
        <Showcase />
        <About />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
}
```

---

## Animation Layers

Each section can have multiple animation layers:

```
SECTION
│
├── LAYER 1: Background
│   └── Parallax movement, color shifts, video playback
│
├── LAYER 2: Decorative
│   └── Floating elements, particles, grain overlay
│
├── LAYER 3: Content
│   └── Text reveals, image masks, card animations
│
└── LAYER 4: Interactive
    └── Hover effects, cursor reactions, micro-interactions
```

### Example Multi-Layer Section

```jsx
export function Features() {
  return (
    <section className="features">
      {/* Layer 1: Background */}
      <div className="features__bg">
        <GradientMesh />
      </div>

      {/* Layer 2: Decorative */}
      <div className="features__decoration">
        <FloatingShapes />
        <GrainOverlay />
      </div>

      {/* Layer 3: Content */}
      <div className="features__content">
        <SectionHeading>Features</SectionHeading>
        <FeatureGrid>
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </FeatureGrid>
      </div>

      {/* Layer 4: Interactive */}
      <CustomCursor />
    </section>
  );
}
```

---

## Transition Types Between Sections

### 1. Fade Crossfade
```javascript
// Section A fades out, Section B fades in
ScrollTrigger.create({
  trigger: '.section-a',
  start: 'bottom bottom',
  end: 'bottom top',
  scrub: true,
  onUpdate: (self) => {
    gsap.to('.section-a', { opacity: 1 - self.progress });
    gsap.to('.section-b', { opacity: self.progress });
  }
});
```

### 2. Horizontal Wipe
```javascript
// Black overlay wipes across
gsap.to('.wipe-overlay', {
  xPercent: -100,
  ease: 'power2.inOut',
  scrollTrigger: {
    trigger: '.section-a',
    start: 'bottom 80%',
    end: 'bottom 20%',
    scrub: 1
  }
});
```

### 3. Scale Zoom
```javascript
// Current section scales up and fades
gsap.to('.section-a', {
  scale: 1.1,
  opacity: 0,
  scrollTrigger: {
    trigger: '.section-a',
    start: 'bottom bottom',
    end: 'bottom top',
    scrub: 1
  }
});
```

### 4. Parallax Push
```javascript
// Sections overlap with parallax
gsap.to('.section-a', {
  yPercent: -30,
  scrollTrigger: {
    trigger: '.section-b',
    start: 'top bottom',
    end: 'top top',
    scrub: 1
  }
});
```

---

## Scroll Timeline Concept

Think of the entire page as a video timeline:

```
SCROLL POSITION (Timeline)
│
0% ─────────────────────────────────────────────────────── 100%
│                                                           │
│  ┌─────────┐                                              │
│  │  HERO   │ Load anim → Scroll exit                     │
│  └─────────┘                                              │
│            ┌───────────────┐                              │
│            │   FEATURES    │ Enter → Content → Exit      │
│            └───────────────┘                              │
│                        ┌─────────────┐                    │
│                        │  SHOWCASE   │ Enter → Exit      │
│                        └─────────────┘                    │
│                                    ┌─────────────────┐    │
│                                    │     ABOUT       │    │
│                                    └─────────────────┘    │
│                                                ┌─────┐    │
│                                                │ CTA │    │
│                                                └─────┘    │
```

Each section has:
- **Enter point**: When it starts animating in
- **Active zone**: Where main content is visible
- **Exit point**: When it starts animating out

---

## State Management for Animations

```javascript
// animations/gsap-config.js

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Global defaults
gsap.defaults({
  ease: 'power3.out',
  duration: 0.8
});

// ScrollTrigger defaults
ScrollTrigger.defaults({
  toggleActions: 'play none none reverse',
  start: 'top 80%'
});

// Batch animations for performance
ScrollTrigger.batch('.fade-up', {
  onEnter: (elements) => {
    gsap.from(elements, {
      y: 60,
      opacity: 0,
      stagger: 0.15
    });
  }
});

export { gsap, ScrollTrigger };
```

---

## Mobile Considerations

```javascript
// Detect device and simplify animations
const isMobile = window.matchMedia('(max-width: 768px)').matches;

if (isMobile) {
  // Simpler animations for performance
  gsap.to('.element', {
    opacity: 1,
    y: 0,
    duration: 0.4 // Faster
  });
} else {
  // Full desktop animations
  gsap.to('.element', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
  });
}

// Or disable complex effects entirely
ScrollTrigger.matchMedia({
  "(min-width: 769px)": function() {
    // Desktop animations
  },
  "(max-width: 768px)": function() {
    // Mobile: simpler or no animations
  }
});
```

---

*Architecture Guide v1.0 - Antigravity Skills*
