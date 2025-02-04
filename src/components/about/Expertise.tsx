import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../../config/site';
import { Code, Server, Palette } from 'lucide-react';

export function Expertise() {
  const areas = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: 'Frontend Development',
      description: siteConfig.expertise.frontend
    },
    {
      icon: <Server className="w-8 h-8 text-primary" />,
      title: 'Backend Development',
      description: siteConfig.expertise.backend
    },
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: 'UI/UX Design',
      description: siteConfig.expertise.design
    }
  ];

  return (
    <section className="mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Areas of Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface p-6 rounded-lg shadow-glass"
            >
              <div className="mb-4">{area.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{area.title}</h3>
              <p className="text-text/80">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}