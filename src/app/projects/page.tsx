import { cacheLife } from "next/cache";
import ProjectsPage from "./projects-page";
import { createPageMetadata } from "@/utils/metadata";

export const metadata = createPageMetadata("PROJECTS");

// 静的コンテンツ（作品一覧）: 更新頻度が低いため最長キャッシュ
export default async function Projects() {
  "use cache";
  cacheLife("max");
  return <ProjectsPage />;
}