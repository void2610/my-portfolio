"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import GitHubIcon from "@/components/icons/GitHubIcon";
import { XIcon } from "@/components/icons/XIcon";
import Timeline from "@/components/Timeline";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section with Avatar and Profile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row items-center gap-8 mb-16"
      >
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-surface overflow-hidden">
              <img 
                src="/images/void2610_ca.png" 
                alt="void2610 avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* 装飾的な要素 */}
          <motion.div
            className="absolute -z-10 inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 blur-2xl opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Profile Text */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex-1 text-center md:text-left"
        >
          <div className="mb-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              void2610
            </h1>
            <p className="text-lg text-tertiary mt-2">
              Shuya IZUMI
            </p>
          </div>
          <p className="text-xl text-secondary mb-6">
            ゲームクリエイター / ソフトウェアエンジニア
          </p>
          <p className="text-lg text-secondary leading-relaxed mb-6">
            創造性と技術を融合させて、人々に楽しさと驚きを提供することを目指しています。
            ゲーム開発からWebアプリケーションまで、幅広い分野で活動しています。
          </p>
          
          {/* Social Links */}
          <div className="flex gap-4 justify-center md:justify-start">
            <motion.a
              href="https://github.com/void2610"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-surface-elevated rounded-full hover:bg-interactive-primary/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <GitHubIcon className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://twitter.com/void2610"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-surface-elevated rounded-full hover:bg-interactive-primary/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <XIcon className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#"
              className="p-3 bg-surface-elevated rounded-full hover:bg-interactive-primary/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Skills and Experience Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid md:grid-cols-2 gap-12"
      >
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-6">Skills</h2>
          <div className="space-y-4">
            {[
              { name: "Game Development", level: 90 },
              { name: "Unity / C#", level: 85 },
              { name: "Web Development", level: 80 },
              { name: "React / TypeScript", level: 85 },
              { name: "Software Engineering", level: 75 },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-secondary">{skill.name}</span>
                  <span className="text-muted text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 bg-surface-elevated rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-6">Experience</h2>
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="border-l-2 border-interactive-primary/30 pl-6"
            >
              <h3 className="font-semibold text-primary">MergeRogue(仮称) 開発</h3>
              <p className="text-sm text-muted mb-2">2024年8月 - 現在</p>
              <p className="text-secondary">
                Steamでの有料販売を目指して開発中。
                本格的なインディーゲームの制作に挑戦。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="border-l-2 border-interactive-primary/30 pl-6"
            >
              <h3 className="font-semibold text-primary">燈株式会社 インターン</h3>
              <p className="text-sm text-muted mb-2">2023年9月 - 現在</p>
              <p className="text-secondary">
                TypeScriptやPythonを用いたAIプロダクトの開発に従事。
                最新のWeb技術とAI技術の実践的な経験を積む。
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="border-l-2 border-interactive-primary/30 pl-6"
            >
              <h3 className="font-semibold text-primary">ゲーム開発活動</h3>
              <p className="text-sm text-muted mb-2">2024年1月 - 現在</p>
              <p className="text-secondary">
                unity1weekをはじめとしたゲームジャムに積極的に参加。
                短期間での企画・開発・リリースの経験を積む。
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Timeline Section */}
      <Timeline />
    </div>
  );
}