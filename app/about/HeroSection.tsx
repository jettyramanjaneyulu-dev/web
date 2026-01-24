import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-pink-100 via-white to-pink-200">

      {/* Background Image */}
      <Image
        src="/assets/Pharmaceuticals1.png"
        alt="Nami Life Sciences Laboratory"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div
          className="
            inline-block
            bg-white/25 backdrop-blur-xl
            border border-white/40
            rounded-3xl
            px-10 py-12
            shadow-[0_30px_80px_rgba(0,0,0,0.25)]
          "
        >
          {/* Lucide Icon */}
          <Sparkles className="w-8 h-8 text-[#c93a7c] mb-6" />

          <h1 className="text-5xl md:text-6xl font-light text-[#c93a7c] leading-tight">
            Precision in <br />
            <span className="font-semibold">Every Pellet</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-neutral-200">
            Engineering advanced pellet-based drug delivery systems that combine
            science, technology, and reliability.
          </p>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[120px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 C240,120 480,0 720,32 960,64 1200,96 1440,32 L1440,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
