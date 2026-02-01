---
name: neuro-ux
description: UX patterns based on Cognitive Psychology (Hick's Law, Doherty Threshold).
triggers:
  - "ux"
  - "fluxo"
  - "navegação"
  - "estrutura"
---

# NEURO-UX PROTOCOLS

Sua missão é reduzir a **Carga Cognitiva** e manter o **Flow State**.

## 1. Lei de Hick (Chunking)

**REGRA:** O usuário paralisa com muitas opções.

**AÇÃO:**
- Nunca mostre mais de 3 opções primárias (ex: Imóvel, Auto, Outros).
- Agrupe listas longas em seções "Colapsáveis" ou "Ver Mais".

```tsx
// ❌ RUIM: 8 botões iguais
<nav>{items.map(i => <Button>{i}</Button>)}</nav>

// ✅ BOM: 3 categorias principais + expansão
<nav>
  <Button primary>Imóvel</Button>
  <Button primary>Auto</Button>
  <Button ghost>Outros →</Button>
</nav>
```

## 2. Limiar de Doherty (<400ms)

**REGRA:** O sistema deve parecer instantâneo.

**AÇÃO:**
- Use **Optimistic UI**: Mude o estado visual (Check) *antes* da resposta do servidor.
- Use **Streaming**: Renderize o componente pedaço por pedaço (Skeleton -> Content).

```tsx
// Optimistic Update
const [liked, setLiked] = useState(false);
const handleLike = () => {
  setLiked(true); // Feedback IMEDIATO
  api.like(id).catch(() => setLiked(false)); // Rollback se falhar
};
```

## 3. Regra Peak-End

**REGRA:** O final da experiência define a memória.

**AÇÃO:**
- A seção final da página (Footer/CTA) deve ser a mais polida visualmente ("The Vault").
- O estado de sucesso (após submit) deve ter animação especial.

## 4. Lei de Fitts

**REGRA:** Alvos grandes e próximos são mais fáceis de clicar.

**AÇÃO:**
- CTAs principais: `min-h-14 px-8` (tamanho generoso).
- Evite "links azuis" pequenos para ações importantes.

## 5. Efeito Von Restorff (Isolamento)

**REGRA:** O que é diferente, é lembrado.

**AÇÃO:**
- Um único elemento por seção deve "quebrar o padrão".
- Ex: Um card dourado em um grid cinza.
