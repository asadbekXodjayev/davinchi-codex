/**
 * Application-wide constants for Da Vinci Codex
 */

// ============================================
// SITE INFORMATION
// ============================================

export const SITE_INFO = {
  name: "Da Vinci Codex",
  tagline: "A Renaissance Illuminated Manuscript",
  description: "Explore the life, art, and genius of Leonardo da Vinci through a beautifully crafted digital experience.",
  author: "Da Vinci Codex Team",
  version: "1.0.0",
};

// ============================================
// ROUTES
// ============================================

export const ROUTES = {
  home: "/",
  timeline: "/timeline",
  artworks: "/artworks",
  artwork: (slug: string) => `/artwork/${slug}`,
  innovations: "/innovations",
  innovation: (slug: string) => `/innovation/${slug}`,
  biography: "/biography",
  legacy: "/legacy",
};

// ============================================
// NAVIGATION
// ============================================

export const NAVIGATION = [
  { name: "Home", href: ROUTES.home, icon: "home" },
  { name: "Timeline", href: ROUTES.timeline, icon: "clock" },
  { name: "Artworks", href: ROUTES.artworks, icon: "palette" },
  { name: "Innovations", href: ROUTES.innovations, icon: "lightbulb" },
  { name: "Biography", href: ROUTES.biography, icon: "user" },
  { name: "Legacy", href: ROUTES.legacy, icon: "star" },
];

// ============================================
// ANIMATION TIMING
// ============================================

export const ANIMATION_TIMING = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.8,
  slower: 1.2,
  cinematic: 2.0,
};

export const DELAYS = {
  none: 0,
  quick: 0.1,
  short: 0.2,
  medium: 0.4,
  long: 0.6,
  veryLong: 1.0,
};

// ============================================
// LAYOUT
// ============================================

export const LAYOUT = {
  maxWidth: 1400,
  containerPadding: {
    sm: "1rem",
    md: "2rem",
    lg: "4rem",
  },
  headerHeight: {
    mobile: 64,
    desktop: 80,
  },
};

// ============================================
// BREAKPOINTS
// ============================================

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

// ============================================
// Z-INDEX LAYERS
// ============================================

export const Z_INDEX = {
  base: 0,
  dropdown: 100,
  sticky: 200,
  fixed: 300,
  modalBackdrop: 400,
  modal: 500,
  popover: 600,
  tooltip: 700,
  toast: 800,
};

// ============================================
// EXTERNAL APIs
// ============================================

export const API_ENDPOINTS = {
  metMuseum: "https://collectionapi.metmuseum.org",
  rijksmuseum: "https://www.rijksmuseum.nl/api",
};

export const API_KEYS = {
  // These would be set in environment variables
  metMuseum: process.env.NEXT_PUBLIC_MET_MUSEUM_API_KEY,
  rijksmuseum: process.env.NEXT_PUBLIC_RIJKSMUSEUM_API_KEY,
};

// ============================================
// IMAGE PLACEHOLDERS
// ============================================

export const PLACEHOLDER_IMAGES = {
  artwork: "https://images.unsplash.com/photo-1578320339906-508e9c6b1d7c?w=800&h=600&fit=crop",
  portrait: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=600&fit=crop",
  manuscript: "https://images.unsplash.com/photo-1516961642265-531546e84af2?w=800&h=600&fit=crop",
  sketch: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop",
  vitruvian: "https://upload.wikimedia.org/wikipedia/commons/2/22/Da_Vitruvian.jpg",
};

// ============================================
// QUOTES (Da Vinci)
// ============================================

export const QUOTES = [
  {
    text: "Learning never exhausts the mind.",
    context: "Notebooks",
  },
  {
    text: "Art is never finished, only abandoned.",
    context: "Notebooks",
  },
  {
    text: "Simplicity is the ultimate sophistication.",
    context: "Attributed",
  },
  {
    text: "Time stays long enough for anyone who will use it.",
    context: "Notebooks",
  },
  {
    text: "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
    context: "Notebooks",
  },
  {
    text: "The noblest pleasure is the joy of understanding.",
    context: "Notebooks",
  },
];

// ============================================
// CATEGORIES
// ============================================

export const ARTWORK_CATEGORIES = [
  { id: "painting", name: "Paintings", count: 0 },
  { id: "drawing", name: "Drawings", count: 0 },
  { id: "manuscript", name: "Manuscripts", count: 0 },
  { id: "portrait", name: "Portraits", count: 0 },
];

export const INVENTION_CATEGORIES = [
  { id: "aeronautics", name: "Aeronautics", icon: "plane" },
  { id: "military", name: "Military", icon: "shield" },
  { id: "civilian", name: "Civilian", icon: "home" },
  { id: "anatomical", name: "Anatomical", icon: "heart" },
  { id: "architecture", name: "Architecture", icon: "building" },
];

// ============================================
// TEXTURE URLS
// ============================================

export const TEXTURE_URLS = {
  parchment: "https://www.transparenttextures.com/patterns/aged-paper.png",
  canvas: "https://www.transparenttextures.com/patterns/canvas-orange.png",
  wood: "https://www.transparenttextures.com/patterns/wood-pattern.png",
  leather: "https://www.transparenttextures.com/patterns/leather.png",
};