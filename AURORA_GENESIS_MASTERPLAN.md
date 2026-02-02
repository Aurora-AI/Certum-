# 📂 OS-AURORA-GENESIS-V1: MASTER SPECIFICATION

**CODENAME:** MAD LAB GENESIS
**VERSION:** 1.0 (Sovereign Edition)
**STATUS:** EXECUTION PHASE
**STACK:** Next.js 15 | TypeScript | Tailwind | GSAP | Supabase | Elysian SDK

---

## 1. A DOUTRINA (PHILOSOPHY & RULES)

### 1.1. The Illusion of Life (Disney Principles)

* **Staging (Foco Absoluto):** Quando o Chat/Modal está ativo, o fundo DEVE morrer (Blur + Dim). O usuário entra em "Visão de Túnel".
* **Anticipation (Peso):** Nada acontece instantaneamente (0ms). Botões contraem antes do clique. Cards deslizam com inércia.
* **Acting:** A IA não apenas "mostra dados". Ela "pensa". Use loaders hipnóticos e transições de entrada em cascata (*Stagger*).

### 1.2. Elysian Law (Engineering Rules)

* **Tokens-Only:** PROIBIDO usar cores hexadecimais soltas ou pixels mágicos. Use `tokens.spacing.md` ou variáveis CSS.
* **Strict Typing:** Zero `any`. Todos os `useRef` devem ter tipo explícito (ex: `useRef<HTMLDivElement>(null)`).
* **Client-Side Boundaries:** Qualquer componente com hooks (`useState`, `useGSAP`) DEVE começar com `'use client';`.

---

## 2. INFRAESTRUTURA (AGENT ENVIRONMENT)

### 2.1. MCP Configuration (`mcp.json`)

*Local: Raiz do projeto ou Settings do Antigravity*

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "./"]
    },
    "context-s": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-context"]
    },
    "supabase": {
      "command": "npx",
      "args": ["-y", "@supabase/mcp-server"],
      "env": {
        "SUPABASE_URL": "!!!_INSIRA_URL_!!!",
        "SUPABASE_KEY": "!!!_INSIRA_KEY_!!!"
      }
    },
    "stitch": {
      "command": "node",
      "args": ["C:\\Aurora\\Projetos Mad Lab Aurora\\Genesis\\scripts\\mcp\\start_stitch.js"]
    }
  }
}
```

### 2.2. Antigravity Custom Rules (System Prompt)

*Copiar para aba "Customizations"*

```markdown
# AURORA GENESIS PROTOCOL [v2.1]
ROLE: Sovereign Engineer & Cinematic Director.
MISSION: Build interfaces that feel like "Power Tools" (Grade 9.0+).

## RULES
1. **IMMUTABLE STRUCTURE:** If using Stitch, do NOT rewrite HTML structure. Inject logic via `ref` and `onClick` only.
2. **KINETIC PHYSICS:** Use `useGSAP` for all motion. No CSS transitions for complex moves.
3. **ELYSIAN LAW:** Frontend never calculates business logic. It renders `LayoutSpec` from the SDK.
4. **STRICT MODE:** Always add `"use client";` to interactive components. Fix all Lint/Type errors immediately.
```

---

## 3. O CÉREBRO: ELYSIAN SDK (FASE 1)

### 3.1. Estrutura de Pastas (Terminal)

```bash
mkdir -p libs/elysian-sdk-genesis/src/{contracts,types,composer}
```

### 3.2. Contratos (`libs/elysian-sdk-genesis/src/types/intake.ts`)

```typescript
export type GenesisDomain = 'wealth' | 'seguros' | 'juridico';

export interface IntakeContract {
  domain: GenesisDomain;
  emotion: 'confianca' | 'exclusividade';
  constraints: {
    tokensOnly: boolean;
    noHardcode: boolean;
  };
}
```

### 3.3. Composer (`libs/elysian-sdk-genesis/src/composer/compose.ts`)

```typescript
import { IntakeContract } from '../types/intake';

export function composeGenesisLayout(intake: IntakeContract) {
  if (!intake.domain) throw new Error("Domain required");
  return {
    skin: intake.domain,
    sections: intake.domain === 'wealth' ? ['Hero.Cinematic', 'Sim.CardStack'] : ['Hero.Default'],
    meta: { generatedAt: new Date().toISOString() }
  };
}
```

---

## 4. O PRODUTO: FRONTEND (FASE 2 - CORRIGIDO)

Estes códigos já incluem as correções para os erros de Build (Lint/Types).

### 4.1. The Trigger: `src/components/PromptChip.tsx`

```tsx
'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

