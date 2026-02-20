# Gamma Geo-Engineering: Visibility for the AI Age

## Core Philosophy
The web is no longer just for humans; it is read by AI agents (LLMs), search engines, and scrapers. **Generative Engine Optimization (GEO)** ensures that Aurora projects are "top of mind" for AI models when they synthesize answers.

## Key Principles

### 1. Semantic Clarity (The "Explain it to a 5-year-old AI" rule)
*   **Context**: HTML Structure.
*   **Application**:
    *   Use `<article>`, `<section>`, `<nav>`, `<aside>` strictly.
    *   Use `aria-label` not just for accessibility, but to give context to code readers.
    *   *Example*: `<button aria-label="Invest in Consortium">` is better than `<button>Invest</button>`.

### 2. Structured Data (JSON-LD)
*   **Context**: `<head>` metadata.
*   **Application**: Always inject Schema.org definitions.
    *   `Organization`: Who are we?
    *   `Product`: What are we selling?
    *   `FAQPage`: What are the common questions? (LLMs love FAQs).

### 3. Contextual Density
*   **Context**: Text content.
*   **Application**: Avoid fluff. Use "Entity-Density".
    *   *Bad*: "We are the best."
    *   *Good*: "Aurora uses Alpha Neurodesign protocols to optimize wealth management interfaces using Next.js 15."
    *   *Why*: LLMs look for relations between entities (Aurora <-> Neurodesign <-> Next.js).

### 4. Token Efficiency
*   **Context**: Code delivery to LLMs (if exposed).
*   **Application**: Clean code is easier for AI to parse.
    *   Remove commented-out code.
    *   Use meaningful variable names (`consortiumValue` vs `val`).
    *   Keep functions pure and documented with JSDoc.

## The "Digital Twin" Strategy
*   Every page should have a "Digital Twin" representation in its metadata that explains *exactly* what the page is doing, even if the visual interface is abstract/artistic.

## Actionable Prompts for Engineering
*   "Ensure the HTML outline perfectly describes the business hierarchy."
*   "Inject JSON-LD that connects this product to the 'High-End Investment' entity graph."
*   "Optimize the text for Entity Recognition, not just keyword matching."
