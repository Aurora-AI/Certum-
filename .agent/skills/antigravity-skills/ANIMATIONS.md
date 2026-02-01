# Antigravity Animation Library

Catálogo completo de animações para websites cinematográficos.

---

## Table of Contents

1. [Text Animations](#text-animations)
2. [Image Animations](#image-animations)
3. [Card Animations](#card-animations)
4. [Background Effects](#background-effects)
5. [Scroll Animations](#scroll-animations)
6. [Hover Effects](#hover-effects)
7. [Page Transitions](#page-transitions)
8. [Micro-interactions](#micro-interactions)

---

## Text Animations

### 1. Split Text Reveal (Character)
```javascript
// Requires GSAP SplitText plugin
import { SplitText } from 'gsap/SplitText';
gsap.registerPlugin(SplitText);

const split = new SplitText('.headline', { type: 'chars' });

gsap.from(split.chars, {
  y: 100,
  opacity: 0,
  rotateX: -90,
  stagger: 0.02,
  duration: 0.8,
  ease: 'power3.out'
});
```

### 2. Line by Line Reveal
```javascript
const split = new SplitText('.text', { type: 'lines' });

gsap.from(split.lines, {
  y: 60,
  opacity: 0,
  stagger: 0.1,
  duration: 0.8,
  ease: 'power3.out'
});
```

### 3. Word Cascade
```javascript
const split = new SplitText('.headline', { type: 'words' });

gsap.from(split.words, {
  y: 40,
  opacity: 0,
  stagger: 0.05,
  duration: 0.6,
  ease: 'power2.out'
});
```

### 4. Blur to Sharp
```javascript
gsap.from('.headline', {
  filter: 'blur(20px)',
  opacity: 0,
  y: 30,
  duration: 1.2,
  ease: 'power3.out'
});
```

### 5. Typewriter Effect
```javascript
const text = 'Your text here';
const element = document.querySelector('.typewriter');
let index = 0;

function type() {
  if (index < text.length) {
    element.textContent += text.charAt(index);
    index++;
    setTimeout(type, 50);
  }
}
type();
```

### 6. Scramble Text
```javascript
// Using GSAP TextPlugin
import { TextPlugin } from 'gsap/TextPlugin';
gsap.registerPlugin(TextPlugin);

gsap.to('.scramble', {
  duration: 2,
  text: {
    value: 'Final Text Here',
    scrambleText: {
      chars: 'upperCase',
      revealDelay: 0.5,
      speed: 0.3
    }
  }
});
```

### 7. Mask Reveal (Horizontal)
```css
.text-mask {
  clip-path: inset(0 100% 0 0);
}
```
```javascript
gsap.to('.text-mask', {
  clipPath: 'inset(0 0% 0 0)',
  duration: 1,
  ease: 'power3.inOut'
});
```

### 8. Counter Animation
```javascript
gsap.to('.counter', {
  textContent: 1000,
  duration: 2,
  ease: 'power1.out',
  snap: { textContent: 1 },
  modifiers: {
    textContent: (value) => Math.round(value).toLocaleString()
  }
});
```

---

## Image Animations

### 1. Reveal Mask (Horizontal)
```javascript
// Image wrapper needs overflow: hidden
gsap.from('.image', {
  clipPath: 'inset(0 100% 0 0)',
  duration: 1.2,
  ease: 'power3.inOut'
});

// Scale inner image opposite direction
gsap.from('.image img', {
  scale: 1.3,
  duration: 1.2,
  ease: 'power3.inOut'
});
```

### 2. Reveal Mask (Vertical)
```javascript
gsap.from('.image', {
  clipPath: 'inset(100% 0 0 0)',
  duration: 1.2,
  ease: 'power3.inOut'
});
```

### 3. Reveal Mask (Diagonal)
```javascript
gsap.from('.image', {
  clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
  duration: 1.2,
  ease: 'power3.inOut'
});

// To: polygon(0 0, 100% 0, 100% 100%, 0 100%)
```

### 4. Scale Reveal
```javascript
gsap.from('.image', {
  scale: 0,
  opacity: 0,
  duration: 1,
  ease: 'power3.out'
});
```

### 5. Parallax Image
```javascript
gsap.to('.parallax-image', {
  yPercent: -20,
  ease: 'none',
  scrollTrigger: {
    trigger: '.parallax-container',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 1
  }
});
```

### 6. Image Zoom on Scroll
```javascript
gsap.to('.zoom-image', {
  scale: 1.2,
  scrollTrigger: {
    trigger: '.zoom-container',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 1
  }
});
```

### 7. Duotone Shift
```css
.duotone {
  filter: grayscale(100%) sepia(100%) saturate(300%) hue-rotate(180deg);
  transition: filter 0.6s ease;
}
.duotone:hover {
  filter: none;
}
```

### 8. Ken Burns Effect
```javascript
gsap.fromTo('.ken-burns', 
  { scale: 1 },
  { 
    scale: 1.1, 
    duration: 10, 
    ease: 'none',
    repeat: -1,
    yoyo: true
  }
);
```

---

## Card Animations

### 1. Staggered Reveal
```javascript
gsap.from('.card', {
  y: 100,
  opacity: 0,
  duration: 0.8,
  stagger: 0.15,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.cards-grid',
    start: 'top 75%'
  }
});
```

### 2. Cascade (Waterfall)
```javascript
gsap.from('.card', {
  y: 60,
  opacity: 0,
  scale: 0.9,
  duration: 0.6,
  stagger: {
    each: 0.1,
    from: 'start'
  },
  ease: 'power2.out'
});
```

### 3. Fan Out
```javascript
gsap.from('.card', {
  x: 0,
  y: 0,
  rotation: 0,
  opacity: 0,
  stagger: {
    each: 0.1,
    from: 'center'
  },
  duration: 0.8,
  ease: 'power3.out'
});
```

### 4. 3D Flip Reveal
```javascript
gsap.from('.card', {
  rotateY: 90,
  opacity: 0,
  duration: 0.8,
  stagger: 0.1,
  ease: 'power3.out',
  transformOrigin: 'left center'
});
```

### 5. Scale Pop
```javascript
gsap.from('.card', {
  scale: 0.8,
  opacity: 0,
  duration: 0.5,
  stagger: 0.1,
  ease: 'back.out(1.7)'
});
```

---

## Background Effects

### 1. Grain Overlay
```css
.grain {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.05;
  background-image: url('/textures/grain.png');
  background-repeat: repeat;
  animation: grain 0.5s steps(10) infinite;
}

@keyframes grain {
  0%, 100% { transform: translate(0, 0); }
  10% { transform: translate(-5%, -10%); }
  20% { transform: translate(-15%, 5%); }
  30% { transform: translate(7%, -25%); }
  40% { transform: translate(-5%, 25%); }
  50% { transform: translate(-15%, 10%); }
  60% { transform: translate(15%, 0%); }
  70% { transform: translate(0%, 15%); }
  80% { transform: translate(3%, 35%); }
  90% { transform: translate(-10%, 10%); }
}
```

### 2. Gradient Mesh (CSS)
```css
.gradient-mesh {
  background: 
    radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%),
    radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%),
    radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%),
    radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%),
    radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%),
    radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%),
    radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%);
}
```

### 3. Animated Gradient
```javascript
gsap.to('.animated-gradient', {
  backgroundPosition: '100% 100%',
  duration: 10,
  ease: 'none',
  repeat: -1,
  yoyo: true
});
```

### 4. Floating Particles
```javascript
// Simple floating dots
const particles = document.querySelectorAll('.particle');

particles.forEach((particle, i) => {
  gsap.to(particle, {
    y: 'random(-100, 100)',
    x: 'random(-50, 50)',
    duration: 'random(3, 6)',
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
    delay: i * 0.2
  });
});
```

### 5. Aurora Effect
```css
.aurora {
  position: absolute;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    rgba(120, 0, 255, 0.3),
    rgba(0, 255, 200, 0.3),
    rgba(255, 0, 100, 0.3)
  );
  filter: blur(100px);
  animation: aurora 15s ease-in-out infinite;
}

@keyframes aurora {
  0%, 100% { transform: translate(-25%, -25%) rotate(0deg); }
  50% { transform: translate(-25%, -25%) rotate(180deg); }
}
```

### 6. Noise SVG Filter
```html
<svg class="noise-filter">
  <filter id="noise">
    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" />
    <feColorMatrix type="saturate" values="0" />
  </filter>
</svg>
```
```css
.noisy {
  filter: url(#noise);
  opacity: 0.05;
}
```

---

## Scroll Animations

### 1. Fade Up on Scroll
```javascript
gsap.utils.toArray('.fade-up').forEach(el => {
  gsap.from(el, {
    y: 60,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: el,
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    }
  });
});
```

### 2. Parallax Layers
```javascript
gsap.utils.toArray('.parallax-layer').forEach((layer, i) => {
  const depth = layer.dataset.depth || 0.5;
  
  gsap.to(layer, {
    yPercent: -100 * depth,
    ease: 'none',
    scrollTrigger: {
      trigger: layer.parentElement,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  });
});
```

### 3. Horizontal Scroll Section
```javascript
const container = document.querySelector('.horizontal-scroll');
const sections = gsap.utils.toArray('.horizontal-section');

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: 'none',
  scrollTrigger: {
    trigger: container,
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => '+=' + container.offsetWidth
  }
});
```

### 4. Pin Section
```javascript
ScrollTrigger.create({
  trigger: '.pinned-section',
  start: 'top top',
  end: '+=200%',
  pin: true,
  pinSpacing: true
});
```

### 5. Progress Bar
```javascript
gsap.to('.progress-bar', {
  scaleX: 1,
  ease: 'none',
  scrollTrigger: {
    trigger: 'body',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 0.3
  }
});
```

### 6. Scroll-Linked Video
```javascript
const video = document.querySelector('.scroll-video');

ScrollTrigger.create({
  trigger: '.video-container',
  start: 'top top',
  end: 'bottom bottom',
  scrub: true,
  onUpdate: (self) => {
    video.currentTime = video.duration * self.progress;
  }
});
```

### 7. Text Highlight on Scroll
```javascript
gsap.utils.toArray('.highlight-text span').forEach(span => {
  gsap.to(span, {
    backgroundSize: '100% 100%',
    ease: 'none',
    scrollTrigger: {
      trigger: span,
      start: 'top 80%',
      end: 'top 50%',
      scrub: true
    }
  });
});
```
```css
.highlight-text span {
  background: linear-gradient(to right, gold 50%, transparent 50%);
  background-size: 0% 100%;
  background-repeat: no-repeat;
}
```

---

## Hover Effects

### 1. Magnetic Button
```javascript
const button = document.querySelector('.magnetic');

button.addEventListener('mousemove', (e) => {
  const rect = button.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;
  
  gsap.to(button, {
    x: x * 0.3,
    y: y * 0.3,
    duration: 0.3,
    ease: 'power2.out'
  });
});

button.addEventListener('mouseleave', () => {
  gsap.to(button, {
    x: 0,
    y: 0,
    duration: 0.5,
    ease: 'elastic.out(1, 0.3)'
  });
});
```

### 2. Underline Slide
```css
.underline-link {
  position: relative;
}
.underline-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.underline-link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
```

### 3. Card Lift
```css
.card-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card-lift:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}
```

### 4. Image Zoom Container
```css
.image-zoom {
  overflow: hidden;
}
.image-zoom img {
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
.image-zoom:hover img {
  transform: scale(1.1);
}
```

### 5. Border Animation
```css
.border-animate {
  position: relative;
}
.border-animate::before {
  content: '';
  position: absolute;
  inset: 0;
  border: 1px solid currentColor;
  transform: scale(0.95);
  opacity: 0;
  transition: all 0.3s ease;
}
.border-animate:hover::before {
  transform: scale(1);
  opacity: 1;
}
```

### 6. Text Swap
```html
<span class="text-swap" data-text="Hover Text">Original Text</span>
```
```css
.text-swap {
  position: relative;
  display: inline-block;
  overflow: hidden;
}
.text-swap::after {
  content: attr(data-text);
  position: absolute;
  left: 0;
  top: 100%;
  transition: transform 0.3s ease;
}
.text-swap:hover {
  /* Move original up */
}
.text-swap:hover::after {
  transform: translateY(-100%);
}
```

---

## Page Transitions

### 1. Fade Transition
```javascript
// Exit
gsap.to('.page', {
  opacity: 0,
  duration: 0.4,
  ease: 'power2.inOut',
  onComplete: () => {
    // Navigate to new page
  }
});

// Enter (on new page)
gsap.from('.page', {
  opacity: 0,
  duration: 0.4,
  ease: 'power2.inOut'
});
```

### 2. Slide Transition
```javascript
// Exit: slide out left
gsap.to('.page', {
  xPercent: -100,
  duration: 0.6,
  ease: 'power3.inOut'
});

// Enter: slide in from right
gsap.from('.page', {
  xPercent: 100,
  duration: 0.6,
  ease: 'power3.inOut'
});
```

### 3. Overlay Wipe
```javascript
// Animate overlay in
gsap.to('.transition-overlay', {
  scaleY: 1,
  transformOrigin: 'bottom',
  duration: 0.5,
  ease: 'power3.inOut',
  onComplete: () => {
    // Navigate
    // Then animate out
    gsap.to('.transition-overlay', {
      scaleY: 0,
      transformOrigin: 'top',
      duration: 0.5,
      ease: 'power3.inOut'
    });
  }
});
```

### 4. Curtain Reveal
```javascript
const tl = gsap.timeline();

tl.to('.curtain-left', {
  xPercent: -100,
  duration: 0.8,
  ease: 'power3.inOut'
}, 0)
.to('.curtain-right', {
  xPercent: 100,
  duration: 0.8,
  ease: 'power3.inOut'
}, 0);
```

---

## Micro-interactions

### 1. Button Press
```css
.btn-press {
  transition: transform 0.1s ease;
}
.btn-press:active {
  transform: scale(0.95);
}
```

### 2. Input Focus
```css
.input-animate {
  border-bottom: 2px solid #ccc;
  transition: border-color 0.3s ease;
}
.input-animate:focus {
  border-color: #000;
  outline: none;
}
```

### 3. Toggle Switch
```javascript
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
  const isOn = toggle.classList.toggle('active');
  
  gsap.to('.toggle-knob', {
    x: isOn ? 24 : 0,
    duration: 0.3,
    ease: 'power2.out'
  });
});
```

### 4. Ripple Effect
```javascript
function createRipple(event) {
  const button = event.currentTarget;
  const circle = document.createElement('span');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - diameter / 2}px`;
  circle.style.top = `${event.clientY - button.offsetTop - diameter / 2}px`;
  circle.classList.add('ripple');
  
  button.appendChild(circle);
  
  gsap.to(circle, {
    scale: 4,
    opacity: 0,
    duration: 0.6,
    ease: 'power2.out',
    onComplete: () => circle.remove()
  });
}
```

### 5. Cursor Trail
```javascript
const cursor = document.querySelector('.cursor');
const trail = document.querySelectorAll('.cursor-trail');

document.addEventListener('mousemove', (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.1
  });
  
  trail.forEach((dot, i) => {
    gsap.to(dot, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.3 + i * 0.1
    });
  });
});
```

---

## Animation Timing Presets

```javascript
// antigravity-timing.js

export const TIMING = {
  // Durations
  instant: 0.1,
  fast: 0.3,
  normal: 0.6,
  slow: 1,
  dramatic: 1.5,
  
  // Staggers
  stagger: {
    tight: 0.03,
    normal: 0.1,
    relaxed: 0.2
  },
  
  // Easings
  ease: {
    smooth: 'power2.out',
    confident: 'power3.out',
    dramatic: 'power4.out',
    bouncy: 'back.out(1.7)',
    elastic: 'elastic.out(1, 0.3)',
    linear: 'none'
  },
  
  // ScrollTrigger defaults
  scroll: {
    start: 'top 85%',
    startEarly: 'top 95%',
    startMid: 'top 60%',
    startLate: 'top 30%'
  }
};
```

---

*Animation Library v1.0 - Antigravity Skills*
