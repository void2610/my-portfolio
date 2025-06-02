import type { Metadata } from "next";

/**
 * Creates page metadata with the site template applied
 * 
 * This is a workaround for a known Next.js issue where title templates
 * don't work correctly for pages at the same level as the layout.
 * 
 * Related issues:
 * - https://github.com/vercel/next.js/issues/46859
 * - https://github.com/vercel/next.js/issues/60666
 * 
 * @param title - The page title (without the site suffix)
 * @param options - Additional metadata options
 * @returns Metadata object with the title template applied
 */
export function createPageMetadata(
  title: string,
  options?: {
    description?: string;
    keywords?: string[];
  }
): Metadata {
  const fullTitle = `${title} | void2610.dev`;
  
  return {
    title: {
      absolute: fullTitle,
    },
    description: options?.description,
    keywords: options?.keywords,
    openGraph: {
      title: fullTitle,
      description: options?.description || "void2610の公式ホームページ。これまでの制作物を紹介しています。",
      type: "website",
      locale: "ja_JP",
      url: "https://www.void2610.dev",
      siteName: "void2610.dev",
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
      title: fullTitle,
      description: options?.description || "void2610の公式ホームページ。これまでの制作物を紹介しています。",
      images: ["https://www.void2610.dev/images/void2610_ca.png"],
    },
  };
}

/**
 * Alternative approach using just the title string
 * Use this if the template in layout.tsx starts working correctly in future Next.js versions
 * 
 * @param title - The page title
 * @param options - Additional metadata options
 * @returns Metadata object that relies on the layout template
 */
export function createSimpleMetadata(
  title: string,
  options?: {
    description?: string;
    keywords?: string[];
  }
): Metadata {
  return {
    title,
    description: options?.description,
    keywords: options?.keywords,
  };
}