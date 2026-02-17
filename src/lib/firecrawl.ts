import Firecrawl from '@mendable/firecrawl-js';

// Ensure API Key is available
const apiKey = process.env.FC_API_KEY || "fc-2959d56b739c46eeb4c3dcfb49a263e5"; 

if (!apiKey) {
  console.warn("Firecrawl API Key missing. Please set FC_API_KEY in .env.local");
}

export const firecrawl = new Firecrawl({ apiKey });

/**
 * Scrapes a single URL and returns markdown.
 */
export async function scrapeUrl(url: string) {
  try {
    // Attempt standard scrape
    const response = await firecrawl.scrape(url);

    // Initial check for error property if it exists
    if ((response as any).error) {
       throw new Error(`Firecrawl Error: ${(response as any).error}`);
    }

    // Handle v1 response structure (direct data or nested data)
    const markdown = response.markdown || (response as any).data?.markdown;
    
    if (!markdown && !(response as any).success && !(response as any).data) {
        // Fallback check if it failed silently or has different structure
        throw new Error('No markdown found in response');
    }

    return markdown;
  } catch (error) {
    console.error("Failed to scrape URL:", url, error);
    throw error;
  }
}

/**
 * Crawls a website.
 */
export async function crawlSite(url: string, limit: number = 10) {
  try {
    const response = await firecrawl.crawl(url, {
      limit,
      scrapeOptions: {
        formats: ['markdown'],
      },
    });

    if ((response as any).error) {
       throw new Error(`Firecrawl Error: ${(response as any).error}`);
    }

    return response;
  } catch (error) {
    console.error("Failed to crawl site:", url, error);
    throw error;
  }
}
