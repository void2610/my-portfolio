"use client";

import { motion } from "framer-motion";
import Timeline from "@/components/Timeline";
import ProfileHero from "@/components/ProfileHero";
import ExperienceItem from "@/components/ExperienceItem";
import SkillItem from "@/components/SkillItem";
import { experiences } from "@/data/experience";
import { skills } from "@/data/skills";
import { DURATION, DELAY } from "@/config/animations";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section with Avatar and Profile */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: DURATION.DEFAULT }}
        className="mb-16 bg-surface-elevated rounded-2xl shadow-lg p-8"
      >
        <ProfileHero showDescription={true} />
      </motion.div>

      {/* Skills and Experience Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: DURATION.DEFAULT, delay: DELAY.LARGE }}
        className="grid md:grid-cols-2 gap-12"
      >
        <div className="bg-surface-elevated rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-primary mb-6">Skills</h2>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <SkillItem
                key={skill.name}
                name={skill.name}
                level={skill.level}
                index={index}
              />
            ))}
          </div>
        </div>
        
        <div className="bg-surface-elevated rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-primary mb-6">Experience</h2>
          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <ExperienceItem
                key={index}
                title={experience.title}
                period={experience.period}
                description={experience.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Timeline Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: DURATION.DEFAULT, delay: DELAY.EXTRA_LARGE }}
        className="mt-16 bg-surface-elevated rounded-2xl shadow-lg p-8"
      >
        <Timeline />
      </motion.div>
    </div>
  );
}