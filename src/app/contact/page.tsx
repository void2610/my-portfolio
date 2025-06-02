"use client";

import { motion } from "framer-motion";
import ContactItem from "@/components/ContactItem";
import GradientText from "@/components/GradientText";
import { DURATION, DELAY } from "@/config/animations";
import { contactMethods } from "@/data/contact";

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 min-h-[calc(100vh-150px)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: DURATION.DEFAULT }}
        className="mb-12 text-center"
      >
        <GradientText as="h1" size="2xl">
          Contact
        </GradientText>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: DURATION.DEFAULT, delay: DELAY.SMALL }}
        className="text-center mb-16"
      >
        <p className="text-xl text-secondary max-w-2xl mx-auto">
          お仕事のご依頼やご質問がございましたら、<br />
          お気軽にお問い合わせください。
        </p>
      </motion.div>
      
      <div className="space-y-8 max-w-xl mx-auto mb-24">
        {contactMethods.map((contact, index) => (
          <ContactItem key={index} {...contact} index={index} />
        ))}
      </div>
    </div>
  );
}