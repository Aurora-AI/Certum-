import fs from 'fs';
import path from 'path';
import { generateText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';

// Reuse definitions from the main app
import { 
    RODOBENS_EXPERT_PROMPT, 
    SALES_STRATEGIST_PROMPT, 
    COPYWRITER_PROMPT, 
    VALIDATOR_EXPERT_PROMPT, 
    VALIDATOR_SALES_PROMPT 
} from '../../src/lib/agents/rodobens/personas';

import { searchRodobensDocsTool } from '../../src/lib/agents/rodobens/tools/rag';

// Load variables since this runs outside Next.js
import dotenv from 'dotenv';
dotenv.config({ path: path.join(process.cwd(), '.env.local') });

// Setup Model (same logic as api/chat/rodobens)
let model: any;
if (process.env.OPENROUTER_API_KEY) {
    const openrouter = createOpenAI({
        name: 'openrouter',
        apiKey: process.env.OPENROUTER_API_KEY,
        baseURL: 'https://openrouter.ai/api/v1',
    });
    model = openrouter('deepseek/deepseek-chat'); 
} else if (process.env.DEEPSEEK_API_KEY) {
    const deepseek = createOpenAI({
        name: 'deepseek',
        apiKey: process.env.DEEPSEEK_API_KEY,
        baseURL: 'https://api.deepseek.com',
    });
    model = deepseek('deepseek-chat');
} else {
    const openai = createOpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });
    model = openai('gpt-4o');
}

/**
 * Executes the Cognitive Factory pipeline locally.
 */
async function runFactory(inputFilePath: string, outputFilePath: string) {
    console.log(`\n========================================`);
    console.log(`🧠 COGNITIVE FACTORY: IDE PIPELINE v1.0`);
    console.log(`========================================\n`);

    if (!fs.existsSync(inputFilePath)) {
        console.error(`❌ Input file not found: ${inputFilePath}`);
        process.exit(1);
    }

    const userMessage = fs.readFileSync(inputFilePath, 'utf-8');
    console.log(`📥 Reading strategy from: ${path.basename(inputFilePath)}`);
    console.log(`...\n`);

    try {
        // --- STAGE 1: RODOBENS EXPERT (DISCOVERY) ---
        console.log('⚙️ [1/4] Rodobens Expert: Coletando especificações na base de conhecimento...');
        
        const expertResponse = await generateText({
            model,
            system: RODOBENS_EXPERT_PROMPT,
            prompt: `User Request: ${userMessage}\n\nSearch the knowledge base and provide the factual constraints and possibilities.`,
            tools: { search_rodobens_docs: searchRodobensDocsTool },
        });
        
        const expertSpecs = expertResponse.text;
        console.log(`   ✅ Especificações Técnicas Validadas.\n`);

        // --- STAGE 2: SALES STRATEGIST (STRATEGY) ---
        console.log('🎯 [2/4] Sales Strategist: Arquitetando ângulo persuasivo B2B...');
        
        const strategistResponse = await generateText({
            model,
            system: SALES_STRATEGIST_PROMPT,
            prompt: `User Intent: ${userMessage}\n\nFactual Limits (from Expert):\n${expertSpecs}\n\nDefine the sales strategy and wireframe.`,
        });

        const salesStrategy = strategistResponse.text;
        console.log(`   ✅ Posicionamento B2B definido.\n`);

        // --- STAGE 3: COPYWRITER (DRAFT & VALIDATION) ---
        console.log('✍️ [3/4] Copywriter: Redigindo Alfa Draft e iniciando Double-Validation...');

        let finalDraft = "";
        let isFactualValid = false;
        let isSalesValid = false;
        let attempts = 0;

        // Draft Initial
        let currentDraftResponse = await generateText({
            model,
            system: COPYWRITER_PROMPT,
            prompt: `User Intent: ${userMessage}\n\nFactual Limits:\n${expertSpecs}\n\nSales Strategy:\n${salesStrategy}\n\nWrite the copy.`,
        });
        finalDraft = currentDraftResponse.text;

        // Double Validation Loop
        while ((!isFactualValid || !isSalesValid) && attempts < 3) {
            attempts++;
            console.log(`\n   🔄 Iniciando Ciclo de Validação #${attempts}...`);

            // Factual Check
            const factualCheck = await generateText({
                model,
                system: VALIDATOR_EXPERT_PROMPT,
                prompt: `Original Specs:\n${expertSpecs}\n\nDraft:\n${finalDraft}\n\nValidate factuality.`,
            });

            if (factualCheck.text.toUpperCase().includes("FACTUAL_APPROVAL: TRUE")) {
                isFactualValid = true;
                console.log(`   ✅ Aprovação Factual Concedida.`);
            } else {
                isFactualValid = false;
                console.log(`   ❌ Reprovação Factual: ${factualCheck.text.substring(0, 80)}...`);
                // Rewrite 
                currentDraftResponse = await generateText({
                    model, system: COPYWRITER_PROMPT,
                    prompt: `Fix this draft based on Factual Error:\n${factualCheck.text}\n\nDraft:\n${finalDraft}`
                });
                finalDraft = currentDraftResponse.text;
                continue; 
            }

            // Sales Check
            const salesCheck = await generateText({
                model,
                system: VALIDATOR_SALES_PROMPT,
                prompt: `Sales Strategy:\n${salesStrategy}\n\nDraft:\n${finalDraft}\n\nValidate vendability.`,
            });

            if (salesCheck.text.toUpperCase().includes("SALES_APPROVAL: TRUE")) {
                isSalesValid = true;
                console.log(`   ✅ Aprovação de Vendabilidade Concedida.`);
            } else {
                isSalesValid = false;
                console.log(`   ❌ Reprovação Vendas: ${salesCheck.text.substring(0, 80)}...`);
                // Rewrite 
                currentDraftResponse = await generateText({
                    model, system: COPYWRITER_PROMPT,
                    prompt: `Fix this draft based on Vendability Error:\n${salesCheck.text}\n\nDraft:\n${finalDraft}`
                });
                finalDraft = currentDraftResponse.text;
            }
        }

        if (attempts >= 3) {
            console.log(`\n⚠️ Limite de refinamento atingido (3 ciclos). O texto pode não estar perfeito.`);
        }

        // --- STAGE 4: EXPORT ---
        console.log(`\n📦 [4/4] Exportando artefato finalizado...`);
        
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const finalOutputDir = path.dirname(outputFilePath);
        
        if (!fs.existsSync(finalOutputDir)) {
            fs.mkdirSync(finalOutputDir, { recursive: true });
        }

        const outPath = outputFilePath.replace('.md', `_${timestamp}.md`);
        fs.writeFileSync(outPath, finalDraft, 'utf-8');
        
        console.log(`\n========================================`);
        console.log(`🚀 SUCESSO! Artefato salvo em:`);
        console.log(`   ${outPath}`);
        console.log(`========================================\n`);

    } catch (e) {
        console.error("\n❌ [CRITICAL ERROR] Cognitive Factory falhou:", e);
    }
}

// CLI Argument Parsing
const args = process.argv.slice(2);
if (args.length < 2) {
    console.log("Usage: node execute.js <input.md> <output.md>");
    console.log("Example: npx tsx scripts/factory/execute.ts inputs/pitch_ademicon.md outputs/email.md");
    process.exit(1);
}

const inputPath = path.resolve(process.cwd(), args[0]);
const outputPath = path.resolve(process.cwd(), args[1]);

runFactory(inputPath, outputPath);
