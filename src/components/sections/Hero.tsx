import React from 'react';
import { motion } from 'framer-motion';
import { Terminal3D } from '../Terminal3D';
import { GitHubStats } from '../GitHubStats';
import { siteConfig } from '../../config/site';
import { Github } from 'lucide-react';
import { AnimatedText } from '../animations/AnimatedText';

export function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
      
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <AnimatedText
            text={siteConfig.name}
            className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          />
          <AnimatedText
            text={siteConfig.role}
            className="text-3xl mb-6"
            delay={0.2}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl mb-8 text-text/80 max-w-xl"
          >
            {siteConfig.bio}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 justify-center md:justify-start"
          >
            <motion.a
              href={`https://github.com/${siteConfig.social.github.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold"
              whileHover={{ scale: 1.05, backgroundColor: "rgb(var(--color-secondary))" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Github className="w-5 h-5" />
              View GitHub
            </motion.a>
          </motion.div>
        </motion.div>

        <div className="w-full">
          <Terminal3D />
        </div>
      </div>
    </section>
  );
}