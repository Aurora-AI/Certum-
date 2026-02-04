"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { Send, Activity, ShieldCheck, SquareTerminal, FileText, Lock, ChevronRight } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

// --- Types ---
type Message = {
  role: 'user' | 'agent';
  text: string;
  type?: 'text' | 'dossier'; // Support for rich media
  dossierData?: {
      title: string;
      subtitle: string;
      items: { label: string; value: string }[];
  };
  timestamp: string;
};

type ContextType = 'auto' | 'imovel' | 'frota' | 'outros' | null;

// --- Assets & Data (The Architect Persona) ---
const GREETINGS: Record<string, string> = {
    auto: "Protocolo Auto detectado. Acesso autorizado ao Dossiê de Veículos. Como posso refinar sua busca hoje?",
    imovel: "Portfolio Imobiliário carregado. Identificando oportunidades de alto valor. Qual o objetivo do investimento?",
    frota: "Logística Empresarial ativa. Acesso a condições para frota e maquinário. Quantas unidades deseja cotar?",
    outros: "Serviços Especiais. Do casamento à cirurgia, o Vault está aberto. O que você deseja conquistar?",
    default: "Centrum Private Banking. Conexão Segura Estabelecida. Como posso servir sua arquitetura patrimonial hoje?"
};

const SUGGESTIONS: Record<string, string[]> = {
    auto: ["Simular Porsche Macan", "Ver Taxas para Blindados", "Trocar meu Veículo"],
    imovel: ["Imóvel de 1 Milhão", "Investir em Terrenos", "Construção sem Juros"],
    frota: ["Caminhões Scania", "Maquinário Agrícola", "Renovação de Frota"],
    outros: ["Cirurgia Plástica", "Festa de Casamento", "Náutica de Luxo"],
    default: ["Simular Investimento", "Falar com um Banker", "Conhecer o Vault"]
};

// --- The Patience Engine States ---
const THINKING_STATES = [
    "Consulting Private Ledger...",
    "Calibrating Risk Profiles...",
    "Verifying Market Integrity...",
    "Accessing Vault 74...",
    "Structuring Protocol..."
];

