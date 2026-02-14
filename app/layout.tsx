import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron, Roboto } from "next/font/google";
import "./globals.css";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
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

export const metadata = {
  title: "Pellet-Based Drug Delivery Manufacturer | Nami Life Sciences India",
  description:
    "Nami Life Sciences is a technology-driven pharmaceutical and nutraceutical company specializing in pellet-based drug delivery systems, SR, CR, DR, EC pellets, and MUPS manufacturing in India.",
  keywords: [
    "pharmaceutical pellets manufacturer",
    "nutraceutical pellets",
    "pellet based drug delivery",
    "SR pellets",
    "CR pellets",
    "enteric coated pellets",
    "MUPS pellets",
    "taste masked granules",
    "pharma contract manufacturing India"
  ],
  openGraph: {
    title: "Precision in Every Pellet | Nami Life Sciences",
    description:
      "Advanced pharmaceutical and nutraceutical pellet manufacturing with global regulatory compliance.",
    url: "https://www.namilifesciences.com",
    siteName: "Nami Life Sciences",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nami Life Sciences Manufacturing Facility",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${orbitron.variable}
          ${roboto.variable}
          bg-[#315879]
          text-[#f0f0f0]
        `}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
