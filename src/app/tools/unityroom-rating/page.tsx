import { cacheLife } from "next/cache";
import UnityroomRatingPage from "./unityroom-rating-page";
import { createPageMetadata } from "@/utils/metadata";

export const metadata = createPageMetadata("Unityroom評価取得");

// 静的コンテンツ（ツールページ）: 更新頻度が低いため最長キャッシュ
export default async function Page() {
  "use cache";
  cacheLife("max");
  return <UnityroomRatingPage />;
}
