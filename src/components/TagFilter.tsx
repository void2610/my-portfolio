"use client";

import { motion } from "framer-motion";
import { Tag } from "lucide-react";
import Dropdown from "@/components/Dropdown";

interface TagFilterProps {
  tags: string[];
  tagCounts: Record<string, number>;
  selectedTags: string[];
  onChange: (tags: string[]) => void;
}

export default function TagFilter({ tags, tagCounts, selectedTags, onChange }: TagFilterProps) {
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      onChange(selectedTags.filter(t => t !== tag));
    } else {
      onChange([...selectedTags, tag]);
    }
  };

  return (
    <Dropdown
      icon={Tag}
      label="タグで絞り込み"
      description={selectedTags.length > 0 ? `${selectedTags.length}個選択中` : "すべて表示"}
      align="left"
      width="w-72"
      panelClassName="max-h-96"
    >
      {/* ヘッダー */}
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-primary">タグを選択</p>
          {selectedTags.length > 0 && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => onChange([])}
              className="text-xs text-red-600 dark:text-red-400 hover:underline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              すべてクリア
            </motion.button>
          )}
        </div>
      </div>

      {/* タグリスト */}
      <div className="overflow-y-auto max-h-80 p-2">
        {tags.map((tag, index) => {
          const isSelected = selectedTags.includes(tag);

          return (
            <motion.button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                isSelected
                  ? "bg-interactive-primary/10"
                  : "hover:bg-white/5 dark:hover:bg-white/10"
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.03 }}
              whileHover={{ x: 2 }}
            >
              {/* チェックボックス */}
              <div className={`w-4 h-4 rounded transition-all duration-200 flex items-center justify-center ${
                isSelected
                  ? "bg-interactive-primary"
                  : "bg-interactive-primary/10"
              }`}>
                {isSelected && (
                  <motion.svg
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </motion.svg>
                )}
              </div>

              {/* タグ名と使用回数 */}
              <span className={`text-sm flex-1 text-left ${
                isSelected ? "text-interactive-primary font-medium" : "text-primary"
              }`}>
                {tag}
              </span>
              <span className={`text-xs ${
                isSelected ? "text-interactive-primary" : "text-muted"
              }`}>
                {tagCounts[tag]}
              </span>
            </motion.button>
          );
        })}
      </div>
    </Dropdown>
  );
}
