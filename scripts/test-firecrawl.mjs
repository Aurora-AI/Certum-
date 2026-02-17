import Firecrawl from '@mendable/firecrawl-js';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const apiKey = process.env.FC_API_KEY || "fc-2959d56b739c46eeb4c3dcfb49a263e5";
const app = new Firecrawl({ apiKey });

async function test() {
  try {
    console.log('Scraping firecrawl.dev...');
    
    const result = await app.scrape('https://firecrawl.dev');

    // Check for success based on content presence
    const markdown = result.markdown || result.data?.markdown;

    if (markdown) {
       console.log('\n--- Success! ---\n');
       console.log('Title:', result.metadata?.title);
       console.log('Markdown Length:', markdown.length);
       console.log('Preview:', markdown.substring(0, 100).replace(/\n/g, ' ') + '...');
    } else {
       console.error('Scrape failed (No markdown):', result);
       process.exit(1);
    }
    
  } catch (err) {
    console.error('Execution Error:', err);
    process.exit(1);
  }
}

test();
