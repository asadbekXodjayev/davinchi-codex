"use client";

import { motion } from "framer-motion";
import { useScroll } from "../shared/hooks/useScroll";

export function ScrollProgress() {
  const { scrollProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[1000] origin-left"
      style={{ scaleX: scrollProgress }}
    >
      <div className="h-full w-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600" />
    </motion.div>
  );
}

export default ScrollProgress;