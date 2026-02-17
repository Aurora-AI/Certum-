import Firecrawl from '@mendable/firecrawl-js';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const apiKey = process.env.FC_API_KEY || "fc-2959d56b739c46eeb4c3dcfb49a263e5";

try {
    console.log('Class Name:', Firecrawl.name);
    console.log('Prototype Keys:', Object.getOwnPropertyNames(Firecrawl.prototype));

    const app = new Firecrawl({ apiKey });
    console.log('Instance Keys:', Object.keys(app));
    console.log('Instance Prototype Keys:', Object.getOwnPropertyNames(Object.getPrototypeOf(app)));
    
    // Check for scrape method
    if (typeof app.scrapeUrl === 'function') console.log('Has scrapeUrl()');
    if (typeof app.scrape === 'function') console.log('Has scrape()');
    if (typeof app.crawlUrl === 'function') console.log('Has crawlUrl()');

} catch (e) {
    console.error('Error:', e);
}
