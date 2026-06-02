"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface KenBurnsProps {
  children?: ReactNode;
  imageUrl: string;
  duration?: number;
  scale?: [number, number];
  className?: string;
  overlay?: boolean;
}

export function KenBurns({
  children,
  imageUrl,
  duration = 20,
  scale = [1, 1.15],
  className,
  overlay = true,
}: KenBurnsProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
        animate={{
          scale,
        }}
        transition={{
          duration,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      {overlay && (
        <div className="absolute inset-0 bg-marble-900/30" />
      )}
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default KenBurns;