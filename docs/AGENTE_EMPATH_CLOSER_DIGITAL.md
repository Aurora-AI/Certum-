# 🧠 AGENTE EMPATH: O CLOSER DIGITAL
## Neuromarketing Computacional em Tempo Real para Conversão Máxima

---

## A TESE CENTRAL

> *"95% das decisões de compra são subconscientes e guiadas por respostas emocionais."*
> — Pesquisas em Psicologia do Consumo

Um vendedor experiente lê a linguagem corporal do cliente: mãos suando, olhar desviando, corpo inclinado para frente. Ele ajusta o tom, o ritmo, as palavras. Ele **sente** o momento de fechar.

O **Agente Empath** faz isso digitalmente.

Cada movimento do mouse é linguagem corporal. Cada padrão de scroll é uma confissão emocional. O site que **lê** esses sinais e **muta** em tempo real não é mais um site — é um **closer que nunca dorme**.

---

## 1. A CIÊNCIA: SINAIS BIOMÉTRICOS DIGITAIS

### 1.1 O Mouse Como Detector de Emoções

O mouse é uma extensão do sistema nervoso. Pesquisas mostram correlação direta entre estados emocionais e padrões de movimento:

| Sinal Digital | Estado Emocional | Base Neurológica |
|---------------|------------------|------------------|
| **Velocidade alta + errático** | Ansiedade | Cortisol elevado, sistema simpático ativado |
| **Velocidade baixa + pausas** | Hesitação/Dúvida | Conflito no córtex pré-frontal |
| **Movimento fluido + direcionado** | Engajamento | Dopamina, estado de flow |
| **Hover longo em CTAs** | Interesse + medo | Amígdala vs sistema de recompensa |
| **Scroll rápido para cima/baixo** | Confusão/Frustração | Carga cognitiva excessiva |
| **Cliques abortados** | Hesitação decisória | Aversão à perda ativada |

### 1.2 Métricas Capturáveis em Tempo Real

```typescript
interface UserBiometrics {
  // Movimento do Mouse
  mouseVelocity: number;           // px/segundo
  mouseAcceleration: number;       // variação de velocidade
  movementPattern: 'linear' | 'curved' | 'erratic' | 'hovering';
  
  // Comportamento de Scroll
  scrollVelocity: number;
  scrollDirection: 'down' | 'up' | 'oscillating';
  scrollDepth: number;             // % da página
  scrollPauses: number;            // quantidade de pausas
  
  // Interação com Elementos
  hoverDuration: Map<string, number>;  // elemento → tempo
  clickAttempts: number;               // cliques não concluídos
  formFieldTime: Map<string, number>;  // tempo em cada campo
  backspaceRatio: number;              // hesitação na digitação
  
  // Temporais
  timeOnPage: number;
  timeSinceLastInteraction: number;
  sessionDepth: number;            // páginas visitadas
  returnVisitor: boolean;
}
```

---

## 2. OS CINCO ESTADOS EMOCIONAIS

### 2.1 Mapeamento de Estados

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        MATRIZ EMOCIONAL DO USUÁRIO                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│                           ALTA ENERGIA                                       │
│                               ▲                                             │
│                               │                                             │
│              ┌────────────────┼────────────────┐                           │
│              │   ANSIOSO      │    EXCITADO    │                           │
│              │   😰           │    🔥          │                           │
│              │   Medo +       │    Desejo +    │                           │
│              │   Urgência     │    Impulso     │                           │
│   NEGATIVO ◄─┼────────────────┼────────────────┼─► POSITIVO                │
│              │   CONFUSO      │    ENGAJADO    │                           │
│              │   😕           │    🎯          │                           │
│              │   Frustração + │    Flow +      │                           │
│              │   Abandono     │    Exploração  │                           │
│              └────────────────┼────────────────┘                           │
│                               │                                             │
│                               ▼                                             │
│                          BAIXA ENERGIA                                       │
│                                                                             │
│                    ┌──────────────────────┐                                │
│                    │      HESITANTE       │                                │
│                    │      🤔              │                                │
│                    │      Interesse +     │                                │
│                    │      Dúvida          │                                │
│                    └──────────────────────┘                                │
│                         (Estado Neutro)                                     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 2.2 Detecção de Cada Estado

