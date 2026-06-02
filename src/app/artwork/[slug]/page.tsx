"use client";

import { useParams } from "next/navigation";
import { Header } from "../../../shared/components/layout/Header";
import { Footer } from "../../../shared/components/layout/Footer";
import { DetailNotFound } from "../../../shared/components/layout/DetailNotFound";
import { ArtworkDetail } from "../../../features/artworks/components/ArtworkDetail";
import { PageTransition } from "../../../widgets/PageTransition";
import { getArtworkBySlug } from "../../../shared/api/data";
import { ROUTES } from "../../../shared/lib/constants";

export default function ArtworkDetailPage() {
  const params = useParams<{ slug: string }>();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const artwork = slug ? getArtworkBySlug(slug) : undefined;

  return (
    <PageTransition key={`artwork-${slug ?? "unknown"}`}>
      <main className="min-h-screen" style={{ backgroundColor: "#120E0A" }}>
        <Header />
        {artwork ? (
          <ArtworkDetail artwork={artwork} />
        ) : (
          <DetailNotFound kind="artwork" backHref={ROUTES.artworks} backLabel="Browse the Gallery" />
        )}
        <Footer />
      </main>
    </PageTransition>
  );
}
