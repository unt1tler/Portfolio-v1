import React from 'react';
import { Profile } from '../components/about/Profile';
import { Story } from '../components/about/Story';
import { Expertise } from '../components/about/Expertise';
import { Community } from '../components/about/Community';

export function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Profile />
        <Story />
        <Expertise />
        <Community />
      </div>
    </div>
  );
}