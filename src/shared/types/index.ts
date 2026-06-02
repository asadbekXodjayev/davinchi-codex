/**
 * TypeScript interfaces for Da Vinci Codex data models
 */

// ============================================
// CORE DATA TYPES
// ============================================

export interface Artwork {
  id: string;
  slug: string;
  title: string;
  year: number | string;
  medium: string;
  dimensions: string;
  location: string;
  imageUrl: string;
  /** Short one-line lead shown under the title. */
  tagline: string;
  /** Brief summary used on cards and gallery tiles. */
  description: string;
  /** Extended multi-paragraph narrative ("About this work"). */
  about: string[];
  /** Materials, methods and stylistic technique. */
  technique: string;
  /** Why the work matters — its legacy and influence. */
  significance: string;
  historicalContext: string;
  /** Quick trivia / notable details. */
  facts: string[];
  /** Subject/motif tags shown as chips. */
  subjects: string[];
  /** Representative colour palette (name + hex) drawn from the work. */
  palette: { name: string; hex: string }[];
  category: "painting" | "drawing" | "manuscript" | "portrait";
}

export interface Invention {
  id: string;
  slug: string;
  name: string;
  year: number | string;
  category: "aeronautics" | "military" | "civilian" | "anatomical" | "architecture";
  /** Short one-line lead shown under the title. */
  tagline: string;
  /** Brief summary used on cards and grid tiles. */
  description: string;
  /** Extended multi-paragraph narrative ("About"). */
  about: string[];
  /** How the device was meant to operate. */
  explanation: string;
  /** Construction and materials. */
  materials: string;
  /** How the idea echoes in modern technology. */
  modernLegacy: string;
  /** Why the design matters. */
  significance: string;
  /** Quick trivia / notable details. */
  facts: string[];
  /** Theme/motif tags shown as chips. */
  subjects: string[];
  imageUrl: string;
  sketchUrl?: string;
}

export interface TimelineEvent {
  id: string;
  year: number;
  title: string;
  description: string;
  type: "birth" | "death" | "creation" | "milestone" | "location";
  relatedArtworkId?: string;
  relatedInventionId?: string;
}

export interface BiographySection {
  id: string;
  period: string;
  title: string;
  startDate: number;
  endDate: number;
  content: string;
  keyEvents: string[];
  featuredArtworkId?: string;
}

export interface LegacyImpact {
  id: string;
  field: "science" | "art" | "technology" | "medicine" | "architecture";
  title: string;
  description: string;
  modernConnection: string;
  icon: string;
}

// ============================================
// ANIMATION TYPES
// ============================================

export interface AnimationProps {
  variant: "fadeIn" | "slideUp" | "scaleIn" | "kenBurns" | "staggerChildren" | "revealText";
  duration?: number;
  delay?: number;
  easing?: string;
  trigger?: string;
}

export interface PageTransition {
  initial: Record<string, number | string>;
  animate: Record<string, number | string>;
  exit: Record<string, number | string>;
  transition: {
    duration: number;
    ease: string;
  };
}

// ============================================
// STATE TYPES
// ============================================

export interface AppState {
  currentArtwork: Artwork | null;
  selectedTimelineEvent: TimelineEvent | null;
  scrollProgress: number;
  loadingState: "idle" | "loading" | "success" | "error";
}

// ============================================
// API RESPONSE TYPES
// ============================================

export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  status: "idle" | "loading" | "success" | "error";
}

// ============================================
// COMPONENT PROPS TYPES
// ============================================

export interface WithAnimation {
  animation?: AnimationProps;
  className?: string;
}

export interface WithMargin {
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}