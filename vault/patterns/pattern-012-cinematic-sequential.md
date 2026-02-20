# PATTERN-012: Cinematic Sequential (Sticky Scroll)

## Metadata
- **ID**: PATTERN-012
- **Title**: Cinematic Sequential Portfolio (Sticky Scroll Narrative)
- **Status**: PRODUCTION-READY (S-Tier)
- **Type**: Component Architecture / UX Interaction
- **Dependencies**: 
  - `gsap`, `gsap/ScrollTrigger`
  - `globals.css` (Certum Prime Typography & `--ease-s-tier`)
  - `lucide-react` (or similar SVG icons)

## 1. Contexto & Problema
Listagens tradicionais (como *Bento Grids* ou matrizes de *cards* lado a lado) dispersam a atenção cognitiva de usuários em setores *High-Ticket* (Seguros de Luxo, Family Offices, Private Edge). O olhar salta ansiosamente pelo ecrã buscando informação, quebrando a autoridade ("Gravitas") que o design precisa transmitir.

## 2. Solução: Sticky Scroll "Monolítico"
Institui-se o padrão "Cinematic Sequential", onde a UI toma o controle do ritmo de absorção de dados do utilizador.

### 2.1. O Padrão Ouro (The Mechanics)
*   **A Fixação (Sticky Left/Background)**: O lado esquerdo da tela (ou o plano de fundo) recebe `position: sticky` e trava no `top: 0` com altura de `100vh` (`h-screen`). 
*   **O Roteiro (Scrolling Right/Foreground)**: O lado direito contém os blocos estruturais de texto detalhados. A altura desses blocos deve superar `100vh` para criar uma zona de *scroll* confortável e forçar a parada.
*   **O Motor de Estados (GSAP ScrollTrigger)**: Ao invés de CSS puro para onScroll state, utilizamos `gsap.ScrollTrigger` anexado a cada bloco de texto. Ele dita qual é o `activeIndex` global. 

## 3. A Física UI (Strict Rules)
A transição entre módulos (crossfade visual) não deve ser leviana ou linear.
*   **Easing**: Devemos usar CSS easing agressivo em saídas e profundo na chegada, padrão Certum Prime: `cubic-bezier(1, 0, 0, 1)` ou `Expo.easeOut` equivalente em tempo de duração longa (ex: `1000ms`).
*   **A "Respiração" Numérica**: O fundo da imagem sticky possui um número editorial enorme (ex: `01`) cortado pela borda com `opacity: 5%` (`text-white/5`).
*   **Escala Cinematográfica**: A imagem em plano de fundo inicia com `scale(1.05)` no seu estado inativo, resolvendo suavemente para `scale(1)` quando ativa (`duration-[3s] ease-out`), infundindo vida sutil na fotografia.

## 4. O Contrato de Estilo (Certum Prime CSS)
*   **Tipografia**: Obrigatório o uso do mix Tipográfico Certum: `font-display` (Playfair) enorme (ex: `text-[10vw]` ou `text-[4vw]`) para o Título da Seção, acompanhado de `font-body` (Inter) `font-light` para descrições longas.
*   **Destaques**: Marcações hierárquicas (labels de pilar e ícones isolados vazados) recebem a cor `--color-accent` (Wealth Gold).
*   **Espaço Negativo**: Paddings e margens calculados rigorosamente via Viewport Width `vw` ou Viewport Height `vh` (ex: `py-[10vh]`, `mb-[15vh]`) forçando espaço em branco editorial sem dependência cega de breakpoints padrão (`md`, `lg`).

## 5. Implementação Canônica em React/Next.js
O comportamento de scroll trigger deve ser montado no `useEffect` limpando o contexto GSAP ao desmontar o componente para previnir *memory leaks*. O estado reativo (`activeIndex`) governa a mutação do DOM via React clássico (`style={{ opacity: isActive ? 1 : 0.2 }}`).

## 6. Parecer Trustware
*   **Isolamento Cognitivo**: Válido. Foca inteiramente a decisão num pilar por vez sem ruído paralelo.
*   **Production First**: Componente performático se utilizar imagens otimizadas ou SVGs, sem sobrecarga de recálculos CSS via React. O *painiting* principal de transição flui via GPU com `opacity` e `transform`.
