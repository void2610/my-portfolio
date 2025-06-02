import { Variants } from "framer-motion";

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
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};

export const hoverScaleRotate = {
  whileHover: { scale: 1.1, rotate: 5 },
  whileTap: { scale: 0.95 },
};

// Common transition presets
export const springTransition = {
  type: "spring",
  stiffness: 400,
  damping: 15,
};

export const smoothTransition = {
  duration: 0.3,
  ease: "easeInOut",
};

// Stagger children animation
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Helper function to create transition with delay
export const createTransition = (delay = 0, duration = 0.6) => ({
  duration,
  delay,
  ease: "easeOut",
});

// Helper function for staggered animations with index
export const createStaggerDelay = (index: number, baseDelay = 0.4, stagger = 0.1) => 
  baseDelay + index * stagger;