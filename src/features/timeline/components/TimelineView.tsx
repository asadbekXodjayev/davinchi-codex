"use client";

import { motion } from "framer-motion";
import { TIMELINE_EVENTS } from "../../../shared/api/data";
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

function getTypeColor(type: string) {
  switch (type) {
    case "birth": return "#2D5A3D";
    case "death": return "#5C2C2C";
    case "creation": return "#D4AF77";
    case "milestone": return "#264C7A";
    case "location": return "#737373";
    default: return "#D4AF77";
  }
}

function getTypeLabel(type: string) {
  switch (type) {
    case "birth": return "Birth";
    case "death": return "Death";
    case "creation": return "Creation";
    case "milestone": return "Milestone";
    case "location": return "Location";
    default: return type;
  }
}

export function TimelineView() {
  const sortedEvents = [...TIMELINE_EVENTS].sort((a, b) => a.year - b.year);

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

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              Timeline of Genius
            </motion.h2>
            <motion.p
              className="font-garamond text-marble-700 max-w-2xl mx-auto"
              style={{ lineHeight: "1.85", fontSize: "clamp(1rem, 1.1vw, 1.125rem)" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-80px 0px" }}
            >
              Journey through the remarkable life of Leonardo da Vinci
            </motion.p>
          </div>
        </FadeIn>

        {/* Gold divider */}
        <div
          className="mb-16"
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
          className="relative"
        >
          {/* Center spine */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] pointer-events-none hidden md:block"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-80px 0px" }}
            style={{
              background: "linear-gradient(to bottom, transparent, #D4AF77 10%, #E8C77F 50%, #D4AF77 90%, transparent)",
              transformOrigin: "top",
            }}
          />

          <div className="space-y-10 md:space-y-14">
            {sortedEvents.map((event, index) => {
              const isEven = index % 2 === 0;

              return (
                <FadeIn key={event.id} variant="up" delay={index * 0.06}>
                  <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0">
                    {/* Left column — card or spacer */}
                    <div className={`w-full min-w-0 md:flex-1 md:pr-8 overflow-hidden ${isEven ? "md:text-right" : "hidden md:block"}`}>
                      {isEven && (
                        <motion.div
                          whileHover={{ scale: 1.015, boxShadow: "0 0 0 1px #5C2C2C, 0 0 0 3px #E8C77F, 0 0 30px rgba(212,175,119,0.2)" }}
                          transition={{ duration: 0.3 }}
                          className="inline-block w-full max-w-sm rounded-sm p-5"
                          style={{ border: "1px solid #D4AF77", boxShadow: CARD_SHADOW, background: "#F5E8C7" }}
                        >
                          <div className="flex items-center gap-2 mb-2 md:justify-end">
                            <span
                              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                              style={{ background: getTypeColor(event.type) }}
                            />
                            <span className="font-cinzel text-xs text-marble-500 uppercase tracking-wider">
                              {getTypeLabel(event.type)}
                            </span>
                          </div>
                          <h3
                            className="font-cinzel font-bold text-lg text-marble-800 mb-1"
                            style={{ letterSpacing: "-0.02em" }}
                          >
                            {event.title}
                          </h3>
                          <p className="font-garamond text-sm text-marble-600" style={{ lineHeight: "1.75" }}>
                            {event.description}
                          </p>
                        </motion.div>
                      )}
                    </div>

                    {/* Center node */}
                    <motion.div
                      className="relative z-10 flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full border-4 border-gold-500"
                      style={{ background: "#F5E8C7", boxShadow: "0 0 0 2px #5C2C2C, 0 0 20px rgba(212,175,119,0.4)" }}
                      whileHover={{ scale: 1.2, boxShadow: "0 0 0 2px #5C2C2C, 0 0 30px rgba(212,175,119,0.7)" }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="font-cinzel font-bold text-gold-600" style={{ fontSize: "0.65rem", letterSpacing: "-0.03em" }}>
                        {event.year}
                      </span>
                    </motion.div>

                    {/* Right column — card or spacer */}
                    <div className={`w-full min-w-0 md:flex-1 md:pl-8 ${!isEven ? "" : "hidden md:block"}`}>
                      {!isEven && (
                        <motion.div
                          whileHover={{ scale: 1.015, boxShadow: "0 0 0 1px #5C2C2C, 0 0 0 3px #E8C77F, 0 0 30px rgba(212,175,119,0.2)" }}
                          transition={{ duration: 0.3 }}
                          className="inline-block w-full max-w-sm rounded-sm p-5"
                          style={{ border: "1px solid #D4AF77", boxShadow: CARD_SHADOW, background: "#F5E8C7" }}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <span
                              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                              style={{ background: getTypeColor(event.type) }}
                            />
                            <span className="font-cinzel text-xs text-marble-500 uppercase tracking-wider">
                              {getTypeLabel(event.type)}
                            </span>
                          </div>
                          <h3
                            className="font-cinzel font-bold text-lg text-marble-800 mb-1"
                            style={{ letterSpacing: "-0.02em" }}
                          >
                            {event.title}
                          </h3>
                          <p className="font-garamond text-sm text-marble-600" style={{ lineHeight: "1.75" }}>
                            {event.description}
                          </p>
                        </motion.div>
                      )}
                      {/* Mobile: always show card */}
                      {isEven && (
                        <motion.div
                          whileHover={{ scale: 1.015 }}
                          className="md:hidden inline-block max-w-sm rounded-sm p-5 w-full"
                          style={{ border: "1px solid #D4AF77", boxShadow: CARD_SHADOW, background: "#F5E8C7" }}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <span
                              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                              style={{ background: getTypeColor(event.type) }}
                            />
                            <span className="font-cinzel text-xs text-marble-500 uppercase tracking-wider">
                              {getTypeLabel(event.type)}
                            </span>
                          </div>
                          <h3 className="font-cinzel font-bold text-lg text-marble-800 mb-1" style={{ letterSpacing: "-0.02em" }}>
                            {event.title}
                          </h3>
                          <p className="font-garamond text-sm text-marble-600" style={{ lineHeight: "1.75" }}>
                            {event.description}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TimelineView;
