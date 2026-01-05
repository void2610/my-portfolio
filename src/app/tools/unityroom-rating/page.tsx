import UnityroomRatingPage from "./unityroom-rating-page";
import { createPageMetadata } from "@/utils/metadata";

export const metadata = createPageMetadata("Unityroom評価取得");

export default function Page() {
  return <UnityroomRatingPage />;
}
