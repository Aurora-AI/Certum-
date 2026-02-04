# Implementation Plan: Hero Remaster (Sovereign Tier)

**Manager**: Project Manager
**Agents**: Visual Director (Nano Banana), Motion Engineer (Remotion)

## Goal
Replace the current Hero video with a custom-engineered "Event Horizon" video using Remotion and 8K Nano Banana assets.

## 1. Visual Director (Nano Banana)
Generate high-fidelity assets for the video sequence.
**Theme**: "Architecture of Wealth", "Sovereign Sanctuary", "Time as Asset".
**Requests**:
1. `sovereign_garage.png`: A dimly lit, concrete brutalist garage with a classic Porsche or Aston Martin. Focus on reflections and silence.
2. `time_vault.png`: A macro shot of a complex mechanical watch movement, gold and titanium, blending into a vault door.
3. `family_legacy.png`: (Already exists: family.png? Check if replacement needed. User uploaded `uploaded_media_1770215321788.png` - likely the 'family' image replacement.)
4. `abstract_math.png`: Abstract visualization of data streams or entropy, golden/black palette.

## 2. Motion Engineer (Remotion)
**Setup**:
- Install Remotion: `npm i remotion @remotion/cli @remotion/player`
- Create `src/remotion/Root.tsx` and `src/remotion/index.ts`.

**Composition**: `HeroSequence`
- **Duration**: 450 frames (15s @ 30fps).
- **Structure**:
    - **Scene 1 (0-4s)**: `sovereign_garage` (Slow pan + Zoom).
    - **Scene 2 (4-8s)**: `time_vault` (Rotation + Blur reveal).
    - **Scene 3 (8-12s)**: `abstract_math` (Parallax).
    - **Scene 4 (12-15s)**: `family_legacy` (Gentle Ken Burns, warm fade).
- **Effects**:
    - Film Grain (Noise).
    - Subtle Lens Distortion.
    - Title Overlay: "CENTRUM" matching the Hero HTML overlays.

## 3. Execution Steps
1. [ ] Install Remotion.
2. [ ] Generate Images (or use placeholders if generation is manual).
3. [ ] Code `HeroSequence`.
4. [ ] Render `public/assets/Hero_Remaster.mp4`.
5. [ ] Update `HeroSection.tsx`.
