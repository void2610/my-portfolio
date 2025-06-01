export interface TimelineItem {
  date: string;
  title: string;
  description?: string;
}

export const timelineData: TimelineItem[] = [
  {
    date: "2023年12月",
    title: "ポートフォリオサイト公開",
    description: "Next.js 15とTypeScriptで構築したポートフォリオサイトを公開",
  },
  {
    date: "2023年8月",
    title: "新作ゲームをSteamでリリース",
    description: "半年間の開発期間を経て、アクションゲームをSteamで公開",
  },
  {
    date: "2023年4月",
    title: "フリーランスとして独立",
    description: "ゲーム開発とWeb開発の両軸で活動開始",
  },
  {
    date: "2022年10月",
    title: "Web開発の学習開始",
    description: "ReactとTypeScriptを中心にモダンなWeb開発技術を習得",
  },
  {
    date: "2021年11月",
    title: "unityroomゲームコンテスト 入賞",
    description: "「ゲームタイトル」で特別賞を受賞、1万プレイ達成",
  },
  {
    date: "2021年4月",
    title: "初のゲームリリース",
    description: "unityroomにて初めての作品を公開",
  },
  {
    date: "2020年6月",
    title: "Unity学習開始",
    description: "ゲーム開発エンジンUnityでの開発を本格的に開始",
  },
  {
    date: "2019年4月",
    title: "プログラミング学習開始",
    description: "大学でC言語とPythonの基礎を学ぶ",
  },
];