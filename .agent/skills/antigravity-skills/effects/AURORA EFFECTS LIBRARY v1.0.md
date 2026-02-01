# 🎬 AURORA EFFECTS LIBRARY v1.0

## Biblioteca de Efeitos Cinematográficos para Websites Premium

Uma coleção curada de técnicas visuais extraídas de sites Awwwards-tier como Studio Dialect, Exoape, Fantasy.co e Talhaaclark.

---

## 📚 ÍNDICE DE EFEITOS

### 🌟 HEROES
| Efeito | Inspiração | Complexidade | Arquivo |
|--------|------------|--------------|---------|
| Black Hole Reveal | Original | ⭐⭐⭐ | `heroes/black-hole-reveal.html` |
| Spiral Vortex Hero | Original | ⭐⭐⭐⭐ | `heroes/spiral-vortex-hero.html` |
| Parallax Depth Stack | Exoape | ⭐⭐ | `heroes/parallax-depth-stack.html` |
| Text Mask Video | Fantasy | ⭐⭐⭐ | `heroes/text-mask-video.html` |
| 3D Cylinder Carousel | Studio Dialect | ⭐⭐⭐⭐ | `heroes/3d-cylinder-carousel.html` |

### 🔄 TRANSITIONS
| Efeito | Inspiração | Complexidade | Arquivo |
|--------|------------|--------------|---------|
| Page Wipe Reveal | Fantasy | ⭐⭐ | `transitions/page-wipe.html` |
| Zoom Through | Exoape | ⭐⭐⭐ | `transitions/zoom-through.html` |
| Clip Path Morph | Talhaaclark | ⭐⭐⭐ | `transitions/clip-path-morph.html` |
| Curtain Split | Studio Dialect | ⭐⭐ | `transitions/curtain-split.html` |

### 🍔 MENUS
| Efeito | Inspiração | Complexidade | Arquivo |
|--------|------------|--------------|---------|
| **Spiral Vortex Menu** | Original | ⭐⭐⭐⭐⭐ | `menus/spiral-vortex-menu.html` |
| Fullscreen Stagger | Exoape | ⭐⭐ | `menus/fullscreen-stagger.html` |
| 3D Flip Cards | Fantasy | ⭐⭐⭐ | `menus/3d-flip-cards.html` |
| Magnetic Hover | Studio Dialect | ⭐⭐ | `menus/magnetic-hover.html` |

### 🌌 BACKGROUNDS
| Efeito | Inspiração | Complexidade | Arquivo |
|--------|------------|--------------|---------|
| Noise Grain Overlay | Universal | ⭐ | `backgrounds/noise-grain.html` |
| Gradient Mesh Animate | Stripe | ⭐⭐ | `backgrounds/gradient-mesh.html` |
| Particle Field | Exoape | ⭐⭐⭐ | `backgrounds/particle-field.html` |
| WebGL Fluid | Talhaaclark | ⭐⭐⭐⭐ | `backgrounds/webgl-fluid.html` |

### 👆 INTERACTIONS
| Efeito | Inspiração | Complexidade | Arquivo |
|--------|------------|--------------|---------|
| Magnetic Cursor | Universal | ⭐⭐ | `interactions/magnetic-cursor.html` |
| Custom Cursor + Trail | Fantasy | ⭐⭐ | `interactions/cursor-trail.html` |
| Hover Reveal Image | Exoape | ⭐⭐⭐ | `interactions/hover-reveal-image.html` |
| Tilt 3D Cards | Talhaaclark | ⭐⭐ | `interactions/tilt-3d-cards.html` |

### 🎮 3D EFFECTS
| Efeito | Inspiração | Complexidade | Arquivo |
|--------|------------|--------------|---------|
| R3F Floating Objects | Exoape | ⭐⭐⭐⭐ | `3d-effects/r3f-floating.jsx` |
| Shader Distortion | Studio Dialect | ⭐⭐⭐⭐⭐ | `3d-effects/shader-distortion.html` |
| 3D Text Extrusion | Fantasy | ⭐⭐⭐⭐ | `3d-effects/3d-text-extrusion.html` |

