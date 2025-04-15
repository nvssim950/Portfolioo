'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-r from-blue-600 to-indigo-800 overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-5 w-96 h-96 rounded-full bg-blue-500 opacity-20 blur-3xl transform scale-150 animate-pulse"></div>
        <div className="absolute right-1/3 -bottom-10 w-80 h-80 rounded-full bg-indigo-600 opacity-20 blur-3xl"></div>
        <div className="absolute left-1/4 top-1/3 w-60 h-60 rounded-full bg-blue-400 opacity-20 blur-3xl"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content with animations */}
          <div>
            <h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '100ms' }}
            >
              We Build <span className="text-blue-200">Modern</span> Web Experiences
            </h1>
            <p 
              className={`text-xl text-blue-100 mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '300ms' }}
            >
              Professional web development team specializing in creating beautiful, high-performance web applications with modern technologies.
            </p>
            <div 
              className={`flex flex-wrap gap-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '500ms' }}
            >
              <Link 
                href="/projects" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-sky-500 text-blue-700 hover:bg-sky-400  font-medium text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                View Our Work
                <svg className="ml-2 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-md border-2 border-white text-white hover:bg-bg-sky-500 /10 font-medium text-base transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
            
            {/* Tech logos */}
            <div 
              className={`mt-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '700ms' }}
            >
              <p className="text-blue-200 text-sm font-medium mb-4">WE WORK WITH MODERN TECHNOLOGIES</p>
              <div className="flex flex-wrap gap-6 items-center">
                {/* Technology logos would go here - using placeholder divs for now */}
                <div className="h-8 w-16 bg-white/20 rounded-md flex items-center justify-center text-white text-xs">React</div>
                <div className="h-8 w-16 bg-white/20 rounded-md flex items-center justify-center text-white text-xs">Next.js</div>
                <div className="h-8 w-16 bg-white/20 rounded-md flex items-center justify-center text-white text-xs">Node.js</div>
                <div className="h-8 w-16 bg-white/20 rounded-md flex items-center justify-center text-white text-xs">MongoDB</div>
              </div>
            </div>
          </div>
          
          {/* Illustration or image */}
          <div 
            className={`relative flex justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="relative w-full max-w-lg">
              {/* Animated shapes */}
              <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              
              {/* Main display area - could be an image or code */}
              <div className="relative">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
                  {/* Header bar of window */}
                  <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 flex items-center">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="mx-auto text-sm text-gray-500 dark:text-gray-400">Project Preview</div>
                  </div>
                  
                  {/* Content area */}
                  <div className="p-5 bg-white dark:bg-gray-800">
                    <div className="h-64 w-full bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                      <svg className="w-16 h-16 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    
                    {/* Code-like elements */}
                    <div className="mt-5 space-y-3">
                      <div className="bg-gray-100 dark:bg-gray-700 h-4 w-3/4 rounded"></div>
                      <div className="bg-gray-100 dark:bg-gray-700 h-4 w-full rounded"></div>
                      <div className="bg-gray-100 dark:bg-gray-700 h-4 w-5/6 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 