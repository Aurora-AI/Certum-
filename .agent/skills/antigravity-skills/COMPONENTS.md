# Antigravity Components

Componentes React prontos para uso com animações GSAP integradas.

---

## Animated Text Components

### SplitTextReveal.jsx

```jsx
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

export function SplitTextReveal({ 
  children, 
  type = 'chars', // 'chars' | 'words' | 'lines'
  stagger = 0.02,
  duration = 0.8,
  delay = 0,
  ease = 'power3.out',
  className = ''
}) {
  const textRef = useRef(null);
  const splitRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    splitRef.current = new SplitText(textRef.current, { type });
    
    gsap.from(splitRef.current[type], {
      y: type === 'lines' ? 60 : 40,
      opacity: 0,
      stagger,
      duration,
      delay,
      ease
    });

    return () => {
      if (splitRef.current) {
        splitRef.current.revert();
      }
    };
  }, [type, stagger, duration, delay, ease]);

  return (
    <span ref={textRef} className={className}>
      {children}
    </span>
  );
}
```

### TextBlurReveal.jsx

```jsx
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function TextBlurReveal({ 
  children, 
  duration = 1.2,
  blur = 20,
  scrollTrigger = true,
  className = ''
}) {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const animation = gsap.from(textRef.current, {
      filter: `blur(${blur}px)`,
      opacity: 0,
      y: 30,
      duration,
      ease: 'power3.out',
      ...(scrollTrigger && {
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      })
    });

    return () => {
      animation.kill();
    };
  }, [duration, blur, scrollTrigger]);

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  );
}
```

---

## Image Components

### RevealImage.jsx

```jsx
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function RevealImage({ 
  src, 
  alt,
  direction = 'left', // 'left' | 'right' | 'top' | 'bottom'
  duration = 1.2,
  scrollTrigger = true,
  className = ''
}) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  const clipPaths = {
    left: {
      from: 'inset(0 100% 0 0)',
      to: 'inset(0 0% 0 0)'
    },
    right: {
      from: 'inset(0 0 0 100%)',
      to: 'inset(0 0 0 0%)'
    },
    top: {
      from: 'inset(0 0 100% 0)',
      to: 'inset(0 0 0% 0)'
    },
    bottom: {
      from: 'inset(100% 0 0 0)',
      to: 'inset(0% 0 0 0)'
    }
  };

  useEffect(() => {
    if (!containerRef.current || !imageRef.current) return;

    const tl = gsap.timeline({
      ...(scrollTrigger && {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      })
    });

    tl.fromTo(containerRef.current, 
      { clipPath: clipPaths[direction].from },
      { 
        clipPath: clipPaths[direction].to, 
        duration,
        ease: 'power3.inOut'
      }
    )
    .from(imageRef.current, {
      scale: 1.3,
      duration,
      ease: 'power3.inOut'
    }, 0);

    return () => {
      tl.kill();
    };
  }, [direction, duration, scrollTrigger]);

  return (
    <div 
      ref={containerRef} 
      className={className}
      style={{ overflow: 'hidden' }}
    >
      <img 
        ref={imageRef}
        src={src} 
        alt={alt}
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover' 
        }}
      />
    </div>
  );
}
```

### ParallaxImage.jsx

```jsx
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ParallaxImage({ 
  src, 
  alt,
  speed = 0.3, // 0-1, higher = more parallax
  className = ''
}) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !imageRef.current) return;

    gsap.to(imageRef.current, {
      yPercent: -100 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

  }, [speed]);

  return (
    <div 
      ref={containerRef} 
      className={className}
      style={{ overflow: 'hidden' }}
    >
      <img 
        ref={imageRef}
        src={src} 
        alt={alt}
        style={{ 
          width: '100%', 
          height: `${100 + (speed * 100)}%`,
          objectFit: 'cover',
          willChange: 'transform'
        }}
      />
    </div>
  );
}
```

---

## Button Components

### MagneticButton.jsx

```jsx
'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export function MagneticButton({ 
  children, 
  strength = 0.3,
  className = '',
  ...props 
}) {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(button, {
        x: x * strength,
        y: y * strength,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)'
      });
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return (
    <button ref={buttonRef} className={className} {...props}>
      {children}
    </button>
  );
}
```

### AnimatedButton.jsx

