---
description: Sovereign Workflow Director for Awwwards Excellence
---

# Sovereign Awwwards Protocol

This workflow orchestrates the **Sovereign Workflow Director** to audit, enforce, and certify the project against Awwwards S-Tier standards.

## 1. Compliance Audit (Gates 0-2)
// turbo
@sovereign-workflow-director ANALYZE-AND-BLOCK project.json --gates=0,1,2

## 2. Cinematography Check (Gate 3)
// turbo
@sovereign-workflow-director CHECK-GATE GATE_3_CINEMATOGRAPHY

## 3. Production Verification (Gate 4)
// turbo
@sovereign-workflow-director FINAL-APPROVAL --require="transformation-test,fifty-k-test,performance"

## 4. Q&A Manual Reference
The Director uses the internal Q&A Manual defined in `.agent/agents/sovereign-workflow-director.md`.
Key Checklist:
- [ ] **Hero Impact:** "Transformation" vs "Scroll"
- [ ] **Primitives:** Cursor, Preloader, Magnetic Buttons
- [ ] **Performance:** 60fps+ on Production
- [ ] **Mobile:** Responsive & Touch-Optimized

## 5. 5-Star Certification (Gate 5)
// turbo
@sovereign-workflow-director CHECK-GATE GATE_5_MOBILE_PERFECTION --criteria="touch-detection,reduced-motion,tilt-3d"

