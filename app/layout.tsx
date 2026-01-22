import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Orbitron, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Nami Life Sciences",
  description:
    "Nami Life Sciences is a certified pharmaceutical company specializing in Pellets and Multiple Unit Pellet System (MUPS). With a strong focus on quality, safety, and innovation, the company delivers reliable pharmaceutical solutions to global partners across multiple countries.",
  keywords: [
    "Nami Life Sciences",
    "pharmaceutical company",
    "certified pharmaceutical manufacturer",
    "pellets manufacturer",
    "MUPS manufacturer",
    "multiple unit pellet system",
    "pharmaceutical pellets",
    "drug delivery systems",
    "innovative pharmaceutical solutions",
    "quality pharmaceutical products",
    "global pharma supplier",
    "pharmaceutical exports",
    "pharma manufacturing company",
    "pharma formulation development",
    "high quality drug formulations",
    "pharmaceutical innovation",
    "pharma quality standards",
    "safe pharmaceutical products",
    "pharma research and development",
    "pharma business partners",
    "international pharmaceutical company",
    "India pharmaceutical company",
    "pharma solutions provider",
    "pharmaceutical expertise",
    "pharma compliance and certification",
    "advanced pharma facilities",
    "pharma process improvement",
    "ethical pharmaceutical practices",
    "global healthcare solutions",
    "pharma manufacturing excellence",
    "pellet-based drug delivery",
  ],
  authors: [{ name: "Nami Life Sciences", url: "" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#315879] text-[#f0f0f0]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