---

## 🏗️ ESTRUTURA DOS ARQUIVOS

Cada efeito segue este template:

```
📁 [categoria]/[nome-efeito].html
│
├── <!-- METADATA -->
│   • Nome do efeito
│   • Inspiração/Referência
│   • Dependências (GSAP, Three.js, etc)
│   • Complexidade
│
├── <!-- HTML -->
│   • Estrutura mínima necessária
│   • Classes semânticas
│   • Data-attributes para controle
│
├── <!-- CSS -->
│   • Estilos base
│   • Variáveis customizáveis
│   • Responsividade
│
└── <!-- JAVASCRIPT -->
    • Código autocontido
    • Configurações no topo
    • Comentários explicativos
```

---

## 🔧 COMO USAR

### 1. Standalone (Teste/Demo)
```bash
# Abra diretamente no browser
open aurora-effects-library/heroes/black-hole-reveal.html
```

### 2. Integração com Stitch → Cinematographer
```markdown
1. Stitch gera o HTML base
2. Identifique qual efeito aplicar
3. Copie o <script> do efeito para o código
4. Ajuste os seletores CSS se necessário
```

### 3. Como Skill do Antigravity
```markdown
1. Faça upload da biblioteca como knowledge
2. No prompt, referencie: "Use o efeito [nome] da biblioteca"
3. O Antigravity aplicará o código correto
```

---

## 📊 DEPENDÊNCIAS POR EFEITO

| Efeito | GSAP | ScrollTrigger | Lenis | Three.js | R3F |
|--------|:----:|:-------------:|:-----:|:--------:|:---:|
| Black Hole | ✅ | ✅ | ✅ | ❌ | ❌ |
| Spiral Vortex | ✅ | ✅ | ✅ | ❌ | ❌ |
| 3D Carousel | ✅ | ✅ | ✅ | ✅ | ❌ |
| Floating Objects | ❌ | ❌ | ❌ | ✅ | ✅ |
| Shader Distortion | ✅ | ✅ | ✅ | ✅ | ❌ |

---

## 🎯 SITES DE REFERÊNCIA

### Tier S (Awwwards SOTD/SOTY)
- **Studio Dialect** - https://studiodialect.com/
- **Exoape** - https://www.exoape.com/
- **Fantasy** - https://fantasy.co/
- **Talhaaclark** - https://talhaaclark.com.au/

### Tier A (Awwwards Honorable)
- **Locomotive** - https://locomotive.ca/
- **Resn** - https://resn.co.nz/
- **Active Theory** - https://activetheory.net/

### Técnicas Específicas
- **Smooth Scroll**: Lenis, Locomotive Scroll
- **Animations**: GSAP, Framer Motion
- **3D**: Three.js, React Three Fiber
- **Shaders**: GLSL, ShaderToy

---

## 🚀 ROADMAP

### v1.0 (Atual)
- [x] Black Hole Reveal
- [x] Spiral Vortex (Hero + Menu)
- [ ] Parallax Depth Stack
- [ ] Magnetic Interactions

### v1.1 (Próximo)
- [ ] 3D Cylinder Carousel
- [ ] Text Mask Video
- [ ] WebGL Fluid Background
- [ ] Hover Reveal Images

### v2.0 (Futuro)
- [ ] R3F Components
- [ ] Custom Shaders
- [ ] Performance Presets
- [ ] Mobile Alternatives

---

## 📝 NOTAS IMPORTANTES

1. **Performance First**: Todos os efeitos são otimizados para 60fps
2. **Mobile Fallbacks**: Versões simplificadas incluídas
3. **Acessibilidade**: `prefers-reduced-motion` respeitado
4. **Modular**: Cada efeito funciona standalone
5. **Documentado**: Comentários explicativos em todo código