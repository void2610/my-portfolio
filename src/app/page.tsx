"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ProjectCarousel from "@/components/ProjectCarousel";
import ProfileHero from "@/components/ProfileHero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* Profile Hero Section */}
        <ProfileHero showDescription={true} isClickable={true} />

        {/* Project Carousel Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">
            Featured Projects
          </h2>
          <ProjectCarousel />
        </motion.div>
      </div>
    </div>
  );
}
