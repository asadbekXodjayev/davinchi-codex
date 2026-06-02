"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { INVENTIONS, PLACEHOLDER_IMAGE } from "../../../shared/api/data";
import { DropCap } from "../../../shared/components/effects/DropCap";
import { Button } from "../../../shared/components/ui/button";
import {
  Chip,
  DETAIL_GRAIN,
  DetailSection,
  FactGrid,
  FactList,
  OrnamentDivider,
  Prose,
  SectionLabel,
} from "../../../shared/components/detail/DetailKit";
import { ROUTES } from "../../../shared/lib/constants";
import type { Invention } from "../../../shared/types";

const FRAME_SHADOW =
  "0 0 0 1px #0f0c08, 0 0 0 5px #D4AF77, 0 0 0 7px #5C2C2C, 0 30px 80px rgba(0,0,0,0.7), 0 0 60px rgba(212,175,119,0.16)";

interface InventionDetailProps {
  invention: Invention;
}

export function InventionDetail({ invention }: InventionDetailProps) {
  const [imgSrc, setImgSrc] = useState(invention.imageUrl);

  const index = INVENTIONS.findIndex((i) => i.id === invention.id);
  const prev = index > 0 ? INVENTIONS[index - 1] : INVENTIONS[INVENTIONS.length - 1];
  const next = index < INVENTIONS.length - 1 ? INVENTIONS[index + 1] : INVENTIONS[0];

  const related = INVENTIONS.filter((i) => i.category === invention.category && i.id !== invention.id).slice(0, 3);
  const wikiUrl = `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(
    `${invention.name} Leonardo da Vinci`
  )}`;

  const specs: { label: string; value: string }[] = [
    { label: "Inventor", value: "Leonardo da Vinci" },
    { label: "Conceived", value: `c. ${invention.year}` },
    { label: "Field", value: invention.category },
    { label: "Era", value: "Italian Renaissance" },
    { label: "Source", value: "Leonardo's notebooks" },
  ];

  return (
    <section
      className="relative pt-24 pb-28 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #1C1814 0%, #16110C 60%, #120E0A 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: DETAIL_GRAIN }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <Link
          href={ROUTES.innovations}
          className="inline-flex items-center gap-2 font-garamond text-sm text-gold-500/80 hover:text-gold-300 transition-colors mb-12"
        >
          <span aria-hidden>←</span>
          <span>Back to Inventions</span>
        </Link>

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] gap-12 lg:gap-16 items-center mb-20">
          <motion.div
            className="relative rounded-sm bg-black/40 mx-auto"
            style={{ boxShadow: FRAME_SHADOW }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={imgSrc}
              alt={invention.name}
              className="w-full h-auto rounded-sm"
              onError={() => imgSrc !== PLACEHOLDER_IMAGE && setImgSrc(PLACEHOLDER_IMAGE)}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <p className="font-cinzel text-[11px] uppercase tracking-[0.3em] text-gold-500/80 mb-4">
              {invention.category} · Invention
            </p>
            <h1
              className="font-cinzel font-bold text-5xl sm:text-6xl mb-4 leading-[1.05]"
              style={{
                background: "linear-gradient(135deg, #b8965a 0%, #D4AF77 40%, #f5d898 70%, #b8965a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "-0.02em",
                filter: "drop-shadow(0 2px 16px rgba(212,175,119,0.35))",
                textTransform: "none",
              }}
            >
              {invention.name}
            </h1>
            <p className="font-playfair italic text-lg text-parchment-200/80 mb-6">
              Leonardo da Vinci, c. {invention.year}
            </p>
            <OrnamentDivider className="mb-6" />
            <p
              className="font-garamond text-xl italic mb-5"
              style={{ color: "rgba(245,232,199,0.92)", lineHeight: "1.7" }}
            >
              {invention.tagline}
            </p>
            <Prose>{invention.description}</Prose>
          </motion.div>
        </div>

        {/* Specifications */}
        <motion.div
          className="relative rounded-sm p-7 sm:p-9 mb-16"
          style={{
            border: "1px solid rgba(212,175,119,0.35)",
            background: "rgba(0,0,0,0.25)",
            boxShadow: "inset 0 0 40px rgba(0,0,0,0.4)",
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px 0px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="absolute top-2.5 left-2.5 text-gold-500/60 text-sm select-none">◈</span>
          <span className="absolute top-2.5 right-2.5 text-gold-500/60 text-sm select-none rotate-90">◈</span>
          <span className="absolute bottom-2.5 left-2.5 text-gold-500/60 text-sm select-none -rotate-90">◈</span>
          <span className="absolute bottom-2.5 right-2.5 text-gold-500/60 text-sm select-none rotate-180">◈</span>
          <SectionLabel>Specifications</SectionLabel>
          <FactGrid items={specs} />
        </motion.div>

        {/* Prose sections */}
        <DetailSection label="Overview">
          <div className="space-y-5">
            {invention.about.map((para, i) => (
              <p
                key={i}
                className="font-garamond text-[1.05rem]"
                style={{ color: "rgba(245,232,199,0.82)", lineHeight: "1.95" }}
              >
                {i === 0 ? (
                  <>
                    <DropCap letter={para.charAt(0)} size="md" />
                    {para.slice(1)}
                  </>
                ) : (
                  para
                )}
              </p>
            ))}
          </div>
        </DetailSection>

        <DetailSection label="How It Works">
          <Prose>{invention.explanation}</Prose>
        </DetailSection>

        <DetailSection label="Construction & Materials">
          <Prose>{invention.materials}</Prose>
        </DetailSection>

        <DetailSection label="Modern Legacy">
          <Prose>{invention.modernLegacy}</Prose>
        </DetailSection>

        <DetailSection label="Significance">
          <Prose>{invention.significance}</Prose>
        </DetailSection>

        <DetailSection label="Details & Curiosities">
          <FactList items={invention.facts} />
        </DetailSection>

        <DetailSection label="Themes & Motifs">
          <div className="flex flex-wrap gap-2.5">
            {invention.subjects.map((s) => (
              <Chip key={s}>{s}</Chip>
            ))}
          </div>
        </DetailSection>

        <DetailSection label="Further Reading">
          <a
            href={wikiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-garamond text-gold-400 hover:text-gold-300 transition-colors underline underline-offset-4 decoration-gold-500/40"
          >
            Encyclopaedic entry: “{invention.name}” ↗
          </a>
        </DetailSection>

        {/* Related */}
        {related.length > 0 && (
          <DetailSection label={`More ${invention.category} designs`}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link key={r.id} href={ROUTES.innovation(r.slug)} className="group block">
                  <div
                    className="overflow-hidden rounded-sm aspect-video mb-3"
                    style={{ border: "1px solid rgba(212,175,119,0.35)" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={r.imageUrl}
                      alt={r.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="font-cinzel text-sm text-parchment-200 group-hover:text-gold-300 transition-colors" style={{ textTransform: "none" }}>
                    {r.name}
                  </p>
                  <p className="font-garamond text-xs text-gold-500/70">c. {r.year}</p>
                </Link>
              ))}
            </div>
          </DetailSection>
        )}

        {/* Divider */}
        <div
          className="my-14"
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, #D4AF77 30%, #E8C77F 50%, #D4AF77 70%, transparent)",
          }}
        />

        {/* Footer nav */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href={ROUTES.innovation(prev.slug)}
            className="group font-garamond text-gold-500/80 hover:text-gold-300 transition-colors text-left"
          >
            <span className="block text-[10px] uppercase tracking-[0.2em] text-gold-500/60">← Previous</span>
            <span className="block text-parchment-200">{prev.name}</span>
          </Link>

          <div className="flex items-center gap-3">
            <Link href={ROUTES.timeline}>
              <Button variant="outline" size="sm">View in Timeline</Button>
            </Link>
            <Link href={ROUTES.innovations}>
              <Button variant="elegant" size="sm">Back to Inventions</Button>
            </Link>
          </div>

          <Link
            href={ROUTES.innovation(next.slug)}
            className="group font-garamond text-gold-500/80 hover:text-gold-300 transition-colors text-right"
          >
            <span className="block text-[10px] uppercase tracking-[0.2em] text-gold-500/60">Next →</span>
            <span className="block text-parchment-200">{next.name}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default InventionDetail;
