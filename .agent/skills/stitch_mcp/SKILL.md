---
name: stitch-mcp-integration
description: Skill para integração com o Stitch MCP (Google) para geração automática de designs de UI via IA. Permite criar landing pages e componentes visuais a partir de prompts de texto.
---

# Stitch MCP Integration Skill

## Overview

O Stitch é uma plataforma de design de UI da Google que utiliza modelos Gemini para gerar designs completos a partir de prompts de texto. Esta skill permite integração direta via MCP (Model Context Protocol).

## Configuração Necessária

### 1. Instalar Google Cloud SDK

```bash
# Via Homebrew (macOS)
brew install --cask google-cloud-sdk

# Via curl (standalone)
curl https://sdk.cloud.google.com | bash
```

### 2. Autenticação

```bash
# Login do usuário
gcloud auth login

# Application Default Credentials (para o MCP)
gcloud auth application-default login
```

### 3. Configurar Projeto e Permissões

```bash
# Definir projeto
PROJECT_ID="seu-project-id"
gcloud config set project "$PROJECT_ID"

# Habilitar Stitch API
gcloud beta services mcp enable stitch.googleapis.com --project="$PROJECT_ID"

# Conceder permissões
USER_EMAIL=$(gcloud config get-value account)
gcloud projects add-iam-policy-binding "$PROJECT_ID" \
  --member="user:$USER_EMAIL" \
  --role="roles/serviceusage.serviceUsageConsumer" \
  --condition=None
```

### 4. Gerar Token de Acesso

```bash
# Gerar token (expira em 1 hora)
TOKEN=$(gcloud auth application-default print-access-token)
echo "STITCH_ACCESS_TOKEN=$TOKEN"
```

### 5. Configurar MCP no Antigravity

No painel Agent, clique nos três pontos → **MCP Servers** → **Manage MCP Servers** → "View raw config":

{
  "mcpServers": {
    "stitch": {
      "command": "powershell",
      "args": [
        "-ExecutionPolicy",
        "Bypass",
        "-File",
        "C:\\Aurora\\Projetos Mad Lab Aurora\\Genesis\\scripts\\mcp\\start_stitch.ps1"
      ]
    }
  }
}


> **Nota:** O token expira a cada 1 hora. Atualize manualmente quando necessário.

---

## MCP Tools Disponíveis

### Gerenciamento de Projetos

| Tool | Descrição |
|------|-----------|
| `create_project` | Cria um novo projeto/container para designs |
| `list_projects` | Lista todos os projetos acessíveis |
| `get_project` | Obtém detalhes de um projeto específico |

### Gerenciamento de Screens

| Tool | Descrição |
|------|-----------|
| `list_screens` | Lista todas as screens em um projeto |
| `get_screen` | Obtém detalhes de uma screen específica |
| `generate_screen_from_text` | **Gera design via prompt de texto** |

---

## Workflow de Geração de Design

### Fase 1: Criar Projeto

```
Prompt para Agente:
"Crie um novo projeto no Stitch chamado 'Aurora Wealth Landing'"
```

O agente usará `create_project` com o título fornecido.

### Fase 2: Gerar Screens

Para cada seção da landing page, use prompts estruturados:

```yaml
Fórmula de Prompt:
  Idea: O que é a seção
  Theme: Estilo visual desejado
  Content: Conteúdo específico (texto, CTAs)
  Image: Referência visual opcional
```

#### Exemplo: Hero Section Wealth Management

```
Prompt:
"Gere uma screen para:
Idea: Hero section para plataforma de Wealth Management
Theme: Editorial, Glassmorphism, Dark Mode OLED, Monochromatic dourado
Content: 
  - Headline: 'A Verdade Matemática do Patrimônio'
  - Subtitle: 'Auditoria algorítmica para decisões financeiras'
  - CTA: 'Iniciar Auditoria'
Navigation: Top bar minimalista com logo Aurora"
```

#### Parâmetros de `generate_screen_from_text`

