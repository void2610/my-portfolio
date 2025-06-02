"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import SocialLinks from "./SocialLinks";
import { DURATION, SCALE, STAGGER, SPRING } from "@/config/animations";
import { mainNavigation } from "@/config/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="w-full bg-surface shadow-sm border-b border-primary relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-primary hover:text-secondary transition-colors">
                void2610
              </Link>
            </div>
            
            <div className="flex items-center space-x-4 md:space-x-8">
              <nav className="hidden sm:flex space-x-4 md:space-x-8">
                {mainNavigation.map((item) => (
                  <Link 
                    key={item.href}
                    href={item.href} 
                    className="text-primary hover:text-secondary transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              
              <div className="flex items-center space-x-3">
                <motion.button
                  onClick={toggleMenu}
                  className="sm:hidden text-tertiary hover:text-primary transition-colors"
                  aria-label="Toggle menu"
                  whileHover={{ scale: SCALE.SMALL }}
                  whileTap={{ scale: SCALE.TAP_DOWN }}
                >
                  <motion.svg 
                    className="w-6 h-6" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ rotate: isMenuOpen ? 90 : 0 }}
                    transition={{ duration: DURATION.FAST }}
                  >
                    {isMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </motion.svg>
                </motion.button>
                
                <ThemeToggle />
                
                <SocialLinks variant="header" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: DURATION.QUICK }}
              className="fixed inset-0 bg-black/50 z-40 sm:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: DURATION.QUICK, ease: "easeInOut" }}
              className="fixed top-16 left-0 right-0 sm:hidden bg-surface border-b border-primary shadow-2xl z-50 overflow-hidden"
            >
            <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {mainNavigation.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * STAGGER.DEFAULT, duration: DURATION.FAST }}
                >
                  <Link
                    href={item.href}
                    className="block text-primary hover:text-secondary hover:bg-surface-elevated transition-all duration-200 font-medium py-3 px-4 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={SPRING.STANDARD}
                    >
                      {item.label}
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}