"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

import { Mail } from "lucide-react";
import { XIcon } from "@/components/icons/XIcon";
import GitHubIcon from "@/components/icons/GitHubIcon";
import { ContactMethod } from "@/data/contact";
import { fadeInUp, springTransition, createStaggerDelay } from "@/config/animations";

interface ContactItemProps extends ContactMethod {
  index: number;
}

const getIcon = (iconType: ContactMethod['iconType']): ReactNode => {
  switch (iconType) {
    case 'x':
      return <XIcon className="w-7 h-7 text-white" />;
    case 'github':
      return <GitHubIcon className="w-7 h-7 text-white" />;
    case 'email':
      return <Mail className="w-7 h-7 text-white" />;
  }
};

export default function ContactItem({
  href,
  iconType,
  gradientFrom,
  gradientTo,
  platform,
  handle,
  target,
  rel,
  index,
}: ContactItemProps) {
  const icon = getIcon(iconType);
  return (
    <motion.a
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      transition={{ 
        opacity: { duration: 0.6, delay: createStaggerDelay(index) },
        y: { duration: 0.6, delay: createStaggerDelay(index) },
        scale: springTransition
      }}
      href={href}
      target={target}
      rel={rel}
      className="flex items-center gap-6 p-6 bg-surface-elevated rounded-xl hover:bg-interactive-primary/10 transition-all duration-300 group shadow-lg hover:shadow-xl"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className={`w-14 h-14 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-full flex items-center justify-center`}>
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-sm text-tertiary mb-1">{platform}</p>
        <p className="text-lg font-medium text-primary">{handle}</p>
      </div>
    </motion.a>
  );
}