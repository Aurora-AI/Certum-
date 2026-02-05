# Walkthrough: Visual Storytelling Architecture (Pivot)

## Goal
Migrate from a chat-centric `ProductConsole` to a **single-page visual narrative** for all Consórcio products, with Chat as an add-on.

---

## Changes Made to `/consorcio/page.tsx`

### 1. Pontual Interstitial (Hero Product)

Injected after the main Hero section. Highlights "Consórcio Pontual" as a distinct product.

- **Location:** After line 92 (after Hero section)
- **Visual:** Centered text, goldaccented "6 Meses", gradient background.
- **CTA:** "Simular Pontual" button.

### 2. Serviços Section

Typography-focused section for "Consórcio de Serviços".

- **Location:** After Motos & Náutica section.
- **Visual:** No image, kinetic typography, centered layout.
- **CTA:** "Explorar Serviços" button.

### 3. Seguros Footer Redesign

Replaced the 3-card bento grid with a single, powerful CTA block (Peak-End Rule).

- **Location:** Footer section.
- **Visual:** Large Shield icon, centered typography, single white button.
- **CTA:** "Conhecer Proteções".

### 4. ChatFAB Component

Created `src/components/agent/ChatFAB.tsx`:

- Floating Action Button in bottom-right.
- Opens a modal chat interface.
- Placeholder for AI integration (currently echoes messages).

---

## Whitespace Improvements

- Changed `space-y-48` to `space-y-64` for increased vertical rhythm.
- Changed `pb-48` to `pb-64`.

---

## Remaining Polish (Future)

- Replace `<img>` tags with Next.js `<Image />` for LCP optimization (warnings).
- Connect ChatFAB to actual AI backend.

---

## Verification

Navigate to `http://localhost:3000/consorcio` to see the new architecture:

1. **Pontual Interstitial** appears after the video hero.
2. **Serviços** section appears after Motos.
3. **Seguros** footer is a single, centered CTA block.
4. **ChatFAB** appears in the bottom-right corner.
