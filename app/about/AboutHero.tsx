export default function AboutHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center text-center px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b2b45] via-[#123d5a] to-[#0b2b45]" />

      <div className="relative max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold">
          About <span className="text-pink-500">NAMI Life Sciences</span>
        </h1>
        <p className="mt-6 text-lg text-gray-300">
          Driven by science. Guided by ethics. Focused on improving lives through
          innovative pharmaceutical solutions.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="px-6 py-3 rounded-full bg-pink-500 hover:bg-pink-600 transition">
            Our Journey
          </button>
          <button className="px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 transition">
            Our Values
          </button>
        </div>
      </div>
    </section>
  );
}
