import dotenv from 'dotenv';
import path from 'path';
import { createOpenAI } from '@ai-sdk/openai';
import { generateText } from 'ai';

// Load .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function testProvider() {
  console.log('--- Testing LLM Provider Connection ---');
  
  const openRouterKey = process.env.OPENROUTER_API_KEY;
  const deepSeekKey = process.env.DEEPSEEK_API_KEY;
  
  console.log(`OpenRouter Key Present: ${!!openRouterKey}`);
  console.log(`DeepSeek Key Present: ${!!deepSeekKey}`);

  let model;
  let providerName;

  if (openRouterKey) {
      console.log('Configuring OpenRouter...');
      const openrouter = createOpenAI({
          name: 'openrouter',
          apiKey: openRouterKey,
          baseURL: 'https://openrouter.ai/api/v1',
      });
      model = openrouter('deepseek/deepseek-chat');
      providerName = 'OpenRouter';
  } else if (deepSeekKey) {
      console.log('Configuring DeepSeek Direct...');
      const deepseek = createOpenAI({
          name: 'deepseek',
          apiKey: deepSeekKey,
          baseURL: 'https://api.deepseek.com',
      });
      model = deepseek('deepseek-chat');
      providerName = 'DeepSeek';
  } else {
      console.error('No keys found for DeepSeek/OpenRouter.');
      return;
  }

  try {
      console.log(`Sending request to ${providerName}...`);
      const { text } = await generateText({
          model,
          prompt: 'Hello, are you functional? Reply with "Yes".',
      });
      console.log('Response:', text);
      console.log('--- SUCCESS ---');
  } catch (error) {
      console.error('--- FAILURE ---');
      console.error(error);
  }
}

testProvider();
