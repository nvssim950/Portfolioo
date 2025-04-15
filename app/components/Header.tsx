'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
  const pathname = usePathname();

  // Add scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActiveLink = (path: string) => {
    return pathname === path ? 'text-blue-600 dark:text-blue-400 font-medium' : '';
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md py-2' : 'py-4'} bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1 transition-all duration-300 hover:scale-105">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-gray-900 dark:text-white"> <span className="text-blue-600 dark:text-blue-500">Trivix</span></span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="rounded-md p-2 inline-flex items-center justify-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-10">
            {['/', '/about', '/services', '/projects', '/contact'].map((path, index) => {
              const labels = ['Home', 'About', 'Services', 'Projects', 'Contact'];
              const delay = 100 * index;
              
              return (
                <Link 
                  key={path} 
                  href={path} 
                  className={`text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 ${isActiveLink(path)} relative overflow-hidden group transition-all duration-300 ease-in-out`}
                  style={{ animationDelay: `${delay}ms` }}
                >
                  <span className="relative z-10">{labels[index]}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              );
            })}
          </nav>
          
          {/* Dark mode toggle button with animation */}
          <div className="hidden md:flex items-center mr-4">
            <button 
              onClick={toggleDarkMode}
              className="p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full focus:outline-none transition-all duration-300 hover:scale-110"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg className="h-5 w-5 transition-transform duration-500 rotate-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="h-5 w-5 transition-transform duration-500 rotate-90" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Contact button with animation */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link href="/contact" className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-6 py-2.5 border border-transparent rounded-md shadow-sm text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Hire Us
            </Link>
          </div>
        </div>
        
        {/* Mobile menu, show/hide based on mobile menu state with animation */}
        <div 
          className={`${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'} md:hidden absolute w-full left-0 p-2 transition-all transform duration-300 origin-top-right bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800`}
        >
          <div className="pt-2 pb-3 space-y-1">
            <Link href="/" className={`block pl-3 pr-4 py-2 rounded-md font-medium ${isActiveLink('/') || 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'} transition-colors duration-200`} onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" className={`block pl-3 pr-4 py-2 rounded-md font-medium ${isActiveLink('/about') || 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'} transition-colors duration-200`} onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href="/services" className={`block pl-3 pr-4 py-2 rounded-md font-medium ${isActiveLink('/services') || 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'} transition-colors duration-200`} onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link href="/projects" className={`block pl-3 pr-4 py-2 rounded-md font-medium ${isActiveLink('/projects') || 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'} transition-colors duration-200`} onClick={() => setIsMenuOpen(false)}>
              Projects
            </Link>
            <Link href="/contact" className={`block pl-3 pr-4 py-2 rounded-md font-medium ${isActiveLink('/contact') || 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'} transition-colors duration-200`} onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <div className="flex items-center justify-between mt-4 pl-3 pr-4 py-2">
              <span className="text-sm text-gray-700 dark:text-gray-300">Dark Mode</span>
              <button 
                onClick={toggleDarkMode}
                className="p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full focus:outline-none transition-all duration-300"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>
            <Link 
              href="/contact" 
              className="block w-full text-center px-4 py-2.5 my-2 rounded-md bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white text-base font-medium transition-all duration-300 hover:shadow-lg" 
              onClick={() => setIsMenuOpen(false)}
            >
              Hire Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 