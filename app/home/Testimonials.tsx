"use client";

import React from "react";
import { motion } from "framer-motion";
import { Atom } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Dr. Aris Thorne",
      role: "Head of R&D, BioNexus",
      text: "The precision in their MUPS technology is unparalleled.",
      initial: "A",
    },
    {
      name: "Sarah Jenkins",
      role: "Operations Director, PharmaCore",
      text: "Exceptional quality control and consistent delivery.",
      initial: "S",
    },
    {
      name: "Marcus Vane",
      role: "Lead Scientist, SynthoLab",
      text: "Redefining expectations in high-tech manufacturing.",
      initial: "M",
    },
  ];

  // duplicate for infinite loop
  const data = [...testimonials, ...testimonials];

  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-white">
      <div className="container mx-auto px-6 relative z-10 w-full">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-block px-4 py-1 rounded-full bg-[#C93A7C]/20 border border-[#C93A7C]/30 mb-4">
            <span className="text-[#014d8b] text-xs font-bold tracking-[0.2em] uppercase">
              Global Feedback
            </span>
          </div>

          <h2
            className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#014d8b]"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Trusted by{" "}
            <span className="text-[#C93A7C]">Industry Leaders</span>
          </h2>
        </div>

        {/* Slider */}
        <div className="relative w-full max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto overflow-hidden">

          <motion.div
            className="flex"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              duration: 18,
              ease: "linear",
              repeat: Infinity,
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {data.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-full flex justify-center px-2"
              >
                {/* Card */}
                <div className="relative w-full max-w-xl h-[260px] bg-white border border-[#014d8b]/20 rounded-2xl shadow-2xl p-8">

                  {/* Icon */}
                  <div className="absolute top-0 right-0 p-4 opacity-20">
                    <Atom size={42} className="text-[#C93A7C]" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-5 h-1 bg-[#C93A7C] rounded-full"
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-[#014d8b] text-lg md:text-xl font-medium italic leading-relaxed mb-8">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-[#C93A7C] border-2 border-[#014d8b]/40 flex items-center justify-center font-bold text-white text-lg">
                      {testimonial.initial}
                    </div>
                    <div>
                      <h4 className="text-[#014d8b] font-black text-sm uppercase tracking-wide">
                        {testimonial.name}
                      </h4>
                      <p className="text-[#014d8b]/60 text-xs font-bold uppercase tracking-tighter">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </motion.div>

          {/* Edge fade */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
}
