"use client";

import { motion } from "framer-motion";
import { timelineData } from "@/data/timeline";

export default function Timeline() {
  return (
    <div className="mt-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
      >
        Timeline
      </motion.h2>

      <div className="relative max-w-4xl mx-auto pl-8 md:pl-0">
        {/* タイムラインアイテム */}
        <div className="relative">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              className="relative flex items-start gap-6 pb-12 last:pb-0"
            >
              {/* ノードと接続線 */}
              <div className="absolute left-0 md:left-4 top-0 bottom-0">
                {/* 接続線（最後の要素以外） */}
                {index < timelineData.length - 1 && (
                  <div className="absolute top-5 left-2 w-1 bg-gray-300 dark:bg-gray-600" 
                       style={{ height: 'calc(100% + 3rem)' }} />
                )}
                
                {/* ノード */}
                <motion.div
                  className="absolute top-0 left-0 z-10"
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {/* 外側のリング */}
                  <div className="w-5 h-5 rounded-full border-2 border-interactive-primary bg-surface" />
                  {/* 内側のドット */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-interactive-primary" />
                  </div>
                  {/* ホバー時のグロー効果 */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-interactive-primary/20"
                    initial={{ scale: 1, opacity: 0 }}
                    whileHover={{ scale: 2.5, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </div>

              {/* コンテンツ */}
              <div className="flex-1 ml-8 md:ml-12 -mt-0.5">
                <motion.div
                  className="group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* 日付 */}
                  <span className="text-sm font-medium text-muted mb-1 block">
                    {item.date}
                  </span>
                  
                  {/* タイトル */}
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-interactive-primary transition-colors">
                    {item.title}
                  </h3>
                  
                  {/* 説明 */}
                  {item.description && (
                    <p className="text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}