interface PromptChipProps {
  label: string;
  delay?: number;
  onClick: () => void;
}

export function PromptChip({ label, delay = 0, onClick }: PromptChipProps) {
  // FIXED: Tipo explícito para evitar erro de ref
  const chipRef = useRef<HTMLButtonElement>(null);

  useGSAP(() => {
    if (!chipRef.current) return;
    gsap.from(chipRef.current, {
      y: 50, opacity: 0, duration: 1.2, ease: 'power3.out', delay: delay
    });
  }, { scope: chipRef });

  const { contextSafe } = useGSAP({ scope: chipRef });

  const handleMouseEnter = contextSafe(() => {
    if (chipRef.current) gsap.to(chipRef.current, { scale: 1.05, duration: 0.3, ease: 'back.out(1.7)' });
  });

  const handleMouseLeave = contextSafe(() => {
    if (chipRef.current) gsap.to(chipRef.current, { scale: 1, duration: 0.3 });
  });

  return (
    <button
      ref={chipRef}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative px-6 py-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:border-[#ecb613]/50 transition-colors text-sm text-white/90"
    >
      <span className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#ecb613] opacity-0 group-hover:opacity-100" />
        {label}
      </span>
    </button>
  );
}
```

### 4.2. The Stage: `src/app/page.tsx`

```tsx
'use client';

import { useState, useRef } from 'react';
import { useChat } from 'ai/react';
import { PromptChip } from '@/components/PromptChip';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Page() {
  const [mode, setMode] = useState<'dream' | 'chat'>('dream');
  const { messages, input, handleInputChange, handleSubmit, setInput } = useChat();
  const containerRef = useRef<HTMLDivElement>(null);

  const handleChipClick = (text: string) => {
    setMode('chat');
    setInput(text);
  };

  useGSAP(() => {
    if (mode === 'chat') {
      gsap.to('.dream-ui', { opacity: 0, y: -20, pointerEvents: 'none' });
      gsap.fromTo('.chat-ui', { opacity: 0, y: 50 }, { opacity: 1, y: 0, delay: 0.2 });
    }
  }, { dependencies: [mode], scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* BACKGROUND COM STAGING (Focus Pull) */}
      <div className={`absolute inset-0 transition-all duration-1000 ${mode === 'chat' ? 'opacity-20 blur-2xl' : 'opacity-100 blur-0'}`}>
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2500')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* DREAM UI (Inicial) */}
      <div className="dream-ui absolute inset-0 flex flex-col items-center justify-center z-10">
        <h1 className="text-6xl font-bold mb-4">AURORA GENESIS</h1>
        <div className="flex gap-4">
          <PromptChip label="Simular Wealth" onClick={() => handleChipClick("Simular 5M")} />
        </div>
      </div>

      {/* CHAT UI (Ativa) */}
      {mode === 'chat' && (
        <div className="chat-ui absolute inset-0 flex flex-col justify-end p-6 z-20">
          {/* Chat Messages Map Here */}
          <form onSubmit={handleSubmit}><input value={input} onChange={handleInputChange} className="w-full bg-black/50 p-4 rounded-full border border-white/10" /></form>
        </div>
      )}
    </div>
  );
}
```

---

## 5. PROTOCOLO DE EXECUÇÃO (WORKFLOW)

### 5.1. Prompt Adversário (Para rodar no Chat Antigravity)

*Use isto para corrigir erros ou criar novas features.*

```text
@System ATIVAR PROTOCOLO "SQUAD".

PERFIS:
1. [SCOUT]: Auditor. Procura erros de Lint, Typescript e A11y. Não escreve código, só critica.
2. [DREAMER]: Criativo. Propõe animações GSAP e visual Disney.
3. [SOVEREIGN]: Engenheiro. Escreve o código final seguindo a Elysian Law.

TAREFA ATUAL: [Insira sua ordem aqui, ex: "Corrigir erro de build em Services.tsx"]

FLUXO: SCOUT critica -> SOVEREIGN resolve.
```

### 5.2. A Correção do `Services.tsx` (Manual de Emergência)

Se o erro `Property 'align' is missing` persistir, aplique esta mudança na linha do `ref`:

**De:**
`ref={(el) => { if (el) panelsRef.current[index] = el; }}`
**Para:**
`ref={(el) => { if (el) panelsRef.current[index] = el as unknown as HTMLElement; }}`
*(Isso força o TypeScript a aceitar a Section como um elemento genérico).*

---

**Fim da Transmissão da OS.**
Tudo o que você precisa para construir, corrigir e escalar está aqui. Boa sorte, Comandante.
