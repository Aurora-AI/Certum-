'use client';

import { Suspense } from 'react';
import Preloader from '@/components/ui/Preloader';
import HeroVolumetric from "@/components/antigravity/HeroVolumetric";
import AboutManifesto from "@/components/sections/AboutManifesto";
import AuthorityBlock from "@/components/sections/AuthorityBlock";
import SequentialPortfolio from "@/components/sections/SequentialPortfolio";
import ContactFooter from "@/components/sections/ContactFooter";
import ScrollParticles from "@/components/canvas/ScrollParticles";

export default function HomeClient() {
  return (
    <main className="relative w-full overflow-hidden bg-[#0d0e13]">
      
      {/* Scroll Particles (Background Void Filler) */}
      <ScrollParticles />

      {/* 00. Preloader (Vault Decryption) */}
      <Preloader />
      
      {/* 01. Hero Section (Volumetric Silence) */}
      <Suspense fallback={null}>
        <HeroVolumetric />
      </Suspense>

      {/* 02. The Thesis (About - Light Mode) */}
      <AboutManifesto />

      {/* 03. Tactical Arsenal (Cinematic Sequential) */}
      <SequentialPortfolio />

      {/* 04. Authority (Glassmonolith) */}
      <AuthorityBlock />

      {/* 05. Sovereign Contact (Footer) */}
      <ContactFooter />
      
    </main>
  );
}
