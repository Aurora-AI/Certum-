import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { rpaCoreSystemPrompt, rpaCoreTools } from '@/lib/agents/rodobens';

// Set a timeout for the Vercel Function to avoid premature termination during long thoughts
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
      const { messages } = await req.json();

      let model;
      if (process.env.OPENROUTER_API_KEY) {
          const openrouter = createOpenAI({
              name: 'openrouter',
              apiKey: process.env.OPENROUTER_API_KEY,
              baseURL: 'https://openrouter.ai/api/v1',
          });
          // Use DeepSeek R1 via OpenRouter
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

      const result = await streamText({
        model, 
        system: rpaCoreSystemPrompt,
        messages,
        tools: rpaCoreTools,
      });

      // Return the text stream response for AI SDK v6
      return result.toTextStreamResponse();

  } catch (error) {
      console.error("[RPA-Core] CRITICAL ERROR IN ROUTE:", error);
      return new Response(JSON.stringify({ error: String(error) }), { status: 500 });
  }
}
