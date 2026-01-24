import Image from "next/image";
import { Lightbulb, ShieldCheck, Handshake } from "lucide-react";

export default function ValuesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-100 via-white to-pink-200">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl text-[#c93a7c] font-semibold mb-12">
          Our Values & Culture
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {/* Innovation */}
          <div
            className="
              bg-white/70 backdrop-blur-xl
              rounded-2xl border border-white/40
              shadow-lg p-6
              hover:shadow-[0_20px_50px_rgba(201,58,124,0.25)]
              transition-all duration-300
            "
          >
            <div
              className="
                relative rounded-xl overflow-hidden
                bg-white/30 backdrop-blur-xl
                border border-white/40 mb-4
              "
            >
              <Image
                src="/assets/value.jpeg"
                alt="Innovation"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>

            <div className="flex items-center gap-3 mb-2">
              <Lightbulb className="w-6 h-6 text-[#c93a7c]" />
              <h3 className="text-xl font-semibold">Innovation</h3>
            </div>

            <p className="text-neutral-700">
              Continuously advancing pellet technologies through research,
              science, and innovation.
            </p>
          </div>

          {/* Quality */}
          <div
            className="
              bg-white/70 backdrop-blur-xl
              rounded-2xl border border-white/40
              shadow-lg p-6
              hover:shadow-[0_20px_50px_rgba(201,58,124,0.25)]
              transition-all duration-300
            "
          >
            <div
              className="
                relative rounded-xl overflow-hidden
                bg-white/30 backdrop-blur-xl
                border border-white/40 mb-4
              "
            >
              <Image
                src="/assets/value2.jpeg"
                alt="Quality"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>

            <div className="flex items-center gap-3 mb-2">
              <ShieldCheck className="w-6 h-6 text-[#c93a7c]" />
              <h3 className="text-xl font-semibold">Quality & Compliance</h3>
            </div>

            <p className="text-neutral-700">
              Stringent quality systems aligned with global pharmaceutical
              standards.
            </p>
          </div>

          {/* Partnership */}
          <div
            className="
              bg-white/70 backdrop-blur-xl
              rounded-2xl border border-white/40
              shadow-lg p-6
              hover:shadow-[0_20px_50px_rgba(201,58,124,0.25)]
              transition-all duration-300
            "
          >
            <div
              className="
                relative rounded-xl overflow-hidden
                bg-white/30 backdrop-blur-xl
                border border-white/40 mb-4
              "
            >
              <Image
                src="/assets/value3.jpeg"
                alt="Partnership"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>

            <div className="flex items-center gap-3 mb-2">
              <Handshake className="w-6 h-6 text-[#c93a7c]" />
              <h3 className="text-xl font-semibold">Partnership</h3>
            </div>

            <p className="text-neutral-700">
              Building long-term relationships with partners through trust,
              transparency, and performance.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
