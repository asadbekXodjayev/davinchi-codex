"use client";

import { motion } from "framer-motion";
import { LEGACY_IMPACTS } from "../../../shared/api/data";
import { FadeIn } from "../../../shared/components/animations/FadeIn";
import { staggerContainer } from "../../../shared/lib/animations";

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

const icons: Record<string, React.ReactNode> = {
  palette: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  ),
  microscope: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  heart: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  lightbulb: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  building: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
};

export function ImpactCards() {
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
              Enduring Legacy
            </motion.h2>
            <motion.p
              className="font-garamond text-marble-700 max-w-2xl mx-auto"
              style={{ lineHeight: "1.85", fontSize: "clamp(1rem, 1.1vw, 1.125rem)" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-80px 0px" }}
            >
              How Leonardo&apos;s genius continues to shape our world today
            </motion.p>
          </div>
        </FadeIn>

        {/* Gold divider */}
        <div
          className="mb-12"
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, #D4AF77 30%, #E8C77F 50%, #D4AF77 70%, transparent)",
          }}
        />

        {/* Impact cards */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px 0px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {LEGACY_IMPACTS.map((impact, index) => (
            <FadeIn key={impact.id} variant="up" delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.015, y: -4, boxShadow: CARD_HOVER_SHADOW }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-sm overflow-hidden h-full flex flex-col"
                style={{
                  border: "1px solid #D4AF77",
                  boxShadow: CARD_SHADOW,
                  background: "linear-gradient(180deg, #FFFEFC 0%, #F5E8C7 100%)",
                }}
              >
                {/* Corner ornaments */}
                <div className="absolute top-2 left-2 pointer-events-none z-10 text-gold-500 text-sm opacity-55">◈</div>
                <div className="absolute top-2 right-2 pointer-events-none z-10 text-gold-500 text-sm opacity-55 rotate-90">◈</div>
                <div className="absolute bottom-2 left-2 pointer-events-none z-10 text-gold-500 text-sm opacity-55 -rotate-90">◈</div>
                <div className="absolute bottom-2 right-2 pointer-events-none z-10 text-gold-500 text-sm opacity-55 rotate-180">◈</div>

                <div className="p-6 flex flex-col flex-1 relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="w-14 h-14 rounded-full bg-gradient-to-br from-gold-300 via-gold-500 to-gold-600 flex items-center justify-center text-marble-900 mb-5 flex-shrink-0"
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {icons[impact.icon] ?? icons.lightbulb}
                  </motion.div>

                  <h3
                    className="font-cinzel text-xl text-marble-800 mb-3"
                    style={{ letterSpacing: "-0.02em", textShadow: "0 2px 8px rgba(212,175,119,0.2)" }}
                  >
                    {impact.title}
                  </h3>

                  <p className="font-garamond text-sm text-marble-700 mb-4 flex-1" style={{ lineHeight: "1.85" }}>
                    {impact.description}
                  </p>

                  {/* Gold rule */}
                  <div
                    className="my-3"
                    style={{
                      height: "1px",
                      background: "linear-gradient(90deg, transparent, #D4AF77 40%, transparent)",
                    }}
                  />

                  <p className="font-garamond text-xs text-gold-700 italic" style={{ lineHeight: "1.7" }}>
                    {impact.modernConnection}
                  </p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ImpactCards;
