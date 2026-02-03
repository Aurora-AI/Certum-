# Mad Lab Aurora: Agentes para Websites Vivos 🧬

## Visão Geral
Esta estratégia implementa a filosofia de "Entidades Digitais Vivas" da Aurora. O website deixa de ser estático e torna-se um organismo responsivo governado por uma colmeia de agentes inteligentes.

## 🧬 Os Seis Agentes Fundamentais

| Agente | Função | Aplicação Prática |
| :--- | :--- | :--- |
| **CONCIERGE** | Interpreta intenção do usuário | Usuário digita "tenho 500k" → Dashboard de wealth aparece |
| **ALQUIMISTA** | Processa dados brutos | Planilha de vendas → JSON estruturado para gráficos |
| **VISUALIZER** | Gera componentes React | Dados → Código Recharts com animações GSAP |
| **ATMOSFERA** | Controla "mood" do site | Dólar sobe → Site fica mais "elétrico" |
| **ADEMILOVER** | Fecha vendas (metodologia S.R.V.) | Detecta objeções e ajusta tom da conversa |
| **SENTINELA** | Otimiza para LLMs (GEO) | Atualiza Schema.org para ser citado pelo ChatGPT |

## 💡 Casos de Uso Killer

### 1. Análise de Planilha On-Demand
*   **Fluxo:** Usuário arrasta `.xlsx` → **Alquimista** processa → **Visualizer** gera gráfico cinematográfico em segundos.

### 2. Site que Sente o Mercado
*   **Fluxo:** API de mercado → **Agente Atmosfera** → Fluido neural muda de viscosidade, cores se ajustam.

### 3. UI Generativa via Chat
*   **Fluxo:** Usuário pergunta → **Concierge** interpreta → Frontend recebe componente React pronto via streaming.

### 4. Concierge que Vende
*   **Fluxo:**
    *   Lead frio → Educar com simuladores.
    *   Lead quente → **Ademilover** fecha com técnica S.R.V.

## 🔧 Stack Técnica
*   **Frontend:** Next.js 15 + React Three Fiber + GSAP + Lenis
*   **AI Stream:** Vercel AI SDK (streaming de componentes)
*   **Agentes:** CrewAI + LangChain (Backend: `cortex/`)
*   **LLM:** Claude/GPT-4o/DeepSeek
*   **RAG:** Pinecone (manuais Ademicon)
*   **Gráficos:** Recharts + D3.js gerados dinamicamente
