import fs from 'fs';
import path from 'path';
import { tool } from 'ai';
import { z } from 'zod';

export const searchRodobensDocsTool = tool({
  description: 'Searches the local Rodobens knowledge base (Markdown files) for terms, rules, and group specifications. Use this to find precise information about products, rules, reduced installments, chargebacks, etc.',
  parameters: z.object({
    query: z.string().describe('The search query or keyword to look for in the markdown files.'),
  }),
  // @ts-expect-error: Vercel AI SDK types mismatching locally
  execute: async ({ query }: { query: string }) => {
    try {
      const KNOWLEDGE_BASE_PATH = path.resolve(process.cwd(), '_BKP_ANTIGO/docs/Rodobens');
      console.log(`[RAG Tool] Searching for: "${query}" in ${KNOWLEDGE_BASE_PATH}`);
      
      if (!fs.existsSync(KNOWLEDGE_BASE_PATH)) {
        return `Error: Knowledge base directory not found at ${KNOWLEDGE_BASE_PATH}`;
      }

      // Recursive function to get all .md files
      const getAllFiles = (dirPath: string, arrayOfFiles: string[] = []) => {
        const files = fs.readdirSync(dirPath);
        
        files.forEach((file) => {
          if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
          } else if (file.endsWith('.md')) {
            arrayOfFiles.push(path.join(dirPath, "/", file));
          }
        });
        return arrayOfFiles;
      };

      const allMarkdownFiles = getAllFiles(KNOWLEDGE_BASE_PATH);
      const results: { file: string, snippet: string }[] = [];

      // Simple grep-like search across all files
      for (const filePath of allMarkdownFiles) {
        const content = fs.readFileSync(filePath, 'utf-8');
        const lines = content.split('\n');
        
        for (let i = 0; i < lines.length; i++) {
          if (lines[i].toLowerCase().includes(query.toLowerCase())) {
            // Extract a snippet (2 lines before and 2 lines after for context)
            const start = Math.max(0, i - 2);
            const end = Math.min(lines.length - 1, i + 2);
            const snippet = lines.slice(start, end + 1).join('\n');
            
            // Format the filename for better readability
            const relativeName = path.relative(KNOWLEDGE_BASE_PATH, filePath);
            
            results.push({
              file: relativeName,
              snippet: snippet.trim()
            });

            // Limit results per file to avoid massive payloads
            if (results.filter(r => r.file === relativeName).length >= 3) {
                break; 
            }
          }
        }

        // Limit total results
        if (results.length >= 15) {
            break;
        }
      }

      if (results.length === 0) {
        return `No results found for "${query}". Try different or broader keywords.`;
      }

      const formattedResults = results.map(r => `--- File: ${r.file} ---\n${r.snippet}\n-------------------`).join('\n\n');
      return `Found ${results.length} snippets for "${query}":\n\n${formattedResults}`;

    } catch (error) {
      console.error("[RAG Tool] Search Error:", error);
      return `Failed to execute search: ${String(error)}`;
    }
  },
});
