# Text Effects - splitText()

> Split text into characters, words, and lines for stunning text animations.

**Note:** `splitText` is a Motion+ premium feature (~0.7kb).

## Installation

```bash
# Requires Motion+ membership token
npm install https://api.motion.dev/registry?package=motion-plus&version=2.4.0&token=YOUR_TOKEN
```

## Import

```javascript
import { splitText } from "motion-plus"
```

---

## Basic Usage

```javascript
const { chars, words, lines } = splitText("h1")

// Animate characters
animate(chars, { opacity: [0, 1] }, { delay: stagger(0.03) })
```

## What It Does

`splitText` wraps each character, word, and line in `<span>` elements with appropriate ARIA tags for accessibility.

**Before:**
```html
<h1>Hello World</h1>
```

**After:**
```html
<h1 aria-label="Hello World">
  <span class="split-word" data-index="0" aria-hidden="true">
    <span class="split-char" data-index="0">H</span>
    <span class="split-char" data-index="1">e</span>
    <span class="split-char" data-index="2">l</span>
    <span class="split-char" data-index="3">l</span>
    <span class="split-char" data-index="4">o</span>
  </span>
  <span class="split-word" data-index="1" aria-hidden="true">
    <span class="split-char" data-index="5">W</span>
    <!-- ... -->
  </span>
</h1>
```

---

## Return Value

```javascript
const result = splitText(element)

result.chars  // Array of character <span> elements
result.words  // Array of word <span> elements
result.lines  // Array of line <span> elements
```

---

## Options

### splitBy
Default: `" "` (space)

Custom word delimiter:

```javascript
// For text like "My+custom+text"
splitText(element, { splitBy: "+" })
```

### charClass
Default: `"split-char"`

```javascript
splitText(element, { charClass: "my-char" })
```

### wordClass
Default: `"split-word"`

```javascript
splitText(element, { wordClass: "my-word" })
```

### lineClass
Default: `"split-line"`

```javascript
splitText(element, { lineClass: "my-line" })
```

### preserveHyphens
Default: `false`

Preserve CSS hyphenation (disables character splitting):

```javascript
splitText(element, { preserveHyphens: true })
// Note: chars array will be empty
```

---

## Common Patterns

### Character-by-Character Reveal
```javascript
import { animate, stagger } from "motion"
import { splitText } from "motion-plus"

const { chars } = splitText("h1")

animate(chars,
  { opacity: [0, 1], y: [20, 0] },
  { duration: 0.5, delay: stagger(0.03) }
)
```

### Word-by-Word Animation
```javascript
const { words } = splitText(".tagline")

animate(words,
  { opacity: [0, 1], x: [-20, 0] },
  { delay: stagger(0.1) }
)
```

### Scatter Effect
```javascript
const { chars } = splitText("h1")

chars.forEach((char, i) => {
  const randomX = (Math.random() - 0.5) * 200
  const randomY = (Math.random() - 0.5) * 200
  const randomRotate = (Math.random() - 0.5) * 90

  animate(char,
    {
      x: [randomX, 0],
      y: [randomY, 0],
      rotate: [randomRotate, 0],
      opacity: [0, 1]
    },
    { duration: 0.8, delay: i * 0.02 }
  )
})
```

### Wavy Text
```javascript
const { chars } = splitText("h1")

animate(chars,
  { y: [0, -20, 0] },
  {
    duration: 0.6,
    delay: stagger(0.05, { from: "center" }),
    repeat: Infinity,
    repeatDelay: 1
  }
)
```

### Scroll-Triggered Text Reveal
```javascript
import { animate, inView, stagger } from "motion"
import { splitText } from "motion-plus"

// Hide initially with CSS
// .headline { visibility: hidden; }

inView(".headline", (element) => {
  element.style.visibility = "visible"
  const { words } = splitText(element)

  animate(words,
    { opacity: [0, 1], y: [30, 0], rotateX: [90, 0] },
    { delay: stagger(0.08), duration: 0.6 }
  )
})
```

### Line-by-Line Reveal
```javascript
const { lines } = splitText(".paragraph")

animate(lines,
  { opacity: [0, 1], y: [40, 0] },
  { delay: stagger(0.15), duration: 0.5 }
)
```

