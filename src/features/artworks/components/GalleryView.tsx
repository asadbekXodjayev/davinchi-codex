"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ARTWORKS, PLACEHOLDER_IMAGE } from "../../../shared/api/data";
import { FadeIn } from "../../../shared/components/animations/FadeIn";
import { Button } from "../../../shared/components/ui/button";
import { ROUTES } from "../../../shared/lib/constants";
import { staggerContainer, galleryItem } from "../../../shared/lib/animations";

const GRAIN_SVG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n' x='0' y='0'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")";

const CARD_SHADOW =
  "0 0 0 1px #5C2C2C, 0 0 0 3px #D4AF77, inset 0 0 20px rgba(212,175,119,0.06), 0 8px 32px rgba(0,0,0,0.45)";

const CARD_HOVER_SHADOW =
  "0 0 0 1px #5C2C2C, 0 0 0 3px #E8C77F, inset 0 0 20px rgba(212,175,119,0.1), 0 12px 48px rgba(0,0,0,0.55), 0 0 36px rgba(212,175,119,0.20)";

type Category = "all" | "painting" | "drawing" | "manuscript" | "portrait";

export function GalleryView() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  const categories: { id: Category; label: string }[] = [
    { id: "all", label: "All Works" },
    { id: "painting", label: "Paintings" },
    { id: "drawing", label: "Drawings" },
    { id: "manuscript", label: "Manuscripts" },
    { id: "portrait", label: "Portraits" },
  ];

  const filteredArtworks =
    selectedCategory === "all"
      ? ARTWORKS
      : ARTWORKS.filter((a) => a.category === selectedCategory);

  return (
    <section className="py-24 relative">
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 30% 20%, #f7edd0 0%, #e8d5a3 60%, #d4bc85 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: GRAIN_SVG, opacity: 0.35 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
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
              Masterpieces Gallery
            </motion.h2>
            <motion.p
              className="font-garamond text-marble-700 max-w-2xl mx-auto"
              style={{ lineHeight: "1.85", fontSize: "clamp(1rem, 1.1vw, 1.125rem)" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-80px 0px" }}
            >
              Explore Leonardo da Vinci&apos;s timeless artistic legacy
            </motion.p>
          </div>
        </FadeIn>

        {/* Gold divider */}
        <div
          className="mb-10"
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, #D4AF77 30%, #E8C77F 50%, #D4AF77 70%, transparent)",
          }}
        />

        {/* Filters */}
        <FadeIn variant="up" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i }}
                viewport={{ once: true, margin: "-80px 0px" }}
              >
                <Button
                  variant={selectedCategory === cat.id ? "elegant" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.label}
                </Button>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* Grid — explicit cols, NO auto-fill override */}
        <motion.div
          key={selectedCategory}
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredArtworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              variants={galleryItem}
              custom={index}
              whileHover={{ scale: 1.015, boxShadow: CARD_HOVER_SHADOW }}
              transition={{ duration: 0.3 }}
              /* relative = corner ornaments work; NO overflow-hidden = shadow visible */
              className="relative rounded-sm group cursor-pointer"
              style={{ border: "1px solid #D4AF77", boxShadow: CARD_SHADOW, background: "#F5E8C7" }}
            >
            <Link href={ROUTES.artwork(artwork.slug)} className="block" aria-label={`View ${artwork.title}`}>
              {/* Corner ornaments */}
              <span className="absolute top-2 left-2 pointer-events-none z-20 text-gold-500 text-sm opacity-55 select-none">◈</span>
              <span className="absolute top-2 right-2 pointer-events-none z-20 text-gold-500 text-sm opacity-55 select-none rotate-90">◈</span>
              <span className="absolute bottom-2 left-2 pointer-events-none z-20 text-gold-500 text-sm opacity-55 select-none -rotate-90">◈</span>
              <span className="absolute bottom-2 right-2 pointer-events-none z-20 text-gold-500 text-sm opacity-55 select-none rotate-180">◈</span>

              {/* Image — overflow-hidden lives here only */}
              <div className="overflow-hidden rounded-t-sm aspect-[4/3] relative">
                <motion.img
                  src={artwork.imageUrl}
                  alt={artwork.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  animate={{ scale: [1, 1.08], x: [0, -10] }}
                  transition={{ duration: 22, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                  whileHover={{ scale: 1.08 }}
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    if (img.src !== PLACEHOLDER_IMAGE) img.src = PLACEHOLDER_IMAGE;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-marble-900/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-block px-2 py-0.5 bg-gold-500 text-marble-900 text-xs font-cinzel rounded-sm">
                    {artwork.category}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5">
                <h3
                  className="font-cinzel text-lg text-marble-800 group-hover:text-gold-700 transition-colors mb-2 leading-snug"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  {artwork.title}
                </h3>
                <p
                  className="font-garamond text-sm text-marble-600 mb-3 line-clamp-2"
                  style={{ lineHeight: "1.75" }}
                >
                  {artwork.description}
                </p>
                <div className="flex items-center justify-between border-t border-gold-300/40 pt-2.5 text-xs text-marble-500 font-garamond">
                  <span>{artwork.year}</span>
                  <span className="truncate max-w-[130px] text-right">{artwork.location}</span>
                </div>
              </div>
            </Link>
            </motion.div>
          ))}
        </motion.div>

        {filteredArtworks.length === 0 && (
          <FadeIn variant="up">
            <div className="text-center py-16">
              <p className="font-garamond text-marble-600 text-lg">No artworks found in this category.</p>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}

export default GalleryView;
