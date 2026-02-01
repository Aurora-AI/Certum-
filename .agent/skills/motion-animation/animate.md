# animate()

> The core animation function for Motion library.

## Import

```javascript
// Hybrid (full features)
import { animate } from "motion"

// Mini (2.3kb - HTML/SVG only)
import { animate } from "motion/mini"
```

## Basic Usage

### CSS Selector
```javascript
animate(".box", { rotate: 360 })
```

### Element Reference
```javascript
const box = document.getElementById("box")
animate(box, { opacity: 0 }, { duration: 0.5 })
```

### Multiple Elements
```javascript
const boxes = document.querySelectorAll(".box")
animate(boxes, { scale: 1.2 })
```

---

## Animatable Values

### CSS Properties
```javascript
animate(element, {
  opacity: 0.5,
  backgroundColor: "#ff0000",
  borderRadius: "50%",
  filter: "blur(10px)"
})
```

### Independent Transforms (Hybrid Only)
```javascript
animate(element, {
  x: 100,           // translateX
  y: 50,            // translateY
  z: 0,             // translateZ
  scale: 1.5,       // uniform scale
  scaleX: 2,        // horizontal scale
  scaleY: 0.5,      // vertical scale
  rotate: 45,       // rotation in degrees
  rotateX: 30,      // 3D rotation X
  rotateY: 60,      // 3D rotation Y
  rotateZ: 90,      // same as rotate
  skewX: 10,        // skew X
  skewY: 5,         // skew Y
  transformPerspective: 1000  // perspective
})
```

### CSS Variables (Hybrid Only)
```javascript
animate(element, { "--my-color": "#ff0000" })
animate(element, { "--rotate": "360deg" })
```

### SVG Path Drawing (Hybrid Only)
```javascript
animate("circle", { pathLength: [0, 1] })
animate("path", {
  pathLength: 1,    // 0-1 progress
  pathSpacing: 0.5, // gap between dashes
  pathOffset: 0.2   // offset start
})
```

### Single Values
```javascript
// Numbers
animate(0, 100, {
  duration: 1,
  onUpdate: (value) => console.log(value)
})

// Colors
animate("#fff", "#000", {
  duration: 2,
  onUpdate: (color) => element.style.color = color
})
```

### JavaScript Objects
```javascript
const position = { x: 0, y: 0 }
animate(position, { x: 100, y: 50 })

// Three.js example
const camera = new THREE.Camera()
animate(camera.rotation, { y: Math.PI * 2 }, { duration: 10 })
```

---

## Keyframes

### Array Syntax
```javascript
// Animate through multiple values
animate(element, {
  x: [0, 100, 50, 100],
  opacity: [0, 1, 1, 0]
})
```

### From → To
```javascript
animate(element, {
  scale: [0.5, 1.5]  // from 0.5 to 1.5
})
```

### Wildcard (Current Value)
```javascript
animate(element, {
  x: [null, 100]  // from current x to 100
})
```

---

## Options

### duration
Default: `0.3` (or `0.8` for multiple keyframes)

```javascript
animate(element, { x: 100 }, { duration: 1 })
```

### delay
Default: `0`

```javascript
animate(element, { opacity: 0 }, { delay: 0.5 })

// Negative delay starts animation partway through
animate(element, { x: 100 }, { delay: -0.5 })
```

### ease
```javascript
// Named easing
animate(element, { x: 100 }, { ease: "easeInOut" })

// Cubic bezier
animate(element, { x: 100 }, { ease: [.17, .67, .83, .67] })

// Custom function
animate(element, { x: 100 }, { ease: (t) => t * t })

// Multiple keyframes with different easings
animate(element,
  { x: [0, 100, 0] },
  { ease: ["easeIn", "easeOut"] }
)
```

**Available easing names:**
- `"linear"`
- `"easeIn"`, `"easeOut"`, `"easeInOut"`
- `"circIn"`, `"circOut"`, `"circInOut"`
- `"backIn"`, `"backOut"`, `"backInOut"`
- `"anticipate"`

### times
Control keyframe timing (values 0-1):

```javascript
animate(element,
  { x: [0, 100, 0] },
  { times: [0, 0.2, 1] }  // Hit 100 at 20% of duration
)
```

### repeat
Default: `0`

```javascript
animate(element, { rotate: 360 }, { repeat: 3 })        // 3 times
animate(element, { rotate: 360 }, { repeat: Infinity }) // forever
```

### repeatType
Default: `"loop"`

```javascript
// "loop" - restart from beginning
animate(element, { x: 100 }, { repeat: 2, repeatType: "loop" })

// "reverse" - alternate direction
animate(element, { x: 100 }, { repeat: 2, repeatType: "reverse" })

// "mirror" - swap start/end values
animate(element, { x: 100 }, { repeat: 2, repeatType: "mirror" })
```

### repeatDelay
Hybrid only. Pause between repetitions:

```javascript
animate(element, { scale: 1.5 }, { repeat: 3, repeatDelay: 0.5 })
```

---

## Spring Animations

### Duration-Based Spring
```javascript
animate(element, { scale: 1.2 }, {
  type: "spring",
  duration: 0.8,
  bounce: 0.25  // 0 = no bounce, 1 = very bouncy
})
```

