"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { SCALE, DURATION } from "@/config/animations";

interface DropdownProps {
  icon: LucideIcon;
  label: string;
  description: string;
  children: ReactNode;
  align?: "left" | "right";
  width?: string;
  panelClassName?: string;
}

export default function Dropdown({
  icon: Icon,
  label,
  description,
  children,
  align = "right",
  width = "w-64",
  panelClassName = "",
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const alignClass = align === "left"
    ? "left-0 sm:left-auto sm:right-0"
    : "right-0";

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-4 py-2.5 bg-surface-elevated rounded-xl shadow-lg hover:shadow-xl hover:bg-interactive-primary/10 transition-all duration-300"
        whileHover={{ scale: SCALE.SUBTLE }}
        whileTap={{ scale: SCALE.TAP_LIGHT }}
      >
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-interactive-primary" />
          <div className="text-left">
            <p className="text-sm font-medium text-primary">{label}</p>
            <p className="text-xs text-muted">{description}</p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: DURATION.FAST }}
        >
          <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: DURATION.INSTANT }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: DURATION.FAST, ease: "easeOut" }}
              className={`absolute ${alignClass} mt-2 ${width} max-w-[calc(100vw-2rem)] bg-surface-elevated rounded-xl shadow-xl overflow-hidden z-50 ${panelClassName}`}
            >
              {children}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
