import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { ThemeMode } from '../types';
import { storageService } from '../services/storageService';
import { LIGHT_COLORS, DARK_COLORS } from '../constants/theme';

interface ThemeContextType {
  mode: ThemeMode;
  colors: typeof LIGHT_COLORS;
  toggleTheme: () => void;
  setThemeMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>('light');

  useEffect(() => {
    loadTheme();
  }, []);

  const loadTheme = async () => {
    try {
      const savedMode = await storageService.getThemeMode();
      setMode(savedMode);
    } catch (error) {
      console.error('Error loading theme:', error);
    }
  };

  const toggleTheme = async () => {
    try {
      const newMode: ThemeMode = mode === 'light' ? 'dark' : 'light';
      await storageService.saveThemeMode(newMode);
      setMode(newMode);
    } catch (error) {
      console.error('Error toggling theme:', error);
    }
  };

  const setThemeMode = async (newMode: ThemeMode) => {
    try {
      await storageService.saveThemeMode(newMode);
      setMode(newMode);
    } catch (error) {
      console.error('Error setting theme mode:', error);
    }
  };

  const colors = mode === 'light' ? LIGHT_COLORS : DARK_COLORS;

  return (
    <ThemeContext.Provider value={{ mode, colors, toggleTheme, setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
