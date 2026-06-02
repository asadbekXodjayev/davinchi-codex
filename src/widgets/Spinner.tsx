"use client";

import { motion } from "framer-motion";

interface SpinnerProps {
  /** Diameter in pixels. */
  size?: number;
  /** Optional caption rendered beneath the spinner. */
  label?: string;
}

/**
 * Renaissance-styled loading spinner: two counter-rotating gilt rings with an
 * orbiting illuminated dot and a pulsing "L" medallion at the centre. Built on
 * transform/opacity only, so it stays smooth and cheap to animate.
 */
export function Spinner({ size = 88, label }: SpinnerProps) {
  return (
    <div className="flex flex-col items-center gap-5" role="status" aria-live="polite">
      <div className="relative" style={{ width: size, height: size }}>
        {/* Outer ring — gold arc, clockwise */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            border: "3px solid transparent",
            borderTopColor: "#D4AF77",
            borderRightColor: "#E8C77F",
            filter: "drop-shadow(0 0 6px rgba(212,175,119,0.4))",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
        />

        {/* Inner ring — counter-clockwise */}
        <motion.div
          className="absolute rounded-full"
          style={{
            inset: size * 0.16,
            border: "2px solid transparent",
            borderBottomColor: "#b8965a",
            borderLeftColor: "#D4AF77",
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
        />

        {/* Orbiting illuminated dot */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
        >
          <span
            className="absolute left-1/2 -translate-x-1/2 rounded-full bg-gold-300"
            style={{ top: -2, width: 6, height: 6, boxShadow: "0 0 10px rgba(245,216,152,0.9)" }}
          />
        </motion.div>

        {/* Centre medallion */}
        <motion.div
          className="absolute rounded-full flex items-center justify-center"
          style={{
            inset: size * 0.3,
            background: "linear-gradient(135deg, #D4AF77 0%, #E8C77F 50%, #b8965a 100%)",
            boxShadow: "0 0 14px rgba(212,175,119,0.45), inset 0 1px 2px rgba(255,255,255,0.4)",
          }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="font-cinzel font-bold text-marble-900" style={{ fontSize: size * 0.22 }}>
            L
          </span>
        </motion.div>
      </div>

      {label && (
        <motion.p
          className="font-cinzel text-[11px] uppercase tracking-[0.25em] text-gold-700"
          animate={{ opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          {label}
        </motion.p>
      )}
      <span className="sr-only">Loading</span>
    </div>
  );
}

export default Spinner;
