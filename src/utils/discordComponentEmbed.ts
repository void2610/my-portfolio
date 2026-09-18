/**
 * Discord Component Embed (リンクプレビューのカスタムレイアウト)
 *
 * Discord がリンクを展開(unfurl)する際、ページ内の
 * `<script id="discord:component-embed" type="application/json">` を読み取ると、
 * 通常の OGP カードの代わりにここで組み立てたコンポーネントを描画する。
 *
 * 仕様上の主な制約:
 * - ペイロードのルートは単一の Container (type 17) であること
 * - 使用できるのは Action Row / Button(linkのみ) / Section / Text Display /
 *   Thumbnail / Media Gallery / Separator / Container の8種のみ
 * - コンポーネント総数は最大40
 * - 画像は公開された http(s) の直リンク (PNG/GIF/JPEG/WebP/AVIF)、URLは2048文字まで
 * - 画像の取得を含めてクロール全体が10秒以内に完了する必要がある
 * - JavaScript は実行されないため、必ずサーバー側で HTML に出力すること
 * - Component Embed が使えない場合に備え、通常の OGP タグも併記しておくこと
 *
 * 参考: https://discord.com/developers/docs/link-previews/component-embeds
 */

/** Component Embed で使用できるコンポーネントタイプ */
export const DiscordComponentType = {
  ACTION_ROW: 1,
  BUTTON: 2,
  SECTION: 9,
  TEXT_DISPLAY: 10,
  THUMBNAIL: 11,
  MEDIA_GALLERY: 12,
  SEPARATOR: 14,
  CONTAINER: 17,
} as const;

/** リンクボタンのスタイル (Component Embed ではこれ以外使用不可) */
const LINK_BUTTON_STYLE = 5;

/** Discord 側の制限値 */
export const DISCORD_EMBED_LIMITS = {
  /** 1つの Component Embed に含められるコンポーネント総数 */
  MAX_COMPONENTS: 40,
  /** Media Gallery に並べられるアイテム数 */
  MAX_GALLERY_ITEMS: 10,
  /** Action Row に並べられるボタン数 */
  MAX_BUTTONS_PER_ROW: 5,
  /** Section の子 Text Display 数 */
  MAX_SECTION_CHILDREN: 3,
  /** メディアURL・ボタンURLの長さ */
  MAX_URL_LENGTH: 2048,
} as const;

/** 画像・動画の参照 (Component Embed では url のみ指定可能) */
export interface DiscordUnfurledMedia {
  url: string;
}

export interface DiscordTextDisplay {
  type: typeof DiscordComponentType.TEXT_DISPLAY;
  /** Discord マークダウン (見出し・太字・リスト・リンク・スポイラー等が使える) */
  content: string;
}

export interface DiscordThumbnail {
  type: typeof DiscordComponentType.THUMBNAIL;
  media: DiscordUnfurledMedia;
  description?: string;
  spoiler?: boolean;
}

export interface DiscordLinkButton {
  type: typeof DiscordComponentType.BUTTON;
  style: typeof LINK_BUTTON_STYLE;
  url: string;
  label?: string;
  /** Unicode 絵文字は `{ name: "🎮" }` の形で指定する */
  emoji?: { name: string };
  disabled?: boolean;
}

export interface DiscordActionRow {
  type: typeof DiscordComponentType.ACTION_ROW;
  components: DiscordLinkButton[];
}

export interface DiscordSection {
  type: typeof DiscordComponentType.SECTION;
  components: DiscordTextDisplay[];
  accessory: DiscordThumbnail | DiscordLinkButton;
}

export interface DiscordMediaGalleryItem {
  media: DiscordUnfurledMedia;
  description?: string;
  spoiler?: boolean;
}

export interface DiscordMediaGallery {
  type: typeof DiscordComponentType.MEDIA_GALLERY;
  items: DiscordMediaGalleryItem[];
}

export interface DiscordSeparator {
  type: typeof DiscordComponentType.SEPARATOR;
  /** 区切り線を表示するか (既定: true) */
  divider?: boolean;
  /** 1: 小さい余白 / 2: 大きい余白 (既定: 1) */
  spacing?: 1 | 2;
}

export type DiscordContainerChild =
  | DiscordActionRow
  | DiscordSection
  | DiscordTextDisplay
  | DiscordMediaGallery
  | DiscordSeparator;

export interface DiscordContainer {
  type: typeof DiscordComponentType.CONTAINER;
  components: DiscordContainerChild[];
  /** 左端のアクセントバーの色 (0x000000〜0xFFFFFF) */
  accent_color?: number;
  spoiler?: boolean;
}

/** `discord:component-embed` に出力する JSON 全体 */
export interface DiscordComponentEmbedPayload {
  component: DiscordContainer;
}

// ---------------------------------------------------------------------------
// ビルダー
// ---------------------------------------------------------------------------

export function textDisplay(content: string): DiscordTextDisplay {
  return { type: DiscordComponentType.TEXT_DISPLAY, content };
}

