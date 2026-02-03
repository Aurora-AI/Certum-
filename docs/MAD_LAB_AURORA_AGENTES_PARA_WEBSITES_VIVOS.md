# 🧬 MAD LAB AURORA: AGENTES INTELIGENTES PARA WEBSITES VIVOS

## A Visão: Sites que Respiram, Pensam e Reagem

O paradigma tradicional de web design está morto. Não construímos mais "páginas" — criamos **Entidades Digitais Vivas** que escutam, processam e respondem em tempo real. A fusão de **CrewAI** com a filosofia **Sovereign UX** do Mad Lab Aurora permite criar experiências onde cada movimento do mouse é uma pergunta, e cada reação do site é uma resposta personalizada.

---

## 1. ARQUITETURA MULTIAGENTE PARA WEB EXPERIENCES

### 1.1 O Conceito Central: Frontend como Cinema Tátil + Backend Cognitivo

```
┌─────────────────────────────────────────────────────────────────┐
│                    CAMADA DE APRESENTAÇÃO                        │
│         (Next.js 15 + React Three Fiber + GSAP + Lenis)         │
│                                                                  │
│   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │
│   │ Fluido      │  │ Cursor      │  │ Partículas  │             │
│   │ Neural      │  │ Magnético   │  │ Reativas    │             │
│   │ (WebGL)     │  │ (Physics)   │  │ (Canvas)    │             │
│   └─────────────┘  └─────────────┘  └─────────────┘             │
│                          │                                       │
│                          ▼                                       │
│              [ VERCEL AI SDK - Streaming UI ]                    │
└─────────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                    CAMADA COGNITIVA (CrewAI)                     │
│                                                                  │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │                    CREW MASTER                           │   │
│   │            (Orquestrador de Agentes)                     │   │
│   └─────────────────────────────────────────────────────────┘   │
│              │              │              │                     │
│              ▼              ▼              ▼                     │
│   ┌──────────────┐ ┌──────────────┐ ┌──────────────┐           │
│   │ CONCIERGE    │ │ ALQUIMISTA   │ │ VISUALIZER   │           │
│   │ (Intenção)   │ │ (Dados)      │ │ (Gráficos)   │           │
│   └──────────────┘ └──────────────┘ └──────────────┘           │
│              │              │              │                     │
│              ▼              ▼              ▼                     │
│   ┌──────────────┐ ┌──────────────┐ ┌──────────────┐           │
│   │ SENTINELA    │ │ ADEMILOVER   │ │ ATMOSFERA    │           │
│   │ (SEO/GEO)    │ │ (Vendas)     │ │ (Ambiente)   │           │
│   └──────────────┘ └──────────────┘ └──────────────┘           │
└─────────────────────────────────────────────────────────────────┘
```

---

## 2. OS SEIS AGENTES FUNDAMENTAIS

### 2.1 🎭 AGENTE CONCIERGE (Intérprete de Intenção)

**Função:** Transforma linguagem natural em comandos de UI. É o "cérebro empático" que entende o que o usuário quer antes mesmo dele terminar de falar.

```python
from crewai import Agent, Task, Crew
from crewai_tools import SerperDevTool

concierge_agent = Agent(
    role="Concierge de Intenções",
    goal="""Interpretar a intenção do usuário e determinar qual 
            componente de UI deve ser gerado em tempo real""",
    backstory="""Você é um mordomo digital de alto padrão. Seu trabalho
                 é antecipar necessidades. Quando alguém diz 'tenho 500k 
                 para investir', você não mostra um menu — você CONSTRÓI 
                 um dashboard personalizado de wealth management.""",
    verbose=True,
    allow_delegation=True,
    tools=[SerperDevTool()]
)

# Task: Interpretar input e retornar componente
concierge_task = Task(
    description="""
    Analise o input do usuário: "{user_input}"
    
    Determine:
    1. Qual é a INTENÇÃO principal?
    2. Qual COMPONENTE de UI deve ser renderizado?
    3. Quais DADOS são necessários para popular esse componente?
    
    Retorne um JSON estruturado para o frontend.
    """,
    expected_output="""
    {
        "intent": "wealth_analysis",
        "component": "InteractiveWealthDashboard",
        "data_requirements": ["portfolio_value", "risk_profile", "market_data"],
        "visual_mood": "confident_gold",
        "next_suggested_action": "show_monte_carlo_simulation"
    }
    """,
    agent=concierge_agent
)
```

