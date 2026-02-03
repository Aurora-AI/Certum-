---
description: How to run the Python-based Cortex Agents
---

# 🧠 Cortex: Intelligent Activation

This workflow explains how to spin up the Python Agentic Infrastructure ("Cortex") that was built to operationalize the Elysian Protocols.

## 📋 Prerequisites

1.  **Python 3.10+** installed.
2.  **OpenAI API Key** in `.env`.

## 🚀 Setup (First Run Only)

Open your terminal in `c:\Aurora\Projetos Mad Lab Aurora\Prime` and run:

```powershell
pip install -r cortex/requirements.txt
```

## 🎮 Usage

You can now command the "Genesis Crew" directly from the terminal.

### Check Status
```powershell
python -m cortex.main status
```

### Execute a Mission
Give the Director a goal.
```powershell
python -m cortex.main "Research the best GSAP animations for a luxury real estate site"
```
```powershell
python -m cortex.main "Analyze the files in .agent/skills and suggest improvements"
```

## 🏗️ Structure

- **`cortex/main.py`**: The CLI entry point.
- **`cortex/crews/genesis_crew.py`**: The main team (Director + Engineer).
- **`cortex/config/*.yaml`**: Where you define Roles and Tasks (CrewAI Standard).
