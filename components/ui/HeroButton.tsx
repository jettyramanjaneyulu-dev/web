"use client";

import { ArrowRight } from "lucide-react";

export default function HeroButton({ text }: { text: string }) {
  return (
    <button
      className="
        px-8 py-3 rounded-full
        bg-transparent
        text-white
        border border-white/40
        font-bold tracking-wide text-sm
        flex items-center gap-2 group
        transition-all duration-300
        hover:bg-[#C93A7C]
        hover:border-[#C93A7C]
        hover:text-[#f0f0f0]
        hover:shadow-lg
      "
    >
      {text}
      <ArrowRight
        size={18}
        className="
          text-[#C93A7C]
          transition-transform duration-300
          group-hover:translate-x-1
          group-hover:text-[#f0f0f0]
        "
      />
    </button>
  );
}
