# Implementation Plan: Hero Remaster v2 (Refinement)

**Manager**: Project Manager
**Feedback**: "Clearer, inviting, happy", "Translate to PT", "Remove redundant CENTRUM".

## 1. Visual Director (Nano Banana) - NEW PROMPTS
Shift from "Dark/Brutalist" to "Bright/Sovereign/Daylight".
- **Garage**: `sovereign_garage_bright.png` -> A bright, modern glass garage with a white or silver luxury car (Porsche/Aston). Daylight, nature visible outside, clean white concrete, inspiring.
- **Watch**: `time_vault_bright.png` -> Macro of a watch mechanism on a white/marble surface, bright natural light, gold accents. Clean and sophisticated.
- **Math**: `abstract_math_bright.png` -> White and Gold data visualization, airy, light particles, flowing. Not dark matrix.

## 2. Motion Engineer (Remotion)
- **Update Sources**: Use new bright images.
- **Update Text**:
    - "Silence" -> "Silêncio"
    - "Precision" -> "Precisão"
    - "Entropy" -> "Entropia" (Maybe "Conexão"? User said "Entropy" in original, but "Entropia" is the translation. Will stick to translation).
    - "Legacy" -> "Legado"
- **Overlay**: Remove the dark vignette overlay, maybe use a light gradient `rgba(255,255,255,0.2)`.

## 3. Frontend Engineer
- **HeroSection.tsx**:
    - Remove `<h1 ...>CENTRUM</h1>` (Redundant with Header).
    - Keep `<p>Architecture of Wealth</p>` (maybe make it larger).
    - Ensure video overlay allows bright video to shine (remove `opacity-60` or black overlays).

## Execution Steps
1. [ ] Generate Bright Images.
2. [ ] Update `HeroSequence.tsx`.
3. [ ] Render `Hero_Remaster_v2.mp4`.
4. [ ] Edit `HeroSection.tsx`.
