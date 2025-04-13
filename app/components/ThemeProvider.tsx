'use client';

import { useState, useEffect, createContext, useContext } from 'react';

type ThemeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

// Create context with default values
export const ThemeContext = createContext<ThemeContextType>({
  darkMode: false,
  toggleDarkMode: () => {},
});

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is stored in localStorage
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    
    // Check system preference if no saved preference
    const prefersDark = !('darkMode' in localStorage) && 
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    setDarkMode(savedDarkMode || prefersDark);
  }, []);

  useEffect(() => {
    // Apply or remove dark class based on state
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Toggle dark mode function
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', (!darkMode).toString());
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
} 