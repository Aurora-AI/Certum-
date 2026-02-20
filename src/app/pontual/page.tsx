'use client';

import React from 'react';
import PontualHero from "@/components/pontual/PontualHero";
import InvestmentThesis from "@/components/pontual/InvestmentThesis";
import AssetGallery from "@/components/pontual/AssetGallery";
import ContactFooter from "@/components/sections/ContactFooter";

export default function PontualPage() {
    return (
        <main className="relative w-full overflow-hidden bg-background">
            <PontualHero />
            <InvestmentThesis />
            <AssetGallery />
            <ContactFooter />
        </main>
    );
}
