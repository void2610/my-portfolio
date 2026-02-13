import { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const surfaceCardVariants = cva(
  "rounded-2xl",
  {
    variants: {
      variant: {
        default: "bg-surface-elevated",
        danger: "bg-danger-50 dark:bg-danger-900/20",
      },
      shadow: {
        none: "",
        default: "shadow-lg",
        hover: "shadow-lg hover:shadow-xl transition-shadow",
      },
      padding: {
        none: "",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
    },
    defaultVariants: {
      variant: "default",
      shadow: "default",
      padding: "md",
    },
  }
);

export interface SurfaceCardProps extends VariantProps<typeof surfaceCardVariants> {
  children: ReactNode;
  className?: string;
}

export default function SurfaceCard({
  children,
  variant,
  shadow,
  padding,
  className = "",
}: SurfaceCardProps) {
  return (
    <div className={`${surfaceCardVariants({ variant, shadow, padding })} ${className}`}>
      {children}
    </div>
  );
}
