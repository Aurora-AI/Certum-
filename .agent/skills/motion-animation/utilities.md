# Utility Functions

> Helper functions for advanced animation control: `stagger`, `spring`, `transform`, `mix`, `frame`, and `delay`.

## Import

```javascript
import {
  stagger,
  spring,
  transform,
  mix,
  frame,
  cancelFrame,
  delay
} from "motion"
```

---

# stagger()

Offset animations across multiple elements for natural, sequential effects.

## Basic Usage

```javascript
import { animate, stagger } from "motion"

animate("li", { opacity: 1 }, { delay: stagger(0.1) })
// First: 0s, Second: 0.1s, Third: 0.2s, etc.
```

## Options

### startDelay
Initial delay before staggering begins:

```javascript
stagger(0.1, { startDelay: 0.5 })
// First: 0.5s, Second: 0.6s, Third: 0.7s
```

### from
Origin point for stagger direction:

```javascript
// From first element (default)
stagger(0.1, { from: "first" })

// From last element
stagger(0.1, { from: "last" })

// From center, radiating outward
stagger(0.1, { from: "center" })

// From specific index
stagger(0.1, { from: 3 })
```

### ease
Redistribute timing with easing:

```javascript
// Cubic bezier
stagger(0.1, { ease: [.32, .23, .4, .9] })

// Named easing
stagger(0.1, { ease: "easeOut" })

// Custom function
stagger(0.1, { ease: (p) => Math.sin(p * Math.PI / 2) })
```

## Patterns

### Menu Items
```javascript
animate("nav li",
  { opacity: [0, 1], x: [-20, 0] },
  { delay: stagger(0.08) }
)
```

### Grid Animation (Center Out)
```javascript
animate(".grid-item",
  { scale: [0, 1], opacity: [0, 1] },
  { delay: stagger(0.05, { from: "center" }) }
)
```

### Reverse Stagger
```javascript
animate(".card",
  { y: [50, 0] },
  { delay: stagger(0.1, { from: "last" }) }
)
```

---

# spring()

Low-level spring generator for advanced use cases.

## Basic Usage

```javascript
import { spring } from "motion"

const generator = spring({ keyframes: [0, 100] })

// Sample at specific times (milliseconds)
const { value, done } = generator.next(500)
console.log(value) // Spring value at 500ms
```

## CSS Generation

Generate CSS `transition` timing:

```javascript
element.style.transition = `all ${spring({ bounce: 0.3 })}`
```

## Options

### Time Options
```javascript
spring({
  keyframes: [0, 100],
  duration: 800,        // Duration in milliseconds
  bounce: 0.25          // Bounciness (0-1)
})
```

### visualDuration
Override duration for visual coordination:

```javascript
spring({
  keyframes: [0, 100],
  visualDuration: 0.5,  // Appears to reach target in 0.5s
  bounce: 0.3
})
```

### Physics Options
```javascript
spring({
  keyframes: [0, 100],
  stiffness: 300,    // Higher = snappier
  damping: 20,       // Higher = less oscillation (0 = infinite)
  mass: 1,           // Higher = more sluggish
  velocity: 0,       // Initial velocity
  restSpeed: 0.1,    // End threshold (speed)
  restDelta: 0.01    // End threshold (distance)
})
```

## Sampling Loop

```javascript
const generator = spring({ keyframes: [0, 100], stiffness: 400 })
const output = []

let time = 0
let isDone = false

while (!isDone) {
  const { value, done } = generator.next(time)
  output.push(value)
  time += 16 // ~60fps
  if (done) isDone = true
}
```

## Use with Mini animate

```javascript
import { animate } from "motion/mini"
import { spring } from "motion"

animate(element,
  { transform: "translateX(100px)" },
  { type: spring, bounce: 0.3, duration: 0.8 }
)
```

---

# transform()

Map values from one range to another.

## Basic Usage

```javascript
import { transform } from "motion"

const scaleProgress = transform([0, 100], [0.5, 1.5])

scaleProgress(50)  // 1.0
scaleProgress(0)   // 0.5
scaleProgress(100) // 1.5
```

## Value Types

### Numbers
```javascript
const rotate = transform([0, 1], [0, 360])
rotate(0.5) // 180
```

### Colors
```javascript
const colorFade = transform([0, 100], ["#000", "#fff"])
colorFade(50) // "rgba(128, 128, 128, 1)"
```

### Complex Strings
```javascript
const shadow = transform(
  [0, 100],
  ["0px 0px 0px rgba(0,0,0,0)", "10px 10px 20px rgba(0,0,0,0.5)"]
)
```

## Multiple Keyframes

```javascript
const opacity = transform(
  [-100, 0, 100, 200],
  [0, 1, 1, 0]
)

opacity(-50)  // 0.5
opacity(50)   // 1
opacity(150)  // 0.5
```

## Options

### clamp
Default: `true`

Allow infinite mapping:

