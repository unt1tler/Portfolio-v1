import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../../config/site';

export function Story() {
  return (
    <section className="mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          My Story
        </h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-lg text-text/80 mb-6">{siteConfig.about.story}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-surface p-6 rounded-lg shadow-glass">
              <h3 className="text-xl font-semibold mb-4 text-primary">Background</h3>
              <p className="text-text/80">{siteConfig.about.background}</p>
            </div>
            <div className="bg-surface p-6 rounded-lg shadow-glass">
              <h3 className="text-xl font-semibold mb-4 text-primary">Journey</h3>
              <p className="text-text/80">{siteConfig.about.journey}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}