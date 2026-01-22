import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NewsTicker() {
  return (
    <section
      id="news-media"
      className="relative overflow-hidden py-10"
    >
      {/* background blur layer */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f2a44]/40 via-[#163b5c]/40 to-[#0f2a44]/40 backdrop-blur-2xl" />

      {/* floating glow */}
      <div className="absolute -top-20 left-1/3 w-72 h-72 bg-[#C93A7C]/20 rounded-full blur-3xl" />
      <div className="absolute top-10 right-1/4 w-60 h-60 bg-[#fecf83]/20 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-6">
        <div className="max-w-6xl mx-auto rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl px-6 py-6 md:px-10 md:py-8 shadow-xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          {/* Left */}
          <div className="flex items-start gap-4">
            {/* animated dot */}
            <span className="relative mt-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C93A7C] opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C93A7C]" />
            </span>

            <div>
              <p className="text-xs tracking-widest uppercase text-[#fecf83] font-bold">
                22 Dec 2025
              </p>

              <p className="mt-1 text-sm md:text-base text-white/90 leading-relaxed max-w-3xl">
                Nami Life Sciences operates with strong ethical principles and
                scientific excellence, delivering reliable pharmaceutical
                solutions to global partners.
              </p>
            </div>
          </div>

          {/* Right CTA */}
          <Link
            href="#"
            className="group inline-flex items-center gap-2 self-start md:self-center text-xs font-bold uppercase tracking-wider text-white hover:text-[#C93A7C] transition"
          >
            Read more
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
