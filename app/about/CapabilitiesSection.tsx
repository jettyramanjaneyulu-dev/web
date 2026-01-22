const capabilities = [
  {
    title: "Formulation Development",
    description:
      "Advanced pellet design, customized release profiles, and optimized drug performance.",
  },
  {
    title: "Technology-Driven Manufacturing",
    description:
      "State-of-the-art infrastructure ensuring consistency, scalability, and compliance.",
  },
  {
    title: "Commercial Manufacturing",
    description:
      "End-to-end support from pilot scale to large-volume production.",
  },
];

export default function CapabilitiesSection() {
  return (
    <section className="bg-neutral-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-12">
          End-to-End Capabilities
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
