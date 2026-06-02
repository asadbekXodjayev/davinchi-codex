"use client";

import { useState, useEffect, useCallback } from "react";
import { throttle } from "../lib/utils";

/**
 * Hook to track scroll position and progress
 * @returns Scroll state object
 */
export function useScroll() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollX, setScrollX] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const currentScrollY = window.scrollY;
      const currentScrollX = window.scrollX;
      
      setScrollY(currentScrollY);
      setScrollX(currentScrollX);
      
      // Calculate scroll progress (0-1)
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? currentScrollY / docHeight : 0;
      setScrollProgress(progress);
      
      // Track if page is scrolled
      setIsScrolled(currentScrollY > 50);
    }, 16); // ~60fps

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    scrollY,
    scrollX,
    scrollProgress,
    isScrolled,
  };
}

/**
 * Hook to track scroll direction
 * @returns Scroll direction ('up' | 'down' | null)
 */
export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return scrollDirection;
}

/**
 * Hook to get element position relative to viewport
 * @returns Element position info
 */
export function useElementScroll(elementRef: React.RefObject<HTMLElement | null>) {
  const [elementPosition, setElementPosition] = useState({
    top: 0,
    bottom: 0,
    height: 0,
    isVisible: false,
    isInViewport: false,
  });

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const updatePosition = () => {
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      setElementPosition({
        top: rect.top + window.scrollY,
        bottom: rect.bottom + window.scrollY,
        height: rect.height,
        isVisible: rect.top < viewportHeight && rect.bottom > 0,
        isInViewport: rect.top >= 0 && rect.bottom <= viewportHeight,
      });
    };

    updatePosition();
    
    const handleScroll = throttle(updatePosition, 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [elementRef]);

  return elementPosition;
}