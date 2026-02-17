'use client';

import { useChat } from '@ai-sdk/react';
import { useRef, useEffect, useState } from 'react';
import { PontualCard } from './tools/PontualCard';
import { ComparisonCard } from './tools/ComparisonCard';
import { PontualOffer, FinancialComparison } from '@/types/rodobens.schema';

export function AgentChat() {
  const chatHelpers = useChat({
      api: '/api/chat/rodobens',
      initialMessages: [
          {
              id: 'welcome',
              role: 'system', 
              content: "I am RPA-Core. I can simulate Consórcio Pontual and compare it with active financing rates. Give me a vehicle value (e.g. 50k) to start."
          } as any 
      ]
  });
  
  // Destructure what we know exists + fallback for others
  const { messages, sendMessage, isLoading, ...rest } = chatHelpers as any; 
  
  // Manual State Management
  const [input, setInput] = useState('');

  // DEBUG LOGGING
  useEffect(() => {
      console.log("useChat helpers (REFRESHED):", chatHelpers);
  }, [chatHelpers]);

  const scrollRef = useRef<HTMLDivElement>(null);

  const safeMessages = messages ?? [];

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
          // Attempt to use sendMessage (assuming it takes a message object or event)
          // Documentation for some versions suggests append({ role: 'user', content: ... })
          // If sendMessage exists, let's try to use it with a standard message object.
          if (typeof sendMessage === 'function') {
               // Some versions: sendMessage(e) -> FormEvent
               // Others: sendMessage(chatRequestOptions)
               // Others: append(message)
               
               // Let's try to locate 'append'.
               if (rest.append) {
                   await rest.append({ role: 'user', content: userMessage });
               } else {
                   // Fallback: assume sendMessage handles request construction
                   // We need to verify signature. 
                   // If we can't, we might need to rely on 'append' if it exists in prototype.
                   console.log("Attempting sendMessage...");
                   await sendMessage({ role: 'user', content: userMessage });
               }
          } else if (typeof rest.append === 'function') {
              await rest.append({ role: 'user', content: userMessage });
          } else {
              console.error("No send method found!");
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
                    
                    {/* Text Content */}
                    <div className="whitespace-pre-wrap">{m.content}</div>

                    {/* Tool Invocations */}
                    {m.toolInvocations?.map((toolInvocation: any) => {
                        const toolCallId = toolInvocation.toolCallId;
                        
                        // Render Result
                        if ('result' in toolInvocation) {
                            if (toolInvocation.toolName === 'simulatePontual') {
                                return (
                                    <div key={toolCallId} className="mt-4">
                                        <PontualCard data={toolInvocation.result as PontualOffer} />
                                    </div>
                                );
                            }
                            if (toolInvocation.toolName === 'compareFinancials') {
                                return (
                                    <div key={toolCallId} className="mt-4">
                                        <ComparisonCard data={toolInvocation.result as FinancialComparison} /> 
                                    </div>
                                );
                            }
                        } else {
                            // Loading State
                            return (
                                <div key={toolCallId} className="mt-4 text-xs font-mono text-sovereign-gold animate-pulse">
                                    ▶ Calculating {toolInvocation.toolName}...
                                </div>
                            );
                        }
                        return null;
                    })}
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
            placeholder="Ask about vehicle value, Pontual plan, or financing comparison..."
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
