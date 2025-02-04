import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  company: string;
  date: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
  index: number;
}

export function ExperienceCard({
  title,
  company,
  date,
  location,
  responsibilities,
  technologies,
  index,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/20"
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/4 flex flex-col items-start">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4"
          >
            <Building className="w-8 h-8 text-primary" />
          </motion.div>
          
          <div className="flex flex-wrap gap-4 text-sm text-text/60">
            <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-3/4">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          >
            {title}
          </motion.h3>
          <h4 className="text-xl text-primary mb-4">{company}</h4>
          
          <ul className="space-y-3 text-text/80 mb-6">
            {responsibilities.map((resp, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="text-primary text-lg leading-7">•</span>
                <span className="flex-1">{resp}</span>
              </motion.li>
            ))}
          </ul>
          
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 rounded-full text-sm bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}