```python
from crewai import Agent, Task
from enum import Enum
from dataclasses import dataclass

class EmotionalState(Enum):
    ANXIOUS = "anxious"       # Alto cortisol, precisa acalmar
    HESITANT = "hesitant"     # Em cima do muro, precisa validação
    CONFUSED = "confused"     # Perdido, precisa simplificação
    ENGAGED = "engaged"       # No flow, precisa profundidade
    EXCITED = "excited"       # Pronto para comprar, precisa facilitação

@dataclass
class EmotionalSignature:
    state: EmotionalState
    confidence: float         # 0-1
    intensity: float          # 0-1
    triggers: list[str]       # O que causou essa leitura
    recommended_mutation: str # Ação sugerida

# Agente Empath - O Leitor de Almas Digitais
empath_agent = Agent(
    role="Psicólogo Comportamental Digital",
    goal="""Analisar micro-sinais de comportamento do usuário e 
            determinar seu estado emocional com precisão cirúrgica.
            Sua leitura guiará mutações do site para maximizar conversão.""",
    backstory="""Você é um híbrido de Paul Ekman (microexpressões), 
                 Daniel Kahneman (decisão) e Jordan Belfort (vendas).
                 Você lê pessoas através de pixels. Cada movimento do mouse
                 é uma confissão. Cada pausa é uma hesitação que você
                 transforma em oportunidade.""",
    verbose=True
)

def detect_emotional_state(biometrics: dict) -> EmotionalSignature:
    """
    Algoritmo de detecção baseado em heurísticas comportamentais.
    Em produção, isso seria um modelo ML treinado em dados reais.
    """
    
    # Extrai métricas
    mouse_vel = biometrics.get('mouseVelocity', 0)
    scroll_pattern = biometrics.get('scrollDirection', 'down')
    hover_on_cta = biometrics.get('hoverDurationCTA', 0)
    click_attempts = biometrics.get('clickAttempts', 0)
    time_on_page = biometrics.get('timeOnPage', 0)
    
    triggers = []
    
    # ANSIOSO: Movimento rápido + errático + cliques abortados
    if mouse_vel > 800 and click_attempts > 2:
        triggers.append("high_velocity_erratic")
        triggers.append("aborted_clicks")
        return EmotionalSignature(
            state=EmotionalState.ANXIOUS,
            confidence=0.85,
            intensity=min(mouse_vel / 1000, 1.0),
            triggers=triggers,
            recommended_mutation="calm_and_reassure"
        )
    
    # CONFUSO: Scroll oscilante + tempo alto + sem interação com CTAs
    if scroll_pattern == 'oscillating' and time_on_page > 60 and hover_on_cta < 1:
        triggers.append("oscillating_scroll")
        triggers.append("long_time_no_action")
        return EmotionalSignature(
            state=EmotionalState.CONFUSED,
            confidence=0.80,
            intensity=0.7,
            triggers=triggers,
            recommended_mutation="simplify_and_guide"
        )
    
    # HESITANTE: Hover longo em CTA + sem clique + movimento lento
    if hover_on_cta > 3 and click_attempts == 0 and mouse_vel < 200:
        triggers.append("long_hover_no_click")
        triggers.append("slow_movement")
        return EmotionalSignature(
            state=EmotionalState.HESITANT,
            confidence=0.90,
            intensity=0.6,
            triggers=triggers,
            recommended_mutation="validate_and_encourage"
        )
    
    # EXCITADO: Movimento direcionado + hover em CTA + velocidade média-alta
    if hover_on_cta > 2 and mouse_vel > 400 and click_attempts > 0:
        triggers.append("directed_movement")
        triggers.append("cta_interest")
        return EmotionalSignature(
            state=EmotionalState.EXCITED,
            confidence=0.88,
            intensity=0.85,
            triggers=triggers,
            recommended_mutation="facilitate_conversion"
        )
    
    # ENGAJADO: Scroll constante + tempo moderado + movimento fluido
    if scroll_pattern == 'down' and 30 < time_on_page < 120:
        triggers.append("steady_scroll")
        triggers.append("healthy_engagement")
        return EmotionalSignature(
            state=EmotionalState.ENGAGED,
            confidence=0.75,
            intensity=0.5,
            triggers=triggers,
            recommended_mutation="deepen_experience"
        )
    
    # Default: Hesitante (estado mais seguro para assumir)
    return EmotionalSignature(
        state=EmotionalState.HESITANT,
        confidence=0.5,
        intensity=0.3,
        triggers=["no_clear_pattern"],
        recommended_mutation="gentle_guidance"
    )
```

