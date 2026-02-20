import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

// 9. Wealth Management Standard: Font Loading (Serif + Sans)
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const viewport = {
  themeColor: '#0d0e13',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: 'Certum Prime | Consórcios e Seguros',
  description: 'Representante autorizado Rodobens. Consórcios de automóveis, imóveis e veículos comerciais com as melhores condições do mercado. Adquira seu bem sem juros e com planejamento financeiro inteligente.',
  keywords: ['Consórcio Rodobens', 'Investimento Imobiliário', 'Carros de Luxo', 'Planejamento Financeiro', 'Sem Juros', 'Certum Prime', 'Sovereign Wealth'],
  authors: [{ name: 'Mad Lab Aurora' }],
  creator: 'Mad Lab Aurora',
  publisher: 'Certum Prime',
  category: 'finance',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Certum Prime | Arquitetura de Riqueza',
    description: 'Acesso privilegiado a ativos de alto valor. Consórcio Rodobens com estratégia de alavancagem patrimonial.',
    url: 'https://certumprime.com.br',
    siteName: 'Certum Prime',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: 'https://certumprime.com.br/assets/Manifesto2.jpeg', // Using our best asset
        width: 1200,
        height: 630,
        alt: 'Certum Prime - Sovereign Portal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Certum Prime | Sovereign Finance',
    description: 'Alavancagem patrimonial e acesso a bens de luxo sem juros abusivos.',
    images: ['https://certumprime.com.br/assets/Manifesto2.jpeg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/assets/Manifesto2.jpeg', // Placeholder icon
  },
  alternates: {
    canonical: 'https://certumprime.com.br',
  },
};

import SovereignCursor from '@/app/components/ui/SovereignCursor';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        {/* Clash Display for premium Hero typography (CDN okay for display font) */}
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-dark text-white antialiased overflow-x-hidden selection:bg-accent selection:text-dark">
        <SovereignCursor color="#C8A985" dotSize={8} circleSize={40} />
        {children}
      </body>
    </html>
  );
}
