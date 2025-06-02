"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import AnimatedContainer from "@/components/animations/AnimatedContainer";
import SocialLinks from "./SocialLinks";
import GradientText from "./GradientText";
import { scaleIn, hoverScale, DURATION, DELAY, EASING } from "@/config/animations";

interface ProfileHeroProps {
  showDescription?: boolean;
  isClickable?: boolean;
}

export default function ProfileHero({ showDescription = true, isClickable = false }: ProfileHeroProps) {
  const avatarContent = (
    <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-0.5">
      <div className="w-full h-full rounded-full bg-surface overflow-hidden relative">
        <Image 
          src="/images/void2610_ca.png" 
          alt="void2610 avatar"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 192px, 256px"
          priority
        />
      </div>
    </div>
  );

  return (
    <AnimatedContainer
      variant="fadeInUp"
      duration={DURATION.DEFAULT}
      className="flex flex-col md:flex-row items-center gap-8"
    >
      {/* Avatar with Glow */}
      <motion.div
        variants={scaleIn}
        initial="initial"
        animate="animate"
        transition={{ duration: DURATION.MEDIUM, delay: DELAY.SMALL }}
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
            ease: EASING.EASE_IN_OUT,
          }}
        />
        
        {/* アバター本体 */}
        <div className="relative">
          {isClickable ? (
            <Link href="/about" className="block cursor-pointer group">
              <motion.div
                {...hoverScale}
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
        transition={{ duration: DURATION.MEDIUM, delay: DELAY.LARGE }}
        className="hidden md:block mx-8 self-center"
      >
        <div className="w-[3px] h-56 bg-gray-300 dark:bg-gray-600 rounded-full" />
      </motion.div>

      {/* Profile Text */}
      <AnimatedContainer
        variant="fadeInRight"
        duration={DURATION.MEDIUM}
        delay={DELAY.MEDIUM}
        className="flex-1 text-center md:text-left"
      >
        <div className="mb-4">
          <GradientText as="h1" size="2xl">
            void2610
          </GradientText>
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
        <SocialLinks 
          variant="profile" 
          showShadow={true} 
          className="justify-center md:justify-start"
        />
      </AnimatedContainer>
    </AnimatedContainer>
  );
}