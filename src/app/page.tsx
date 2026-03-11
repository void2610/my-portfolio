import { cacheLife } from "next/cache";
import HomePage from "./home-page";
import { createPageMetadata } from "@/utils/metadata";

export const metadata = createPageMetadata("HOME");

// 静的コンテンツ: 更新頻度が低いため最長キャッシュ
export default async function Home() {
  "use cache";
  cacheLife("max");
  return <HomePage />;
}