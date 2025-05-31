"use client";

import { motion } from "framer-motion";
import { Card, CardBody, Button } from "@heroui/react";
import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

type Platform = 'github' | 'unityroom' | 'steam';

interface Project {
  id: string;
  title: string;
  description: string;
  platform: Platform;
  tags: string[];
  url: string;
  publishedDate: string;
  imageUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Portfolio Website",
    description: "Next.js と TypeScript で構築したポートフォリオサイト。レスポンシブデザインとダークモード対応。",
    platform: "github",
    tags: ["Next.js", "TypeScript", "React", "Tailwind"],
    url: "https://github.com/void2610/portfolio",
    publishedDate: "2024-12-01",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop"
  },
  {
    id: "2",
    title: "3D Puzzle Adventure",
    description: "Unityで制作した3Dパズルアドベンチャーゲーム。物理演算を活用したギミックが特徴です。",
    platform: "unityroom",
    tags: ["Unity", "C#", "3D", "Puzzle"],
    url: "https://unityroom.com/games/example1",
    publishedDate: "2024-11-15",
    imageUrl: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=400&h=200&fit=crop"
  },
  {
    id: "3",
    title: "Game Development Tools",
    description: "Unity 開発効率化のためのエディター拡張ツール集。アセット管理やシーン制作を支援。",
    platform: "github",
    tags: ["Unity", "C#", "Editor", "Tools"],
    url: "https://github.com/void2610/unity-tools",
    publishedDate: "2024-10-20",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop"
  },
  {
    id: "4",
    title: "Indie RPG Game",
    description: "Steam で配信中のインディーRPGゲーム。オリジナルストーリーと戦略的バトルシステム。",
    platform: "steam",
    tags: ["Unity", "C#", "RPG", "Indie"],
    url: "https://store.steampowered.com/app/example",
    publishedDate: "2024-09-10",
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=200&fit=crop"
  },
  {
    id: "5",
    title: "2D Action Platformer",
    description: "クラシックな2Dアクションプラットフォーマー。精密な操作感とレベルデザインにこだわりました。",
    platform: "unityroom",
    tags: ["Unity", "C#", "2D", "Action"],
    url: "https://unityroom.com/games/example2",
    publishedDate: "2024-08-05",
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=200&fit=crop"
  },
  {
    id: "6",
    title: "Simulation Game",
    description: "リアルタイム戦略シミュレーションゲーム。複雑なAIシステムと経済システムを実装。",
    platform: "steam",
    tags: ["Unity", "C#", "Strategy", "AI"],
    url: "https://store.steampowered.com/app/example2",
    publishedDate: "2024-07-22",
    imageUrl: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=200&fit=crop"
  }
];

// Custom Steam icon component
const SteamIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M11.979 0C5.678 0 0.511 4.86 0.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.029 4.524 4.524s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.624 0 11.999-5.375 11.999-12S18.603 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.082 3.332-1.379.263-.632.263-1.317 0-1.949-.265-.632-.713-1.078-1.344-1.344-.630-.261-1.316-.264-1.949 0l1.523.63c.956.394 1.407 1.472 1.014 2.43-.394.957-1.472 1.408-2.43 1.014l.013-.042zm9.955-9.435c-1.663 0-3.015-1.353-3.015-3.015 0-1.665 1.352-3.015 3.015-3.015 1.665 0 3.015 1.35 3.015 3.015 0 1.662-1.35 3.015-3.015 3.015zm-2.26-3.015c0-1.252 1.013-2.266 2.26-2.266 1.252 0 2.266 1.014 2.266 2.266 0 1.251-1.014 2.265-2.266 2.265-1.247 0-2.26-1.014-2.26-2.265z"/>
  </svg>
);

