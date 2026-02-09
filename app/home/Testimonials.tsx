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

  return (
    <section className="relative w-full h-[85vh] md:h-[90vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Background Video & Overlays */}
      {/* <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/namilifesciences.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90" />
      </div> */}

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10 w-full">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full bg-[#C93A7C]/20 border border-[#C93A7C]/30 mb-4">
            <span className="text-[#014d8b] text-xs font-bold tracking-[0.2em] uppercase">
              Global Feedback
            </span>
          </div>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#014d8b]"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Trusted by{" "}
            <span className="text-[#C93A7C]">Industry Leaders</span>
          </motion.h2>
        </div>

        {/* Infinite Horizontal Scroller */}
        <div className="relative w-full overflow-hidden">
          <div className="mx-auto max-w-[380px] md:max-w-[520px] lg:max-w-[900px] xl:max-w-[1000px]">
            <motion.div
              className="flex gap-8 py-10 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 30,
                ease: "linear",
                repeat: Infinity,
              }}
              whileHover={{ animationPlayState: "paused" }}
            >
              {[1, 2].map((loop) => (
                <div key={loop} className="flex gap-8">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="w-full max-w-[360px] md:w-[500px] h-[260px] flex-shrink-0 bg-white backdrop-blur-xl border border-[#014d8b]/20 p-8 rounded-2xl shadow-2xl relative"
                    >
                      {/* Decorative Atom Icon */}
                      <div className="absolute top-0 right-0 p-4 opacity-20">
                        <Atom size={44} className="text-[#C93A7C]" />
                      </div>

                      {/* Rating Dots */}
                      <div className="flex gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className="w-5 h-1 bg-[#C93A7C] rounded-full"
                          />
                        ))}
                      </div>

                      {/* Testimonial Text */}
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
                  ))}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Edge Fades */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/50 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/50 to-transparent z-20 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
