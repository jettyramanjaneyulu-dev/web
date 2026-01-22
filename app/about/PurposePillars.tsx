const pillars = [
  { title: "Innovation", desc: "Advanced drug delivery & continuous R&D." },
  { title: "Quality", desc: "Zero-compromise manufacturing standards." },
  { title: "Impact", desc: "Improving patient outcomes worldwide." },
];

export default function PurposePillars() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-14">
        Our <span className="text-pink-500">Purpose</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {pillars.map((p, i) => (
          <div
            key={i}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:-translate-y-2 transition"
          >
            <h3 className="text-xl font-semibold mb-4 text-pink-400">{p.title}</h3>
            <p className="text-gray-300">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
