export type Platform = 'github' | 'unityroom' | 'steam';

export interface Project {
  title: string;
  description: string;
  platform: Platform;
  tags: string[];
  url: string;
  publishedDate: string;
  imageUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "Next.js と TypeScript で構築したポートフォリオサイト。レスポンシブデザインとダークモード対応。",
    platform: "github",
    tags: ["Next.js", "TypeScript", "React", "Tailwind"],
    url: "https://github.com/void2610/portfolio",
    publishedDate: "2024-12-01",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop"
  },
  {
    title: "3D Puzzle Adventure",
    description: "Unityで制作した3Dパズルアドベンチャーゲーム。物理演算を活用したギミックが特徴です。",
    platform: "unityroom",
    tags: ["Unity", "C#", "3D", "Puzzle"],
    url: "https://unityroom.com/games/example1",
    publishedDate: "2024-11-15",
    imageUrl: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=400&h=200&fit=crop"
  },
  {
    title: "Game Development Tools",
    description: "Unity 開発効率化のためのエディター拡張ツール集。アセット管理やシーン制作を支援。",
    platform: "github",
    tags: ["Unity", "C#", "Editor", "Tools"],
    url: "https://github.com/void2610/unity-tools",
    publishedDate: "2024-10-20",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop"
  },
  {
    title: "Indie RPG Game",
    description: "Steam で配信中のインディーRPGゲーム。オリジナルストーリーと戦略的バトルシステム。",
    platform: "steam",
    tags: ["Unity", "C#", "RPG", "Indie"],
    url: "https://store.steampowered.com/app/example",
    publishedDate: "2024-09-10",
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=200&fit=crop"
  },
  {
    title: "2D Action Platformer",
    description: "クラシックな2Dアクションプラットフォーマー。精密な操作感とレベルデザインにこだわりました。",
    platform: "unityroom",
    tags: ["Unity", "C#", "2D", "Action"],
    url: "https://unityroom.com/games/example2",
    publishedDate: "2024-08-05",
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=200&fit=crop"
  },
  {
    title: "Simulation Game",
    description: "リアルタイム戦略シミュレーションゲーム。複雑なAIシステムと経済システムを実装。",
    platform: "steam",
    tags: ["Unity", "C#", "Strategy", "AI"],
    url: "https://store.steampowered.com/app/example2",
    publishedDate: "2024-07-22",
    imageUrl: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=200&fit=crop"
  }
];