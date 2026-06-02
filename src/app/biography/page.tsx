"use client";

import { Header } from "../../shared/components/layout/Header";
import { Footer } from "../../shared/components/layout/Footer";
import { LifeTimeline } from "../../features/biography/components/LifeTimeline";
import { PageTransition } from "../../widgets/PageTransition";

export default function BiographyPage() {
  return (
    <PageTransition key="biography">
      <main className="min-h-screen bg-parchment-100">
        <Header />
        <div className="pt-24">
          <LifeTimeline />
        </div>
        <Footer />
      </main>
    </PageTransition>
  );
}