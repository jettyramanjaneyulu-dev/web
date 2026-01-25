"use client";


import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Building2,
  Factory,
  ExternalLink,
} from "lucide-react";

export default function ReachUsPage() {
  return (
    <main className="relative bg-[#f6f7fb] overflow-hidden">

   {/* ================= HERO ================= */}
<section className="relative h-[70vh] md:h-[75vh] flex items-center justify-center overflow-hidden bg-[#f6f7fb]">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/assets/quality-banner.jpeg')" }}
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Content */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative z-10 text-center max-w-4xl px-6"
  >
    <h1 className="text-4xl md:text-5xl font-extrabold text-[#ff4d9d] tracking-wide uppercase">
      Reach Us
    </h1>

    <p className="mt-6 text-base md:text-lg text-white/90">
      Let’s Build Better Solutions Together
    </p>
  </motion.div>

  {/* Bottom Wave – GAP KILLER */}
  <svg
    className="absolute -bottom-[1px] left-0 w-full block"
    viewBox="0 0 1440 120"
    preserveAspectRatio="none"
  >
    <path
      d="M0 60L60 65C120 70 240 80 360 78C480 75 600 60 720 48C840 35 960 25 1080 30C1200 35 1320 55 1380 65L1440 75V120H0V60Z"
      fill="#f6f7fb"
    />
  </svg>

</section>


     {/* ================= COMPANY / CONNECT ================= */}
<section className="relative py-24 px-6 overflow-hidden">

  {/* Background Glow */}
  <div className="absolute inset-0">
    <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-pink-300/30 rounded-full blur-[120px]" />
    <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-purple-300/30 rounded-full blur-[120px]" />
  </div>

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="relative max-w-5xl mx-auto"
  >
    <div className="relative  backdrop-blur-0xl border border-white/40 rounded-[32px] shadow-2xl overflow-hidden">

      {/* Accent Strip */}
      <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-pink-500 to-purple-600" />

      <div className="p-10 md:p-14 text-center">

        <span className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-medium bg-pink-100 text-pink-700">
          Let’s Connect
        </span>

        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-wide">
          NAMI LIFESCIENCES PVT. LTD
        </h2>

        <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-relaxed">
          We welcome collaborations, strategic partnerships, and business
          inquiries. Our team is ready to support your pharmaceutical and
          nutraceutical manufacturing needs.
        </p>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <button className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all">
            Get in Touch
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-white/10 transition" />
          </button>
        </div>

      </div>
    </div>
  </motion.div>
</section>

 {/* ===================== FLOATING CAPSULES ===================== */}
      <FloatingCapsules />

     {/* ================= ADDRESSES – PREMIUM ================= */}
<section className="relative py-24 px-6 overflow-hidden">

  {/* Background Effects */}
  <div className="absolute inset-0">
    <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-pink-300/30 blur-[120px]" />
    <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-purple-300/30 blur-[120px]" />
  </div>

  <div className="relative max-w-7xl mx-auto">

    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <span className="inline-block px-4 py-1 rounded-full bg-pink-100 text-pink-700 text-sm font-medium">
        Our Locations
      </span>
      <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-gray-900">
        Manufacturing & Corporate Presence
      </h2>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-10 items-stretch">

      {/* ===== FACTORY – FEATURED ===== */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative bg-gradient-to-br from-[#ff4d9d]/10 to-purple-100 backdrop-blur-0xl border border-white/50 rounded-[32px] p-10 shadow-2xl"
      >
        {/* Icon */}
        <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff4d9d] to-purple-600 text-white shadow-lg">
          <Factory size={28} />
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Manufacturing Facility
        </h3>

        <p className="text-gray-700 leading-relaxed text-lg">
          Plot No. 47B, Phase 3, Biotech Park,  
          Mulugu, Karkapatla,  
          Telangana – 502279
        </p>

        <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-pink-600">
          <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
          WHO-GMP & Regulatory Compliant Facility
        </div>
      </motion.div>

      {/* ===== OFFICE – CLEAN & ELEGANT ===== */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative bg-gradient-to-br from-[#ff4d9d]/10 backdrop-blur-0xl border border-white/40 rounded-[28px] p-10 shadow-xl"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-purple-100 text-purple-700">
            <Building2 size={26} />
          </div>
          <h3 className="text-xl font-bold text-gray-900">
            Corporate Office – Hyderabad
          </h3>
        </div>

        <p className="text-gray-600 leading-relaxed text-lg">
          Suite 104, Thakur Mansion Lane,  
          Somajiguda,  
          Hyderabad – 500082
        </p>

        <div className="mt-8 text-sm text-gray-500">
          Business development & client coordination
        </div>
      </motion.div>

    </div>
  </div>
</section>


     {/* ================= MAPS – PREMIUM LOCATE US ================= */}
<section className="relative py-28 px-6 overflow-hidden">

  {/* Ambient Background */}
  <div className="absolute inset-0">
    <div className="absolute left-0 top-1/3 w-[350px] h-[350px] bg-pink-300/30 blur-[140px]" />
    <div className="absolute right-0 top-1/2 w-[350px] h-[350px] bg-purple-300/30 blur-[140px]" />
  </div>

  <div className="relative max-w-7xl mx-auto">

    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <span className="inline-block px-4 py-1 rounded-full bg-pink-100 text-pink-700 text-sm font-medium">
        Locate Us
      </span>
      <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-gray-900">
        Find Nami Lifesciences on Map
      </h2>
    </motion.div>

    <div className="space-y-12">

      {/* ===== FACTORY MAP – FEATURED ===== */}
      <motion.a
        href="https://maps.app.goo.gl/LbcM7rQHYN8LaWCe8?g_st=iw"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -6 }}
        className="group relative block rounded-[36px] overflow-hidden bg-white/70 backdrop-blur-2xl border border-white/40 shadow-2xl"
      >
        {/* Visual Map Placeholder */}
        <div className="relative h-64 md:h-72 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 flex items-center justify-center">
          <MapPin
            size={64}
            className="text-[#ff4d9d] drop-shadow-lg group-hover:scale-110 transition"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
        </div>

        {/* Content */}
        <div className="relative p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Manufacturing Facility
            </h3>
            <p className="text-gray-600 max-w-xl leading-relaxed">
              Plot No. 47B, Phase 3, Biotech Park, Mulugu, Karkapatla, Telangana – 502279
            </p>
          </div>

          <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#ff4d9d] to-purple-600 text-white font-semibold shadow-lg">
            Open in Google Maps
            <ExternalLink size={18} />
          </span>
        </div>
      </motion.a>

      {/* ===== OFFICE MAP ===== */}
      <motion.a
        href="https://maps.app.goo.gl/c3WinavtEennYdiM6"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -6 }}
        className="group relative block rounded-[32px] overflow-hidden bg-white/60 backdrop-blur-xl border border-white/40 shadow-xl"
      >
        <div className="relative h-56 bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center">
          <MapPin
            size={56}
            className="text-purple-600 group-hover:scale-110 transition"
          />
        </div>

        <div className="p-8 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              Hyderabad Corporate Office
            </h3>
            <p className="text-gray-600 mt-1">
              Somajiguda, Hyderabad – 500082
            </p>
          </div>

          <ExternalLink className="text-purple-600" />
        </div>
      </motion.a>

    </div>
  </div>
</section>


    {/* ================= CONTACT – PREMIUM CLICKABLE ================= */}
<section className="relative py-24 px-6 overflow-hidden">

  {/* Ambient Glow */}
  <div className="absolute inset-0">
    <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-pink-300/30 blur-[140px]" />
  </div>

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="relative max-w-6xl mx-auto"
  >

    {/* Header */}
    <div className="text-center mb-14">
      <span className="inline-block px-4 py-1 rounded-full bg-pink-100 text-pink-700 text-sm font-medium">
        Get in Touch
      </span>
      <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-gray-900">
        Let’s Start a Conversation
      </h2>
    </div>

    {/* Contact Cards */}
    <div className="grid gap-8 md:grid-cols-3">

      {/* PHONE */}
      <motion.a
        href="tel:+918008080279"
        whileHover={{ y: -6 }}
        className="group relative  backdrop-blur-0xl border border-white/40 rounded-[28px] p-8 shadow-xl transition"
      >
        <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff4d9d] to-purple-600 text-white shadow-lg mb-6">
          <Phone size={26} />
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
        <p className="text-gray-600 text-sm mb-4">
          Speak directly with our team
        </p>

        <span className="font-semibold text-[#ff4d9d]">
          +91 80080 80279
        </span>

        <div className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 bg-gradient-to-br from-pink-500/10 to-purple-500/10 transition" />
      </motion.a>

      {/* EMAIL */}
      <motion.a
        href="mailto:info@namilifesciences.com"
        whileHover={{ y: -6 }}
        className="group relative  backdrop-blur-0xl border border-white/40 rounded-[28px] p-8 shadow-xl transition"
      >
        <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff4d9d] to-purple-600 text-white shadow-lg mb-6">
          <Mail size={26} />
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
        <p className="text-gray-600 text-sm mb-4">
          Share your requirements with us
        </p>

        <span className="font-semibold text-[#ff4d9d] break-all">
          info@namilifesciences.com
        </span>

        <div className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 bg-gradient-to-br from-pink-500/10 to-purple-500/10 transition" />
      </motion.a>

      {/* WEBSITE */}
      <motion.a
        href="https://www.namilifesciences.com"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -6 }}
        className="group relative backdrop-blur-0xl border border-white/40 rounded-[28px] p-8 shadow-xl transition"
      >
        <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff4d9d] to-purple-600 text-white shadow-lg mb-6">
          <Globe size={26} />
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2">Visit Website</h3>
        <p className="text-gray-600 text-sm mb-4">
          Explore our capabilities & products
        </p>

        <span className="font-semibold text-[#ff4d9d]">
          www.namilifesciences.com
        </span>

        <div className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 bg-gradient-to-br from-pink-500/10 to-purple-500/10 transition" />
      </motion.a>

    </div>
  </motion.div>
</section>

    </main>
  );
}



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