'use client';

export function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      
      {/* 1. THE ABYSS (Base Dark) */}
      <div className="absolute inset-0 bg-[#0d0b07]"></div>

      {/* 2. ENERGY ORBS (Aurora) */}
      {/* Orb 1: Deep Purple (Mystery) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#4a00e0] rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-aurora-1"></div>
      
      {/* Orb 2: Electric Blue (Technology) */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[#00c2ff] rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-aurora-2"></div>
      
      {/* Orb 3: Sovereign Gold (Wealth - Subtle) */}
      <div className="absolute top-[20%] right-[20%] w-[30vw] h-[30vw] bg-[#ecb613] rounded-full mix-blend-overlay filter blur-[80px] opacity-10 animate-aurora-3"></div>

      {/* 3. TEXTURE (Noise - Materiality) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      
      {/* 4. VIGNETTE (Focus on Center) */}
      <div className="absolute inset-0 bg-linear-to-t from-[#0d0b07] via-transparent to-[#0d0b07]/50"></div>

    </div>
  );
}