---

## 3. AS MUTAÇÕES: O SITE QUE SE TRANSFORMA

### 3.1 Matriz de Mutações por Estado

```
┌──────────────┬─────────────────────────────────────────────────────────────┐
│   ESTADO     │                    MUTAÇÕES DO SITE                         │
├──────────────┼─────────────────────────────────────────────────────────────┤
│              │                                                             │
│   ANSIOSO    │  ► Cores mais suaves (dourado → champagne)                 │
│   😰         │  ► Animações desaceleram 40%                                │
│              │  ► Mensagem de segurança aparece: "Sem compromisso"         │
│              │  ► Fluido neural fica mais calmo e denso                    │
│              │  ► Remove contadores de urgência                            │
│              │  ► Chat sugere: "Posso tirar alguma dúvida?"               │
│              │                                                             │
├──────────────┼─────────────────────────────────────────────────────────────┤
│              │                                                             │
│   HESITANTE  │  ► Social proof surge suavemente (depoimentos)             │
│   🤔         │  ► Números de validação aparecem ("+2.000 clientes")       │
│              │  ► Garantia é destacada com brilho sutil                    │
│              │  ► CTA muda: "Agendar" → "Conversar sem compromisso"       │
│              │  ► Seção "Perguntas Frequentes" sobe no viewport           │
│              │  ► Concierge oferece: "Posso simular para você?"           │
│              │                                                             │
├──────────────┼─────────────────────────────────────────────────────────────┤
│              │                                                             │
│   CONFUSO    │  ► Elementos secundários esmaecemm (focus mode)            │
│   😕         │  ► CTA principal ganha destaque magnético                   │
│              │  ► Menu simplifica para 3 opções                            │
│              │  ► Overlay de ajuda aparece: "Posso guiá-lo?"              │
│              │  ► Breadcrumbs ficam mais visíveis                          │
│              │  ► Conteúdo colapsa em accordion para reduzir carga        │
│              │                                                             │
├──────────────┼─────────────────────────────────────────────────────────────┤
│              │                                                             │
│   ENGAJADO   │  ► Conteúdo adicional é revelado (parallax aprofunda)      │
│   🎯         │  ► Seções "avançadas" desbloqueiam                          │
│              │  ► Simuladores interativos aparecem                         │
│              │  ► Animações ganham mais detalhes e camadas                 │
│              │  ► Concierge oferece: "Quer ver casos similares ao seu?"   │
│              │  ► Cross-sell sutil de produtos relacionados                │
│              │                                                             │
├──────────────┼─────────────────────────────────────────────────────────────┤
│              │                                                             │
│   EXCITADO   │  ► CTA se torna MAGNÉTICO (atrai cursor)                   │
│   🔥         │  ► Formulário simplifica para 2 campos                      │
│              │  ► Micro-urgência: "Consultor disponível agora"            │
│              │  ► Animação de "porta abrindo" no botão                     │
│              │  ► Remove distrações, foco 100% na conversão               │
│              │  ► Confirmação de segurança final: "Seus dados protegidos" │
│              │                                                             │
└──────────────┴─────────────────────────────────────────────────────────────┘
```

### 3.2 Implementação: Mutation Engine