### Hover Effect on Words
```javascript
import { hover, animate } from "motion"
import { splitText } from "motion-plus"

const { words } = splitText("nav a")

hover(words, (word) => {
  animate(word, { y: -5, color: "#ff0000" }, { type: "spring" })

  return () => animate(word, { y: 0, color: "#000000" }, { type: "spring" })
})
```

### Typewriter Effect
```javascript
const { chars } = splitText("h1")

// Hide all characters initially
chars.forEach(char => char.style.opacity = "0")

// Reveal one by one
animate(chars,
  { opacity: 1 },
  { delay: stagger(0.05), duration: 0 }
)
```

### 3D Flip Characters
```javascript
const { chars } = splitText("h1")

// Set perspective on parent
document.querySelector("h1").style.perspective = "1000px"

animate(chars,
  {
    rotateX: [90, 0],
    opacity: [0, 1]
  },
  {
    delay: stagger(0.04),
    duration: 0.6,
    ease: "backOut"
  }
)

// Add transform-style to each char
chars.forEach(char => {
  char.style.display = "inline-block"
  char.style.transformOrigin = "bottom"
})
```

---

## CSS Styling

### Target Split Elements
```css
.split-char {
  display: inline-block;
}

.split-word {
  display: inline-block;
  white-space: nowrap;
}

.split-line {
  display: block;
}

/* Target specific indices */
.split-char[data-index="0"] {
  color: red;
}
```

### Fix for justify alignment
```css
.align-justify .split-line {
  display: flex;
  justify-content: space-between;
}
```

---

## Troubleshooting

### Flash of Unstyled Text (FOUT)

Hide content until animation starts:

```css
.animate-text {
  visibility: hidden;
}
```

```javascript
const element = document.querySelector(".animate-text")
element.style.visibility = "visible"

const { chars } = splitText(element)
animate(chars, { opacity: [0, 1] })
```

### Custom Fonts Loading

Wait for fonts to load:

```javascript
document.fonts.ready.then(() => {
  const { words } = splitText("h1")
  animate(words, { y: [-10, 0] }, { delay: stagger(0.04) })
})
```

### Links/Spans Being Removed

`splitText` doesn't preserve existing tags. Workaround:

```html
<h2>
  <span class="before">Before </span>
  <a href="#">Link</a>
  <span class="after"> After</span>
</h2>
```

```javascript
const chars = [
  ...splitText(".before").chars,
  ...splitText("a").chars,
  ...splitText(".after").chars
]

animate(chars, { opacity: [0, 1] }, { delay: stagger(0.02) })
```

### SVG `<text>` Not Supported

SVG text elements are not compatible with `splitText`.

---

## Performance Tips

```javascript
// ✅ Use inline-block for transforms
chars.forEach(char => {
  char.style.display = "inline-block"
})

// ✅ Add will-change for many elements
chars.forEach(char => {
  char.style.willChange = "transform, opacity"
})

// ✅ Clean up will-change after animation
animation.then(() => {
  chars.forEach(char => {
    char.style.willChange = "auto"
  })
})
```

---

## Alternative: Manual Text Splitting

If you don't have Motion+, here's a basic implementation:

```javascript
function splitTextManual(selector) {
  const element = document.querySelector(selector)
  const text = element.textContent
  const words = text.split(" ")

  element.innerHTML = ""
  element.setAttribute("aria-label", text)

  const wordElements = []
  const charElements = []

  words.forEach((word, wordIndex) => {
    const wordSpan = document.createElement("span")
    wordSpan.className = "split-word"
    wordSpan.dataset.index = wordIndex
    wordSpan.setAttribute("aria-hidden", "true")

    word.split("").forEach((char, charIndex) => {
      const charSpan = document.createElement("span")
      charSpan.className = "split-char"
      charSpan.dataset.index = charElements.length
      charSpan.textContent = char
      charSpan.style.display = "inline-block"

      wordSpan.appendChild(charSpan)
      charElements.push(charSpan)
    })

    element.appendChild(wordSpan)
    wordElements.push(wordSpan)

    // Add space between words
    if (wordIndex < words.length - 1) {
      element.appendChild(document.createTextNode(" "))
    }
  })

  return { chars: charElements, words: wordElements }
}
```
