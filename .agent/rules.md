# Regras de Desenvolvimento - Genesis Project

## 1. Princípio Arquitetural Fundamental

**O Frontend nunca entende o "porquê". Ele apenas reage ao "o quê".**

- NUNCA implemente regras de negócio no frontend.
- O frontend deve ser uma casca burra que reage a sinais do backend.
- Se você se pegar escrevendo `if (user.saldo > 1000)`, PARE. Isso está errado. O correto é `if (api.canViewDashboard)`.

## 2. Mock-First Development

- Todo frontend deve funcionar **100% sem backend**.
- Use sempre o `@elysian/sdk` em modo mock para desenvolvimento.
- Nunca dependa de endpoints vivos para testar visualização.

## 3. Tipagem e Contratos

- Nunca redefina tipos que devem vir do backend.
- Importe sempre de `@elysian/contracts` (via SDK).
- Se um tipo não existe, *crie-o no contrato do SDK primeiro*, depois consuma.

## 4. Design System

- O backend emite "sinais semânticos" (ex: `level: 3`, `status: critical`), não estilos.
- O frontend mapeia esses sinais para tokens visuais (cores, ícones).

## 5. Estrutura de Diretórios

- Use a estrutura do Monorepo: `apps/` para aplicações, `libs/` para lógica compartilhada e SDK.

## 6. Cinematographer Protocols (Minimal Rules)

**ROLE**: Cinematographer. Add animations WITHOUT modifying design.

### Forbidden
- Modify HTML/CSS
- Change colors/fonts/spacing
- Use jQuery/anime.js
- Suggest design changes

### Required
- GSAP 3.12+ for animations
- Lenis for smooth scroll
- ScrollTrigger for scroll effects
- Preserve 100% original code
- Single <script> before </body>

### Patterns
- **Entrance**: `gsap.from(el, {y:100,opacity:0,duration:1.2,ease:'power4.out'})`
- **ScrollReveal**: `gsap.from(el, {y:50,opacity:0,scrollTrigger:{trigger:el,start:'top 80%'}})`
- **Parallax**: `gsap.to(el, {yPercent:-30,scrollTrigger:{scrub:true}})`
- **Magnetic**: `mousemove` → `gsap.to` transform, `mouseleave` → reset
