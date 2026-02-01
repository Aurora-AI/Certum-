# 🕳️ BLACK HOLE HERO EFFECT

## Técnica: Event Horizon Reveal

Uma transição cinematográfica onde o Hero é "sugado" para um buraco negro central, revelando o conteúdo abaixo como se estivéssemos puxando uma toalha de mesa por um furo.

---

## 🔬 COMO FUNCIONA

### A Magia: CSS Mask + GSAP ScrollTrigger

```
┌─────────────────────────────────────────────────────────────┐
│                      CAMADAS DA PÁGINA                      │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   z-index: 100  ┌──────────────────────────────────────┐    │
│                 │         HERO LAYER (fixed)            │    │
│                 │                                       │    │
│                 │    ┌─────────────────────────────┐   │    │
│                 │    │      CSS MASK HOLE          │   │    │
│                 │    │    (expande com scroll)      │   │    │
│                 │    │          ⬤                  │   │    │
│                 │    └─────────────────────────────┘   │    │
│                 │                                       │    │
│                 └──────────────────────────────────────┘    │
│                              ↓                               │
│   z-index: 1    ┌──────────────────────────────────────┐    │
│                 │       CONTENT BELOW (normal flow)     │    │
│                 │                                       │    │
│                 │   (Revelado através do buraco)        │    │
│                 │                                       │    │
│                 └──────────────────────────────────────┘    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Código Essencial

```css
/* Hero fixo sobreposto */
.hero-layer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 100;
    
    /* O segredo: radial-gradient como mask */
    mask-image: radial-gradient(
        circle at 50% 50%,
        transparent 0%,      /* Centro: transparente (buraco) */
        black 0%             /* Borda: visível */
    );
}

/* Conteúdo em posição normal */
.content-below {
    position: relative;
    z-index: 1;
}

/* Espaçador para criar área de scroll */
.scroll-spacer {
    height: 100vh; /* Mesmo tamanho do hero */
}
```

```javascript
// GSAP ScrollTrigger atualiza o tamanho do buraco
ScrollTrigger.create({
    trigger: '.scroll-spacer',
    start: 'top top',
    end: 'bottom top',
    scrub: 1,
    onUpdate: (self) => {
        const progress = self.progress;
        const holeSize = progress * 150; // 0% → 150%
        
        heroLayer.style.maskImage = `radial-gradient(
            circle at 50% 50%,
            transparent ${holeSize}%,
            black ${holeSize + 5}%
        )`;
    }
});
```

---

## 🎭 VARIAÇÕES DISPONÍVEIS

### 1. Classic Circle (Original)
O buraco expande do centro uniformemente.
```javascript
const holeSize = easedProgress * 150;
mask-image: radial-gradient(circle at 50% 50%, transparent ${holeSize}%, black ${holeSize + 5}%);
```

### 2. Spiral Vortex
Conteúdo gira enquanto é sugado.
```javascript
heroContent.style.transform = `scale(${scale}) rotate(${rotation}deg)`;
```

### 3. Implode & Twist
Efeito 3D de ser puxado para dentro.
```javascript
heroContent.style.transform = `scale(${scale}) rotateX(${rotateX}deg) translateZ(${translateZ}px)`;
```

### 4. Gravitational Shatter
Múltiplos buracos criam efeito de vidro quebrado.
```javascript
mask-image: 
    radial-gradient(circle at 50% 50%, transparent ${hole1}%, black ${hole1 + 5}%),
    radial-gradient(circle at 30% 30%, transparent ${hole2}%, black ${hole2 + 3}%),
    radial-gradient(circle at 70% 70%, transparent ${hole3}%, black ${hole3 + 3}%);
```

---

## 📐 PARÂMETROS CONFIGURÁVEIS

```javascript
const config = {
    // Tamanho do buraco
    startHoleSize: 0,       // Início (0 = sem buraco)
    endHoleSize: 150,       // Fim (150 = hero totalmente engolido)
    
    // Suavidade da borda
    edgeSoftness: 5,        // Quanto maior, mais suave a transição
    
    // Posição do centro
    centerX: 50,            // % da largura
    centerY: 50,            // % da altura
    
    // Easing
    easing: 'power2.inOut', // Curva de animação
    
    // Duração do scrub
    scrubDuration: 1,       // Segundos de delay no scroll
};
```

---

## 🔗 INTEGRAÇÃO COM STITCH → CINEMATOGRAPHER

### No Código do Stitch

O Hero do Stitch deve ter esta estrutura:

```html
<!-- Hero como layer fixo -->
<div class="hero-layer" id="heroLayer">
    <div class="hero-content">
        <!-- Todo o conteúdo do hero aqui -->
    </div>
</div>

<!-- Conteúdo abaixo -->
<div class="content-below">
    <div class="scroll-spacer"></div> <!-- IMPORTANTE -->
    
    <section class="revealed-section">
        <!-- Conteúdo que será revelado -->
    </section>
</div>
```

### CSS Necessário no Stitch

```css
.hero-layer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 100;
}

.content-below {
    position: relative;
    z-index: 1;
}

.scroll-spacer {
    height: 100vh;
}
```

### Script do Cinematographer

O Cinematographer adiciona APENAS o script de animação:

```javascript
// BLACK HOLE CINEMATOGRAPHY
ScrollTrigger.create({
    trigger: '.scroll-spacer',
    start: 'top top',
    end: 'bottom top',
    scrub: 1,
    onUpdate: (self) => {
        const progress = self.progress * self.progress; // easeInQuad
        const holeSize = progress * 150;
        
        document.getElementById('heroLayer').style.maskImage = 
            `radial-gradient(circle at 50% 50%, transparent ${holeSize}%, black ${holeSize + 5}%)`;
    }
});
```

---

## ⚡ PERFORMANCE

### Otimizações Aplicadas

1. **will-change** no hero layer
```css
.hero-layer {
    will-change: mask-image;
}
```

2. **GPU acceleration** no conteúdo
```css
.hero-content {
    transform: translateZ(0);
}
```

3. **Pointer events** desabilitados quando buraco abre
```javascript
if (holeSize > 50) {
    heroLayer.style.pointerEvents = 'none';
}
```

4. **Mobile:** Simplificar ou desabilitar
```javascript
if (window.innerWidth < 768) {
    // Usar fade simples em vez de mask
}
```

---

## 🎯 CHECKLIST DE IMPLEMENTAÇÃO

```
□ Hero com position: fixed e z-index: 100
□ Conteúdo com z-index: 1
□ Scroll spacer com height: 100vh
□ GSAP + ScrollTrigger carregados
□ Lenis para smooth scroll
□ Mask-image com radial-gradient
□ Easing aplicado ao progress
□ Pointer events gerenciados
□ Mobile optimization
□ Testado em Safari (webkit prefix)
```

---

## 🌟 RESULTADO ESPERADO

1. **Scroll 0%:** Hero totalmente visível, sem buraco
2. **Scroll 25%:** Pequeno buraco no centro revelando conteúdo
3. **Scroll 50%:** Buraco médio, metade do hero visível
4. **Scroll 75%:** Buraco grande, hero quase sumindo
5. **Scroll 100%:** Hero completamente engolido, conteúdo 100% visível

A sensação é de **atravessar um portal** - o usuário literalmente "entra" na página.
