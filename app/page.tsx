import Banner from "./home/Banner";
import NewsTicker from "./home/NewsTicker";
import Pharmaceuticals from "./home/Pharmaceuticals";
import GlobalReach from "./home/GlobalReach";
import Manufacturing from "./home/Manufacturing";
import WhatWeDo from "./home/WhatWeDo";
import CoreCapabilities from "./home/CoreCapabilities";
import Testimonials from "./home/Testimonials";
import YoutubeSection from "./home/YoutubeSection";

/* ================= SEO META TAGS (HOMEPAGE) ================= */

export const metadata = {
  title: "Pellet-Based Drug Delivery Manufacturer | Nami Life Sciences India",
  description:
    "Nami Life Sciences is a technology-driven pharmaceutical and nutraceutical company specializing in pellet-based drug delivery systems, sustained release, controlled release, enteric-coated pellets, and MUPS manufacturing in India.",
  keywords: [
    "pellet based drug delivery",
    "pharmaceutical pellets manufacturer",
    "nutraceutical pellets",
    "sustained release pellets",
    "controlled release pellets",
    "enteric coated pellets",
    "MUPS pellets",
    "taste masked granules",
    "pharma contract manufacturing India",
    "nutraceutical beadlets manufacturer"
  ],

  openGraph: {
    title: "Precision in Every Pellet | Nami Life Sciences",
    description:
      "Technology-driven pharmaceutical and nutraceutical pellet manufacturer offering SR, CR, DR, EC pellets and MUPS solutions with global compliance.",
    url: "https://www.namilifesciences.com",
    siteName: "Nami Life Sciences",
    images: [
      {
        url: "/og-image.jpg", // put this image in /public
        width: 1200,
        height: 630,
        alt: "Nami Life Sciences Pellet Manufacturing Facility",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pellet-Based Drug Delivery Systems | Nami Life Sciences",
    description:
      "Advanced pharmaceutical and nutraceutical pellet manufacturing with precision, performance, and regulatory compliance.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* ================= PAGE COMPONENT ================= */

export default function HomePage() {
  return (
    <>
      <Banner />
      {/* <NewsTicker /> */}
      <Pharmaceuticals />
      <GlobalReach />
      <Manufacturing />
      <WhatWeDo />
      <CoreCapabilities />
      <Testimonials />
      {/* <YoutubeSection /> */}
    </>
  );
}
