"use client";

import { Header } from "../../shared/components/layout/Header";
import { Footer } from "../../shared/components/layout/Footer";
import { GalleryView } from "../../features/artworks/components/GalleryView";
import { PageTransition } from "../../widgets/PageTransition";

export default function ArtworksPage() {
  return (
    <PageTransition key="artworks">
      <main className="min-h-screen bg-parchment-100">
        <Header />
        <div className="pt-24">
          <GalleryView />
        </div>
        <Footer />
      </main>
    </PageTransition>
  );
}