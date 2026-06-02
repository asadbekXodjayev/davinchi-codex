"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Header } from "../shared/components/layout/Header";
import { Footer } from "../shared/components/layout/Footer";
import { HeroSection } from "../features/home/components/HeroSection";
import { FeaturedWorksSection } from "../features/home/components/FeaturedWorksSection";
import { HomeSkeleton } from "../features/home/components/HomeSkeleton";

/** Shows the skeleton + spinner once per session, then reveals the page. */
const SESSION_KEY = "davinci:home-seen";
const MIN_DISPLAY_MS = 1800;

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only the first visit of a session gets the full loading sequence.
    if (sessionStorage.getItem(SESSION_KEY)) {
      setIsLoading(false);
      return;
    }

    const start = performance.now();
    const reveal = () => {
      const remaining = MIN_DISPLAY_MS - (performance.now() - start);
      window.setTimeout(() => {
        sessionStorage.setItem(SESSION_KEY, "1");
        setIsLoading(false);
      }, Math.max(0, remaining));
    };

    // Wait for the window load event (images/fonts) but never less than the
    // minimum display time, so the intro never flickers.
    if (document.readyState === "complete") {
      reveal();
    } else {
      window.addEventListener("load", reveal, { once: true });
      return () => window.removeEventListener("load", reveal);
    }
  }, []);

  return (
    <main className="min-h-screen bg-parchment-100">
      <Header />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <HomeSkeleton key="home-skeleton" />
        ) : (
          <motion.div
            key="home-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <HeroSection />
            <FeaturedWorksSection />
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </main>
  );
}
