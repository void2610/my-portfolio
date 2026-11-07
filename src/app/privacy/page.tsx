import PrivacyPage from "./privacy-page";
import { createPageMetadata } from "@/utils/metadata";

export const metadata = createPageMetadata("PRIVACY POLICY", {
  description: "void2610.dev と void2610 が提供するツールのプライバシーポリシー",
});

export default function Privacy() {
  return <PrivacyPage />;
}
