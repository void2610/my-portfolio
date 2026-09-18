import UnityroomRatingPage from "./unityroom-rating-page";
import DiscordComponentEmbed from "@/components/DiscordComponentEmbed";
import { createUnityroomRatingEmbed } from "@/data/discordEmbeds";
import { createPageMetadata } from "@/utils/metadata";

export const metadata = createPageMetadata("unityroom評価取得");

export default function Page() {
  return (
    <>
      <DiscordComponentEmbed payload={createUnityroomRatingEmbed()} />
      <UnityroomRatingPage />
    </>
  );
}
