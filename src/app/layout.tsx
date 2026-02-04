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
    <html lang="pt-BR">
      <body className="antialiased bg-black text-white selection:bg-white selection:text-black">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
