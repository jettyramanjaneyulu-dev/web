"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Sparkles, Activity, FlaskConical } from "lucide-react";

/* ================= VARIANTS ================= */
const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function ProductsPage() {
  return (
    <main className="bg-gradient-to-br from-pink-100 via-white to-pink-200 overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/Core.jpeg"
          alt="Pharmaceutical Pellets"
          fill
          priority
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/40" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            relative z-10 text-center px-8 max-w-4xl
            bg-white/30 backdrop-blur-xl
            rounded-3xl border border-white/40
            shadow-[0_30px_80px_rgba(0,0,0,0.25)]
            py-12
          "
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-pink-500 uppercase">
            Products
          </h1>
          <p className="mt-4 text-white text-lg md:text-xl">
            Pharmaceutical Pellets & Nutraceutical Beadlets
          </p>
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 90" className="w-full h-[90px]" preserveAspectRatio="none">
            <path
              fill="#ffffff"
              d="M0,40 C120,70 320,90 520,70 760,40 920,20 1140,30 1280,40 1380,50 1440,55 L1440,90 L0,90 Z"
            />
          </svg>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            bg-white/70 backdrop-blur-xl
            rounded-2xl border border-white/40
            shadow-lg p-8 max-w-4xl
          "
        >
          <p className="text-gray-700 text-lg">
            Nami Life Sciences offers a comprehensive portfolio of pharmaceutical
            and nutraceutical pellets, developed to meet diverse therapeutic
            requirements with precision and scalability.
          </p>
        </motion.div>
      </section>

      {/* ================= CAPABILITIES ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold text-pink-500 uppercase mb-12"
          >
            Our Capabilities
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Sustained Release (SR) Pellets",
              "Controlled Release (CR) Pellets",
              "Delayed Release (DR) Pellets",
              "Enteric Coated (EC) Pellets",
              "Multiple-Unit Pellet Systems (MUPS)",
              "Taste-Masked Granules",
              "Blended Pellets & Fixed-Dose Combinations",
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="
                  bg-white/70 backdrop-blur-xl
                  rounded-xl p-6
                  border border-white/40
                  shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                  hover:shadow-[0_20px_50px_rgba(236,72,153,0.25)]
                  transition-all duration-300
                  flex gap-4 items-start
                "
              >
                <Sparkles className="w-6 h-6 text-pink-500 mt-1" />
                <h3 className="font-semibold text-gray-900 text-lg">
                  {item}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= THERAPEUTIC COVERAGE ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold text-pink-500 uppercase mb-12"
        >
          Therapeutic Coverage
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Cardiovascular",
            "Gastrointestinal",
            "CNS",
            "Anti-inflammatory",
            "Respiratory",
            "Metabolic Disorders",
            "Nutraceutical & Wellness",
          ].map((area, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="relative group rounded-xl p-[2px] overflow-hidden"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="
                  absolute inset-0
                  bg-[conic-gradient(from_0deg,#ec4899,#f472b6,#ec4899,#f9a8d4,#ec4899)]
                  group-hover:opacity-0
                  transition-opacity duration-300
                "
              />

              <div className="relative z-10 bg-white/80 backdrop-blur-xl rounded-xl p-6 text-center border border-white/40">
                <Activity className="w-6 h-6 text-pink-500 mx-auto mb-3" />
                <p className="font-medium text-gray-800">{area}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            max-w-5xl mx-auto px-8 text-center
            bg-white/70 backdrop-blur-xl
            rounded-3xl border border-white/40
            shadow-xl py-20
          "
        >
          <FlaskConical className="w-10 h-10 text-pink-500 mx-auto mb-6" />

          <h2 className="text-3xl font-bold text-pink-600 mb-6">
            Custom Pellet Development
          </h2>

          <p className="text-gray-700 text-lg mb-10">
            We offer custom pellet development based on client-specific
            requirements with optimized performance and compliance.
          </p>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block bg-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-600 transition shadow-lg"
          >
            Discuss Your Requirement
          </motion.a>
        </motion.div>
      </section>

    </main>
  );
}
