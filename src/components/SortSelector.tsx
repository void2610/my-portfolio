"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Calendar, CalendarArrowUp, Layers } from "lucide-react";

type SortOption = "date-desc" | "date-asc" | "platform";

interface SortSelectorProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

const sortOptions = [
  {
    value: "date-desc" as SortOption,
    label: "新しい順",
    icon: Calendar,
    description: "公開日",
  },
  {
    value: "date-asc" as SortOption,
    label: "古い順",
    icon: CalendarArrowUp,
    description: "公開日",
  },
  {
    value: "platform" as SortOption,
    label: "プラットフォーム",
    icon: Layers,
    description: "種類別",
  },
];

export default function SortSelector({ value, onChange }: SortSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const currentOption = sortOptions.find((opt) => opt.value === value)!;

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-4 py-2.5 bg-surface dark:bg-gray-800/90 backdrop-blur-sm border border-border-secondary rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center gap-2">
          <currentOption.icon className="w-4 h-4 text-interactive-primary" />
          <div className="text-left">
            <p className="text-sm font-medium text-primary">{currentOption.label}</p>
            <p className="text-xs text-muted">{currentOption.description}</p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
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
              transition={{ duration: 0.15 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute right-0 mt-2 w-64 max-w-[calc(100vw-2rem)] bg-surface dark:bg-gray-800 backdrop-blur-sm border border-border-secondary rounded-xl shadow-xl overflow-hidden z-50"
            >
              {sortOptions.map((option, index) => {
                const Icon = option.icon;
                const isSelected = option.value === value;
                
                return (
                  <motion.button
                    key={option.value}
                    onClick={() => {
                      onChange(option.value);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 transition-all duration-200 ${
                      isSelected
                        ? "bg-interactive-primary/10 text-interactive-primary"
                        : "hover:bg-white/5 dark:hover:bg-white/10 text-primary"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 4 }}
                  >
                    <div className={`p-2 rounded-lg ${
                      isSelected
                        ? "bg-interactive-primary/20"
                        : "bg-gray-100 dark:bg-gray-700/50"
                    }`}>
                      <Icon className={`w-4 h-4 ${
                        isSelected ? "text-interactive-primary" : "text-secondary"
                      }`} />
                    </div>
                    <div className="text-left flex-1">
                      <p className={`text-sm font-medium ${
                        isSelected ? "text-interactive-primary" : "text-primary"
                      }`}>
                        {option.label}
                      </p>
                      <p className="text-xs text-muted">{option.description}</p>
                    </div>
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      >
                        <svg className="w-5 h-5 text-interactive-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </motion.div>
                    )}
                  </motion.button>
                );
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}