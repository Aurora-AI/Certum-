---
description: Auto-deploy all Skills, Agents, and Workflows to another project
---

# 🚀 Universal Capability Deployment (Genesis Seed)

This workflow enables the replication of the "Genesis Stack" (Advanced Agents, Neurodesign Skills, and Autonomous Workflows) to any other project within the Antigravity ecosystem.

## 📦 What is Deployed?

The entire `.agent` directory, including:
1.  **Skills**: All 24+ specialized skills (Neurodesign, Animation, R3F, etc.).
2.  **Agents**: Senior Art Director, Motion Lead, etc.
3.  **Workflows**: All standard operating procedures (`manual-visual-generation`, `generative-ops`, etc.).
4.  **Rules**: The core `rules.md` governing agent behavior.

## 🛠️ Usage

This workflow assumes you are running it from the **SOURCE** project (Genesis).

### Step 1: Define Target
Identify the absolute path of the target project where you want to install these capabilities.
*Example: `C:\Aurora\Projetos Mad Lab Aurora\NovoProjeto`*

### Step 2: Execute Deployment Script
Run the following PowerShell command to replicate the stack.

```powershell
$source = "c:\Aurora\Projetos Mad Lab Aurora\Genesis\.agent"
$target = Read-Host -Prompt "Enter the ABSOLUTE PATH of the TARGET project (e.g. C:\Projects\NewApp)"

if (-not (Test-Path $target)) {
    Write-Error "Target directory does not exist: $target"
} else {
    $dest = Join-Path $target ".agent"
    Copy-Item -Path $source -Destination $dest -Recurse -Force
    Write-Host "✅ Genesis Stack successfully deployed to: $dest" -ForegroundColor Green
}
```

### Step 3: Verify Installation
1. Open the target project in Antigravity.
2. Check if `.agent` folder exists.
3. Try running a slash command like `/help` or checking available skills.

---
## ⚡ Quick Deploy (Internal)
If you are an agent executing this:

1.  Ask the user for the **Target Project Path**.
2.  Run the copy command.
