# Sovereign Workflow Director Spec: 5 Quality Gates

Este documento serve como a régua final. O `Sovereign Director` (Guard Rail) só permite que o Mad Lab promova um artefato para o `vault/promotions/` se este componente sobreviver aos 5 portões de qualidade (Quality Gates).

## Gate 1: Isolamento Físico e Dependências
*   [ ] O componente/effect **não** importa abstrações da Aurora ou repositório pai (NextJS do core app). Suas dependências de UI são isoladas ou empacotadas.
*   [ ] Nenhum código espaguete de API/State global de fora. O componente deve funcionar em um sandbox.

## Gate 2: Produção e Semântica (Production First)
*   [ ] O componente atinge o fallback seguro? (Se WebGPU falhar, o DOM CSS garante a entrega de valor?)
*   [ ] Hierarquia de IDs única presente e `data-testid` aplicados para Quality Assurance?
*   [ ] O layout responde fluidamente a escalas inusitadas (Tailwind aspect-ratios validados)?

## Gate 3: Acessibilidade Inquebrável (Accessibility Tática)
*   [ ] O componente responde ativamente e desliga animações em loop se a detecção sistêmica encontrar `prefers-reduced-motion` no sistema operacional do usuário.
*   [ ] O contraste em telas de alta luminosidade cumpre a proporção WCAG AA (4.5:1 para texto normal, 3:1 em grandiosos).
*   [ ] Navegação visível via Teclado `tab-focus` devidamente estilizado.

## Gate 4: Física S-Tier (Motion & Cinematics)
*   [ ] Motion Budget cumpre 60FPS constantes (uso correto de `transform` e `opacity`, evitação total de paints layout como animar `width` ou `top`).
*   [ ] Transmissão física respeita peso (Objetos massivos demoram mais em aceleração, luz e fade são rápidos).

## Gate 5: Autonomia e Assinatura Mental (Trustware)
*   [ ] O código foi rigorosamente auditado contra alucinações de LLM (Remoção total de pacotes desnecessários, funções não utilizadas).
*   [ ] O Trustware emitiu Token de Garantia de Qualidade.

> **Regra Mestra:** Falhar em um gate significa retrabalho na Fase de Engenharia. Não existem "waivers" (exceções) no Mad Lab.
