---
name: Effects Bank
description: A technical catalog of 25 disruptive visual effects (FX-01 to FX-25) for the Aurora ecosystem.
---

# Effects Bank (Sovereign Edition)

> "25 efeitos disruptivos projetados para quebrar pelo menos uma lei da física visual."

## Categorias

### Z-AXIS DEPTH (A tela ganha dimensão)
- **FX-01 DimensionalRift Scroll**: Scroll empurra a câmera (Three.js).
- **FX-02 Parallax Volumetric Layers**: Camadas profundas via CSS/GSAP.
- **FX-03 Depth-of-Field Focus**: Foco seletivo (Blur) em elementos ativos.
- **FX-04 Z-Collapse Card Stack**: Cards empilhados em Z que se revelam.
- **FX-05 Camera Orbit Showcase**: Scroll orbita um objeto 3D.

### MATERIAL & SHADER (A matéria digital ganha propriedades)
- **FX-06 Mesh Distortion Field**: Superfícies elásticas ao toque.
- **FX-07 Glass Refraction Layer**: Vidro físico com refração (transmission).
- **FX-08 Liquid Morph Transition**: Matéria derrete e solidifica em transições.

### TYPOGRAPHY (Texto com corpo e energia)
- **FX-09 Extrusion Typography**: Títulos 3D com luz e sombra reais.
- **FX-10 Kinetic Text Scatter**: Caracteres explodem e recompoem.
- **FX-11 Depth Stagger Reveal**: Texto emerge de um abismo (Z negativo).

### SCROLL PHYSICS (Velocidade tem consequência)
- **FX-12 Scroll Velocity Distortion**: Distorção proporcional à velocidade (Lenis).
- **FX-13 Infinite Depth Canvas**: Fundo infinito gerado proceduralmente.
- **FX-14 Scroll-Driven Camera Path**: Câmera segue trilho 3D.

### HOVER & INTERACTION (Magnetismo e Levitação)
- **FX-15 Magnetic Cursor Pull**: Elementos atraídos pelo cursor.
- **FX-16 3D Card Tilt**: Cartões inclinam com luz especular.
- **FX-17 Gravity Shift Hover**: Levitação física ao hover.

### PARTICLE & GENERATIVE (Sistemas vivos)
- **FX-18 Cursor Galaxy Trail**: Rastro de partículas no cursor.
- **FX-19 Reactive Particle Field**: Background canônico vivo.
- **FX-20 Audio-Reactive Mesh**: Geometria pulsa com áudio.

### TRANSITION & NAV (Continuidade espacial)
- **FX-21 Portal Page Transition**: Elemento expande para nova página.
- **FX-22 Dimensional Curtain**: Seções abrem revelando profundidade.

### ADVANCED 3D (Simulação física)
- **FX-23 Cloth Physics Text**: Texto bandeira (simulação de tecido).
- **FX-24 Fractal Depth Generator**: Zoom infinito em fractal.
- **FX-25 Spatial UI Float**: Hierarquia Z explícita na UI (Modais > Tooltips > Content).

---

## Detalhes de Implementação

### FX-01 DimensionalRift Scroll
**Tech**: Three.js + GSAP + Lenis
**Descrição**: Scroll não move a pagina Y, mas avança a câmera em Z (-200 a -2000). Fog volumétrico aumenta com a profundidade.
**Trustware Gate**: Remover o efeito quebra a narrativa espacial. Válido.

### FX-12 Scroll Velocity Distortion (Essential)
**Tech**: Lenis + GSAP
**Descrição**: Velocidade do scroll afeta `scaleY` (stretch) e `skewY` dos elementos.
**Parâmetros**:
- Strength: 0.05 (sutil)
- Max Skew: 15deg
- Friction: 0.1

### FX-15 Magnetic Cursor Pull
**Tech**: GSAP
**Descrição**: Botões e links têm um campo magnético (raio 100px). O elemento se desloca em direção ao mouse antes do hover real.
**Parâmetros**:
- Radius: 100px
- Force: 0.3

### FX-19 Reactive Particle Field (Canon Background)
**Tech**: Three.js / Canvas
**Descrição**: Partículas flutuantes que reagem sutilmente ao scroll (paralaxe) e mouse (repulsão suave).
**Status**: Obrigatório em todas as páginas Aurora como "respiração" do sistema.

(Consulte o documento original `effects-bank.docx` ou a memória do sistema para detalhes completos de cada efeito).
