"use client";

import { Header } from "../shared/components/layout/Header";
import { Footer } from "../shared/components/layout/Footer";
import { HeroSection } from "../features/home/components/HeroSection";
import { FeaturedWorksSection } from "../features/home/components/FeaturedWorksSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-parchment-100">
      <Header />
      <HeroSection />
      <FeaturedWorksSection />
      <Footer />
    </main>
  );
}