"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { XIcon } from "@/components/icons/XIcon";
import GitHubIcon from "@/components/icons/GitHubIcon";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="w-full bg-surface shadow-sm border-b border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-primary hover:text-secondary transition-colors">
                void2610
              </Link>
            </div>
            
            <div className="flex items-center space-x-4 md:space-x-8">
              <nav className="hidden sm:flex space-x-4 md:space-x-8">
                <Link href="/" className="text-primary hover:text-secondary transition-colors font-medium">
                  Home
                </Link>
                <Link href="/about" className="text-primary hover:text-secondary transition-colors font-medium">
                  About
                </Link>
                <Link href="/projects" className="text-primary hover:text-secondary transition-colors font-medium">
                  Projects
                </Link>
                <Link href="/contact" className="text-primary hover:text-secondary transition-colors font-medium">
                  Contact
                </Link>
              </nav>
              
              <div className="flex items-center space-x-3">
                <button
                  onClick={toggleMenu}
                  className="sm:hidden text-tertiary hover:text-primary transition-colors"
                  aria-label="Toggle menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
                
                <ThemeToggle />
                
                <a
                  href="https://twitter.com/void2610"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tertiary hover:text-blue-500 transition-colors"
                  aria-label="Twitter"
                >
                  <XIcon className="w-5 h-5" />
                </a>
                
                <a
                  href="https://github.com/void2610"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tertiary hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <GitHubIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div className="sm:hidden bg-surface border-b border-primary shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block text-primary hover:text-secondary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-primary hover:text-secondary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/projects"
              className="block text-primary hover:text-secondary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="block text-primary hover:text-secondary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}