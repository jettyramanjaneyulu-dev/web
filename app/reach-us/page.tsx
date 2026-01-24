"use client";

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
      <section className="relative h-[70vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/quality-banner.jpeg')" }}
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

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

        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 120">
          <path
            d="M0 60L60 65C120 70 240 80 360 78C480 75 600 60 720 48C840 35 960 25 1080 30C1200 35 1320 55 1380 65L1440 75V120H0V60Z"
            fill="#f6f7fb"
          />
        </svg>
      </section>

      {/* ================= COMPANY ================= */}
      <section className="py-16 md:py-20 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/60 backdrop-blur-xl border border-white/30 rounded-3xl p-8 md:p-10 shadow-xl text-center"
        >
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            NAMI LIFESCIENCES PVT. LTD
          </h2>
          <p className="text-gray-600">
            We’d love to hear from you for collaborations, partnerships, or inquiries.
          </p>
        </motion.div>
      </section>

      {/* ================= ADDRESSES ================= */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2">
          {[
            {
              title: "Factory Address",
              icon: Factory,
              address:
                "Plot No. 47B, Phase 3, Biotech Park, Mulugu, Karkapatla, Telangana – 502279",
            },
            {
              title: "Hyderabad Office",
              icon: Building2,
              address:
                "Suite 104, Thakur Mansion Lane, Somajiguda, Hyderabad – 500082",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#ff4d9d]/10 text-[#ff4d9d]">
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{item.address}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= MAPS ================= */}
      <section className="py-20 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center text-gray-900 mb-12 md:mb-14">
            Find Us on Map
          </h2>

          <div className="grid gap-10 md:grid-cols-2">
            {[
              {
                title: "Factory Location",
                link: "https://maps.google.com/?q=Biotech+Park+Mulugu+Telangana",
              },
              {
                title: "Hyderabad Office",
                link: "https://maps.google.com/?q=Somajiguda+Hyderabad",
              },
            ].map((map, i) => (
              <motion.a
                key={i}
                href={map.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -8 }}
                className="group relative block rounded-3xl overflow-hidden bg-white/60 backdrop-blur-xl border border-white/30 shadow-xl focus:outline-none focus:ring-2 focus:ring-[#ff4d9d]"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-[#ff4d9d]/20 to-transparent" />

                <div className="h-52 md:h-56 bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center">
                  <MapPin
                    size={56}
                    className="text-[#ff4d9d] group-hover:scale-110 transition"
                  />
                </div>

                <div className="p-6 flex items-center justify-between relative z-10">
                  <h3 className="text-lg font-bold text-gray-900">
                    {map.title}
                  </h3>
                  <ExternalLink className="text-[#ff4d9d]" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT (CLICKABLE) ================= */}
      <section className="pb-20 md:pb-24 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-white/70 to-white/40 backdrop-blur-xl border border-white/30 rounded-3xl p-8 md:p-10 shadow-xl"
        >
          <ul className="space-y-6 text-gray-700 text-sm md:text-base">

            {/* PHONE */}
            <li className="flex items-center gap-4 break-all">
              <Phone className="text-[#ff4d9d]" />
              <a
                href="tel:+918008080279"
                className="hover:text-[#ff4d9d] transition font-medium"
              >
                +91 80080 80279
              </a>
            </li>

            {/* EMAIL */}
            <li className="flex items-center gap-4 break-all">
              <Mail className="text-[#ff4d9d]" />
              <a
                href="mailto:info@namilifesciences.com"
                className="hover:text-[#ff4d9d] transition font-medium"
              >
                info@namilifesciences.com
              </a>
            </li>

            {/* WEBSITE */}
            <li className="flex items-center gap-4 break-all">
              <Globe className="text-[#ff4d9d]" />
              <a
                href="https://www.namilifesciences.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff4d9d] transition font-medium"
              >
                www.namilifesciences.com
              </a>
            </li>

          </ul>
        </motion.div>
      </section>
    </main>
  );
}
