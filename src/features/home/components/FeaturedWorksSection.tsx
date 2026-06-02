"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FadeIn } from "../../../shared/components/animations/FadeIn";
import { Button } from "../../../shared/components/ui/button";
import { ARTWORKS, PLACEHOLDER_IMAGE } from "../../../shared/api/data";
import { staggerContainer, galleryItem } from "../../../shared/lib/animations";

const GRAIN_SVG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n' x='0' y='0'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")";

const CARD_SHADOW =
  "0 0 0 1px #5C2C2C, 0 0 0 3px #D4AF77, inset 0 0 20px rgba(212,175,119,0.06), 0 8px 32px rgba(0,0,0,0.45)";

const CARD_HOVER_SHADOW =
  "0 0 0 1px #5C2C2C, 0 0 0 3px #E8C77F, inset 0 0 20px rgba(212,175,119,0.1), 0 12px 48px rgba(0,0,0,0.55), 0 0 40px rgba(212,175,119,0.22)";

export function FeaturedWorksSection() {
  const featuredArtworks = ARTWORKS.slice(0, 3);

  return (
    <section className="py-24 relative">
      {/* Parchment radial background */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 30% 20%, #f7edd0 0%, #e8d5a3 60%, #d4bc85 100%)",
        }}
      />
      {/* Inline grain */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: GRAIN_SVG, opacity: 0.35 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <FadeIn variant="up">
          <div className="text-center mb-16">
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
              Masterpieces
            </motion.h2>
            <motion.p
              className="font-garamond text-marble-700 max-w-2xl mx-auto"
              style={{ lineHeight: "1.85", fontSize: "clamp(1rem, 1.1vw, 1.125rem)" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-80px 0px" }}
            >
              Discover the timeless works that defined an era and continue to inspire generations
            </motion.p>
          </div>
        </FadeIn>

        {/* Cards grid — NO overflow-hidden on section, so shadows aren't clipped */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px 0px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {featuredArtworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              variants={galleryItem}
              custom={index}
              whileHover={{ scale: 1.015, boxShadow: CARD_HOVER_SHADOW }}
              transition={{ duration: 0.3 }}
              /* relative here — so absolute corner ornaments are positioned correctly.
                 NO overflow-hidden here — shadows would be clipped. */
              className="relative rounded-sm group cursor-pointer"
              style={{ border: "1px solid #D4AF77", boxShadow: CARD_SHADOW, background: "#F5E8C7" }}
            >
              {/* Corner ornaments */}
              <span className="absolute top-2 left-2 pointer-events-none z-20 text-gold-500 text-sm opacity-55 select-none">◈</span>
              <span className="absolute top-2 right-2 pointer-events-none z-20 text-gold-500 text-sm opacity-55 select-none rotate-90">◈</span>
              <span className="absolute bottom-2 left-2 pointer-events-none z-20 text-gold-500 text-sm opacity-55 select-none -rotate-90">◈</span>
              <span className="absolute bottom-2 right-2 pointer-events-none z-20 text-gold-500 text-sm opacity-55 select-none rotate-180">◈</span>

              {/* Image — overflow-hidden lives here only */}
              <div className="overflow-hidden rounded-t-sm aspect-[4/3]">
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
                <div className="absolute inset-0 bg-gradient-to-t from-marble-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-sm" />
              </div>

              {/* Card body */}
              <div className="p-5">
                <h3
                  className="font-cinzel text-lg text-marble-800 group-hover:text-gold-700 transition-colors mb-2 leading-snug"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  {artwork.title}
                </h3>
                <p
                  className="font-garamond text-sm text-marble-600 mb-4 line-clamp-2"
                  style={{ lineHeight: "1.75" }}
                >
                  {artwork.description}
                </p>
                <div className="flex items-center justify-between border-t border-gold-300/40 pt-3">
                  <span className="font-garamond text-xs text-marble-500">{artwork.year}</span>
                  <Link href="/artworks">
                    <motion.span
                      whileHover={{ x: 4 }}
                      className="font-garamond text-sm cursor-pointer transition-all duration-200 hover:underline underline-offset-2"
                      style={{ color: "#D4AF77" }}
                    >
                      Learn More →
                    </motion.span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gold divider */}
        <motion.div
          className="my-10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-80px 0px" }}
          style={{ transformOrigin: "center" }}
        >
          <div
            style={{
              height: "1px",
              background: "linear-gradient(90deg, transparent, #D4AF77 30%, #E8C77F 50%, #D4AF77 70%, transparent)",
            }}
          />
        </motion.div>

        {/* View all */}
        <FadeIn variant="up" delay={0.4}>
          <div className="text-center">
            <Link href="/artworks">
              <Button variant="elegant" size="lg">
                View All Masterpieces
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default FeaturedWorksSection;
