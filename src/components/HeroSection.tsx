import React, { useState, useEffect, useRef } from 'react';
import ThreeJSBackground from './ThreeJSBackground';

const HeroSection: React.FC = () => {
  const titles = [
    'Software Engineer', 
    'Full Stack Developer', 
    'Researcher'
  ];
    
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
      
    if (!isDeleting && displayedText === currentTitle) {
      // Wait before starting to delete
      timeoutRef.current = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(75); // Delete faster than type
      }, 1500);
    } else if (isDeleting && displayedText === '') {
      // Move to the next title
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      setTypingSpeed(150);
    } else {
      // Handle typing animation
      timeoutRef.current = setTimeout(() => {
        setDisplayedText(currentTitle.substring(0, isDeleting ? displayedText.length - 1 : displayedText.length + 1));
      }, typingSpeed);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayedText, currentTitleIndex, isDeleting, typingSpeed, titles]);

  return (
    <section id="home" className="h-screen relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <svg className="w-full h-full">
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(82, 35, 119, 0.1)" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" className="animate-flow">
            <animate
              attributeName="x"
              from="0"
              to="50"
              dur="20s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              from="0"
              to="50"
              dur="20s"
              repeatCount="indefinite"
            />
          </rect>
        </svg>
      </div>
      <ThreeJSBackground />
      
      <div className="container mx-auto text-center z-10">
        <p className="text-lg mb-2 text-gray-300">Hello, I'm</p>
        <h1 className="text-7xl font-bold mb-4">
          <span className="text-white">John</span>
          <span className="text-tekhelet"> Doe</span>
        </h1>
        
        <div className="typing-container h-12 mb-8">
          <h2 className="text-2xl inline-flex">
            <span className="mr-2">I'm a</span>
            <span className="text-russian-violet font-semibold">{displayedText}</span>
            <span className="typed-cursor">|</span>
          </h2>
        </div>
        
        <div className="mt-12 flex justify-center items-center space-x-4">
          <a 
            href="#contact" 
            className="relative inline-block bg-tekhelet text-white px-8 py-3 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(82,35,119,0.5)] overflow-hidden group"
          >
            <span className="relative z-10">Contact Me</span>
            <div className="absolute inset-0 bg-gradient-to-r from-tekhelet via-russian-violet to-tekhelet bg-[length:200%] group-hover:animate-shimmer"></div>
          </a>
          <a 
            href="#projects" 
            className="relative inline-block border border-tekhelet text-white px-8 py-3 rounded-md transition-all duration-300 hover:scale-105 hover:border-opacity-0 hover:shadow-[0_0_15px_rgba(82,35,119,0.3)] group"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-r from-tekhelet to-russian-violet rounded-md"></div>
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 w-full text-center">
        <a href="#about" className="animate-bounce inline-block">
          <svg className="w-8 h-8 text-tekhelet" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
