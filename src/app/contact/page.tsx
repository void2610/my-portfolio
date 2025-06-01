"use client";

import { motion } from "framer-motion";
import { Mail, Github } from "lucide-react";
import { XIcon } from "@/components/icons/XIcon";

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-primary mb-12 text-center"
      >
        Contact
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-semibold text-primary mb-6">Get in Touch</h2>
        <p className="text-xl text-secondary max-w-2xl mx-auto">
          お仕事のご依頼やご質問がございましたら、<br />
          お気軽にお問い合わせください。
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="space-y-8 max-w-xl mx-auto"
      >
        <motion.a
          href="mailto:void2610official@gmail.com"
          className="flex items-center gap-6 p-6 bg-surface-elevated rounded-xl hover:bg-interactive-primary/10 transition-all duration-300 group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Mail className="w-7 h-7 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-tertiary mb-1">Email</p>
            <p className="text-lg font-medium text-primary">void2610official@gmail.com</p>
          </div>
        </motion.a>
        
        <motion.a
          href="https://github.com/void2610"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-6 p-6 bg-surface-elevated rounded-xl hover:bg-interactive-primary/10 transition-all duration-300 group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Github className="w-7 h-7 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-tertiary mb-1">GitHub</p>
            <p className="text-lg font-medium text-primary">@void2610</p>
          </div>
        </motion.a>
        
        <motion.a
          href="https://twitter.com/void2610"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-6 p-6 bg-surface-elevated rounded-xl hover:bg-interactive-primary/10 transition-all duration-300 group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="w-14 h-14 bg-gradient-to-br from-gray-900 to-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <XIcon className="w-7 h-7 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-tertiary mb-1">X (Twitter)</p>
            <p className="text-lg font-medium text-primary">@void2610</p>
          </div>
        </motion.a>
      </motion.div>
    </div>
  );
}