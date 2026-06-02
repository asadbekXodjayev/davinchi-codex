"use client";

import { Header } from "../../shared/components/layout/Header";
import { Footer } from "../../shared/components/layout/Footer";
import { TimelineView } from "../../features/timeline/components/TimelineView";
import { PageTransition } from "../../widgets/PageTransition";

export default function TimelinePage() {
  return (
    <PageTransition key="timeline">
      <main className="min-h-screen bg-parchment-100">
        <Header />
        <div className="pt-24">
          <TimelineView />
        </div>
        <Footer />
      </main>
    </PageTransition>
  );
}