"use client";

import { motion } from "framer-motion";
import { fadeInRight, createStaggerDelay } from "@/config/animations";

interface ExperienceItemProps {
  title: string;
  period: string;
  description: string;
  index: number;
}

export default function ExperienceItem({ title, period, description, index }: ExperienceItemProps) {
  return (
    <motion.div
      variants={fadeInRight}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.5, delay: createStaggerDelay(index, 0.6) }}
      className="border-l-2 border-interactive-primary/30 pl-6"
    >
      <h3 className="font-semibold text-primary">{title}</h3>
      <p className="text-sm text-muted mb-2">{period}</p>
      <p className="text-secondary">{description}</p>
    </motion.div>
  );
}