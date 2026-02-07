"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { HeroSection } from "@/components/mad-lab/HeroSection";
import { VaultSection } from "@/components/mad-lab/VaultSection";
import { ConsortiumSection } from "@/components/mad-lab/ConsortiumSection";
import { GenesisPreloader } from "@/components/GenesisPreloader";
import { TransitionPortal } from "@/components/ui/TransitionPortal";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [targetUrl, setTargetUrl] = useState("/agent");
  const router = useRouter();
  
  // Mode is passed to Hero (used for exit animations)
  const mode = "dream"; 

  // Transition Logic: Redirect to Agent
  const activateChat = (initialPrompt?: string) => {
    // Optional: Pass prompt via query param or store context
    // For now just transition
    setIsExiting(true);
  };

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#F4F4F4] text-[#1A1A1A] scroll-smooth">
      {loading && <GenesisPreloader onComplete={() => setLoading(false)} />}
      
      <TransitionPortal 
        isExiting={isExiting} 
        targetUrl={targetUrl}
        onComplete={() => setIsExiting(false)} 
      />

      {/* 1. Hero Module (Dream State) */}
      <HeroSection mode={mode} onActivate={activateChat} />

      {/* 2. Vault Module (Assets) */}
      <VaultSection />

      {/* 3. Consortium Module (Logic) */}
      <ConsortiumSection />

    </main>
  );
}
