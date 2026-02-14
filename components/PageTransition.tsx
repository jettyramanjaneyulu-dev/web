"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type PageTransitionProps = {
  triggerSecond?: boolean;
};

export default function PageTransition({ triggerSecond }: PageTransitionProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is mobile size (usually < 768px)
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    
    // Initial check
    checkMobile();

    // Event listener for window resize
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Define variants based on device type
  // Mobile: Left (-100%) to Right (100%)
  // Desktop: Bottom (100%) to Top (-100%)
  const animationVariants = {
    initial: isMobile ? { x: "-100%", y: 0 } : { x: 0, y: "100%" },
    animate: isMobile 
      ? { x: ["-100%", "0%", "100%"], y: 0 } 
      : { x: 0, y: ["100%", "0%", "-100%"] },
  };

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden pointer-events-none">
      {/* ================= PRIMARY PASS ================= */}
      <motion.div
        className="absolute inset-0 bg-[#0A4C8B] will-change-transform"
        initial={animationVariants.initial}
        animate={animationVariants.animate}
        transition={{
          duration: 0.9,
          times: [0, 0.5, 1],
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute inset-0 bg-[#00B4D8] will-change-transform"
        initial={animationVariants.initial}
        animate={animationVariants.animate}
        transition={{
          duration: 0.9,
          delay: 0.15,
          times: [0, 0.5, 1],
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
          className="h-54 w-auto"
        />
      </motion.div>

      {/* ================= SECOND PASS (Optional Trigger) ================= */}
      {triggerSecond && (
        <>
          <motion.div
            className="absolute inset-0 bg-[#0A4C8B] will-change-transform"
            initial={animationVariants.initial}
            animate={animationVariants.animate}
            transition={{
              duration: 0.9,
              delay: 0.3, // Slightly offset from the first pass
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute inset-0 bg-[#00B4D8] will-change-transform"
            initial={animationVariants.initial}
            animate={animationVariants.animate}
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