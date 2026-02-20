"use client";

import { motion } from "framer-motion";
import { useLayoutEffect, useState } from "react";

type PageTransitionProps = {
  triggerSecond?: boolean;
};

export default function PageTransition({ triggerSecond }: PageTransitionProps) {
  // null = not detected yet
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  // Detect device BEFORE paint
  useLayoutEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
  }, []);

  // ⛔ Do not render animation until device is known
  if (isMobile === null) return null;

  // Animation direction
  // Mobile  : LEFT ➜ RIGHT
  // Desktop : BOTTOM ➜ TOP
  const initial = isMobile
    ? { x: "-100%", y: 0 }
    : { x: 0, y: "100%" };

  const animate = isMobile
    ? { x: "100%", y: 0 }
    : { x: 0, y: "-100%" };

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
      {/* ================= PRIMARY PASS ================= */}
      <motion.div
        key={isMobile ? "mobile-primary" : "desktop-primary"}
        className="absolute inset-0 bg-[#0A4C8B] will-change-transform"
        initial={initial}
        animate={animate}
        transition={{
          duration: 0.9,
          ease: "easeInOut",
        }}
      />

      <motion.div
        key={isMobile ? "mobile-secondary" : "desktop-secondary"}
        className="absolute inset-0 bg-[#00B4D8] will-change-transform"
        initial={initial}
        animate={animate}
        transition={{
          duration: 0.9,
          delay: 0.15,
          ease: "easeInOut",
        }}
      />

      {/* ================= LOGO FADE ================= */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 1.2,
          times: [0, 0.35, 0.7, 1],
          ease: "easeInOut",
        }}
      >
        <img
          src="/assets/footer-n-logo.png"
          alt="Logo"
          className="h-75 w-auto"
        />
      </motion.div>

      {/* ================= SECOND PASS (OPTIONAL) ================= */}
      {triggerSecond && (
        <>
          <motion.div
            className="absolute inset-0 bg-[#0A4C8B]"
            initial={initial}
            animate={animate}
            transition={{
              duration: 0.9,
              delay: 0.3,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute inset-0 bg-[#00B4D8]"
            initial={initial}
            animate={animate}
            transition={{
              duration: 0.9,
              delay: 0.45,
              ease: "easeInOut",
            }}
          />
        </>
      )}
    </div>
  );
}
