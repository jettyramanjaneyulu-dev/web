"use client";

import {
  ShieldCheck,
  ClipboardCheck,
  FileText,
  Repeat,
  Factory,
  BadgeCheck,
  Microscope,
  Scale,
} from "lucide-react";

/* ===================== PAGE ===================== */

export default function QualityPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#f7f8fc] via-white to-[#fde7f2] overflow-hidden">

      {/* BACKGROUND BLURS */}
      {/* <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-pink-400/30 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-32 w-[380px] h-[380px] bg-indigo-300/20 rounded-full blur-3xl" /> */}

     {/* ===================== BANNER ===================== */}
<section className="relative pt-32 pb-40 overflow-hidden">

  {/* 🔹 BACKGROUND IMAGE */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('/assets/quality-banner.jpeg')",
    }}
  />

  {/* 🔹 DARK GRADIENT OVER IMAGE (for readability) */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/10" />

  {/* CONTENT */}
  <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#c93a7c]">
      Quality & Compliance
    </h1>

    <p className="mt-5 text-xl md:text-2xl font-semibold text-pink-300">
      Precision. Consistency. Trust.
    </p>

    <p className="mt-6 max-w-3xl mx-auto text-white/90 leading-relaxed">
      At Nami Life Sciences, quality is not a checkpoint —
      it is a culture embedded across formulation,
      manufacturing, and delivery.
    </p>
  </div>

  {/* 🔹 GLASS OVERLAY (optional – keep if you like frosted look) */}
  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />

  {/* 🌊 WAVE CURVE */}
  <div className="absolute bottom-0 left-0 w-full leading-none">
    <svg
      viewBox="0 0 1440 120"
      className="w-full h-[120px]"
      preserveAspectRatio="none"
    >
      <path
        d="M0,64 C240,128 480,0 720,16 960,32 1200,96 1440,64 L1440,120 L0,120 Z"
        fill="#ffffff"
      />
    </svg>
  </div>
</section>


      {/* ===================== CONTENT ===================== */}
      <section className="relative max-w-7xl mx-auto px-6 py-24">

        {/* HEADER */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Quality
          </h2>

          <p className="mt-4 text-xl font-semibold text-pink-600">
            Built on Compliance. Driven by Consistency.
          </p>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Quality is embedded into every stage of our operations at
            <span className="font-semibold text-gray-800"> Nami Life Sciences</span>.
            Our systems are designed to ensure safety, reliability, and
            global regulatory compliance.
          </p>
        </div>

        {/* COMPLIANCE GLASS CARD */}
        <div className="mb-20 rounded-3xl border border-white/40 bg-white/60 backdrop-blur-xl shadow-xl p-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <ShieldCheck className="w-7 h-7 text-pink-600" />
            Regulatory Compliance
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ComplianceItem
              icon={<BadgeCheck />}
              title="GMP"
              desc="Good Manufacturing Practices"
            />
            <ComplianceItem
              icon={<Scale />}
              title="DCA Telangana"
              desc="Drug Control Administration"
            />
            <ComplianceItem
              icon={<ClipboardCheck />}
              title="CDSCO"
              desc="Central Drugs Standard Control Organisation"
            />
            <ComplianceItem
              icon={<Factory />}
              title="Ministry of Health"
              desc="Government of India"
            />
          </div>
        </div>

        {/* QUALITY APPROACH */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-10">
            Our Quality Approach
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <QualityCard
              icon={<Microscope />}
              title="In-Process Controls"
              desc="Robust controls at every manufacturing stage."
            />
            <QualityCard
              icon={<Repeat />}
              title="Validated Processes"
              desc="Manufacturing processes validated for reliability."
            />
            <QualityCard
              icon={<FileText />}
              title="Documentation Systems"
              desc="Comprehensive and auditable documentation."
            />
            <QualityCard
              icon={<ClipboardCheck />}
              title="Batch Consistency"
              desc="Strict batch-to-batch reproducibility."
            />
            <QualityCard
              icon={<ShieldCheck />}
              title="Regulatory Adherence"
              desc="Aligned with domestic and global standards."
            />
            <QualityCard
              icon={<BadgeCheck />}
              title="Quality Assurance"
              desc="Continuous monitoring for safety and efficacy."
            />
          </div>
        </div>

        {/* FOOT NOTE */}
        <div className="rounded-3xl border border-white/40 bg-white/60 backdrop-blur-xl shadow-lg p-10 max-w-4xl">
          <p className="text-gray-700 leading-relaxed">
            Every batch manufactured at Nami undergoes stringent quality
            checks to ensure safety, efficacy, and reproducibility —
            meeting both domestic and global standards.
          </p>
        </div>
      </section>
    </main>
  );
}

/* ===================== COMPONENTS ===================== */

function ComplianceItem({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl bg-white/70 backdrop-blur-lg border border-white/40 p-6 shadow-md">
      <div className="text-pink-600 mb-4">{icon}</div>
      <h4 className="font-bold text-gray-900">{title}</h4>
      <p className="text-sm text-gray-600 mt-1">{desc}</p>
    </div>
  );
}

function QualityCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-3xl bg-white/60 backdrop-blur-xl border border-white/40 p-8 shadow-lg hover:shadow-xl transition">
      <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center text-pink-600 mb-5">
        {icon}
      </div>
      <h4 className="font-semibold text-gray-900">{title}</h4>
      <p className="mt-2 text-gray-600 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
