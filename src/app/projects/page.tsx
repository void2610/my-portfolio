"use client";

import { motion } from "framer-motion";
import { Card, CardBody, Button } from "@heroui/react";
import { GitBranch, ExternalLink, Gamepad2, Monitor, Calendar, Code, Users, Star } from "lucide-react";
import { useState } from "react";

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
  backInfo?: {
    stats?: {
      downloads?: number;
      stars?: number;
      contributors?: number;
    };
    details?: string[];
    technologies?: string[];
  };
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
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop",
    backInfo: {
      stats: { stars: 24, contributors: 2 },
      details: ["レスポンシブデザイン対応", "ダークモード切り替え", "Framer Motion アニメーション", "HeroUI コンポーネント"],
      technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"]
    }
  },
  {
    id: "2",
    title: "3D Puzzle Adventure",
    description: "Unityで制作した3Dパズルアドベンチャーゲーム。物理演算を活用したギミックが特徴です。",
    platform: "unityroom",
    tags: ["Unity", "C#", "3D", "Puzzle"],
    url: "https://unityroom.com/games/example1",
    publishedDate: "2024-11-15",
    imageUrl: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=400&h=200&fit=crop",
    backInfo: {
      stats: { downloads: 1250 },
      details: ["物理演算ベースのパズル", "10のユニークなレベル", "インタラクティブな環境", "直感的な操作システム"],
      technologies: ["Unity 2022.3", "C#", "Physics System", "Post-Processing"]
    }
  },
  {
    id: "3",
    title: "Game Development Tools",
    description: "Unity 開発効率化のためのエディター拡張ツール集。アセット管理やシーン制作を支援。",
    platform: "github",
    tags: ["Unity", "C#", "Editor", "Tools"],
    url: "https://github.com/void2610/unity-tools",
    publishedDate: "2024-10-20",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop",
    backInfo: {
      stats: { stars: 156, contributors: 5 },
      details: ["自動アセット整理", "シーン管理ツール", "バッチ処理機能", "カスタムインスペクター"],
      technologies: ["Unity Editor API", "C#", "Custom Inspector", "ScriptableObject"]
    }
  },
  {
    id: "4",
    title: "Indie RPG Game",
    description: "Steam で配信中のインディーRPGゲーム。オリジナルストーリーと戦略的バトルシステム。",
    platform: "steam",
    tags: ["Unity", "C#", "RPG", "Indie"],
    url: "https://store.steampowered.com/app/example",
    publishedDate: "2024-09-10",
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=200&fit=crop",
    backInfo: {
      stats: { downloads: 3400 },
      details: ["15時間のメインストーリー", "ターン制戦略バトル", "キャラクター育成システム", "サイドクエスト20個"],
      technologies: ["Unity 2023.1", "C#", "Addressables", "Timeline"]
    }
  },
  {
    id: "5",
    title: "2D Action Platformer",
    description: "クラシックな2Dアクションプラットフォーマー。精密な操作感とレベルデザインにこだわりました。",
    platform: "unityroom",
    tags: ["Unity", "C#", "2D", "Action"],
    url: "https://unityroom.com/games/example2",
    publishedDate: "2024-08-05",
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=200&fit=crop",
    backInfo: {
      stats: { downloads: 890 },
      details: ["流動的なキャラクター操作", "8つの挑戦的なステージ", "隠しアイテム収集要素", "ボス戦バトル"],
      technologies: ["Unity 2D", "C#", "Cinemachine", "Input System"]
    }
  },
  {
    id: "6",
    title: "Simulation Game",
    description: "リアルタイム戦略シミュレーションゲーム。複雑なAIシステムと経済システムを実装。",
    platform: "steam",
    tags: ["Unity", "C#", "Strategy", "AI"],
    url: "https://store.steampowered.com/app/example2",
    publishedDate: "2024-07-22",
    imageUrl: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=200&fit=crop",
    backInfo: {
      stats: { downloads: 2100 },
      details: ["リアルタイム経済システム", "高度なAI行動パターン", "マルチプレイヤー対応", "モッドサポート"],
      technologies: ["Unity Netcode", "C#", "Behavior Trees", "SQLite"]
    }
  }
];