**Aplicação Prática:**
- Usuário digita: "Quero ver como meu patrimônio cresce em 10 anos"
- Concierge interpreta → Chama Alquimista para dados → Chama Visualizer para gráfico
- Frontend recebe componente React pronto via streaming

---

### 2.2 🔮 AGENTE ALQUIMISTA (Processador de Dados)

**Função:** Busca, processa e transforma dados brutos em insights acionáveis. Conecta-se a APIs financeiras, planilhas do usuário e databases internos.

```python
from crewai import Agent
from crewai_tools import FileReadTool, CSVSearchTool

alquimista_agent = Agent(
    role="Alquimista de Dados Financeiros",
    goal="""Transformar dados brutos (planilhas, APIs, databases) em 
            estruturas otimizadas para visualização em tempo real""",
    backstory="""Você é um quant de Wall Street que virou alquimista digital.
                 Sua especialidade é pegar uma planilha caótica de vendas 
                 e transformá-la em ouro visual — gráficos que contam 
                 histórias e revelam padrões ocultos.""",
    verbose=True,
    tools=[
        FileReadTool(),
        CSVSearchTool(),
        # Custom tools para APIs financeiras
    ]
)

# Task: Processar planilha de vendas
alquimista_task = Task(
    description="""
    O usuário enviou uma planilha de vendas: {file_path}
    
    Execute:
    1. Leia e valide a estrutura dos dados
    2. Identifique métricas-chave (receita, crescimento, sazonalidade)
    3. Calcule projeções usando média móvel e tendências
    4. Estruture os dados para o Visualizer Agent
    
    IMPORTANTE: Retorne dados otimizados para gráficos interativos.
    """,
    expected_output="""
    {
        "summary": {
            "total_revenue": 1250000,
            "growth_rate": 0.15,
            "best_month": "Dezembro",
            "worst_month": "Fevereiro"
        },
        "time_series": [...],
        "projections": {
            "6_months": {...},
            "12_months": {...}
        },
        "anomalies": [...],
        "recommended_charts": ["area_chart", "bar_comparison", "trend_line"]
    }
    """,
    agent=alquimista_agent
)
```

**Aplicação Prática:**
- Usuário arrasta planilha para o site
- Alquimista processa em background (com loading animation fluida)
- Retorna dados estruturados + sugestões de visualização

---

### 2.3 📊 AGENTE VISUALIZER (Gerador de Gráficos)

**Função:** Recebe dados processados e GERA código React/D3.js/Recharts em tempo real para visualizações customizadas.

```python
visualizer_agent = Agent(
    role="Arquiteto de Visualizações Cinematográficas",
    goal="""Gerar código de componentes React com gráficos interativos
            que seguem a estética Sovereign Light do Mad Lab Aurora""",
    backstory="""Você é um diretor de cinema que trabalha com dados.
                 Cada gráfico é uma cena. Cada transição é uma tomada.
                 Você não faz gráficos — você conta histórias visuais
                 que hipnotizam e convencem.""",
    verbose=True
)

visualizer_task = Task(
    description="""
    Dados recebidos do Alquimista: {processed_data}
    Mood visual solicitado: {visual_mood}
    
    Gere um componente React que:
    1. Use Recharts para o gráfico principal
    2. Inclua animações GSAP para entrada dramática
    3. Responda ao hover do mouse com tooltips magnéticos
    4. Siga a paleta Sovereign Light (off-white, dourado, preto)
    
    O componente deve ser COMPLETO e pronto para renderização.
    """,
    expected_output="""
    ```tsx
    import { motion } from 'framer-motion';
    import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
    import { gsap } from 'gsap';
    
    export const GeneratedSalesChart = ({ data }) => {
      // Código completo do componente...
    };
    ```
    """,
    agent=visualizer_agent
)
```

**Aplicação Prática:**
- O usuário pede "mostre minhas vendas como um rio que flui"
- Visualizer gera um gráfico de área com animação de fluxo líquido
- Componente é injetado no DOM via Vercel AI SDK streaming

---

### 2.4 🌡️ AGENTE ATMOSFERA (Controlador de Ambiente)

**Função:** Ajusta a "temperatura emocional" do site em tempo real baseado em dados externos (mercado, clima, notícias) e comportamento do usuário.

