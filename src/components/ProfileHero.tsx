"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import GitHubIcon from "@/components/icons/GitHubIcon";
import { XIcon } from "@/components/icons/XIcon";
import Link from "next/link";

interface ProfileHeroProps {
  showDescription?: boolean;
  isClickable?: boolean;
}

export default function ProfileHero({ showDescription = true, isClickable = false }: ProfileHeroProps) {
  const avatarContent = (
    <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-0.5">
      <div className="w-full h-full rounded-full bg-surface overflow-hidden">
        <img 
          src="/images/void2610_ca.png" 
          alt="void2610 avatar"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col md:flex-row items-center gap-8"
    >
      {/* Avatar with Glow */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative"
      >
        {/* ニューモーフィックな光と影のエフェクト */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: `
              radial-gradient(
                circle at 30% 30%, 
                rgba(59, 130, 246, 0.15) 0%, 
                transparent 50%
              ),
              radial-gradient(
                circle at 70% 70%, 
                rgba(139, 92, 246, 0.1) 0%, 
                transparent 50%
              )
            `,
            boxShadow: `
              -20px -20px 60px rgba(59, 130, 246, 0.1),
              20px 20px 60px rgba(139, 92, 246, 0.15),
              inset -5px -5px 15px rgba(59, 130, 246, 0.05),
              inset 5px 5px 15px rgba(139, 92, 246, 0.1)
            `,
          }}
        />
        
        {/* 下部の光 - 青から紫のグラデーション */}
        <motion.div
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8"
          style={{
            background: `linear-gradient(90deg, 
              transparent 0%, 
              rgba(59, 130, 246, 0.5) 30%, 
              rgba(139, 92, 246, 0.5) 70%,
              transparent 100%
            )`,
            filter: 'blur(20px)',
          }}
          animate={{
            opacity: [0.6, 0.9, 0.6],
            scaleX: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* アバター本体 */}
        <div className="relative">
          {isClickable ? (
            <Link href="/about" className="block cursor-pointer group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {avatarContent}
              </motion.div>
            </Link>
          ) : (
            avatarContent
          )}
        </div>
      </motion.div>

      {/* Vertical Divider - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 0.5, scaleY: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="hidden md:block mx-8 self-center"
      >
        <div className="w-[3px] h-56 bg-gray-300 dark:bg-gray-600 rounded-full" />
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
        {showDescription && (
          <p className="text-lg text-secondary leading-relaxed mb-6">
            創造性と技術を融合させて、人々に楽しさと驚きを提供することを目指しています。
            ゲーム開発からWebアプリケーションまで、幅広い分野で活動しています。
          </p>
        )}
        
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
  );
}