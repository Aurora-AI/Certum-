# Gesture Functions

> `hover()` and `inView()` for detecting user interactions and viewport visibility.

## Import

```javascript
import { hover, inView } from "motion"
```

---

# hover()

Detects hover gestures, filtering out fake touch device hover events that cause "stuck" UI states.

## Basic Usage

```javascript
hover(".button", (element) => {
  console.log("Hover started on", element)

  return () => console.log("Hover ended")
})
```

## With Animations

```javascript
import { animate, hover } from "motion"

hover(".card", (element) => {
  const animation = animate(element, { scale: 1.05 }, { type: "spring" })

  return () => {
    animation.stop()
    animate(element, { scale: 1 }, { type: "spring" })
  }
})
```

## Arguments

### Hover Start Callback
```javascript
hover("a", (element, startEvent) => {
  console.log("Element:", element)
  console.log("Mouse position:", startEvent.clientX, startEvent.clientY)
})
```

### Hover End Callback
```javascript
hover("a", (element) => {
  // Hover started

  return (endEvent) => {
    // Hover ended
    console.log("Left at:", endEvent.clientX, endEvent.clientY)
  }
})
```

## Options

### passive
Default: `true`

Set to `false` to enable `event.preventDefault()`:

```javascript
hover(element, callback, { passive: false })
```

### once
Default: `false`

Fire only once per element:

```javascript
hover(".tooltip-trigger", callback, { once: true })
```

## Cancel Hover Detection

```javascript
const cancelHover = hover(element, callback)

// Later...
cancelHover()
```

## Common Patterns

### Magnetic Button
```javascript
hover(".magnetic-btn", (element, event) => {
  const rect = element.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2

  const moveHandler = (e) => {
    const deltaX = (e.clientX - centerX) * 0.2
    const deltaY = (e.clientY - centerY) * 0.2
    animate(element, { x: deltaX, y: deltaY }, { type: "spring", stiffness: 150 })
  }

  document.addEventListener("mousemove", moveHandler)

  return () => {
    document.removeEventListener("mousemove", moveHandler)
    animate(element, { x: 0, y: 0 }, { type: "spring" })
  }
})
```

### Image Reveal
```javascript
hover(".image-container", (container) => {
  const overlay = container.querySelector(".overlay")
  animate(overlay, { opacity: 0 })

  return () => animate(overlay, { opacity: 1 })
})
```

### Text Underline
```javascript
hover("a.animated-link", (link) => {
  const underline = link.querySelector(".underline")
  animate(underline, { scaleX: 1, transformOrigin: "left" })

  return () => animate(underline, { scaleX: 0, transformOrigin: "right" })
})
```

---

# inView()

Detects when elements enter and leave the viewport. Built on the native `IntersectionObserver` API (~0.5kb).

## Basic Usage

```javascript
inView("section", (element) => {
  console.log(element, "entered viewport")
})
```

## With Animations

```javascript
import { animate, inView } from "motion"

inView(".card", (element) => {
  animate(element, { opacity: 1, y: 0 }, { duration: 0.6 })
})
```

## Arguments

### Enter Callback
```javascript
inView("section", (element, info) => {
  console.log("Element:", element)
  console.log("Intersection info:", info)  // IntersectionObserverEntry
})
```

### Leave Callback
```javascript
inView(".animated-section", (element, enterInfo) => {
  const animation = animate(element, { opacity: 1 })

  return (leaveInfo) => {
    animation.stop()
    animate(element, { opacity: 0 })
  }
})
```

**Note:** Returning a leave callback makes the gesture continuous (fires on every enter/leave).

## Options

### root
Default: `window`

Use a scrollable parent as the viewport:

```javascript
const carousel = document.querySelector("#carousel")

inView("#carousel li", callback, { root: carousel })
```

### margin
Default: `0`

Extend or contract viewport boundaries:

```javascript
// Trigger 100px before element enters
inView(element, callback, { margin: "100px 0px 100px 0px" })

// Shrink viewport (trigger later)
inView(element, callback, { margin: "-100px" })

// All sides
inView(element, callback, { margin: "50px" })
```

**Format:** `"top right bottom left"` (like CSS padding)

### amount
Default: `"some"`

How much of the element must be visible:

```javascript
// Any part visible (default)
inView(element, callback, { amount: "some" })

// Fully visible
inView(element, callback, { amount: "all" })

// 50% visible
inView(element, callback, { amount: 0.5 })

// Custom threshold (0-1)
inView(element, callback, { amount: 0.75 })
```

## Cancel Detection

```javascript
const stop = inView(element, callback)

// Later...
stop()
```

## Common Patterns

### Staggered Enter Animation
```javascript
import { animate, inView, stagger } from "motion"

inView(".card-grid", (container) => {
  const cards = container.querySelectorAll(".card")

  animate(cards,
    { opacity: [0, 1], y: [50, 0] },
    { delay: stagger(0.1) }
  )
})
```

### Lazy Load Images
```javascript
inView("img[data-src]", (img) => {
  img.src = img.dataset.src
  img.removeAttribute("data-src")
})
```

### Count Up Animation
```javascript
inView(".stat-number", (element) => {
  const target = parseInt(element.dataset.value)

  animate(0, target, {
    duration: 2,
    onUpdate: (value) => {
      element.textContent = Math.round(value)
    }
  })
})
```

### Video Autoplay
```javascript
inView("video.autoplay", (video) => {
  video.play()

  return () => video.pause()
}, { amount: 0.5 })
```

### Animate Once
```javascript
const animated = new Set()

inView(".animate-once", (element) => {
  if (animated.has(element)) return

  animated.add(element)
  animate(element, { opacity: 1, y: 0 })
})
```

### Section Progress Indicator
```javascript
const sections = document.querySelectorAll("section")
const indicators = document.querySelectorAll(".nav-indicator")

sections.forEach((section, index) => {
  inView(section, () => {
    indicators.forEach((ind, i) => {
      ind.classList.toggle("active", i === index)
    })
  }, { amount: 0.5 })
})
```

### Parallax on Scroll (Triggered)
```javascript
inView(".parallax-section", (section) => {
  const bg = section.querySelector(".bg")

  const handleScroll = () => {
    const rect = section.getBoundingClientRect()
    const progress = 1 - (rect.bottom / (window.innerHeight + rect.height))
    bg.style.transform = `translateY(${progress * 100}px)`
  }

  window.addEventListener("scroll", handleScroll)

  return () => window.removeEventListener("scroll", handleScroll)
})
```

---

# press() (Brief)

> Note: `press()` follows similar patterns to `hover()`.

```javascript
import { press } from "motion"

press(".button", (element, startEvent) => {
  animate(element, { scale: 0.95 })

  return () => animate(element, { scale: 1 })
})
```

---

## Comparison: inView vs scroll

| Use Case | Function |
|----------|----------|
| Trigger animation when element enters view | `inView()` |
| Bind animation progress to scroll position | `scroll()` |
| Play animation once on enter | `inView()` |
| Continuous value change while scrolling | `scroll()` |
| Lazy loading | `inView()` |
| Parallax effect | `scroll()` |
