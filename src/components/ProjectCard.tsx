"use client";

import { motion } from "framer-motion";
import { Card, CardBody, Button } from "@heroui/react";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { Project } from "@/data/projects";
import { platformConfig } from "@/config/platforms";
import { formatDate } from "@/utils/date";
import { useImageError } from "@/hooks/useImageError";
import { DURATION, SPRING, SCALE, STAGGER, EASING } from "@/config/animations";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const config = platformConfig[project.platform];
  const Icon = config.icon;
  const [isFlipped, setIsFlipped] = useState(false);
  const { handleImageError, hasError } = useImageError();
  
  // Sanitize title for HTML ID by replacing spaces and special characters
  const sanitizedId = `project-${project.title.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}`;

  return (
    <motion.div
      id={sanitizedId}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: DURATION.MEDIUM, delay: index * STAGGER.MEDIUM }}
      className="relative h-[320px] perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
      whileHover={{ 
        rotateX: 8,
        rotateY: 12,
        scale: SCALE.SUBTLE,
        transition: { duration: DURATION.QUICK }
      }}
    >
      <motion.div
        className="relative w-full h-full cursor-pointer preserve-3d"
        animate={{ rotateX: isFlipped ? 180 : 0 }}
        transition={{ duration: DURATION.MEDIUM, ease: EASING.EASE_IN_OUT }}
      >
        {/* Front Side */}
        <Card className={`absolute inset-0 overflow-hidden border-2 rounded-2xl backface-hidden border-transparent tilted-card-shadow`}>
          <div className="relative h-full overflow-hidden rounded-2xl">
            {project.imageUrl && !hasError(project.imageUrl) ? (
              <Image 
                src={project.imageUrl} 
                alt={project.title}
                width={400}
                height={200}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                onError={() => handleImageError(project.imageUrl!)}
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
                scale: SCALE.MEDIUM,
                rotate: 5,
                transition: { duration: DURATION.FAST }
              }}
              whileTap={{ scale: SCALE.TAP_DOWN }}
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
            {project.imageUrl && !hasError(project.imageUrl) ? (
              <Image 
                src={project.imageUrl} 
                alt={project.title}
                width={400}
                height={200}
                className="w-full h-full object-cover blur-md scale-110"
                onError={() => handleImageError(project.imageUrl!)}
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
              <motion.div
                whileHover={{ scale: SCALE.SLIGHT }}
                whileTap={{ scale: SCALE.TAP_LIGHT }}
                transition={SPRING.STANDARD}
              >
                <Button
                  as="a"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative bg-gradient-to-r ${config.color} text-white font-semibold shadow-lg rounded-full px-6 py-3 w-full flex items-center justify-center gap-2 overflow-hidden group`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  <ExternalLink className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="relative z-10">プロジェクトを見る</span>
                </Button>
              </motion.div>
            </div>
          </CardBody>
        </Card>
      </motion.div>
    </motion.div>
  );
}