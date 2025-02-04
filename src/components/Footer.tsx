import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { siteConfig } from '../config/site';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { copyright } = siteConfig.branding;
  const yearDisplay = copyright.startYear === currentYear 
    ? currentYear 
    : `${copyright.startYear}-${currentYear}`;

  return (
    <footer className="bg-surface/50 backdrop-blur-sm py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-primary">About</h3>
            <p className="text-sm text-text/60">{siteConfig.about.footerBio}</p>
          </div>

          {/* Navigation */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-primary">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-text/60 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm text-text/60 hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/experience" className="text-sm text-text/60 hover:text-primary transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-text/60 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-primary">Legal</h3>
            <a 
              href={`mailto:${siteConfig.email}?subject=Legal%20Inquiry`}
              className="inline-flex items-center gap-2 text-sm text-text/60 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              Legal Contact
            </a>
          </div>
        </div>

        {/* Copyright and Analytics */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-text/60">
              © {yearDisplay}{' '}
              <a 
                href={copyright.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                {copyright.text}
              </a>
              . All rights reserved.
            </p>
            {siteConfig.analytics?.enabled && (
              <div className="flex gap-8 text-sm text-text/60">
                <span id="visitor-count">0</span> visitors •{' '}
                <span id="page-views">0</span> page views
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}