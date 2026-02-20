'use client';

import { useChat } from '@ai-sdk/react';
import { useRef, useEffect, useState, useMemo } from 'react';

export function AgentChat() {
  const chatHelpers = useChat({
      // @ts-expect-error: Using a divergent api string type until SDK updates
      api: '/api/chat/rodobens',
      initialMessages: [
          {
              id: 'welcome',
              role: 'assistant', 
              content: "I am the **Cognitive Factory Orchestrator**. Give me a B2B product goal, client pain point, or strategic objective. I will coordinate the Rodobens Expert, Sales Strategist, and Copywriter to build your asset."
          } as any 
      ]
  });
  
  const { messages, append, isLoading } = chatHelpers as any; 
  
  // Manual State Management
  const [input, setInput] = useState('');

  const scrollRef = useRef<HTMLDivElement>(null);

  const safeMessages = useMemo(() => messages ?? [], [messages]);

  useEffect(() => {
    if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [safeMessages]);

  const handleManualSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!input.trim()) return;
      
      const userMessage = input;
      setInput(''); // Clear input immediately
      
      try {
          if (append) {
              await append({ role: 'user', content: userMessage });
          } else {
              console.error("No append method found on useChat");
          }
      } catch (err) {
          console.error("Failed to send:", err);
          setInput(userMessage); // Restore input on fail
      }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth" ref={scrollRef}>
        {safeMessages.filter((m: any) => m.role !== 'system').map((m: any) => (
            <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] ${m.role === 'user' ? 'bg-carbon-black text-white' : 'bg-gray-50 text-carbon-black border border-glass-border'} p-4 text-sm font-body leading-relaxed shadow-sm`}>
                    
                    {/* Text Content with Markdown Support (if we had ReactMarkdown, but whitespace-pre-wrap works nicely) */}
                    <div className="whitespace-pre-wrap font-mono prose prose-zinc prose-sm max-w-none text-carbon-black">{m.content}</div>
                </div>
            </div>
        ))}
        {isLoading && (
            <div className="flex justify-start">
                <div className="bg-gray-50 p-4 border border-glass-border">
                    <span className="inline-block w-2 h-2 bg-carbon-black rounded-full animate-bounce mr-1"></span>
                    <span className="inline-block w-2 h-2 bg-carbon-black rounded-full animate-bounce mr-1 delay-75"></span>
                    <span className="inline-block w-2 h-2 bg-carbon-black rounded-full animate-bounce delay-150"></span>
                </div>
            </div>
        )}
      </div>

      {/* Input Area */}
      <form onSubmit={handleManualSubmit} className="p-4 border-t border-glass-border bg-white flex gap-2">
        <input 
            className="flex-1 bg-gray-50 border border-glass-border p-3 font-body text-sm focus:outline-none focus:border-carbon-black transition-colors text-carbon-black placeholder-gray-400"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe the desired B2B product strategy, email pitch, or sales page..."
        />
        <button 
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-carbon-black text-white px-6 py-3 font-mono text-xs uppercase tracking-wider hover:bg-sovereign-gold hover:text-carbon-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
            Send
        </button>
      </form>
    </div>
  );
}
