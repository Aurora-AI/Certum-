# Example: Swiss Private Banking Landing

Exemplo completo de um projeto usando Antigravity Skills.

---

## O Prompt Usado

```markdown
# ANTIGRAVITY PROJECT: Certum Prime

## PROJECT SPECS
- **Framework**: Next.js 14 (App Router)
- **Style**: Swiss Private Banking
- **Color Palette**: 
  - Background: #FAFAF8 (warm white)
  - Text: #1A1A1A (soft black)
  - Accent: #C9A962 (muted gold)
  - Secondary: #767676 (gray)
- **Typography**:
  - Display: Playfair Display (serif, elegant)
  - Body: Inter (clean, readable)
- **Animation Stack**: GSAP + ScrollTrigger + Lenis

---

## SECTION 1: HERO
**Purpose**: Establish trust, premium feel
**Layout**: Centered
**Height**: 100vh
**Background**: #FAFAF8 with subtle grain

### Elements:
1. **Logo**
   - Position: top-center, 60px from top
   - Size: 120px width
   - Animation: fade-in, 0.5s delay

2. **Headline**: "Precision. Trust. Legacy."
   - Font: Playfair Display, 72px, normal weight
   - Treatment: normal case, letter-spacing: -0.02em
   - Animation: line-by-line reveal, stagger 0.2s

3. **Subline**: "Private wealth management for discerning families"
   - Font: Inter, 18px, light weight
   - Color: #767676
   - Animation: fade-up, 0.3s after headline

4. **CTA Button**: "Begin Your Journey"
   - Style: outlined, gold border, no fill
   - Hover: fill gold, text turns dark
   - Animation: fade-in, 0.5s after subline

5. **Scroll Indicator**
   - Position: bottom-center, 40px from bottom
   - Style: thin line (1px) with small arrow
   - Color: #C9A962
   - Animation: subtle pulse, infinite loop

### Load Sequence:
1. Page fades in from white (0.5s)
2. Grain texture appears
3. Logo fades in (0.5s delay)
4. Headline reveals line by line (0.8s delay)
5. Subline fades up (after headline)
6. CTA appears (0.3s after subline)
7. Scroll indicator starts pulsing (2s after load)

### Scroll Behavior:
- Content fades out gradually (opacity linked to scroll)
- Slight upward parallax on text (moves faster than scroll)
- Grain stays fixed

### Transition to Section 2:
- Smooth parallax push (Section 2 slides up from bottom)

---

## SECTION 2: PHILOSOPHY
**Purpose**: Explain approach, build credibility
**Layout**: Two columns (text left, image right)
**Height**: auto (min 80vh)
**Background**: #FAFAF8

### Elements:
1. **Section Label**: "Our Philosophy"
   - Font: Inter, 12px, uppercase, letter-spacing: 0.2em
   - Color: #C9A962
   - Animation: fade-up on scroll enter

2. **Headline**: "Wealth is more than numbers. It's the freedom to live purposefully."
   - Font: Playfair Display, 48px
   - Animation: line-by-line reveal on scroll

3. **Body Text**: [2 paragraphs about approach]
   - Font: Inter, 16px, line-height: 1.8
   - Animation: fade-up, staggered paragraphs

4. **Image**: Private study/library aesthetic
   - Position: right column, full height
   - Animation: mask reveal from left, parallax
   - Treatment: subtle sepia/warm filter

### Scroll Animation:
- Label appears first
- Headline reveals line by line
- Body text fades up
- Image reveals with mask
- All triggered at top 70% viewport

---

## SECTION 3: SERVICES
**Purpose**: Show offerings
**Layout**: Three columns (cards)
**Height**: auto
**Background**: #1A1A1A (dark for contrast)

### Elements:
1. **Section Label**: "Our Services"
   - Color: #C9A962 (gold on dark)

2. **Service Cards** (×3):
   - Titles: "Wealth Planning" / "Investment Management" / "Estate Advisory"
   - Style: minimal, text-only, no borders
   - Typography: Playfair for title, Inter for description
   - Animation: staggered fade-up, 0.2s between

3. **Decorative Line**
   - Thin gold horizontal rule above cards
   - Animation: expand from center

### Scroll Animation:
- Background transition from light to dark (pinned briefly)
- Line expands
- Cards reveal staggered

---

## SECTION 4: TRUST INDICATORS
**Purpose**: Social proof without being tacky
**Layout**: Single stat + quote
**Height**: 60vh
**Background**: #FAFAF8 (back to light)

### Elements:
1. **Large Number**: "$4.2B"
   - Font: Playfair Display, 120px
   - Color: #1A1A1A
   - Animation: counter animation from 0

2. **Label**: "Assets Under Advisory"
   - Font: Inter, 14px, uppercase
   - Animation: fade-up after counter

3. **Quote**: "Trust is built over generations, not quarters."
   - Font: Playfair Display, 32px, italic
   - Color: #767676
   - Animation: fade-in with blur-to-sharp

4. **Attribution**: "— Founding Partner"
   - Font: Inter, 14px

---

## SECTION 5: CTA
**Purpose**: Convert
**Layout**: Centered, minimal
**Height**: 80vh
**Background**: #1A1A1A

### Elements:
1. **Headline**: "Your legacy begins with a conversation."
   - Font: Playfair Display, 56px
   - Color: #FAFAF8
   - Animation: split-text reveal

2. **CTA Button**: "Schedule a Consultation"
   - Style: filled gold, dark text
   - Animation: magnetic hover, scale 1.05

3. **Contact Info**
   - Email + Phone, subtle below button
   - Animation: fade-up

---

## FOOTER
**Layout**: Minimal, single line
**Content**: © 2024 Certum Prime · Privacy · Terms
**Background**: #1A1A1A
**Animation**: none (static)

---

## GLOBAL SETTINGS

### Smooth Scroll
- Lenis, duration: 1.5 (slower for premium feel)

### Cursor
- Default (premium sites often don't use custom cursors)

### Grain Overlay
- Opacity: 0.03
- Fixed position
- Subtle animation

### Loading
- Simple fade from white
- No loading screen (content streams in)

---

## ANIMATION GUIDELINES

### Timing
- Default duration: 1s (slower for luxury)
- Stagger: 0.15-0.2s
- Scroll trigger: top 75%

### Easing
- Reveals: power2.out (smooth, not dramatic)
- Hovers: power2.inOut
- Text: power3.out

### Principles
- Understated > flashy
- Slow movements = confidence
- Gold accents animate last (reward)
- Never more than 2 things animating at once
```

