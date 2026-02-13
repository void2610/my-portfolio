"use client";

import ContactItem from "@/components/ContactItem";
import PageHeader from "@/components/PageHeader";
import { contactMethods } from "@/data/contact";

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 min-h-[calc(100vh-150px)]">
      <PageHeader
        title="Contact"
        subtitle={<>お仕事のご依頼やご質問がございましたら、<br />お気軽にお問い合わせください。</>}
        className="mb-16"
      />

      <div className="space-y-8 max-w-xl mx-auto mb-24">
        {contactMethods.map((contact, index) => (
          <ContactItem key={index} {...contact} index={index} />
        ))}
      </div>
    </div>
  );
}
