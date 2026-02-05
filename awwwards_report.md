🔧 Configured LLM: deepseek-chat
🔗 Base URL: https://api.deepseek.com/v1
🔑 Key: sk-e02...b601
🔮 Awwwards Jury is deliberating...
┌──────────────── 🚀 Crew Execution Started ────────────────┐
│                                                           │
│  Crew Execution Started                                   │
│  Name:                                                    │
│  crew                                                     │
│  ID:                                                      │
│  ee423cf5-f750-4351-8ebe-cd1ddbf1de64                     │
│                                                           │
│                                                           │
└───────────────────────────────────────────────────────────┘

┌───────────────────── 📋 Task Started ─────────────────────┐
│                                                           │
│  Task Started                                             │
│  Name:                                                    │
│          Analyze the following Source Code for two        │
│  pages: Main Page vs Consortium Page.                     │
│                                                           │
│          CODE CONTEXT:                                    │
│          === MAIN PAGE (src/app/page.tsx) ===             │
│  "use client";                                            │
│                                                           │
│  import { useState } from "react";                        │
│  import { useRouter } from "next/navigation";             │
│  import { HeroSection } from                              │
│  "@/components/mad-lab/HeroSection";                      │
│  import { VaultSection } from                             │
│  "@/components/mad-lab/VaultSection";                     │
│  import { ConsortiumSection } from                        │
│  "@/components/mad-lab/ConsortiumSection";                │
│  import { GenesisPreloader } from                         │
│  "@/components/GenesisPreloader";                         │
│                                                           │
│  export default function Home() {                         │
│    const [loading, setLoading] = useState(true);          │
│    const router = useRouter();                            │
│                                                           │
│    // Mode is passed to Hero (used for exit animations)   │
│    const mode = "dream";                                  │
│                                                           │
│    // Transition Logic: Redirect to Agent                 │
│    const activateChat = (initialPrompt?: string) => {     │
│      router.push("/agent");                               │
│    };                                                     │
│                                                           │
│    return (                                               │
│      <main className="relative min-h-screen w-full        │
│  overflow-x-hidden bg-black text-white scroll-smooth">    │
│        {loading && <GenesisPreloader onComplete={() =>    │
│  setLoading(false)} />}                                   │
│                                                           │
│        {/* 1. Hero Module (Dream State) */}               │
│        <HeroSection mode={mode}                           │
│  onActivate={activateChat} />                             │
│                                                           │
│        {/* 2. Vault Module (Assets) */}                   │
│        <VaultSection />                                   │
│                                                           │
│        {/* 3. Consortium Module (Logic) */}               │
│        <ConsortiumSection />                              │
│                                                           │
│      </main>                                              │
│    );                                                     │
│  }                                                        │
│                                                           │
│  === CONSORTIUM PAGE (src/app/consorcio/page.tsx) ===     │
│  "use client";                                            │
│                                                           │
│  import { useRef, useLayoutEffect } from "react";         │
│  import gsap from "gsap";                                 │
│  import { ScrollTrigger } from "gsap/ScrollTrigger";      │
│  import Link from "next/link";                            │
│  import { ArrowUpRight, Shield, Truck, Home, Car, Zap,    │
│  ChevronDown, Briefcase } from "lucide-react";            │
│  import { ChatFAB } from "@/components/agent/ChatFAB";    │
│                                                           │
│  gsap.registerPlugin(ScrollTrigger);                      │
│                                                           │
│  export default function ConsortiumPage() {               │
│    const containerRef = useRef<HTMLDivElement>(null);     │
│                                                           │
│    useLayoutEffect(() => {                                │
│      const ctx = gsap.context(() => {                     │
│        // Hero Title Reveal                               │
│        gsap.from(".hero-title", {                         │
│          y: 100,                                          │
│          opacity: 0,                                      │
│          duration: 1.5,                                   │
│          ease: "power4.out",                              │
│          delay: 0.2                                       │
│        });                                                │
│                                                           │
│        // Z-Pattern Entrances                             │
│        const sections =                                   │
│  gsap.utils.toArray<HTMLElement>(".z-section");           │
│        sections.forEach((section) => {                    │
│          const image =                                    │
│  section.querySelector(".z-image");                       │
│          const content =                                  │
│  section.querySelector(".z-content");                     │
│                                                           │
│          gsap.from(image, {                               │
│              scale: 0.9,                                  │
│              opacity: 0,                                  │
│              duration: 1.5,                               │
│              ease: "power3.out",                          │
│              scrollTrigger: {                             │
│                  trigger: section,                        │
│                  start: "top center+=20%",                │
│                  toggleActions: "play none none reverse"  │
│              }                                            │
│          });                                              │
│                                                           │
│          gsap.from(content, {                             │
│              y: 50,                                       │
│              opacity: 0,                                  │
│              duration: 1.2,                               │
│              ease: "power3.out",                          │
│              delay: 0.3,                                  │
│              scrollTrigger: {                             │
│                  trigger: section,                        │
│                  start: "top center+=20%",                │
│                  toggleActions: "play none none reverse"  │
│              }                                            │
│          });                                              │
│        });                                                │
│                                                           │
│      }, containerRef);                                    │
│      return () => ctx.revert();                           │
│    }, []);                                                │
│                                                           │
│    return (                                               │
│      <main ref={containerRef} className="bg-black         │
│  text-white min-h-screen">                                │
│                                                           │
│        {/* 1. HERO SECTION (Full Screen) */}              │
│        <section className="relative h-screen w-full       │
│  overflow-hidden flex items-end pb-24 md:px-12 mb-32">    │
│          {/* Background Video */}                         │
│          <div className="absolute inset-0 z-0">           │
│              <video                                       │
│                  autoPlay                                 │
│                  loop                                     │
│                  muted                                    │
│                  playsInline                              │
│                  className="w-full h-full object-cover    │
│  opacity-60"                                              │
│              >                                            │
│                  <source                                  │
│  src="/assets/generated/consorcio_hero.mp4"               │
│  type="video/mp4" />                                      │
│              </video>                                     │
│              <div className="absolute inset-0             │
│  bg-gradient-to-t from-black via-black/40                 │
│  to-transparent" />                                       │
│          </div>                                           │
│                                                           │
│          {/* Hero Content */}                             │
│          <div className="relative z-10 w-full             │
│  max-w-screen-2xl mx-auto border-t border-white/20 pt-8   │
│  flex flex-col md:flex-row justify-between items-end      │
│  gap-8">                                                  │
│              <div className="hero-title">                 │
│                  <span className="block text-xs           │
│  font-bold uppercase tracking-[0.2em] mb-4                │
│  text-[#bfb38f]">Consórcio Rodobens</span>                │
│                  <h1 className="text-[12vw]               │
│  md:text-[7vw] leading-[0.85] font-light                  │
│  tracking-tighter uppercase">                             │
│                      Seu Novo<br/>Patrimônio              │
│                  </h1>                                    │
│              </div>                                       │
│              <div className="hidden md:block              │
│  animate-bounce">                                         │
│                  <ChevronDown className="w-8 h-8          │
│  text-white/50" />                                        │
│              </div>                                       │
│          </div>                                           │
│        </section>                                         │
│                                                           │
│        {/*                                                │
│  ============================================== */}       │
│        {/* PONTUAL INTERSTITIAL (Hero Product Highlight)  │
│  */}                                                      │
│        {/*                                                │
│  ============================================== */}       │
│        <section className="relative py-40 md:py-64 px-6   │
│  md:px-12 text-center bg-gradient-to-b from-black         │
│  via-[#050505] to-black">                                 │
│            <div className="max-w-4xl mx-auto">            │
│                <div className="flex items-center          │
│  justify-center gap-3 mb-8">                              │
│                    <Zap className="w-6 h-6                │
│  text-[#bfb38f]" />                                       │
│                    <span className="text-xs font-bold     │
│  uppercase tracking-[0.3em] text-[#bfb38f]">Protocolo     │
│  Pontual</span>                                           │
│                </div>                                     │
│                <h2 className="text-5xl md:text-8xl        │
│  font-light uppercase leading-none tracking-tighter       │
│  mb-8">                                                   │
│                    Seu Carro<br/>em <span                 │
│  className="text-[#bfb38f]">6 Meses</span>                │
│                </h2>                                      │
│                <p className="text-gray-400 text-lg        │
│  md:text-xl font-light leading-relaxed max-w-2xl mx-auto  │
│  mb-12">                                                  │
│                    Esqueça o sorteio. Com o Pontual       │
│  Rodobens, você antecipa as parcelas a partir da 6ª       │
│  assembleia e retira seu 0km. Planejamento, não sorte.    │
│                </p>                                       │
│                <Link href="/consorcio/pontual">           │
│                    <button className="px-12 py-5          │
│  bg-[#bfb38f] text-black text-sm font-bold uppercase      │
│  tracking-widest hover:bg-white transition-colors">       │
│                        Simular Pontual                    │
│                    </button>                              │
│                </Link>                                    │
│            </div>                                         │
│        </section>                                         │
│                                                           │
│        {/* CONTAINER FOR Z-PATTERN BLOCKS */}             │
│        <div className="max-w-screen-2xl mx-auto px-6      │
│  md:px-12 space-y-64 pb-64">                              │
│                                                           │
│          {/* 2. AUTO SECTION (Image RIGHT -> Text LEFT)   │
│  */}                                                      │
│          <section className="z-section flex flex-col      │
│  md:flex-row items-center gap-12 md:gap-24">              │
│              {/* Content (Left) */}                       │
│              <div className="z-content w-full md:w-1/2    │
│  flex flex-col items-start text-left">                    │
│                  <div className="flex items-center gap-3  │
│  mb-6">                                                   │
│                      <Car className="w-6 h-6              │
│  text-[#bfb38f]" />                                       │
│                      <span className="text-xs font-bold   │
│  uppercase tracking-widest text-white/70">Rodobens        │
│  Auto</span>                                              │
│                  </div>                                   │
│                  <h2 className="text-5xl md:text-7xl      │
│  font-light uppercase leading-none mb-6">Seu              │
│  Carro<br/>0km</h2>                                       │
│                  <div className="w-24 h-px bg-[#bfb38f]   │
│  mb-8" />                                                 │
│                  <p className="text-gray-400 text-lg      │
│  font-light leading-relaxed mb-6 max-w-xl">               │
│                      O <strong>Consórcio Pontual          │
│  Rodobens</strong> é diferente de tudo o que você já      │
│  conhece. A partir da <strong>6ª assembleia</strong>,     │
│  você pode antecipar parcelas e retirar seu carro zero.   │
│                  </p>                                     │
│                  <ul className="text-gray-500 text-sm     │
│  font-light space-y-2 mb-8 uppercase tracking-wide">      │
│                      <li className="flex items-center     │
│  gap-2"><div className="w-1.5 h-1.5 bg-[#bfb38f]          │
│  rounded-full" /> Menor taxa do mercado (Sem Juros)</li>  │
│                      <li className="flex items-center     │
│  gap-2"><div className="w-1.5 h-1.5 bg-[#bfb38f]          │
│  rounded-full" /> 2 em 1: Crédito com preço de            │
│  Consórcio</li>                                           │
│                      <li className="flex items-center     │
│  gap-2"><div className="w-1.5 h-1.5 bg-[#bfb38f]          │
│  rounded-full" /> Liberdade total de escolha</li>         │
│                  </ul>                                    │
│                  <div className="flex gap-4">             │
│                      <Link href="/consorcio/auto">        │
│                          <button className="px-8 py-3     │
│  bg-[#bfb38f] text-black text-xs font-bold uppercase      │
│  tracking-widest hover:bg-white transition-colors">       │
│                              Simular Agora                │
│                          </button>                        │
│                      </Link>                              │
│                      <div className="flex items-center    │
│  gap-2 text-xs font-bold uppercase tracking-widest        │
│  text-[#bfb38f]">                                         │
│                          <Shield className="w-4 h-4" />   │
│                          <span>Em até 6 Meses</span>      │
│                      </div>                               │
│                  </div>                                   │
│              </div>                                       │
│                                                           │
│               {/* Image (Right) */}                       │
│               <div className="z-image w-full md:w-1/2     │
│  aspect-[4/5] md:aspect-square relative overflow-hidden   │
│  rounded-sm border border-white/10">                      │
│                  <img                                     │
│                      src="/assets/generated/auto_garage.  │
│  png"                                                     │
│                      alt="Garagem Auto"                   │
│                      className="w-full h-full             │
│  object-cover opacity-90 transition-transform             │
│  duration-1000 hover:scale-105"                           │
│                  />                                       │
│              </div>                                       │
│          </section>                                       │
│                                                           │
│                                                           │
│          {/* 3. REAL ESTATE SECTION (Image LEFT -> Text   │
│  RIGHT) */}                                               │
│          <section className="z-section flex               │
│  flex-col-reverse md:flex-row items-center gap-12         │
│  md:gap-24">                                              │
│              {/* Image (Left) */}                         │
│              <div className="z-image w-full md:w-1/2      │
│  aspect-[4/5] md:aspect-square relative overflow-hidden   │
│  rounded-sm border border-white/10">                      │
│                  <img                                     │
│                      src="/assets/generated/real_estate_  │
│  villa.png"                                               │
│                      alt="Casa Moderna"                   │
│                      className="w-full h-full             │
│  object-cover opacity-90 transition-transform             │
│  duration-1000 hover:scale-105"                           │
│                  />                                       │
│              </div>                                       │
│                                                           │
│              {/* Content (Right) */}                      │
│              <div className="z-content w-full md:w-1/2    │
│  flex flex-col items-start md:items-end text-left         │
│  md:text-right">                                          │
│                  <div className="flex items-center gap-3  │
│  mb-6">                                                   │
│                      <span className="text-xs font-bold   │
│  uppercase tracking-widest text-white/70">Rodobens        │
│  Imóveis</span>                                           │
│                      <Home className="w-6 h-6             │
│  text-[#bfb38f]" />                                       │
│                  </div>                                   │
│                  <h2 className="text-5xl md:text-7xl      │
│  font-light uppercase leading-none mb-6">Seu              │
│  Novo<br/>Imóvel</h2>                                     │
│                  <div className="w-24 h-px bg-[#bfb38f]   │
│  mb-8" />                                                 │
│                  <p className="text-gray-400 text-lg      │
│  font-light leading-relaxed mb-8 max-w-md ml-auto">       │
│                      A forma inteligente de ampliar seu   │
│  patrimônio. Créditos de até <strong>R$ 1                 │
│  Milhão</strong> com prazos flexíveis de até 216 meses.   │
│  Compra, construção ou reforma sem juros abusivos.        │
│                  </p>                                     │
│                  <div className="flex gap-4 justify-end   │
│  w-full">                                                 │
│                       <div className="hidden md:flex      │
│  items-center gap-2 text-xs font-bold uppercase           │
│  tracking-widest text-[#bfb38f] mr-4">                    │
│                          <ArrowUpRight className="w-4     │
│  h-4" />                                                  │
│                          <span>Até 216 Meses</span>       │
│                      </div>                               │
│                      <Link href="/consorcio/imovel">      │
│                          <button className="px-8 py-3     │
│  border border-white text-white text-xs font-bold         │
│  uppercase tracking-widest hover:bg-white                 │
│  hover:text-black transition-colors">                     │
│                              Simular Imóvel               │
│                          </button>                        │
│                      </Link>                              │
│                  </div>                                   │
│              </div>                                       │
│          </section>                                       │
│                                                           │
│                                                           │
│          {/* 4. HEAVY METAL (Image RIGHT -> Text LEFT)    │
│  */}                                                      │
│          <section className="z-section flex flex-col      │
│  md:flex-row items-center gap-12 md:gap-24">              │
│              {/* Content (Left) */}                       │
│              <div className="z-content w-full md:w-1/2    │
│  flex flex-col items-start text-left">                    │
│                  <div className="flex items-center gap-3  │
│  mb-6">                                                   │
│                      <Truck className="w-6 h-6            │
│  text-[#bfb38f]" />                                       │
│                      <span className="text-xs font-bold   │
│  uppercase tracking-widest text-white/70">Rodobens        │
│  Pesados</span>                                           │
│                  </div>                                   │
│                  <h2 className="text-5xl md:text-7xl      │
│  font-light uppercase leading-none mb-6">Frota            │
│  &<br/>Agro</h2>                                          │
│                  <div className="w-24 h-px bg-[#bfb38f]   │
│  mb-8" />                                                 │
│                  <p className="text-gray-400 text-lg      │
│  font-light leading-relaxed mb-8 max-w-md">               │
│                      Para quem transporta o Brasil.       │
│  Caminhões, máquinas e implementos com planos que         │
│  respeitam o fluxo de caixa do seu negócio.               │
│                  </p>                                     │
│                  <Link href="/consorcio/pesados">         │
│                      <button className="px-8 py-3         │
│  border-2 border-[#bfb38f] text-[#bfb38f] text-xs         │
│  font-bold uppercase tracking-widest hover:bg-[#bfb38f]   │
│  hover:text-black transition-colors">                     │
│                          Cotar Pesados                    │
│                      </button>                            │
│                  </Link>                                  │
│              </div>                                       │
│                                                           │
│               {/* Image (Right) */}                       │
│               <div className="z-image w-full md:w-1/2     │
│  aspect-[16/9] md:aspect-video relative overflow-hidden   │
│  rounded-sm border border-white/10">                      │
│                  <img                                     │
│                      src="/assets/generated/truck_indust  │
│  rial.png"                                                │
│                      alt="Caminhão Scania"                │
│                      className="w-full h-full             │
│  object-cover opacity-80 transition-transform             │
│  duration-1000 hover:scale-105"                           │
│                  />                                       │
│              </div>                                       │
│          </section>                                       │
│                                                           │
│          {/* 5. MOTOS & SERVICES (Image LEFT -> Text      │
│  RIGHT) */}                                               │
│          <section className="z-section flex               │
│  flex-col-reverse md:flex-row items-center gap-12         │
│  md:gap-24">                                              │
│              {/* Image (Left) */}                         │
│              <div className="z-image w-full md:w-1/2      │
│  aspect-[16/9] md:aspect-video relative overflow-hidden   │
│  rounded-sm border border-white/10">                      │
│                  <img                                     │
│                      src="/assets/generated/lifestyle_mo  │
│  to_boat.png"                                             │
│                      alt="Moto e Barco"                   │
│                      className="w-full h-full             │
│  object-cover opacity-90 transition-transform             │
│  duration-1000 hover:scale-105"                           │
│                  />                                       │
│              </div>                                       │
│                                                           │
│              {/* Content (Right) */}                      │
│              <div className="z-content w-full md:w-1/2    │
│  flex flex-col items-start md:items-end text-left         │
│  md:text-right">                                          │
│                  <div className="flex items-center gap-3  │
│  mb-6">                                                   │
│                      <span className="text-xs font-bold   │
│  uppercase tracking-widest text-white/70">Rodobens        │
│  Outros</span>                                            │
│                      <Zap className="w-6 h-6              │
│  text-[#bfb38f]" />                                       │
│                  </div>                                   │
│                  <h2 className="text-5xl md:text-7xl      │
│  font-light uppercase leading-none mb-6">Motos            │
│  &<br/>Náutica</h2>                                       │
│                  <div className="w-24 h-px bg-[#bfb38f]   │
│  mb-8" />                                                 │
│                  <p className="text-gray-400 text-lg      │
│  font-light leading-relaxed mb-8 max-w-md ml-auto">       │
│                      Liberdade para conquistar motos de   │
│  alta cilindrada e embarcações. Cartas de crédito         │
│  versáteis para serviços estéticos, cirurgias e muito     │
│  mais.                                                    │
│                  </p>                                     │
│                  <div className="flex gap-4 justify-end   │
│  w-full">                                                 │
│                      <Link href="/consorcio/motos">       │
│                          <button className="px-8 py-3     │
│  border border-white text-white text-xs font-bold         │
│  uppercase tracking-widest hover:bg-white                 │
│  hover:text-black transition-colors">                     │
│                              Simular Motos & Náutica      │
│                          </button>                        │
│                      </Link>                              │
│                  </div>                                   │
│              </div>                                       │
│          </section>                                       │
│                                                           │
│                                                           │
│          {/*                                              │
│  ============================================== */}       │
│          {/* SERVIÇOS SECTION (Kinetic Typography Focus)  │
│  */}                                                      │
│          {/*                                              │
│  ============================================== */}       │
│          <section className="z-section py-32              │
│  text-center">                                            │
│              <div className="max-w-3xl mx-auto">          │
│                  <div className="flex items-center        │
│  justify-center gap-3 mb-8">                              │
│                      <Briefcase className="w-6 h-6        │
│  text-[#bfb38f]" />                                       │
│                      <span className="text-xs font-bold   │
│  uppercase tracking-widest text-white/70">Consórcio de    │
│  Serviços</span>                                          │
│                  </div>                                   │
│                  <h2 className="text-5xl md:text-7xl      │
│  font-light uppercase leading-none tracking-tighter       │
│  mb-8">                                                   │
│                      Crédito para<br/>Realizar            │
│                  </h2>                                    │
│                  <div className="w-24 h-px bg-[#bfb38f]   │
│  mx-auto mb-12" />                                        │
│                  <p className="text-gray-400 text-lg      │
│  font-light leading-relaxed mb-12">                       │
│                      Utilize sua carta de crédito para o  │
│  que você desejar: reformas, cirurgias estéticas,         │
│  viagens, educação. Liberdade financeira com parcelas     │
│  que cabem no seu bolso.                                  │
│                  </p>                                     │
│                  <Link href="/consorcio/servicos">        │
│                      <button className="px-10 py-4        │
│  border border-white/30 text-white text-xs font-bold      │
│  uppercase tracking-widest hover:bg-white                 │
│  hover:text-black transition-colors">                     │
│                          Explorar Serviços                │
│                      </button>                            │
│                  </Link>                                  │
│              </div>                                       │
│          </section>                                       │
│                                                           │
│        </div>                                             │
│                                                           │
│        {/*                                                │
│  ============================================== */}       │
│        {/* SEGUROS FOOTER (Peak-End Rule: Single,         │
│  Powerful CTA) */}                                        │
│        {/*                                                │
│  ============================================== */}       │
│        <section className="relative py-48 md:py-64 px-6   │
│  md:px-12 text-center bg-[#050505] border-t               │
│  border-white/5">                                         │
│            <div className="max-w-3xl mx-auto">            │
│                <Shield className="w-12 h-12               │
│  text-[#bfb38f] mx-auto mb-8" />                          │
│                <h2 className="text-5xl md:text-7xl        │
│  font-light uppercase leading-none tracking-tighter       │
│  mb-8">                                                   │
│                    Seguros &<br/>Proteção                 │
│                </h2>                                      │
│                <div className="w-24 h-px bg-[#bfb38f]     │
│  mx-auto mb-12" />                                        │
│                <p className="text-gray-400 text-lg        │
│  md:text-xl font-light leading-relaxed max-w-xl mx-auto   │
│  mb-12">                                                  │
│                    Blindagem patrimonial completa.        │
│  Proteja sua família, seu veículo e seu imóvel com as     │
│  soluções sob medida da Rodobens.                         │
│                </p>                                       │
│                <Link href="/consorcio/protecao">          │
│                    <button className="px-12 py-5          │
│  bg-white text-black text-sm font-bold uppercase          │
│  tracking-widest hover:bg-[#bfb38f] transition-colors">   │
│                        Conhecer Proteções                 │
│                    </button>                              │
│                </Link>                                    │
│            </div>                                         │
│        </section>                                         │
│                                                           │
│        {/* Floating Chat Button (Add-On) */}              │
│        <ChatFAB />                                        │
│                                                           │
│      </main>                                              │
│    );                                                     │
│  }                                                        │
│                                                           │
│                                                           │
│          CRITERIA:                                        │
│          1. Design (40%): Aesthetics, Typography          │
│  (Sovereign/Premium feel), Use of Whitespace/Dark space.  │
│          2. Creativity (30%): Originality of layout (Z-H  │
│  pattern), Animation logic (GSAP), Masks.                 │
│          3. Content (20%): Copywriting quality            │
│  (Portuguese), tone of voice.                             │
│          4. Tech Stack (10%): Code cleanliness,           │
│  Component modularity.                                    │
│                                                           │
│          MISSION:                                         │
│          Compare the Main Page (Hero/Vault/Consortium     │
│  Modules) against the Consortium Page (Deep Dive).        │
│          Calculate a score (0-10) for each criteria for   │
│  BOTH pages.                                              │
│                                                           │
│          OUTPUT FORMAT:                                   │
│          Return a Markdown Table comparing the two.       │
│          Then, write a "Jury Verdict" paragraph           │
│  summarizing which page feels more 'Sovereign' and why.   │
│                                                           │
│  ID: 9c9b0800-363f-4555-9ebb-fb2251487316                 │
│                                                           │
│                                                           │
└───────────────────────────────────────────────────────────┘

┌──────────────────── 🤖 Agent Started ─────────────────────┐
│                                                           │
│  Agent: Awwwards Jury Member                              │
│                                                           │
│  Task:                                                    │
│          Analyze the following Source Code for two        │
│  pages: Main Page vs Consortium Page.                     │
│                                                           │
│          CODE CONTEXT:                                    │
│          === MAIN PAGE (src/app/page.tsx) ===             │
│  "use client";                                            │
│                                                           │
│  import { useState } from "react";                        │
│  import { useRouter } from "next/navigation";             │
│  import { HeroSection } from                              │
│  "@/components/mad-lab/HeroSection";                      │
│  import { VaultSection } from                             │
│  "@/components/mad-lab/VaultSection";                     │
│  import { ConsortiumSection } from                        │
│  "@/components/mad-lab/ConsortiumSection";                │
│  import { GenesisPreloader } from                         │
│  "@/components/GenesisPreloader";                         │
│                                                           │
│  export default function Home() {                         │
│    const [loading, setLoading] = useState(true);          │
│    const router = useRouter();                            │
│                                                           │
│    // Mode is passed to Hero (used for exit animations)   │
│    const mode = "dream";                                  │
│                                                           │
│    // Transition Logic: Redirect to Agent                 │
│    const activateChat = (initialPrompt?: string) => {     │
│      router.push("/agent");                               │
│    };                                                     │
│                                                           │
│    return (                                               │
│      <main className="relative min-h-screen w-full        │
│  overflow-x-hidden bg-black text-white scroll-smooth">    │
│        {loading && <GenesisPreloader onComplete={() =>    │
│  setLoading(false)} />}                                   │
│                                                           │
│        {/* 1. Hero Module (Dream State) */}               │
│        <HeroSection mode={mode}                           │
│  onActivate={activateChat} />                             │
│                                                           │
│        {/* 2. Vault Module (Assets) */}                   │
│        <VaultSection />                                   │
│                                                           │
│        {/* 3. Consortium Module (Logic) */}               │
│        <ConsortiumSection />                              │
│                                                           │
│      </main>                                              │
│    );                                                     │
│  }                                                        │
│                                                           │
│  === CONSORTIUM PAGE (src/app/consorcio/page.tsx) ===     │
│  "use client";                                            │
│                                                           │
│  import { useRef, useLayoutEffect } from "react";         │
│  import gsap from "gsap";                                 │
│  import { ScrollTrigger } from "gsap/ScrollTrigger";      │
│  import Link from "next/link";                            │
│  import { ArrowUpRight, Shield, Truck, Home, Car, Zap,    │
│  ChevronDown, Briefcase } from "lucide-react";            │
│  import { ChatFAB } from "@/components/agent/ChatFAB";    │
│                                                           │
│  gsap.registerPlugin(ScrollTrigger);                      │
│                                                           │
│  export default function ConsortiumPage() {               │
│    const containerRef = useRef<HTMLDivElement>(null);     │
│                                                           │
│    useLayoutEffect(() => {                                │
│      const ctx = gsap.context(() => {                     │
│        // Hero Title Reveal                               │
│        gsap.from(".hero-title", {                         │
│          y: 100,                                          │
│          opacity: 0,                                      │
│          duration: 1.5,                                   │
│          ease: "power4.out",                              │
│          delay: 0.2                                       │
│        });                                                │
│                                                           │
│        // Z-Pattern Entrances                             │
│        const sections =                                   │
│  gsap.utils.toArray<HTMLElement>(".z-section");           │
│        sections.forEach((section) => {                    │
│          const image =                                    │
│  section.querySelector(".z-image");                       │
│          const content =                                  │
│  section.querySelector(".z-content");                     │
│                                                           │
│          gsap.from(image, {                               │
│              scale: 0.9,                                  │
│              opacity: 0,                                  │
│              duration: 1.5,                               │
│              ease: "power3.out",                          │
│              scrollTrigger: {                             │
│                  trigger: section,                        │
│                  start: "top center+=20%",                │
│                  toggleActions: "play none none reverse"  │
│              }                                            │
│          });                                              │
│                                                           │
│          gsap.from(content, {                             │
│              y: 50,                                       │
│              opacity: 0,                                  │
│              duration: 1.2,                               │
│              ease: "power3.out",                          │
│              delay: 0.3,                                  │
│              scrollTrigger: {                             │
│                  trigger: section,                        │
│                  start: "top center+=20%",                │
│                  toggleActions: "play none none reverse"  │
│              }                                            │
│          });                                              │
│        });                                                │
│                                                           │
│      }, containerRef);                                    │
│      return () => ctx.revert();                           │
│    }, []);                                                │
│                                                           │
│    return (                                               │
│      <main ref={containerRef} className="bg-black         │
│  text-white min-h-screen">                                │
│                                                           │
│        {/* 1. HERO SECTION (Full Screen) */}              │
│        <section className="relative h-screen w-full       │
│  overflow-hidden flex items-end pb-24 md:px-12 mb-32">    │
│          {/* Background Video */}                         │
│          <div className="absolute inset-0 z-0">           │
│              <video                                       │
│                  autoPlay                                 │
│                  loop                                     │
│                  muted                                    │
│                  playsInline                              │
│                  className="w-full h-full object-cover    │
│  opacity-60"                                              │
│              >                                            │
│                  <source                                  │
│  src="/assets/generated/consorcio_hero.mp4"               │
│  type="video/mp4" />                                      │
│              </video>                                     │
│              <div className="absolute inset-0             │
│  bg-gradient-to-t from-black via-black/40                 │
│  to-transparent" />                                       │
│          </div>                                           │
│                                                           │
│          {/* Hero Content */}                             │
│          <div className="relative z-10 w-full             │
│  max-w-screen-2xl mx-auto border-t border-white/20 pt-8   │
│  flex flex-col md:flex-row justify-between items-end      │
│  gap-8">                                                  │
│              <div className="hero-title">                 │
│                  <span className="block text-xs           │
│  font-bold uppercase tracking-[0.2em] mb-4                │
│  text-[#bfb38f]">Consórcio Rodobens</span>                │
│                  <h1 className="text-[12vw]               │
│  md:text-[7vw] leading-[0.85] font-light                  │
│  tracking-tighter uppercase">                             │
│                      Seu Novo<br/>Patrimônio              │
│                  </h1>                                    │
│              </div>                                       │
│              <div className="hidden md:block              │
│  animate-bounce">                                         │
│                  <ChevronDown className="w-8 h-8          │
│  text-white/50" />                                        │
│              </div>                                       │
│          </div>                                           │
│        </section>                                         │
│                                                           │
│        {/*                                                │
│  ============================================== */}       │
│        {/* PONTUAL INTERSTITIAL (Hero Product Highlight)  │
│  */}                                                      │
│        {/*                                                │
│  ============================================== */}       │
│        <section className="relative py-40 md:py-64 px-6   │
│  md:px-12 text-center bg-gradient-to-b from-black         │
│  via-[#050505] to-black">                                 │
│            <div className="max-w-4xl mx-auto">            │
│                <div className="flex items-center          │
│  justify-center gap-3 mb-8">                              │
│                    <Zap className="w-6 h-6                │
│  text-[#bfb38f]" />                                       │
│                    <span className="text-xs font-bold     │
│  uppercase tracking-[0.3em] text-[#bfb38f]">Protocolo     │
│  Pontual</span>                                           │
│                </div>                                     │
│                <h2 className="text-5xl md:text-8xl        │
│  font-light uppercase leading-none tracking-tighter       │
│  mb-8">                                                   │
│                    Seu Carro<br/>em <span                 │
│  className="text-[#bfb38f]">6 Meses</span>                │
│                </h2>                                      │
│                <p className="text-gray-400 text-lg        │
│  md:text-xl font-light leading-relaxed max-w-2xl mx-auto  │
│  mb-12">                                                  │
│                    Esqueça o sorteio. Com o Pontual       │
│  Rodobens, você antecipa as parcelas a partir da 6ª       │
│  assembleia e retira seu 0km. Planejamento, não sorte.    │
│                </p>                                       │
│                <Link href="/consorcio/pontual">           │
│                    <button className="px-12 py-5          │
│  bg-[#bfb38f] text-black text-sm font-bold uppercase      │
│  tracking-widest hover:bg-white transition-colors">       │
│                        Simular Pontual                    │
│                    </button>                              │
│                </Link>                                    │
│            </div>                                         │
│        </section>                                         │
│                                                           │
│        {/* CONTAINER FOR Z-PATTERN BLOCKS */}             │
│        <div className="max-w-screen-2xl mx-auto px-6      │
│  md:px-12 space-y-64 pb-64">                              │
│                                                           │
│          {/* 2. AUTO SECTION (Image RIGHT -> Text LEFT)   │
│  */}                                                      │
│          <section className="z-section flex flex-col      │
│  md:flex-row items-center gap-12 md:gap-24">              │
│              {/* Content (Left) */}                       │
│              <div className="z-content w-full md:w-1/2    │
│  flex flex-col items-start text-left">                    │
│                  <div className="flex items-center gap-3  │
│  mb-6">                                                   │
│                      <Car className="w-6 h-6              │
│  text-[#bfb38f]" />                                       │
│                      <span className="text-xs font-bold   │
│  uppercase tracking-widest text-white/70">Rodobens        │
│  Auto</span>                                              │
│                  </div>                                   │
│                  <h2 className="text-5xl md:text-7xl      │
│  font-light uppercase leading-none mb-6">Seu              │
│  Carro<br/>0km</h2>                                       │
│                  <div className="w-24 h-px bg-[#bfb38f]   │
│  mb-8" />                                                 │
│                  <p className="text-gray-400 text-lg      │
│  font-light leading-relaxed mb-6 max-w-xl">               │
│                      O <strong>Consórcio Pontual          │
│  Rodobens</strong> é diferente de tudo o que você já      │
│  conhece. A partir da <strong>6ª assembleia</strong>,     │
│  você pode antecipar parcelas e retirar seu carro zero.   │
│                  </p>                                     │
│                  <ul className="text-gray-500 text-sm     │
│  font-light space-y-2 mb-8 uppercase tracking-wide">      │
│                      <li className="flex items-center     │
│  gap-2"><div className="w-1.5 h-1.5 bg-[#bfb38f]          │
│  rounded-full" /> Menor taxa do mercado (Sem Juros)</li>  │
│                      <li className="flex items-center     │
│  gap-2"><div className="w-1.5 h-1.5 bg-[#bfb38f]          │
│  rounded-full" /> 2 em 1: Crédito com preço de            │
│  Consórcio</li>                                           │
│                      <li className="flex items-center     │
│  gap-2"><div className="w-1.5 h-1.5 bg-[#bfb38f]          │
│  rounded-full" /> Liberdade total de escolha</li>         │
│                  </ul>                                    │
│                  <div className="flex gap-4">             │
│                      <Link href="/consorcio/auto">        │
│                          <button className="px-8 py-3     │
│  bg-[#bfb38f] text-black text-xs font-bold uppercase      │
│  tracking-widest hover:bg-white transition-colors">       │
│                              Simular Agora                │
│                          </button>                        │
│                      </Link>                              │
│                      <div className="flex items-center    │
│  gap-2 text-xs font-bold uppercase tracking-widest        │
│  text-[#bfb38f]">                                         │
│                          <Shield className="w-4 h-4" />   │
│                          <span>Em até 6 Meses</span>      │
│                      </div>                               │
│                  </div>                                   │
│              </div>                                       │
│                                                           │
│               {/* Image (Right) */}                       │
│               <div className="z-image w-full md:w-1/2     │
│  aspect-[4/5] md:aspect-square relative overflow-hidden   │
│  rounded-sm border border-white/10">                      │
│                  <img                                     │
│                      src="/assets/generated/auto_garage.  │
│  png"                                                     │
│                      alt="Garagem Auto"                   │
│                      className="w-full h-full             │
│  object-cover opacity-90 transition-transform             │
│  duration-1000 hover:scale-105"                           │
│                  />                                       │
│              </div>                                       │
│          </section>                                       │
│                                                           │
│                                                           │
│          {/* 3. REAL ESTATE SECTION (Image LEFT -> Text   │
│  RIGHT) */}                                               │
│          <section className="z-section flex               │
│  flex-col-reverse md:flex-row items-center gap-12         │
│  md:gap-24">                                              │
│              {/* Image (Left) */}                         │
│              <div className="z-image w-full md:w-1/2      │
│  aspect-[4/5] md:aspect-square relative overflow-hidden   │
│  rounded-sm border border-white/10">                      │
│                  <img                                     │
│                      src="/assets/generated/real_estate_  │
│  villa.png"                                               │
│                      alt="Casa Moderna"                   │
│                      className="w-full h-full             │
│  object-cover opacity-90 transition-transform             │
│  duration-1000 hover:scale-105"                           │
│                  />                                       │
│              </div>                                       │
│                                                           │
│              {/* Content (Right) */}                      │
│              <div className="z-content w-full md:w-1/2    │
│  flex flex-col items-start md:items-end text-left         │
│  md:text-right">                                          │
│                  <div className="flex items-center gap-3  │
│  mb-6">                                                   │
│                      <span className="text-xs font-bold   │
│  uppercase tracking-widest text-white/70">Rodobens        │
│  Imóveis</span>                                           │
│                      <Home className="w-6 h-6             │
│  text-[#bfb38f]" />                                       │
│                  </div>                                   │
│                  <h2 className="text-5xl md:text-7xl      │
│  font-light uppercase leading-none mb-6">Seu              │
│  Novo<br/>Imóvel</h2>                                     │
│                  <div className="w-24 h-px bg-[#bfb38f]   │
│  mb-8" />                                                 │
│                  <p className="text-gray-400 text-lg      │
│  font-light leading-relaxed mb-8 max-w-md ml-auto">       │
│                      A forma inteligente de ampliar seu   │
│  patrimônio. Créditos de até <strong>R$ 1                 │
│  Milhão</strong> com prazos flexíveis de até 216 meses.   │
│  Compra, construção ou reforma sem juros abusivos.        │
│                  </p>                                     │
│                  <div className="flex gap-4 justify-end   │
│  w-full">                                                 │
│                       <div className="hidden md:flex      │
│  items-center gap-2 text-xs font-bold uppercase           │
│  tracking-widest text-[#bfb38f] mr-4">                    │
│                          <ArrowUpRight className="w-4     │
│  h-4" />                                                  │
│                          <span>Até 216 Meses</span>       │
│                      </div>                               │
│                      <Link href="/consorcio/imovel">      │
│                          <button className="px-8 py-3     │
│  border border-white text-white text-xs font-bold         │
│  uppercase tracking-widest hover:bg-white                 │
│  hover:text-black transition-colors">                     │
│                              Simular Imóvel               │
│                          </button>                        │
│                      </Link>                              │
│                  </div>                                   │
│              </div>                                       │
│          </section>                                       │
│                                                           │
│                                                           │
│          {/* 4. HEAVY METAL (Image RIGHT -> Text LEFT)    │
│  */}                                                      │
│          <section className="z-section flex flex-col      │
│  md:flex-row items-center gap-12 md:gap-24">              │
│              {/* Content (Left) */}                       │
│              <div className="z-content w-full md:w-1/2    │
│  flex flex-col items-start text-left">                    │
│                  <div className="flex items-center gap-3  │
│  mb-6">                                                   │
│                      <Truck className="w-6 h-6            │
│  text-[#bfb38f]" />                                       │
│                      <span className="text-xs font-bold   │
│  uppercase tracking-widest text-white/70">Rodobens        │
│  Pesados</span>                                           │
│                  </div>                                   │
│                  <h2 className="text-5xl md:text-7xl      │
│  font-light uppercase leading-none mb-6">Frota            │
│  &<br/>Agro</h2>                                          │
│                  <div className="w-24 h-px bg-[#bfb38f]   │
│  mb-8" />                                                 │
│                  <p className="text-gray-400 text-lg      │
│  font-light leading-relaxed mb-8 max-w-md">               │
│                      Para quem transporta o Brasil.       │
│  Caminhões, máquinas e implementos com planos que         │
│  respeitam o fluxo de caixa do seu negócio.               │
│                  </p>                                     │
│                  <Link href="/consorcio/pesados">         │
│                      <button className="px-8 py-3         │
│  border-2 border-[#bfb38f] text-[#bfb38f] text-xs         │
│  font-bold uppercase tracking-widest hover:bg-[#bfb38f]   │
│  hover:text-black transition-colors">                     │
│                          Cotar Pesados                    │
│                      </button>                            │
│                  </Link>                                  │
│              </div>                                       │
│                                                           │
│               {/* Image (Right) */}                       │
│               <div className="z-image w-full md:w-1/2     │
│  aspect-[16/9] md:aspect-video relative overflow-hidden   │
│  rounded-sm border border-white/10">                      │
│                  <img                                     │
│                      src="/assets/generated/truck_indust  │
│  rial.png"                                                │
│                      alt="Caminhão Scania"                │
│                      className="w-full h-full             │
│  object-cover opacity-80 transition-transform             │
│  duration-1000 hover:scale-105"                           │
│                  />                                       │
│              </div>                                       │
│          </section>                                       │
│                                                           │
│          {/* 5. MOTOS & SERVICES (Image LEFT -> Text      │
│  RIGHT) */}                                               │
│          <section className="z-section flex               │
│  flex-col-reverse md:flex-row items-center gap-12         │
│  md:gap-24">                                              │
│              {/* Image (Left) */}                         │
│              <div className="z-image w-full md:w-1/2      │
│  aspect-[16/9] md:aspect-video relative overflow-hidden   │
│  rounded-sm border border-white/10">                      │
│                  <img                                     │
│                      src="/assets/generated/lifestyle_mo  │
│  to_boat.png"                                             │
│                      alt="Moto e Barco"                   │
│                      className="w-full h-full             │
│  object-cover opacity-90 transition-transform             │
│  duration-1000 hover:scale-105"                           │
│                  />                                       │
│              </div>                                       │
│                                                           │
│              {/* Content (Right) */}                      │
│              <div className="z-content w-full md:w-1/2    │
│  flex flex-col items-start md:items-end text-left         │
│  md:text-right">                                          │
│                  <div className="flex items-center gap-3  │
│  mb-6">                                                   │
│                      <span className="text-xs font-bold   │
│  uppercase tracking-widest text-white/70">Rodobens        │
│  Outros</span>                                            │
│                      <Zap className="w-6 h-6              │
│  text-[#bfb38f]" />                                       │
│                  </div>                                   │
│                  <h2 className="text-5xl md:text-7xl      │
│  font-light uppercase leading-none mb-6">Motos            │
│  &<br/>Náutica</h2>                                       │
│                  <div className="w-24 h-px bg-[#bfb38f]   │
│  mb-8" />                                                 │
│                  <p className="text-gray-400 text-lg      │
│  font-light leading-relaxed mb-8 max-w-md ml-auto">       │
│                      Liberdade para conquistar motos de   │
│  alta cilindrada e embarcações. Cartas de crédito         │
│  versáteis para serviços estéticos, cirurgias e muito     │
│  mais.                                                    │
│                  </p>                                     │
│                  <div className="flex gap-4 justify-end   │
│  w-full">                                                 │
│                      <Link href="/consorcio/motos">       │
│                          <button className="px-8 py-3     │
│  border border-white text-white text-xs font-bold         │
│  uppercase tracking-widest hover:bg-white                 │
│  hover:text-black transition-colors">                     │
│                              Simular Motos & Náutica      │
│                          </button>                        │
│                      </Link>                              │
│                  </div>                                   │
│              </div>                                       │
│          </section>                                       │
│                                                           │
│                                                           │
│          {/*                                              │
│  ============================================== */}       │
│          {/* SERVIÇOS SECTION (Kinetic Typography Focus)  │
│  */}                                                      │
│          {/*                                              │
│  ============================================== */}       │
│          <section className="z-section py-32              │
│  text-center">                                            │
│              <div className="max-w-3xl mx-auto">          │
│                  <div className="flex items-center        │
│  justify-center gap-3 mb-8">                              │
│                      <Briefcase className="w-6 h-6        │
│  text-[#bfb38f]" />                                       │
│                      <span className="text-xs font-bold   │
│  uppercase tracking-widest text-white/70">Consórcio de    │
│  Serviços</span>                                          │
│                  </div>                                   │
│                  <h2 className="text-5xl md:text-7xl      │
│  font-light uppercase leading-none tracking-tighter       │
│  mb-8">                                                   │
│                      Crédito para<br/>Realizar            │
│                  </h2>                                    │
│                  <div className="w-24 h-px bg-[#bfb38f]   │
│  mx-auto mb-12" />                                        │
│                  <p className="text-gray-400 text-lg      │
│  font-light leading-relaxed mb-12">                       │
│                      Utilize sua carta de crédito para o  │
│  que você desejar: reformas, cirurgias estéticas,         │
│  viagens, educação. Liberdade financeira com parcelas     │
│  que cabem no seu bolso.                                  │
│                  </p>                                     │
│                  <Link href="/consorcio/servicos">        │
│                      <button className="px-10 py-4        │
│  border border-white/30 text-white text-xs font-bold      │
│  uppercase tracking-widest hover:bg-white                 │
│  hover:text-black transition-colors">                     │
│                          Explorar Serviços                │
│                      </button>                            │
│                  </Link>                                  │
│              </div>                                       │
│          </section>                                       │
│                                                           │
│        </div>                                             │
│                                                           │
│        {/*                                                │
│  ============================================== */}       │
│        {/* SEGUROS FOOTER (Peak-End Rule: Single,         │
│  Powerful CTA) */}                                        │
│        {/*                                                │
│  ============================================== */}       │
│        <section className="relative py-48 md:py-64 px-6   │
│  md:px-12 text-center bg-[#050505] border-t               │
│  border-white/5">                                         │
│            <div className="max-w-3xl mx-auto">            │
│                <Shield className="w-12 h-12               │
│  text-[#bfb38f] mx-auto mb-8" />                          │
│                <h2 className="text-5xl md:text-7xl        │
│  font-light uppercase leading-none tracking-tighter       │
│  mb-8">                                                   │
│                    Seguros &<br/>Proteção                 │
│                </h2>                                      │
│                <div className="w-24 h-px bg-[#bfb38f]     │
│  mx-auto mb-12" />                                        │
│                <p className="text-gray-400 text-lg        │
│  md:text-xl font-light leading-relaxed max-w-xl mx-auto   │
│  mb-12">                                                  │
│                    Blindagem patrimonial completa.        │
│  Proteja sua família, seu veículo e seu imóvel com as     │
│  soluções sob medida da Rodobens.                         │
│                </p>                                       │
│                <Link href="/consorcio/protecao">          │
│                    <button className="px-12 py-5          │
│  bg-white text-black text-sm font-bold uppercase          │
│  tracking-widest hover:bg-[#bfb38f] transition-colors">   │
│                        Conhecer Proteções                 │
│                    </button>                              │
│                </Link>                                    │
│            </div>                                         │
│        </section>                                         │
│                                                           │
│        {/* Floating Chat Button (Add-On) */}              │
│        <ChatFAB />                                        │
│                                                           │
│      </main>                                              │
│    );                                                     │
│  }                                                        │
│                                                           │
│                                                           │
│          CRITERIA:                                        │
│          1. Design (40%): Aesthetics, Typography          │
│  (Sovereign/Premium feel), Use of Whitespace/Dark space.  │
│          2. Creativity (30%): Originality of layout (Z-H  │
│  pattern), Animation logic (GSAP), Masks.                 │
│          3. Content (20%): Copywriting quality            │
│  (Portuguese), tone of voice.                             │
│          4. Tech Stack (10%): Code cleanliness,           │
│  Component modularity.                                    │
│                                                           │
│          MISSION:                                         │
│          Compare the Main Page (Hero/Vault/Consortium     │
│  Modules) against the Consortium Page (Deep Dive).        │
│          Calculate a score (0-10) for each criteria for   │
│  BOTH pages.                                              │
│                                                           │
│          OUTPUT FORMAT:                                   │
│          Return a Markdown Table comparing the two.       │
│          Then, write a "Jury Verdict" paragraph           │
│  summarizing which page feels more 'Sovereign' and why.   │
│                                                           │
│                                                           │
└───────────────────────────────────────────────────────────┘

┌────────────────── ✅ Agent Final Answer ──────────────────┐
│                                                           │
│  Agent: Awwwards Jury Member                              │
│                                                           │
│  Final Answer:                                            │
│  # Awwwards Jury Analysis: Main Page vs Consortium Page   │
│                                                           │
│  | Criteria | Weight | Main Page Score | Consortium Page  │
│  Score | Notes |                                          │
│  |----------|--------|-----------------|----------------  │
│  ------|-------|                                          │
│  | **Design** | 40% | 7/10 | 9/10 | Main: Clean dark      │
│  foundation but lacks visual hierarchy. Consortium:       │
│  Exceptional sovereign aesthetic with gold/monochrome     │
│  palette, cinematic video, perfect dark space             │
│  utilization. |                                           │
│  | **Creativity** | 30% | 6/10 | 8/10 | Main: Modular     │
│  but static. Consortium: Sophisticated Z-pattern          │
│  scroll-triggered animations, GSAP orchestration,         │
│  kinetic typography with scroll reveals. |                │
│  | **Content** | 20% | 5/10 | 8/10 | Main: Minimal copy,  │
│  placeholder feel. Consortium: Persuasive Portuguese      │
│  copywriting, benefit-driven headlines, premium tone of   │
│  voice. |                                                 │
│  | **Tech Stack** | 10% | 8/10 | 7/10 | Main: Clean       │
│  component architecture. Consortium: GSAP integration     │
│  impressive but slightly monolithic page structure. |     │
│  | **TOTAL** | 100% | **6.5/10** | **8.3/10** | |         │
│                                                           │
│  ## Jury Verdict                                          │
│                                                           │
│  The Consortium Page demonstrates significantly stronger  │
│  "Sovereign" aesthetics compared to the Main Page. While  │
│  the Main Page establishes a minimal dark foundation, it  │
│  feels like a staging area—modular but lacking visual     │
│  sovereignty. The Consortium Page achieves premium        │
│  status through its cinematic hero video with             │
│  gold-accented gradient overlays, meticulous Z-pattern    │
│  layout with staggered GSAP animations, and consistent    │
│  monochrome palette punctuated by strategic #bfb38f gold  │
│  accents. The typography is particularly masterful:       │
│  ultra-light uppercase headlines with tracking-tighter    │
│  letterforms create immediate high-end recognition,       │
│  while the kinetic scroll reveals and border-hover        │
│  microinteractions demonstrate sophisticated attention    │
│  to detail. The Portuguese copywriting adopts a           │
│  commanding yet elegant tone ("Seu Novo Patrimônio,"      │
│  "Planejamento, não sorte") that perfectly complements    │
│  the visual authority. The Consortium Page transforms a   │
│  financial product page into a luxury experience through  │
│  disciplined dark space, kinetic typography, and          │
│  sovereign visual hierarchy—exactly what distinguishes    │
│  award-winning design from generic layouts.               │
│                                                           │
└───────────────────────────────────────────────────────────┘

┌─────────────────── 📋 Task Completion ────────────────────┐
│                                                           │
│  Task Completed                                           │
│  Name:                                                    │
│                                                           │
│          Analyze the following Source Code for two        │
│  pages: Main Page vs Consortium Page.                     │
│                                                           │
│          CODE CONTEXT:                                    │
│          === MAIN PAGE (src/app/page.tsx) ===             │
│  "use client";                                            │
│                                                           │
│  import { useState } from "react";                        │
│  import { useRouter } from "next/navigation";             │
│  import { HeroSection } from                              │
│  "@/components/mad-lab/HeroSection";                      │
│  import { VaultSection } from                             │
│  "@/components/mad-lab/VaultSection";                     │
│  import { ConsortiumSection } from                        │
│  "@/components/mad-lab/ConsortiumSection";                │
│  import { GenesisPreloader } from                         │
│  "@/components/GenesisPreloader";                         │
│                                                           │
│  export default function Home() {                         │
│    const [loading, setLoading] = useState(true);          │
│    const router = useRouter();                            │
│                                                           │
│    // Mode is passed to Hero (used for exit animations)   │
│    const mode = "dream";                                  │
│                                                           │
│    // Transition Logic: Redirect to Agent                 │
│    const activateChat = (initialPrompt?: string) => {     │
│      router.push("/agent");                               │
│    };                                                     │
│                                                           │
│    return (                                               │
│      <main className="relative min-h-screen w-full        │
│  overflow-x-hidden bg-black text-white scroll-smooth">    │
│        {loading && <GenesisPreloader onComplete={() =>    │
│  setLoading(false)} />}                                   │
│                                                           │
│        {/* 1. Hero Module (Dream State) */}               │
│        <HeroSection mode={mode}                           │
│  onActivate={activateChat} />                             │
│                                                           │
│        {/* 2. Vault Module (Assets) */}                   │
│        <VaultSection />                                   │
│                                                           │
│        {/* 3. Consortium Module (Logic) */}               │
│        <ConsortiumSection />                              │
│                                                           │
│      </main>                                              │
│    );                                                     │
│  }                                                        │
│                                                           │
│  === CONSORTIUM PAGE (src/app/consorcio/page.tsx) ===     │
│  "use client";                                            │
│                                                           │
│  import { useRef, useLayoutEffect } from "react";         │
│  import gsap from "gsap";                                 │
│  import { ScrollTrigger } from "gsap/ScrollTrigger";      │
│  import Link from "next/link";                            │
│  import { ArrowUpRight, Shield, Truck, Home, Car, Zap,    │
│  ChevronDown, Briefcase } from "lucide-react";            │
│  import { ChatFAB } from "@/components/agent/ChatFAB";    │
│                                                           │
│  gsap.registerPlugin(ScrollTrigger);                      │
│                                                           │
│  export default function ConsortiumPage() {               │
│    const containerRef = useRef<HTMLDivElement>(null);     │
│                                                           │
│    useLayoutEffect(() => {                                │
│      const ctx = gsap.context(() => {                     │
│        // Hero Title Reveal                               │
│        gsap.from(".hero-title", {                         │
│          y: 100,                                          │
│          opacity: 0,                                      │
│          duration: 1.5,                                   │
│          ease: "power4.out",                              │
│          delay: 0.2                                       │
│        });                                                │
│                                                           │
│        // Z-Pattern Entrances                             │
│        const sections =                                   │
│  gsap.utils.toArray<HTMLElement>(".z-section");           │
│        sections.forEach((section) => {                    │
│          const image =                                    │
│  section.querySelector(".z-image");                       │
│          const content =                                  │
│  section.querySelector(".z-content");                     │
│                                                           │
│          gsap.from(image, {                               │
│              scale: 0.9,                                  │
│              opacity: 0,                                  │
│              duration: 1.5,                               │
│              ease: "power3.out",                          │
│              scrollTrigger: {                             │
│                  trigger: section,                        │
│                  start: "top center+=20%",                │
│                  toggleActions: "play none none reverse"  │
│              }                                            │
│          });                                              │
│                                                           │
│          gsap.from(content, {                             │
│              y: 50,                                       │
│              opacity: 0,                                  │
│              duration: 1.2,                               │
│              ease: "power3.out",                          │
│              delay: 0.3,                                  │
│              scrollTrigger: {                             │
│                  trigger: section,                        │
│                  start: "top center+=20%",                │
│                  toggleActions: "play none none reverse"  │
│              }                                            │


########################
##   JURY VERDICT     ##
########################

# Awwwards Jury Analysis: Main Page vs Consortium Page

| Criteria | Weight | Main Page Score | Consortium Page Score | Notes |
|----------|--------|-----------------|----------------------|-------|
| **Design** | 40% | 7/10 | 9/10 | Main: Clean dark foundation but lacks visual hierarchy. Consortium: Exceptional sovereign aesthetic with gold/monochrome palette, cinematic video, perfect dark space utilization. |
| **Creativity** | 30% | 6/10 | 8/10 | Main: Modular but static. Consortium: Sophisticated Z-pattern scroll-triggered animations, GSAP orchestration, kinetic typography with scroll reveals. |
| **Content** | 20% | 5/10 | 8/10 | Main: Minimal copy, placeholder feel. Consortium: Persuasive Portuguese copywriting, benefit-driven headlines, premium tone of voice. |
| **Tech Stack** | 10% | 8/10 | 7/10 | Main: Clean component architecture. Consortium: GSAP integration impressive but slightly monolithic page structure. |
| **TOTAL** | 100% | **6.5/10** | **8.3/10** | |

## Jury Verdict

The Consortium Page demonstrates significantly stronger "Sovereign" aesthetics compared to the Main Page. While the Main Page establishes a minimal dark foundation, it feels like a staging area—modular but lacking visual sovereignty. The Consortium Page achieves premium status through its cinematic hero video with gold-accented gradient overlays, meticulous Z-pattern layout with staggered GSAP animations, and consistent monochrome palette punctuated by strategic #bfb38f gold accents. The typography is particularly masterful: ultra-light uppercase headlines with tracking-tighter letterforms create immediate high-end recognition, while the kinetic scroll reveals and border-hover microinteractions demonstrate sophisticated attention to detail. The Portuguese copywriting adopts a commanding yet elegant tone ("Seu Novo Patrimônio," "Planejamento, não sorte") that perfectly complements the visual authority. The Consortium Page transforms a financial product page into a luxury experience through disciplined dark space, kinetic typography, and sovereign visual hierarchy—exactly what distinguishes award-winning design from generic layouts.
│          });                                              │
│        });                                                │
│                                                           │
│      }, containerRef);                                    │
│      return () => ctx.revert();                           │
│    }, []);                                                │
│                                                           │
│    return (                                               │
│      <main ref={containerRef} className="bg-black         │
│  text-white min-h-screen">                                │
│                                                           │
│        {/* 1. HERO SECTION (Full Screen) */}              │
│        <section className="relative h-screen w-full       │
│  overflow-hidden flex items-end pb-24 md:px-12 mb-32">    │
│          {/* Background Video */}                         │
│          <div className="absolute inset-0 z-0">           │
│              <video                                       │
│                  autoPlay                                 │
│                  loop                                     │
│                  muted                                    │
│                  playsInline                              │
│                  className="w-full h-full object-cover    │
│  opacity-60"                                              │
│              >                                            │
│                  <source                                  │
│  src="/assets/generated/consorcio_hero.mp4"               │
│  type="video/mp4" />                                      │
│              </video>                                     │
│              <div className="absolute inset-0             │
│  bg-gradient-to-t from-black via-black/40                 │
│  to-transparent" />                                       │
│          </div>                                           │
│                                                           │
│          {/* Hero Content */}                             │
│          <div className="relative z-10 w-full             │
│  max-w-screen-2xl mx-auto border-t border-white/20 pt-8   │
│  flex flex-col md:flex-row justify-between items-end      │
│  gap-8">                                                  │
│              <div className="hero-title">                 │
│                  <span className="block text-xs           │
│  font-bold uppercase tracking-[0.2em] mb-4                │
│  text-[#bfb38f]">Consórcio Rodobens</span>                │
│                  <h1 className="text-[12vw]               │
│  md:text-[7vw] leading-[0.85] font-light                  │
│  tracking-tighter uppercase">                             │
│                      Seu Novo<br/>Patrimônio              │
│                  </h1>                                    │
│              </div>                                       │
│              <div className="hidden md:block              │
│  animate-bounce">                                         │
│                  <ChevronDown className="w-8 h-8          │
│  text-white/50" />                                        │
│              </div>                                       │
│          </div>                                           │
│        </section>                                         │
│                                                           │
│        {/*                                                │
│  ============================================== */}       │
│        {/* PONTUAL INTERSTITIAL (Hero Product Highlight)  │
│  */}                                                      │
│        {/*                                                │
│  ============================================== */}       │
│        <section className="relative py-40 md:py-64 px-6   │
│  md:px-12 text-center bg-gradient-to-b from-black         │
│  via-[#050505] to-black">                                 │
│            <div className="max-w-4xl mx-auto">            │
│                <div className="flex items-center          │
│  justify-center gap-3 mb-8">                              │
│                    <Zap className="w-6 h-6                │
│  text-[#bfb38f]" />                                       │
│                    <span className="text-xs font-bold     │
│  uppercase tracking-[0.3em] text-[#bfb38f]">Protocolo     │
│  Pontual</span>                                           │
│                </div>                                     │
│                <h2 className="text-5xl md:text-8xl        │
│  font-light uppercase leading-none tracking-tighter       │
│  mb-8">                                                   │
│                    Seu Carro<br/>em <span                 │
│  className="text-[#bfb38f]">6 Meses</span>                │
│                </h2>                                      │
│                <p className="text-gray-400 text-lg        │
│  md:text-xl font-light leading-relaxed max-w-2xl mx-auto  │
│  mb-12">                                                  │
│                    Esqueça o sorteio. Com o Pontual       │
│  Rodobens, você antecipa as parcelas a partir da 6ª       │
│  assembleia e retira seu 0km. Planejamento, não sorte.    │
│                </p>                                       │
│                <Link href="/consorcio/pontual">           │
│                    <button className="px-12 py-5          │
│  bg-[#bfb38f] text-black text-sm font-bold uppercase      │
│  tracking-widest hover:bg-white transition-colors">       │
│                        Simular Pontual                    │
│                    </button>                              │
│                </Link>                                    │
│            </div>                                         │
│        </section>                                         │
│                                                           │
│        {/* CONTAINER FOR Z-PATTERN BLOCKS */}             │
│        <div className="max-w-screen-2xl mx-auto px-6      │
│  md:px-12 space-y-64 pb-64">                              │
│                                                           │
│          {/* 2. AUTO SECTION (Image RIGHT -> Text LEFT)   │
│  */}                                                      │
│          <section className="z-section flex flex-col      │
│  md:flex-row items-center gap-12 md:gap-24">              │
│              {/* Content (Left) */}                       │
│              <div className="z-content w-full md:w-1/2    │
│  flex flex-col items-start text-left">                    │
│                  <div className="flex items-center gap-3  │
│  mb-6">                                                   │
│                      <Car className="w-6 h-6              │
│  text-[#bfb38f]" />                                       │
│                      <span className="text-xs font-bold   │
│  uppercase tracking-widest text-white/70">Rodobens        │
│  Auto</span>                                              │
│                  </div>                                   │
│                  <h2 className="text-5xl md:text-7xl      │
│  font-light uppercase leading-none mb-6">Seu              │
│  Carro<br/>0km</h2>                                       │
│                  <div className="w-24 h-px bg-[#bfb38f]   │
│  mb-8" />                                                 │
│                  <p className="text-gray-400 text-lg      │
│  font-light leading-relaxed mb-6 max-w-xl">               │
│                      O <strong>Consórcio Pontual          │
│  Rodobens</strong> é diferente de tudo o que você já      │
│  conhece. A partir da <strong>6ª assembleia</strong>,     │
│  você pode antecipar parcelas e retirar seu carro zero.   │
│                  </p>                                     │
│                  <ul className="text-gray-500 text-sm     │
│  font-light space-y-2 mb-8 uppercase tracking-wide">      │
│                      <li className="flex items-center     │
│  gap-2"><div className="w-1.5 h-1.5 bg-[#bfb38f]          │
│  rounded-full" /> Menor taxa do mercado (Sem Juros)</li>  │
│                      <li className="flex items-center     │
│  gap-2"><div className="w-1.5 h-1.5 bg-[#bfb38f]          │
│  rounded-full" /> 2 em 1: Crédito com preço de            │
│  Consórcio</li>                                           │
│                      <li className="flex items-center     │
│  gap-2"><div className="w-1.5 h-1.5 bg-[#bfb38f]          │
│  rounded-full" /> Liberdade total de escolha</li>         │
│                  </ul>                                    │
│                  <div className="flex gap-4">             │
│                      <Link href="/consorcio/auto">        │
│                          <button className="px-8 py-3     │
│  bg-[#bfb38f] text-black text-xs font-bold uppercase      │
│  tracking-widest hover:bg-white transition-colors">       │
│                              Simular Agora                │
│                          </button>                        │
│                      </Link>                              │
│                      <div className="flex items-center    │
│  gap-2 text-xs font-bold uppercase tracking-widest        │
│  text-[#bfb38f]">                                         │
│                          <Shield className="w-4 h-4" />   │
│                          <span>Em até 6 Meses</span>      │
│                      </div>                               │
│                  </div>                                   │
│              </div>                                       │
│                                                           │
│               {/* Image (Right) */}                       │
│               <div className="z-image w-full md:w-1/2     │
│  aspect-[4/5] md:aspect-square relative overflow-hidden   │
│  rounded-sm border border-white/10">                      │
│                  <img                                     │
│                      src="/assets/generated/auto_garage.  │
│  png"                                                     │
│                      alt="Garagem Auto"                   │
│                      className="w-full h-full             │
│  object-cover opacity-90 transition-transform             │
│  duration-1000 hover:scale-105"                           │
│                  />                                       │
│              </div>                                       │
│          </section>                                       │
│                                                           │
│                                                           │
│          {/* 3. REAL ESTATE SECTION (Image LEFT -> Text   │
│  RIGHT) */}                                               │
│          <section className="z-section flex               │
│  flex-col-reverse md:flex-row items-center gap-12         │
│  md:gap-24">                                              │
│              {/* Image (Left) */}                         │
│              <div className="z-image w-full md:w-1/2      │
│  aspect-[4/5] md:aspect-square relative overflow-hidden   │
│  rounded-sm border border-white/10">                      │
│                  <img                                     │
│                      src="/assets/generated/real_estate_  │
│  villa.png"                                               │
│                      alt="Casa Moderna"                   │
│                      className="w-full h-full             │
│  object-cover opacity-90 transition-transform             │
│  duration-1000 hover:scale-105"                           │
│                  />                                       │
│              </div>                                       │
│                                                           │
│              {/* Content (Right) */}                      │
│              <div className="z-content w-full md:w-1/2    │
│  flex flex-col items-start md:items-end text-left         │
│  md:text-right">                                          │
│                  <div className="flex items-center gap-3  │
│  mb-6">                                                   │
│                      <span className="text-xs font-bold   │
│  uppercase tracking-widest text-white/70">Rodobens        │
│  Imóveis</span>                                           │
│                      <Home className="w-6 h-6             │
│  text-[#bfb38f]" />                                       │
│                  </div>                                   │
│                  <h2 className="text-5xl md:text-7xl      │
│  font-light uppercase leading-none mb-6">Seu              │
│  Novo<br/>Imóvel</h2>                                     │
│                  <div className="w-24 h-px bg-[#bfb38f]   │
│  mb-8" />                                                 │
│                  <p className="text-gray-400 text-lg      │
│  font-light leading-relaxed mb-8 max-w-md ml-auto">       │
│                      A forma inteligente de ampliar seu   │
│  patrimônio. Créditos de até <strong>R$ 1                 │
│  Milhão</strong> com prazos flexíveis de até 216 meses.   │
│  Compra, construção ou reforma sem juros abusivos.        │
│                  </p>                                     │
│                  <div className="flex gap-4 justify-end   │
│  w-full">                                                 │
│                       <div className="hidden md:flex      │
│  items-center gap-2 text-xs font-bold uppercase           │
│  tracking-widest text-[#bfb38f] mr-4">                    │
│                          <ArrowUpRight className="w-4     │
│  h-4" />                                                  │
│                          <span>Até 216 Meses</span>       │
│                      </div>                               │
│                      <Link href="/consorcio/imovel">      │
│                          <button className="px-8 py-3     │
│  border border-white text-white text-xs font-bold         │
│  uppercase tracking-widest hover:bg-white                 │
│  hover:text-black transition-colors">                     │
│                              Simular Imóvel               │
│                          </button>                        │
│                      </Link>                              │
│                  </div>                                   │
│              </div>                                       │
│          </section>                                       │
│                                                           │
│                                                           │
│          {/* 4. HEAVY METAL (Image RIGHT -> Text LEFT)    │
│  */}                                                      │
│          <section className="z-section flex flex-col      │
│  md:flex-row items-center gap-12 md:gap-24">              │
│              {/* Content (Left) */}                       │
│              <div className="z-content w-full md:w-1/2    │
│  flex flex-col items-start text-left">                    │
│                  <div className="flex items-center gap-3  │
│  mb-6">                                                   │
│                      <Truck className="w-6 h-6            │
│  text-[#bfb38f]" />                                       │
│                      <span className="text-xs font-bold   │
│  uppercase tracking-widest text-white/70">Rodobens        │
│  Pesados</span>                                           │
│                  </div>                                   │
│                  <h2 className="text-5xl md:text-7xl      │
│  font-light uppercase leading-none mb-6">Frota            │
│  &<br/>Agro</h2>                                          │
│                  <div className="w-24 h-px bg-[#bfb38f]   │
│  mb-8" />                                                 │
│                  <p className="text-gray-400 text-lg      │
│  font-light leading-relaxed mb-8 max-w-md">               │
│                      Para quem transporta o Brasil.       │
│  Caminhões, máquinas e implementos com planos que         │
│  respeitam o fluxo de caixa do seu negócio.               │
│                  </p>                                     │
│                  <Link href="/consorcio/pesados">         │
│                      <button className="px-8 py-3         │
│  border-2 border-[#bfb38f] text-[#bfb38f] text-xs         │
│  font-bold uppercase tracking-widest hover:bg-[#bfb38f]   │
│  hover:text-black transition-colors">                     │
│                          Cotar Pesados                    │
│                      </button>                            │
│                  </Link>                                  │
│              </div>                                       │
│                                                           │
│               {/* Image (Right) */}                       │
│               <div className="z-image w-full md:w-1/2     │
│  aspect-[16/9] md:aspect-video relative overflow-hidden   │
│  rounded-sm border border-white/10">                      │
│                  <img                                     │
│                      src="/assets/generated/truck_indust  │
│  rial.png"                                                │
│                      alt="Caminhão Scania"                │
│                      className="w-full h-full             │
│  object-cover opacity-80 transition-transform             │
│  duration-1000 hover:scale-105"                           │
│                  />                                       │
│              </div>                                       │
│          </section>                                       │
│                                                           │
│          {/* 5. MOTOS & SERVICES (Image LEFT -> Text      │
│  RIGHT) */}                                               │
│          <section className="z-section flex               │
│  flex-col-reverse md:flex-row items-center gap-12         │
│  md:gap-24">                                              │
│              {/* Image (Left) */}                         │
│              <div className="z-image w-full md:w-1/2      │
│  aspect-[16/9] md:aspect-video relative overflow-hidden   │
│  rounded-sm border border-white/10">                      │
│                  <img                                     │
│                      src="/assets/generated/lifestyle_mo  │
│  to_boat.png"                                             │
│                      alt="Moto e Barco"                   │
│                      className="w-full h-full             │
│  object-cover opacity-90 transition-transform             │
│  duration-1000 hover:scale-105"                           │
│                  />                                       │
│              </div>                                       │
│                                                           │
│              {/* Content (Right) */}                      │
│              <div className="z-content w-full md:w-1/2    │
│  flex flex-col items-start md:items-end text-left         │
│  md:text-right">                                          │
│                  <div className="flex items-center gap-3  │
│  mb-6">                                                   │
│                      <span className="text-xs font-bold   │
│  uppercase tracking-widest text-white/70">Rodobens        │
│  Outros</span>                                            │
│                      <Zap className="w-6 h-6              │
│  text-[#bfb38f]" />                                       │
│                  </div>                                   │
│                  <h2 className="text-5xl md:text-7xl      │
│  font-light uppercase leading-none mb-6">Motos            │
│  &<br/>Náutica</h2>                                       │
│                  <div className="w-24 h-px bg-[#bfb38f]   │
│  mb-8" />                                                 │
│                  <p className="text-gray-400 text-lg      │
│  font-light leading-relaxed mb-8 max-w-md ml-auto">       │
│                      Liberdade para conquistar motos de   │
│  alta cilindrada e embarcações. Cartas de crédito         │
│  versáteis para serviços estéticos, cirurgias e muito     │
│  mais.                                                    │
│                  </p>                                     │
│                  <div className="flex gap-4 justify-end   │
│  w-full">                                                 │
│                      <Link href="/consorcio/motos">       │
│                          <button className="px-8 py-3     │
│  border border-white text-white text-xs font-bold         │
│  uppercase tracking-widest hover:bg-white                 │
│  hover:text-black transition-colors">                     │
│                              Simular Motos & Náutica      │
│                          </button>                        │
│                      </Link>                              │
│                  </div>                                   │
│              </div>                                       │
│          </section>                                       │
│                                                           │
│                                                           │
│          {/*                                              │
│  ============================================== */}       │
│          {/* SERVIÇOS SECTION (Kinetic Typography Focus)  │
│  */}                                                      │
│          {/*                                              │
│  ============================================== */}       │
│          <section className="z-section py-32              │
│  text-center">                                            │
│              <div className="max-w-3xl mx-auto">          │
│                  <div className="flex items-center        │
│  justify-center gap-3 mb-8">                              │
│                      <Briefcase className="w-6 h-6        │
│  text-[#bfb38f]" />                                       │
│                      <span className="text-xs font-bold   │
│  uppercase tracking-widest text-white/70">Consórcio de    │
│  Serviços</span>                                          │
│                  </div>                                   │
│                  <h2 className="text-5xl md:text-7xl      │
│  font-light uppercase leading-none tracking-tighter       │
│  mb-8">                                                   │
│                      Crédito para<br/>Realizar            │
│                  </h2>                                    │
│                  <div className="w-24 h-px bg-[#bfb38f]   │
│  mx-auto mb-12" />                                        │
│                  <p className="text-gray-400 text-lg      │
│  font-light leading-relaxed mb-12">                       │
│                      Utilize sua carta de crédito para o  │
│  que você desejar: reformas, cirurgias estéticas,         │
│  viagens, educação. Liberdade financeira com parcelas     │
│  que cabem no seu bolso.                                  │
│                  </p>                                     │
│                  <Link href="/consorcio/servicos">        │
│                      <button className="px-10 py-4        │
│  border border-white/30 text-white text-xs font-bold      │
│  uppercase tracking-widest hover:bg-white                 │
│  hover:text-black transition-colors">                     │
│                          Explorar Serviços                │
│                      </button>                            │
│                  </Link>                                  │
│              </div>                                       │
│          </section>                                       │
│                                                           │
│        </div>                                             │
│                                                           │
│        {/*                                                │
│  ============================================== */}       │
│        {/* SEGUROS FOOTER (Peak-End Rule: Single,         │
│  Powerful CTA) */}                                        │
│        {/*                                                │
│  ============================================== */}       │
│        <section className="relative py-48 md:py-64 px-6   │
│  md:px-12 text-center bg-[#050505] border-t               │
│  border-white/5">                                         │
│            <div className="max-w-3xl mx-auto">            │
│                <Shield className="w-12 h-12               │
│  text-[#bfb38f] mx-auto mb-8" />                          │
│                <h2 className="text-5xl md:text-7xl        │
│  font-light uppercase leading-none tracking-tighter       │
│  mb-8">                                                   │
│                    Seguros &<br/>Proteção                 │
│                </h2>                                      │
│                <div className="w-24 h-px bg-[#bfb38f]     │
│  mx-auto mb-12" />                                        │
│                <p className="text-gray-400 text-lg        │
│  md:text-xl font-light leading-relaxed max-w-xl mx-auto   │
│  mb-12">                                                  │
│                    Blindagem patrimonial completa.        │
│  Proteja sua família, seu veículo e seu imóvel com as     │
│  soluções sob medida da Rodobens.                         │
│                </p>                                       │
│                <Link href="/consorcio/protecao">          │
│                    <button className="px-12 py-5          │
│  bg-white text-black text-sm font-bold uppercase          │
│  tracking-widest hover:bg-[#bfb38f] transition-colors">   │
│                        Conhecer Proteções                 │
│                    </button>                              │
│                </Link>                                    │
│            </div>                                         │
│        </section>                                         │
│                                                           │
│        {/* Floating Chat Button (Add-On) */}              │
│        <ChatFAB />                                        │
│                                                           │
│      </main>                                              │
│    );                                                     │
│  }                                                        │
│                                                           │
│                                                           │
│          CRITERIA:                                        │
│          1. Design (40%): Aesthetics, Typography          │
│  (Sovereign/Premium feel), Use of Whitespace/Dark space.  │
│          2. Creativity (30%): Originality of layout (Z-H  │
│  pattern), Animation logic (GSAP), Masks.                 │
│          3. Content (20%): Copywriting quality            │
│  (Portuguese), tone of voice.                             │
│          4. Tech Stack (10%): Code cleanliness,           │
│  Component modularity.                                    │
│                                                           │
│          MISSION:                                         │
│          Compare the Main Page (Hero/Vault/Consortium     │
│  Modules) against the Consortium Page (Deep Dive).        │
│          Calculate a score (0-10) for each criteria for   │
│  BOTH pages.                                              │
│                                                           │
│          OUTPUT FORMAT:                                   │
│          Return a Markdown Table comparing the two.       │
│          Then, write a "Jury Verdict" paragraph           │
│  summarizing which page feels more 'Sovereign' and why.   │
│                                                           │
│  Agent:                                                   │
│  Awwwards Jury Member                                     │
│                                                           │
│                                                           │
└───────────────────────────────────────────────────────────┘

┌───────────────────── Crew Completion ─────────────────────┐
│                                                           │
│  Crew Execution Completed                                 │
│  Name:                                                    │
│  crew                                                     │
│  ID:                                                      │
│  ee423cf5-f750-4351-8ebe-cd1ddbf1de64                     │
│  Final Output: # Awwwards Jury Analysis: Main Page vs     │
│  Consortium Page                                          │
│                                                           │
│  | Criteria | Weight | Main Page Score | Consortium Page  │
│  Score | Notes |                                          │
│  |----------|--------|-----------------|----------------  │
│  ------|-------|                                          │
│  | **Design** | 40% | 7/10 | 9/10 | Main: Clean dark      │
│  foundation but lacks visual hierarchy. Consortium:       │
│  Exceptional sovereign aesthetic with gold/monochrome     │
│  palette, cinematic video, perfect dark space             │
│  utilization. |                                           │
│  | **Creativity** | 30% | 6/10 | 8/10 | Main: Modular     │
│  but static. Consortium: Sophisticated Z-pattern          │
│  scroll-triggered animations, GSAP orchestration,         │
│  kinetic typography with scroll reveals. |                │
│  | **Content** | 20% | 5/10 | 8/10 | Main: Minimal copy,  │
│  placeholder feel. Consortium: Persuasive Portuguese      │
│  copywriting, benefit-driven headlines, premium tone of   │
│  voice. |                                                 │
│  | **Tech Stack** | 10% | 8/10 | 7/10 | Main: Clean       │
│  component architecture. Consortium: GSAP integration     │
│  impressive but slightly monolithic page structure. |     │
│  | **TOTAL** | 100% | **6.5/10** | **8.3/10** | |         │
│                                                           │
│  ## Jury Verdict                                          │
│                                                           │
│  The Consortium Page demonstrates significantly stronger  │
│  "Sovereign" aesthetics compared to the Main Page. While  │
│  the Main Page establishes a minimal dark foundation, it  │
│  feels like a staging area—modular but lacking visual     │
│  sovereignty. The Consortium Page achieves premium        │
│  status through its cinematic hero video with             │
│  gold-accented gradient overlays, meticulous Z-pattern    │
│  layout with staggered GSAP animations, and consistent    │
│  monochrome palette punctuated by strategic #bfb38f gold  │
│  accents. The typography is particularly masterful:       │
│  ultra-light uppercase headlines with tracking-tighter    │
│  letterforms create immediate high-end recognition,       │
│  while the kinetic scroll reveals and border-hover        │
│  microinteractions demonstrate sophisticated attention    │
│  to detail. The Portuguese copywriting adopts a           │
│  commanding yet elegant tone ("Seu Novo Patrimônio,"      │
│  "Planejamento, não sorte") that perfectly complements    │
│  the visual authority. The Consortium Page transforms a   │
│  financial product page into a luxury experience through  │
│  disciplined dark space, kinetic typography, and          │
│  sovereign visual hierarchy—exactly what distinguishes    │
│  award-winning design from generic layouts.               │
│                                                           │
│                                                           │
└───────────────────────────────────────────────────────────┘

┌───────────────────── Tracing Status ──────────────────────┐
│                                                           │
│  Info: Tracing is disabled.                               │
│                                                           │
│  To enable tracing, do any one of these:                  │
│  • Set tracing=True in your Crew/Flow code                │
│  • Set CREWAI_TRACING_ENABLED=true in your project's      │
│  .env file                                                │
│  • Run: crewai traces enable                              │
│                                                           │
└───────────────────────────────────────────────────────────┘
