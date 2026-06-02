"use client";

import { useScroll, useTransform, useMotionValue } from "framer-motion";
import { useRef, useEffect, useState } from "react";

/**
 * Hook to create parallax scrolling effect
 * @param speed - Parallax speed multiplier (default: 0.5)
 * @returns Motion value for Y translation
 */
export function useParallax(speed: number = 0.5) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0], [0, -scrollY.get() * speed]);
  
  return { y };
}

/**
 * Hook to create parallax effect with custom range
 * @param options - Parallax configuration options
 * @returns Motion value for transformations
 */
export function useParallaxEffect(options: {
  speed?: number;
  direction?: "vertical" | "horizontal";
  offset?: number;
} = {}) {
  const { speed = 0.5, direction = "vertical", offset = 0 } = options;
  const { scrollY, scrollX } = useScroll();
  
  const y = useTransform(scrollY, [0], [offset, -scrollY.get() * speed + offset]);
  const x = useTransform(scrollX, [0], [0, -scrollX.get() * speed]);
  const zeroX = useMotionValue(0);
  const zeroY = useMotionValue(0);

  return direction === "vertical" ? { y, x: zeroX } : { y: zeroY, x };
}

/**
 * Hook for local parallax effect on an element
 * @returns Parallax state and ref
 */
export function useLocalParallax(speed: number = 0.3) {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Only calculate when element is in or near viewport
      if (rect.top < viewportHeight && rect.bottom > 0) {
        const distanceFromTop = rect.top;
        const normalizedDistance = distanceFromTop / viewportHeight;
        setOffset(normalizedDistance * speed * viewportHeight);
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [speed]);

  return { offset, ref, isVisible };
}

/**
 * Hook to create mouse-based parallax effect
 * @param speed - Parallax speed multiplier
 * @returns Mouse position values
 */
export function useMouseParallax(speed: number = 20) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      
      mouseX.set(x * speed);
      mouseY.set(y * speed);
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      mouseX.set(0);
      mouseY.set(0);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, speed]);

  return { mouseX, mouseY, isHovering };
}