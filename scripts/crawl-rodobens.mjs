import Firecrawl from '@mendable/firecrawl-js';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const apiKey = process.env.FC_API_KEY || "fc-2959d56b739c46eeb4c3dcfb49a263e5";
const app = new Firecrawl({ apiKey });

async function crawl() {
  const url = 'https://www.rodobens.com.br';
  console.log(`Starting crawl of ${url}...`);

  try {
    // Note: The SDK 'crawl' method usually waits for completion by default or returns a job ID.
    // We will handle both cases.
    const response = await app.crawl(url, {
      limit: 100, 
      scrapeOptions: {
        formats: ['markdown'],
      },
      // Glob patterns for product sections (simplified)
      includePaths: ['/consorcio/.*', '/financiamento/.*', '/seguros/.*']
    });

    if (!response.success && !response.jobId && !response.id) {
       // Firecrawl v1 might return { success: true, data: [...] } OR { success: true, id: "..." }
       throw new Error(`Crawl failed: ${JSON.stringify(response)}`);
    }

    let data = response.data;
    const jobId = response.id || response.jobId; // SDK might use 'id' or 'jobId'

    if (!data && jobId) {
        console.log(`Crawl started! Job ID: ${jobId}. Polling...`);
        
        let status = await app.checkCrawlStatus(jobId);
        
        while (status.status === 'active' || status.status === 'scraping') {
            await new Promise(r => setTimeout(r, 5000));
            status = await app.checkCrawlStatus(jobId);
            console.log(`Status: ${status.status} | Completed: ${status.completed} | Total: ${status.total}`);
        }
        
        if (status.status === 'completed') {
            data = status.data;
        } else {
            throw new Error(`Crawl did not complete successfully. Status: ${status.status}`);
        }
    } else if (!data) {
         throw new Error(`No data and no job ID returned.`);
    }

    console.log(`Crawl finished. Found ${data.length} pages.`);
        
    // Save to file
    const outputPath = path.resolve(process.cwd(), 'madlab-core/knowledge/rodobens-crawl-data.json');
    
    // Ensure directory exists
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
    console.log(`Data saved to ${outputPath}`);

  } catch (error) {
    console.error('Execution Error:', error);
    if (error.response) console.error('Response:', error.response.data);
  }
}

crawl();
