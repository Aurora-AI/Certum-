import type { Metadata } from 'next';
import PontualClient from './PontualClient';

export const metadata: Metadata = {
  title: 'Plano Pontual Rodobens | Acelerador de Patrimônio Certum Prime',
  description: 'O caminho mais rápido para seu imóvel ou veículo com entrega programada após a 6ª parcela. Engenharia financeira para alavancagem rápida.',
  keywords: ['Plano Pontual Rodobens', 'Entrega Programada Rodobens', 'Liberdade Financeira', 'Consórcio Pontual'],
};

export default function PontualPage() {
    return <PontualClient />;
}
