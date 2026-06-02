"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface DropCapProps {
  letter: string;
  className?: string;
  variant?: "gold" | "burgundy" | "emerald";
  size?: "sm" | "md" | "lg" | "xl";
}

export function DropCap({
  letter,
  className,
  variant = "gold",
  size = "lg",
}: DropCapProps) {
  const variants = {
    gold: "text-gold-500 from-gold-400 via-gold-500 to-gold-600",
    burgundy: "text-burgundy-500 from-burgundy-400 via-burgundy-500 to-burgundy-600",
    emerald: "text-emerald-500 from-emerald-400 via-emerald-500 to-emerald-600",
  };

  const sizes = {
    sm: "text-4xl",
    md: "text-5xl",
    lg: "text-6xl",
    xl: "text-7xl",
  };

  return (
    <motion.span
      className={cn(
        "inline-block font-cinzel font-bold bg-gradient-to-br bg-clip-text text-transparent",
        variants[variant],
        sizes[size],
        "drop-shadow-md",
        className
      )}
      initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ 
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: 0.2
      }}
    >
      {letter}
    </motion.span>
  );
}

interface DropCapTextProps {
  text: string;
  className?: string;
  variant?: "gold" | "burgundy" | "emerald";
  size?: "sm" | "md" | "lg" | "xl";
}

export function DropCapText({
  text,
  className,
  variant,
  size,
}: DropCapTextProps) {
  const firstLetter = text.charAt(0).toUpperCase();
  const restOfText = text.slice(1);

  return (
    <span className={cn("inline", className)}>
      <DropCap letter={firstLetter} variant={variant} size={size} />
      {restOfText}
    </span>
  );
}

export default DropCap;