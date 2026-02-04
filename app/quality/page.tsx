"use client";
import { useEffect, useState } from "react";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  ClipboardCheck,
  FileText,
  Repeat,
  Factory,
  BadgeCheck,
  Microscope,
  Scale,
  CheckCircle2,
} from "lucide-react";

/* ===================== QUALITY TABS DATA ===================== */

const QUALITY_TABS = [
  {
    id: "process",
    title: "In-Process Controls",
    icon: <Microscope />,
    description:
      "Robust monitoring systems are implemented at every critical stage of manufacturing to ensure process stability and product integrity.",
    points: [
      "Real-time quality checks",
      "Deviation control mechanisms",
      "Stage-wise validation",
    ],
  },
  {
    id: "validation",
    title: "Validated Processes",
    icon: <Repeat />,
    description:
      "All manufacturing and testing processes are scientifically validated to ensure reproducibility, reliability, and regulatory compliance.",
    points: [
      "Process qualification",
      "Equipment validation",
      "Re-validation protocols",
    ],
  },
  {
    id: "documentation",
    title: "Documentation Systems",
    icon: <FileText />,
    description:
      "End-to-end documentation systems ensure traceability, audit readiness, and regulatory transparency.",
    points: [
      "Batch manufacturing records",
      "Change control logs",
      "Audit-ready documentation",
    ],
  },
  {
    id: "consistency",
    title: "Batch Consistency",
    icon: <ClipboardCheck />,
    description:
      "Strict controls ensure batch-to-batch uniformity in quality, safety, and efficacy.",
    points: [
      "Statistical quality control",
      "Reproducibility assurance",
      "Release authorization checks",
    ],
  },
  {
    id: "compliance",
    title: "Regulatory Adherence",
    icon: <ShieldCheck />,
    description:
      "Compliance with Indian and international regulatory frameworks is embedded across all operations.",
    points: [
      "GMP compliance",
      "CDSCO alignment",
      "Global quality standards",
    ],
  },
];

/* ===================== PAGE ===================== */

export default function QualityPage() {
  const [activeTab, setActiveTab] = useState(QUALITY_TABS[0]);

  return (
    <main className="relative min-h-screen bg-white overflow-hidden">

      {/* ===================== BANNER ===================== */}
<section className="relative pt-32 pb-40 overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/assets/images/infra/infra3.png')" }}
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20" />

  {/* Content */}
  <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
    {/* 🔮 Transparent Glass Box */}
    <div className="mx-auto max-w-4xl rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-2xl px-8 py-12">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#c93a7c]">
        Quality & Compliance
      </h1>

      <p className="mt-5 text-xl md:text-2xl font-semibold text-[#032a33]">
        Precision. Consistency. Trust.
      </p>

      <p className="mt-6 max-w-3xl mx-auto text-white/90 leading-relaxed">
        At Nami Life Sciences, quality is not a checkpoint — it is a culture
        embedded across formulation, manufacturing, and delivery.
      </p>
    </div>
  </div>

  {/* Extra Soft Glass Layer */}
  <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />

  {/* Bottom Wave */}
  <div className="absolute bottom-0 left-0 w-full leading-none">
    <svg
      viewBox="0 0 1440 100"
      className="w-full h-[100px]"
      preserveAspectRatio="none"
    >
      <path
        d="M0,50 C360,90 720,10 1080,50 1260,70 1440,50 1440,50 L1440,100 L0,100 Z"
        fill="#ffffff"
      />
    </svg>
  </div>
</section>


      {/* ===================== FLOATING CAPSULES ===================== */}
      <FloatingCapsules />

      {/* ===================== CONTENT ===================== */}
     
      <section className="relative max-w-7xl mx-auto px-6 py-24">

        {/* HEADER WITH 3D IMAGE */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Quality
            </h2>
            <p className="mt-4 text-xl font-semibold text-pink-600">
              Built on Compliance. Driven by Consistency.
            </p>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Quality is embedded into every stage of our operations at
              <span className="font-semibold text-gray-800"> Nami Life Sciences</span>.
            </p>
          </div>

          <div className="relative flex justify-center">
            <div
              className="relative rounded-3xl  
              transform-gpu rotate-y-[-8deg] rotate-x-[4deg] "
              style={{ perspective: "1200px" }}
            >
              <Image
                src="/assets/Whatwedo.png"
                alt="Quality Assurance Laboratory"
                width={480}
                height={360}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* ===================== REGULATORY COMPLIANCE ===================== */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold text-gray-900 mb-12 flex items-center gap-3">
            <ShieldCheck className="w-7 h-7 text-pink-600" />
            Regulatory Compliance
          </h3>

          <div className="grid md:grid-cols-4 gap-8">
  <ComplianceStep
    icon={<BadgeCheck className="text-[#291684]" />}
    title="GMP"
    desc="Good Manufacturing Practices"
  />
  <ComplianceStep
    icon={<Scale className="text-[#291684]" />}
    title="DCA Telangana"
    desc="Drug Control Administration"
  />
  <ComplianceStep
    icon={<ClipboardCheck className="text-[#291684]" />}
    title="CDSCO"
    desc="Central Drugs Standard Control Organisation"
  />
  <ComplianceStep
    icon={<Factory className="text-[#291684]" />}
    title="Ministry of Health"
    desc="Government of India"
  />
</div>
        </div>

        {/* ===================== OUR QUALITY APPROACH ===================== */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold text-gray-900 mb-10">
            Our Quality Approach
          </h3>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="space-y-4">
              {QUALITY_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab)}
                  className={`w-full flex items-center gap-4 rounded-2xl p-5 border transition
                    ${
                      activeTab.id === tab.id
                        ? "bg-white shadow-xl border-pink-200 text-pink-600"
                        : "bg-white/60 border-white/40 text-gray-700 hover:bg-white"
                    }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center">
                    {tab.icon}
                  </div>
                  <span className="font-semibold">{tab.title}</span>
                </button>
              ))}
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl p-10">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  {activeTab.title}
                </h4>
                <p className="text-gray-700 mb-8">
                  {activeTab.description}
                </p>
                <ul className="space-y-4">
                  {activeTab.points.map((point, index) => (
                    <li key={index} className="flex gap-3 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-pink-600 mt-1" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>


        {/* ===================== FOOT NOTE (BUTTON STYLE) ===================== */}
        <div className="flex justify-center">
          <div className="
            group relative inline-flex items-center gap-4
            px-10 py-6 rounded-full
            bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600
            text-white font-semibold text-lg
            shadow-[0_20px_40px_rgba(236,72,153,0.35)]
            hover:shadow-[0_25px_60px_rgba(236,72,153,0.55)]
            transition-all duration-300
            hover:-translate-y-1
          ">
            <ShieldCheck className="w-7 h-7 text-white/90" />
            <span>
              Every batch manufactured undergoes stringent quality checks to ensure
              safety, efficacy, and reproducibility.
            </span>
          </div>
        </div>

      </section>
    </main>
  );
}

/* ===================== COMPONENT ===================== */

function ComplianceStep({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg p-8 text-center">
      <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
        {icon}
      </div>
      <h4 className="font-bold text-gray-900">{title}</h4>
      <p className="text-sm text-gray-600 mt-2">{desc}</p>
    </div>
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

