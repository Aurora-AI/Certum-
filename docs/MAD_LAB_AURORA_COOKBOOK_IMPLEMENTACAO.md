# 🛠️ MAD LAB AURORA: COOKBOOK DE IMPLEMENTAÇÃO
## Receitas Práticas para Websites Vivos com CrewAI

---

## RECEITA 1: Setup Básico do CrewAI no Next.js

### 1.1 Instalação

```bash
# Backend Python (API Route ou serviço separado)
pip install crewai crewai-tools langchain-openai python-dotenv

# Frontend Next.js
npm install ai @ai-sdk/openai recharts framer-motion gsap @studio-freight/lenis
```

### 1.2 Estrutura de Pastas

```
/app
  /api
    /concierge
      route.ts          # Endpoint do Concierge
    /analyze-data
      route.ts          # Endpoint do Alquimista
    /generate-chart
      route.ts          # Endpoint do Visualizer
/lib
  /crewai
    agents.py           # Definição dos agentes
    crews.py            # Crews orquestradas
    tools.py            # Ferramentas customizadas
/components
  /generative
    DynamicChart.tsx    # Renderiza gráficos gerados
    Concierge.tsx       # Interface do Concierge
    AtmosphereProvider.tsx # Contexto de atmosfera
```

---

## RECEITA 2: Agente Alquimista para Processar Planilhas

### 2.1 Backend Python (agents.py)

```python
# lib/crewai/agents.py
import os
from crewai import Agent, Task, Crew
from crewai_tools import FileReadTool, CSVSearchTool
from langchain_openai import ChatOpenAI

# LLM Configuration
llm = ChatOpenAI(
    model="gpt-4-turbo-preview",
    temperature=0.7
)

# Ferramenta customizada para análise de dados
class DataAnalysisTool:
    """Ferramenta para análise estatística de dados tabulares"""
    
    def analyze(self, file_path: str) -> dict:
        import pandas as pd
        import numpy as np
        
        df = pd.read_csv(file_path) if file_path.endswith('.csv') else pd.read_excel(file_path)
        
        # Análise automática
        numeric_cols = df.select_dtypes(include=[np.number]).columns
        
        analysis = {
            "total_rows": len(df),
            "columns": list(df.columns),
            "numeric_summary": {},
            "time_series": None,
            "anomalies": []
        }
        
        for col in numeric_cols:
            analysis["numeric_summary"][col] = {
                "sum": float(df[col].sum()),
                "mean": float(df[col].mean()),
                "max": float(df[col].max()),
                "min": float(df[col].min()),
                "std": float(df[col].std())
            }
        
        # Detecta coluna de data para time series
        date_cols = df.select_dtypes(include=['datetime64']).columns
        if len(date_cols) > 0:
            df_sorted = df.sort_values(date_cols[0])
            analysis["time_series"] = df_sorted.to_dict('records')
        
        return analysis

# Definição do Agente Alquimista
alquimista = Agent(
    role="Alquimista de Dados",
    goal="""Transformar dados brutos em insights estruturados para visualização.
            Sempre retorne JSON válido que pode ser consumido pelo frontend.""",
    backstory="""Você é um cientista de dados especializado em transformar 
                 planilhas caóticas em ouro visual. Sua missão é identificar 
                 padrões, anomalias e histórias nos dados.""",
    llm=llm,
    tools=[FileReadTool(), DataAnalysisTool()],
    verbose=True
)

def create_analysis_task(file_path: str, user_question: str) -> Task:
    return Task(
        description=f"""
        Arquivo para análise: {file_path}
        Pergunta do usuário: {user_question}
        
        Execute:
        1. Leia o arquivo e identifique a estrutura
        2. Calcule métricas relevantes para a pergunta
        3. Identifique tendências e anomalias
        4. Estruture a resposta para visualização
        
        Retorne APENAS um JSON válido no formato:
        {{
            "summary": {{"métrica": valor}},
            "chart_data": [...],
            "insights": ["insight1", "insight2"],
            "recommended_chart_type": "line|bar|area|pie"
        }}
        """,
        expected_output="JSON estruturado para visualização",
        agent=alquimista
    )
```

### 2.2 API Route Next.js (route.ts)

