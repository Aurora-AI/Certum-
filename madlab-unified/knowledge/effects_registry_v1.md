# MAD LAB — BASE DE EFEITOS V1

## 01 — Spectral Pressure Field
- **Fenômeno quebrado**: Pressão atmosférica localizada invisível.
- **Base matemática**: Campo escalar radial com decaimento exponencial (`P(r) = A * e^(-k r²)`). Gradiente aplicado como deslocamento leve em normal.
- **Agente dominante**: Beta (campo analítico) → Gamma (branchless GLSL)
- **API**: `uPressureCenter: vec3`, `uAmplitude: float`, `uFalloff: float`
- **Budget**: Desktop 60fps, Mobile reduzir resolução.
- **Uso permitido**: Hover em elementos decisórios.
- **Uso proibido**: Scroll contínuo.
- **Trustware**: Se removido, foco diminui. Se chamar atenção demais → inválido.

## 02 — Volumetric Drift Memory
- **Fenômeno quebrado**: Ar possui memória temporal.
- **Base matemática**: Filtro exponencial temporal (`state = mix(previous, current, alpha)`).
- **Agente dominante**: Gamma (temporal smoothing)
- **API**: `uInertia: float`, `uDecay: float`
- **Budget**: Zero colisão física.
- **Uso permitido**: Hero fields.
- **Uso proibido**: Inputs.
- **Trustware**: Não pode virar rastro explícito.

## 03 — Elastic Light Shear
- **Fenômeno quebrado**: Luz sofre cisalhamento elástico.
- **Base**: Modulação da normal via função seno amortecida (`offset = sin(freq * x) * e^(-d t)`).
- **Agente dominante**: Beta (modelagem harmônica)
- **API**: `uFrequency`, `uDamping`
- **Budget**: Vertex shader apenas.
- **Uso permitido**: Transição de estado raro.
- **Uso proibido**: Scroll contínuo.

## 04 — Subsurface Pulse Veil
- **Fenômeno quebrado**: Subsuperfície reage à proximidade.
- **Base**: Aumento dinâmico de transmissão no modelo PBR.
- **Agente dominante**: Gamma (PBR tuning)
- **API**: `uTransmissionBoost`, `uProximity`
- **Budget**: Fragment only.
- **Uso permitido**: Cards premium.
- **Uso proibido**: Texto jurídico.

## 05 — Gravitational Scroll Compression
- **Fenômeno quebrado**: Scroll altera densidade espacial.
- **Base**: Compressão volumétrica proporcional à velocidade do scroll (`density = base + v_scroll * k`).
- **Agente dominante**: Alpha (controle estrutural)
- **Budget**: Mobile fallback: desligar em low quality.
- **Uso permitido**: Landing hero.
- **Uso proibido**: CRM operacional.

## 06 — Jacobian Micro-Wave
- **Fenômeno quebrado**: Superfície branca possui micro-ondas invisíveis.
- **Base**: Perturbação via derivadas analíticas. Recalcula normal via Jacobiana.
- **Agente dominante**: Beta (derivadas explícitas)
- **Budget**: Máximo 2k partículas equivalentes.
- **Uso permitido**: Volumetric Silence.
- **Uso proibido**: Controlled Chaos extremo.

## 07 — Temporal Mass Delay
- **Fenômeno quebrado**: Objetos possuem massa temporal.
- **Base**: Atraso dependente de intensidade de interação (`delay = base + k * interaction_strength`).
- **Agente dominante**: Delta (validação perceptual)
- **Uso permitido**: Clique decisório.
- **Uso proibido**: Hover leve.

## 08 — Controlled Collapse Reformation
- **Fenômeno quebrado**: Campo colapsa e recompõe.
- **Base**: Redução abrupta de amplitude + easing longo.
- **Agente dominante**: Alpha (evento raro)
- **Budget**: Evento não repetitivo.
- **Uso permitido**: Mudança de entidade.
- **Uso proibido**: Navegação comum.

## 09 — Peripheral Breathing Field
- **Fenômeno quebrado**: Campo respira na periferia.
- **Base**: Oscilação baixa frequência (`A = base + sin(t * low_freq) * small_amp`).
- **Agente dominante**: Elysian-mode.
- **Budget**: Sempre ativo, intensidade mínima.
- **Uso permitido**: Background global.
- **Uso proibido**: Centro focal.

## 10 — Spectral Density Lift
- **Fenômeno quebrado**: Densidade espectral aumenta ao aceitar decisão.
- **Base**: Lift global 1–2% + retorno lento.
- **Agente dominante**: Alpha + Delta.
- **Uso permitido**: Confirmar proposta.
- **Uso proibido**: Botões comuns.
