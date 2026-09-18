import HomePage from "./home-page";
import DiscordComponentEmbed from "@/components/DiscordComponentEmbed";
import { createHomeEmbed } from "@/data/discordEmbeds";
import { createPageMetadata } from "@/utils/metadata";

export const metadata = createPageMetadata("HOME");

export default function Home() {
  return (
    <>
      <DiscordComponentEmbed payload={createHomeEmbed()} />
      <HomePage />
    </>
  );
}
