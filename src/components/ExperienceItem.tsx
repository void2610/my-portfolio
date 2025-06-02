"use client";

import { motion } from "framer-motion";

interface ExperienceItemProps {
  title: string;
  period: string;
  description: string;
  index: number;
}

export default function ExperienceItem({ title, period, description, index }: ExperienceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
      className="border-l-2 border-interactive-primary/30 pl-6"
    >
      <h3 className="font-semibold text-primary">{title}</h3>
      <p className="text-sm text-muted mb-2">{period}</p>
      <p className="text-secondary">{description}</p>
    </motion.div>
  );
}