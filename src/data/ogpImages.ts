// OGPシェア用画像ページのデータ定義

export interface OgpImageData {
  slug: string; // URLスラッグ (例: "maouchan", "arenani_1")
  title: string; // ゲームタイトル
  description: string; // 説明文
  imagePath: string; // 画像パス (例: "/images/maouchan.png")
  imageWidth: number; // 画像の実寸（幅）
  imageHeight: number; // 画像の実寸（高さ）
  gameUrl: string; // ゲームへのリンク (unityroom, Steam等)
}

// imageWidth / imageHeight は OGP の og:image:width / og:image:height に使う。
// Discord はこの値が無いと画像を実測しにいき、10秒のクロール制限を超えると
// 画像が表示されないため、必ず実寸を指定する。

export const ogpImages: OgpImageData[] = [
  {
    slug: "Grandider",
    title: "凋落のグランディディエ",
    description: "凋落のグランディディエ",
    imagePath: "/images/grandidier.png",
    imageWidth: 1920,
    imageHeight: 1080,
    gameUrl: "https://unityroom.com/games/grandidier",
  },
  {
    slug: "maouchan",
    title: "がんばれ！まおうちゃん！",
    description: "がんばれ！まおうちゃん！ - unityroomで無料公開中のゲーム",
    imagePath: "/images/maouchan.png",
    imageWidth: 600,
    imageHeight: 600,
    gameUrl: "https://unityroom.com/games/maouchan",
  },
  {
    slug: "arenani",
    title: "あれ？何を買いにきたんだっけ？",
    description: "あれ？何を買いにきたんだっけ？ - unityroomで無料公開中のゲーム",
    imagePath: "/images/arenani.png",
    imageWidth: 1304,
    imageHeight: 851,
    gameUrl: "https://unityroom.com/games/arenani",
  },
];

// slugからデータを取得するヘルパー関数
export function getOgpImageBySlug(slug: string): OgpImageData | undefined {
  return ogpImages.find((image) => image.slug === slug);
}
