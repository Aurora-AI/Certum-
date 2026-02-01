# scroll()

> Create scroll-linked animations that bind values directly to scroll progress.

## Import

```javascript
import { scroll } from "motion"
```

**Bundle Size:** ~5.1kb

## Overview

`scroll()` creates animations where values are directly tied to scroll position. This is different from scroll-*triggered* animations (use `inView()` for those).

Motion uses the native `ScrollTimeline` API when available for hardware-accelerated performance.

---

## Basic Usage

### With Callback
```javascript
scroll((progress) => {
  console.log(progress)  // 0 to 1
})
```

### With Animation
```javascript
const animation = animate(
  ".hero",
  { opacity: [1, 0], y: [0, -100] },
  { ease: "linear" }
)

scroll(animation)
```

---

## Scroll Info

Get detailed scroll information:

```javascript
scroll((progress, info) => {
  console.log(info.y.current)      // Current scroll position (px)
  console.log(info.y.progress)     // Progress 0-1
  console.log(info.y.velocity)     // Scroll velocity
  console.log(info.y.scrollLength) // Total scrollable length
  console.log(info.y.offset)       // Resolved offsets in pixels
  console.log(info.time)           // Timestamp
})
```

### Info Object Structure

```typescript
{
  time: number,
  x: AxisInfo,
  y: AxisInfo
}

// AxisInfo
{
  current: number,     // Current scroll position
  offset: number[],    // Resolved pixel offsets
  progress: number,    // 0-1 progress
  scrollLength: number,// Total scrollable distance
  velocity: number     // Scroll velocity
}
```

---

## Options

### container
Default: `window`

Track scroll of a specific element:

```javascript
const carousel = document.getElementById("carousel")

scroll(animation, { container: carousel })
```

### axis
Default: `"y"`

Track horizontal scroll:

```javascript
scroll(callback, { axis: "x" })
```

### target
Track an element's position within the viewport:

```javascript
const item = document.getElementById("hero")

scroll(animation, { target: item })
```

### offset
Default: `["start start", "end end"]`

Define intersection points between target and container:

```javascript
scroll(animation, {
  target: document.getElementById("section"),
  offset: ["start end", "end start"]
})
```

**Intersection Format:** `"<target-point> <container-point>"`

**Point Values:**
| Value | Description |
|-------|-------------|
| `"start"` | Top/Left (0) |
| `"center"` | Middle (0.5) |
| `"end"` | Bottom/Right (1) |
| `0` - `1` | Numeric progress |
| `"100px"` | Pixel value |
| `"50%"` | Percentage |
| `"50vh"` | Viewport units |

**Examples:**
```javascript
// Element enters viewport at bottom, exits at top
offset: ["start end", "end start"]

// Element in center of viewport
offset: ["center center", "center center"]

// 100px before entering to 100px after leaving
offset: ["start end", "end start"]

// Custom pixel offsets
offset: ["start 100px", "end -100px"]
```

### trackContentSize
Default: `false`

Automatically update when content size changes:

```javascript
scroll(callback, { trackContentSize: true })
```

---

## Common Patterns

### Parallax Effect
```javascript
import { animate, scroll } from "motion"

const parallax = animate(
  ".background",
  { y: [0, -200] },
  { ease: "linear" }
)

scroll(parallax)
```

### Progress Bar
```javascript
scroll((progress) => {
  document.querySelector(".progress-bar").style.scaleX = progress
})
```

### Fade Out Hero
```javascript
const fadeHero = animate(
  ".hero",
  { opacity: [1, 0] },
  { ease: "linear" }
)

scroll(fadeHero, {
  target: document.querySelector(".hero"),
  offset: ["start start", "end start"]
})
```

### Element Progress Tracking
```javascript
const section = document.querySelector(".feature-section")

scroll(
  animate(section, { opacity: [0, 1, 1, 0] }),
  {
    target: section,
    offset: [
      "start end",    // 0% - element top meets viewport bottom
      "start center", // 33% - element top meets viewport center
      "end center",   // 66% - element bottom meets viewport center
      "end start"     // 100% - element bottom meets viewport top
    ]
  }
)
```

### Horizontal Scroll Gallery
```javascript
const gallery = document.querySelector(".gallery")
const items = document.querySelectorAll(".gallery-item")

scroll(
  animate(items, { x: [0, -100 * (items.length - 1) + "vw"] }),
  { container: gallery, axis: "x" }
)
```

### Pinned Section Effect
Use `position: sticky` for best performance:

```html
<div class="pin-container" style="height: 300vh;">
  <div class="pinned-content" style="position: sticky; top: 0; height: 100vh;">
    <!-- Content -->
  </div>
</div>
```

```javascript
const container = document.querySelector(".pin-container")
const content = document.querySelector(".pinned-content")

scroll(
  animate(content.querySelector("h1"), { scale: [1, 2] }),
  { target: container }
)
```

### Scroll-Linked Color Change
```javascript
scroll((progress) => {
  const hue = progress * 360
  document.body.style.backgroundColor = `hsl(${hue}, 50%, 50%)`
})
```

### Multiple Animations on Same Scroll
```javascript
const target = document.querySelector(".hero")

// Fade
scroll(
  animate(".hero-text", { opacity: [1, 0] }),
  { target, offset: ["start start", "center start"] }
)

// Scale
scroll(
  animate(".hero-image", { scale: [1, 0.8] }),
  { target, offset: ["start start", "end start"] }
)

// Translate
scroll(
  animate(".hero-bg", { y: [0, -50] }),
  { target, offset: ["start start", "end start"] }
)
```

---

## Cancellation

```javascript
const cancel = scroll(callback)

// Later...
cancel()
```

---

## vs GSAP ScrollTrigger

| Feature | Motion scroll() | GSAP ScrollTrigger |
|---------|-----------------|-------------------|
| Bundle size | ~5kb | ~40kb |
| Hardware acceleration | ScrollTimeline API | requestAnimationFrame |
| Pinning | CSS `position: sticky` | Built-in |
| Scrub | Automatic | Manual config |
| Markers | No | Yes (debug) |

---

## Performance

Motion's `scroll()` uses the `ScrollTimeline` API when available, enabling:
- Hardware-accelerated animations
- No scroll event listeners
- Zero main thread work during scroll

For browsers without `ScrollTimeline`, it falls back to efficient scroll listeners.

### Best Practices

```javascript
// ✅ Use with animate() for hardware acceleration
scroll(animate(".box", { transform: "translateY(-100px)" }))

// ⚠️ Callback runs on main thread
scroll((progress) => {
  // Keep this light
  element.style.opacity = progress
})
```
