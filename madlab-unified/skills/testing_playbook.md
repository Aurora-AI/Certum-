---
name: Testing & Trustware Playbook
description: Playwright e unit tests patterns para as interfaces S-Tier.
---

# Testing Playbook (A Base da Auditabilidade)

*Nota: Atualmente Aurora Prime possui déficit em E2E Testing. Este playbook corrige isso.*

## 1. Testes de Acessibilidade Cíclica (Axe-Core)

Em testes de Playwright, cada página e componente isolado deve passar pelo Core Axe.

```typescript
// tests/accessibility.spec.ts
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Component: Pontual Hero A11y', () => {
  test('Should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto('/pontual');

    // Aguarda montagem R3F / Canvas ignoráveis
    await page.waitForLoadState('networkidle');

    const accessibilityScanResults = await new AxeBuilder({ page })
       // Podemos ignorar nós do canvas que já passaram pelo "A11y Canvas Wrapper"
      .exclude('canvas')
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
```

## 2. Testando Reduced Motion Defensivo

Qualquer animação canônica (Hero Reveal) precisa provar que sabe desligar.

```typescript
// tests/motion.spec.ts
import { test, expect } from '@playwright/test';

test('Rejeita Animação se Prefers Reduced Motion', async ({ page }) => {
  // Simula preferência do SO
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');

  // O componente "KineticSphere" deve renderizar o fallback imediatamente.
  const canvasElement = page.locator('#hero-canvas');
  await expect(canvasElement).toBeHidden(); 
  
  const fallbackCSS = page.locator('#hero-fallback-gradient');
  await expect(fallbackCSS).toBeVisible();
});
```
