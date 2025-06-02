import ContactPage from "./contact-page";
import { createPageMetadata } from "@/utils/metadata";

export const metadata = createPageMetadata("CONTACT");

export default function Contact() {
  return <ContactPage />;
}