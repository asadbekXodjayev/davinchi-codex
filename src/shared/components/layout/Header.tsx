"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useScroll } from "../../hooks/useScroll";
import { Navigation } from "./Navigation";

export function Header() {
  const { isScrolled } = useScroll();

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: isScrolled ? "rgba(20, 16, 12, 0.92)" : "rgba(20, 16, 12, 0.78)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(212, 175, 119, 0.35)",
        boxShadow: isScrolled
          ? "0 4px 24px rgba(0,0,0,0.5), 0 1px 0 rgba(212,175,119,0.10) inset"
          : "0 2px 16px rgba(0,0,0,0.35), 0 1px 0 rgba(212,175,119,0.08) inset",
        transition: "background 0.4s ease, box-shadow 0.4s ease",
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Full-width bar; content constrained + centered */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex items-center justify-between"
          style={{
            paddingTop: isScrolled ? "10px" : "16px",
            paddingBottom: isScrolled ? "10px" : "16px",
            transition: "padding 0.4s ease",
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              className="relative w-10 h-10 flex items-center justify-center flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, #D4AF77 0%, #E8C77F 50%, #b8965a 100%)",
                border: "1px solid rgba(212,175,119,0.5)",
                boxShadow: "0 0 12px rgba(212,175,119,0.3)",
              }}
              whileHover={{ scale: 1.08, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-1 border border-gold-200/40 pointer-events-none" />
              <span className="font-cinzel font-bold text-lg text-marble-900 relative z-10">L</span>
            </motion.div>
            <span
              className="font-cinzel font-bold text-sm tracking-widest leading-none"
              style={{ color: "#F5E8C7", letterSpacing: "0.15em" }}
            >
              DA VINCI CODEX
            </span>
          </Link>

          {/* Navigation */}
          <Navigation />
        </motion.div>
      </div>
    </motion.header>
  );
}

export default Header;
