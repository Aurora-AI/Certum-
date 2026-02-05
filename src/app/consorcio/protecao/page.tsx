"use client";

import { ProductConsole } from "@/components/agent/ProductConsole";

export default function ProtecaoPage() {
    return (
        <ProductConsole
            initialContext="Bem-vindo à Camada de Proteção. \n\nSeguros e Blindagem Patrimonial. \n\nSelecione um módulo: \n- Seguro de Vida \n- Seguro Auto \n- DigiMed (Telemedicina)"
            assetDefault={0} 
            horizonDefault={12}
            activeCategory="PROTECTION"
        />
    );
}
