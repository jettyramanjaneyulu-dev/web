import Image from "next/image";

export default function StorySection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        
        <div>
          <h2 className="text-3xl font-semibold mb-6">
            About Nami Life Sciences
          </h2>

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

        <div className="relative h-[420px] rounded-xl overflow-hidden">
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
