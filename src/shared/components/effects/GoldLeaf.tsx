"use client";

import { ReactNode, ElementType } from "react";
import { cn } from "../../lib/utils";

interface GoldLeafProps {
  children?: ReactNode;
  className?: string;
  variant?: "default" | "shimmer" | "glow";
  as?: ElementType;
}

export function GoldLeaf({
  children,
  className,
  variant = "default",
  as: Component = "span",
}: GoldLeafProps) {
  const variants = {
    default: "bg-gold-leaf bg-clip-text text-transparent",
    shimmer: "bg-gold-shimmer bg-clip-text text-transparent animate-shimmer",
    glow: "bg-gold-leaf bg-clip-text text-transparent drop-shadow-gold",
  };

  return (
    <Component className={cn(variants[variant], className)}>
      {children}
    </Component>
  );
}

export function GoldLeafBorder({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative p-1", className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-gold-300 via-gold-500 to-gold-300" />
      <div className="relative bg-parchment-50 p-4">
        {children}
      </div>
    </div>
  );
}

export default GoldLeaf;