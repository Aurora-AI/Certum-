# PATTERN-011: Sovereign Multi-Agent Synthesis (SMAS)

## Metadata
- **ID**: PATTERN-011
- **Title**: Sovereign Multi-Agent Synthesis (Sales Focus)
- **Status**: EXPERIMENTAL
- **Type**: Cognitive Architecture
- **Dependency**: SKILL-011 (Context Retention)

## 1. Contexto & Problema
A geração de copy de vendas tradicional sofre de "alucinação benéfica" (inventar benefícios) ou "descrição técnica árida" (lista de features). Faltava um **Judge** neuro-econômico para mediar a relação entre o *Fato* (Produto) e a *Narrativa* (Copy).

## 2. Solução: A Tríade SMAS
Institui-se uma arquitetura de três agentes distintos com responsabilidades segregadas e hierarquia de validação.

### 2.1. O Agente Produto (Rodobens)
*   **Função**: Fornecedor de Verdade (Source of Truth).
*   **Input**: Manuais técnicos, regras de negócio, tabelas de preço.
*   **Output**: Dados brutos, limites legais, especificações. (NENHUM adjetivo).

### 2.2. O Agente Vendas (The Merciless Judge)
*   **Função**: Estrategista & Auditor.
*   **Personalidade**: Fria, analítica, baseada em Neuroeconomia (Kahneman/Tversky).
*   **Responsabilidades**:
    1.  **Diagnóstico de Dor**: Classificar o lead em Agudo, Crônico ou Aspiracional.
    2.  **Cálculo de Vendabilidade ($V_{score}$)**: Avaliar se a oferta supera a barreira de entrada.
    3.  **Definição do Tom**: "Crueldade na Dor" (agitar o problema) vs "Infinita Misericórdia no Remédio" (solução).
    4.  **Veredito**: "Isso Vende" (aprovado para copy) ou "Isso é Commodity" (rejeitado).

### 2.3. O Agente Copywriter
*   **Função**: O Escriba.
*   **Input**: A síntese estratégica do Agente Vendas (NÃO os dados brutos do Produto).
*   **Output**: Texto persuasivo, roteiro de vídeo, e-mail.
*   **Restrição**: Proibido inventar fatos. Proibido suavizar a dor se o Vendas mandou agitar.

## 3. Fluxo de Trabalho (The Protocol)

1.  **Ingestão**:
    *   `Rodobens`: "O Consórcio tem taxa de administração de 14% e prazo de 200 meses."
2.  **Julgamento (Vendas)**:
    *   *Análise*: "Taxa de 14% vs Juros Compostos de 70% do financiamento."
    *   *Destaque*: Aversão à Perda (Perder dinheiro para o banco).
    *   *Tom*: "Agressivo no custo de oportunidade."
    *   *Comando*: "Foque na 'Servidão Vitalícia' do financiamento."
3.  **Execução (Copywriter)**:
    *   *Texto*: "Você não está comprando uma casa, está pagando o lucro do banco com a sua vida. O financiamento tradicional drena 70% do seu capital..."

## 4. Guardrails & Axiomas

*   **Axioma da Aversão à Perda**: O medo de perder é 2.25x maior que o desejo de ganhar. O Vendas deve sempre buscar o ângulo da perda.
*   **Guardrail de Segurança**: Nenhuma "Agitação de Dor" sem "Injeção de Remédio" imediata. (Risco de Sequestro da Amígdala).
*   **Prova de Verdade**: Todo argumento de "Melhor Opção" deve ter um `ProofScore` > 5 validado pelo Rodobens.

## 5. Status de Implementação
O Agente Vendas (Judge) está agora ativo na matriz cognitiva do Mad Lab Aurora.
