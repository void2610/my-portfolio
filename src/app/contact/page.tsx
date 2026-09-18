import ContactPage from "./contact-page";
import DiscordComponentEmbed from "@/components/DiscordComponentEmbed";
import { createContactEmbed } from "@/data/discordEmbeds";
import { createPageMetadata } from "@/utils/metadata";

export const metadata = createPageMetadata("CONTACT");

export default function Contact() {
  return (
    <>
      <DiscordComponentEmbed payload={createContactEmbed()} />
      <ContactPage />
    </>
  );
}
