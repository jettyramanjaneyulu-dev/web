const timeline = [
  { year: "Foundation", text: "Established with a vision for quality-driven pharma solutions." },
  { year: "Growth", text: "Expanded into Pellet Formulations and MUPS technology." },
  { year: "Global Reach", text: "Serving multiple international markets with compliance." },
  { year: "Today", text: "Trusted partner for innovative drug delivery systems." },
];

export default function StoryTimeline() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-16 text-center">
        Our <span className="text-pink-500">Journey</span>
      </h2>

      <div className="relative border-l border-white/20 ml-4">
        {timeline.map((item, i) => (
          <div key={i} className="mb-12 ml-10">
            <span className="absolute -left-[9px] w-4 h-4 bg-pink-500 rounded-full" />
            <h3 className="text-xl font-semibold">{item.year}</h3>
            <p className="text-gray-300 mt-2">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
