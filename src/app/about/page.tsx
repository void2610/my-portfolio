import AboutPage from "./about-page";
import { createPageMetadata } from "@/utils/metadata";

export const metadata = createPageMetadata("ABOUT");

export default function About() {
  return <AboutPage />;
}