import Image from "next/image";
import { BookOpen } from "lucide-react";

export default function StorySection() {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-100 via-white to-pink-200">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* Text Content */}
        <div
          className="
            bg-white/70 backdrop-blur-xl
            rounded-2xl border border-white/40
            shadow-lg p-8
          "
        >
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-7 h-7 text-[#c93a7c]" />
            <h2 className="text-3xl font-semibold text-[#c93a7c]">
              About Nami Life Sciences
            </h2>
          </div>

          <p className="text-neutral-700 leading-relaxed mb-4">
            Nami Life Sciences is a technology-driven pharmaceutical and
            nutraceutical company specializing in pellet-based drug delivery
            systems. In a highly competitive global market, we help our partners
            stand out through scientifically superior formulations, advanced
            technologies, and consistent performance.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-4">
            For years, we have partnered with pharmaceutical and nutraceutical
            companies to develop products that are not only scientifically
            sound, but also technologically advanced and commercially viable.
          </p>

          <p className="text-neutral-700 leading-relaxed">
            At Nami, we don’t just manufacture pellets — we engineer precision,
            performance, and reliability into every product.
          </p>
        </div>

        {/* Image */}
        <div
          className="
            relative h-[420px]
            rounded-2xl overflow-hidden
            bg-white/30 backdrop-blur-xl
            border border-white/40
            shadow-xl
          "
        >
          <Image
            src="/assets/lab-1.jpeg"
            alt="Pharmaceutical R&D"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}
