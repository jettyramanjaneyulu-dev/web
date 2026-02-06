"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Pharmaceuticals() {
  return (
    <section id="research" className="py-24 bg-[#315879] overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-4xl font-black text-[#C93A7C] uppercase tracking-wider">
                Pharmaceuticals
              </h2>
              <div className="w-10 h-10 rounded-full bg-[#C93A7C] flex items-center justify-center">
                <ArrowRight className="text-white -rotate-45" size={24} />
              </div>
            </div>

            <p className="text-lg mb-10 text-white">
              We combine youthful energy with seasoned industry experience...
            </p>

            <div className="space-y-6 text-white">
              {[
                ["/assets/Formulations.jpeg", "Pellet Formulations"],
                ["/assets/Pharmaceuticals1.png", "MUPS Technology"],
              ].map(([img, title]) => (
                <div key={title} className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border">
                    <Image src={img} width={100} height={100} alt={title} />
                  </div>
                  <span className="font-bold text-lg flex items-center gap-2">
                    {title} <ArrowRight size={18} />
                  </span>
                </div>
              ))}
            </div>
          </div>

          
         {/* RIGHT */}
<div className="order-1 lg:order-2 relative flex justify-center">
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="relative w-80 h-80 md:w-[520px] md:h-[520px] rounded-full overflow-hidden shadow-xl z-10"
  >
   <div className="absolute inset-0 bg-[url('/assets/Pharmaceuticals.jpeg')] bg-cover bg-center bg-no-repeat bg-fixed" />

    {/* ✅ Gradient Overlay (RESTORED) */}
    <div className="absolute inset-0 bg-gradient-to-tr from-[#C93A7C]/30 via-transparent to-transparent mix-blend-overlay pointer-events-none" />
  </motion.div>

  {/* ✅ Ambient Glow (RESTORED) */}
  <div className="absolute inset-0 flex items-center justify-center -z-10">
    <div className="w-[110%] h-[110%] bg-[#C93A7C] blur-[80px] opacity-10 rounded-full" />
  </div>
</div>


        </div>
      </div>
    </section>
  );
}     