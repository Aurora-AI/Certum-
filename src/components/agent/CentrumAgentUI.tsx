"use client";

import { useRef, useState, useEffect } from "react";
import { Send, Menu, Plus, MessageSquare, User, Settings, ChevronLeft, Paperclip, Mic } from "lucide-react";
import { cn } from "@/lib/utils";

// --- TYPES ---
type Message = {
  role: 'user' | 'agent';
  text: string;
};

// --- MOCK DATA ---
const HISTORY = [
  "Análise de Vídeo IA",
  "Rodrigo Cesar Winhaski",
  "Projeto Aurora",
  "DALL-E Generations"
];

export const CentrumAgentUI = () => {
  // State
  const [messages, setMessages] = useState<Message[]>([
      { role: 'agent', text: 'Olá. Como posso ajudar com sua arquitetura financeira hoje?' }
  ]);
  const [input, setInput] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages(prev => [...prev, { role: 'user', text: input }]);
    setInput("");

    // Mock Response
    setTimeout(() => {
        setMessages(prev => [...prev, { role: 'agent', text: "Entendido. Estou processando sua solicitação." }]);
    }, 1000);
  };

  return (
    <div className="flex h-screen w-full bg-[#343541] text-gray-100 font-sans">
      
      {/* 1. SIDEBAR (Darker) */}
      <aside className={cn(
          "bg-[#202123] flex-col transition-all duration-300 overflow-hidden border-r border-white/10",
          sidebarOpen ? "w-[260px] flex" : "w-0 hidden"
      )}>
          {/* New Chat Button */}
          <div className="p-3">
              <button 
                onClick={() => setMessages([])}
                className="flex items-center gap-3 w-full px-4 py-3 rounded-md border border-white/20 hover:bg-[#343541] transition-colors text-sm text-start"
              >
                  <Plus className="w-4 h-4" />
                  Novo chat
              </button>
          </div>

          {/* History List */}
          <div className="flex-1 overflow-y-auto px-3 py-2 space-y-2">
              <div className="text-xs font-semibold text-gray-500 px-3 py-2">Hoje</div>
              {HISTORY.map((item, i) => (
                  <button key={i} className="flex items-center gap-3 w-full px-3 py-3 rounded-md hover:bg-[#343541] transition-colors text-sm text-gray-100 truncate">
                      <MessageSquare className="w-4 h-4 shrink-0 text-gray-400" />
                      <span className="truncate">{item}</span>
                  </button>
              ))}
          </div>

          {/* User Profile / Footer */}
          <div className="p-3 border-t border-white/10">
              <button className="flex items-center gap-3 w-full px-3 py-3 rounded-md hover:bg-[#343541] transition-colors text-sm">
                  <User className="w-4 h-4 text-gray-400" />
                  <span>Rodrigo Winhaski</span>
              </button>
          </div>
      </aside>


      {/* 2. MAIN CONTENT */}
      <main className="flex-1 flex flex-col relative bg-[#343541]">
          
          {/* Header (Mobile / Toggle) */}
          <header className="h-12 flex items-center px-4 md:hidden border-b border-white/10">
               <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-400">
                   <Menu className="w-6 h-6" />
               </button>
               <span className="ml-4 text-sm font-medium">Nova conversa</span>
          </header>

          {/* Desktop Sidebar Toggle (Floating) */}
          <div className="hidden md:block absolute top-4 left-4 z-10">
               <button 
                onClick={() => setSidebarOpen(!sidebarOpen)} 
                className="p-2 text-gray-400 hover:text-white bg-black/50 rounded-md opacity-0 hover:opacity-100 transition-opacity"
                title={sidebarOpen ? "Fechar sidebar" : "Abrir sidebar"}
               >
                   {sidebarOpen ? <ChevronLeft className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
               </button>
          </div>

          {/* CHAT AREA */}
          <div className="flex-1 overflow-y-auto custom-scrollbar">
              <div className="flex flex-col items-center w-full">
                  {messages.map((msg, i) => (
                      <div key={i} className={cn(
                          "w-full py-8 md:py-10 border-b border-black/10 dark:border-gray-900/50",
                          msg.role === 'agent' ? "bg-[#444654]" : "bg-[#343541]"
                      )}>
                          <div className="w-full max-w-3xl mx-auto flex gap-6 px-4 md:px-6">
                              {/* Avatar */}
                              <div className={cn(
                                  "w-8 h-8 shrink-0 rounded-sm flex items-center justify-center",
                                  msg.role === 'agent' ? "bg-[#19c37d]" : "bg-[#5436DA]"
                              )}>
                                  {msg.role === 'agent' ? <Settings className="w-5 h-5 text-white" /> : <span className="text-xs font-bold text-white">RW</span>}
                              </div>
                              
                              {/* Content */}
                              <div className="relative flex-1 overflow-hidden">
                                  <div className="prose prose-invert max-w-none text-base leading-7">
                                      {msg.text}
                                  </div>
                              </div>
                          </div>
                      </div>
                  ))}
                  <div className="w-full h-32 md:h-48 shrink-0" /> {/* Spacer */}
                  <div ref={messagesEndRef} />
              </div>
          </div>

          {/* INPUT AREA */}
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#343541] via-[#343541] to-transparent pt-10 pb-6 px-4">
              <div className="max-w-3xl mx-auto relative">
                <form onSubmit={handleSubmit} className="relative flex items-center w-full p-3 bg-[#40414f] rounded-xl border border-black/10 shadow-xs focus-within:border-gray-500/50 ring-offset-2 focus-within:ring-0 overflow-hidden">
                    <input 
                        className="flex-1 max-h-[200px] m-0 w-full resize-none border-0 bg-transparent p-0 pl-2 pr-10 text-white focus:ring-0 focus-visible:ring-0 md:pl-2 md:pr-10 outline-none"
                        placeholder="Envie uma mensagem..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        autoFocus
                    />
                    <button 
                        type="submit" 
                        disabled={!input.trim()}
                        className="absolute right-3 p-1 rounded-md text-gray-400 hover:bg-black/50 hover:text-white disabled:opacity-40 disabled:hover:bg-transparent transition-all"
                    >
                        <Send className="w-4 h-4" />
                    </button>
                    
                    {/* Extra Icons (Visual Only) */}
                    <button type="button" className="hidden absolute right-12 text-gray-400 hover:text-white">
                        <Paperclip className="w-4 h-4" />
                    </button>
                </form>
                <div className="text-center mt-3">
                    <span className="text-xs text-gray-400/70">
                        Centrum Private Intelligence. Todas as simulações possuem caráter confidencial.
                    </span>
                </div>
              </div>
          </div>
      </main>
    </div>
  );
};
