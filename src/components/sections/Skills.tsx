import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../../config/site';
import { ScrollReveal } from '../animations/ScrollReveal';
import { SkillIcon } from '../ui/SkillIcon';
import { ProgressBar } from '../ui/ProgressBar';
import { AnimatedText } from '../animations/AnimatedText';

export function Skills() {
  if (!siteConfig.skills?.length) return null;

  return (
    <section id="skills" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AnimatedText
        text="Skills & Technologies"
        className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {siteConfig.skills.map((skill, index) => (
          <ScrollReveal
            key={skill.name}
            delay={index * 0.1}
            direction={index % 2 === 0 ? 'left' : 'right'}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <div className="flex items-center gap-4">
                <SkillIcon name={skill.name} />
                <ProgressBar
                  label={skill.name}
                  value={skill.level}
                />
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}