import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HeroUIProvider } from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.void2610.dev'),
  title: {
    default: "void2610.dev",
    template: "%s | void2610.dev",
  },
  description: "void2610の公式ホームページ。これまでの制作物を紹介しています。",
  keywords: ["ゲーム開発", "ポートフォリオ", "Unity", "C#", "インディーゲーム", "Indie Game", "Game Development", "void2610"],
  authors: [{ name: "void2610" }],
  creator: "void2610",
  icons: {
    icon: [
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon-64x64.png', sizes: '64x64', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'icon', url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://www.void2610.dev",
    siteName: "void2610.dev",
    title: "void2610.dev",
    description: "void2610の公式ホームページ。これまでの制作物を紹介しています。",
    images: [
      {
        url: "https://www.void2610.dev/images/ogp-image.png",
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
    title: "void2610.dev",
    description: "void2610の公式ホームページ。これまでの制作物を紹介しています。",
    images: ["https://www.void2610.dev/images/ogp-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "void2610",
    alternateName: "Shuya IZUMI",
    url: "https://www.void2610.dev",
    image: "https://www.void2610.dev/images/void2610.png",
    description: "ゲームクリエイター / ソフトウェアエンジニア",
    jobTitle: "Game Creator / Software Engineer",
    sameAs: [
      "https://twitter.com/void2610",
      "https://github.com/void2610",
      "https://steamcommunity.com/id/void2610/"
    ],
    knowsAbout: ["ゲーム開発", "Unity", "C#", "Web開発", "React", "TypeScript"],
  };

  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <HeroUIProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </HeroUIProvider>
      </body>
    </html>
  );
}
