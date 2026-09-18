// サイト全体で共有する基本情報
//
// メタデータ・構造化データ・Discordのリンクプレビュー・UI表示で
// 同じ値を使い回すため、ここを唯一の定義箇所とする。

export const SITE_URL = "https://www.void2610.dev";
export const SITE_NAME = "void2610.dev";
export const SITE_DESCRIPTION =
  "void2610の公式ホームページ。これまでの制作物を紹介しています。";
export const SITE_TAGLINE = "ゲームクリエイター / ソフトウェアエンジニア";

export const SITE_AUTHOR = "void2610";
export const SITE_AUTHOR_ALT = "Shuya IZUMI";
/** X (Twitter) のハンドル。twitter:site / twitter:creator に使う */
export const X_HANDLE = "@void2610";

/** プロフィール画像 */
export const AVATAR_IMAGE_PATH = "/images/void2610.webp";

/** OGPのデフォルト画像。Discordは幅高さが無いと実測しにいくため必ず指定する */
export const DEFAULT_OGP_IMAGE = {
  path: "/images/ogp-image.webp",
  width: 1200,
  height: 630,
  alt: SITE_AUTHOR,
} as const;

/**
 * ブランドアクセントカラー
 *
 * - HEX: `theme-color` メタタグ用。Discord はこの値をリンクプレビュー左端の
 *   アクセントバーの色として読み取る（`#RRGGBB` / `#RRGGBBAA` のみ有効）
 * - INT: Discord Component Embed の Container `accent_color` 用
 */
export const BRAND_ACCENT_HEX = "#00d4ff";
export const BRAND_ACCENT_INT = 0x00d4ff;

/** ブラウザのUI（アドレスバー等）向けの背景色。globals.css の --background と対応 */
export const BROWSER_THEME_COLOR_LIGHT = "#ffffff";
export const BROWSER_THEME_COLOR_DARK = "#0a0a0a";

/** サイト内パスを絶対URLに変換する（外部URLはそのまま返す） */
export function absoluteUrl(pathOrUrl: string): string {
  if (/^https?:\/\//.test(pathOrUrl)) return pathOrUrl;
  return `${SITE_URL}${pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`}`;
}
