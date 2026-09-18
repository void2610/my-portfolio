import type { Metadata } from "next";
import {
  DEFAULT_OGP_IMAGE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  X_HANDLE,
  absoluteUrl,
} from "@/config/site";

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
  const fullTitle = `${title} | ${SITE_NAME}`;
  const description = options?.description || SITE_DESCRIPTION;
  const ogpImageUrl = absoluteUrl(DEFAULT_OGP_IMAGE.path);

  return {
    title: {
      absolute: fullTitle,
    },
    description: options?.description,
    keywords: options?.keywords,
    openGraph: {
      title: fullTitle,
      description,
      type: "website",
      locale: "ja_JP",
      url: SITE_URL,
      siteName: SITE_NAME,
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
      title: fullTitle,
      description,
      images: [ogpImageUrl],
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