// Custom Unityroom icon component
const UnityroomIcon = () => (
  <svg viewBox="0 0 180 180" fill="currentColor" className="w-5 h-5">
    <path d="M89.000000,0.999999 
      C92.361671,1.000000 95.723335,1.000000 99.203445,1.268793 
      C100.230415,2.197768 101.048523,3.093434 102.061234,3.482372 
      C114.749725,8.355466 127.389824,13.370981 140.196655,17.915056 
      C153.901657,22.777826 155.000015,24.005650 155.000015,38.611012 
      C155.000000,75.251427 155.006592,111.891846 154.994629,148.532257 
      C154.992111,156.254242 152.117233,160.318008 145.038742,162.964630 
      C130.793320,168.290878 116.557205,173.642349 102.348099,179.064240 
      C101.740921,179.295914 101.442345,180.336334 101.000000,181.000000 
      C96.974495,181.000000 92.948997,181.000000 88.799332,180.740784 
      C84.250259,177.176468 82.985603,172.545258 82.987740,167.295456 
      C83.008224,116.826508 82.987312,66.357552 83.018150,15.888617 
      C83.021515,10.381287 83.664925,5.053647 89.276527,2.004473 
      C89.345825,1.966817 89.099174,1.347703 89.000000,0.999999 
      M101.336983,89.163521 
      C100.759865,95.100327 102.795692,98.143188 108.300102,100.099785 
      C112.431549,101.568352 115.714973,100.047997 117.916306,96.912506 
      C121.690613,91.536560 120.372055,86.019356 115.143089,83.036415 
      C109.867393,80.026817 104.849480,82.121849 101.336983,89.163521 
      z"/>
    <path d="M67.777725,26.378263 
      C65.566887,20.667305 61.254353,18.655525 55.350334,18.952961 
      C50.701057,19.187185 46.004269,19.317692 41.374889,18.934637 
      C31.378458,18.107491 28.193066,23.917774 28.133005,32.106438 
      C27.842432,71.723434 27.951506,111.343857 28.047167,150.962753 
      C28.065109,158.394226 30.333799,162.236603 36.824371,163.107361 
      C44.427540,164.127396 52.317326,164.036148 59.972492,163.292160 
      C65.300865,162.774292 67.989120,158.395309 67.989548,153.069885 
      C67.992905,111.120476 67.969849,69.171066 67.777725,26.378263 
      z"/>
  </svg>
);

const platformConfig = {
  github: {
    name: "GitHub",
    icon: Github,
    color: "from-gray-600 to-gray-800",
    bgColor: "bg-gray-50 dark:bg-gray-800/30",
    borderColor: "border-gray-300 dark:border-gray-600",
    textColor: "text-gray-700 dark:text-gray-300"
  },
  unityroom: {
    name: "unityroom", 
    icon: UnityroomIcon,
    color: "from-[#2E93FF] to-[#1E7AD8]",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    borderColor: "border-blue-300 dark:border-blue-600", 
    textColor: "text-[#2E93FF] dark:text-blue-300"
  },
  steam: {
    name: "Steam",
    icon: SteamIcon,
    color: "from-[#1b2838] to-[#2a475e]",
    bgColor: "bg-slate-50 dark:bg-slate-800/30",
    borderColor: "border-slate-300 dark:border-slate-600",
    textColor: "text-slate-700 dark:text-slate-300"
  }
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const config = platformConfig[project.platform];
  const Icon = config.icon;
  const [isFlipped, setIsFlipped] = useState(false);
  
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
          {project.imageUrl && (
            <div className="relative h-full overflow-hidden rounded-2xl">
              <Image 
                src={project.imageUrl} 
                alt={project.title}
                width={400}
                height={200}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
              
              {/* Platform Icon */}
              <div className={`absolute top-4 right-4 w-10 h-10 rounded-xl bg-gradient-to-br ${config.color} flex items-center justify-center shadow-lg backdrop-blur-sm`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              
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
          )}
        </Card>

        {/* Back Side */}
        <Card className={`absolute inset-0 overflow-hidden border-2 rounded-2xl backface-hidden rotate-x-180 border-transparent flex tilted-card-shadow`}>
          {project.imageUrl && (
            <div className="absolute inset-0">
              <Image 
                src={project.imageUrl} 
                alt={project.title}
                width={400}
                height={200}
                className="w-full h-full object-cover blur-md scale-110"
              />
              <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />
            </div>
          )}
          
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
                onPress={() => {}}
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
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
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}