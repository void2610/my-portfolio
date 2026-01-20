// OGPシェア用画像ページのデータ定義

export interface OgpImageData {
  slug: string; // URLスラッグ (例: "maouchan", "arenani_1")
  title: string; // ゲームタイトル
  description: string; // 説明文
  imagePath: string; // 画像パス (例: "/images/maouchan.png")
  gameUrl: string; // ゲームへのリンク (unityroom, Steam等)
}

export const ogpImages: OgpImageData[] = [
  {
    slug: "maouchan",
    title: "がんばれ！まおうちゃん！",
    description: "がんばれ！まおうちゃん！ - unityroomで無料公開中のゲーム",
    imagePath: "/images/maouchan.png",
    gameUrl: "https://unityroom.com/games/maouchan",
  },
  {
    slug: "arenani",
    title: "あれ？何を買いにきたんだっけ？",
    description: "あれ？何を買いにきたんだっけ？ - unityroomで無料公開中のゲーム",
    imagePath: "/images/arenani.png",
    gameUrl: "https://unityroom.com/games/arenani",
  },
];

// slugからデータを取得するヘルパー関数
export function getOgpImageBySlug(slug: string): OgpImageData | undefined {
  return ogpImages.find((image) => image.slug === slug);
}
