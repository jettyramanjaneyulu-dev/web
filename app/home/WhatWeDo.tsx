"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function WhatWeDoSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress, scrollY } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const rotate = useTransform(scrollY, [0, 1000], [0, 180]);

  return (
    <section
      id="research"
      className="py-24 relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundColor: "#315879", // ✅ section background color
        backgroundImage: "url('/assets/whatwedo-bg.png')",
      }}
    >
      <div className="container mx-auto relative z-10">
        <div className="px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

          {/* ================= LEFT CONTENT ================= */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-6">
              <h2
                className="text-4xl font-black text-[#C93A7C] uppercase tracking-wider"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                What We Do
              </h2>
              <div className="w-10 h-10 rounded-full bg-[#C93A7C] flex items-center justify-center">
                <ArrowRight className="text-[#f0f0f0] -rotate-45" size={24} />
              </div>
            </div>

            <h3
              className="text-xl md:text-2xl font-bold text-white/80 mb-6 leading-tight uppercase"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              We Engineer High-Precision Pellet Systems for Modern Drug Delivery Challenges.
            </h3>

            <p className="text-lg text-white mb-10 leading-relaxed font-medium">
              NAMI designs and manufactures pharmaceutical and nutraceutical
              pellets with precise control over release, uniformity, and
              bioavailability — built to perform at scale.
            </p>

            {/* Application Areas */}
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#C93A7C] flex items-center justify-center">
                  <ArrowRight size={16} className="text-[#f0f0f0]" />
                </div>
                <h3 className="text-[#C93A7C] font-bold text-xl uppercase tracking-wide">
                  Application Areas:
                </h3>
              </div>

              <div className="space-y-4">
                {["Pharmaceutical Solutions", "Nutraceutical Applications"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full" />
                    </div>
                    <span className="text-white font-bold text-lg group-hover:text-[#C93A7C] transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= RIGHT ROTATING CAPSULE ================= */}
          <div className="order-2 lg:order-1 relative flex justify-center items-center">
            <motion.div
              ref={sectionRef}
              style={{ rotate }}
              className="relative w-[360px] h-[360px] md:w-[520px] md:h-[520px]"
            >
              {/* IMAGE CONTAINER */}
              {(() => {
                const IMAGE_SCALE = 2;
                return (
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                    style={{
                      width: 420 * IMAGE_SCALE,
                      height: 260 * IMAGE_SCALE,
                      y: useTransform(scrollYProgress, [0, 1], [-120, 120]),
                    }}
                  >
                    <motion.img
                      src="/assets/Whatwedo.png"
                      alt="What We Do"
                      className="w-full h-full object-contain will-change-transform"
                      style={{
                        rotate: useTransform(rotate, (v) => -v),
                        scaleX: -1,
                      }}
                    />
                  </motion.div>
                );
              })()}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
