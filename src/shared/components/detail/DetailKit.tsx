"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Shared building blocks for the dark "museum catalogue" detail pages used by
 * both artworks and inventions: section labels, fact grids, chips and palette
 * swatches. Keeping them here guarantees the two pages stay visually identical.
 */

export const DETAIL_GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n' x='0' y='0'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")";

/** A small ornamented line + dot + line divider. */
export function OrnamentDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold-500/70" />
      <span className="text-gold-400 text-xs">❖</span>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold-500/70" />
    </div>
  );
}

/** Gold uppercase section label with a thin rule, as in the reference layout. */
export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-5">
      <h2 className="font-cinzel text-[11px] sm:text-xs uppercase tracking-[0.3em] text-gold-400 whitespace-nowrap">
        {children}
      </h2>
      <span className="h-px flex-1 bg-gradient-to-r from-gold-500/40 to-transparent" />
    </div>
  );
}

/** A full prose section: label + animated body. */
export function DetailSection({ label, children }: { label: string; children: ReactNode }) {
  return (
    <motion.section
      className="mb-12"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px 0px" }}
      transition={{ duration: 0.6 }}
    >
      <SectionLabel>{label}</SectionLabel>
      {children}
    </motion.section>
  );
}

/** Body paragraph styled for the cream-on-dark catalogue. */
export function Prose({ children }: { children: ReactNode }) {
  return (
    <p
      className="font-garamond text-[1.05rem]"
      style={{ color: "rgba(245,232,199,0.82)", lineHeight: "1.95" }}
    >
      {children}
    </p>
  );
}

/** Two-column definition grid used inside the catalogue box. */
export function FactGrid({ items }: { items: { label: string; value: ReactNode }[] }) {
  return (
    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
      {items.map((item) => (
        <div key={item.label} className="flex items-baseline justify-between gap-4 border-b border-gold-500/15 pb-2">
          <dt className="font-cinzel text-[10px] uppercase tracking-[0.2em] text-gold-500/70 shrink-0">
            {item.label}
          </dt>
          <dd className="font-garamond text-right" style={{ color: "rgba(245,232,199,0.9)" }}>
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/** A tag chip for subjects / motifs. */
export function Chip({ children }: { children: ReactNode }) {
  return (
    <span
      className="inline-block font-garamond text-sm px-3 py-1.5 rounded-[2px] border border-gold-500/40"
      style={{ color: "rgba(245,232,199,0.85)", background: "rgba(212,175,119,0.06)" }}
    >
      {children}
    </span>
  );
}

/** A single colour swatch with name + hex. */
export function Swatch({ name, hex }: { name: string; hex: string }) {
  return (
    <div className="flex-1 min-w-[120px]">
      <div
        className="h-16 rounded-[2px] border border-gold-500/20"
        style={{ backgroundColor: hex }}
      />
      <p className="font-garamond text-sm mt-2" style={{ color: "rgba(245,232,199,0.85)" }}>
        {name}
      </p>
      <p className="font-mono text-[11px] uppercase tracking-wider" style={{ color: "rgba(212,175,119,0.7)" }}>
        {hex}
      </p>
    </div>
  );
}

/** Bulleted curiosities list with gold diamond markers. */
export function FactList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((fact, i) => (
        <motion.li
          key={i}
          className="flex items-start gap-3 font-garamond text-[1.02rem]"
          style={{ color: "rgba(245,232,199,0.82)", lineHeight: "1.7" }}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
        >
          <span className="text-gold-400 mt-1.5 text-[10px] shrink-0">◆</span>
          <span>{fact}</span>
        </motion.li>
      ))}
    </ul>
  );
}
