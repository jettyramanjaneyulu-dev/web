export default function WhoWeAre() {
  return (
    <section className="py-24 px-6 bg-white/5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="w-full h-72 rounded-full bg-gradient-to-br from-pink-500/30 to-blue-500/20 blur-2xl" />

        <div>
          <h2 className="text-3xl font-bold mb-6">
            Who <span className="text-pink-500">We Are</span>
          </h2>
          <p className="text-gray-300 mb-6">
            NAMI Life Sciences is a research-driven pharmaceutical organization
            delivering safe, effective, and compliant healthcare solutions.
          </p>

          <ul className="space-y-3 text-gray-200">
            <li>✔ Research-focused development</li>
            <li>✔ WHO-GMP compliant manufacturing</li>
            <li>✔ Global quality standards</li>
            <li>✔ Patient-first philosophy</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
