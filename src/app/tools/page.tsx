import { cacheLife } from "next/cache";
import ToolsPage from "./tools-page";
import { createPageMetadata } from "@/utils/metadata";

export const metadata = createPageMetadata("Tools");

// 静的コンテンツ（ツール一覧）: 更新頻度が低いため最長キャッシュ
export default async function Page() {
  "use cache";
  cacheLife("max");
  return <ToolsPage />;
}
