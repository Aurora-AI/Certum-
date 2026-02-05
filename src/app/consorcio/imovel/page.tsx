"use client";

import { ProductConsole } from "@/components/agent/ProductConsole";

export default function ImovelPage() {
    return (
        <ProductConsole
            initialContext="Bem-vindo ao Consórcio Imóvel. \n\nAqui você materializa seu patrimônio: Casas, Apartamentos, Terrenos ou Reformas. \n\nPrazos estendidos de até 216 meses e créditos de até R$ 1 Milhão."
            assetDefault={300000}
            horizonDefault={180}
            activeCategory="REAL_ESTATE"
        />
    );
}
