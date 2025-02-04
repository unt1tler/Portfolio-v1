import React from 'react';
import { siteConfig } from '../../config/site';
import { User, Mail, MapPin, Calendar, Github, MessageSquare } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3">
              <div className="relative">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary">
                  <img 
                    src={siteConfig.profileImage} 
                    alt={siteConfig.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-1/2">
                  <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-background"></div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <h2 className="text-2xl font-bold">{siteConfig.name}</h2>
                <p className="text-text/60">{siteConfig.role}</p>
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <div className="prose prose-lg dark:prose-invert mb-8">
                <h3 className="text-xl font-semibold mb-4">About Me</h3>
                <p>{siteConfig.about.longBio}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-primary transition-colors">
                    {siteConfig.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>{siteConfig.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-primary" />
                  <a 
                    href={`https://github.com/${siteConfig.social.github.username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {siteConfig.social.github.username}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <a 
                    href={siteConfig.social.discord.serverUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Join Discord Server
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}