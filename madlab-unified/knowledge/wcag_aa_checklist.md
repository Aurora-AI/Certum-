# WCAG 2.1 AA Checklist (Nível Mad Lab S-Tier)

Este checklist não é recomendação, é **bloqueador**. A aprovação pelo Trustware exige 100% de conformidade. Componentes WebGL/Cinemáticos ricos não podem jamais ser desculpa para a inacessibilidade.

## 1. Navegação Háptica e Teclado
- [ ] Todo elemento interativo (Links, Buttons, Custom Cursors triggers) deve possuir um estado de `:focus-visible` explícito e projetado (Sovereign Focus, não o anel padrão do Chrome).
- [ ] A navegação por `[Tab]` deve seguir o fluxo visual natural do layout.
- [ ] Nada pode "prender" o usuário (Keyboard Traps). Toda modal deve ser capturável e cancelável com `[Esc]`.

## 2. Motion e Físicas
- [ ] Todo componente que use requestAnimationFrame, GSAP, WebGL ou CSS Animations longas deve ser condicionado ao manifesto `prefers-reduced-motion: reduce`.
- [ ] Físicas de loop infinito devem ser capazes de transicionar para um estado `paused` suavemente mediante solicitação ou falha de performance.

## 3. Semântica e Leitores de Tela (ARIA)
- [ ] Botões puramente iconográficos (ex. setas, hambúrguer) devem possuir `aria-label` ou texto `sr-only`.
- [ ] Componentes interativos complexos (Simulator, Grids 3D, Accordions) devem possuir os atributos `aria-expanded`, `aria-controls` e `role` adequados (ex: `role="slider"` para controles deslizantes).
- [ ] O contraste mínimo texto-fundo deverá ser 4.5:1 (texto regular) e 3:1 (textos em Display/Hero).

## 4. Estrutura do Documento (Gamma E. View)
- [ ] Nenhuma tag genérica `div` onde uma tag semântica `article`, `section`, `nav` ou `aside` possa ser usada.
- [ ] A hierarquia de Headings (`h1` até `h6`) não pode pular níveis (ex: Ir de `h2` para `h4`).
- [ ] Formulários (inclusive os simuladores do Mad Lab) devem ter `<label>` explícito e visível para cada `<input>`.
