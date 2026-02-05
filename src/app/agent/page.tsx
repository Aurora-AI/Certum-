import { Suspense } from "react";
import { CentrumAgentUI } from "@/components/agent/CentrumAgentUI";

export default function AgentPage() {
  return (
    <main className="w-full h-screen overflow-hidden bg-[#343541]">
        <Suspense fallback={null}>
            <CentrumAgentUI />
        </Suspense>
    </main>
  );
}
