import ProjectsPage from "./projects-page";
import DiscordComponentEmbed from "@/components/DiscordComponentEmbed";
import { createProjectsEmbed } from "@/data/discordEmbeds";
import { createPageMetadata } from "@/utils/metadata";

export const metadata = createPageMetadata("PROJECTS");

export default function Projects() {
  return (
    <>
      <DiscordComponentEmbed payload={createProjectsEmbed()} />
      <ProjectsPage />
    </>
  );
}
