import type { Metadata } from "next";
import Image from "next/image";

// OGP画像用のメタデータ
export const metadata: Metadata = {
  title: "がんばれ！まおうちゃん！",
  description: "がんばれ！まおうちゃん！ - unityroomで無料公開中のゲーム",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://www.void2610.dev/image/maouchan",
    siteName: "void2610.dev",
    title: "がんばれ！まおうちゃん！",
    description: "がんばれ！まおうちゃん！ - unityroomで無料公開中のゲーム",
    images: [
      {
        url: "https://www.void2610.dev/images/maouchan.png",
        width: 1200,
        height: 1200,
        alt: "がんばれ！まおうちゃん！",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@void2610",
    creator: "@void2610",
    title: "がんばれ！まおうちゃん！",
    description: "がんばれ！まおうちゃん！ - unityroomで無料公開中のゲーム",
    images: ["https://www.void2610.dev/images/maouchan.png"],
  },
};

// OGP画像シェア用のシンプルなページ
export default function MaouChanPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">がんばれ！まおうちゃん！</h1>
        <Image
          src="/images/maouchan.png"
          alt="がんばれ！まおうちゃん！"
          className="max-w-md mx-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
