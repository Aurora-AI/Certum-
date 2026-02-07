"use client";

import { useState } from "react";
// import { useRouter } from "next/navigation";
import HeroVideoAurora from "@/components/hero/HeroVideoAurora";
import { VaultSection } from "@/components/mad-lab/VaultSection";
import { ConsortiumSection } from "@/components/mad-lab/ConsortiumSection";
import { GenesisPreloader } from "@/components/GenesisPreloader";
import { TransitionPortal } from "@/components/ui/TransitionPortal";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [targetUrl] = useState("/agent");
  // const router = useRouter();
  
  // Mode is passed to Hero (used for exit animations)
  // const mode = "dream"; 

  // Transition Logic: Redirect to Agent
  // const activateChat = (initialPrompt?: string) => {
  //   setIsExiting(true);
  // };

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-white text-[#1A1A1A] scroll-smooth">
      {loading && <GenesisPreloader onComplete={() => setLoading(false)} />}
      
      <TransitionPortal 
        isExiting={isExiting} 
        targetUrl={targetUrl}
        onComplete={() => setIsExiting(false)} 
      />

      {/* 1. Hero Module (Dream State) */}
      <HeroVideoAurora />

      {/* 2. Vault Module (Assets) */}
      <VaultSection />

      {/* 3. Consortium Module (Logic) */}
      <ConsortiumSection />

    </main>
  );
}
