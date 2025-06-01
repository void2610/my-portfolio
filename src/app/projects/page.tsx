"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import SortSelector from "@/components/SortSelector";
import TagFilter from "@/components/TagFilter";
import { projects } from "@/data/projects";

type SortOption = "date-desc" | "date-asc" | "platform";

export default function Projects() {
  const [sortOption, setSortOption] = useState<SortOption>("date-desc");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // すべてのタグとその使用回数を収集
  const tagCounts = projects.reduce((acc, project) => {
    project.tags.forEach(tag => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  // タグを使用回数でソート（多い順）
  const allTags = Object.keys(tagCounts).sort((a, b) => tagCounts[b] - tagCounts[a]);

  // フィルターとソートを適用
  const filteredAndSortedProjects = [...projects]
    .filter(project => 
      selectedTags.length === 0 || 
      selectedTags.some(tag => project.tags.includes(tag))
    )
    .sort((a, b) => {
    switch (sortOption) {
      case "date-desc":
        return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
      case "date-asc":
        return new Date(a.publishedDate).getTime() - new Date(b.publishedDate).getTime();
      case "platform":
        // プラットフォーム順: GitHub → unityroom → Steam
        const platformOrder = { github: 0, unityroom: 1, steam: 2 };
        return platformOrder[a.platform] - platformOrder[b.platform];
      default:
        return 0;
    }
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Projects
        </h1>
        <p className="text-xl text-secondary max-w-2xl mx-auto">
          ゲーム開発とソフトウェア開発の作品をご紹介します。
        </p>
      </motion.div>

      {/* Filter and Sort Options */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="flex justify-end items-center gap-3 mb-8"
      >
        {/* Tag Filter */}
        <TagFilter 
          tags={allTags}
          tagCounts={tagCounts}
          selectedTags={selectedTags}
          onChange={setSelectedTags}
        />
        
        {/* Sort Options */}
        <SortSelector value={sortOption} onChange={setSortOption} />
      </motion.div>

      {/* Project Grid */}
      {filteredAndSortedProjects.length > 0 ? (
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          key={`${sortOption}-${selectedTags.join(',')}`} // ソートとフィルター変更時に再レンダリング
        >
          {filteredAndSortedProjects.map((project, index) => (
            <ProjectCard key={`${project.title}-${project.platform}`} project={project} index={index} />
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <p className="text-xl text-secondary">
            選択されたタグに一致するプロジェクトがありません
          </p>
          <button
            onClick={() => setSelectedTags([])}
            className="mt-4 text-interactive-primary hover:underline"
          >
            フィルターをクリア
          </button>
        </motion.div>
      )}
    </div>
  );
}