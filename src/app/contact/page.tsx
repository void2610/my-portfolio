"use client";

import { motion } from "framer-motion";
import ContactItem from "@/components/ContactItem";
import { contactMethods } from "@/data/contact";

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 min-h-[calc(100vh-150px)]">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-12 text-center"
      >
        Contact
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
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