### Physics-Based Spring
```javascript
animate(element, { rotate: 180 }, {
  type: "spring",
  stiffness: 300,  // higher = snappier
  damping: 20,     // higher = less oscillation
  mass: 1          // higher = more sluggish
})
```

### visualDuration
Makes springs easier to coordinate with other animations:

```javascript
animate(element, { x: 100 }, {
  type: "spring",
  visualDuration: 0.5,  // appears to reach target in 0.5s
  bounce: 0.3
})
```

### Spring Options Reference

| Option | Default | Description |
|--------|---------|-------------|
| `bounce` | 0.25 | Bounciness (0-1) |
| `duration` | 800ms | Animation duration |
| `visualDuration` | - | Override duration for visual timing |
| `stiffness` | 1 | Spring stiffness |
| `damping` | 10 | Opposing force (0 = infinite oscillation) |
| `mass` | 1 | Object mass |
| `velocity` | current | Initial velocity |
| `restSpeed` | 0.1 | End threshold for speed |
| `restDelta` | 0.01 | End threshold for distance |

### Mini + Spring
```javascript
import { animate } from "motion/mini"
import { spring } from "motion"

animate(element,
  { transform: "translateX(100px)" },
  { type: spring, bounce: 0.3 }
)
```

---

## Per-Value Options

Override options for specific properties:

```javascript
animate(element,
  { x: 100, opacity: 0 },
  {
    duration: 1,
    opacity: { duration: 0.3, ease: "easeOut" }
  }
)
```

---

## Timeline Sequences (Hybrid Only)

### Basic Sequence
```javascript
const sequence = [
  [".title", { opacity: 1 }],
  [".subtitle", { opacity: 1 }],
  [".content", { opacity: 1 }]
]

animate(sequence)
```

### With Options
```javascript
const sequence = [
  ["nav", { opacity: 1 }, { duration: 0.5 }],
  ["nav li", { x: 0 }, { duration: 0.3, ease: "easeOut" }]
]

animate(sequence, { repeat: 2 })
```

### Timing Control with `at`

```javascript
const sequence = [
  ["#a", { opacity: 1 }],

  // Specific time (seconds)
  ["#b", { x: 100 }, { at: 0.5 }],

  // Start with previous animation
  ["#c", { y: 50 }, { at: "<" }],

  // Relative to end of previous
  ["#d", { scale: 1.5 }, { at: "+0.2" }],  // 0.2s after
  ["#e", { rotate: 45 }, { at: "-0.1" }],  // 0.1s before end

  // Labels
  "my-label",
  ["#f", { opacity: 0 }],
  ["#g", { x: 200 }, { at: "my-label" }]  // starts at label
]
```

### Mixed Value Types
```javascript
import { motionValue } from "motion"

const color = motionValue("#f00")
const mesh = new THREE.Mesh()

const sequence = [
  [".box", { x: 100 }],
  [mesh.position, { y: 10 }],
  [color, "#00f"]
]

animate(sequence)
```

### Default Transition
```javascript
animate(sequence, {
  defaultTransition: { duration: 0.3, ease: "easeOut" }
})
```

---

## Controls

```javascript
const animation = animate(element, { opacity: 0 })
```

### Properties

| Property | Type | Description |
|----------|------|-------------|
| `duration` | number | Read-only animation duration |
| `time` | number | Get/set current time (seconds) |
| `speed` | number | Get/set playback speed |

```javascript
animation.time = 0.5      // Jump to 0.5 seconds
animation.speed = 2       // Double speed
animation.speed = -1      // Reverse playback
animation.speed = 0.5     // Half speed
```

### Methods

```javascript
animation.pause()    // Pause playback
animation.play()     // Resume/restart
animation.stop()     // Stop and commit styles
animation.cancel()   // Stop and revert to initial
animation.complete() // Jump to end state
```

### Promise API
```javascript
// Async/await
await animation
console.log("Animation complete!")

// Promise
animation.then(() => {
  console.log("Done!")
})
```

---

## Callbacks

### onUpdate (Single Values Only)
```javascript
animate(0, 100, {
  onUpdate: (value) => {
    element.textContent = Math.round(value)
  }
})
```

---

## Staggering

```javascript
import { animate, stagger } from "motion"

animate(".item", { opacity: 1 }, {
  delay: stagger(0.1)
})

// With start delay
animate(".item", { y: 0 }, {
  delay: stagger(0.1, { startDelay: 0.5 })
})

// From center
animate(".item", { scale: 1 }, {
  delay: stagger(0.05, { from: "center" })
})
```

See [utilities.md](./utilities.md) for full stagger documentation.

---

## Performance Tips

### Fastest Properties
```javascript
// GPU-accelerated
animate(element, {
  opacity: 1,
  transform: "translateX(100px) rotate(45deg)"
})
```

### For Hardware Acceleration
```javascript
// Use transform string instead of individual props
animate(element, { transform: "translateX(100px)" })

// Instead of
animate(element, { x: 100 })  // CSS variables, not accelerated
```

### Avoid
```javascript
// These trigger layout recalculation
animate(element, { width: "200px" })    // Slow
animate(element, { height: "100px" })   // Slow
animate(element, { top: "50px" })       // Slow
```
