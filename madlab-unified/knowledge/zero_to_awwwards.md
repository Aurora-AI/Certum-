# Zero-to-Awwwards Workflow

Metodologia oficial de excelência do Mad Lab Aurora. Este é o caminho obrigatório para garantir que um efeito, componente ou interface alcance a avaliação S-Tier requerida (Score > 8.0) antes de promoção para o `vault/`.

## Criteriom de Avaliação (O Que os Juízes Procuram)
1. **Design (8.0+):** Hierarquia, uso mestre do White Space, Tipografia expressiva, Paleta harmoniosa.
2. **Creativity (8.0+):** Inovação técnica (ex: WebGPU Compute Shaders, Física Cinética) sem sacrificar usabilidade.
3. **Usability (8.0+):** Navegação impecável (Incluso teclado), feedback claro.
4. **Developer (8.0+):** Performance (60fps), acessibilidade correta (ARIA), sem layout shifts, sem console errors.

## O Pipeline Zero-to-Awwwards

### Fase 1: Escopo e Fundação (Alpha V. + Gamma E.)
- **Cognitive Mapping:** Alinhar o objetivo aos axiomas de Sugarman.
- **Visual Design Spec (VDS):** Contrato em JSON contendo layouts, Motion Budget estrito e Core Web Vitals Targets.
- **Decisão Arquitetural WebGL/DOM:** O efeito precisa ser DOM puro? Canvas 2D? Onde a performance impõe limites?

### Fase 2: Física Cinética e Motion (Beta P. + Cinematographer)
- **Math First:** Construção de equações de movimento (Verlet, Elastic, Bezier) antes do código CSS/JS.
- **Orquestração GSAP:** Sequenciamento com ScrollTrigger. Zero "saltos".
- **Cinematic Pacing:** Staggering e Timing levels para evitar sobrecarga de informação (Cognitive Overload).

### Fase 3: Engenharia Web (Gamma Engineer)
- **Implementação React/Next:** Typescript Estrito (Sem `any`).
- **Semantic HTML First:** Antes do Canvas cobrir a tela, o `main`, `section`, `h1`, `article` devem ditar a semântica da árvore DOM.

### Fase 4: Auditoria Hardcore (Delta Critic + A11y + Perf)
- Acessibilidade injetada no berço (não no final).
- Profiling no Chrome DevTools (Target: Scripting em CPU < 16ms por frame).
- Lighthouse CI report (Performance > 90, Acessibilidade = 100).

### Fase 5: Gate Soberano (Sovereign Director)
- A verificação final atestando o isolamento da biblioteca (aprovada para entrar em `/promotions`).
