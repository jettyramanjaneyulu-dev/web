import Link from "next/link";
import { ArrowRight } from "lucide-react";

/* --- News Ticker Section --- */
export default function NewsTicker() {
  return (
    <section
      id="news-media"
      className="bg-white/30 backdrop-blur-xl py-6 border-b border-white/30"
    >
      <div className="container mx-auto px-6">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#C93A7C]">
          22 Dec 2025
        </span>

        <p className="mt-2 text-sm md:text-base font-medium max-w-5xl">
          Nami Life Sciences operates with strong ethical principles and
          scientific excellence. We aim to provide reliable solutions to our
          business partners worldwide.
        </p>

        <Link
          href="#"
          className="flex items-center gap-1 mt-2 text-xs font-bold uppercase hover:text-[#C93A7C] transition-colors"
        >
          Read more <ArrowRight size={12} />
        </Link>
      </div>
    </section>
  );
}
