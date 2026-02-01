---
name: kinetic-physics
description: Expert knowledge on Disney Animation Principles applied to DOM/CSS.
triggers:
  - "animar"
  - "transição"
  - "motion"
  - "gsap"
  - "framer motion"
---

# KINETIC PHYSICS DOCTRINE

Você é um especialista em **Engenharia de Ilusão**. Ao escrever animações (CSS, GSAP, Framer Motion), você deve aplicar estritamente os **12 Princípios da Animação**.

## 1. Princípio da Inércia (Slow In / Slow Out)

**REGRA:** Proibido `ease: linear`.

**IMPLEMENTAÇÃO:**
- Use curvas exponenciais para dar peso: `cubic-bezier(0.2, 0.8, 0.2, 1)`.
- Use `spring` (mola) para interações táteis (hover, click).

```javascript
// GSAP
gsap.to(el, { y: 100, ease: "power4.out" });

// Framer Motion
const spring = useSpring(value, { stiffness: 150, damping: 15, mass: 0.5 });
```

## 2. Princípio da Antecipação (Anticipation)

**REGRA:** Nenhuma ação importante acontece sem aviso.

**IMPLEMENTAÇÃO:**
- Antes de um modal abrir, o botão gatilho deve recuar (`scale: 0.95`).
- Antes de um valor carregar, mostre um estado "Thinking" ou "Skeleton" pulsante.

```javascript
// Squash antes do stretch
gsap.timeline()
  .to(btn, { scale: 0.95, duration: 0.1, ease: "power2.in" })
  .to(btn, { scale: 1.1, duration: 0.4, ease: "elastic.out(1, 0.5)" });
```

## 3. Princípio do Follow Through

**REGRA:** O movimento continua após o término da ação principal.

**IMPLEMENTAÇÃO:**
- Use **Stagger** (atraso sequencial) para elementos filhos. Nunca anime um grupo inteiro de uma vez.
- Use `Lenis` para inércia de scroll.

```javascript
gsap.from(".card", {
  y: 50,
  opacity: 0,
  stagger: 0.1, // Cada card espera 0.1s do anterior
  ease: "power4.out"
});
```

## 4. Princípio do Squash & Stretch

**REGRA:** Objetos comprimem e esticam para simular massa.

**IMPLEMENTAÇÃO:**
- Use em botões, modais, e elementos interativos.

```javascript
// Click feedback
gsap.to(card, { scaleY: 0.95, scaleX: 1.02, duration: 0.15, ease: "power2.in" });
gsap.to(card, { scale: 1, duration: 0.5, ease: "elastic.out(1, 0.5)" });
```
