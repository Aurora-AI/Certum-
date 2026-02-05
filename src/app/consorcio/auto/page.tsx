"use client";

import { ProductConsole } from "@/components/agent/ProductConsole";

export default function AutoPage() {
    return (
        <ProductConsole
            initialContext="Bem-vindo ao Consórcio Auto. \n\nAqui você planeja a compra do seu carro 0km ou seminovo, sem juros. \n\nPosso simular parcelas para Créditos de R$ 30mil a R$ 200mil."
            assetDefault={50000}
            horizonDefault={60}
            activeCategory="AUTOMOTIVE"
        />
    );
}
