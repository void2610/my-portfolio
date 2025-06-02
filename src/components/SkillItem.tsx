"use client";

import { motion } from "framer-motion";
import { fadeInLeft, createStaggerDelay } from "@/config/animations";

interface SkillItemProps {
  name: string;
  level: number;
  index: number;
}

export default function SkillItem({ name, level, index }: SkillItemProps) {
  const delay = createStaggerDelay(index, 0.5);
  
  return (
    <motion.div
      variants={fadeInLeft}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.3, delay }}
    >
      <div className="flex justify-between mb-2">
        <span className="text-secondary">{name}</span>
        <span className="text-muted text-sm">{level}%</span>
      </div>
      <div className="h-2 bg-surface-elevated rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: delay + 0.2 }}
        />
      </div>
    </motion.div>
  );
}