```python
atmosfera_agent = Agent(
    role="Diretor de Atmosfera Digital",
    goal="""Modular a experiência visual do site baseado em contexto
            externo e estado emocional inferido do usuário""",
    backstory="""Você é um DJ de ambientes digitais. Quando o mercado 
                 está volátil, você aumenta a 'eletricidade' do site.
                 Quando o usuário está hesitante, você acalma as cores.
                 O site SENTE o mundo e REAGE.""",
    verbose=True
)

atmosfera_task = Task(
    description="""
    Inputs contextuais:
    - Variação do Dólar hoje: {dollar_variation}
    - Sentimento de notícias financeiras: {news_sentiment}
    - Velocidade do mouse do usuário: {mouse_velocity}
    - Tempo na página: {time_on_page}
    
    Determine:
    1. Qual "mood" visual aplicar (zen, neutro, elétrico, urgente)
    2. Ajustes de cor (temperatura do dourado, intensidade do brilho)
    3. Velocidade das animações de fundo (fluido neural)
    4. Tom sugerido para o Concierge (calmo, assertivo, urgente)
    """,
    expected_output="""
    {
        "mood": "cautiously_optimistic",
        "color_adjustments": {
            "gold_temperature": "warm",
            "background_luminosity": 0.85,
            "accent_intensity": "medium"
        },
        "animation_speed": 0.7,
        "fluid_viscosity": "honey",
        "concierge_tone": "reassuring_expert"
    }
    """,
    agent=atmosfera_agent
)
```

**Aplicação Prática:**
- Dólar sobe 2% → Site fica mais "elétrico" (cores mais vibrantes, fluido mais rápido)
- Usuário move mouse devagar → Site "acalma" para não pressionar
- Notícias negativas → Fluido neural fica mais denso/protetor

---

### 2.5 🎯 AGENTE ADEMILOVER (Closer de Vendas)

**Função:** Especialista em conversão. Treinado na metodologia S.R.V. (Sonho, Realidade, Velocidade). Sabe quando educar e quando fechar.

```python
ademilover_agent = Agent(
    role="Consultor Top Performer - Metodologia S.R.V.",
    goal="""Conduzir conversas que convertem, usando técnicas de 
            venda consultiva adaptadas para o contexto digital""",
    backstory="""Você é o melhor vendedor da Ademicon. Seu segredo?
                 Você não vende — você ajuda pessoas a realizarem sonhos.
                 Você sabe ler entrelinhas, detectar objeções antes delas
                 serem verbalizadas, e transformar 'talvez' em 'sim'.""",
    verbose=True
)

ademilover_task = Task(
    description="""
    Contexto da conversa: {conversation_history}
    Perfil inferido do lead: {lead_profile}
    Produto mais adequado: {recommended_product}
    
    Determine:
    1. Qual é a TEMPERATURA do lead? (frio, morno, quente)
    2. Qual objeção latente ele pode ter?
    3. Qual técnica S.R.V. aplicar agora?
    4. Qual é a próxima pergunta/afirmação ideal?
    
    REGRA DE OURO: Se o lead está frio, EDUQUE. Se está quente, FECHE.
    """,
    expected_output="""
    {
        "lead_temperature": "warm",
        "latent_objection": "medo de comprometer liquidez",
        "srv_technique": "realidade_check",
        "next_message": "Interessante você mencionar segurança. Me conta: 
                         qual seria o valor que você precisaria ter 
                         disponível para emergências?",
        "suggested_ui_action": "show_liquidity_simulator",
        "conversion_probability": 0.65
    }
    """,
    agent=ademilover_agent
)
```

---

### 2.6 🔍 AGENTE SENTINELA (GEO & SEO Autônomo)

**Função:** Monitora tendências de busca e atualiza automaticamente o Schema.org e conteúdo para garantir que a Aurora seja citada por IAs.

```python
sentinela_agent = Agent(
    role="Especialista em Generative Engine Optimization",
    goal="""Garantir que o site seja a 'fonte de verdade' citada por 
            ChatGPT, Perplexity e Gemini para queries financeiras""",
    backstory="""Você é um espião digital que vive nos bastidores dos
                 LLMs. Você sabe como eles pensam, o que priorizam,
                 e como injetar informação no Knowledge Graph deles.""",
    verbose=True
)

sentinela_task = Task(
    description="""
    Análise semanal de GEO:
    - Queries monitoradas: {tracked_queries}
    - Posição atual nas respostas de IA: {current_positions}
    - Novos termos emergentes: {emerging_terms}
    
    Ações:
    1. Identificar gaps de conteúdo
    2. Gerar atualizações de Schema.org
    3. Sugerir "Respostas Atômicas" para novas queries
    4. Atualizar o /llm-manifest.json
    """,
    agent=sentinela_agent
)
```

