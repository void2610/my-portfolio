// サイト全体で共有する基本情報

export const SITE_URL = "https://www.void2610.dev";
export const SITE_NAME = "void2610.dev";
export const SITE_DESCRIPTION =
  "void2610の公式ホームページ。これまでの制作物を紹介しています。";
export const SITE_TAGLINE = "ゲームクリエイター / ソフトウェアエンジニア";

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
