"use client";

import { ReactNode } from "react";
import AnimatedContainer from "@/components/animations/AnimatedContainer";
import GradientText from "@/components/GradientText";

interface PageHeaderProps {
  title: string;
  subtitle?: ReactNode;
  className?: string;
}

export default function PageHeader({ title, subtitle, className = "mb-12" }: PageHeaderProps) {
  return (
    <AnimatedContainer className={`text-center ${className}`}>
      <GradientText as="h1" size="2xl">
        {title}
      </GradientText>
      {subtitle && (
        <p className="text-xl text-secondary max-w-2xl mx-auto mt-4">
          {subtitle}
        </p>
      )}
    </AnimatedContainer>
  );
}
