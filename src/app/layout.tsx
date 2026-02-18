import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Certum Prime | Consórcios e Seguros',
  description: 'Representante autorizado Rodobens. Consórcios de automóveis, imóveis e veículos comerciais com as melhores condições do mercado. Adquira seu bem sem juros e com planejamento financeiro inteligente.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Carregando Newsreader, Noto Sans e Space Mono exatamente como no HTML */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Space+Mono&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        {/* Clash Display for premium Hero typography */}
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-cosmic-cream text-carbon-black antialiased overflow-x-hidden selection:bg-carbon-black selection:text-absolute-white">
        {children}
      </body>
    </html>
  );
}
