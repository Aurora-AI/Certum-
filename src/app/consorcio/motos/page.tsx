"use client";

import { ProductConsole } from "@/components/agent/ProductConsole";

export default function MotosPage() {
    return (
        <ProductConsole
            initialContext="Bem-vindo ao Consórcio de Motos. \n\nConquiste sua liberdade em duas rodas. \n\nPlanos flexíveis para motos de baixa a alta cilindrada."
            assetDefault={15000}
            horizonDefault={36}
            activeCategory="MOTOS"
        />
    );
}
