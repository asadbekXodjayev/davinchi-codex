"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  variant?: "default" | "up" | "left" | "right";
  duration?: number;
  delay?: number;
}

const fadeVariants = {
  default: {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0, transition: { duration: 0.4 } },
  },
  up: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.4 } },
  },
  left: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.4 } },
  },
  right: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, x: 20, transition: { duration: 0.4 } },
  },
};

export function FadeIn({
  children,
  variant = "default",
  duration = 0.8,
  delay = 0,
  className,
  ...props
}: FadeInProps) {
  const selectedVariants = fadeVariants[variant];

  return (
    <motion.div
      initial={selectedVariants.initial}
      whileInView={selectedVariants.animate}
      exit={selectedVariants.exit}
      transition={{ duration, delay }}
      viewport={{ once: true, margin: "-80px 0px" }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;