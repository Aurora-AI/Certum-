import { Suspense } from "react";
import { CentrumAgentUI } from "@/components/agent/CentrumAgentUI";
import { AuroraSovereignShell } from "@/components/sanctuary/AuroraSovereignShell";
import { WealthReveal } from "@/components/sanctuary/WealthReveal";

export default function AgentPage() {
  return (
    <main className="w-full min-h-screen bg-black overflow-x-hidden">
        {/* The Gatekeeper (Dark Mode) */}
        <section className="h-screen w-full relative z-20">
            <Suspense fallback={<div className="text-white/30 text-xs font-mono tracking-widest uppercase animate-pulse absolute inset-0 flex items-center justify-center">Establishing Secure Connection...</div>}>
                <CentrumAgentUI />
            </Suspense>
        </section>

        {/* The Sanctuary (Aurora Mode - The Outcome) */}
        <section className="relative z-10 w-full">
            <AuroraSovereignShell>
                <WealthReveal totalValue="R$ 1.000.000,00" growth="+15% a.a." sentiment="Sovereign" />
                
                {/* Placeholder for Grid */}
                <div className="col-span-12 md:col-span-4 h-full min-h-[500px] bg-white/40 backdrop-blur-md rounded-3xl border border-[#0A1A2F]/5 p-8 reveal-element">
                    <h3 className="text-2xl font-light text-[#0A1A2F] mb-4">Portfólio Imobiliário</h3>
                    <div className="space-y-4">
                        <div className="h-24 bg-[#0A1A2F]/5 rounded-xl animate-pulse" />
                        <div className="h-24 bg-[#0A1A2F]/5 rounded-xl animate-pulse delay-100" />
                        <div className="h-24 bg-[#0A1A2F]/5 rounded-xl animate-pulse delay-200" />
                    </div>
                </div>
            </AuroraSovereignShell>
        </section>
    </main>
  );
}
