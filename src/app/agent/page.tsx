import { AgentChat } from '@/components/rodobens/AgentChat';

export default function AgentPage() {
  return (
    <main className="min-h-screen bg-cosmic-cream flex items-center justify-center p-4">
      <div className="w-full max-w-4xl h-[85vh] border border-glass-border bg-white/50 backdrop-blur-sm shadow-xl flex flex-col">
        <header className="p-6 border-b border-glass-border flex justify-between items-center">
            <h1 className="font-display font-medium text-xl tracking-tight text-carbon-black uppercase">
                RPA-Core <span className="text-sovereign-gold">v1.0</span>
            </h1>
            <div className="flex gap-2 text-mono-xs text-graphite-grey">
                <span>Rodobens Product Architect</span>
                <span>•</span>
                <span className="text-emerald-600">Online</span>
            </div>
        </header>
        
        <div className="flex-1 overflow-hidden relative">
            <AgentChat />
        </div>
      </div>
    </main>
  );
}
