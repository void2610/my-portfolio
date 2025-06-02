import HomePage from "./home-page";
import { createPageMetadata } from "@/utils/metadata";

export const metadata = createPageMetadata("HOME");

export default function Home() {
  return <HomePage />;
}