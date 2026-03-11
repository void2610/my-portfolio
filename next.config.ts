import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next.js 16: サーバーコンポーネントのレンダリング結果をキャッシュ
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // public 配下の静的アセットに長期 Cache-Control ヘッダーを設定
  async headers() {
    return [
      {
        // 画像アセット: コンテンツは変わらないため最長キャッシュ + immutable
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // favicon 各サイズ
        source: '/:file(favicon-.*\\.png)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Apple Touch Icon / Android Chrome Icon
        source: '/:file(apple-touch-icon\\.png|android-chrome-.*\\.png)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // SVG アセット（プラットフォームアイコン等）
        source: '/:file(.*\\.svg)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
