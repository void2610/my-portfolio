import { cacheLife } from "next/cache";
import ContactPage from "./contact-page";
import { createPageMetadata } from "@/utils/metadata";

export const metadata = createPageMetadata("CONTACT");

// 静的コンテンツ（連絡先情報）: 更新頻度が低いため最長キャッシュ
export default async function Contact() {
  "use cache";
  cacheLife("max");
  return <ContactPage />;
}