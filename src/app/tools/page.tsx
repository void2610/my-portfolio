import ToolsPage from "./tools-page";
import DiscordComponentEmbed from "@/components/DiscordComponentEmbed";
import { createToolsEmbed } from "@/data/discordEmbeds";
import { createPageMetadata } from "@/utils/metadata";

export const metadata = createPageMetadata("Tools");

export default function Page() {
  return (
    <>
      <DiscordComponentEmbed payload={createToolsEmbed()} />
      <ToolsPage />
    </>
  );
}
