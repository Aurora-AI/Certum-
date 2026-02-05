---
description: Workflow for Hybrid Visual Generation (Stitch MCP + Human Refinement) via Service Orders (OS).
---

# 🎨 Hybrid Visual Generation Workflow (Stitch OS Loop)

This workflow coordinates the creation of UI components using the **Stitch MCP** (Google's Generative UI) as the primary engine, orchestrated by Service Orders (OS).

## 📂 Directory Structure
All Service Orders are stored in `OS Frontend/`.
Format: `OS-[000]-[Component-Name].md`

## 🔄 The Loop: OS -> Stitch Generation -> Refinement

### Phase 1: Definition (The Order)
1. **Context Analysis**: Analyze the requirement using `senior-art-director` and `motion-designer-lead`.
2. **Generate OS**: Create/Update a file in `OS Frontend/` containing:
    *   **Context**: The specific goal.
    *   **The Prompt**: Optimized text for Stitch (e.g., "Dark mode, glassmorphism, mobile-first").
    *   **Stitch Command**: The specific tool call to make.

### Phase 2: Stitch Execution ( The Agent)
1. **Agent Action**: The Agent calls `stitch.create_project` (if new) or `stitch.generate_screen_from_text`.
2. **Wait**: The breakdown takes 1-2 minutes.
3. **Capture**: The Agent saves the generated HTML/CSS or Screenshot URL to the OS file.

### Phase 3: Analysis & Learning (The Critique)
1. **Critique**: Compare Stitch output vs. Intent.
    *   *Did it respect the Physics?*
    *   *Is the Acting visible (even if static)?*
2. **Refinement**: If good, manually port to `apps/web` (React/Tailwind). If bad, refine prompt and retry.

### Phase 4: Integration & Verification (The Seal of Quality)
1. **Codebase Integration**: Implement the component in `apps/web`.
    *   *Constraint*: Must use `bg-linear-to` (Tailwind v4), `Framer Motion` (Acting), and `Lenis` (Integration).
2. **Browser Test**: Launch `browser_subagent` to test the interaction.
    *   *Check*: Does it feel "Physical"? Are there Glitches?
3. **Final Approval**: Only mark the OS as [x] in `task.md` if the test passes.

## 📝 OS Template

```markdown
# OS-[ID]: [Title]
**Status**: [Pending/Generated/Integrated]
**Stitch Project ID**: [ID]

## 1. Context & Intent
*   **Goal**: [What are we building?]
*   **Acting**: [Expected behavior]

## 2. Stitch Prompt
> [The exact prompt used]

## 3. Stitch Output
*   **Screen ID**: [ID]
*   **URL**: [Link to Stitch]
*   **Code**: [Snippet or File Link]

## 4. Analysis
*   **Score**: [1-10]
*   **Verdict**: [Approve/Retry]

## 5. Verification (The Seal)
*   [ ] Integration Test (Browser)
*   [ ] Physics/Acting Check
```
