import "@/styles/globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Certum Prime | Sovereign Wealth",
  description: "Advanced Wealth Management Architecture",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@200;300;400;500;600&family=Inter:wght@300;400;500&family=Space+Grotesk:wght@300;400;500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      </head>
      <body className="antialiased bg-[#FFFFFF] text-[#2D2D2D]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
