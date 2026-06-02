"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { NAVIGATION } from "../../lib/constants";

const GRAIN_SVG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n' x='0' y='0'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    /* position: static (default) — never fixed, never overlapping header */
    <footer
      className="relative"
      style={{ background: "#0D0A07" }}
    >
      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: GRAIN_SVG, opacity: 0.5 }}
      />

      {/* Gold top border */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: "2px",
          background: "linear-gradient(90deg, transparent, #D4AF77 30%, #E8C77F 50%, #D4AF77 70%, transparent)",
        }}
      />

      {/* Corner fleurons */}
      <motion.div
        className="absolute top-4 left-5 text-3xl pointer-events-none select-none"
        style={{ color: "#D4AF77", opacity: 0.35 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.35 }}
        transition={{ delay: 0.3 }}
      >
        ❧
      </motion.div>
      <motion.div
        className="absolute top-4 right-5 text-3xl rotate-90 pointer-events-none select-none"
        style={{ color: "#D4AF77", opacity: 0.35 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.35 }}
        transition={{ delay: 0.4 }}
      >
        ❧
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              {/* Logo mark — relative so inner absolute border works */}
              <div
                className="relative w-11 h-11 flex-shrink-0 flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #D4AF77 0%, #E8C77F 50%, #b8965a 100%)",
                  border: "1px solid rgba(212,175,119,0.4)",
                  boxShadow: "0 0 10px rgba(212,175,119,0.2)",
                }}
              >
                <div className="absolute inset-1 border border-gold-200/30 pointer-events-none" />
                <span className="font-cinzel font-bold text-xl text-marble-900 relative z-10">L</span>
              </div>
              <span
                className="font-cinzel font-bold text-base tracking-widest"
                style={{ color: "#D4AF77", letterSpacing: "0.14em" }}
              >
                DA VINCI CODEX
              </span>
            </Link>
            <p
              className="font-garamond text-sm leading-relaxed"
              style={{ color: "#8B7355", lineHeight: "1.8" }}
            >
              A digital illuminated manuscript celebrating the timeless genius of Leonardo da Vinci.
              Explore his masterpieces, inventions, and enduring legacy.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4
              className="font-cinzel font-semibold text-xs uppercase mb-5"
              style={{ color: "#D4AF77", letterSpacing: "0.18em" }}
            >
              Navigation
            </h4>
            <ul className="space-y-2">
              {NAVIGATION.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * index }}
                >
                  <Link
                    href={item.href}
                    className="font-garamond text-sm transition-colors duration-200 hover:underline underline-offset-2"
                    style={{ color: "#8B7355" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#D4AF77")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#8B7355")}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4
              className="font-cinzel font-semibold text-xs uppercase mb-5"
              style={{ color: "#D4AF77", letterSpacing: "0.18em" }}
            >
              Connect
            </h4>
            <ul className="space-y-2">
              {["Twitter", "Instagram", "YouTube"].map((name, i) => (
                <motion.li
                  key={name}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 + i * 0.06 }}
                >
                  <a
                    href="#"
                    className="font-garamond text-sm transition-colors duration-200 hover:underline underline-offset-2"
                    style={{ color: "#8B7355" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#D4AF77")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#8B7355")}
                  >
                    {name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Gold divider */}
        <motion.div
          className="my-10 relative"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.9 }}
          style={{ transformOrigin: "center" }}
        >
          <div
            style={{
              height: "1px",
              background: "linear-gradient(90deg, transparent, #D4AF77 30%, #E8C77F 50%, #D4AF77 70%, transparent)",
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 text-lg select-none"
            style={{ color: "#D4AF77", background: "#0D0A07" }}
          >
            ❖
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="font-garamond text-xs" style={{ color: "#5C4A32", letterSpacing: "0.06em" }}>
            © {currentYear}{" "}
            <span style={{ color: "#8B7355" }}>Da Vinci Codex</span>. All rights reserved.
          </p>
        </motion.div>
      </div>

      {/* Gold bottom border */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, #D4AF77 40%, transparent)",
        }}
      />
    </footer>
  );
}

export default Footer;
