import type { Metadata } from "next";
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  metadataBase: new URL('https://void2610.dev'),
  title: "void2610",
  description: "Portfolio website showcasing game development and software engineering projects by void2610",
  keywords: ["game development", "software engineering", "portfolio", "unity", "react", "next.js"],
  authors: [{ name: "void2610" }],
  creator: "void2610",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://void2610.dev/en",
    siteName: "void2610",
    title: "void2610",
    description: "Portfolio website showcasing game development and software engineering projects by void2610",
    images: [
      {
        url: "https://void2610.dev/images/void2610_ca.png",
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
    description: "Portfolio website showcasing game development and software engineering projects by void2610",
    images: ["https://void2610.dev/images/void2610_ca.png"],
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
    canonical: "https://void2610.dev/en",
    languages: {
      'en': '/en',
      'ja': '/ja',
      'x-default': '/',
    },
  },
};

export default function EnglishPage() {
  redirect('/');
}