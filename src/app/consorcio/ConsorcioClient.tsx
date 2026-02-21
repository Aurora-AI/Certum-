'use client';

import React from 'react';
import ConsorcioHero from "@/components/sections/consorcios/ConsortiumHero";
import ConsorcioCategories from "@/components/consorcio/ConsorcioCategories";
import ContactFooter from "@/components/sections/ContactFooter";
import ScrollParticles from "@/components/canvas/ScrollParticles";

export default function ConsorcioClient() {
    return (
        <main className="relative w-full overflow-hidden bg-[#0d0e13]">
            <ScrollParticles />
            <ConsorcioHero />
            <ConsorcioCategories />
            <ContactFooter />
        </main>
    );
}
