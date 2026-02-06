"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageTransition({ show }: { show: boolean }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          /* Initial position */
          initial={{
            ...(isMobile ? { y: "-100%" } : { x: "-100%" }),
            backgroundPosition: "0% 50%",
          }}

          /* Animate in */
          animate={{
            ...(isMobile ? { y: "0%" } : { x: "0%" }),
            backgroundPosition: ["0% 50%", "100% 50%"],
          }}

          /* Animate out */
          exit={{
            ...(isMobile ? { y: "100%" } : { x: "100%" }),
            backgroundPosition: ["100% 50%", "0% 50%"],
          }}

          transition={{
            duration: 0.35,
            ease: "easeInOut",
          }}

          style={{
            backgroundSize: "300% 300%",
          }}

          className="
            fixed inset-0 z-[9999]
            bg-gradient-to-r
            from-[#18324d]
            via-[#0077b6]
            via-[#00b4d8]
            to-[#f8b4c4]
          "
        />
      )}
    </AnimatePresence>
  );
}
