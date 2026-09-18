import {
  serializeComponentEmbed,
  type DiscordComponentEmbedPayload,
} from "@/utils/discordComponentEmbed";

interface DiscordComponentEmbedProps {
  payload: DiscordComponentEmbedPayload;
}

/**
 * Discord のリンクプレビューを Component Embed で置き換えるための script タグ
 *
 * Discord のクローラーは JavaScript を実行しないため、必ずサーバーコンポーネントから
 * 出力する（クライアント側で挿入したタグは読み取られない）。
 * `id` と `type` は Discord 側で完全一致が要求されるため変更しないこと。
 */
export default function DiscordComponentEmbed({
  payload,
}: DiscordComponentEmbedProps) {
  return (
    <script
      id="discord:component-embed"
      type="application/json"
      dangerouslySetInnerHTML={{ __html: serializeComponentEmbed(payload) }}
    />
  );
}
