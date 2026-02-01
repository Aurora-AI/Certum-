import { Preloader } from "@/components/sovereign/preloader";
// import { HeroSection } from "@/components/sovereign/hero-section"; // BACKUP: Old Hero
import { HeroGenUI } from "@/components/sovereign/hero-gen-ui"; // NEW: Gen-UI Hero
import { PillarsSection } from "@/components/sovereign/pillars-section";
import { ExpansionGrid } from "@/components/sovereign/expansion-grid"; 
import { VaultSection } from "@/components/sovereign/vault-section";
import { Footer } from "@/components/sovereign/footer";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-background-light selection:bg-primary selection:text-background">
      <Preloader />
      {/* <HeroSection /> */}
      <HeroGenUI />
      <PillarsSection />
      <ExpansionGrid />
      <VaultSection />
      <Footer />
    </main>
  );
}
