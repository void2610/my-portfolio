"use client";

import { motion } from "framer-motion";
import { Card, CardBody, Button } from "@heroui/react";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { Project } from "@/data/projects";
import { platformConfig } from "@/config/platforms";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const config = platformConfig[project.platform];
  const Icon = config.icon;
  const [isFlipped, setIsFlipped] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative h-[320px] perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
      whileHover={{ 
        rotateX: 8,
        rotateY: 12,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
    >
      <motion.div
        className="relative w-full h-full cursor-pointer preserve-3d"
        animate={{ rotateX: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {/* Front Side */}
        <Card className={`absolute inset-0 overflow-hidden border-2 rounded-2xl backface-hidden border-transparent tilted-card-shadow`}>
          <div className="relative h-full overflow-hidden rounded-2xl">
            {project.imageUrl && !imageError ? (
              <Image 
                src={project.imageUrl} 
                alt={project.title}
                width={400}
                height={200}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
            
            {/* Platform Icon */}
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`absolute top-4 right-4 w-10 h-10 rounded-xl bg-gradient-to-br ${config.color} flex items-center justify-center shadow-lg backdrop-blur-sm cursor-pointer`}
              onClick={(e) => e.stopPropagation()}
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-5 h-5 text-white" />
            </motion.a>
            
            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
                {project.title}
              </h3>
              <p className={`text-sm font-medium text-white/90 drop-shadow-md`}>
                {config.name}
              </p>
            </div>
          </div>
        </Card>

        {/* Back Side */}
        <Card className={`absolute inset-0 overflow-hidden border-2 rounded-2xl backface-hidden rotate-x-180 border-transparent flex tilted-card-shadow`}>
          <div className="absolute inset-0">
            {project.imageUrl && !imageError ? (
              <Image 
                src={project.imageUrl} 
                alt={project.title}
                width={400}
                height={200}
                className="w-full h-full object-cover blur-md scale-110"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900" />
            )}
            <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />
          </div>
          
          <CardBody className="relative z-10 p-6 h-full flex flex-col text-white">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${config.color} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <p className="text-sm text-white/80 font-medium">{config.name}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-white/70 text-xs font-medium">
                  {formatDate(project.publishedDate)}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-4">
              <p className="text-sm text-white/90 leading-relaxed line-clamp-3">
                {project.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1 text-sm rounded-full font-medium bg-gradient-to-r ${config.color} text-white shadow-sm`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Footer */}
            <div className="pt-6 border-t border-white/20 mt-auto">
              <Button
                as="a"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-gradient-to-r ${config.color} text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-full px-6 py-3 w-full flex items-center justify-center gap-2`}
              >
                <ExternalLink className="w-4 h-4" />
                プロジェクトを見る
              </Button>
            </div>
          </CardBody>
        </Card>
      </motion.div>
    </motion.div>
  );
}