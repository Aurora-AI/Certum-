# Antigravity Prompt Templates

Templates prontos para gerar websites cinematográficos.

---

## Template Base (Copie e Adapte)

```markdown
# ANTIGRAVITY PROJECT: [Nome do Projeto]

## PROJECT SPECS
- **Framework**: [Next.js 14 / Astro / HTML + Vite]
- **Style Reference**: [Swiss Banking / Tech Brutal / Organic Luxury / Minimal Editorial]
- **Color Palette**: 
  - Primary: [hex]
  - Secondary: [hex]
  - Accent: [hex]
  - Background: [hex]
  - Text: [hex]
- **Typography**:
  - Display: [Font Name] (for headlines)
  - Body: [Font Name] (for paragraphs)
- **Animation Stack**: GSAP + ScrollTrigger + Lenis

---

## SECTION 1: HERO
**Purpose**: [First impression, communicate value proposition]
**Layout**: [Split / Centered / Immersive]
**Height**: 100vh
**Background**: [solid color / gradient / image / video]

### Elements:
1. **Logo**
   - Position: top-left
   - Size: 40px height
   - Animation: fade-in, 0.3s delay

2. **Headline**: "[Your headline text]"
   - Font: Display, [size]
   - Treatment: [uppercase / normal]
   - Animation: split-text reveal, char stagger 0.02s

3. **Subline**: "[Your subline text]"
   - Font: Body, [size]
   - Animation: fade-up, starts after headline completes

4. **CTA Button**: "[Button text]"
   - Style: [filled / outlined / text-only]
   - Hover: [describe effect]
   - Animation: scale-in from 0.8, 0.5s delay after subline

5. **Scroll Indicator**
   - Position: bottom-center
   - Style: [arrow / line / mouse icon]
   - Animation: subtle bounce loop

### Load Sequence:
1. Background fades in (0.5s)
2. Logo appears (0.3s delay)
3. Headline reveals char by char (0.5s delay, 0.8s duration)
4. Subline fades up (after headline)
5. CTA scales in (0.3s after subline)
6. Scroll indicator appears (1s after load)

### Scroll Behavior:
- Parallax: headline moves up faster than background
- Exit: fade out + slight scale up as user scrolls past 50vh

### Transition to Section 2:
- Type: [fade / wipe / parallax-push]
- Duration: scroll-linked

---

## SECTION 2: [FEATURES / SERVICES / ABOUT]
**Purpose**: [Explain core offering]
**Layout**: [Bento Grid / Cards Row / Alternating]
**Height**: auto (content-based)
**Background**: [contrasting color from hero]

### Elements:
1. **Section Title**: "[Title]"
   - Animation: fade-up on scroll enter

2. **Feature Cards** (×3-6):
   - Content: [icon + title + description]
   - Layout: [grid / horizontal scroll]
   - Animation: staggered reveal, 0.15s between each
   - Hover: [lift + shadow / border glow / scale]

3. **Supporting Image/Visual**
   - Position: [right / left / background]
   - Animation: [parallax / reveal mask / scale]

### Scroll Animation:
- Cards enter view: staggered fade-up from bottom
- Start: when section top hits 80% viewport

### Transition to Section 3:
- Type: [describe]

---

## SECTION 3: [SHOWCASE / PORTFOLIO / CASE STUDIES]
**Purpose**: [Show proof/examples of work]
**Layout**: [Horizontal Scroll / Masonry / Full-width slides]
**Height**: [100vh pinned / auto]

### Elements:
1. **Section Intro**
   - Small title + description
   - Animation: fade-up

2. **Project Items** (×4-8):
   - Content: [image + title + category]
   - Animation: [describe reveal]
   - Interaction: [hover zoom / click to expand]

### Scroll Animation:
- [If horizontal scroll: describe behavior]
- [If pinned: describe scrub animation]

---

## SECTION 4: [TESTIMONIALS / SOCIAL PROOF]
**Purpose**: [Build trust]
**Layout**: [Carousel / Grid / Single featured]
**Height**: auto
**Background**: [subtle contrast]

### Elements:
1. **Quote Text**: large, prominent
2. **Author Info**: name, role, company
3. **Navigation**: [arrows / dots / swipe]

### Animation:
- Quote: [typewriter / fade-in]
- Transition between quotes: [slide / crossfade]

---

## SECTION 5: [CTA / CONTACT]
**Purpose**: [Convert visitor to action]
**Layout**: [Centered / Split]
**Height**: 80vh
**Background**: [bold contrast color]

### Elements:
1. **Headline**: "[Strong CTA headline]"
   - Animation: split-text reveal

2. **Supporting Text**: brief, compelling
   - Animation: fade-up

3. **Primary CTA**: [button / form]
   - Animation: attention-grabbing entrance
   - Hover: [magnetic / glow / scale]

4. **Secondary CTA**: [link / alternative action]

---

## FOOTER
**Layout**: [Minimal / Detailed]
**Content**: [Logo, links, social, legal]
**Animation**: subtle fade-up on scroll

---

## GLOBAL SETTINGS

### Smooth Scroll
- Library: Lenis
- Duration: 1.2
- Easing: exponential

### Cursor
- Type: [default / custom circle / hidden]
- Hover states: [if custom, describe changes]

### Loading Screen
- Type: [none / logo animation / progress bar]
- Duration: [time or content-based]

### Mobile Considerations
- Animations: simplified (reduce parallax, simpler reveals)
- Touch: swipe support where relevant

---

## ANIMATION GUIDELINES

### Timing
- Default duration: 0.8s
- Stagger between elements: 0.1-0.15s
- Scroll trigger start: top 80%

### Easing
- Reveals: power3.out
- Hovers: power2.out
- Exits: power2.inOut

### Principles
1. Never animate more than 3 things simultaneously
2. Stagger everything
3. Faster is usually better
4. Exit animations are as important as entrances
```

