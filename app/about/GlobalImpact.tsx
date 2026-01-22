export default function GlobalImpact() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-10">
        Global <span className="text-pink-500">Impact</span>
      </h2>

      <div className="grid md:grid-cols-4 gap-8">
        {[
          ["🌍", "Countries Served"],
          ["🏭", "Manufacturing Units"],
          ["📦", "Product Variants"],
          ["🧪", "Years of Expertise"],
        ].map(([icon, label], i) => (
          <div key={i} className="bg-white/5 rounded-xl p-6">
            <div className="text-3xl mb-3">{icon}</div>
            <p className="text-gray-300">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