---

## Estrutura de Arquivos Gerada

```
certum-prime/
├── public/
│   ├── fonts/
│   │   ├── playfair-display.woff2
│   │   └── inter.woff2
│   ├── images/
│   │   ├── logo.svg
│   │   ├── study.webp
│   │   └── grain.png
│   └── favicon.ico
│
├── src/
│   ├── app/
│   │   ├── layout.jsx
│   │   ├── page.jsx
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── ui/
│   │       ├── Button.jsx
│   │       └── SectionLabel.jsx
│   │
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── Philosophy.jsx
│   │   ├── Services.jsx
│   │   ├── Trust.jsx
│   │   └── CTA.jsx
│   │
│   ├── animations/
│   │   └── gsap-config.js
│   │
│   └── hooks/
│       └── useLenis.js
│
├── package.json
└── next.config.js
```

---

## Código: Hero Section

```jsx
// src/sections/Hero.jsx
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import styles from './Hero.module.css';

gsap.registerPlugin(ScrollTrigger, SplitText);

export function Hero() {
  const sectionRef = useRef(null);
  const logoRef = useRef(null);
  const headlineRef = useRef(null);
  const sublineRef = useRef(null);
  const ctaRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split headline into lines
      const splitHeadline = new SplitText(headlineRef.current, { 
        type: 'lines',
        linesClass: 'line'
      });

      // Main timeline
      const tl = gsap.timeline({
        defaults: { ease: 'power2.out' }
      });

      // Entrance sequence
      tl.from(logoRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.5
      })
      .from(splitHeadline.lines, {
        opacity: 0,
        y: 60,
        stagger: 0.2,
        duration: 1
      }, '-=0.3')
      .from(sublineRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8
      }, '-=0.5')
      .from(ctaRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6
      }, '-=0.4')
      .to(scrollIndicatorRef.current, {
        opacity: 1,
        duration: 0.5
      }, '-=0.2');

      // Scroll indicator pulse
      gsap.to(scrollIndicatorRef.current.querySelector('.line'), {
        scaleY: 1.2,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      // Scroll-triggered exit
      gsap.to(sectionRef.current, {
        opacity: 0,
        y: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.hero}>
      <div className={styles.content}>
        <div ref={logoRef} className={styles.logo}>
          <Image 
            src="/images/logo.svg" 
            alt="Certum Prime" 
            width={120} 
            height={40}
          />
        </div>

        <h1 ref={headlineRef} className={styles.headline}>
          Precision. Trust. Legacy.
        </h1>

        <p ref={sublineRef} className={styles.subline}>
          Private wealth management for discerning families
        </p>

        <div ref={ctaRef}>
          <Button variant="outline">Begin Your Journey</Button>
        </div>

        <div ref={scrollIndicatorRef} className={styles.scrollIndicator}>
          <span className="line" />
          <span className={styles.arrow}>↓</span>
        </div>
      </div>
    </section>
  );
}
```

```css
/* src/sections/Hero.module.css */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg);
  position: relative;
}

.content {
  text-align: center;
  max-width: 800px;
  padding: 2rem;
}

.logo {
  margin-bottom: 4rem;
}

.headline {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 400;
  letter-spacing: -0.02em;
  color: var(--color-text);
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.headline :global(.line) {
  overflow: hidden;
}

.subline {
  font-family: var(--font-body);
  font-size: 1.125rem;
  font-weight: 300;
  color: var(--color-secondary);
  margin-bottom: 2.5rem;
}

.scrollIndicator {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  opacity: 0;
}

.scrollIndicator .line {
  width: 1px;
  height: 40px;
  background: var(--color-accent);
  transform-origin: top;
}

.arrow {
  font-size: 0.75rem;
  color: var(--color-accent);
}
```

---

## CSS Variables

```css
/* src/app/globals.css */
:root {
  /* Colors */
  --color-bg: #FAFAF8;
  --color-text: #1A1A1A;
  --color-accent: #C9A962;
  --color-secondary: #767676;
  --color-dark: #1A1A1A;

  /* Typography */
  --font-display: 'Playfair Display', serif;
  --font-body: 'Inter', sans-serif;

  /* Spacing */
  --section-padding: clamp(4rem, 10vw, 8rem);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: var(--font-body);
  background: var(--color-bg);
  color: var(--color-text);
}

/* Grain overlay */
.grain {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.03;
  background-image: url('/images/grain.png');
  background-repeat: repeat;
}
```

---

## Resultado Esperado

O site final deve ter:

1. **Hero** que transmite sofisticação imediata
2. **Animações lentas e confiantes** (1s+)
3. **Tipografia serif elegante** nos headlines
4. **Cores muted** com gold como accent
5. **Muito whitespace**
6. **Transições suaves** entre sections
7. **Zero elementos genéricos** ou "AI slop"

---

*Example Project - Antigravity Skills v1.0*
