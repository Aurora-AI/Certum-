"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
    role: "user" | "assistant";
    content: string;
}

export function ChatFAB() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: "assistant", content: "Olá! Sou o assistente Aurora. Como posso ajudar você com Consórcio ou Seguros hoje?" }
    ]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (!input.trim()) return;
        
        setMessages(prev => [...prev, { role: "user", content: input }]);
        // Placeholder for AI response - in real implementation, this would call an API
        setTimeout(() => {
            setMessages(prev => [...prev, { 
                role: "assistant", 
                content: "Entendi! Posso te ajudar a simular um consórcio. Qual produto te interessa mais: Auto, Imóvel ou Serviços?" 
            }]);
        }, 1000);
        setInput("");
    };

    return (
        <>
            {/* FAB Button */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center",
                    isOpen 
                        ? "bg-white text-black rotate-90" 
                        : "bg-[#bfb38f] text-black hover:scale-110"
                )}
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
            </button>

            {/* Chat Modal */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 z-50 w-[380px] max-h-[500px] bg-[#0d0b07] border border-white/10 rounded-lg shadow-2xl flex flex-col overflow-hidden">
                    {/* Header */}
                    <div className="p-4 border-b border-white/10 bg-black/50">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-[#bfb38f]">Aurora Assistant</h3>
                        <p className="text-xs text-white/50 mt-1">Consórcio & Seguros</p>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[300px]">
                        {messages.map((msg, i) => (
                            <div 
                                key={i} 
                                className={cn(
                                    "max-w-[85%] p-3 rounded-lg text-sm",
                                    msg.role === "user" 
                                        ? "bg-[#bfb38f] text-black ml-auto" 
                                        : "bg-white/10 text-white/90"
                                )}
                            >
                                {msg.content}
                            </div>
                        ))}
                    </div>

                    {/* Input */}
                    <div className="p-4 border-t border-white/10 flex gap-2">
                        <input 
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSend()}
                            placeholder="Digite sua mensagem..."
                            className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#bfb38f]"
                        />
                        <button 
                            onClick={handleSend}
                            className="p-2 bg-[#bfb38f] text-black rounded-lg hover:bg-white transition-colors"
                        >
                            <Send className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
