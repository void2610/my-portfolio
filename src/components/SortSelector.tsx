"use client";

import { motion } from "framer-motion";
import { Calendar, CalendarArrowUp, Layers } from "lucide-react";
import Dropdown from "@/components/Dropdown";

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
  const currentOption = sortOptions.find((opt) => opt.value === value)!;

  return (
    <Dropdown
      icon={currentOption.icon}
      label={currentOption.label}
      description={currentOption.description}
    >
      {sortOptions.map((option, index) => {
        const Icon = option.icon;
        const isSelected = option.value === value;

        return (
          <motion.button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`w-full flex items-center gap-3 px-4 py-3 transition-all duration-200 ${
              isSelected
                ? "bg-interactive-primary/10 text-interactive-primary"
                : "hover:bg-interactive-primary/10 text-primary"
            }`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ x: 4 }}
          >
            <div className={`p-2 rounded-lg ${
              isSelected
                ? "bg-interactive-primary/20"
                : "bg-interactive-primary/5"
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
    </Dropdown>
  );
}