export function thumbnail(
  url: string,
  description?: string,
  spoiler = false
): DiscordThumbnail {
  return {
    type: DiscordComponentType.THUMBNAIL,
    media: { url },
    ...(description ? { description } : {}),
    ...(spoiler ? { spoiler } : {}),
  };
}

export function linkButton(
  url: string,
  label: string,
  emoji?: string
): DiscordLinkButton {
  return {
    type: DiscordComponentType.BUTTON,
    style: LINK_BUTTON_STYLE,
    url,
    label,
    ...(emoji ? { emoji: { name: emoji } } : {}),
  };
}

/** ボタンを横一列に並べる (最大5個まで) */
export function actionRow(buttons: DiscordLinkButton[]): DiscordActionRow {
  return {
    type: DiscordComponentType.ACTION_ROW,
    components: buttons.slice(0, DISCORD_EMBED_LIMITS.MAX_BUTTONS_PER_ROW),
  };
}

/** テキストの右側にサムネイル画像かボタンを添える (テキストは最大3つ) */
export function section(
  texts: DiscordTextDisplay[],
  accessory: DiscordThumbnail | DiscordLinkButton
): DiscordSection {
  return {
    type: DiscordComponentType.SECTION,
    components: texts.slice(0, DISCORD_EMBED_LIMITS.MAX_SECTION_CHILDREN),
    accessory,
  };
}

/** 画像・動画をギャラリー表示する (最大10件まで) */
export function mediaGallery(
  items: DiscordMediaGalleryItem[]
): DiscordMediaGallery {
  return {
    type: DiscordComponentType.MEDIA_GALLERY,
    items: items.slice(0, DISCORD_EMBED_LIMITS.MAX_GALLERY_ITEMS),
  };
}

export function separator(divider = true, spacing: 1 | 2 = 1): DiscordSeparator {
  return { type: DiscordComponentType.SEPARATOR, divider, spacing };
}

/** Component Embed のペイロードを組み立てる */
export function componentEmbed(
  components: DiscordContainerChild[],
  accentColor?: number
): DiscordComponentEmbedPayload {
  return {
    component: {
      type: DiscordComponentType.CONTAINER,
      ...(accentColor !== undefined ? { accent_color: accentColor } : {}),
      components,
    },
  };
}

// ---------------------------------------------------------------------------
// 検証・シリアライズ
// ---------------------------------------------------------------------------

type AnyComponent =
  | DiscordContainer
  | DiscordContainerChild
  | DiscordThumbnail
  | DiscordLinkButton;

/** ペイロードに含まれるコンポーネントの総数を数える (Container 自身も1つとして数える) */
export function countComponents(payload: DiscordComponentEmbedPayload): number {
  const walk = (component: AnyComponent): number => {
    let count = 1;
    if ("components" in component && Array.isArray(component.components)) {
      count += component.components.reduce(
        (sum, child) => sum + walk(child as AnyComponent),
        0
      );
    }
    if ("accessory" in component && component.accessory) {
      count += walk(component.accessory);
    }
    return count;
  };

  return walk(payload.component);
}

/** 開発時のみ、Discord 側の制限に引っかかりそうな箇所を警告する */
function warnOnInvalidPayload(payload: DiscordComponentEmbedPayload): void {
  if (process.env.NODE_ENV === "production") return;

  const total = countComponents(payload);
  if (total > DISCORD_EMBED_LIMITS.MAX_COMPONENTS) {
    console.warn(
      `[discord:component-embed] コンポーネント数が上限を超えています (${total} > ${DISCORD_EMBED_LIMITS.MAX_COMPONENTS})`
    );
  }

  const urls: string[] = [];
  const collect = (component: AnyComponent): void => {
    if ("url" in component && typeof component.url === "string") {
      urls.push(component.url);
    }
    if ("media" in component && component.media) urls.push(component.media.url);
    if ("items" in component) {
      component.items.forEach((item) => urls.push(item.media.url));
    }
    if ("components" in component && Array.isArray(component.components)) {
      component.components.forEach((child) => collect(child as AnyComponent));
    }
    if ("accessory" in component && component.accessory) {
      collect(component.accessory);
    }
  };
  collect(payload.component);

  urls.forEach((url) => {
    if (!/^https?:\/\//.test(url)) {
      console.warn(
        `[discord:component-embed] URLは絶対URL(http/https)である必要があります: ${url}`
      );
    }
    if (url.length > DISCORD_EMBED_LIMITS.MAX_URL_LENGTH) {
      console.warn(
        `[discord:component-embed] URLが${DISCORD_EMBED_LIMITS.MAX_URL_LENGTH}文字を超えています: ${url}`
      );
    }
  });
}

/**
 * `<script type="application/json">` の中身として安全な JSON 文字列を返す
 *
 * `<` をエスケープすることで `</script>` や `<!--` が本文中に現れても
 * HTML パースが壊れないようにする。
 */
export function serializeComponentEmbed(
  payload: DiscordComponentEmbedPayload
): string {
  warnOnInvalidPayload(payload);

  return JSON.stringify(payload)
    .replace(/</g, "\\u003c")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}
