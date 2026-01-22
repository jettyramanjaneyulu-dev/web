const capabilities = [
  "Pellet Formulations",
  "MUPS Technology",
  "Customized Drug Delivery",
  "Regulatory Documentation",
  "Scalable Manufacturing",
];

export default function CapabilitiesGrid() {
  return (
    <section className="py-24 px-6 bg-white/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-14">
          Core <span className="text-pink-500">Capabilities</span>
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-white/10 hover:border-pink-500 transition"
            >
              {cap}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
