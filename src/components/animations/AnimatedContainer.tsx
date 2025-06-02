"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";
import { 
  fadeInUp, 
  fadeInDown, 
  fadeInLeft, 
  fadeInRight, 
  fadeIn, 
  scaleIn,
  createTransition 
} from "@/config/animations";

const animationVariants = {
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  fadeIn,
  scaleIn,
};

export type AnimationVariant = keyof typeof animationVariants;

interface AnimatedContainerProps extends Omit<HTMLMotionProps<"div">, "initial" | "animate" | "transition"> {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
  as?: "div" | "section" | "article" | "main" | "aside";
}

export default function AnimatedContainer({
  children,
  variant = "fadeInUp",
  delay = 0,
  duration = 0.6,
  className = "",
  as = "div",
  ...motionProps
}: AnimatedContainerProps) {
  const Component = motion[as];
  const selectedVariant = animationVariants[variant];

  return (
    <Component
      variants={selectedVariant}
      initial="initial"
      animate="animate"
      transition={createTransition(delay, duration)}
      className={className}
      {...motionProps}
    >
      {children}
    </Component>
  );
}

// Specialized component for staggered children animations
interface StaggerContainerProps extends AnimatedContainerProps {
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  delay = 0,
  className = "",
  ...props
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={{
        animate: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}