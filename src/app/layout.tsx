import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HeroUIProvider } from "@/components/providers";
import { Analytics } from "@vercel/analytics/next";
import {
  AVATAR_IMAGE_PATH,
  BRAND_ACCENT_HEX,
  BROWSER_THEME_COLOR_DARK,
  BROWSER_THEME_COLOR_LIGHT,
  DEFAULT_OGP_IMAGE,
  SITE_AUTHOR,
  SITE_AUTHOR_ALT,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  X_HANDLE,
  absoluteUrl,
} from "@/config/site";
import { socialLinks } from "@/config/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

/**
 * theme-color の指定
 *
 * ブラウザは「media 条件が最初に一致した theme-color」を採用するのに対し、
 * Discord は「ドキュメント内で最後に現れた theme-color」をリンクプレビューの
 * アクセントカラーとして採用する。そのため media 付きの2つでブラウザのUI色を、
 * 最後の media なしの1つで Discord のアクセントカラーを指定している。
 * Discord が解釈できるのは #RRGGBB / #RRGGBBAA 形式のみ。
 */
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: BROWSER_THEME_COLOR_LIGHT },
    { media: "(prefers-color-scheme: dark)", color: BROWSER_THEME_COLOR_DARK },
    { color: BRAND_ACCENT_HEX },
  ],
};

const ogpImageUrl = absoluteUrl(DEFAULT_OGP_IMAGE.path);

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: ["ゲーム開発", "ポートフォリオ", "Unity", "C#", "インディーゲーム", "Indie Game", "Game Development", "void2610"],
  authors: [{ name: SITE_AUTHOR }],
  creator: SITE_AUTHOR,
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
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: ogpImageUrl,
        width: DEFAULT_OGP_IMAGE.width,
        height: DEFAULT_OGP_IMAGE.height,
        alt: DEFAULT_OGP_IMAGE.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: X_HANDLE,
    creator: X_HANDLE,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [ogpImageUrl],
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
    name: SITE_AUTHOR,
    alternateName: SITE_AUTHOR_ALT,
    url: SITE_URL,
    image: absoluteUrl(AVATAR_IMAGE_PATH),
    description: SITE_TAGLINE,
    jobTitle: "Game Creator / Software Engineer",
    sameAs: [
      ...socialLinks.map((link) => link.href),
      "https://steamcommunity.com/id/void2610/",
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
        className={`${geistSans.variable} ${jetbrainsMono.variable} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <HeroUIProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </HeroUIProvider>
        <Analytics />
      </body>
    </html>
  );
}
