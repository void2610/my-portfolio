import { Variants } from "framer-motion";

// Animation constants
export const DURATION = {
  INSTANT: 0.15,
  FAST: 0.2,
  QUICK: 0.3,
  MEDIUM: 0.5,
  DEFAULT: 0.6,
  SLOW: 0.8,
  VERY_SLOW: 1.0,
} as const;

export const DELAY = {
  NONE: 0,
  TINY: 0.1,
  SMALL: 0.2,
  MEDIUM: 0.3,
  LARGE: 0.4,
  EXTRA_LARGE: 0.8,
} as const;

export const SPRING = {
  STANDARD: { type: "spring" as const, stiffness: 400, damping: 10 },
  SOFT: { type: "spring" as const, stiffness: 300, damping: 30 },
  SNAPPY: { type: "spring" as const, stiffness: 500, damping: 30 },
  BOUNCY: { type: "spring" as const, stiffness: 400, damping: 15 },
} as const;

export const SCALE = {
  SUBTLE: 1.02,
  SMALL: 1.05,
  SLIGHT: 1.03,
  MEDIUM: 1.1,
  LARGE: 1.3,
  TAP_DOWN: 0.95,
  TAP_LIGHT: 0.98,
} as const;

export const STAGGER = {
  FAST: 0.03,
  DEFAULT: 0.05,
  MEDIUM: 0.1,
  SLOW: 0.15,
} as const;

export const EASING = {
  EASE_IN_OUT: "easeInOut" as const,
  EASE_OUT: "easeOut" as const,
  EASE_IN: "easeIn" as const,
} as const;

// Common animation variants
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
};

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
};

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
};

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export const scaleIn: Variants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
};

// Hover and tap animations
export const hoverScale = {
  whileHover: { scale: SCALE.SMALL },
  whileTap: { scale: SCALE.TAP_DOWN },
};

export const hoverScaleSubtle = {
  whileHover: { scale: SCALE.SUBTLE },
  whileTap: { scale: SCALE.TAP_LIGHT },
};

export const hoverScaleRotate = {
  whileHover: { scale: SCALE.MEDIUM, rotate: 5 },
  whileTap: { scale: SCALE.TAP_DOWN },
};

// Common transition presets (legacy - use SPRING constants for new code)
export const springTransition = SPRING.BOUNCY;

export const smoothTransition = {
  duration: DURATION.QUICK,
  ease: EASING.EASE_IN_OUT,
};

// Stagger children animation
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: STAGGER.MEDIUM,
    },
  },
};

// Helper function to create transition with delay
export const createTransition = (delay: number = DELAY.NONE, duration: number = DURATION.DEFAULT) => ({
  duration,
  delay,
  ease: EASING.EASE_OUT,
});

// Helper function for staggered animations with index
export const createStaggerDelay = (index: number, baseDelay: number = DELAY.LARGE, stagger: number = STAGGER.MEDIUM) => 
  baseDelay + index * stagger;