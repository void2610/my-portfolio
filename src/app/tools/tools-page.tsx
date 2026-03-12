"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star } from "lucide-react";
import GradientText from "@/components/GradientText";
import SurfaceCard from "@/components/SurfaceCard";
import { DURATION, DELAY } from "@/config/animations";

// ツール一覧データ
const tools = [
  {
    id: "unityroom-rating",
    name: "Unityroom評価取得",
    description: "unityroomのゲームURLを入力すると、評価データを取得してテキストでコピーできます",
    href: "/tools/unityroom-rating",
    icon: Star,
  },
];

export default function ToolsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 min-h-[calc(100vh-150px)]">
      {/* ヘッダー */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: DURATION.DEFAULT }}
        className="mb-12 text-center"
      >
        <GradientText as="h1" size="2xl">
          Tools
        </GradientText>
        <p className="text-secondary mt-4">
          便利なツール集
        </p>
      </motion.div>

      {/* ツール一覧 */}
      <div className="grid gap-6">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.DEFAULT, delay: DELAY.SMALL + index * 0.1 }}
          >
            <Link href={tool.href}>
              <SurfaceCard shadow="hover" className="cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-surface rounded-lg">
                    <tool.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-primary mb-2">
                      {tool.name}
                    </h2>
                    <p className="text-[var(--text-muted)]">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </SurfaceCard>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
