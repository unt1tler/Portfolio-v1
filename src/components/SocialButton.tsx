import React from 'react';
import { motion } from 'framer-motion';

interface SocialButtonProps {
  name: string;
  icon: string;
  url: string;
  color: string;
}

export function SocialButton({ name, icon, url, color }: SocialButtonProps) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-6 py-4 rounded-lg transition-colors"
      style={{ backgroundColor: color }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img src={icon} alt={name} className="w-6 h-6" />
      <span className="font-semibold text-white">Connect on {name}</span>
    </motion.a>
  );
}