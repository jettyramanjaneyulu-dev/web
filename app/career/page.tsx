"use client";

import { motion } from "framer-motion";
import {
  Users,
  Lightbulb,
  FlaskConical,
  Globe,
  TrendingUp,
} from "lucide-react";

export default function CareerPage() {
  return (
    <main className="relative bg-[#f6f7fb] overflow-hidden">

      {/* ================= HERO / BANNER ================= */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/quality-banner.jpeg')", // replace with your image
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl px-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#ff4d9d] tracking-wide uppercase">
            Career
          </h1>
          <p className="mt-6 text-lg text-white/90 leading-relaxed">
            Grow With Science. Build With Innovation.
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
            At Nami Life Sciences, our strength lies in our people.
          </p>

          <p className="mt-6 text-gray-600">
            We are a team of scientists, engineers, formulation experts, and
            regulatory professionals who collaborate to create innovative
            pellet-based drug delivery solutions.
          </p>
        </motion.div>
      </section>

      {/* ================= WHY JOIN ================= */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl font-extrabold text-[#ff4d9d] uppercase mb-12 text-center">
            Why Join Nami?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {reasons.map((item, index) => (
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

      {/* ================= CLOSING ================= */}
      <section className="pb-24 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-white/70 to-white/40 backdrop-blur-xl border border-white/30 rounded-3xl p-10 shadow-xl"
        >
          <p className="text-gray-700 leading-relaxed text-lg">
            If you are passionate about pharmaceutical technology and
            innovation, Nami Life Sciences offers an environment where your
            expertise can make a{" "}
            <span className="font-semibold text-[#ff4d9d]">
              real impact.
            </span>
          </p>
        </motion.div>
      </section>
    </main>
  );
}

/* ================= DATA ================= */

const reasons = [
  {
    icon: FlaskConical,
    title: "Advanced Drug Delivery",
    desc: "Work on cutting-edge pellet-based pharmaceutical and nutraceutical technologies.",
  },
  {
    icon: Globe,
    title: "Global Exposure",
    desc: "Collaborate on international pharmaceutical projects and global client engagements.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Learning",
    desc: "Strong focus on continuous learning, research, and process innovation.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    desc: "Science-driven, transparent, and team-oriented work environment.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    desc: "Opportunities to grow professionally while making meaningful contributions.",
  },
];
