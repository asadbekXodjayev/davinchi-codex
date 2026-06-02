"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../../../shared/components/ui/button";
import { heroSequence } from "../../../shared/lib/animations";

const CORNER = (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2 L12 2 L12 4 L4 4 L4 12 L2 12 Z" fill="#D4AF77" opacity="0.7" />
    <path d="M6 6 L14 6 L14 7.5 L7.5 7.5 L7.5 14 L6 14 Z" fill="#E8C77F" opacity="0.4" />
    <circle cx="2" cy="2" r="1.5" fill="#D4AF77" opacity="0.9" />
  </svg>
);

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#1C1814" }}
    >
      {/* Ken Burns background — Vitruvian Man */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'url("https://commons.wikimedia.org/wiki/Special:FilePath/Da%20Vinci%20Vitruve%20Luc%20Viatour.jpg?width=2560")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        animate={{ scale: [1, 1.08], x: [0, -12] }}
        transition={{ duration: 22, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
      />

      {/* Dark vignette — lets image breathe while keeping text readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(28,24,20,0.60) 0%, rgba(28,24,20,0.30) 50%, rgba(28,24,20,0.70) 100%)",
        }}
      />

      {/* SVG corner ornaments */}
      {[
        { cls: "top-6 left-6", delay: 0.5 },
        { cls: "top-6 right-6 rotate-90", delay: 0.6 },
        { cls: "bottom-6 left-6 -rotate-90", delay: 0.7 },
        { cls: "bottom-6 right-6 rotate-180", delay: 0.8 },
      ].map(({ cls, delay }, i) => (
        <motion.div
          key={i}
          className={`absolute ${cls} pointer-events-none`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay, duration: 0.8 }}
        >
          {CORNER}
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          variants={heroSequence}
          initial="initial"
          animate="animate"
          className="space-y-8 sm:space-y-10"
        >
          {/* Top ornament */}
          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <div className="h-px w-28 bg-gradient-to-r from-transparent to-gold-500" />
            <span className="text-gold-400 text-3xl">❖</span>
            <div className="h-px w-28 bg-gradient-to-l from-transparent to-gold-500" />
          </motion.div>

          {/* Main title */}
          <motion.h1
            className="font-cinzel font-bold text-6xl sm:text-8xl lg:text-9xl leading-none"
            style={{
              background: "linear-gradient(135deg, #D4AF77 0%, #f5d898 50%, #b8965a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.02em",
              filter: "drop-shadow(0 2px 20px rgba(212,175,119,0.4))",
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1.4, ease: "easeOut" }}
          >
            DA VINCI
          </motion.h1>

          {/* Subtitle — plain text, no box */}
          <motion.p
            className="font-playfair font-normal text-xl sm:text-2xl lg:text-3xl tracking-wide"
            style={{
              color: "#F5E8C7",
              textShadow: "0 2px 16px rgba(0,0,0,0.7)",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.9 }}
          >
            The Mind of the Renaissance
          </motion.p>

          {/* Tagline — italic, no background box, no border */}
          <motion.p
            className="font-garamond text-lg sm:text-xl italic max-w-2xl mx-auto"
            style={{
              color: "rgba(245, 232, 199, 0.85)",
              textShadow: "0 1px 12px rgba(0,0,0,0.6)",
              lineHeight: "1.8",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.8 }}
          >
            A digital illuminated manuscript dedicated to the genius of Leonardo da Vinci
          </motion.p>

          {/* Description */}
          <motion.p
            className="font-garamond max-w-2xl mx-auto"
            style={{
              color: "rgba(245, 232, 199, 0.75)",
              lineHeight: "1.85",
              fontSize: "clamp(1rem, 1.1vw, 1.125rem)",
              textShadow: "0 1px 8px rgba(0,0,0,0.5)",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.8 }}
          >
            Journey through the life, art, and inventions of history&apos;s most brilliant mind.
            Explore masterpieces that defined an era and discoveries that shaped our modern world.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.05, duration: 0.5 }}
          >
            <Link href="/biography">
              <Button variant="elegant" size="lg" className="px-12 py-5 text-lg font-garamond">
                Enter the Codex
              </Button>
            </Link>
          </motion.div>

          {/* Bottom ornament */}
          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <div className="h-px w-28 bg-gradient-to-r from-transparent to-gold-500" />
            <span className="text-gold-400 text-3xl">❖</span>
            <div className="h-px w-28 bg-gradient-to-l from-transparent to-gold-500" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gold-500/70 rounded-full flex items-start justify-center pt-1.5"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-1 rounded-full bg-gold-400"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        <p className="font-cinzel text-[10px] tracking-[0.2em] uppercase" style={{ color: "#D4AF77" }}>
          Scroll
        </p>
      </motion.div>
    </section>
  );
}

export default HeroSection;
