import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  // For MVP without keys, we can just echo or use a mock if keys aren't present.
  // However, assuming the user might want keyless demo:
  
  try {
      // Check if we have keys. If not, return a mock stream.
      if (!process.env.OPENAI_API_KEY) {
          return new Response("Elysian Intelligence requires an API Key to function. (Mock Response: System Active)", { status: 200 });
      }

      const result = streamText({
        model: openai('gpt-4-turbo'),
        messages,
      });

      return (result as any).toDataStreamResponse();
  } catch {
      return new Response("System Error: Interaction Failed.", { status: 500 });
  }
}
