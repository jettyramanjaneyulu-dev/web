"use client";

import { Layers, Cpu, Factory } from "lucide-react";

const capabilities = [
  {
    title: "Formulation Development",
    description:
      "Advanced pellet design, customized release profiles, and optimized drug performance.",
    icon: Layers,
  },
  {
    title: "Technology-Driven Manufacturing",
    description:
      "State-of-the-art infrastructure ensuring consistency, scalability, and compliance.",
    icon: Cpu,
  },
  {
    title: "Commercial Manufacturing",
    description:
      "End-to-end support from pilot scale to large-volume production.",
    icon: Factory,
  },
];

export default function CapabilitiesSection() {
  return (
    <section className="bg-gradient-to-br from-pink-100 via-white to-pink-200 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl text-[#c93a7c] font-semibold mb-12">
          End-to-End Capabilities
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  bg-white/70 backdrop-blur-xl
                  p-8 rounded-xl
                  border border-white/40
                  shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                  hover:shadow-[0_20px_50px_rgba(201,58,124,0.25)]
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >
                <Icon className="w-8 h-8 text-[#c93a7c] mb-4" />

                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-neutral-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
