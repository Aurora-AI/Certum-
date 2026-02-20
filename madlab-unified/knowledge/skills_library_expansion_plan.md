# Plano de Expansão da Skills/Effects Library

A documentação atual unificou as entidades base (Agentes) e o Core de Sabedoria (Knowledge). Para as execuções S-Tier tornarem-se automáticas e imutáveis, o repositório precisa agora expandir suas "Skills" (Ferramentas operacionais padronizadas que os agentes puxam durante a geração de código).

## 1. Diagnóstico de Skills/Patterns Faltantes 
No momento, o sistema agentico sabe **"O Que" fazer e "Por que" (Knowledge)**, mas precisa de repositórios estruturados do **"Como" (Skills/Patterns)**.

## 2. Mapa Estrutural de Skills (A Construir em madlab-unified/skills)
O `Gamma Engineer` e o `Cinematographer` dependerão do repasse contínuo destes patterns:

*   [ ] **1. Semantic HTML & A11y UI Pattern (Acesso ao Delta Critic)**
    *   *Formato:* `skills/accessibility_patterns.md`
    *   *Descrição:* Fornecer exemplos explícitos de como construir botões SVG com `aria-labels`, e modais com captura de teclado. O código React padronizado de fallback.
*   [ ] **2. Lenis & ScrollTrigger Integration (Acesso ao Cinematographer)**
    *   *Formato:* `skills/lenis_patterns.md`
    *   *Descrição:* O wrapper mestre exato para o Smooth Scroll global sincronizado com timelines GSAP (O método Awwwards canonizado).
*   [ ] **3. Effects Component Registry (Catalisador de WebGPU)**
    *   *Formato:* `skills/component_registry.md`
    *   *Descrição:* Inventário indexando o que já existe (Ex: `VolumetricBackground.tsx`, `KineticCard.tsx`, `DisneyMagnetic.tsx`). Assim, os agentes reusam em vez de gerar do zero (Alucinação Zero).
*   [ ] **4. Fallbacks Dinâmicos (Graceful Degradation Patterns)**
    *   *Formato:* `skills/mobile_fallbacks.md`
    *   *Descrição:* Regras exatas de CSS/Tailwind para trocar `<Canvas>` WebGL pesados por gradações sutis animadas em dispositivos limitados, priorizando bateria/CPU celular.
*   [ ] **5. Testing & Trustware Playbook**
    *   *Formato:* `skills/testing_playbook.md`
    *   *Descrição:* Instruções base sobre Playwright / Vitest para test-driven development focado na pipeline da interface visual complexa.

## Próxima Etapa Crítica (Fase 3):
A criação efetiva destes `.md`s dentro de `madlab-unified/skills`, complementando a auditoria S-Tier inicial e emparelhando a base de sabedoria teórica com o braço mecânico/código do Mad Lab Aurora.
