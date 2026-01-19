import type { Metadata } from "next";
import Image from "next/image";

// OGP画像用のメタデータ
export const metadata: Metadata = {
  title: "あれ？何を買いにきたんだっけ？",
  description: "あれ？何を買いにきたんだっけ？ - unityroomで無料公開中のゲーム",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://www.void2610.dev/image/arenani_2",
    siteName: "void2610.dev",
    title: "あれ？何を買いにきたんだっけ？",
    description: "あれ？何を買いにきたんだっけ？ - unityroomで無料公開中のゲーム",
    images: [
      {
        url: "https://www.void2610.dev/images/arenani_2.png",
        width: 1200,
        height: 1200,
        alt: "あれ？何を買いにきたんだっけ？",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@void2610",
    creator: "@void2610",
    title: "あれ？何を買いにきたんだっけ？",
    description: "あれ？何を買いにきたんだっけ？ - unityroomで無料公開中のゲーム",
    images: ["https://www.void2610.dev/images/arenani_2.png"],
  },
};

// OGP画像シェア用のシンプルなページ
export default function Arenani2Page() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">あれ？何を買いにきたんだっけ？</h1>
        <Image
          src="/images/arenani_2.png"
          alt="あれ？何を買いにきたんだっけ？"
          width={800}
          height={800}
          className="max-w-md mx-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