```jsx
'use client';

import { useRef } from 'react';
import gsap from 'gsap';

export function AnimatedButton({ 
  children, 
  variant = 'primary', // 'primary' | 'secondary' | 'outline'
  className = '',
  ...props 
}) {
  const buttonRef = useRef(null);
  const bgRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(bgRef.current, {
      scaleX: 1,
      duration: 0.4,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = () => {
    gsap.to(bgRef.current, {
      scaleX: 0,
      duration: 0.4,
      ease: 'power2.out'
    });
  };

  return (
    <button 
      ref={buttonRef} 
      className={`animated-button ${variant} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <span 
        ref={bgRef} 
        className="button-bg"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'currentColor',
          transformOrigin: 'left',
          transform: 'scaleX(0)',
          zIndex: 0
        }}
      />
      <span style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </span>
    </button>
  );
}
```

---

## Layout Components

### Section.jsx

```jsx
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Section({ 
  children, 
  id,
  className = '',
  background = 'transparent',
  minHeight = '100vh',
  fadeIn = true
}) {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !fadeIn) return;

    gsap.from(sectionRef.current, {
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      }
    });
  }, [fadeIn]);

  return (
    <section 
      ref={sectionRef}
      id={id}
      className={className}
      style={{ 
        background, 
        minHeight,
        position: 'relative'
      }}
    >
      {children}
    </section>
  );
}
```

### Container.jsx

```jsx
export function Container({ 
  children, 
  size = 'default', // 'narrow' | 'default' | 'wide' | 'full'
  className = '' 
}) {
  const sizes = {
    narrow: '800px',
    default: '1200px',
    wide: '1400px',
    full: '100%'
  };

  return (
    <div 
      className={className}
      style={{
        width: '100%',
        maxWidth: sizes[size],
        marginInline: 'auto',
        paddingInline: 'clamp(1rem, 5vw, 3rem)'
      }}
    >
      {children}
    </div>
  );
}
```

---

## Effect Components

### GrainOverlay.jsx

```jsx
export function GrainOverlay({ opacity = 0.05 }) {
  return (
    <div 
      className="grain-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        opacity,
        backgroundImage: 'url(/textures/grain.png)',
        backgroundRepeat: 'repeat'
      }}
    />
  );
}
```

### GradientMesh.jsx

```jsx
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function GradientMesh({ 
  colors = ['#667eea', '#764ba2', '#f093fb'],
  className = '' 
}) {
  const meshRef = useRef(null);

  useEffect(() => {
    if (!meshRef.current) return;

    gsap.to(meshRef.current, {
      backgroundPosition: '100% 100%',
      duration: 20,
      ease: 'none',
      repeat: -1,
      yoyo: true
    });
  }, []);

  return (
    <div 
      ref={meshRef}
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        background: `
          radial-gradient(at 40% 20%, ${colors[0]} 0px, transparent 50%),
          radial-gradient(at 80% 0%, ${colors[1]} 0px, transparent 50%),
          radial-gradient(at 0% 50%, ${colors[2]} 0px, transparent 50%)
        `,
        backgroundSize: '200% 200%',
        filter: 'blur(100px)',
        opacity: 0.5
      }}
    />
  );
}
```

### FloatingElements.jsx

```jsx
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function FloatingElements({ 
  count = 5,
  size = 20,
  color = 'rgba(255,255,255,0.1)',
  className = '' 
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.children;

    Array.from(elements).forEach((el, i) => {
      gsap.to(el, {
        y: 'random(-100, 100)',
        x: 'random(-50, 50)',
        duration: 'random(3, 6)',
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: i * 0.3
      });
    });
  }, [count]);

  return (
    <div 
      ref={containerRef}
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: size,
            height: size,
            borderRadius: '50%',
            background: color,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
        />
      ))}
    </div>
  );
}
```

---

## Hooks

### useLenis.js

```javascript
'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useLenis(options = {}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      ...options
    });

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
    };
  }, []);
}
```

### useScrollProgress.js

```javascript
'use client';

import { useState, useEffect } from 'react';

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = window.scrollY / scrollHeight;
      setProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
}
```

### useInView.js

```javascript
'use client';

import { useState, useEffect, useRef } from 'react';

export function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px',
        ...options
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
}
```

---

## Usage Example

```jsx
// pages/index.jsx
'use client';

import { useLenis } from '@/hooks/useLenis';
import { Section, Container } from '@/components/layout';
import { SplitTextReveal, TextBlurReveal } from '@/components/text';
import { RevealImage, ParallaxImage } from '@/components/image';
import { MagneticButton } from '@/components/button';
import { GrainOverlay, GradientMesh } from '@/components/effects';

export default function Home() {
  useLenis();

  return (
    <>
      <GrainOverlay opacity={0.03} />
      
      <Section id="hero" minHeight="100vh">
        <GradientMesh colors={['#1a1a2e', '#16213e', '#0f3460']} />
        <Container>
          <h1>
            <SplitTextReveal stagger={0.03}>
              Premium Experiences
            </SplitTextReveal>
          </h1>
          <TextBlurReveal>
            <p>Crafted with precision and purpose</p>
          </TextBlurReveal>
          <MagneticButton>Explore</MagneticButton>
        </Container>
      </Section>

      <Section id="features">
        <Container>
          <RevealImage 
            src="/images/feature.webp" 
            alt="Feature"
            direction="left"
          />
        </Container>
      </Section>
    </>
  );
}
```

---

*Components Library v1.0 - Antigravity Skills*
