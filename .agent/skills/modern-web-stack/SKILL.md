---
name: modern-web-stack
description: Documentation for the modern React ecosystem (Next.js, Tailwind, Shadcn).
---

# Modern Web Stack

This skill covers the standard frontend infrastructure for Mad Lab Aurora projects.

## 📚 Resources

### Framework & Styles
- **Next.js & Vercel**: `G:\Meu Drive\Mad Lab Aurora\Documentação de bibliotecas\vercel`
- **Tailwind CSS**: `G:\Meu Drive\Mad Lab Aurora\Documentação de bibliotecas\tailwindcss`
- **Shadcn UI**: `G:\Meu Drive\Mad Lab Aurora\Documentação de bibliotecas\shadcn_ui`
  - *Focus*: Component architecture, Radix primitives.

### Utils
- **Claude Code**: `G:\Meu Drive\Mad Lab Aurora\Documentação de bibliotecas\claude_code`
  - *Focus*: Best practices for AI-generated code.
- **Github**: `G:\Meu Drive\Mad Lab Aurora\Documentação de bibliotecas\github`

## 🏗️ Architectural Rules
- **Component Driven**: Build small, reusable components.
- **Server Components**: Default to Server Components; use 'use client' only when interaction is needed.
- **Tailwind First**: Use utility classes; avoid css-in-js runtime costs unless using a specific library (like Stitches/Emotion - though Tailwind is preferred).
