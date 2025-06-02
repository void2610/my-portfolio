"use client";

import { motion } from "framer-motion";
import GitHubIcon from "@/components/icons/GitHubIcon";
import { XIcon } from "@/components/icons/XIcon";
import { socialLinks } from "@/config/navigation";
import { hoverScale } from "@/config/animations";

interface SocialLinksProps {
  size?: 'small' | 'default' | 'large';
  showShadow?: boolean;
  variant?: 'header' | 'profile';
  className?: string;
}

export default function SocialLinks({ 
  size = 'default', 
  showShadow = false,
  variant = 'header',
  className = ""
}: SocialLinksProps) {
  const sizeClasses = {
    small: 'w-4 h-4',
    default: 'w-5 h-5',
    large: 'w-6 h-6'
  };

  const containerClasses = {
    header: '',
    profile: 'p-3 bg-surface-elevated rounded-full'
  };

  const getIcon = (iconType: string) => {
    const iconClass = sizeClasses[size];
    switch (iconType) {
      case 'x':
        return <XIcon className={iconClass} />;
      case 'github':
        return <GitHubIcon className={iconClass} />;
      default:
        return null;
    }
  };

  const getHoverColor = (iconType: string) => {
    return iconType === 'x' ? 'hover:text-blue-500' : 'hover:text-primary';
  };

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialLinks.map((link) => (
        <motion.a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            ${containerClasses[variant]}
            ${variant === 'profile' ? 'hover:bg-interactive-primary/10' : ''}
            transition-all duration-300 text-tertiary ${getHoverColor(link.iconType)}
            ${showShadow ? 'shadow-md hover:shadow-lg' : ''}
          `}
          aria-label={link.ariaLabel}
          {...hoverScale}
        >
          {getIcon(link.iconType)}
        </motion.a>
      ))}
    </div>
  );
}