
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        scrolled ? 'py-3 bg-black/60 backdrop-blur-md' : 'py-6 bg-transparent'
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white">
          <span className="text-tekhelet">D</span>ev<span className="text-tekhelet">P</span>ortfolio
        </a>
        
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-tekhelet transition-colors">Home</a>
          <a href="#about" className="hover:text-tekhelet transition-colors">About</a>
          <a href="#skills" className="hover:text-tekhelet transition-colors">Skills</a>
          <a href="#projects" className="hover:text-tekhelet transition-colors">Projects</a>
          <a href="#contact" className="hover:text-tekhelet transition-colors">Contact</a>
        </div>

        <button className="bg-tekhelet text-white px-6 py-2 rounded-md hover:bg-russian-violet transition-colors duration-300">
          Resume
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
