"use client";

import { Header } from "../../shared/components/layout/Header";
import { Footer } from "../../shared/components/layout/Footer";
import { ImpactCards } from "../../features/legacy/components/ImpactCards";
import { PageTransition } from "../../widgets/PageTransition";

export default function LegacyPage() {
  return (
    <PageTransition key="legacy">
      <main className="min-h-screen bg-parchment-100">
        <Header />
        <div className="pt-24">
          <ImpactCards />
        </div>
        <Footer />
      </main>
    </PageTransition>
  );
}