```typescript
// lib/mutation-engine.ts
import { gsap } from 'gsap';

interface MutationConfig {
  colorShift: {
    primary: string;
    intensity: number;
  };
  animationSpeed: number;
  uiElements: {
    show: string[];
    hide: string[];
    highlight: string[];
  };
  messaging: {
    ctaText?: string;
    conciergePrompt?: string;
    trustSignals?: string[];
  };
  fluidSettings: {
    viscosity: number;
    speed: number;
    turbulence: number;
  };
}

const MUTATION_CONFIGS: Record<string, MutationConfig> = {
  
  // ═══════════════════════════════════════════════════════════════
  // ANSIOSO → ACALMAR
  // ═══════════════════════════════════════════════════════════════
  calm_and_reassure: {
    colorShift: {
      primary: '#E5DDD3',  // Off-white suave
      intensity: 0.7
    },
    animationSpeed: 0.6,   // 40% mais lento
    uiElements: {
      show: ['#trust-badges', '#no-commitment-message', '#security-icons'],
      hide: ['#urgency-counter', '#limited-offer'],
      highlight: ['#guarantee-section']
    },
    messaging: {
      ctaText: 'Conhecer sem compromisso',
      conciergePrompt: 'Olá! Posso esclarecer alguma dúvida antes de continuar?',
      trustSignals: ['Dados 100% protegidos', 'Sem cadastro obrigatório']
    },
    fluidSettings: {
      viscosity: 0.8,      // Mais denso = mais calmo
      speed: 0.4,
      turbulence: 0.1
    }
  },
  
  // ═══════════════════════════════════════════════════════════════
  // HESITANTE → VALIDAR E ENCORAJAR
  // ═══════════════════════════════════════════════════════════════
  validate_and_encourage: {
    colorShift: {
      primary: '#C9A227',  // Dourado padrão
      intensity: 0.5
    },
    animationSpeed: 0.85,
    uiElements: {
      show: ['#testimonials-carousel', '#client-counter', '#faq-section'],
      hide: [],
      highlight: ['#guarantee-badge', '#main-cta']
    },
    messaging: {
      ctaText: 'Conversar com especialista',
      conciergePrompt: 'Muitos clientes tinham dúvidas similares. Posso fazer uma simulação rápida para você?',
      trustSignals: ['+2.847 famílias protegidas', 'Nota 4.9 no Google']
    },
    fluidSettings: {
      viscosity: 0.5,
      speed: 0.6,
      turbulence: 0.2
    }
  },
  
  // ═══════════════════════════════════════════════════════════════
  // CONFUSO → SIMPLIFICAR E GUIAR
  // ═══════════════════════════════════════════════════════════════
  simplify_and_guide: {
    colorShift: {
      primary: '#FFFFFF',
      intensity: 0.3
    },
    animationSpeed: 0.7,
    uiElements: {
      show: ['#help-overlay', '#breadcrumbs', '#simplified-menu'],
      hide: ['#secondary-content', '#sidebar-widgets', '#complex-charts'],
      highlight: ['#main-cta']
    },
    messaging: {
      ctaText: 'Falar com consultor',
      conciergePrompt: 'Parece que você está explorando opções. Posso ajudá-lo a encontrar o que precisa?',
      trustSignals: ['Atendimento humanizado']
    },
    fluidSettings: {
      viscosity: 0.6,
      speed: 0.3,
      turbulence: 0.05
    }
  },
  
  // ═══════════════════════════════════════════════════════════════
  // ENGAJADO → APROFUNDAR
  // ═══════════════════════════════════════════════════════════════
  deepen_experience: {
    colorShift: {
      primary: '#C9A227',
      intensity: 0.8
    },
    animationSpeed: 1.0,
    uiElements: {
      show: ['#advanced-simulators', '#case-studies', '#detailed-charts', '#cross-sell'],
      hide: ['#basic-intro'],
      highlight: []
    },
    messaging: {
      ctaText: 'Simular meu cenário',
      conciergePrompt: 'Excelente exploração! Quer ver casos de clientes com perfil similar ao seu?',
      trustSignals: []
    },
    fluidSettings: {
      viscosity: 0.4,
      speed: 0.8,
      turbulence: 0.3
    }
  },
  
  // ═══════════════════════════════════════════════════════════════
  // EXCITADO → FACILITAR CONVERSÃO
  // ═══════════════════════════════════════════════════════════════
  facilitate_conversion: {
    colorShift: {
      primary: '#DAB42A',  // Dourado mais vibrante
      intensity: 1.0
    },
    animationSpeed: 1.2,
    uiElements: {
      show: ['#quick-form', '#consultant-available', '#final-trust-badge'],
      hide: ['#extensive-content', '#navigation-menu'],
      highlight: ['#main-cta']
    },
    messaging: {
      ctaText: 'Agendar agora →',
      conciergePrompt: 'Perfeito momento! Temos um consultor disponível agora. Posso conectá-lo?',
      trustSignals: ['Consultor disponível', 'Resposta em 2 minutos']
    },
    fluidSettings: {
      viscosity: 0.3,
      speed: 1.0,
      turbulence: 0.4
    }
  }
};

// ═══════════════════════════════════════════════════════════════
// MUTATION ENGINE - O Transformador
// ═══════════════════════════════════════════════════════════════

export class MutationEngine {
  private currentState: string = 'neutral';
  private transitionDuration: number = 0.8;
  
  async applyMutation(mutationType: string): Promise<void> {
    if (this.currentState === mutationType) return;
    
    const config = MUTATION_CONFIGS[mutationType];
    if (!config) return;
    
    // Transição suave entre estados
    await this.transitionColors(config.colorShift);
    await this.adjustAnimationSpeed(config.animationSpeed);
    await this.toggleUIElements(config.uiElements);
    await this.updateMessaging(config.messaging);
    await this.adjustFluid(config.fluidSettings);
    
    this.currentState = mutationType;
    
    // Analytics: registra a mutação
    this.trackMutation(mutationType);
  }
  
  private async transitionColors(shift: MutationConfig['colorShift']): Promise<void> {
    const root = document.documentElement;
    
    gsap.to(root, {
      '--gold-primary': shift.primary,
      '--color-intensity': shift.intensity,
      duration: this.transitionDuration,
      ease: 'power2.inOut'
    });
  }
  
  private async adjustAnimationSpeed(speed: number): Promise<void> {
    document.documentElement.style.setProperty('--animation-speed', String(speed));
    
    // Ajusta todas as animações GSAP em andamento
    gsap.globalTimeline.timeScale(speed);
  }
  
  private async toggleUIElements(elements: MutationConfig['uiElements']): Promise<void> {
    const timeline = gsap.timeline();
    
    // Esconde elementos
    elements.hide.forEach(selector => {
      const el = document.querySelector(selector);
      if (el) {
        timeline.to(el, {
          opacity: 0,
          y: -10,
          duration: 0.3,
          ease: 'power2.in'
        }, '<');
      }
    });
    
    // Mostra elementos
    elements.show.forEach(selector => {
      const el = document.querySelector(selector);
      if (el) {
        timeline.fromTo(el, 
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
          '<0.1'
        );
      }
    });
    
    // Destaca elementos
    elements.highlight.forEach(selector => {
      const el = document.querySelector(selector);
      if (el) {
        timeline.to(el, {
          boxShadow: '0 0 30px rgba(201, 162, 39, 0.5)',
          scale: 1.02,
          duration: 0.5,
          ease: 'power2.out'
        }, '<');
      }
    });
    
    await timeline.play();
  }
  
  private async updateMessaging(messaging: MutationConfig['messaging']): Promise<void> {
    // Atualiza texto do CTA principal
    if (messaging.ctaText) {
      const cta = document.querySelector('#main-cta');
      if (cta) {
        gsap.to(cta, { opacity: 0, duration: 0.2, onComplete: () => {
          cta.textContent = messaging.ctaText!;
          gsap.to(cta, { opacity: 1, duration: 0.2 });
        }});
      }
    }
    
    // Atualiza prompt do Concierge
    if (messaging.conciergePrompt) {
      window.dispatchEvent(new CustomEvent('concierge:update', {
        detail: { prompt: messaging.conciergePrompt }
      }));
    }
    
    // Atualiza trust signals
    if (messaging.trustSignals?.length) {
      const container = document.querySelector('#trust-signals');
      if (container) {
        container.innerHTML = messaging.trustSignals
          .map(signal => `<span class="trust-signal">${signal}</span>`)
          .join('');
      }
    }
  }
  
  private async adjustFluid(settings: MutationConfig['fluidSettings']): Promise<void> {
    // Comunica com o shader do fluido neural
    window.dispatchEvent(new CustomEvent('fluid:update', {
      detail: settings
    }));
  }
  
  private trackMutation(type: string): void {
    // Analytics para medir eficácia das mutações
    if (typeof gtag !== 'undefined') {
      gtag('event', 'site_mutation', {
        mutation_type: type,
        previous_state: this.currentState,
        timestamp: Date.now()
      });
    }
  }
}
```

