# Motion Examples & Recipes

> Copy-paste code patterns for common animation scenarios.

## Table of Contents

1. [Basic Animations](#basic-animations)
2. [Scroll Effects](#scroll-effects)
3. [Gesture Interactions](#gesture-interactions)
4. [Text Animations](#text-animations)
5. [Page Transitions](#page-transitions)
6. [Loading & Spinners](#loading--spinners)
7. [Cards & Hover Effects](#cards--hover-effects)
8. [Navigation & Menus](#navigation--menus)
9. [Hero Sections](#hero-sections)
10. [Performance Patterns](#performance-patterns)

---

## Basic Animations

### Fade In
```javascript
import { animate } from "motion"

animate(".element", { opacity: [0, 1] }, { duration: 0.5 })
```

### Slide In from Left
```javascript
animate(".element", { x: [-100, 0], opacity: [0, 1] }, { duration: 0.6, ease: "easeOut" })
```

### Scale Pop
```javascript
animate(".element", { scale: [0, 1] }, { type: "spring", stiffness: 400, damping: 15 })
```

### Rotate Continuous
```javascript
animate(".spinner",
  { rotate: 360 },
  { duration: 1, ease: "linear", repeat: Infinity }
)
```

### Bounce
```javascript
animate(".element",
  { y: [0, -30, 0] },
  { duration: 0.6, ease: "easeOut", repeat: Infinity, repeatDelay: 1 }
)
```

### Pulse
```javascript
animate(".pulse",
  { scale: [1, 1.1, 1], opacity: [1, 0.8, 1] },
  { duration: 1, repeat: Infinity }
)
```

---

## Scroll Effects

### Parallax Background
```javascript
import { animate, scroll } from "motion"

scroll(
  animate(".bg-layer", { y: [0, -200] }, { ease: "linear" })
)
```

### Fade on Scroll
```javascript
scroll(
  animate(".hero", { opacity: [1, 0] }, { ease: "linear" }),
  { offset: ["start start", "end start"] }
)
```

### Progress Bar
```javascript
scroll((progress) => {
  document.querySelector(".progress-bar").style.transform = `scaleX(${progress})`
})
```

### Sticky Section Reveal
```html
<div class="sticky-container" style="height: 300vh;">
  <div class="sticky-section" style="position: sticky; top: 0; height: 100vh;">
    <div class="reveal-content"></div>
  </div>
</div>
```

```javascript
import { animate, scroll } from "motion"

const container = document.querySelector(".sticky-container")
const content = document.querySelector(".reveal-content")

scroll(
  animate(content, {
    opacity: [0, 1, 1, 0],
    scale: [0.8, 1, 1, 0.8],
    y: [100, 0, 0, -100]
  }),
  {
    target: container,
    offset: ["start start", "33% start", "66% start", "end start"]
  }
)
```

### Horizontal Scroll Section
```html
<div class="horizontal-scroll" style="overflow-x: scroll; display: flex;">
  <div class="panel" style="min-width: 100vw;">Panel 1</div>
  <div class="panel" style="min-width: 100vw;">Panel 2</div>
  <div class="panel" style="min-width: 100vw;">Panel 3</div>
</div>
```

```javascript
scroll(
  (progress) => {
    document.querySelectorAll(".panel").forEach((panel, i) => {
      const panelProgress = Math.max(0, Math.min(1, progress * 3 - i))
      panel.style.opacity = panelProgress
    })
  },
  { container: document.querySelector(".horizontal-scroll"), axis: "x" }
)
```

---

## Gesture Interactions

### Button Press
```javascript
import { animate, hover } from "motion"

hover(".button", (element) => {
  animate(element, { scale: 1.05 }, { type: "spring" })

  return () => animate(element, { scale: 1 }, { type: "spring" })
})
```

### Magnetic Effect
```javascript
hover(".magnetic", (element) => {
  const rect = element.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2

  const onMove = (e) => {
    const dx = (e.clientX - centerX) * 0.3
    const dy = (e.clientY - centerY) * 0.3
    animate(element, { x: dx, y: dy }, { type: "spring", stiffness: 150 })
  }

  document.addEventListener("mousemove", onMove)

  return () => {
    document.removeEventListener("mousemove", onMove)
    animate(element, { x: 0, y: 0 }, { type: "spring" })
  }
})
```

### Card Tilt
```javascript
hover(".card", (card) => {
  const rect = card.getBoundingClientRect()

  const onMove = (e) => {
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10

    animate(card, {
      rotateX,
      rotateY,
      transformPerspective: 1000
    }, { duration: 0.1 })
  }

  card.addEventListener("mousemove", onMove)

  return () => {
    card.removeEventListener("mousemove", onMove)
    animate(card, { rotateX: 0, rotateY: 0 }, { type: "spring" })
  }
})
```

---

## Text Animations

### Staggered Text Reveal
```javascript
import { animate, stagger, inView } from "motion"
import { splitText } from "motion-plus"

inView("h1", (element) => {
  element.style.visibility = "visible"
  const { chars } = splitText(element)

  animate(chars,
    { opacity: [0, 1], y: [20, 0] },
    { delay: stagger(0.03), duration: 0.4 }
  )
})
```

### Typewriter
```javascript
const { chars } = splitText(".typewriter")
chars.forEach(c => c.style.opacity = "0")

animate(chars,
  { opacity: 1 },
  { delay: stagger(0.05), duration: 0.01 }
)
```

### Word Wave
```javascript
const { words } = splitText("h1")

animate(words,
  { y: [0, -15, 0] },
  { delay: stagger(0.1, { from: "center" }), duration: 0.5, repeat: Infinity, repeatDelay: 2 }
)
```

### Character Scatter
```javascript
const { chars } = splitText("h1")

chars.forEach((char, i) => {
  const randomX = (Math.random() - 0.5) * 300
  const randomY = (Math.random() - 0.5) * 300
  const randomRotate = (Math.random() - 0.5) * 180

  animate(char,
    { x: [randomX, 0], y: [randomY, 0], rotate: [randomRotate, 0], opacity: [0, 1] },
    { delay: i * 0.02, duration: 0.8, ease: "backOut" }
  )
})
```

---

## Page Transitions

### Fade Transition
```javascript
async function navigateTo(url) {
  await animate("main", { opacity: 0 }, { duration: 0.3 })
  window.location.href = url
}

// On page load
animate("main", { opacity: [0, 1] }, { duration: 0.3 })
```

### Slide Transition
```javascript
async function navigateTo(url) {
  await animate("main", { x: -100, opacity: 0 }, { duration: 0.3 })
  window.location.href = url
}

animate("main", { x: [100, 0], opacity: [0, 1] }, { duration: 0.3, ease: "easeOut" })
```

### Wipe Transition
```javascript
// Add overlay element
const overlay = document.createElement("div")
overlay.className = "page-wipe"
overlay.style.cssText = `
  position: fixed; inset: 0; background: #000;
  transform: translateX(-100%); z-index: 9999;
`
document.body.appendChild(overlay)

async function navigateTo(url) {
  await animate(overlay, { x: ["-100%", "0%"] }, { duration: 0.4 })
  window.location.href = url
}

// On page load
animate(overlay, { x: ["0%", "100%"] }, { duration: 0.4, delay: 0.1 })
```

---

## Loading & Spinners

### Simple Spinner
```javascript
animate(".spinner",
  { rotate: 360 },
  { duration: 1, ease: "linear", repeat: Infinity }
)
```

### Dots Loading
```javascript
animate(".dot",
  { y: [0, -10, 0] },
  { duration: 0.6, delay: stagger(0.1), repeat: Infinity }
)
```

### Progress Ring
```javascript
function setProgress(percent) {
  const circumference = 2 * Math.PI * 45 // radius = 45
  const offset = circumference - (percent / 100) * circumference

  animate(".progress-ring circle", {
    strokeDasharray: circumference,
    strokeDashoffset: [circumference, offset]
  }, { duration: 1, ease: "easeOut" })
}
```

### Skeleton Loading
```javascript
animate(".skeleton",
  { opacity: [0.5, 1, 0.5] },
  { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
)
```

---

## Cards & Hover Effects

### Card Lift
```javascript
hover(".card", (card) => {
  animate(card, {
    y: -10,
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
  }, { type: "spring" })

  return () => animate(card, {
    y: 0,
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
  }, { type: "spring" })
})
```

### Image Reveal
```javascript
hover(".image-card", (card) => {
  const img = card.querySelector("img")
  const overlay = card.querySelector(".overlay")

  animate(img, { scale: 1.1 }, { duration: 0.4 })
  animate(overlay, { opacity: 0 }, { duration: 0.3 })

  return () => {
    animate(img, { scale: 1 }, { duration: 0.4 })
    animate(overlay, { opacity: 1 }, { duration: 0.3 })
  }
})
```

### Staggered Grid
```javascript
inView(".grid", (grid) => {
  const items = grid.querySelectorAll(".grid-item")

  animate(items,
    { opacity: [0, 1], y: [30, 0] },
    { delay: stagger(0.05), duration: 0.4 }
  )
})
```

---

## Navigation & Menus

### Mobile Menu Open
```javascript
const menu = document.querySelector(".mobile-menu")
const items = menu.querySelectorAll("li")

function openMenu() {
  animate(menu, { x: ["100%", "0%"] }, { duration: 0.3 })
  animate(items,
    { opacity: [0, 1], x: [20, 0] },
    { delay: stagger(0.05, { startDelay: 0.1 }), duration: 0.3 }
  )
}

function closeMenu() {
  animate(items, { opacity: 0 }, { duration: 0.1 })
  animate(menu, { x: "100%" }, { duration: 0.3, delay: 0.1 })
}
```

### Underline Link
```html
<a class="nav-link">Link<span class="underline"></span></a>
```

```css
.nav-link { position: relative; }
.underline {
  position: absolute; bottom: 0; left: 0;
  height: 2px; width: 100%; background: currentColor;
  transform: scaleX(0); transform-origin: left;
}
```

```javascript
hover(".nav-link", (link) => {
  const underline = link.querySelector(".underline")
  animate(underline, { scaleX: 1 }, { duration: 0.3 })

  return () => {
    underline.style.transformOrigin = "right"
    animate(underline, { scaleX: 0 }, { duration: 0.3 })
      .then(() => underline.style.transformOrigin = "left")
  }
})
```

### Dropdown Menu
```javascript
function toggleDropdown(dropdown, isOpen) {
  const content = dropdown.querySelector(".dropdown-content")
  const items = content.querySelectorAll("li")

  if (isOpen) {
    animate(content, { height: "auto", opacity: 1 }, { duration: 0.3 })
    animate(items,
      { opacity: [0, 1], y: [-10, 0] },
      { delay: stagger(0.03), duration: 0.2 }
    )
  } else {
    animate(items, { opacity: 0 }, { duration: 0.1 })
    animate(content, { height: 0, opacity: 0 }, { duration: 0.2 })
  }
}
```

---

## Hero Sections

### Animated Hero
```javascript
// Hero content animation sequence
const sequence = [
  [".hero-bg", { scale: [1.2, 1], opacity: [0, 1] }, { duration: 1.2 }],
  [".hero-title", { y: [50, 0], opacity: [0, 1] }, { duration: 0.6, at: "-0.4" }],
  [".hero-subtitle", { y: [30, 0], opacity: [0, 1] }, { duration: 0.5, at: "-0.3" }],
  [".hero-cta", { scale: [0.8, 1], opacity: [0, 1] }, { duration: 0.4, at: "-0.2" }]
]

animate(sequence)
```

### Scroll-Driven Hero Exit
```javascript
const hero = document.querySelector(".hero")

scroll(
  animate(hero, {
    opacity: [1, 0],
    scale: [1, 0.9],
    filter: ["blur(0px)", "blur(10px)"]
  }),
  {
    target: hero,
    offset: ["start start", "end start"]
  }
)
```

---

## Performance Patterns

### Batch DOM Updates
```javascript
import { frame } from "motion"

// Read all measurements first
frame.read(() => {
  const measurements = elements.map(el => el.getBoundingClientRect())

  // Then write all updates
  frame.render(() => {
    elements.forEach((el, i) => {
      el.style.transform = `translateX(${measurements[i].width}px)`
    })
  })
})
```

### Cleanup on Unmount
```javascript
const animations = []
const gestures = []

// Store references
animations.push(animate(".box", { x: 100 }))
gestures.push(hover(".button", callback))
gestures.push(inView(".section", callback))

// Cleanup function
function cleanup() {
  animations.forEach(a => a.stop())
  gestures.forEach(g => g())
}
```

### will-change Management
```javascript
const element = document.querySelector(".animated")

// Enable before animation
element.style.willChange = "transform, opacity"

const animation = animate(element, { x: 100 })

// Disable after animation
animation.then(() => {
  element.style.willChange = "auto"
})
```

### Reduced Motion Support
```javascript
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

if (prefersReducedMotion) {
  // Instant transitions
  animate(element, { opacity: 1 }, { duration: 0 })
} else {
  // Full animation
  animate(element, { opacity: [0, 1], y: [20, 0] }, { duration: 0.6 })
}
```

---

## Official Examples Reference

Visit [motion.dev/examples](https://motion.dev/examples) for 300+ examples including:

| Category | Examples |
|----------|----------|
| Basics | Rotate, Stagger, Spring, Keyframes |
| Scroll | Parallax, Pinning, Progress |
| Gestures | Hover, Press, Drag |
| Text | Split text, Scatter, Wavy |
| Layout | Reorder, Shared layout |
| 3D | Three.js integration |
| Premium | Lightbox, Page wipe, View animation |