```typescript
// app/api/analyze-data/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { spawn } from 'child_process';

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get('file') as File;
  const question = formData.get('question') as string;
  
  // Salva arquivo temporariamente
  const buffer = Buffer.from(await file.arrayBuffer());
  const filePath = `/tmp/${file.name}`;
  await fs.writeFile(filePath, buffer);
  
  // Executa script Python com CrewAI
  const result = await new Promise((resolve, reject) => {
    const python = spawn('python', [
      'lib/crewai/run_analysis.py',
      filePath,
      question
    ]);
    
    let output = '';
    python.stdout.on('data', (data) => output += data.toString());
    python.on('close', (code) => {
      if (code === 0) resolve(JSON.parse(output));
      else reject(new Error('Analysis failed'));
    });
  });
  
  return NextResponse.json(result);
}
```

---

## RECEITA 3: Componente de Gráfico Gerado Dinamicamente

### 3.1 DynamicChart.tsx

```tsx
// components/generative/DynamicChart.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

interface ChartData {
  chart_data: Array<Record<string, any>>;
  recommended_chart_type: 'line' | 'bar' | 'area' | 'pie';
  summary: Record<string, number>;
  insights: string[];
}

const CHART_COLORS = {
  primary: '#C9A227',    // Ouro Sovereign
  secondary: '#1A1A1A',  // Preto profundo
  accent: '#E5DDD3',     // Off-white
  grid: 'rgba(201, 162, 39, 0.1)'
};

export function DynamicChart({ data, isLoading }: { data: ChartData | null; isLoading: boolean }) {
  const chartRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Animação de entrada cinematográfica
  useEffect(() => {
    if (data && chartRef.current) {
      setIsVisible(true);
      
      // GSAP animation
      gsap.fromTo(
        chartRef.current,
        {
          opacity: 0,
          scale: 0.95,
          y: 20,
          filter: 'blur(10px)'
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.8,
          ease: 'power3.out'
        }
      );
    }
  }, [data]);
  
  // Skeleton loading
  if (isLoading) {
    return (
      <motion.div
        className="w-full h-[400px] bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl"
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <div className="flex items-center justify-center h-full">
          <span className="text-neutral-500 text-sm tracking-widest uppercase">
            Processando dados...
          </span>
        </div>
      </motion.div>
    );
  }
  
  if (!data) return null;
  
  // Renderiza o tipo de gráfico recomendado
  const renderChart = () => {
    const commonProps = {
      data: data.chart_data,
      margin: { top: 20, right: 30, left: 20, bottom: 20 }
    };
    
    switch (data.recommended_chart_type) {
      case 'area':
        return (
          <AreaChart {...commonProps}>
            <defs>
              <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={CHART_COLORS.primary} stopOpacity={0.8} />
                <stop offset="100%" stopColor={CHART_COLORS.primary} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} />
            <XAxis dataKey="name" stroke={CHART_COLORS.accent} />
            <YAxis stroke={CHART_COLORS.accent} />
            <Tooltip
              contentStyle={{
                background: 'rgba(26, 26, 26, 0.95)',
                border: `1px solid ${CHART_COLORS.primary}`,
                borderRadius: '8px',
                backdropFilter: 'blur(10px)'
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke={CHART_COLORS.primary}
              fill="url(#goldGradient)"
              strokeWidth={2}
            />
          </AreaChart>
        );
        
      case 'bar':
        return (
          <BarChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} />
            <XAxis dataKey="name" stroke={CHART_COLORS.accent} />
            <YAxis stroke={CHART_COLORS.accent} />
            <Tooltip
              contentStyle={{
                background: 'rgba(26, 26, 26, 0.95)',
                border: `1px solid ${CHART_COLORS.primary}`,
                borderRadius: '8px'
              }}
            />
            <Bar
              dataKey="value"
              fill={CHART_COLORS.primary}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        );
        
      default: // line
        return (
          <LineChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} />
            <XAxis dataKey="name" stroke={CHART_COLORS.accent} />
            <YAxis stroke={CHART_COLORS.accent} />
            <Tooltip
              contentStyle={{
                background: 'rgba(26, 26, 26, 0.95)',
                border: `1px solid ${CHART_COLORS.primary}`,
                borderRadius: '8px'
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke={CHART_COLORS.primary}
              strokeWidth={2}
              dot={{ fill: CHART_COLORS.primary, strokeWidth: 2 }}
              activeDot={{ r: 6, fill: CHART_COLORS.primary }}
            />
          </LineChart>
        );
    }
  };
  
  return (
    <AnimatePresence>
      <div ref={chartRef} className="w-full">
        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {Object.entries(data.summary).slice(0, 3).map(([key, value], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-4"
            >
              <span className="text-neutral-500 text-xs uppercase tracking-wider">
                {key.replace(/_/g, ' ')}
              </span>
              <p className="text-2xl font-light text-white mt-1">
                {typeof value === 'number' 
                  ? value.toLocaleString('pt-BR', { maximumFractionDigits: 2 })
                  : value
                }
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Chart */}
        <div className="bg-neutral-900/30 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6">
          <ResponsiveContainer width="100%" height={400}>
            {renderChart()}
          </ResponsiveContainer>
        </div>
        
        {/* Insights */}
        <div className="mt-6 space-y-2">
          {data.insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="flex items-start gap-3"
            >
              <span className="text-amber-500">→</span>
              <p className="text-neutral-400 text-sm">{insight}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatePresence>
  );
}
```