---

## Style Presets

### Swiss Private Banking
```markdown
## STYLE: Swiss Private Banking

### Visual Characteristics
- Extreme whitespace
- Serif typography for headlines
- Thin lines and borders
- Muted color palette (cream, charcoal, gold accents)
- Subtle grain texture
- Understated animations

### Color Palette
- Background: #FAFAF8 (warm white)
- Text: #1A1A1A (soft black)
- Accent: #C9A962 (muted gold)
- Secondary: #666666 (gray)

### Typography
- Display: Editorial New, Freight Display, or Playfair Display
- Body: Suisse Int'l, Helvetica Neue, or Graphik

### Animation Style
- Very subtle
- Slow, confident reveals
- Minimal movement
- Easing: power2.out (smooth, not dramatic)

### Key Elements
- Thin horizontal rules
- Generous padding (100px+ sections)
- Centered layouts
- Elegant hover underlines
```

### Tech Brutal
```markdown
## STYLE: Tech Brutal

### Visual Characteristics
- High contrast (black/white dominant)
- Bold sans-serif typography
- Grid-based layouts
- Raw, unpolished aesthetic
- Visible grid lines
- Fast, punchy animations

### Color Palette
- Background: #000000 (pure black)
- Text: #FFFFFF (pure white)
- Accent: #FF0000 or #00FF00 (vibrant)
- Secondary: #333333 (dark gray)

### Typography
- Display: Monument Extended, Neue Machina, or ABC Diatype
- Body: IBM Plex Mono, JetBrains Mono, or Space Mono

### Animation Style
- Fast, snappy
- Glitch effects
- Hard cuts (no easing or linear)
- Oversized text reveals

### Key Elements
- Monospace text
- Visible borders/outlines
- Uppercase headlines
- Technical grid overlays
```

