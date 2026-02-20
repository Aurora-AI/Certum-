---
name: Effects Component Registry
description: Inventário S-Tier dos efeitos canônicos já existentes.
---

# Component Registry (Catálogo de Efeitos Mad Lab)

Antes de gerar código novo para o produto (via *Gamma* / *Cinematographer*), consulte este registro. **Reuso auditado** é mais rápido e confiável que geração inédita.

## Efeitos Principais Disponíveis no Produto:

1. **`VolumetricBackground.tsx`** (Efeito WebGL/ThreeJS)
   - *Localização:* `src/components/canvas/VolumetricBackground.tsx`
   - *Custo:* Alto (GPU Compute). 
   - *Uso:* Atmosfera volumétrica de fundo (Deep Void). Substitui o vídeo em páginas internas.

2. **`InfinityParticles.tsx`** (Efeito Matemático DOM/Shader)
   - *Localização:* `src/components/canvas/InfinityParticles.tsx`
   - *Custo:* WebGL Shaders (Física GPGPU). Não use em mobile se não houver Fallback agressivo.
   - *Uso:* Partículas giratórias na Home.

3. **`MagneticButton`** (Efeito GSAP)
   - *Localização:* Dentro de CTAs e Navigations (`DisneyFollowThrough` physics).
   - *Custo:* Baixo (DOM transform).
   - *Uso:* Qualquer interação primária que ressoe a lei do magnetismo/luxo.

4. **`KineticCard`** (Tilt Hover 3D)
   - *Localização:* `src/components/pontual/PontualComparison.tsx`
   - *Custo:* Médio (`quickTo` GSAP, CSS 3D Transforms).
   - *Uso:* Cartões da interface Bento Grid ou Pricing. Responde ao cursor (Ghost Kinetic).

5. **`SovereignCursor`** (Blend Mode Overlay)
   - *Localização:* `src/components/ui/SovereignCursor.tsx`
   - *Custo:* Médio (Força o repainting constante do blend-mode `difference` ou `exclusion`).
   - *Uso:* A lente microscópica sobre todo o site (Deve desligar em Mobile/Touch).
