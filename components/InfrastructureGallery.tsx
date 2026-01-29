"use client";

import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

/* ================= IMAGE DATA ================= */
const infraImages = [
  "/assets/images/infra/infra.png",
  "/assets/images/infra/infra2.png",
  "/assets/images/infra/infra3.png",
  "/assets/images/infra/infra4.png",
  "/assets/images/infra/infra5.png",
  "/assets/images/infra/infra6.png",
  "/assets/images/infra/infra7.png",
  "/assets/images/infra/infra8.png",
];

/* ================= PAGE ================= */
export default function InfrastructureGalleryPage() {
  const controls = useAnimationControls();
  const [duration, setDuration] = useState(18); // default desktop

  /* ================= RESPONSIVE SPEED ================= */
  useEffect(() => {
    const updateSpeed = () => {
      if (window.innerWidth < 640) {
        setDuration(9);   // 📱 mobile → FAST
      } else if (window.innerWidth < 1024) {
        setDuration(13);  // 📱 tablet
      } else {
        setDuration(18);  // 💻 desktop
      }
    };

    updateSpeed();
    window.addEventListener("resize", updateSpeed);
    return () => window.removeEventListener("resize", updateSpeed);
  }, []);

  /* ================= AUTO SCROLL ================= */
  useEffect(() => {
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls, duration]);

  return (
    <main className="relative min-h-screen bg-gray-50 overflow-hidden">

      {/* ================= BACKGROUND ACCENTS ================= */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[1px] bg-gradient-to-r from-transparent via-pink-400/40 to-transparent" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl" />

      {/* ================= CONTENT ================= */}
      <section className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">

          {/* ================= HEADER ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="uppercase tracking-[0.3em] text-sm text-pink-600 font-semibold">
              Facility Tour
            </span>

            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900">
              Infrastructure <span className="text-pink-600">Gallery</span>
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-gray-600">
              Explore our world-class pharmaceutical infrastructure through a
              seamless visual experience.
            </p>
          </motion.div>

          {/* ================= AUTO + MANUAL SLIDER ================= */}
          <div className="relative overflow-hidden">

            <motion.div
              className="flex gap-4 sm:gap-6 md:gap-8 cursor-grab active:cursor-grabbing select-none"
              animate={controls}
              drag="x"
              dragElastic={0.12}
              dragMomentum={false}

              onDragStart={() => controls.stop()}

              onDragEnd={() =>
                controls.start({
                  x: ["0%", "-100%"],
                  transition: {
                    duration,
                    ease: "linear",
                    repeat: Infinity,
                  },
                })
              }
            >
              {[...infraImages, ...infraImages].map((img, index) => (
                <div
                  key={index}
                  className="
                    relative
                    min-w-[220px]
                    sm:min-w-[260px]
                    md:min-w-[320px]
                    lg:min-w-[360px]
                    h-[180px]
                    sm:h-[200px]
                    md:h-[230px]
                    lg:h-[260px]
                    rounded-3xl
                    overflow-hidden
                    bg-white
                    shadow-lg
                  "
                >
                  {/* Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 to-indigo-600/30 opacity-0 hover:opacity-100 blur-xl transition z-0" />

                  {/* Image */}
                  <Image
                    src={img}
                    alt={`Infrastructure ${index + 1}`}
                    fill
                    className="object-cover transition duration-700 hover:scale-105 z-10"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/10 z-20" />
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
}