### Organic Luxury
```markdown
## STYLE: Organic Luxury

### Visual Characteristics
- Soft, rounded shapes
- Warm earth tones
- Flowing animations
- Natural textures
- Generous curves
- Slow, fluid movements

### Color Palette
- Background: #F5F0EB (warm cream)
- Text: #2C2416 (warm brown)
- Accent: #8B7355 (terracotta)
- Secondary: #D4C4B0 (sand)

### Typography
- Display: Cormorant, Bodoni, or Marcellus
- Body: Lora, Source Serif, or Crimson Text

### Animation Style
- Slow, flowing
- Soft easing (elastic.out)
- Morph/blob animations
- Parallax with depth

### Key Elements
- Organic shapes (blobs)
- Soft shadows
- Rounded corners
- Natural imagery
```

### Minimal Editorial
```markdown
## STYLE: Minimal Editorial

### Visual Characteristics
- Magazine-like layouts
- Strong typography hierarchy
- Black and white dominant
- Dramatic whitespace
- Large type scales
- Refined animations

### Color Palette
- Background: #FFFFFF (white)
- Text: #000000 (black)
- Accent: #FF4500 (editorial red) or none
- Secondary: #767676 (gray)

### Typography
- Display: GT Sectra, Canela, or Noe Display
- Body: Untitled Sans, Neue Haas Grotesk, or Akkurat

### Animation Style
- Sophisticated
- Line-by-line reveals
- Slow crossfades
- Elegant page transitions

### Key Elements
- Large display type (100px+)
- Editorial grid
- Pull quotes
- Image with text overlay
```

---

## Quick Prompts

### Landing Page (Single Product)
```
Create a single-page landing for [Product Name].

Style: [Choose preset]
Sections: Hero → Features (3) → How it Works → Testimonial → CTA
Hero: Centered headline + product visual
Animations: GSAP scroll-triggered reveals, Lenis smooth scroll
CTA: Bold, contrasting button with magnetic hover
```

### Portfolio Site
```
Create a portfolio site for [Name/Studio].

Style: [Choose preset]
Sections: Hero → Selected Work (horizontal scroll) → About → Contact
Hero: Name as giant typography, minimal
Work: 4-6 projects with image reveals and hover info
Animations: Image mask reveals, cursor follower
```

### Agency Site
```
Create an agency website for [Agency Name].

Style: [Choose preset]
Sections: Hero (video bg) → Services Bento → Case Studies → Team → Contact
Hero: Full-screen video with overlay text
Services: Bento grid with hover expansions
Case Studies: Pinned horizontal scroll
Animations: Complex scroll choreography, page transitions
```

### SaaS Product
```
Create a SaaS landing page for [Product Name].

Style: Tech Brutal or Minimal Editorial
Sections: Hero (split) → Features Grid → Integrations → Pricing → CTA
Hero: Headline left, product screenshot right
Features: 6-card grid with icons
Pricing: 3 tiers with comparison
Animations: Snappy reveals, micro-interactions on pricing hover
```

---

## Iteration Prompts

Use these when refining generated output:

### Timing Adjustments
```
Make the hero animations faster - reduce all durations by 30%
```

```
Increase stagger between card reveals from 0.1s to 0.2s for more drama
```

```
The section transitions feel too slow - make them snappier
```

### Visual Refinements
```
Add a subtle grain overlay to the entire page (opacity 0.03)
```

```
Make the headline bigger - increase by 20%
```

```
Change the CTA button to have a magnetic hover effect
```

### Animation Changes
```
Replace the fade-up animation on Section 2 cards with a horizontal slide-in from left
```

```
Add a parallax effect to the hero background image
```

```
Make the section titles reveal with a mask wipe instead of fade
```

### Section-Specific
```
Section 3 needs more visual interest - add floating decorative elements
```

```
The testimonial section feels flat - add a subtle background gradient animation
```

```
Hero scroll transition is jarring - make it a smooth parallax fade
```

---

*Prompt Templates v1.0 - Antigravity Skills*
