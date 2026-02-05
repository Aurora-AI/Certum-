"use client";

import { ProductConsole } from "@/components/agent/ProductConsole";

export default function ServicosPage() {
    return (
        <ProductConsole
            initialContext="Bem-vindo ao Consórcio de Serviços. \n\nLiberdade para contratar: \n- Reformas e Projetos \n- Eventos e Viagens \n- Estética e Saúde \n- Educação"
            assetDefault={20000}
            horizonDefault={24}
            activeCategory="SERVICES"
        />
    );
}
