"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronUp, Linkedin, Instagram, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#315879] overflow-hidden pt-24 pb-16">

      {/* ================= DECORATIVE SHAPES ================= */}
      {/* <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#C93A7C]/40 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-40 w-[420px] h-[420px] bg-[#f08560]/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-white/10 blur-[120px]" /> */}

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Glass Card */}
        <div className="relative bg-white/20 backdrop-blur-2xl border border-white/30 rounded-3xl p-10 md:p-16 shadow-[0_40px_120px_rgba(0,0,0,0.35)]">

          {/* ================= TOP ROW : LOGO + SOCIAL ================= */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">

            {/* Logo */}
            <div className="relative w-20 h-20">
              <Image
                src="/assets/footer-n-logo.png"
                alt="NAMI Logo"
                fill
                className="object-contain"
              />
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[Linkedin, Instagram, Twitter, Facebook].map((Icon, i) => (
                <button
                  key={i}
                  className="w-11 h-11 flex items-center justify-center rounded-full
                             bg-white/20 hover:bg-[#C93A7C]
                             transition-all duration-300 backdrop-blur-md"
                >
                  <Icon size={18} className="text-white" />
                </button>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/20 mb-10" />

          {/* ================= MENU + BRAND ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

            {/* Brand Text */}
            <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-xl text-center md:text-left">
              Engineering high-precision pharmaceutical and nutraceutical pellet
              systems with uncompromising quality, innovation, and global
              regulatory excellence.
            </p>

            {/* Menu Items */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center md:text-left">
              {[
                "About Us",
                "Products",
                "Product List",
                "Quality",
                "Infrastructure",
                "Career",
                "Reach Us",
              ].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-white/70 hover:text-[#C93A7C]
                             text-xs md:text-sm font-semibold uppercase
                             tracking-widest transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom Divider */}
          <div className="w-full h-px bg-white/20 my-10" />

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs tracking-wider text-white/60">
            <span>
              © {new Date().getFullYear()} NAMI Life Sciences. All Rights Reserved.
            </span>

            <span className="text-white/40">
              Designed for Global Pharmaceutical Excellence
            </span>
          </div>

          {/* Scroll To Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="absolute -top-6 left-1/2 -translate-x-1/2
                       bg-white/80 hover:bg-[#C93A7C]
                       p-3 rounded-full shadow-xl
                       transition-all duration-300"
          >
            <ChevronUp className="text-[#315879] hover:text-white" size={22} />
          </button>

        </div>
      </div>
    </footer>
  );
}