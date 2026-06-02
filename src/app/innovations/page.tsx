"use client";

import { Header } from "../../shared/components/layout/Header";
import { Footer } from "../../shared/components/layout/Footer";
import { InnovationsGrid } from "../../features/innovations/components/InnovationsGrid";
import { PageTransition } from "../../widgets/PageTransition";

export default function InnovationsPage() {
  return (
    <PageTransition key="innovations">
      <main className="min-h-screen bg-parchment-100">
        <Header />
        <div className="pt-24">
          <InnovationsGrid />
        </div>
        <Footer />
      </main>
    </PageTransition>
  );
}