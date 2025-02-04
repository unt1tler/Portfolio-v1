import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../config/site';
import { ThemeToggle } from './ThemeToggle';
import { useScrollPosition } from '../hooks/useScrollPosition';

export function Navbar() {
  const location = useLocation();
  const scrollPosition = useScrollPosition();
  const isHome = location.pathname === '/';
  const showName = !isHome || scrollPosition > 100;

  const navItems = [
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/experience', label: 'Experience' },
    { path: '/skills', label: 'Skills' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-sm bg-opacity-50" 
         style={{ backgroundColor: `${siteConfig.theme.colors.background}99` }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              className={`text-xl font-bold text-primary transition-opacity duration-300 ${
                showName ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {siteConfig.name}
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`hover:text-primary transition-colors capitalize ${
                  location.pathname === item.path ? 'text-primary' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}