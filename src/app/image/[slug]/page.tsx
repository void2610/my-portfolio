import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import { ExternalLink } from "lucide-react";
import { ogpImages, getOgpImageBySlug } from "@/data/ogpImages";

type Params = { slug: string };

// 静的パラメータの生成
export function generateStaticParams() {
  return ogpImages.map((image) => ({
    slug: image.slug,
  }));
}

// 動的メタデータの生成
export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = getOgpImageBySlug(slug);

  if (!data) {
    return {
      title: "Not Found",
    };
  }

  const imageUrl = `https://www.void2610.dev${data.imagePath}`;
  const pageUrl = `https://www.void2610.dev/image/${data.slug}`;

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      type: "website",
      locale: "ja_JP",
      url: pageUrl,
      siteName: "void2610.dev",
      title: data.title,
      description: data.description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 1200,
          alt: data.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@void2610",
      creator: "@void2610",
      title: data.title,
      description: data.description,
      images: [imageUrl],
    },
  };
}

// OGP画像シェア用ページ
export default function OgpImagePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = use(params);
  const data = getOgpImageBySlug(slug);

  if (!data) {
    notFound();
  }

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
        <Image
          src={data.imagePath}
          alt={data.title}
          width={800}
          height={800}
          className="max-w-md mx-auto rounded-lg shadow-lg"
        />
        {data.gameUrl && (
          <div className="mt-6">
            <Link
              href={data.gameUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-surface-elevated rounded-xl shadow-lg hover:shadow-xl hover:bg-interactive-primary/10 transition-all duration-300 text-primary font-medium"
            >
              <ExternalLink className="w-4 h-4 text-interactive-primary" />
              ゲームをプレイする
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
