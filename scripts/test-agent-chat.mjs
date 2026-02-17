import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function testChat() {
  const endpoint = 'http://localhost:3000/api/chat/rodobens';
  
  console.log(`Testing Chat Agent at ${endpoint}...`);
  console.log(`OpenAI Key Present: ${!!process.env.OPENAI_API_KEY}`);

  if (!process.env.OPENAI_API_KEY) {
      console.warn("WARNING: OPENAI_API_KEY is missing. Request will likely fail.");
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: [
          { role: 'user', content: 'Simulate a Pontual consortium for a car of R$ 50.000' }
        ]
      })
    });

    if (!response.ok) {
        const text = await response.text();
        throw new Error(`Server Error ${response.status}: ${text}`);
    }

    console.log('--- Agent Response Stream ---');
    
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    
    while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value);
        process.stdout.write(chunk);
    }
    
    console.log('\n--- End of Stream ---');

  } catch (error) {
    console.error('Test Failed:', error);
  }
}

testChat();
