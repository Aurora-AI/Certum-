import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Certum Prime | Representante Autorizado Rodobens - Consórcios e Seguros',
  description: 'Especialistas em alavancagem patrimonial e arquitetura financeira. Consórcios Rodobens em São José do Rio Preto e nível nacional para imóveis, veículos premium e agro.',
  keywords: ['Consórcio Rodobens SJRP', 'Investimento Imobiliário SP', 'Alavancagem Financeira', 'Certum Prime Rodobens'],
  openGraph: {
    title: 'Certum Prime | Arquitetura de Riqueza Rodobens',
    description: 'Domine a arte da alavancagem patrimonial. Planos exclusivos de consórcio e seguros de alto vulto.',
  }
};

export default function Home() {
  return <HomeClient />;
}
