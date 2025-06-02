import ProjectsPage from "./projects-page";
import { createPageMetadata } from "@/utils/metadata";

export const metadata = createPageMetadata("PROJECTS");

export default function Projects() {
  return <ProjectsPage />;
}