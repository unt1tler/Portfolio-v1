import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className = '', hover = true }: GlassCardProps) {
  return (
    <motion.div
      className={`
        backdrop-blur-md bg-white/5 
        border border-white/10 rounded-xl
        shadow-lg ${className}
      `}
      whileHover={hover ? {
        scale: 1.02,
        boxShadow: "0 8px 32px rgba(var(--color-primary), 0.15)"
      } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}