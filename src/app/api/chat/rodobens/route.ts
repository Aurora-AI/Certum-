import { createOpenAI } from '@ai-sdk/openai';
import { generateText } from 'ai';
import { 
    RODOBENS_EXPERT_PROMPT, 
    SALES_STRATEGIST_PROMPT, 
    COPYWRITER_PROMPT, 
    VALIDATOR_EXPERT_PROMPT, 
    VALIDATOR_SALES_PROMPT 
} from '@/lib/agents/rodobens/personas';
import { searchRodobensDocsTool } from '@/lib/agents/rodobens/tools/rag';

// Increased duration for multi-agent loop
export const maxDuration = 60; 

export async function POST(req: Request) {
  try {
      const { messages } = await req.json();
      const userMessage = messages[messages.length - 1].content;

      let model;
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

      // We use a custom ReadableStream to send incremental thoughts to the client
      // using the Vercel AI SDK data stream format '0:"chunk"\n'
      const readableStream = new ReadableStream({
        async start(controller) {
          const encode = (text: string) => {
              controller.enqueue(new TextEncoder().encode(`0:${JSON.stringify(text)}\n`));
          };

          try {
              // --- STAGE 1: RODOBENS EXPERT (DISCOVERY) ---
              encode('⚙️ **[Rodobens Expert]** Coletando especificações técnicas na base de conhecimento...\n\n');
              
              const expertResponse = await generateText({
                  model,
                  system: RODOBENS_EXPERT_PROMPT,
                  prompt: `User Request: ${userMessage}\n\nSearch the knowledge base and provide the factual constraints and possibilities.`,
                  tools: { search_rodobens_docs: searchRodobensDocsTool },
              });
              
              const expertSpecs = expertResponse.text;
              encode(`> *${expertSpecs.split('\n')[0]}... [Especificações Técnicas Validadas]*\n\n---\n\n`);

              // --- STAGE 2: SALES STRATEGIST (STRATEGY) ---
              encode('🎯 **[Sales Strategist]** Arquitetando o ângulo persuasivo e ancoragem B2B...\n\n');
              
              const strategistResponse = await generateText({
                  model,
                  system: SALES_STRATEGIST_PROMPT,
                  prompt: `User Intent: ${userMessage}\n\nFactual Limits (from Expert):\n${expertSpecs}\n\nDefine the sales strategy and wireframe.`,
              });

              const salesStrategy = strategistResponse.text;
              encode(`> *Posicionamento definido para alta conversão.* \n\n---\n\n`);

              // --- STAGE 3: COPYWRITER (DRAFT & VALIDATION LOOP) ---
              encode('✍️ **[Copywriter]** Redigindo Alfa Draft e iniciando Double-Validation...\n\n');

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
              while ((!isFactualValid || !isSalesValid) && attempts < 2) {
                  attempts++;
                  encode(`\n*🔄 Iniciando Ciclo de Validação #${attempts}...*\n`);

                  // Factual Check
                  const factualCheck = await generateText({
                      model,
                      system: VALIDATOR_EXPERT_PROMPT,
                      prompt: `Original Specs:\n${expertSpecs}\n\nDraft:\n${finalDraft}\n\nValidate factuality.`,
                  });

                  if (factualCheck.text.includes("FACTUAL_APPROVAL: TRUE") || factualCheck.text.includes("FACTUAL_APPROVAL: TRUE".toLowerCase())) {
                      isFactualValid = true;
                      encode(`*✅ Aprovação Factual (Rodobens Expert)*\n`);
                  } else {
                      isFactualValid = false;
                      encode(`*❌ Reprovação Factual:* ${factualCheck.text.substring(0, 100)}...\n`);
                      // Rewrite Draft
                      currentDraftResponse = await generateText({
                          model, system: COPYWRITER_PROMPT,
                          prompt: `Fix this draft based on Factual Error:\n${factualCheck.text}\n\nDraft:\n${finalDraft}`
                      });
                      finalDraft = currentDraftResponse.text;
                      continue; // Restart loop
                  }

                  // Sales Check
                  const salesCheck = await generateText({
                      model,
                      system: VALIDATOR_SALES_PROMPT,
                      prompt: `Sales Strategy:\n${salesStrategy}\n\nDraft:\n${finalDraft}\n\nValidate vendability.`,
                  });

                  if (salesCheck.text.includes("SALES_APPROVAL: TRUE") || salesCheck.text.includes("SALES_APPROVAL: TRUE".toLowerCase())) {
                      isSalesValid = true;
                      encode(`*✅ Aprovação de Vendabilidade (Sales Strategist)*\n`);
                  } else {
                      isSalesValid = false;
                      encode(`*❌ Reprovação de Vendas:* ${salesCheck.text.substring(0, 100)}...\n`);
                      // Rewrite Draft
                      currentDraftResponse = await generateText({
                          model, system: COPYWRITER_PROMPT,
                          prompt: `Fix this draft based on Vendability Error:\n${salesCheck.text}\n\nDraft:\n${finalDraft}`
                      });
                      finalDraft = currentDraftResponse.text;
                  }
              }

              encode(`\n---\n\n`);

              // Final Output Stream
              const words = finalDraft.split(' ');
              for (const word of words) {
                  encode(word + ' ');
                  await new Promise(r => setTimeout(r, 20)); // Simulate streaming
              }
              
          } catch (e) {
              console.error("[Cognitive Factory] Error:", e);
              encode(`\n\n**[System Error]** Pipeline failed: ${String(e)}`);
          } finally {
              controller.close();
          }
        }
      });

      return new Response(readableStream, { 
          headers: { 
              'Content-Type': 'text/plain; charset=utf-8',
              'x-vercel-ai-data-stream': 'v1'
          } 
      });

  } catch (error) {
      console.error("[Cognitive Factory] CRITICAL ERROR IN ROUTE:", error);
      return new Response(JSON.stringify({ error: String(error) }), { status: 500 });
  }
}