```json
{
  "projectId": "id-do-projeto",
  "prompt": "Descrição completa da screen",
  "deviceType": "DESKTOP | MOBILE | TABLET | AGNOSTIC",
  "modelId": "GEMINI_3_PRO | GEMINI_3_FLASH"
}
```

### Fase 3: Exportar Código

Após gerar as screens:

```
Prompt:
"Baixe o HTML da screen [nome] do projeto [nome]"
```

O Stitch gera HTML completo com Tailwind CSS inline.

### Fase 4: Converter para React

Use a skill de conversão:

```bash
npx add-skill google-labs-code/stitch-skills --skill react:components --global
```

Depois:

```
Prompt:
"Converta a screen Landing Page do projeto Aurora Wealth para componentes React"
```

---

## Style Word Bank para Prompts Premium

### Layout & Structure
- **Bento Grid**: Cards modulares em grid
- **Editorial**: Magazine-style, serifa grande, whitespace generoso
- **Swiss Style**: Grids claros, sans-serif, alinhamento flush-left
- **Split-Screen**: Divisão vertical, cor sólida + imagem

### Texture & Depth
- **Glassmorphism**: Transparência, blur, bordas sutis
- **Claymorphism**: Formas 3D suaves, inner shadows
- **Skeuomorphic**: Texturas realistas (couro, metal)
- **Grainy/Noise**: Grain em gradientes para warmth

### Atmosphere & Era
- **Brutalist**: Raw, fonts de sistema, alto contraste
- **Cyberpunk**: Dark mode, neon cyan/magenta, glitch
- **Y2K**: Chrome, bubble letters, azuis e rosas
- **Retro-Futurism**: Synthwave 80s, grids wireframe

### Color & Contrast
- **Duotone**: Duas cores contrastantes
- **Monochromatic**: Uma cor base com variações
- **Pastel Goth**: Pastéis suaves + preto forte
- **Dark Mode OLED**: Preto puro (#000000)

---

## Estilo Aurora/Wealth Recomendado

Para landing pages de Wealth Management (Aurora), use:

```
Theme: Editorial + Glassmorphism + Dark Mode OLED
Colors: Monochromatic com acentos dourados (#D4AF37)
Typography: Serif para headlines (Fraunces), Sans para body (Geist)
Layout: Split-Screen hero, Bento Grid features
Atmosphere: Luxury minimal, "Quiet Luxury"
```

---

## Integração com Workflow Autônomo

Esta skill adiciona uma **Fase 0** ao workflow `/autonomous-site-construction`:

```yaml
# FASE 0: Design Generation
action: GENERATE_DESIGN
tool: Stitch MCP
steps:
  1. create_project → Criar projeto no Stitch
  2. generate_screen_from_text → Gerar cada seção
     - Hero
     - Features/Construir
     - Showcase/Proteger
     - Testimonials
     - CTA
     - Footer
  3. get_screen → Baixar HTML/Images
  4. Convert to React → Usar skill react:components
output:
  - HTML base para cada seção
  - Design tokens extraídos
  - Componentes React prontos para customização
```

---

## Comandos Rápidos

### Ver Projetos

```
@stitch Mostre meus projetos no Stitch
```

### Gerar Design

```
@stitch Gere um hero section S-Tier para Rodobens Wealth com:
- Estilo: Quiet Luxury, Glassmorphism, Dark OLED
- Headline: "A Verdade Matemática do Patrimônio"
- CTA: "Iniciar Auditoria"
```

### Exportar para React

```
@stitch Converta o design [screen-id] para React components
```

---

## Limitações

1. **Token expira a cada hora** - Requer refresh manual
2. **Designs são base** - Customização S-Tier requer ajustes manuais
3. **Estilo pode variar** - Iteração via prompts de refinamento necessária

---

## Referências

- [Stitch MCP Setup Guide](https://stitch.googleapis.com/docs/mcp/setup)
- [Stitch Skills Repository](https://github.com/google-labs-code/stitch-skills)
- Documento local: `docs/MCP Stich Essentials.md`
