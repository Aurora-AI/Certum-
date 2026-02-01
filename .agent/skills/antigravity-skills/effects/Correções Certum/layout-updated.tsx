import type { Metadata } from "next";
import { Inter, Playfair_Display, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroller from "@/components/SmoothScroller";
import SovereignCursor from "@/components/cursor/SovereignCursor";
import GenesisPreloader from "@/components/preloader/GenesisPreloader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Certum Prime | Genesis Protocol",
  description: "Sovereign Wealth Operating System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" 
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {/* ========================================
            PRELOADER - Cinematographic Entrance
            ======================================== */}
        <GenesisPreloader 
          minDuration={2500}
          onComplete={() => {
            // Optional: trigger any post-load animations
            console.log("Genesis Protocol Initialized");
          }}
        />

        {/* ========================================
            CURSOR - Premium Custom Cursor
            ======================================== */}
        <SovereignCursor 
          color="#d4af35"
          dotSize={8}
          circleSize={40}
          magnetic={true}
          blend={true}
          trail={false}
        />

        {/* ========================================
            SMOOTH SCROLL - Lenis Integration
            ======================================== */}
        <SmoothScroller />

        {/* ========================================
            MAIN CONTENT
            ======================================== */}
        {children}
      </body>
    </html>
  );
}
