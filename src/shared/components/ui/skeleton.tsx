"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-gradient-to-r from-gold-200 via-gold-300 to-gold-200 bg-[length:200%_100%] animate-shimmer",
        className
      )}
      style={{
        backgroundImage: "linear-gradient(90deg, #F6D29C 0%, #F1B668 50%, #F6D29C 100%)",
        backgroundSize: "200% 100%",
        animation: "shimmer 1.5s infinite",
      }}
      {...props}
    />
  );
}

export { Skeleton };