---

## RECEITA 4: Concierge com Streaming de UI

### 4.1 API Route com Vercel AI SDK

```typescript
// app/api/concierge/route.ts
import { OpenAI } from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

const openai = new OpenAI();

const SYSTEM_PROMPT = `Você é o Concierge do Certum Private, uma entidade digital 
de alto padrão. Você não responde — você CONSTRÓI experiências.

Quando o usuário faz uma pergunta:
1. Interprete a INTENÇÃO real por trás das palavras
2. Determine se precisa de um COMPONENTE visual
3. Se sim, retorne um JSON especial no formato:
   <<<UI_COMPONENT>>>
   {"type": "chart", "chartType": "area", "dataQuery": "sales_monthly"}
   <<<END_COMPONENT>>>

Seja conciso, sofisticado e nunca use emojis.`;

export async function POST(req: Request) {
  const { messages } = await req.json();
  
  const response = await openai.chat.completions.create({
    model: 'gpt-4-turbo-preview',
    stream: true,
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages
    ],
    temperature: 0.7
  });
  
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
```

### 4.2 Componente Concierge com Parser de UI

```tsx
// components/generative/Concierge.tsx
'use client';

import { useChat } from 'ai/react';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { DynamicChart } from './DynamicChart';

// Parser para detectar comandos de UI no stream
function parseUIComponents(text: string) {
  const uiRegex = /<<<UI_COMPONENT>>>([\s\S]*?)<<<END_COMPONENT>>>/g;
  const components: any[] = [];
  let cleanText = text;
  
  let match;
  while ((match = uiRegex.exec(text)) !== null) {
    try {
      const component = JSON.parse(match[1].trim());
      components.push(component);
      cleanText = cleanText.replace(match[0], '');
    } catch (e) {
      console.error('Failed to parse UI component:', e);
    }
  }
  
  return { cleanText: cleanText.trim(), components };
}

export function Concierge() {
  const [generatedCharts, setGeneratedCharts] = useState<any[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/concierge',
    onFinish: (message) => {
      const { components } = parseUIComponents(message.content);
      if (components.length > 0) {
        // Trigger data fetch and chart generation
        components.forEach(async (comp) => {
          if (comp.type === 'chart') {
            const data = await fetchChartData(comp.dataQuery);
            setGeneratedCharts(prev => [...prev, { ...comp, data }]);
          }
        });
      }
    }
  });
  
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Hero Input */}
      <div className="h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-2xl px-8"
        >
          <form onSubmit={handleSubmit}>
            <div className="relative">
              <input
                ref={inputRef}
                value={input}
                onChange={handleInputChange}
                placeholder="Qual é o tamanho do seu legado?"
                className="w-full bg-transparent border-b-2 border-neutral-800 
                           focus:border-amber-500 py-4 text-2xl font-light
                           placeholder:text-neutral-600 outline-none
                           transition-colors duration-300"
              />
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-amber-500"
                initial={{ width: 0 }}
                animate={{ width: isLoading ? '100%' : 0 }}
                transition={{ duration: 2, ease: 'easeInOut' }}
              />
            </div>
          </form>
          
          <p className="text-neutral-600 text-sm mt-4 tracking-wide">
            Digite uma pergunta ou arraste uma planilha
          </p>
        </motion.div>
      </div>
      
      {/* Conversation & Generated UI */}
      <div className="max-w-4xl mx-auto px-8 pb-32">
        {messages.map((message, index) => {
          const { cleanText, components } = parseUIComponents(message.content);
          
          return (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-8 ${
                message.role === 'user' 
                  ? 'text-right' 
                  : 'text-left'
              }`}
            >
              <p className={`inline-block max-w-[80%] ${
                message.role === 'user'
                  ? 'text-neutral-400'
                  : 'text-white'
              }`}>
                {cleanText}
              </p>
            </motion.div>
          );
        })}
        
        {/* Gráficos Gerados */}
        {generatedCharts.map((chart, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="my-8"
          >
            <DynamicChart data={chart.data} isLoading={!chart.data} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
```

---

## RECEITA 5: Sistema de Atmosfera Global

### 5.1 AtmosphereProvider.tsx

```tsx
// components/generative/AtmosphereProvider.tsx
'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface AtmosphereState {
  mood: 'zen' | 'neutral' | 'electric' | 'urgent';
  goldTemperature: 'cool' | 'warm' | 'hot';
  fluidViscosity: number; // 0-1
  animationSpeed: number; // 0.5-2
}

const defaultState: AtmosphereState = {
  mood: 'neutral',
  goldTemperature: 'warm',
  fluidViscosity: 0.5,
  animationSpeed: 1
};

const AtmosphereContext = createContext<{
  atmosphere: AtmosphereState;
  updateAtmosphere: (updates: Partial<AtmosphereState>) => void;
}>({
  atmosphere: defaultState,
  updateAtmosphere: () => {}
});

export function AtmosphereProvider({ children }: { children: ReactNode }) {
  const [atmosphere, setAtmosphere] = useState<AtmosphereState>(defaultState);
  
  // Busca dados de mercado periodicamente
  useEffect(() => {
    const fetchMarketMood = async () => {
      try {
        const response = await fetch('/api/market-mood');
        const data = await response.json();
        
        // Mapeia dados de mercado para atmosfera
        let newMood: AtmosphereState['mood'] = 'neutral';
        let newTemp: AtmosphereState['goldTemperature'] = 'warm';
        
        if (data.volatilityIndex > 25) {
          newMood = 'electric';
          newTemp = 'hot';
        } else if (data.volatilityIndex < 15) {
          newMood = 'zen';
          newTemp = 'cool';
        }
        
        if (data.dollarChange > 1) {
          newMood = 'urgent';
        }
        
        setAtmosphere(prev => ({
          ...prev,
          mood: newMood,
          goldTemperature: newTemp,
          fluidViscosity: 1 - (data.volatilityIndex / 50),
          animationSpeed: 0.5 + (data.volatilityIndex / 50)
        }));
        
      } catch (error) {
        console.error('Failed to fetch market mood:', error);
      }
    };
    
    fetchMarketMood();
    const interval = setInterval(fetchMarketMood, 60000); // A cada minuto
    
    return () => clearInterval(interval);
  }, []);
  
  // Aplica CSS Variables globais
  useEffect(() => {
    const root = document.documentElement;
    
    const goldColors = {
      cool: '#B8A024',
      warm: '#C9A227',
      hot: '#DAB42A'
    };
    
    root.style.setProperty('--gold-primary', goldColors[atmosphere.goldTemperature]);
    root.style.setProperty('--animation-speed', String(atmosphere.animationSpeed));
    root.style.setProperty('--fluid-viscosity', String(atmosphere.fluidViscosity));
    
    // Data attribute para estilos condicionais
    root.setAttribute('data-mood', atmosphere.mood);
    
  }, [atmosphere]);
  
  const updateAtmosphere = (updates: Partial<AtmosphereState>) => {
    setAtmosphere(prev => ({ ...prev, ...updates }));
  };
  
  return (
    <AtmosphereContext.Provider value={{ atmosphere, updateAtmosphere }}>
      {children}
    </AtmosphereContext.Provider>
  );
}

export const useAtmosphere = () => useContext(AtmosphereContext);
```

### 5.2 CSS Global para Atmosfera

```css
/* styles/atmosphere.css */
:root {
  --gold-primary: #C9A227;
  --animation-speed: 1;
  --fluid-viscosity: 0.5;
}

/* Mood-based styles */
[data-mood="zen"] {
  --background-intensity: 0.03;
  --glow-strength: 0.1;
  --transition-duration: 0.8s;
}

[data-mood="neutral"] {
  --background-intensity: 0.05;
  --glow-strength: 0.2;
  --transition-duration: 0.5s;
}

[data-mood="electric"] {
  --background-intensity: 0.08;
  --glow-strength: 0.4;
  --transition-duration: 0.3s;
}

[data-mood="urgent"] {
  --background-intensity: 0.1;
  --glow-strength: 0.6;
  --transition-duration: 0.2s;
}

/* Aplicação nas animações */
.neural-fluid {
  animation-duration: calc(10s / var(--animation-speed));
}

.gold-glow {
  box-shadow: 0 0 calc(20px * var(--glow-strength)) var(--gold-primary);
}

.sovereign-transition {
  transition-duration: var(--transition-duration);
}
```

---

## RECEITA 6: Upload de Planilha com Drag & Drop

```tsx
// components/generative/DataDropzone.tsx
'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion, AnimatePresence } from 'framer-motion';
import { DynamicChart } from './DynamicChart';

export function DataDropzone() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [chartData, setChartData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;
    
    setIsProcessing(true);
    setError(null);
    
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('question', 'Analise os principais indicadores e tendências');
      
      const response = await fetch('/api/analyze-data', {
        method: 'POST',
        body: formData
      });
      
      if (!response.ok) throw new Error('Falha na análise');
      
      const data = await response.json();
      setChartData(data);
      
    } catch (err) {
      setError('Não foi possível processar o arquivo. Tente novamente.');
    } finally {
      setIsProcessing(false);
    }
  }, []);
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/csv': ['.csv'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'application/vnd.ms-excel': ['.xls']
    },
    maxFiles: 1
  });
  
  return (
    <div className="w-full max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        {!chartData ? (
          <motion.div
            key="dropzone"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            {...getRootProps()}
            className={`
              border-2 border-dashed rounded-2xl p-16 text-center cursor-pointer
              transition-all duration-300
              ${isDragActive 
                ? 'border-amber-500 bg-amber-500/5' 
                : 'border-neutral-800 hover:border-neutral-700'
              }
            `}
          >
            <input {...getInputProps()} />
            
            {isProcessing ? (
              <div className="space-y-4">
                <motion.div
                  className="w-16 h-16 mx-auto border-2 border-amber-500 border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                />
                <p className="text-neutral-400">Alquimista processando dados...</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="text-6xl opacity-20">📊</div>
                <p className="text-xl text-neutral-300">
                  {isDragActive 
                    ? 'Solte o arquivo aqui...' 
                    : 'Arraste uma planilha ou clique para selecionar'
                  }
                </p>
                <p className="text-neutral-600 text-sm">
                  Suporta CSV, XLSX e XLS
                </p>
              </div>
            )}
            
            {error && (
              <p className="text-red-400 mt-4">{error}</p>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="chart"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-light">Análise Gerada</h2>
              <button
                onClick={() => setChartData(null)}
                className="text-neutral-500 hover:text-white transition-colors"
              >
                Nova análise →
              </button>
            </div>
            <DynamicChart data={chartData} isLoading={false} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
```

---

## PRÓXIMOS PASSOS

1. **Implementar RAG para Ademilover** - Treinar com manuais da Ademicon
2. **Conectar APIs de mercado reais** - Yahoo Finance, BCB
3. **Criar biblioteca de templates de gráficos** - 10 tipos pré-estilizados
4. **Implementar Fluido Neural WebGL** - Shader responsivo ao mood
5. **Testes de carga** - Garantir < 3s de resposta

---

**Documento:** MAD_LAB_AURORA_COOKBOOK_IMPLEMENTACAO.md  
**Versão:** 1.0
