"use client";

import { ProductConsole } from "@/components/agent/ProductConsole";

export default function PesadosPage() {
    return (
        <ProductConsole
            initialContext="Bem-vindo ao Consórcio Pesados (Frota & Agro). \n\nCaminhões, Máquinas Agrícolas e Implementos Rodoviários. \n\nIdeal para PJ e renovação de frota com prazos de até 120 meses."
            assetDefault={250000}
            horizonDefault={120}
            activeCategory="HEAVY_MACHINERY"
        />
    );
}
