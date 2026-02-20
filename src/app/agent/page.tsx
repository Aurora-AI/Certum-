import { AgentChat } from '@/components/rodobens/AgentChat';

export default function AgentPage() {
  return (
    <main className="min-h-screen bg-cosmic-cream flex items-center justify-center p-4">
      <div className="w-full max-w-4xl h-[85vh] border border-glass-border bg-white/50 backdrop-blur-sm shadow-xl flex flex-col">
        <header className="p-6 border-b border-glass-border flex justify-between items-center">
            <div>
              <h1 className="font-display font-medium text-xl tracking-tight text-carbon-black uppercase">
                  Cognitive Factory <span className="text-sovereign-gold">v2.0</span>
              </h1>
              <p className="text-xs font-mono text-graphite-grey mt-1">Multi-Agent State Machine • B2B Structuring</p>
            </div>
            <div className="flex gap-4 text-mono-xs text-graphite-grey items-center">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                  Rodobens Expert
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                  Strategist
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse"></span>
                  Copywriter
                </div>
            </div>
        </header>
        
        <div className="flex-1 overflow-hidden relative">
            <AgentChat />
        </div>
      </div>
    </main>
  );
}
