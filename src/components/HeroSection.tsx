
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
        
        <div className="mt-12">
          <a 
            href="#contact" 
            className="bg-tekhelet text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300 mr-4"
          >
            Contact Me
          </a>
          <a 
            href="#projects" 
            className="border border-tekhelet text-white px-8 py-3 rounded-md hover:bg-tekhelet/5 transition-all duration-300"
          >
            View My Work
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
