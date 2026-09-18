// 各ページの Discord Component Embed（リンクプレビュー）定義
//
// Discord にURLが貼られたとき、通常のOGPカードの代わりに表示されるレイアウト。
// 組み立て方の制約は src/utils/discordComponentEmbed.ts のコメントを参照。

import {
  AVATAR_IMAGE_PATH,
  BRAND_ACCENT_INT,
  SITE_AUTHOR,
  SITE_TAGLINE,
  SITE_URL,
  absoluteUrl,
} from "@/config/site";
import { socialLinks } from "@/config/navigation";
import { projects, type Platform, type Project } from "@/data/projects";
import type { OgpImageData } from "@/data/ogpImages";
import { formatDateShort } from "@/utils/date";
import {
  actionRow,
  componentEmbed,
  linkButton,
  mediaGallery,
  section,
  separator,
  textDisplay,
  thumbnail,
  type DiscordComponentEmbedPayload,
  type DiscordMediaGalleryItem,
} from "@/utils/discordComponentEmbed";

const AVATAR_URL = absoluteUrl(AVATAR_IMAGE_PATH);
const AVATAR_ALT = `${SITE_AUTHOR} のアイコン`;

const platformLabel: Record<Platform, string> = {
  github: "GitHub",
  unityroom: "unityroom",
  steam: "Steam",
  "itch.io": "itch.io",
};

/** 画像付きの注目作品を公開日の新しい順に取得する */
function featuredProjects(limit: number): Project[] {
  return projects
    .filter((project) => project.featured && project.imageUrl)
    .sort((a, b) => b.publishedDate.localeCompare(a.publishedDate))
    .slice(0, limit);
}

// Discord はページ本体と全画像の取得を10秒以内に終える必要がある。
// 画像は WebP 化済みで1枚あたり数十〜250KB程度だが、枚数を増やす際は
// 合計サイズに注意する（Media Gallery の上限は10枚）
function toGalleryItem(project: Project): DiscordMediaGalleryItem {
  return {
    media: { url: absoluteUrl(project.imageUrl!) },
    description: project.title,
  };
}

/** 「- タイトル -# 日付 · プラットフォーム」形式の箇条書き */
function projectListMarkdown(items: Project[]): string {
  return items
    .map(
      (project) =>
        `- **[${project.title}](${project.url})**\n-# ${formatDateShort(
          project.publishedDate
        )} · ${platformLabel[project.platform]}`
    )
    .join("\n");
}

/** ヘッダー等と同じSNSリンクからボタンを作る */
const socialButtons = socialLinks.map((link) =>
  linkButton(link.href, link.label)
);

/** トップページ: プロフィール + 注目作品のギャラリー */
export function createHomeEmbed(): DiscordComponentEmbedPayload {
  const highlights = featuredProjects(4);

  return componentEmbed(
    [
      section(
        [
          textDisplay(
            `# [${SITE_AUTHOR}](${SITE_URL})\n${SITE_TAGLINE}\n-# 個人・チームで制作したゲームやツールを公開しています`
          ),
        ],
        thumbnail(AVATAR_URL, AVATAR_ALT)
      ),
      separator(true, 1),
      textDisplay("**Featured Projects**"),
      mediaGallery(highlights.map(toGalleryItem)),
      textDisplay(projectListMarkdown(highlights)),
      separator(true, 1),
      actionRow([
        linkButton(absoluteUrl("/projects"), "制作物を見る", "🎮"),
        linkButton(absoluteUrl("/about"), "About"),
        ...socialButtons,
      ]),
    ],
    BRAND_ACCENT_INT
  );
}

/** Projects ページ: 注目作品4件のギャラリーと一覧 */
export function createProjectsEmbed(): DiscordComponentEmbedPayload {
  const highlights = featuredProjects(6);

  return componentEmbed(
    [
      textDisplay(
        `# [Projects](${absoluteUrl(
          "/projects"
        )})\nこれまでに公開したゲーム・ツールの一覧です。\n-# 全${
          projects.length
        }作品を掲載中`
      ),
      mediaGallery(highlights.map(toGalleryItem)),
      textDisplay(projectListMarkdown(highlights)),
      separator(true, 1),
      actionRow([
        linkButton(absoluteUrl("/projects"), "すべての制作物を見る", "🎮"),
        ...socialButtons,
      ]),
    ],
    BRAND_ACCENT_INT
  );
}