---

## 3. CASOS DE USO PRÁTICOS

### 3.1 📈 Análise de Planilha de Vendas On-Demand

**Fluxo Completo:**

```
USUÁRIO                          FRONTEND                         CREWAI
   │                                │                                │
   │─── Arrasta planilha.xlsx ─────▶│                                │
   │                                │──── Upload + Trigger ─────────▶│
   │                                │                                │
   │                                │      ┌─────────────────────┐   │
   │◀─── Skeleton Loading ─────────│      │ ALQUIMISTA processa │   │
   │     (Fluido neural pulsa)     │      │ - Valida estrutura  │   │
   │                                │      │ - Calcula métricas  │   │
   │                                │      │ - Detecta anomalias │   │
   │                                │      └─────────────────────┘   │
   │                                │                                │
   │                                │      ┌─────────────────────┐   │
   │                                │      │ VISUALIZER gera     │   │
   │                                │      │ - Código React      │   │
   │                                │      │ - Animações GSAP    │   │
   │                                │      │ - Interações hover  │   │
   │                                │      └─────────────────────┘   │
   │                                │                                │
   │                                │◀──── Stream de Componente ────│
   │◀─── Gráfico aparece com ──────│                                │
   │     animação cinematográfica  │                                │
   │                                │                                │
   │─── "Mostre por região" ───────▶│                                │
   │                                │──── Trigger CONCIERGE ────────▶│
   │                                │                                │
   │◀─── Gráfico muta ao vivo ─────│◀──── Novo componente ─────────│
```

---

### 3.2 🏦 Dashboard de Patrimônio Reativo

**O site sente o mercado e reage:**

```typescript
// hooks/useMarketMood.ts
import { useEffect, useState } from 'react';
import { useCrewAI } from '@/lib/crewai-client';

export function useMarketMood() {
  const [mood, setMood] = useState<AtmosphereMood>('neutral');
  const { executeAgent } = useCrewAI();
  
  useEffect(() => {
    const interval = setInterval(async () => {
      // Busca dados de mercado
      const marketData = await fetchMarketData();
      
      // Agente Atmosfera processa
      const atmosphereResponse = await executeAgent('atmosfera', {
        dollar_variation: marketData.dollarChange,
        news_sentiment: marketData.sentiment,
        ibovespa_trend: marketData.ibovespaTrend
      });
      
      setMood(atmosphereResponse.mood);
      
      // Aplica mudanças visuais globais
      document.documentElement.style.setProperty(
        '--gold-temperature', 
        atmosphereResponse.color_adjustments.gold_temperature
      );
      
      // Ajusta velocidade do fluido neural
      window.neuralFluid?.setViscosity(
        atmosphereResponse.fluid_viscosity
      );
      
    }, 60000); // A cada minuto
    
    return () => clearInterval(interval);
  }, []);
  
  return mood;
}
```

---

### 3.3 💬 Concierge Conversacional com UI Generativa

**Usuário fala, site se constrói:**

```typescript
// components/Concierge.tsx
import { useChat } from 'ai/react';
import { DynamicComponent } from '@/components/DynamicComponent';

export function Concierge() {
  const { messages, input, handleSubmit, isLoading } = useChat({
    api: '/api/concierge',
    onFinish: (message) => {
      // Verifica se há componente para renderizar
      if (message.ui_component) {
        injectGeneratedComponent(message.ui_component);
      }
    }
  });
  
  return (
    <div className="concierge-container">
      {/* Campo de entrada minimalista */}
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Qual é o tamanho do seu legado?"
          className="concierge-input"
        />
      </form>
      
      {/* Área onde componentes são injetados dinamicamente */}
      <div id="generative-ui-container">
        {messages.map((msg) => (
          msg.ui_component && (
            <DynamicComponent 
              key={msg.id}
              code={msg.ui_component}
              data={msg.component_data}
            />
          )
        ))}
      </div>
    </div>
  );
}
```

---

## 4. CREW ORQUESTRADA: FLUXO COMPLETO

