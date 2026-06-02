"use client";

import { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface ParchmentTextureProps {
  children: ReactNode;
  className?: string;
  intensity?: "light" | "medium" | "heavy";
}

export function ParchmentTexture({
  children,
  className,
  intensity = "medium",
}: ParchmentTextureProps) {
  const intensities = {
    light: "opacity-30",
    medium: "opacity-50",
    heavy: "opacity-70",
  };

  return (
    <div className={cn("relative", className)}>
      {/* Base parchment color */}
      <div className="absolute inset-0 bg-parchment-100" />
      
      {/* Texture overlay */}
      <div
        className={cn("absolute inset-0 pointer-events-none", intensities[intensity])}
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/aged-paper.png')`,
          backgroundRepeat: "repeat",
        }}
      />
      
      {/* Vignette effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, rgba(143, 102, 50, 0.2) 100%)",
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default ParchmentTexture;