"use client";

import Link from "next/link";
import { Button } from "../ui/button";

interface DetailNotFoundProps {
  /** What the visitor was looking for, e.g. "artwork" or "invention". */
  kind: string;
  /** Where the "browse all" button should point. */
  backHref: string;
  backLabel: string;
}

export function DetailNotFound({ kind, backHref, backLabel }: DetailNotFoundProps) {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 py-32"
      style={{ background: "linear-gradient(180deg, #1C1814 0%, #120E0A 100%)" }}
    >
      <div className="text-center max-w-md">
        <span className="text-gold-500 text-5xl block mb-6">❦</span>
        <h1
          className="font-cinzel font-bold text-3xl mb-4"
          style={{ textTransform: "none", color: "#F5E8C7" }}
        >
          This {kind} could not be found
        </h1>
        <p className="font-garamond mb-8" style={{ lineHeight: "1.85", color: "rgba(245,232,199,0.7)" }}>
          The page you followed may have been moved, or the address is incomplete.
        </p>
        <Link href={backHref}>
          <Button variant="elegant" size="lg">{backLabel}</Button>
        </Link>
      </div>
    </section>
  );
}

export default DetailNotFound;
