"use client";

import { motion } from "framer-motion";

interface SkillItemProps {
  name: string;
  level: number;
  index: number;
}

export default function SkillItem({ name, level, index }: SkillItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
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
          transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
        />
      </div>
    </motion.div>
  );
}