import { type Variants } from "framer-motion";

/**
 * Shared Framer Motion animation variants for the Da Vinci Codex
 * All animations are designed for cinematic Renaissance aesthetic
 */

// ============================================
// FADE ANIMATIONS
// ============================================

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.4, ease: "easeIn" }
  }
};

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  },
  exit: { 
    opacity: 0, 
    y: 20,
    transition: { duration: 0.4 }
  }
};

export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -40 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.4 }
  }
};

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -50 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  },
  exit: { 
    opacity: 0, 
    x: -20,
    transition: { duration: 0.4 }
  }
};

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 50 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  },
  exit: { 
    opacity: 0, 
    x: 20,
    transition: { duration: 0.4 }
  }
};

// ============================================
// SCALE ANIMATIONS
// ============================================

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }
  },
  exit: { 
    opacity: 0, 
    scale: 0.95,
    transition: { duration: 0.3 }
  }
};

export const scaleInBounce: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.8, 
      type: "spring",
      damping: 12,
      stiffness: 100
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.9,
    transition: { duration: 0.3 }
  }
};

// ============================================
// ROTATE ANIMATIONS
// ============================================

export const rotateIn: Variants = {
  initial: { opacity: 0, rotate: -10, scale: 0.9 },
  animate: { 
    opacity: 1, 
    rotate: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  },
  exit: { 
    opacity: 0, 
    rotate: 5,
    transition: { duration: 0.3 }
  }
};

// ============================================
// KEN BURNS EFFECT
// ============================================

export const kenBurns: Variants = {
  initial: { scale: 1, opacity: 0.8 },
  animate: { 
    scale: [1, 1.15, 1],
    opacity: [0.8, 1, 0.8],
    transition: { 
      duration: 20,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

export const kenBurnsSlow: Variants = {
  initial: { scale: 1 },
  animate: { 
    scale: [1, 1.1, 1],
    transition: { 
      duration: 30,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

// ============================================
// TEXT REVEAL ANIMATIONS
// ============================================

export const revealText: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export const staggerTextContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const staggerTextItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// ============================================
// STAGGER CONTAINER
// ============================================

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};

export const staggerContainerFast: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

// ============================================
// CARD ANIMATIONS
// ============================================

export const cardHover = {
  rest: { 
    scale: 1, 
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  },
  hover: { 
    scale: 1.03, 
    y: -8,
    transition: { duration: 0.3, ease: "easeOut" }
  },
  tap: { scale: 0.98 }
};

export const cardHoverElegant = {
  rest: { 
    scale: 1, 
    y: 0,
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
  },
  hover: { 
    scale: 1.02, 
    y: -4,
    boxShadow: "0 20px 40px rgba(212, 175, 119, 0.3)",
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
  },
  tap: { scale: 0.99 }
};

// ============================================
// PAGE TRANSITION
// ============================================

export const pageTransition: Variants = {
  initial: { 
    opacity: 0,
    y: 20
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  exit: { 
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 }
  }
};

export const pageTransitionFade: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.5 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

// ============================================
// ORNAMENTAL DECORATIONS
// ============================================

export const ornateBorder: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 1, ease: "easeOut" }
  }
};

export const goldLeafGlow: Variants = {
  rest: { 
    textShadow: "0 0 10px rgba(212, 175, 119, 0.3)"
  },
  hover: { 
    textShadow: "0 0 20px rgba(212, 175, 119, 0.6), 0 0 40px rgba(212, 175, 119, 0.3)",
    transition: { duration: 0.4 }
  }
};

// ============================================
// FLOATING ANIMATION
// ============================================

export const floating: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity
    }
  }
};

export const floatingSlow: Variants = {
  animate: {
    y: [0, -5, 0],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity
    }
  }
};

// ============================================
// SEQUENCE ANIMATIONS
// ============================================

export const heroSequence = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  },
  title: {
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  },
  subtitle: {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  },
  cta: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, delay: 0.6 }
    }
  }
};

// ============================================
// TIMELINE ANIMATIONS
// ============================================

export const timelineNode: Variants = {
  initial: { opacity: 0, x: -30 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  hover: { 
    x: 5,
    transition: { duration: 0.2 }
  }
};

export const timelineLine: Variants = {
  initial: { scaleX: 0 },
  animate: { 
    scaleX: 1,
    transition: { 
      duration: 1.5, 
      ease: [0.22, 1, 0.36, 1] 
    }
  }
};

// ============================================
// GALLERY ANIMATIONS
// ============================================

export const galleryItem: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.3 }
  }
};

// ============================================
// HELPER FUNCTION TO GET VARIANT
// ============================================

export type AnimationVariantType = 
  | 'fadeIn'
  | 'fadeInUp'
  | 'fadeInDown'
  | 'fadeInLeft'
  | 'fadeInRight'
  | 'scaleIn'
  | 'scaleInBounce'
  | 'rotateIn'
  | 'kenBurns'
  | 'kenBurnsSlow'
  | 'revealText'
  | 'staggerContainer'
  | 'pageTransition'
  | 'pageTransitionFade';

export function getAnimationVariant(type: AnimationVariantType): Variants {
  switch (type) {
    case 'fadeIn':
      return fadeIn;
    case 'fadeInUp':
      return fadeInUp;
    case 'fadeInDown':
      return fadeInDown;
    case 'fadeInLeft':
      return fadeInLeft;
    case 'fadeInRight':
      return fadeInRight;
    case 'scaleIn':
      return scaleIn;
    case 'scaleInBounce':
      return scaleInBounce;
    case 'rotateIn':
      return rotateIn;
    case 'kenBurns':
      return kenBurns;
    case 'kenBurnsSlow':
      return kenBurnsSlow;
    case 'revealText':
      return revealText;
    case 'staggerContainer':
      return staggerContainer;
    case 'pageTransition':
      return pageTransition;
    case 'pageTransitionFade':
      return pageTransitionFade;
    default:
      return fadeIn;
  }
}
