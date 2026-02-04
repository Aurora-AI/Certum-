import { createOpenAI, openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  try {
    const apiKey = process.env.DEEPSEEK_API_KEY || process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return new Response(
        "Elysian Intelligence requires an API key to function. (Mock Response: System Active)",
        { status: 200 }
      );
    }

    const baseURL =
      process.env.DEEPSEEK_BASE_URL ||
      process.env.OPENAI_BASE_URL ||
      process.env.OPENAI_API_BASE ||
      undefined;

    const modelId =
      process.env.DEEPSEEK_MODEL || process.env.OPENAI_MODEL || "gpt-4o-mini";

    const provider = baseURL
      ? createOpenAI({ apiKey, baseURL })
      : // Fallback to default OpenAI provider (env-based)
        openai;

    const result = streamText({
      model: provider(modelId),
      messages,
    });

    return (result as any).toDataStreamResponse();
  } catch {
    return new Response("System Error: Interaction Failed.", { status: 500 });
  }
}
