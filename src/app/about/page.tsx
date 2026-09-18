import AboutPage from "./about-page";
import DiscordComponentEmbed from "@/components/DiscordComponentEmbed";
import { createAboutEmbed } from "@/data/discordEmbeds";
import { createPageMetadata } from "@/utils/metadata";

export const metadata = createPageMetadata("ABOUT");

export default function About() {
  return (
    <>
      <DiscordComponentEmbed payload={createAboutEmbed()} />
      <AboutPage />
    </>
  );
}
