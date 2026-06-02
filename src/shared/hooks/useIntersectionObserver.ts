"use client";

import { useState, useEffect, useRef, useCallback } from "react";

/**
 * Options for the intersection observer
 */
export interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
  skip?: boolean;
}

/**
 * Hook to detect when an element enters the viewport
 * @param options - Intersection observer options
 * @returns Observer ref and visibility state
 */
export function useIntersectionObserver(
  options: IntersectionObserverOptions = {}
): { ref: React.RefObject<HTMLElement | null>; isVisible: boolean; entry: IntersectionObserverEntry | null } {
  const [isVisible, setIsVisible] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const ref = useRef<HTMLElement | null>(null);
  const hasIntersected = useRef(false);

  const {
    root = null,
    rootMargin = "0px",
    threshold = 0.1,
    triggerOnce = true,
    skip = false,
  } = options;

  useEffect(() => {
    if (skip || !ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        
        if (entry.isIntersecting) {
          setEntry(entry);
          setIsVisible(true);
          
          if (triggerOnce && !hasIntersected.current) {
            hasIntersected.current = true;
            observer.unobserve(ref.current!);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { root, rootMargin, threshold }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [root, rootMargin, threshold, triggerOnce, skip]);

  return { ref, isVisible, entry };
}

/**
 * Hook to observe multiple elements with intersection observer
 * @param options - Intersection observer options
 * @returns Map of element IDs to visibility state
 */
export function useMultipleIntersectionObserver(
  options: IntersectionObserverOptions = {}
): { 
  register: (id: string) => React.RefObject<HTMLElement | null>;
  visibility: Map<string, boolean>;
} {
  const [visibility, setVisibility] = useState<Map<string, boolean>>(new Map());
  const refs = useRef<Map<string, React.RefObject<HTMLElement | null>>>(new Map());

  const {
    root = null,
    rootMargin = "0px",
    threshold = 0.1,
    triggerOnce = true,
    skip = false,
  } = options;

  const register = useCallback((id: string) => {
    if (!refs.current.has(id)) {
      refs.current.set(id, { current: null });
    }
    return refs.current.get(id)!;
  }, []);

  useEffect(() => {
    if (skip) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const newVisibility = new Map(visibility);
        
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          const id = element.dataset.observerId;
          
          if (id) {
            if (entry.isIntersecting) {
              newVisibility.set(id, true);
              
              if (triggerOnce) {
                observer.unobserve(entry.target);
              }
            } else if (!triggerOnce) {
              newVisibility.set(id, false);
            }
          }
        });
        
        setVisibility(newVisibility);
      },
      { root, rootMargin, threshold }
    );

    refs.current.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [root, rootMargin, threshold, triggerOnce, skip, visibility]);

  return { register, visibility };
}

/**
 * Hook to detect when element is fully in viewport
 * @param threshold - Percentage of element that must be visible (0-1)
 * @returns Visibility state and ref
 */
export function useElementFullyVisible(threshold: number = 0.9) {
  return useIntersectionObserver({
    threshold,
    triggerOnce: false,
  });
}