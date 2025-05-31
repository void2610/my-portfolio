"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  const sortedProjects = [...projects].sort((a, b) => 
    new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );

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
          ゲーム開発とソフトウェア開発の作品を公開日順にご紹介します。
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {sortedProjects.map((project, index) => (
          <ProjectCard key={`${project.title}-${project.platform}`} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}