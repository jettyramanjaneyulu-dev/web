import Image from "next/image";

export default function ValuesSection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-12">
          Our Values & Culture
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          
          <div>
            <Image
              src="/assets/value.jpeg"
              alt="Innovation"
              width={400}
              height={300}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-neutral-700">
              Continuously advancing pellet technologies through research,
              science, and innovation.
            </p>
          </div>

          <div>
            <Image
              src="/assets/value2.jpeg"
              alt="Quality"
              width={400}
              height={300}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Quality & Compliance</h3>
            <p className="text-neutral-700">
              Stringent quality systems aligned with global pharmaceutical
              standards.
            </p>
          </div>

          <div>
            <Image
              src="/assets/value3.jpeg"
              alt="Partnership"
              width={400}
              height={300}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Partnership</h3>
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
