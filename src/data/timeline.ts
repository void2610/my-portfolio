export interface TimelineItem {
  date: string;
  title: string;
  description?: string;
}

export const timelineData: TimelineItem[] = [
  {
    date: "2024年8月",
    title: "MergeRogue(仮称) 開発開始",
    description: "Steamでの有料販売を目指して開発中",
  },
  {
    date: "2024年1月",
    title: "ゲーム開発を本格化",
    description: "unity1weekをはじめとしたゲームジャムに参加",
  },
  {
    date: "2023年9月",
    title: "燈株式会社にてインターン開始",
    description: "TypeScriptやPythonを用いたAIプロダクトの開発に従事",
  },
  {
    date: "2023年3月",
    title: "起業家甲子園に出場",
    description: "シリコンバレーでの研修プログラムにも参加",
  },
  {
    date: "2022年10月",
    title: "高専プロコンにて特別賞受賞",
    description: "第33回全国高専プロコン 課題部門にて、特別賞, NICT賞を受賞",
  },
  {
    date: "2020年4月",
    title: "コンテスト参加",
    description: "プログラミング研究会にて、ゲームコンテストやハッカソンに参加",
  },
  {
    date: "2019年4月",
    title: "福井高専入学",
    description: "電子情報工学科に進学、プログラミングの基礎を学ぶ",
  },
];
