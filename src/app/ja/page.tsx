import type { Metadata } from "next";
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.void2610.dev'),
  title: "void2610",
  description: "void2610によるゲーム開発とソフトウェアエンジニアリングプロジェクトを紹介するポートフォリオサイト",
  keywords: ["ゲーム開発", "ソフトウェアエンジニアリング", "ポートフォリオ", "Unity", "React", "Next.js"],
  authors: [{ name: "void2610" }],
  creator: "void2610",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://www.void2610.dev/ja",
    siteName: "void2610",
    title: "void2610",
    description: "void2610によるゲーム開発とソフトウェアエンジニアリングプロジェクトを紹介するポートフォリオサイト",
    images: [
      {
        url: "https://www.void2610.dev/images/void2610_ca.png",
        width: 1200,
        height: 630,
        alt: "void2610",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@void2610",
    creator: "@void2610",
    title: "void2610",
    description: "void2610によるゲーム開発とソフトウェアエンジニアリングプロジェクトを紹介するポートフォリオサイト",
    images: ["https://www.void2610.dev/images/void2610_ca.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://www.void2610.dev/ja",
    languages: {
      'en': '/en',
      'ja': '/ja',
      'x-default': '/',
    },
  },
};

export default function JapanesePage() {
  redirect('/');
}