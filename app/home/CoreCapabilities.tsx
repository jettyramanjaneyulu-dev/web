"use client";

import React, { useRef } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CoreCapabilitiesSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  return (
    <section
      id="expertise"
      className="py-24 bg-[#315879] relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* ================= LEFT COLUMN: Quality & Compliance ================= */}
        <div className="order-1 lg:order-2 relative flex justify-center">

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#C93A7C] flex items-center justify-center">
                <ArrowRight size={20} className="text-[#f0f0f0]" />
              </div>
              <h2
                className="text-3xl md:text-3xl font-black text-[#f0f0f0] uppercase tracking-wider"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                <span className="text-[#C93A7C]">QUALITY & COMPLIANCE:</span>
              </h2>
            </div>

            <ul className="space-y-4 pl-4">
              {[
                "cGMP",
                "ISO 9001 & ISO 14001",
                "WHO-GMP & Wurster Process",
                "MUPS (Multi-Unit Particulate Systems)",
                "Powder Layering Technology",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 group">
                  <CheckCircle2 size={20} className="text-[#00abd3]" />
                  <span className="text-lg text-[#f0f0f0] font-medium group-hover:text-[#C93A7C] transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ambient Glow Behind Left Column */}
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div className="w-[110%] h-[110%] bg-[#C93A7C] blur-[80px] opacity-10 rounded-full" />
          </div>
        </div>

        {/* ================= RIGHT COLUMN: Core Capabilities ================= */}
        <div className="order-2 relative">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#C93A7C] flex items-center justify-center">
                <ArrowRight size={20} className="text-[#f0f0f0]" />
              </div>
              <h2
                className="text-3xl md:text-3xl font-black text-[#f0f0f0] uppercase tracking-wider"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                <span className="text-[#C93A7C]">CORE CAPABILITIES</span>
              </h2>
            </div>

            <ul className="space-y-4 pl-4">
              {[
                "Pharmaceutical Pellets",
                "Blended Pellet Systems",
                "Nutra Spheres",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 group">
                  <CheckCircle2 size={20} className="text-[#00abd3]" />
                  <span className="text-lg text-[#f0f0f0] font-medium group-hover:text-[#C93A7C] transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
