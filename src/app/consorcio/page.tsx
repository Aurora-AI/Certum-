'use client';

import React from 'react';
import ConsorcioHero from "@/components/consorcio/ConsorcioHero";
import ConsorcioCategories from "@/components/consorcio/ConsorcioCategories";
import ContactFooter from "@/components/sections/ContactFooter";

export default function ConsorcioTradicionalPage() {
    return (
        <main className="relative w-full overflow-hidden bg-[#0d0e13]">
            <ConsorcioHero />
            <ConsorcioCategories />
            <ContactFooter />
        </main>
    );
}
