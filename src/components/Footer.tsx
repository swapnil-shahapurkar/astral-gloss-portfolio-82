
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#030303] py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold">
              <span className="text-tekhelet">D</span>ev<span className="text-tekhelet">P</span>ortfolio
            </a>
            <p className="text-gray-400 mt-2 text-sm">Built with 💻 by John Doe</p>
          </div>
          
          <div className="flex space-x-8 mb-6 md:mb-0">
            <a href="#home" className="text-gray-400 hover:text-tekhelet transition-colors">Home</a>
            <a href="#about" className="text-gray-400 hover:text-tekhelet transition-colors">About</a>
            <a href="#skills" className="text-gray-400 hover:text-tekhelet transition-colors">Skills</a>
            <a href="#projects" className="text-gray-400 hover:text-tekhelet transition-colors">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-tekhelet transition-colors">Contact</a>
          </div>
          
          <div className="flex items-center">
            <button className="bg-tekhelet text-white px-6 py-2 rounded-md hover:bg-russian-violet transition-colors duration-300">
              Resume
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            Powered by React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