const platformConfig = {
  github: {
    name: "GitHub",
    icon: GitBranch,
    color: "from-gray-600 to-gray-800",
    bgColor: "bg-gray-50 dark:bg-gray-800/30",
    borderColor: "border-gray-300 dark:border-gray-600",
    textColor: "text-gray-700 dark:text-gray-300"
  },
  unityroom: {
    name: "unityroom", 
    icon: Gamepad2,
    color: "from-[#2E93FF] to-[#1E7AD8]",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    borderColor: "border-blue-300 dark:border-blue-600", 
    textColor: "text-[#2E93FF] dark:text-blue-300"
  },
  steam: {
    name: "Steam",
    icon: Monitor,
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

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative h-[280px] perspective-1000"
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
              <img 
                src={project.imageUrl} 
                alt={project.title}
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
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover blur-md scale-110"
              />
              <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />
            </div>
          )}
          
          <CardBody className="relative z-10 p-4 h-full flex text-white w-full">
            {/* Left Column */}
            <div className="w-1/2 pr-3">
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${config.color} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{project.title}</h3>
                  <p className="text-xs text-white/80 font-medium">{config.name}</p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-3">
                <p className="text-xs text-white/90 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-1.5 py-0.5 text-xs rounded-full font-medium bg-gradient-to-r ${config.color} text-white shadow-sm`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Date and Link */}
              <div className="mt-auto">
                <Button
                  as="a"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  className={`bg-gradient-to-r ${config.color} text-white font-medium shadow-md hover:shadow-lg transition-shadow text-xs`}
                  endContent={<ExternalLink className="w-3 h-3" />}
                  onPress={() => {}}
                  onClick={(e: React.MouseEvent) => e.stopPropagation()}
                >
                  View Project
                </Button>
                <p className="text-white/70 text-xs font-medium mt-2">
                  {formatDate(project.publishedDate)}
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-1/2 pl-3">
              {/* Stats */}
              {project.backInfo?.stats && (
                <div className="mb-3">
                  <h4 className="text-xs font-semibold text-white mb-2 flex items-center gap-1">
                    <Star className="w-3 h-3" /> 統計
                  </h4>
                  <div className="space-y-1">
                    {project.backInfo.stats.stars && (
                      <div className="flex items-center gap-1 text-xs text-white/80">
                        <Star className="w-3 h-3" />
                        <span>{formatNumber(project.backInfo.stats.stars)} スター</span>
                      </div>
                    )}
                    {project.backInfo.stats.downloads && (
                      <div className="flex items-center gap-1 text-xs text-white/80">
                        <Users className="w-3 h-3" />
                        <span>{formatNumber(project.backInfo.stats.downloads)} DL</span>
                      </div>
                    )}
                    {project.backInfo.stats.contributors && (
                      <div className="flex items-center gap-1 text-xs text-white/80">
                        <Users className="w-3 h-3" />
                        <span>{project.backInfo.stats.contributors} 貢献者</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Details */}
              {project.backInfo?.details && (
                <div className="mb-3 flex-1">
                  <h4 className="text-xs font-semibold text-white mb-2 flex items-center gap-1">
                    <Code className="w-3 h-3" /> 特徴
                  </h4>
                  <ul className="space-y-0.5">
                    {project.backInfo.details.slice(0, 4).map((detail, i) => (
                      <li key={i} className="text-xs text-white/80 flex items-start gap-1">
                        <span className="w-0.5 h-0.5 bg-white rounded-full mt-1.5 flex-shrink-0"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              {project.backInfo?.technologies && (
                <div>
                  <h4 className="text-xs font-semibold text-white mb-2">技術スタック</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.backInfo.technologies.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="px-1.5 py-0.5 text-xs bg-white/20 text-white rounded-md border border-white/30 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
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