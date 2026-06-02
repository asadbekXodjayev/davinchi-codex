"use client";

import { motion } from "framer-motion";
import { BIOGRAPHY_SECTIONS } from "../../../shared/api/data";
import { FadeIn } from "../../../shared/components/animations/FadeIn";
import { staggerContainer } from "../../../shared/lib/animations";

const GRAIN_SVG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n' x='0' y='0'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")";

const CARD_SHADOW = `
  0 0 0 1px #5C2C2C,
  0 0 0 3px #D4AF77,
  inset 0 0 20px rgba(212,175,119,0.06),
  0 8px 32px rgba(0,0,0,0.35)
`;

export function LifeTimeline() {
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              Life Journey
            </motion.h2>
            <motion.p
              className="font-garamond text-marble-700 max-w-2xl mx-auto"
              style={{ lineHeight: "1.85", fontSize: "clamp(1rem, 1.1vw, 1.125rem)" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-80px 0px" }}
            >
              From humble beginnings in Vinci to the courts of Europe
            </motion.p>
          </div>
        </FadeIn>

        {/* Gold divider */}
        <div
          className="mb-14"
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, #D4AF77 30%, #E8C77F 50%, #D4AF77 70%, transparent)",
          }}
        />

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px 0px" }}
          className="space-y-10"
        >
          {BIOGRAPHY_SECTIONS.map((section, index) => (
            <FadeIn key={section.id} variant="up" delay={index * 0.08}>
              <motion.div
                whileHover={{ scale: 1.005, boxShadow: "0 0 0 1px #5C2C2C, 0 0 0 3px #E8C77F, inset 0 0 20px rgba(212,175,119,0.08), 0 12px 40px rgba(0,0,0,0.4)" }}
                transition={{ duration: 0.3 }}
                className="relative rounded-sm overflow-hidden"
                style={{
                  border: "1px solid #D4AF77",
                  boxShadow: CARD_SHADOW,
                  background: "linear-gradient(180deg, #FFFEFC 0%, #F5E8C7 100%)",
                }}
              >
                {/* Corner ornaments */}
                <div className="absolute top-3 left-3 pointer-events-none text-gold-500 text-sm opacity-50">◈</div>
                <div className="absolute top-3 right-3 pointer-events-none text-gold-500 text-sm opacity-50 rotate-90">◈</div>
                <div className="absolute bottom-3 left-3 pointer-events-none text-gold-500 text-sm opacity-50 -rotate-90">◈</div>
                <div className="absolute bottom-3 right-3 pointer-events-none text-gold-500 text-sm opacity-50 rotate-180">◈</div>

                <div className="p-8 relative z-10">
                  {/* Period badge */}
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span
                      className="inline-block px-4 py-1.5 text-marble-900 text-sm font-cinzel font-bold rounded-sm"
                      style={{
                        background: "linear-gradient(135deg, #D4AF77 0%, #E8C77F 50%, #b8965a 100%)",
                      }}
                    >
                      {section.startDate} – {section.endDate}
                    </span>
                    <span className="font-garamond text-sm text-marble-500 uppercase tracking-widest">
                      {section.period}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-cinzel text-2xl sm:text-3xl text-marble-800 mb-5"
                    style={{ letterSpacing: "-0.02em", textShadow: "0 2px 10px rgba(212,175,119,0.2)" }}
                  >
                    {section.title}
                  </h3>

                  {/* Content — drop-cap on first section */}
                  <p
                    className={`font-garamond text-marble-700 mb-6 ${index === 0 ? "drop-cap" : ""}`}
                    style={{
                      lineHeight: "1.85",
                      fontSize: "clamp(1rem, 1.1vw, 1.125rem)",
                      color: "#2C1810",
                    }}
                  >
                    {section.content}
                  </p>

                  {/* Gold micro-rule */}
                  <div
                    className="mb-5"
                    style={{
                      height: "1px",
                      background: "linear-gradient(90deg, transparent, #D4AF77 40%, transparent)",
                    }}
                  />

                  {/* Key events */}
                  <div>
                    <h4
                      className="font-cinzel font-semibold text-marble-700 text-xs uppercase tracking-widest mb-4"
                      style={{ letterSpacing: "0.12em" }}
                    >
                      Key Events
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {section.keyEvents.map((event, eventIndex) => (
                        <motion.div
                          key={eventIndex}
                          className="flex items-start gap-2.5"
                          initial={{ opacity: 0, x: -15 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.08 * eventIndex }}
                          viewport={{ once: true, margin: "-80px 0px" }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                          <span className="font-garamond text-sm text-marble-600" style={{ lineHeight: "1.75" }}>
                            {event}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default LifeTimeline;
