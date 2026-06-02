"use client";

import { useParams } from "next/navigation";
import { Header } from "../../../shared/components/layout/Header";
import { Footer } from "../../../shared/components/layout/Footer";
import { DetailNotFound } from "../../../shared/components/layout/DetailNotFound";
import { InventionDetail } from "../../../features/innovations/components/InventionDetail";
import { PageTransition } from "../../../widgets/PageTransition";
import { getInventionBySlug } from "../../../shared/api/data";
import { ROUTES } from "../../../shared/lib/constants";

export default function InventionDetailPage() {
  const params = useParams<{ slug: string }>();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const invention = slug ? getInventionBySlug(slug) : undefined;

  return (
    <PageTransition key={`innovation-${slug ?? "unknown"}`}>
      <main className="min-h-screen" style={{ backgroundColor: "#120E0A" }}>
        <Header />
        {invention ? (
          <InventionDetail invention={invention} />
        ) : (
          <DetailNotFound kind="invention" backHref={ROUTES.innovations} backLabel="Browse Inventions" />
        )}
        <Footer />
      </main>
    </PageTransition>
  );
}
