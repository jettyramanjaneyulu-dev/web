"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function PageTransition({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999]
                     bg-gradient-to-r from-[#18324d] via-[#0077b6] to-[#00b4d8]"
        />
      )}
    </AnimatePresence>
  );
}