---

## 4. INTEGRAÇÃO COM CREWAI: O CÉREBRO EMOCIONAL

### 4.1 Crew Completa de Análise Emocional

```python
from crewai import Agent, Task, Crew, Process

# ═══════════════════════════════════════════════════════════════
# AGENTE 1: EMPATH (Leitor de Sinais)
# ═══════════════════════════════════════════════════════════════
empath_agent = Agent(
    role="Psicólogo Comportamental Digital",
    goal="""Analisar sinais comportamentais do usuário e determinar 
            seu estado emocional com precisão.""",
    backstory="""Você estudou microexpressões com Paul Ekman, economia 
                 comportamental com Kahneman e vendas com Jordan Belfort.
                 Você vê o que outros não veem: a hesitação de 200ms antes
                 de um clique, o scroll nervoso, o hover contemplativo.""",
    verbose=True
)

# ═══════════════════════════════════════════════════════════════
# AGENTE 2: STRATEGIST (Decisor de Mutação)
# ═══════════════════════════════════════════════════════════════
strategist_agent = Agent(
    role="Estrategista de Conversão",
    goal="""Decidir qual mutação aplicar no site para maximizar 
            a probabilidade de conversão sem manipulação antiética.""",
    backstory="""Você é um mestre em persuasão ética. Seu trabalho não é
                 enganar — é AJUDAR. Se o usuário está ansioso, você o
                 acalma porque isso é o CERTO e também converte mais.
                 Você encontra o caminho onde ética e resultado convergem.""",
    verbose=True
)

# ═══════════════════════════════════════════════════════════════
# AGENTE 3: CLOSER (Executor de Conversão)  
# ═══════════════════════════════════════════════════════════════
closer_agent = Agent(
    role="Closer Digital",
    goal="""Quando o momento é certo, garantir que a conversão aconteça
            removendo todas as fricções e facilitando a ação.""",
    backstory="""Você foi treinado pelos melhores closers do mundo.
                 Você sabe que o momento de fechar é SAGRADO — chega
                 uma vez e se você perder, perdeu. Quando o Strategist
                 diz que o usuário está EXCITADO, você entra em ação.""",
    verbose=True
)

# ═══════════════════════════════════════════════════════════════
# TASKS
# ═══════════════════════════════════════════════════════════════

analyze_task = Task(
    description="""
    Analise os sinais biométricos do usuário:
    {biometrics}
    
    Determine:
    1. Estado emocional primário (anxious/hesitant/confused/engaged/excited)
    2. Confiança na leitura (0-100%)
    3. Intensidade do estado (0-100%)
    4. Gatilhos que levaram a essa conclusão
    
    Seja preciso. Uma leitura errada pode custar a conversão.
    """,
    expected_output="EmotionalSignature com estado, confiança e gatilhos",
    agent=empath_agent
)

strategize_task = Task(
    description="""
    Baseado na leitura emocional do Empath:
    {emotional_state}
    
    Decida:
    1. Qual mutação aplicar no site?
    2. Qual é a justificativa ÉTICA para essa mutação?
    3. Qual é o resultado esperado em termos de conversão?
    4. Há algum risco de parecer manipulativo? Como mitigar?
    
    Lembre-se: Nosso objetivo é AJUDAR o usuário a tomar uma decisão
    que é BOA PARA ELE. Se acalmar um usuário ansioso o ajuda a pensar
    melhor, isso é ético E eficaz.
    """,
    expected_output="MutationStrategy com tipo, justificativa e expectativas",
    agent=strategist_agent,
    context=[analyze_task]
)

close_task = Task(
    description="""
    O usuário está em estado EXCITADO (pronto para converter).
    
    Execute o protocolo de fechamento:
    1. Quais elementos de UI priorizar?
    2. Qual mensagem do Concierge enviar?
    3. Como simplificar o formulário ao máximo?
    4. Qual é o "empurrão final" mais elegante?
    
    IMPORTANTE: Não seja agressivo. Seja como água — facilite o caminho
    que o usuário JÁ QUER seguir.
    """,
    expected_output="ClosingProtocol com ações específicas",
    agent=closer_agent,
    context=[analyze_task, strategize_task]
)

# ═══════════════════════════════════════════════════════════════
# CREW: Emotional Intelligence Unit
# ═══════════════════════════════════════════════════════════════

emotional_crew = Crew(
    agents=[empath_agent, strategist_agent, closer_agent],
    tasks=[analyze_task, strategize_task, close_task],
    process=Process.sequential,
    verbose=True
)

# Execução
def process_user_behavior(biometrics: dict) -> dict:
    result = emotional_crew.kickoff(inputs={
        "biometrics": biometrics
    })
    return result
```

