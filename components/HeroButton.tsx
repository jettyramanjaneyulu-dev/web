"use client";

import { ArrowRight } from "lucide-react";

export default function HeroButton({ text }: { text: string }) {
  return (
    <button className="px-8 py-3 rounded-full bg-[#003865] hover:bg-[#3b1f52] text-white transition-all font-bold tracking-wide text-sm flex items-center gap-2 group border border-white/10">
      {text}
      <ArrowRight
        className="text-[#d65d7a] group-hover:translate-x-1 transition-transform"
        size={18}
      />
    </button>
  );
}
