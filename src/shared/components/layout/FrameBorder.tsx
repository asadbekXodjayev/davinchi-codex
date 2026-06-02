"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface FrameBorderProps {
  children: ReactNode;
  className?: string;
  ornate?: boolean;
  goldLeaf?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

export function FrameBorder({
  children,
  className,
  ornate = true,
  goldLeaf = true,
  padding = "md",
}: FrameBorderProps) {
  const paddingClasses = {
    none: "p-0",
    sm: "p-2",
    md: "p-4",
    lg: "p-8",
  };

  return (
    <div className={cn("relative", className)}>
      {/* Outer gold border */}
      <div className="absolute inset-0 border-2 border-gold-500 rounded-sm" />
      
      {/* Inner gold border */}
      <div className="absolute inset-1 border border-gold-300 rounded-sm" />
      
      {/* Corner decorations */}
      {ornate && (
        <>
          <motion.div
            className="absolute -top-2 -left-2 text-gold-500 text-2xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.8, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            ❧
          </motion.div>
          <motion.div
            className="absolute -top-2 -right-2 text-gold-500 text-2xl rotate-90"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.8, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            ❧
          </motion.div>
          <motion.div
            className="absolute -bottom-2 -left-2 text-gold-500 text-2xl -rotate-90"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.8, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            ❧
          </motion.div>
          <motion.div
            className="absolute -bottom-2 -right-2 text-gold-500 text-2xl rotate-180"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.8, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            ❧
          </motion.div>
        </>
      )}
      
      {/* Gold leaf gradient overlay */}
      {goldLeaf && (
        <div className="absolute inset-0 bg-gold-leaf opacity-10 pointer-events-none" />
      )}
      
      {/* Content */}
      <div className={cn("relative bg-parchment-50 rounded-sm", paddingClasses[padding])}>
        {children}
      </div>
    </div>
  );
}

export default FrameBorder;