```javascript
const infinite = transform([0, 100], [0, 360], { clamp: false })
infinite(200) // 720
infinite(-50) // -180
```

## Use Cases

### Scroll Progress to Rotation
```javascript
import { scroll, transform } from "motion"

const progressToRotation = transform([0, 1], [0, 720])

scroll((progress) => {
  element.style.transform = `rotate(${progressToRotation(progress)}deg)`
})
```

### Mouse Position to Element Position
```javascript
const xToTranslate = transform([0, window.innerWidth], [-100, 100])
const yToTranslate = transform([0, window.innerHeight], [-50, 50])

document.addEventListener("mousemove", (e) => {
  element.style.transform = `translate(${xToTranslate(e.clientX)}px, ${yToTranslate(e.clientY)}px)`
})
```

---

# mix()

Interpolate between two values based on 0-1 progress.

## Basic Usage

```javascript
import { mix } from "motion"

const mixer = mix(0, 100)
mixer(0.5) // 50
```

## Value Types

### Numbers
```javascript
const num = mix(0, 100)
num(0.25) // 25
```

### Colors
```javascript
const color = mix("#000", "#fff")
color(0.5) // "rgba(128, 128, 128, 1)"

// Linear RGB mixing (no brightness dips)
const vibrant = mix("#ff0000", "#00ff00")
```

### Complex Strings
```javascript
const position = mix("0px 0px #fff", "100px 100px #000")
position(0.5) // "50px 50px rgba(128, 128, 128, 1)"
```

### Objects
```javascript
const obj = mix({ x: 0, y: 0 }, { x: 100, y: 50 })
obj(0.5) // { x: 50, y: 25 }
```

## Outside 0-1 Range

```javascript
const num = mix(0, 100)
num(2)   // 200
num(-1)  // -100
```

## With Easing

```javascript
import { mix, easeInOut } from "motion"

const num = mix(0, 100)
num(easeInOut(0.5)) // Eased value at midpoint
```

## Random Value Generation

```javascript
// Uniform distribution
const randomX = mix(0, 500, Math.random())

// Weighted toward higher values
import { easeOut } from "motion"
const biasedHigh = mix(0, 100, easeOut(Math.random()))

// Weighted toward lower values
import { easeIn } from "motion"
const biasedLow = mix(0, 100, easeIn(Math.random()))
```

---

# frame

Schedule callbacks on Motion's optimized animation loop.

## Import

```javascript
import { frame, cancelFrame } from "motion"
```

## Benefits

- Prevents layout thrashing
- Batches reads and writes
- Avoids multiple `requestAnimationFrame` overhead

## Steps

The animation frame is split into three steps:

| Step | Purpose | Example |
|------|---------|---------|
| `read` | Measure DOM | `getBoundingClientRect()` |
| `update` | Calculate values | Math, logic |
| `render` | Apply to DOM | `element.style.x = ...` |

## Usage

### Single Callback
```javascript
frame.render(() => {
  element.style.transform = "translateX(100px)"
})
```

### Read Then Write
```javascript
frame.read(() => {
  const { width } = element.getBoundingClientRect()

  frame.render(() => {
    element.style.width = `${width * 2}px`
  })
})
```

### Animation Loop
```javascript
let i = 0

function update() {
  i++
  element.style.transform = `rotate(${i}deg)`

  if (i >= 360) cancelFrame(update)
}

// Second argument true = keep running
frame.update(update, true)
```

## Cancel

```javascript
function myCallback() {
  console.log("Frame!")
}

frame.render(myCallback)
cancelFrame(myCallback)
```

---

# delay()

`setTimeout` alternative synced to Motion's animation loop.

## Basic Usage

```javascript
import { delay } from "motion"

delay(() => {
  console.log("1 second later!")
}, 1)
```

## Cancel

```javascript
const cancel = delay(callback, 0.5)

// Cancel before it fires
cancel()
```

## With Frame Batching

```javascript
import { delay, frame } from "motion"

delay(() => {
  // Read phase
  const { left } = element.getBoundingClientRect()

  // Write phase (batched)
  frame.render(() => {
    element.style.left = `${left * 2}px`
  })
}, 1)
```

## Sequence Delays

```javascript
delay(() => animate(".first", { opacity: 1 }), 0)
delay(() => animate(".second", { opacity: 1 }), 0.2)
delay(() => animate(".third", { opacity: 1 }), 0.4)
```

---

# Quick Reference Table

| Function | Purpose | Returns |
|----------|---------|---------|
| `stagger(duration, options?)` | Offset animation delays | Delay value for `animate` |
| `spring(options)` | Generate spring values | Generator |
| `transform(input[], output[], options?)` | Map value ranges | Transformer function |
| `mix(from, to)` | Interpolate values | Mixer function |
| `frame.read/update/render(callback, keepAlive?)` | Schedule frame callback | void |
| `cancelFrame(callback)` | Cancel scheduled callback | void |
| `delay(callback, seconds)` | Delayed callback | Cancel function |
