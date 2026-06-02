"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { INVENTIONS, PLACEHOLDER_IMAGE } from "../../../shared/api/data";
import { FadeIn } from "../../../shared/components/animations/FadeIn";
import { Button } from "../../../shared/components/ui/button";
import { staggerContainer, galleryItem } from "../../../shared/lib/animations";

const GRAIN_SVG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n' x='0' y='0'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")";

const CARD_SHADOW = `
  0 0 0 1px #5C2C2C,
  0 0 0 3px #D4AF77,
  inset 0 0 20px rgba(212,175,119,0.06),
  0 8px 32px rgba(0,0,0,0.45)
`;

const CARD_HOVER_SHADOW =
  "0 0 0 1px #5C2C2C, 0 0 0 3px #E8C77F, inset 0 0 20px rgba(212,175,119,0.1), 0 12px 48px rgba(0,0,0,0.55), 0 0 40px rgba(212,175,119,0.25)";

type Category = "all" | "aeronautics" | "military" | "civilian" | "anatomical" | "architecture";

const categories: { id: Category; label: string }[] = [
  { id: "all", label: "All Inventions" },
  { id: "aeronautics", label: "Aeronautics" },
  { id: "military", label: "Military" },
  { id: "civilian", label: "Civilian" },
  { id: "anatomical", label: "Anatomical" },
  { id: "architecture", label: "Architecture" },
];

export function InnovationsGrid() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  const filteredInventions =
    selectedCategory === "all"
      ? INVENTIONS
      : INVENTIONS.filter((inv) => inv.category === selectedCategory);

  return (
    <section className="py-24 relative">
      {/* Parchment radial */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 30% 20%, #f7edd0 0%, #e8d5a3 60%, #d4bc85 100%)",
        }}
      />
      {/* Inline grain */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: GRAIN_SVG, opacity: 0.4 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <FadeIn variant="up">
          <div className="text-center mb-12">
            <motion.h2
              className="font-cinzel font-bold text-4xl sm:text-5xl mb-4"
              style={{
                background: "linear-gradient(135deg, #D4AF77 0%, #f5d898 50%, #b8965a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "-0.02em",
                filter: "drop-shadow(0 2px 8px rgba(212,175,119,0.3))",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-80px 0px" }}
            >
              Innovations &amp; Inventions
            </motion.h2>
            <motion.p
              className="font-garamond text-marble-700 max-w-2xl mx-auto"
              style={{ lineHeight: "1.85", fontSize: "clamp(1rem, 1.1vw, 1.125rem)" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-80px 0px" }}
            >
              Discover Leonardo&apos;s visionary designs that were centuries ahead of their time
            </motion.p>
          </div>
        </FadeIn>

        {/* Gold divider */}
        <div
          className="mb-10"
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, #D4AF77 30%, #E8C77F 50%, #D4AF77 70%, transparent)",
          }}
        />

        {/* Category filters */}
        <FadeIn variant="up" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index }}
                viewport={{ once: true, margin: "-80px 0px" }}
              >
                <Button
                  variant={selectedCategory === category.id ? "elegant" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.label}
                </Button>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* Innovations grid */}
        <motion.div
          key={selectedCategory}
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredInventions.map((invention, index) => (
            <motion.div
              key={invention.id}
              variants={galleryItem}
              custom={index}
              whileHover={{ scale: 1.015, boxShadow: CARD_HOVER_SHADOW }}
              transition={{ duration: 0.3 }}
              className="relative rounded-sm overflow-hidden group cursor-pointer flex flex-col"
              style={{ border: "1px solid #D4AF77", boxShadow: CARD_SHADOW, background: "#F5E8C7" }}
            >
              {/* Corner ornaments */}
              <div className="absolute top-2 left-2 pointer-events-none z-20 text-gold-500 text-sm opacity-60">◈</div>
              <div className="absolute top-2 right-2 pointer-events-none z-20 text-gold-500 text-sm opacity-60 rotate-90">◈</div>

              {/* Image */}
              <div className="relative overflow-hidden aspect-video bg-marble-800 flex-shrink-0">
                <motion.img
                  src={invention.imageUrl}
                  alt={invention.name}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity"
                  data-ken-burns
                  animate={{ scale: [1, 1.06], x: [0, -8] }}
                  transition={{ duration: 24, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                  whileHover={{ scale: 1.08 }}
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    if (img.src !== PLACEHOLDER_IMAGE) img.src = PLACEHOLDER_IMAGE;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-marble-900/90 via-marble-900/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block px-2 py-1 bg-gold-500/90 text-marble-900 text-xs font-cinzel rounded-sm uppercase tracking-wider">
                    {invention.category}
                  </span>
                  <span className="font-garamond text-xs text-marble-500">{invention.year}</span>
                </div>
                <h3
                  className="font-cinzel text-xl text-marble-800 group-hover:text-gold-600 transition-colors mb-3"
                  style={{ letterSpacing: "-0.02em", textShadow: "0 2px 8px rgba(212,175,119,0.2)" }}
                >
                  {invention.name}
                </h3>
                <p
                  className="font-garamond text-sm text-marble-600 mb-4 line-clamp-3 flex-1"
                  style={{ lineHeight: "1.85" }}
                >
                  {invention.description}
                </p>
                <motion.div
                  className="flex items-center text-gold-600 font-garamond text-sm mt-auto"
                  whileHover={{ x: 5 }}
                >
                  <span>Learn more →</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredInventions.length === 0 && (
          <FadeIn variant="up">
            <div className="text-center py-12">
              <p className="font-garamond text-marble-600">No inventions found in this category.</p>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}

export default InnovationsGrid;
