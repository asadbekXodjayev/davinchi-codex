"use client";

import { motion } from "framer-motion";
import { Skeleton } from "../../../shared/components/ui/skeleton";
import { Spinner } from "../../../widgets/Spinner";

const GRAIN_SVG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n' x='0' y='0'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")";

/**
 * First-load placeholder for the homepage. Mirrors the real layout — a dark
 * hero band with the branded spinner, followed by a parchment grid of three
 * skeleton cards — so the page reserves its final shape and the content swap
 * never shifts the layout.
 */
export function HomeSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero band with the designed spinner */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden gap-10"
        style={{ backgroundColor: "#1C1814" }}
      >
        <Spinner size={96} label="Loading the Renaissance" />

        {/* Skeleton title / subtitle bars */}
        <div className="flex flex-col items-center gap-5 w-full max-w-xl px-6">
          <Skeleton className="h-14 w-72 sm:w-96 rounded-sm opacity-80" />
          <Skeleton className="h-5 w-60 sm:w-80 rounded-sm opacity-60" />
          <Skeleton className="h-4 w-72 sm:w-[28rem] rounded-sm opacity-40" />
          <Skeleton className="h-12 w-44 rounded-sm mt-4 opacity-70" />
        </div>
      </section>

      {/* Featured cards skeleton */}
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
          {/* Header placeholder */}
          <div className="flex flex-col items-center gap-4 mb-16">
            <Skeleton className="h-9 w-56 rounded-sm" />
            <Skeleton className="h-4 w-80 max-w-full rounded-sm opacity-60" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="rounded-sm overflow-hidden"
                style={{ border: "1px solid #D4AF77", background: "#F5E8C7" }}
              >
                <Skeleton className="aspect-[4/3] w-full rounded-none" />
                <div className="p-5 space-y-3">
                  <Skeleton className="h-5 w-3/4 rounded-sm" />
                  <Skeleton className="h-3.5 w-full rounded-sm opacity-70" />
                  <Skeleton className="h-3.5 w-5/6 rounded-sm opacity-70" />
                  <div className="flex items-center justify-between border-t border-gold-300/40 pt-3">
                    <Skeleton className="h-3 w-12 rounded-sm opacity-60" />
                    <Skeleton className="h-3 w-20 rounded-sm opacity-60" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default HomeSkeleton;