export const CentrumAgentUI = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const searchParams = useSearchParams();
  const context = searchParams.get('context') as ContextType || 'default';

  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  
  // Patience Engine State
  const [isThinking, setIsThinking] = useState(false);
  const [thinkingStatus, setThinkingStatus] = useState("");
  
  const [init, setInit] = useState(false);

  // --- Scroll to Bottom ---
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isThinking, thinkingStatus]);

  // --- Initialization Logic (The Handshake) ---
  useEffect(() => {
    if (init) return;

    // The "Biometric" Moment (Artificial Delay)
    const timer = setTimeout(() => {
        const greeting = GREETINGS[context] || GREETINGS['default'];
        addMessage('agent', greeting);
        setInit(true);
    }, 2000); // Slow Handshake

    // Entrance Animation (Cinematic)
    const ctx = gsap.context(() => {
      // Frame Reveal
      gsap.from(".frame-border", {
        scaleX: 0,
        duration: 2, // Slower
        ease: "power4.out",
        stagger: 0.2
      });

      // Content Fade In
      gsap.from(".agent-content", {
        y: 20,
        opacity: 0,
        delay: 0.8,
        duration: 1.5,
        ease: "power3.out"
      });
    }, containerRef);

    return () => {
        clearTimeout(timer);
        ctx.revert();
    }
  }, [context, init]);

  // --- Helper: Add Message ---
  const addMessage = (role: 'user' | 'agent', text: string, dossierData?: Message['dossierData']) => {
    setMessages(prev => [...prev, {
        role,
        text,
        type: dossierData ? 'dossier' : 'text',
        dossierData,
        timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    }]);
  };

  // --- The Brain (Handlers) ---
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // User Message
    const userText = inputValue;
    addMessage('user', userText);
    setInputValue("");
    
    // START THE RITUAL (Patience Engine)
    setIsThinking(true);
    
    // Sequence of statuses
    let stage = 0;
    setThinkingStatus(THINKING_STATES[0]);

    const intervalId = setInterval(() => {
        stage++;
        if (stage < 3) { // Show 3 states
            setThinkingStatus(THINKING_STATES[Math.floor(Math.random() * THINKING_STATES.length)]);
        } else {
            clearInterval(intervalId);
            setIsThinking(false);
            setThinkingStatus("");
            
            // Generate Response (Mock Logic)
            generateArchitectResponse(userText);
        }
    }, 1500); // 1.5s per thought = ~4.5s total wait (Luxury Time)
  };

  // --- The Architect Logic (Mock Decision Tree) ---
  const generateArchitectResponse = (input: string) => {
      const lower = input.toLowerCase();

      if (lower.includes("simular") || lower.includes("investir") || lower.includes("preço") || lower.includes("valor")) {
          // Deliver a Dossier
          addMessage('agent', "Preparei um estudo preliminar baseado nos parâmetros solicitados. Observe as condições de alavancagem.", {
              title: "SIMULAÇÃO PRELIMINAR",
              subtitle: "CRÉDITO ESTRUTURADO",
              items: [
                  { label: "Crédito Alvo", value: "R$ 500.000,00" },
                  { label: "Aporte Mensal", value: "R$ 2.450,00" },
                  { label: "Prazo Otimizado", value: "180 Meses" },
                  { label: "Taxa Adm", value: "0% (Isento)" }
              ]
          });
      } else if (lower.includes("banker") || lower.includes("contato") || lower.includes("falar")) {
          addMessage('agent', "Entendido. A natureza da sua solicitação exige supervisão sênior. Estou encaminhando seu perfil para um Private Banker. Deseja agendar uma conferência?");
      } else {
          // Generic "Safe" Response
          addMessage('agent', "Compreendido. Para estruturar essa operação com a máxima eficiência, preciso que confirme: o objetivo é liquidez imediata ou construção de patrimônio a longo prazo?");
      }
  };

  const handleSuggestion = (prompt: string) => {
      setInputValue(prompt);
  };


  return (
    <div ref={containerRef} className="relative w-full h-full flex flex-col items-center justify-center bg-[#050505] text-white p-4 md:p-8 overflow-hidden font-sans selection:bg-[#bfb38f] selection:text-black">
      
      {/* 1. BACKGROUND TEXTURE (Subtle Grain - Static) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
      
      {/* 2. THE FRAME (Swiss Structure) */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10 frame-border" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10 frame-border" />
      <div className="absolute left-0 top-0 w-[1px] h-full bg-white/10 frame-border" />
      <div className="absolute right-0 top-0 w-[1px] h-full bg-white/10 frame-border" />

      {/* 3. MAIN INTERFACE CONTAINER */}
      <div className="relative z-10 w-full max-w-4xl h-[90vh] flex flex-col justify-between border-x border-white/5 bg-[#050505]/50 backdrop-blur-sm shadow-2xl shadow-black">
          
          {/* HEADER: STATUS BAR */}
          <header className="h-16 border-b border-white/10 flex items-center justify-between px-6 md:px-8 bg-white/[0.02]">
                <div className="flex items-center gap-3">
                    <SquareTerminal className="w-4 h-4 text-[#bfb38f]" />
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/80">Centrum Private</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase">Secure Connection</span>
                </div>
          </header>

          {/* BODY: CONVERSATION STREAM */}
          <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {messages.map((msg, i) => (
                  <div key={i} className={cn(
                      "flex flex-col max-w-[90%] md:max-w-[80%] agent-content transform-gpu",
                      msg.role === 'user' ? "ml-auto items-end" : "mr-auto items-start"
                  )}>
                      <div className="flex items-center gap-3 mb-2 opacity-50">
                          <span className="text-[10px] font-mono uppercase tracking-widest">
                              {msg.role === 'user' ? 'OPERATOR' : 'CENTRUM AGENT'}
                          </span>
                          <span className="text-[10px] font-mono text-white/30">{msg.timestamp}</span>
                      </div>
                      
                      <div className={cn(
                          "relative p-6 text-sm md:text-base leading-relaxed tracking-wide border transition-all duration-700",
                          msg.role === 'user' 
                            ? "bg-white/5 border-white/10 text-white/90 rounded-tl-lg rounded-bl-lg rounded-br-lg" 
                            : "bg-[#bfb38f]/5 border-[#bfb38f]/20 text-[#bfb38f] rounded-tr-lg rounded-br-lg rounded-bl-lg shadow-[0_0_30px_-10px_rgba(191,179,143,0.1)]"
                      )}>
                          {/* Decorative Corner for Agent */}
                          {msg.role === 'agent' && (
                              <div className="absolute -left-[1px] -top-[1px] w-2 h-2 border-l border-t border-[#bfb38f]" />
                          )}
                          
                          {/* Text Content */}
                          <p className={msg.role === 'agent' ? "font-serif text-lg tracking-normal" : "font-light"}>
                              {msg.text}
                          </p>

                          {/* DOSSIER CARD (Rich Media) */}
                          {msg.type === 'dossier' && msg.dossierData && (
                              <div className="mt-6 border-t border-[#bfb38f]/20 pt-4">
                                  <div className="flex items-center gap-2 mb-4 text-[#bfb38f]/70">
                                      <FileText className="w-4 h-4" />
                                      <span className="text-[10px] font-bold uppercase tracking-widest">{msg.dossierData.subtitle}</span>
                                  </div>
                                  <h4 className="text-xl font-light text-white mb-6 uppercase tracking-widest">{msg.dossierData.title}</h4>
                                  <div className="grid grid-cols-2 gap-4">
                                      {msg.dossierData.items.map((item, idx) => (
                                          <div key={idx} className="bg-[#0a0a0a]/50 p-3 border border-white/5">
                                              <span className="block text-[9px] text-white/40 uppercase tracking-widest mb-1">{item.label}</span>
                                              <span className="block text-sm font-bold text-[#bfb38f]">{item.value}</span>
                                          </div>
                                      ))}
                                  </div>
                                  <button className="w-full mt-4 py-3 bg-[#bfb38f] text-black text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2">
                                      <Lock className="w-3 h-3" />
                                      <span>Acessar Documento</span>
                                  </button>
                              </div>
                          )}
                      </div>
                  </div>
              ))}
              
              {/* THE PATIENCE ENGINE INDICATOR */}
              {isThinking && (
                  <div className="flex items-center gap-3 text-[#bfb38f]/50 ml-4 animate-pulse">
                      <Activity className="w-3 h-3" />
                      <span className="text-[10px] font-mono uppercase tracking-widest">{thinkingStatus}</span>
                  </div>
              )}
              <div ref={messagesEndRef} />
          </div>

          {/* FOOTER: INPUT & SUGGESTIONS */}
          <footer className="p-6 md:p-8 border-t border-white/10 bg-white/[0.02]">
              
              {/* Suggestion Chips (Only show if not thinking) */}
              {!isThinking && (
                <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
                    {SUGGESTIONS[context]?.length > 0 && SUGGESTIONS[context].map((prompt, i) => (
                        <button 
                            key={i}
                            onClick={() => handleSuggestion(prompt)}
                            className="px-3 py-1 border border-white/10 hover:border-[#bfb38f] text-[10px] text-white/60 hover:text-[#bfb38f] uppercase tracking-widest transition-all hover:bg-[#bfb38f]/10"
                        >
                            {prompt}
                        </button>
                    ))}
                </div>
              )}

              {/* The "Signature" Input */}
              <form onSubmit={handleSubmit} className="relative group">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[#bfb38f]">
                      <span className="text-xl">›</span>
                  </div>
                  <input 
                      ref={inputRef}
                      type="text" 
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      readOnly={isThinking} // Block input while thinking
                      placeholder={isThinking ? "Aguarde..." : "Digite sua ordem executiva..."}
                      className="w-full bg-transparent border-b border-white/20 pl-8 pr-12 py-4 text-white font-serif text-xl md:text-2xl placeholder:text-white/20 placeholder:font-sans placeholder:text-base placeholder:tracking-widest focus:border-[#bfb38f] focus:outline-none transition-all disabled:opacity-50"
                  />
                  <button 
                    type="submit" 
                    disabled={isThinking}
                    className="absolute right-0 top-1/2 -translate-y-1/2 p-2 opacity-50 hover:opacity-100 hover:text-[#bfb38f] transition-all disabled:opacity-0"
                  >
                      <Send className="w-5 h-5" />
                  </button>
              </form>
              
              <div className="flex justify-between items-center mt-4">
                 <div className="flex items-center gap-2 text-white/20">
                    <ShieldCheck className="w-3 h-3" />
                    <span className="text-[8px] uppercase tracking-[0.2em]">End-to-End Encrypted</span>
                 </div>
                 <span className="text-[8px] text-white/10 font-mono">ID: 8X-9902 // NODE: BRAZIL-SOUTH</span>
              </div>
          </footer>

      </div>
    </div>
  );
};
