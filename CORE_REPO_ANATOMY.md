# CORE REPO ANATOMY
**Data:** 2026-02-15
**Protocol:** ALPHA | EXTRAÇÃO TOTAL
**Scope:** Architecture, Intelligence, Stack & Entropy

---

## 1. O Panteão de Agentes (Intelligence Layer)

O sistema opera com uma "Mente Colmeia" (Hive Mind) baseada em CrewAI, dividida em quatro arquétipos fundamentais.

### 1.1. Alpha (The Visionary Architect)
*   **Identidade:** `alpha_architect` (Phantom Weaver) / `alpha_visionary` (IDE Protocol).
*   **Função:** Definição de escopo, estratégia e "Vibe". Governador do Orçamento de Performance (16ms budget).
*   **Personalidade:** Estrategista. Não escreve código. Pura visão e restrição.
*   **Tooling:** Análise de Texto (Input), Geração de SpecFile (JSON).
*   **Prompt Engineering:**
    *   "Você detém o poder de veto."
    *   "Traduzir intenções abstratas em SpecFile técnico."

### 1.2. Beta (The Physicist)
*   **Identidade:** `beta_physicist`.
*   **Função:** Derivação matemática pura.
*   **Personalidade:** Acadêmico rigoroso. Odeia "Física Euleriana"; ama "Verlet" e "Jacobianas".
*   **Tooling:** Python (Logic only), LaTeX/Math output.
*   **Prompt Engineering:**
    *   "Você NÃO escreve código. Você fornece as FÓRMULAS."
    *   "Foco na estabilidade numérica."

### 1.3. Gamma (The Implementer)
*   **Identidade:** `gamma_engineer`.
*   **Função:** Tradução de Matemática (Beta) e Spec (Alpha) em Código de Produção (GLSL/React).
*   **Personalidade:** Veterano da Demoscene. Obsessivo por "Branchless Programming" e otimização de GPU.
*   **Tooling:** `allow_code_execution=True`. Acesso de escrita ao filesystem (`.tsx`, `.glsl`).
*   **Prompt Engineering:**
    *   "Fazer rodar a 60FPS em um iPhone."
    *   "Evite if/else dentro de shaders."

### 1.4. Delta (The Critic)
*   **Identidade:** `delta_critic`.
*   **Função:** Quality Assurance Visual e Guardião da Estética "Exo Ape".
*   **Personalidade:** Diretor de Arte Técnico. Traduz "está feio" para "ajuste o coeficiente K".
*   **Tooling:** Análise de Código, Validação de Output.
*   **Prompt Engineering:**
    *   "Valide a Alma da interface."
    *   "Verifique se as normais estão sendo recalculadas."

---

## 2. O Processo Produtivo (The Assembly Line)

A linha de montagem opera em dois protocolos distintos (Legacy Debt detectado).

### 2.1. Trigger de Início
*   **Entrada Manual:** Dicionário `inputs` injetado via Python script (`main.py`).
*   **Dados:** `briefing` (Texto), `project_context` (Markdown), `effects_registry` (Markdown).

### 2.2. Workflow Cronológico (Phantom Weaver Protocol)
1.  **Alpha Node:** Recebe o Briefing -> Gera `SpecFile.json`.
2.  **Beta Node:** Lê `SpecFile` -> Deriva Equações Físicas (Markdown/Math).
3.  **Gamma Node:** Lê Equações -> Implementa Shaders e Componentes React (`.tsx`).
4.  **Delta Node:** Lê Código -> Emite Relatório de Aprovação/Refatoração.

### 2.3. Handover Protocol
*   **Mecanismo:** `tasks.yaml` define as entradas e saídas esperadas.
*   **Falha de Automação:** O código gerado reside em `output/` e requer **transplante manual** para a árvore `src/`. Não existe CI/CD conectando a "Mente" (Python) ao "Corpo" (Next.js) automaticamente.

---

## 3. O Kernel Tecnológico (The Stack)

### 3.1. Frontend (The Shell)
*   **Framework:** Next.js 16.1.6 (Turbopack Enabled).
*   **Core:** React 19.2.3 (Server Components default).
*   **Styling:** Tailwind CSS v4 (Configuração via CSS nativo `@theme`).
*   **Animation:** GSAP 3.14.2 (Premium).
*   **Physics/3D:** Three.js 0.182.0 + React Three Fiber 9.5.0.
*   **Smooth Scroll:** Lenis 1.0.42.

### 3.2. Backend (The Brain)
*   **Runtime:** Python 3.10+.
*   **Orchestrator:** CrewAI.
*   **Tools:** `crewai-tools` (FileRead, MDXSearch).

### 3.3. Integration (The Wiring)
*   **Protocolo:** Manual / Copy-Paste.
*   **Tipagem:** TypeScript estrito no Frontend (`strict: false` no `tsconfig` atual - **Risco**).
*   **Mock-First:** Inexistente. O sistema gera código final diretamente.

---

## 4. Automação e Infra (The Engine Room)

### 4.1. Estrutura de Pastas
*   `root/`: Frontend Next.js.
*   `madlab-agents/`: Implementação do Phantom Weaver (Code Generation).
*   `madlab-core/`: Implementação do Studio IDE (Audit & Knowledge Base).

### 4.2. Scripts
*   `npm run dev`: Inicia o Frontend (Port 3000).
*   `python madlab-agents/main.py`: Executa o Phantom Weaver.
*   `python madlab-core/src/main.py`: Executa o Studio IDE.

---

## 5. Gargalos e Entropia (Legacy Debt)

### 5.1. Split Brain Syndrome
*   **Diagnóstico:** Existência de **dois cérebros desconectados** (`madlab-agents` e `madlab-core`). `madlab-agents` foca em criação, `madlab-core` em auditoria, mas ambos duplicam configurações e definições (`agents.yaml`, `main.py`).
*   **Impacto:** Divergência de comportamento e manutenção duplicada.

### 5.2. Air-Gapped Integration
*   **Diagnóstico:** A inteligência (Python) não tem permissão de escrita direta na árvore de produção (`src/app`).
*   **Impacto:** O "Humano no Loop" atua como uma mula de carga, movendo arquivos de `output/` para `src/`, introduzindo erro humano e latência.

### 5.3. Fragile Scaffolding
*   **Diagnóstico:**
    *   Ausência anterior de `package.json` na raiz (resolvido).
    *   Presença de artefatos de build (`src/.next`, `src/node_modules`) poluindo a árvore.
    *   Configuração do TypeScript permissiva (`strict: false`).
*   **Impacto:** Instabilidade no build e dificuldade em garantir "Trustware" (código auditável e seguro).

### 5.4. Knowledge Fragmentation
*   **Diagnóstico:** O conhecimento está espalhado entre `madlab-core/knowledge`, `_BKP_ANTIGO/biblioteca` e arquivos locais do usuário (`Desktop/files`).
*   **Impacto:** Os agentes operam com visão parcial do ecossistema.

---
**FIM DO RELATÓRIO**
