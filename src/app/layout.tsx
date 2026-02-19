import type { Metadata } from 'next';
import { Manrope, Space_Mono, Newsreader, Poppins } from 'next/font/google';
import './globals.css';

// 9. Awwwards Optimization: Font Loading (Zero CLS)
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const spaceMono = Space_Mono({ weight: '400', subsets: ['latin'], variable: '--font-space-mono' });
const newsreader = Newsreader({ subsets: ['latin'], style: 'italic', variable: '--font-newsreader' });
const poppins = Poppins({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'], variable: '--font-poppins' });

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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5, // Acessibilidade
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/assets/Manifesto2.jpeg', // Placeholder icon
  },
  alternates: {
    canonical: 'https://certumprime.com.br',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${spaceMono.variable} ${newsreader.variable} ${poppins.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        {/* Clash Display for premium Hero typography (CDN okay for display font) */}
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-cosmic-cream text-carbon-black antialiased overflow-x-hidden selection:bg-carbon-black selection:text-absolute-white">
        {children}
      </body>
    </html>
  );
}
