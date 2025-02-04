import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../../config/site';
import { Users, Heart, MessageSquare } from 'lucide-react';

export function Community() {
  return (
    <section className="mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Community Involvement
        </h2>
        <div className="bg-surface p-8 rounded-lg shadow-glass">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex items-center gap-4">
              <Users className="w-8 h-8 text-primary" />
              <div>
                <h4 className="font-semibold">Active Members</h4>
                <p className="text-2xl font-bold text-primary">{siteConfig.community.members}+</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Heart className="w-8 h-8 text-primary" />
              <div>
                <h4 className="font-semibold">Open Source</h4>
                <p className="text-2xl font-bold text-primary">{siteConfig.community.contributions}+</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MessageSquare className="w-8 h-8 text-primary" />
              <div>
                <h4 className="font-semibold">Discord Community</h4>
                <p className="text-2xl font-bold text-primary">{siteConfig.community.discussions}+</p>
              </div>
            </div>
          </div>
          <p className="text-lg text-text/80 mb-6">{siteConfig.community.description}</p>
          <div className="flex flex-wrap gap-4">
            {siteConfig.community.initiatives.map((initiative, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full text-sm bg-primary/10 text-primary border border-primary/20"
              >
                {initiative}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}