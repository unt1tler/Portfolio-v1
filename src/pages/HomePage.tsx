import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Skills } from '../components/sections/Skills';
import { Work } from '../components/sections/Work';
import { Contact } from '../components/sections/Contact';
import { GitHubStats } from '../components/GitHubStats';

export function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <GitHubStats />
      </div>
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}