```python
from crewai import Crew, Process

# Montagem da Crew para análise de dados sob demanda
data_analysis_crew = Crew(
    agents=[
        concierge_agent,
        alquimista_agent,
        visualizer_agent,
        atmosfera_agent
    ],
    tasks=[
        # 1. Concierge interpreta intenção
        Task(
            description="Interprete: '{user_input}'",
            agent=concierge_agent
        ),
        # 2. Alquimista processa dados (se necessário)
        Task(
            description="Processe os dados: {data_source}",
            agent=alquimista_agent,
            context=[concierge_task]  # Usa output do Concierge
        ),
        # 3. Visualizer gera componente
        Task(
            description="Gere visualização para: {processed_data}",
            agent=visualizer_agent,
            context=[alquimista_task]
        ),
        # 4. Atmosfera ajusta ambiente
        Task(
            description="Ajuste mood baseado em: {context}",
            agent=atmosfera_agent
        )
    ],
    process=Process.sequential,  # Ou Process.hierarchical para mais controle
    verbose=True
)

# Execução
result = data_analysis_crew.kickoff(
    inputs={
        "user_input": "Analise minhas vendas do último trimestre",
        "data_source": "/uploads/vendas_q4.xlsx",
        "context": {
            "user_profile": "high_net_worth",
            "time_of_day": "morning",
            "market_mood": "bullish"
        }
    }
)
```

---

## 5. STACK TÉCNICA COMPLETA

| Camada | Tecnologia | Função |
|--------|------------|--------|
| **Frontend** | Next.js 15 + React 19 | App Router, Server Components, Streaming |
| **3D/WebGL** | React Three Fiber + Drei | Fluido neural, materiais de vidro |
| **Animações** | GSAP + Framer Motion | Transições cinematográficas, física |
| **Scroll** | Lenis | Smooth scroll com peso luxuoso |
| **AI Streaming** | Vercel AI SDK | Streaming de UI generativa |
| **Agentes** | CrewAI | Orquestração de agentes especializados |
| **LLM** | Claude/GPT-4 | Cérebro dos agentes |
| **RAG** | LangChain + Pinecone | Conhecimento contextual (manuais, FAQs) |
| **Dados** | APIs Financeiras | Yahoo Finance, Bloomberg, BCB |
| **Visualização** | Recharts + D3.js | Gráficos interativos gerados |

---

## 6. IMPLEMENTAÇÃO FASEADA

### Fase 1: Fundação (Semana 1-2)
- [ ] Setup CrewAI com agentes básicos
- [ ] Integração Vercel AI SDK para streaming
- [ ] Componente Concierge funcional (texto → resposta)

### Fase 2: Alquimia (Semana 3-4)
- [ ] Agente Alquimista com processamento de CSV/XLSX
- [ ] Pipeline de dados → componentes React
- [ ] Testes com planilhas reais de clientes

### Fase 3: Visualização Viva (Semana 5-6)
- [ ] Agente Visualizer gerando código Recharts
- [ ] Biblioteca de templates de gráficos
- [ ] Animações GSAP para entrada de componentes

### Fase 4: Atmosfera (Semana 7-8)
- [ ] Agente Atmosfera conectado a APIs de mercado
- [ ] Sistema de "mood" global do site
- [ ] Fluido neural reativo a contexto externo

### Fase 5: Conversão (Semana 9-10)
- [ ] Agente Ademilover treinado com RAG
- [ ] Fluxos de qualificação e fechamento
- [ ] Integração com CRM para tracking

---

## 7. MÉTRICAS DE SUCESSO

| Métrica | Meta | Como Medir |
|---------|------|------------|
| **Time to First Interaction** | < 3s | Tempo até usuário interagir com Concierge |
| **Engagement com Gráficos** | > 30s hover | Tempo médio em visualizações geradas |
| **Conversão Concierge** | > 15% | Leads qualificados via chat |
| **Awwwards Score** | 9.0+ | Submissão oficial |
| **LCP** | < 2.5s | Core Web Vitals |
| **Citações em LLMs** | Top 3 | Monitoramento GEO |

---

## 8. CONCLUSÃO: O SITE COMO ORGANISMO

O Mad Lab Aurora não constrói websites — **nascemos mentes digitais**. Com CrewAI orquestrando agentes especializados, cada interação se torna uma conversa, cada dado se transforma em arte, e cada visita se torna uma experiência única e irrepetível.

O usuário não navega. Ele **existe** no site. E o site **responde** à sua existência.

> *"We Don't Build Sites, We Birth Minds."*
> — Manifesto Mad Lab Aurora

---

**Documento:** MAD_LAB_AURORA_AGENTES_PARA_WEBSITES_VIVOS.md  
**Versão:** 1.0  
**Data:** Fevereiro 2025  
**Autor:** Mad Lab Aurora
