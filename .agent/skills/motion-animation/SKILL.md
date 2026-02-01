# Motion Animation Library Skill

> **Library**: Motion.dev (formerly Framer Motion JS)
> **Version**: 11.x
> **Website**: https://motion.dev
> **Bundle Size**: Mini (2.3kb) / Hybrid (18kb)

## Overview

Motion is a high-performance animation library with a unique hybrid engine that combines browser-native APIs with JavaScript power. It can animate anything: HTML, CSS, SVG, WebGL, and JavaScript objects.

## Installation

### Package Manager (Recommended)
```bash
npm install motion
```

### Script Tag
```html
<!-- Modern ES Module -->
<script type="module">
  import { animate, scroll } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm"
</script>

<!-- Legacy Global -->
<script src="https://cdn.jsdelivr.net/npm/motion@latest/dist/motion.js"></script>
<script>
  const { animate, scroll } = Motion
</script>
```

## Core Imports

```javascript
// Hybrid (full features - 18kb)
import { animate, scroll, inView, hover, stagger, spring, transform, mix, frame, delay } from "motion"

// Mini (smaller - 2.3kb)
import { animate } from "motion/mini"
import { spring } from "motion" // for spring type
```

## Quick Reference

| Function | Purpose | Size |
|----------|---------|------|
| `animate()` | Core animation function | Mini/Hybrid |
| `scroll()` | Scroll-linked animations | Hybrid |
| `inView()` | Viewport detection | Hybrid |
| `hover()` | Hover gesture detection | Hybrid |
| `stagger()` | Stagger delay for multiple elements | Hybrid |
| `spring()` | Spring physics generator | Hybrid |
| `transform()` | Value range mapping | Hybrid |
| `mix()` | Value interpolation | Hybrid |
| `frame` | Animation frame scheduling | Hybrid |
| `delay()` | Timed callbacks | Hybrid |

## Animation Types

### 1. Tween (Default)
```javascript
animate(element, { opacity: 1 }, { duration: 0.5, ease: "easeOut" })
```

### 2. Spring (Physics-based)
```javascript
animate(element, { scale: 1.2 }, { type: "spring", stiffness: 300, damping: 20 })
```

### 3. Spring (Duration-based)
```javascript
animate(element, { x: 100 }, { type: "spring", duration: 0.8, bounce: 0.25 })
```

## Transform Properties (Hybrid Only)

Independent transform axes for precise control:

| Property | Description |
|----------|-------------|
| `x`, `y`, `z` | Translation |
| `scale`, `scaleX`, `scaleY` | Scale |
| `rotate`, `rotateX`, `rotateY`, `rotateZ` | Rotation |
| `skewX`, `skewY` | Skew |
| `transformPerspective` | 3D perspective |

```javascript
animate(".box", { x: 100, rotate: 45, scale: 1.5 })
```

## Easing Functions

Built-in easing names:
- `"linear"`
- `"easeIn"`, `"easeOut"`, `"easeInOut"`
- `"circIn"`, `"circOut"`, `"circInOut"`
- `"backIn"`, `"backOut"`, `"backInOut"`
- `"anticipate"`

Custom cubic bezier:
```javascript
{ ease: [.17, .67, .83, .67] }
```

## Animation Controls

```javascript
const animation = animate(element, { opacity: 0 })

// Properties
animation.duration  // Read-only duration
animation.time      // Get/set current time
animation.speed     // Get/set playback speed (1 = normal, -1 = reverse)

// Methods
animation.pause()   // Pause
animation.play()    // Play/resume
animation.stop()    // Stop (commits styles)
animation.cancel()  // Cancel (reverts to initial)
animation.complete() // Jump to end

// Promise-like
await animation
animation.then(() => console.log("Done!"))
```

## Performance Best Practices

### GPU-Accelerated Properties (Fastest)
- `transform` (translate, scale, rotate)
- `opacity`
- `filter` (modern browsers)
- `clipPath` (modern browsers)

### Avoid Layout-Triggering Properties
- `width`, `height`
- `top`, `left`, `right`, `bottom`
- `padding`, `margin`
- `border`

### Hardware Acceleration Tips
```javascript
// For maximum performance, use transform string
animate(".box", { transform: "translateX(100px) scale(2)" })

// CSS variables are NOT hardware accelerated
animate(element, { "--x": "100px" }) // Works but slower
```

## Related Skill Files

| File | Description |
|------|-------------|
| [animate.md](./animate.md) | Full `animate()` documentation |
| [scroll.md](./scroll.md) | Scroll-linked animations |
| [gestures.md](./gestures.md) | `hover()` and `inView()` |
| [text-effects.md](./text-effects.md) | `splitText()` for text animations |
| [utilities.md](./utilities.md) | `stagger`, `spring`, `transform`, `mix`, `frame`, `delay` |
| [examples.md](./examples.md) | Code patterns and recipes |

## Common Patterns

### Staggered Enter Animation
```javascript
import { animate, stagger } from "motion"

animate("li",
  { opacity: [0, 1], y: [20, 0] },
  { delay: stagger(0.1) }
)
```

### Scroll-Linked Parallax
```javascript
import { animate, scroll } from "motion"

const animation = animate(".hero", { y: [0, -100] }, { ease: "linear" })
scroll(animation)
```

### Hover Effect
```javascript
import { animate, hover } from "motion"

hover(".card", (element) => {
  animate(element, { scale: 1.05 }, { type: "spring" })
  return () => animate(element, { scale: 1 }, { type: "spring" })
})
```

### Viewport Enter Animation
```javascript
import { animate, inView } from "motion"

inView("section", (element) => {
  animate(element, { opacity: 1, y: 0 }, { duration: 0.6 })
})
```

## Mini vs Hybrid Comparison

| Feature | Mini (2.3kb) | Hybrid (18kb) |
|---------|:------------:|:-------------:|
| HTML/SVG animation | ✅ | ✅ |
| Independent transforms | ❌ | ✅ |
| CSS variables | Limited | ✅ |
| SVG path drawing | ❌ | ✅ |
| Animation sequences | ❌ | ✅ |
| Objects/WebGL | ❌ | ✅ |
| Spring (built-in) | Import needed | ✅ |
