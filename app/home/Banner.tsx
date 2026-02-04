"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HeroButton from "@/components/ui/HeroButton";

export default function HeroSection() {
  return (
    /* --- Hero Section --- */
    <section className="relative w-full h-[85vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="/assets/namilifesciences.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlays */}
        <div className="absolute inset-0 bg-[#003865]/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#003865] via-transparent to-transparent opacity-80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center mt-10">
        
        {/* Heading */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-none tracking-wide mb-6 font-[family-name:var(--font-orbitron)]"
        >
          <span className="text-[#C93A7C]">Improving Lives,</span>
          <br />
          <span className="text-[#C93A7C]">Through Dedication</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl text-lg md:text-xl text-white mb-4 font-medium"
        >
          A certified pharmaceutical company specializing in Pellets
          <br className="hidden md:block" /> and MUPS formulations.
        </motion.p>

        {/* Tagline Link */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-10"
        >
          <Link
            href="#"
            className="text-white text-xs md:text-sm font-bold tracking-widest uppercase hover:underline"
          >
            Innovation and Impact
          </Link>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <HeroButton
            text="Jobs"
            onClick={() => window.open("/career", "_blank")}
          />

          <HeroButton
            text="Partnering"
            onClick={() => window.open("/partnering", "_blank")}
          />

          <HeroButton
            text="Portfolio"
            onClick={() => window.open("/reach-us", "_blank")}
          />

          <HeroButton
            text="Brochure ⭳"
            onClick={() =>
              window.open("/assets/pdf/nami-products.pdf", "_blank")
            }
          />
        </motion.div>
      </div>
    </section>
  );
}