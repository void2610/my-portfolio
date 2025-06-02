"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Tag, X } from "lucide-react";

interface TagFilterProps {
  tags: string[];
  tagCounts: Record<string, number>;
  selectedTags: string[];
  onChange: (tags: string[]) => void;
}

export default function TagFilter({ tags, tagCounts, selectedTags, onChange }: TagFilterProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      onChange(selectedTags.filter(t => t !== tag));
    } else {
      onChange([...selectedTags, tag]);
    }
  };

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-4 py-2.5 bg-surface-elevated rounded-xl shadow-lg hover:shadow-xl hover:bg-interactive-primary/10 transition-all duration-300"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center gap-2">
          <Tag className="w-4 h-4 text-interactive-primary" />
          <div className="text-left">
            <p className="text-sm font-medium text-primary">
              タグで絞り込み
            </p>
            <p className="text-xs text-muted">
              {selectedTags.length > 0 
                ? `${selectedTags.length}個選択中` 
                : 'すべて表示'}
            </p>
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
              className="absolute left-0 sm:left-auto sm:right-0 mt-2 w-72 max-w-[calc(100vw-2rem)] max-h-96 bg-surface-elevated rounded-xl shadow-xl overflow-hidden z-50"
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

              {/* 選択されたタグのプレビュー */}
              {selectedTags.length > 0 && (
                <div className="px-4 py-3 border-t border-border-secondary bg-surface-elevated/50">
                  <p className="text-xs text-muted mb-2">選択中のタグ:</p>
                  <div className="flex flex-wrap gap-1">
                    {selectedTags.map(tag => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-1 px-2 py-0.5 bg-interactive-primary/10 text-interactive-primary rounded-full text-xs"
                      >
                        {tag}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleTag(tag);
                          }}
                          className="hover:bg-interactive-primary/20 rounded-full p-0.5"
                        >
                          <X className="w-2.5 h-2.5" />
                        </button>
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}