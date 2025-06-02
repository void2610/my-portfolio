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
  title: "void2610",
  description: "void2610によるゲーム開発とソフトウェアエンジニアリングプロジェクトを紹介するポートフォリオサイト",
  keywords: ["ゲーム開発", "ソフトウェアエンジニアリング", "ポートフォリオ", "Unity", "React", "Next.js"],
  authors: [{ name: "void2610" }],
  creator: "void2610",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://www.void2610.dev",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
