"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface SlideUpProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  distance?: number;
  duration?: number;
  delay?: number;
  threshold?: number;
}

export function SlideUp({
  children,
  distance = 40,
  duration = 0.8,
  delay = 0,
  threshold = 0.1,
  className,
  ...props
}: SlideUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: distance / 2 }}
      transition={{ 
        duration, 
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      viewport={{ once: true, amount: threshold }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default SlideUp;