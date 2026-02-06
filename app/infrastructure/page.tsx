"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import {
  Factory,
  Settings,
  Microscope,
  ShieldCheck,
  Layers,
} from "lucide-react";
import InfrastructureGalleryPage from "@/components/InfrastructureGallery";

export default function InfrastructurePage() {
  return (
    <main className="relative bg-[#f6f7fb] overflow-hidden">

{/* ================= HERO / BANNER ================= */}
<section
  className="
    relative
    min-h-[65vh] sm:min-h-[70vh] md:min-h-[75vh] lg:min-h-[80vh]
    flex items-center justify-center
    overflow-hidden
  "
>
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center scale-105"
    style={{
      backgroundImage: "url('/assets/images/infra/infra6.png')",
    }}
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Content */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="
      relative z-10
      text-center
      w-full
      px-4 sm:px-6 md:px-8
      max-w-[92%] sm:max-w-xl md:max-w-3xl lg:max-w-4xl
    "
  >
    <h1
      className="
        text-2xl sm:text-3xl md:text-4xl lg:text-5xl
        font-extrabold
        text-[#ff4d9d]
        tracking-wide
        uppercase
      "
    >
      Infrastructure
    </h1>

    <p
      className="
        mt-3 sm:mt-4 md:mt-6
        text-sm sm:text-base md:text-lg
        text-white/90
        leading-relaxed
      "
    >
      Advanced Facility. Integrated Capabilities.
    </p>
  </motion.div>

  {/* ================= CURVED BOTTOM ================= */}
  <svg
    className="absolute bottom-0 left-0 w-full h-[60px] sm:h-[80px] md:h-[100px]"
    viewBox="0 0 1440 120"
    preserveAspectRatio="none"
  >
    <path
      d="M0 40C120 80 360 120 720 120C1080 120 1320 80 1440 40V120H0Z"
      fill="#f6f7fb"
    />
  </svg>

</section>



      {/* ================= INTRO (PREMIUM DESIGN) ================= */}
<section className="relative py-28 px-6 overflow-hidden">

  {/* Floating Gradient Orbs */}
  {/* <div className="absolute -top-24 -left-24 w-96 h-96 bg-pink-300/30 rounded-full blur-3xl" />
  <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl" /> */}

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center"
  >

    {/* Left – Visual Accent */}
    <div className="relative h-[260px] rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-[2px] shadow-2xl">
      <div className="h-full w-full rounded-3xl bg-white flex flex-col justify-center p-10">
        <span className="uppercase tracking-widest text-sm text-indigo-600 font-semibold">
          About Nami Life Sciences
        </span>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          Precision Manufacturing <br />
          <span className="text-[#291684]">Built for Global Standards</span>
        </h2>
      </div>
    </div>

    {/* Right – Content */}
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute -left-6 top-2 h-full w-[2px] bg-gradient-to-b from-indigo-600 to-pink-500 rounded-full" />

      <p className="text-lg text-gray-700 leading-relaxed">
        Nami Life Sciences operates a dedicated, state-of-the-art manufacturing
        facility in India, purpose-built for pharmaceutical and nutraceutical
        pellet manufacturing.
      </p>

      <p className="mt-6 text-gray-600 leading-relaxed">
        Our infrastructure seamlessly supports development-scale to
        commercial-scale production, ensuring exceptional accuracy,
        operational efficiency, and uncompromised regulatory compliance.
      </p>

      {/* Highlight Tags */}
      <div className="mt-8 flex flex-wrap gap-3">
        {[
          "GMP Compliant",
          "Scalable Production",
          "High Precision",
          "Global Quality"
        ].map((tag) => (
          <span
            key={tag}
            className="px-4 py-2 rounded-full text-sm font-medium bg-indigo-50 text-[#291684] border border-indigo-100"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

  </motion.div>
</section>

{/* ===================== FLOATING CAPSULES ===================== */}
      <FloatingCapsules />
      {/* ================= INFRASTRUCTURE HIGHLIGHTS ================= */}
<section className="relative py-28 px-6 overflow-hidden ]">

  {/* Background Accents */}
  {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[1px] bg-gradient-to-r from-transparent via-pink-400/40 to-transparent" />
  <div className="absolute -top-32 -right-32 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl" />
  <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl" /> */}

  <div className="relative max-w-7xl mx-auto">

    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center mb-20"
    >
      <span className="uppercase tracking-[0.3em] text-sm text-pink-600 font-semibold">
        Our Capabilities
      </span>
      <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900">
        Infrastructure <span className="text-pink-600">Highlights</span>
      </h2>
      <p className="mt-6 max-w-2xl mx-auto text-gray-600">
        Designed for precision, scalability, and uncompromised pharmaceutical quality.
      </p>
    </motion.div>

    {/* Highlights Flow */}
    <div className="space-y-14">

      {highlights.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className={`relative group grid md:grid-cols-[120px_1fr] gap-10 items-start
            ${index % 2 !== 0 ? "md:ml-24" : ""}`}
        >

          {/* Index + Icon */}
          <div className="relative flex flex-col items-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-500 to-indigo-600 flex items-center justify-center text-white shadow-xl">
              <item.icon size={30} />
            </div>

            <span className="mt-4 text-4xl font-extrabold text-gray-200 group-hover:text-pink-500 transition">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Content Card */}
          <div className="relative">
            {/* Gradient Border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 opacity-0 group-hover:opacity-100 blur-sm transition" />

            <div className="relative bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl p-10 shadow-lg group-hover:shadow-2xl transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed max-w-2xl">
                {item.desc}
              </p>
            </div>
          </div>

        </motion.div>
      ))}

    </div>

  </div>
</section>
<InfrastructureGalleryPage />

    {/* ================= SIGNATURE FOOTNOTE ================= */}
<section className="relative py-16 px-6 overflow-hidden">

  {/* Ambient Background */}
  {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fff0f7] to-transparent" />
  <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-[#ff4d9d]/20 rounded-full blur-3xl" /> */}

  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    className="relative max-w-4xl mx-auto text-center"
  >
    {/* Decorative Line */}
    <div className="flex justify-center mb-6">
      <span className="h-[3px] w-20 bg-gradient-to-r from-transparent via-[#ff4d9d] to-transparent rounded-full" />
    </div>

    {/* Statement */}
    <p className="text-xl md:text-2xl font-medium text-gray-900 leading-relaxed">
      Every process is executed by experienced scientists, engineers,  
      and quality professionals — ensuring
    </p>

    {/* Highlighted Line */}
    <p className="mt-4 text-2xl md:text-3xl font-extrabold text-[#ff4d9d] tracking-tight">
      precision in every pellet.
    </p>

    {/* Subtle Trust Cue */}
    <motion.span
      initial={{ width: 0 }}
      whileInView={{ width: "120px" }}
      viewport={{ once: true }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="block mx-auto mt-6 h-[2px] bg-[#ff4d9d]/60 rounded-full"
    />
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

      /* ===================== FLOATING CAPSULES – FULL PAGE ===================== */

const capsuleColors = [
  "from-pink-400 to-rose-500",
  "from-cyan-400 to-blue-500",
  "from-purple-400 to-indigo-500",
];

type Capsule = {
  x: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
};

function FloatingCapsules() {
  const [capsules, setCapsules] = useState<Capsule[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 18 }).map((_, i) => ({
      x: Math.random() * 100,
      size: 24 + Math.random() * 26,
      duration: 22 + Math.random() * 18,
      delay: Math.random() * 10,
      color: capsuleColors[i % capsuleColors.length],
    }));

    setCapsules(generated);
  }, []);

  if (!capsules.length) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {capsules.map((cap, i) => (
        <motion.div
          key={i}
          initial={{
            x: `${cap.x}vw`,
            y: "110vh",
            opacity: 0,
            rotate: 0,
          }}
          animate={{
            y: "-20vh",
            opacity: [0, 0.35, 0.35, 0],
            rotate: 360,
          }}
          transition={{
            duration: cap.duration,
            delay: cap.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          className={`absolute rounded-full bg-gradient-to-br ${cap.color} blur-[0.4px]`}
          style={{
            width: cap.size * 2,
            height: cap.size,
          }}
        />
      ))}
    </div>
  );
}