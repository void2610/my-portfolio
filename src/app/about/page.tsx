import { cacheLife } from "next/cache";
import AboutPage from "./about-page";
import { createPageMetadata } from "@/utils/metadata";

export const metadata = createPageMetadata("ABOUT");

// 静的コンテンツ（自己紹介・スキル一覧）: 更新頻度が低いため最長キャッシュ
export default async function About() {
  "use cache";
  cacheLife("max");
  return <AboutPage />;
}