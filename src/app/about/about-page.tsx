"use client";

import Timeline from "@/components/Timeline";
import ProfileHero from "@/components/ProfileHero";
import ExperienceItem from "@/components/ExperienceItem";
import SkillItem from "@/components/SkillItem";
import SurfaceCard from "@/components/SurfaceCard";
import AnimatedContainer from "@/components/animations/AnimatedContainer";
import { experiences } from "@/data/experience";
import { skills } from "@/data/skills";
import { DELAY } from "@/config/animations";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section with Avatar and Profile */}
      <AnimatedContainer className="mb-16">
        <SurfaceCard padding="lg">
          <ProfileHero showDescription={true} />
        </SurfaceCard>
      </AnimatedContainer>

      {/* Skills and Experience Section */}
      <AnimatedContainer delay={DELAY.LARGE} className="grid md:grid-cols-2 gap-12">
        <SurfaceCard>
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
        </SurfaceCard>

        <SurfaceCard>
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
        </SurfaceCard>
      </AnimatedContainer>

      {/* Timeline Section */}
      <AnimatedContainer delay={DELAY.EXTRA_LARGE} className="mt-16">
        <SurfaceCard padding="lg">
          <Timeline />
        </SurfaceCard>
      </AnimatedContainer>
    </div>
  );
}
