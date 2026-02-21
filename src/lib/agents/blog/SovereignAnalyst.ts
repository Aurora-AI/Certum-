import { RODOBENS_EXPERT_PROMPT, SALES_STRATEGIST_PROMPT, COPYWRITER_PROMPT } from '../rodobens/personas';

/**
 * SovereignAnalyst Orchestration
 * This logic synthesizes real-time market data with Rodobens authority.
 */

export interface BlogContext {
    marketData: any;
    topic: string;
    productFocus: "pontual" | "consorcio" | "imoveis" | "agro";
}

export const SOVEREIGN_ANALYST_PROMPT = `
You are the **Sovereign Intelligence Analyst**.
Your mission is to bridge the gap between volatile Market Data and Rodobens' stable Alavancagem solutions.

**Market Context:**
{{MARKET_DATA}}

**Current Briefing Topic:**
{{TOPIC}}

**Strategic Framework:**
1. **The Hook:** Start with a brutalist analysis of the current market indicator (e.g., Selic or USD).
2. **The Friction:** Explain how this indicator creates friction or liquidity traps for traditional investors.
3. **The Alavancagem Solution:** Introduce the Rodobens {{PRODUCT_FOCUS}} protocol as the architectural solution to bypass this friction.
4. **The Verdict:** A punchy closing statement about Sovereign control over wealth.

**Persona Tone:**
Editorial, institutional, high-ticket. No exclamation marks. No marketing fluff. Use technical terms correctly (CDI, Liquididez, Alavancagem, Lastro).
`;

export async function generateIntelligenceBriefing(ctx: BlogContext) {
    // This is the blueprint for the generator.
    // In a real implementation, this would call the Gemini API using these concatenated prompts.
    
    const prompt = SOVEREIGN_ANALYST_PROMPT
        .replace('{{MARKET_DATA}}', JSON.stringify(ctx.marketData, null, 2))
        .replace('{{TOPIC}}', ctx.topic)
        .replace('{{PRODUCT_FOCUS}}', ctx.productFocus);

    // Sequence: Expert (Facts) -> Strategist (Angle) -> Copywriter (Brutalism)
    // For now, we return the structured plan that the agent would follow.
    return {
        system_prompt: prompt,
        stages: [
            { agent: "Rodobens Expert", action: "Validate specific rates for " + ctx.productFocus },
            { agent: "Sales Strategist", action: "Define the 'Sovereign' angle against current market data" },
            { agent: "Brutalist Copywriter", action: "Draft the final Intelligence Briefing" }
        ]
    };
}