---

## 5. FLUXO COMPLETO: DO PIXEL À CONVERSÃO

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         FLUXO DO AGENTE EMPATH                              │
└─────────────────────────────────────────────────────────────────────────────┘

     USUÁRIO                    FRONTEND                      CREWAI
        │                          │                            │
        │── Move mouse ──────────▶│                            │
        │── Scrolla ─────────────▶│                            │
        │── Pausa em CTA ────────▶│                            │
        │                          │                            │
        │                          │  ┌────────────────────┐   │
        │                          │  │ BIOMETRICS         │   │
        │                          │  │ COLLECTOR          │   │
        │                          │  │ (cada 500ms)       │   │
        │                          │  └────────────────────┘   │
        │                          │           │               │
        │                          │           ▼               │
        │                          │──── POST /api/empath ────▶│
        │                          │                            │
        │                          │           ┌───────────────┴───────────┐
        │                          │           │                           │
        │                          │           ▼                           │
        │                          │    ┌─────────────┐                    │
        │                          │    │   EMPATH    │ "Usuário hesitante"│
        │                          │    │   AGENT     │ Confiança: 87%     │
        │                          │    └─────────────┘                    │
        │                          │           │                           │
        │                          │           ▼                           │
        │                          │    ┌─────────────┐                    │
        │                          │    │ STRATEGIST  │ "Aplicar validação"│
        │                          │    │   AGENT     │ Mostrar social proof│
        │                          │    └─────────────┘                    │
        │                          │           │                           │
        │                          │           └───────────┬───────────────┘
        │                          │                       │
        │                          │◀──── MUTATION ────────┘
        │                          │      CONFIG
        │                          │
        │  ┌───────────────────────┴───────────────────────┐
        │  │                                               │
        │  │  MUTATION ENGINE APLICA:                      │
        │  │  ► Depoimentos surgem suavemente              │
        │  │  ► Badge de garantia ganha brilho             │
        │  │  ► CTA muda para "Conversar sem compromisso"  │
        │  │  ► Concierge: "Muitos tinham dúvidas..."      │
        │  │                                               │
        │  └───────────────────────────────────────────────┘
        │                          │
        │◀─── Site MUTA ──────────│
        │     suavemente           │
        │                          │
        │                          │
        │── Clica no CTA ────────▶│
        │                          │
        │                          │──── Estado: EXCITED ────▶│
        │                          │                           │
        │                          │           ┌───────────────┴───────────┐
        │                          │           │                           │
        │                          │           ▼                           │
        │                          │    ┌─────────────┐                    │
        │                          │    │   CLOSER    │ "Facilitar agora"  │
        │                          │    │   AGENT     │                    │
        │                          │    └─────────────┘                    │
        │                          │           │                           │
        │                          │           └───────────┬───────────────┘
        │                          │                       │
        │                          │◀──── CLOSING ─────────┘
        │                          │      PROTOCOL
        │                          │
        │  ┌───────────────────────┴───────────────────────┐
        │  │                                               │
        │  │  ► Formulário simplifica para 2 campos        │
        │  │  ► "Consultor disponível agora" aparece       │
        │  │  ► Distrações somem                           │
        │  │  ► CTA magnético atrai cursor                 │
        │  │                                               │
        │  └───────────────────────────────────────────────┘
        │                          │
        │◀─── 🎯 CONVERSÃO ────────│
        │                          │
