---
description: Standard Operating Procedure for Autonomous GenOps (Agent/Skill Auto-Loading).
---

# ⚡ Generative Ops (Auto-Routine)

This protocol defines the **AUTOMATIC** invocation of Agents and Skills based on Task Types. 
**Rule**: When a task type is identified, the Agent MUST proactively load the defined context WITHOUT manual user prompting.

## 🤖 Auto-Loader Matrix

| Task Type | 🚨 Primary Agent (Auto-Load) | 🛠️ Required Skills (Auto-View) | ⚡ Action Protocol |
| :--- | :--- | :--- | :--- |
| **Visual Design** | `senior-art-director` | `stitch-mcp-integration`, `neurodesign` | 1. Generate OS<br>2. Call Stitch<br>3. Verify Acting |
| **Motion/Animation** | `motion-designer-lead` | `animation-acting`, `gsap-animation-master` | 1. Define "Feel" (Easing)<br>2. Implement Physics<br>3. Browser Test (Subagent) |
| **Feature Build** | `neurofront-architect` | `tailwindcss`, `r3f-bridge-engineer` | 1. Scaffolding<br>2. Component Logic<br>3. Integration |
| **Forensics/Debug** | `neurofront-architect` | `site_forensics`, `site-analysis` | 1. Dump DOM<br>2. Analyze Tokens<br>3. Fix Root Cause |

## 🔄 The Autonomous Loop

1.  **Identify Trigger**: (e.g., User says "Create a Login Page").
2.  **Auto-Load Context**: 
    *   *Self-Correction*: "I see this is a Visual task. I am loading `senior-art-director.md` and `stitch-mcp/SKILL.md` immediately."
3.  **Execute Protocol**: Follow the "Action Protocol" column.
4.  **Verify**: Run the mandatory Browser Test (as per `manual-visual-generation.md`).
5.  **Close**: Only notify user when the loop is complete.

## 📝 Example: "Make the button bounce"
1.  **Trigger**: Motion Task.
2.  **Auto-Load**: `motion-designer-lead.md`, `animation-acting/SKILL.md`.
3.  **Action**: Apply `spring(mass: 1, stiffness: 300)`.
4.  **Verify**: Browser Subagent checks bounce.
