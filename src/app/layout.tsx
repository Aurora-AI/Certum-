import type { Metadata } from "next";
import { Manrope } from "next/font/google"; // Fonte Brutalista/Clean
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "Aurora Asset | Sovereign Interface",
  description: "Wealth Architecture System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="antialiased">
      <body className={`${manrope.variable} font-sans bg-[#0d0b07] text-[#f2f2f0] overflow-x-hidden`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
