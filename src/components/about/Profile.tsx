import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../../config/site';
import { Mail, MapPin, Github } from 'lucide-react';

export function Profile() {
  return (
    <section className="mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
      >
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20">
              <img
                src={siteConfig.profileImage}
                alt={siteConfig.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/200x200?text=Profile';
                }}
              />
            </div>
            <div className="absolute bottom-2 right-2">
              <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-white"></div>
            </div>
          </motion.div>

          <div className="flex-1 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
            >
              {siteConfig.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-text/80 mb-6"
            >
              {siteConfig.role}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start text-text/60"
            >
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-primary transition-colors">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{siteConfig.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                <a
                  href={`https://github.com/${siteConfig.social.github.username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  {siteConfig.social.github.username}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}