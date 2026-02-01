import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
  title: 'Certum | Inteligência de Negócios Soberana',
  description: 'Arquitetura de dados para empresas que exigem soberania.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable} dark`}>
      <head>
        <Script src="https://unpkg.com/lenis@1.1.13/dist/lenis.min.js" strategy="beforeInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" strategy="beforeInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" strategy="beforeInteractive" />
      </head>
      <body className="bg-black text-white antialiased overflow-x-hidden selection:bg-white/20 selection:text-white">
        {children}
        <Script id="lenis-init" strategy="lazyOnload">
          {`
            const lenis = new Lenis({duration:1.2, smoothWheel: true});
            gsap.registerPlugin(ScrollTrigger);
            
            function raf(time) {
              lenis.raf(time);
              requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);

            // Connect GSAP ScrollTrigger to Lenis
            lenis.on('scroll', ScrollTrigger.update);
            gsap.ticker.add((time) => {
              lenis.raf(time * 1000);
            });
            gsap.ticker.lagSmoothing(0);
          `}
        </Script>
      </body>
    </html>
  )
}
