import React, { createContext, useContext } from 'react';
import { useTheme } from '../hooks/useTheme';
import { siteConfig } from '../config/site';

type ThemeContextType = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  colors: typeof siteConfig.theme.colors.light | typeof siteConfig.theme.colors.dark;
};

const defaultColors = {
  light: {
    primary: '#5865F2',
    secondary: '#57F287',
    background: '#FFFFFF',
    surface: '#F8F9FA',
    text: '#2E3338',
    muted: '#747F8D'
  },
  dark: {
    primary: '#7289DA',
    secondary: '#57F287',
    background: '#1A1B26',
    surface: '#24283B',
    text: '#A9B1D6',
    muted: '#565F89'
  }
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme, toggleTheme } = useTheme();
  
  const colors = siteConfig.theme?.colors?.[theme] || defaultColors[theme];

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
}