```

---

## 6. MÉTRICAS DE SUCESSO

| Métrica | Baseline | Meta com Empath | Como Medir |
|---------|----------|-----------------|------------|
| **Taxa de Conversão** | 2.5% | 5-7% | Leads / Visitantes únicos |
| **Tempo até Conversão** | 8 min | 4 min | Analytics de funil |
| **Bounce Rate** | 45% | 25% | GA4 |
| **Scroll Depth** | 40% | 70% | Hotjar / Custom |
| **Hover em CTA** | 15% usuários | 40% usuários | Custom tracking |
| **Cliques Abortados** | 12% | 4% | Custom tracking |

---

## 7. CONSIDERAÇÕES ÉTICAS

### 7.1 O Princípio Aurora de Persuasão

> *"Não manipulamos. Ajudamos."*

O Agente Empath opera sob princípios éticos rígidos:

1. **Transparência**: O usuário pode saber que o site se adapta (disclosure no footer)
2. **Benefício Mútuo**: Cada mutação deve AJUDAR o usuário, não apenas converter
3. **Sem Dark Patterns**: Nunca criamos urgência falsa ou escassez artificial
4. **Reversibilidade**: O usuário sempre pode "resetar" a experiência
5. **Dados Mínimos**: Coletamos apenas sinais comportamentais, não dados pessoais

### 7.2 A Diferença Entre Persuasão e Manipulação

| Persuasão (Ética) | Manipulação (Antiética) |
|-------------------|-------------------------|
| Acalmar usuário ansioso | Criar ansiedade artificial |
| Mostrar social proof real | Fabricar depoimentos |
| Simplificar para confuso | Esconder informações |
| Facilitar decisão pronta | Pressionar decisão imatura |
| Validar hesitação legítima | Ignorar objeções válidas |

---

## 8. IMPLEMENTAÇÃO FASEADA

### Fase 1: Coleta (Semana 1-2)
- [ ] Implementar BiometricsCollector no frontend
- [ ] Criar dashboard de visualização de dados
- [ ] Estabelecer baseline de métricas

### Fase 2: Detecção (Semana 3-4)
- [ ] Treinar modelo de detecção de estados
- [ ] Validar com dados reais
- [ ] Ajustar thresholds

### Fase 3: Mutação (Semana 5-6)
- [ ] Implementar MutationEngine
- [ ] Criar animações de transição
- [ ] Testar performance

### Fase 4: Integração CrewAI (Semana 7-8)
- [ ] Deploy dos agentes
- [ ] Integração via API
- [ ] Testes de latência

### Fase 5: Otimização (Semana 9+)
- [ ] A/B testing de mutações
- [ ] Refinamento contínuo
- [ ] Expansão de estados detectáveis

---

## CONCLUSÃO: O SITE QUE SENTE

O Agente Empath transforma o website de uma ferramenta passiva em um **organismo perceptivo**. Ele não apenas exibe informação — ele **lê**, **interpreta** e **responde** ao estado emocional do usuário em tempo real.

Isso não é ficção científica. É a convergência de:
- Pesquisa em comportamento digital
- Capacidades de processamento em tempo real
- Sistemas multiagente com CrewAI
- Princípios de neurodesign do projeto Aurora

O resultado é um site que fecha vendas como um closer experiente: **lendo o momento, ajustando a abordagem, facilitando a decisão**.

> *"O site sente o usuário. O usuário sente o site sentindo."*
> — Manifesto Mad Lab Aurora

---

**Documento:** AGENTE_EMPATH_CLOSER_DIGITAL.md  
**Versão:** 1.0  
**Data:** Fevereiro 2025  
**Classificação:** Estratégico  
**Autor:** Mad Lab Aurora
