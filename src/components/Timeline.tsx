"use client";

import { motion } from "framer-motion";
import GradientText from "./GradientText";
import { DURATION, DELAY, SPRING, SCALE, STAGGER } from "@/config/animations";
import { timelineData } from "@/data/timeline";

export default function Timeline() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: DURATION.DEFAULT, delay: DELAY.EXTRA_LARGE }}
        className="text-center mb-12"
      >
        <GradientText as="h2" size="xl">
          Timeline
        </GradientText>
      </motion.div>

      <div className="relative max-w-4xl mx-auto pl-4 md:pl-0">
        {/* 背景の縦線 */}
        <div 
          className="absolute left-8 md:left-4 top-1 w-0.5 bg-gray-300 dark:bg-gray-700"
          style={{ height: `calc(100% - 1.25rem)` }}
        />
        
        {/* タイムラインアイテム */}
        <div className="relative">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: DURATION.MEDIUM, delay: 0.9 + index * STAGGER.MEDIUM }}
              className="relative flex items-start pb-12 last:pb-0"
            >
              {/* ノード */}
              <motion.div 
                className="absolute left-8 md:left-4 top-1 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-700 transform -translate-x-1/2 z-10"
                whileHover={{ scale: SCALE.LARGE }}
                transition={SPRING.STANDARD}
              />
              
              {/* コンテンツ */}
              <div className="ml-16 md:ml-12">
                <motion.div
                  className="group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: DURATION.FAST }}
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