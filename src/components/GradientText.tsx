"use client";

import { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const gradientTextVariants = cva(
  "bg-clip-text text-transparent",
  {
    variants: {
      gradient: {
        primary: "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600",
        blue: "bg-gradient-to-r from-blue-500 to-cyan-500",
        purple: "bg-gradient-to-r from-purple-500 to-pink-500",
        warm: "bg-gradient-to-r from-orange-500 to-red-500",
      },
      size: {
        sm: "text-lg",
        md: "text-xl",
        lg: "text-2xl md:text-3xl",
        xl: "text-3xl md:text-4xl",
        "2xl": "text-4xl md:text-5xl",
        "3xl": "text-5xl md:text-6xl",
      },
      weight: {
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
      },
    },
    defaultVariants: {
      gradient: "primary",
      size: "lg",
      weight: "bold",
    },
  }
);

export interface GradientTextProps extends VariantProps<typeof gradientTextVariants> {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

export default function GradientText({
  children,
  gradient,
  size,
  weight,
  className = "",
  as = "span",
  ...props
}: GradientTextProps) {
  const Component = as;

  return (
    <Component
      className={`${gradientTextVariants({ gradient, size, weight })} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}