/** About ページ: プロフィールとスキル */
export function createAboutEmbed(): DiscordComponentEmbedPayload {
  return componentEmbed(
    [
      section(
        [
          textDisplay(
            `# [About ${SITE_AUTHOR}](${absoluteUrl(
              "/about"
            )})\n${SITE_TAGLINE}\nUnity製のゲームを中心に、Webアプリやツールも制作しています。`
          ),
        ],
        thumbnail(AVATAR_URL, AVATAR_ALT)
      ),
      separator(true, 1),
      textDisplay(
        "**Skills**\n`Unity` `C#` `TypeScript` `React / Next.js` `Game Design`"
      ),
      actionRow([
        linkButton(absoluteUrl("/about"), "経歴を見る"),
        linkButton(absoluteUrl("/projects"), "制作物を見る", "🎮"),
        ...socialButtons,
      ]),
    ],
    BRAND_ACCENT_INT
  );
}

/** Contact ページ: 連絡先へのリンク */
export function createContactEmbed(): DiscordComponentEmbedPayload {
  return componentEmbed(
    [
      section(
        [
          textDisplay(
            `# [Contact](${absoluteUrl(
              "/contact"
            )})\nお仕事のご依頼やご質問はお気軽にどうぞ。\n-# X・GitHub・メールで受け付けています`
          ),
        ],
        thumbnail(AVATAR_URL, AVATAR_ALT)
      ),
      separator(true, 1),
      actionRow([
        ...socialButtons,
        linkButton(absoluteUrl("/contact"), "連絡先を見る", "💬"),
      ]),
    ],
    BRAND_ACCENT_INT
  );
}

/** Tools ページ */
export function createToolsEmbed(): DiscordComponentEmbedPayload {
  return componentEmbed(
    [
      textDisplay(
        `# [Tools](${absoluteUrl(
          "/tools"
        )})\nゲーム制作まわりの便利ツール集です。\n\n- **[unityroom評価取得](${absoluteUrl(
          "/tools/unityroom-rating"
        )})**\n-# unityroomのゲームURLから評価データを取得してコピーできます`
      ),
      separator(true, 1),
      actionRow([linkButton(absoluteUrl("/tools"), "ツール一覧を見る", "🧰")]),
    ],
    BRAND_ACCENT_INT
  );
}

/** unityroom評価取得ツール */
export function createUnityroomRatingEmbed(): DiscordComponentEmbedPayload {
  return componentEmbed(
    [
      textDisplay(
        `# [unityroom評価取得](${absoluteUrl(
          "/tools/unityroom-rating"
        )})\nunityroomのゲームURLを入力すると、評価データを取得してテキストでコピーできます。`
      ),
      separator(true, 1),
      actionRow([
        linkButton(
          absoluteUrl("/tools/unityroom-rating"),
          "ツールを開く",
          "⭐"
        ),
        linkButton(absoluteUrl("/tools"), "他のツールを見る"),
      ]),
    ],
    BRAND_ACCENT_INT
  );
}

/** OGPシェア用ページ: ゲーム画像とプレイリンク */
export function createOgpImageEmbed(
  data: OgpImageData
): DiscordComponentEmbedPayload {
  const pageUrl = absoluteUrl(`/image/${data.slug}`);

  return componentEmbed(
    [
      textDisplay(`# [${data.title}](${pageUrl})\n${data.description}`),
      mediaGallery([
        { media: { url: absoluteUrl(data.imagePath) }, description: data.title },
      ]),
      separator(true, 1),
      actionRow([
        ...(data.gameUrl ? [linkButton(data.gameUrl, "ゲームをプレイ", "🎮")] : []),
        linkButton(absoluteUrl("/projects"), "他の制作物を見る"),
      ]),
    ],
    BRAND_ACCENT_INT
  );
}
