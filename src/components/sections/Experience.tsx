import React from 'react';
import { siteConfig } from '../../config/site';
import { motion } from 'framer-motion';
import { ExperienceCard } from '../ExperienceCard';

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Work Experience
          </h2>
          <p className="text-lg text-text/60 max-w-2xl mx-auto">
            My professional journey and the amazing companies I've worked with
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Decorative Elements */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 to-transparent hidden md:block" />
          
          <div className="space-y-8">
            {siteConfig.experience.map((job, index) => (
              <ExperienceCard key={index} {...job} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}