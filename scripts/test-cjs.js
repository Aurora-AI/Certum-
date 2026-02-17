require('dotenv').config({ path: '.env.local' });
const firecrawlPkg = require('@mendable/firecrawl-js');

console.log('Required Package Type:', typeof firecrawlPkg);
console.log('Required Package Keys:', Object.keys(firecrawlPkg));

const apiKey = process.env.FC_API_KEY || "fc-2959d56b739c46eeb4c3dcfb49a263e5";

try {
    let AppClass;
    if (typeof firecrawlPkg === 'function') {
        AppClass = firecrawlPkg; // It is the class itself
    } else if (firecrawlPkg.default) {
        AppClass = firecrawlPkg.default;
    } else if (firecrawlPkg.FirecrawlApp) {
        AppClass = firecrawlPkg.FirecrawlApp;
    } else {
        // Look for any class-like export
        AppClass = Object.values(firecrawlPkg).find(v => typeof v === 'function' && v.prototype);
    }

    if (!AppClass) {
        throw new Error('Could not find Firecrawl class in package exports');
    }

    console.log('Using Class:', AppClass.name);
    const app = new AppClass({ apiKey });
    
    console.log('Instantiated successfully.');
    
    app.scrapeUrl('https://firecrawl.dev', { formats: ['markdown'] })
       .then(res => {
           console.log('Scrape Success:', res.success);
           if (res.success) console.log('Title:', res.metadata?.title);
       })
       .catch(err => console.error('Scrape Failed:', err));

} catch (e) {
    console.error('Error:', e);
}
