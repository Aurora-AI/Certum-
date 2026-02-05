"use client";

import { ProductConsole } from "@/components/agent/ProductConsole";

export default function PontualPage() {
    return (
        <ProductConsole
            initialContext="Bem-vindo ao Protocolo PONTUAL. \n\nA inteligência suprema da Rodobens. \n\nSeu carro 0km entregue em até 6 meses. Sem sorteio, apenas planejamento preciso."
            assetDefault={40000}
            horizonDefault={6}
            activeCategory="PONTUAL"
        />
    );
}
