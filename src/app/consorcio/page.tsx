import type { Metadata } from 'next';
import ConsorcioClient from './ConsorcioClient';

export const metadata: Metadata = {
  title: 'Consórcio Tradicional Rodobens | Certum Prime SJRP',
  description: 'Planos estruturados para imóveis, veículos, frotas e maquinário agro. Adquira seu bem com planejamento financeiro estratégico e taxas competitivas.',
  keywords: ['Consórcio Imobiliário Rodobens', 'Consórcio de Caminhões', 'Rodobens São José do Rio Preto', 'Investimento Seguro'],
};

export default function ConsorcioTradicionalPage() {
    return <ConsorcioClient />;
}
