"use client";

import Link from "next/link";
import { Star } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SurfaceCard from "@/components/SurfaceCard";
import AnimatedContainer from "@/components/animations/AnimatedContainer";
import { DELAY } from "@/config/animations";

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
      <PageHeader title="Tools" subtitle="便利なツール集" />

      {/* ツール一覧 */}
      <div className="grid gap-6">
        {tools.map((tool, index) => (
          <AnimatedContainer
            key={tool.id}
            delay={DELAY.SMALL + index * 0.1}
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
                    <p className="text-secondary">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </SurfaceCard>
            </Link>
          </AnimatedContainer>
        ))}
      </div>
    </div>
  );
}
