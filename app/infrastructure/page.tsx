"use client";

import { motion } from "framer-motion";
import {
  Factory,
  Settings,
  Microscope,
  ShieldCheck,
  Layers,
} from "lucide-react";

export default function InfrastructurePage() {
  return (
    <main className="relative bg-[#f6f7fb] overflow-hidden">

      {/* ================= HERO / BANNER ================= */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/quality-banner.jpeg')", // replace if needed
          }}
        />

        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" /> */}
        <div className="absolute inset-0 bg-black/50 " />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl px-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#ff4d9d] tracking-wide uppercase">
            Infrastructure
          </h1>
          <p className="mt-6 text-lg text-white/90 leading-relaxed">
            Advanced Facility. Integrated Capabilities.
          </p>
        </motion.div>

        {/* Bottom Wave */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 60L60 65C120 70 240 80 360 78C480 75 600 60 720 48C840 35 960 25 1080 30C1200 35 1320 55 1380 65L1440 75V120H0V60Z"
            fill="#f6f7fb"
          />
        </svg>
      </section>

      {/* ================= INTRO ================= */}
      <section className="relative py-20 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white/60 backdrop-blur-xl border border-white/30 rounded-3xl p-10 shadow-xl"
        >
          <p className="text-gray-700 leading-relaxed text-lg">
            Nami Life Sciences operates a dedicated, state-of-the-art
            manufacturing facility in India, purpose-built for pharmaceutical
            and nutraceutical pellet manufacturing.
          </p>

          <p className="mt-6 text-gray-600">
            Our infrastructure enables development-scale to commercial-scale
            production with accuracy, efficiency, and full regulatory
            compliance.
          </p>
        </motion.div>
      </section>

      {/* ================= HIGHLIGHTS ================= */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl font-extrabold text-[#ff4d9d] uppercase mb-12 text-center">
            Infrastructure Highlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#ff4d9d]/10 text-[#ff4d9d] mb-6">
                  <item.icon size={28} />
                </div>

                <h3 className="font-bold text-lg mb-3 text-gray-900">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= FOOT NOTE ================= */}
      <section className="pb-24 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-white/70 to-white/40 backdrop-blur-xl border border-white/30 rounded-3xl p-10 shadow-xl"
        >
          <p className="text-gray-700 leading-relaxed text-lg">
            Every process is executed by experienced scientists, engineers, and
            quality professionals — ensuring{" "}
            <span className="font-semibold text-[#ff4d9d]">
              precision in every pellet.
            </span>
          </p>
        </motion.div>
      </section>
    </main>
  );
}

/* ================= DATA ================= */

const highlights = [
  {
    icon: Factory,
    title: "Advanced Pelletization & Coating",
    desc: "High-precision pelletization and coating technologies ensuring uniformity and performance.",
  },
  {
    icon: Layers,
    title: "Modern Fluid Bed Processing",
    desc: "State-of-the-art fluid bed systems for controlled drying and coating operations.",
  },
  {
    icon: Settings,
    title: "Process Automation",
    desc: "Precision process control and automation for consistent batch-to-batch results.",
  },
  {
    icon: Microscope,
    title: "Integrated QC & QA Labs",
    desc: "In-house quality control and assurance labs aligned with global standards.",
  },
  {
    icon: ShieldCheck,
    title: "Cleanroom Environments",
    desc: "Controlled cleanroom facilities ensuring safety, hygiene, and compliance.",
  },
];
