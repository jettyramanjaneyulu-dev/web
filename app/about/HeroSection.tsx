import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <Image
        src="/assets/Pharmaceuticals1.png"
        alt="Nami Life Sciences Laboratory"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-light text-white leading-tight">
          Precision in <br />
          <span className="font-semibold">Every Pellet</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-neutral-200">
          Engineering advanced pellet-based drug delivery systems that combine
          science, technology, and reliability.
        </p>
      </div>
    </section>
  );
}
