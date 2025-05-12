import React, { useEffect, useRef, useState } from 'react';
import ThreeJSBackground from './ThreeJSBackground';

const HeroSection: React.FC = () => {
  const titles = [
    'Software Innovator',
    'Blockchain Visionary',
    'Cybersecurity Strategist',
    'Tech Research Specialist',
    'Creative Code Architect',
  ];

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];

    if (!isDeleting && displayedText === currentTitle) {
      setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(75);
      }, 1500);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      setTypingSpeed(150);
    } else {
      setTimeout(() => {
        setDisplayedText(
          currentTitle.substring(
            0,
            isDeleting ? displayedText.length - 1 : displayedText.length + 1
          )
        );
      }, typingSpeed);
    }
  }, [displayedText, currentTitleIndex, isDeleting, typingSpeed, titles]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    let animationFrameId: number;

    if (canvas && ctx) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const particles: { x: number; y: number; dx: number; dy: number; radius: number }[] = [];

      for (let i = 0; i < 100; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          dx: (Math.random() - 0.5) * 0.5,
          dy: (Math.random() - 0.5) * 0.5,
          radius: 2,
        });
      }

      const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw particles
        particles.forEach((p) => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(82, 35, 119, 0.7)';
          ctx.fill();
        });

        // Draw lines
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dist = Math.hypot(
              particles[i].x - particles[j].x,
              particles[i].y - particles[j].y
            );
            if (dist < 120) {
              ctx.beginPath();
              ctx.strokeStyle = 'rgba(82, 35, 119, 0.1)';
              ctx.lineWidth = 1;
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }

        // Update particle positions
        particles.forEach((p) => {
          p.x += p.dx;
          p.y += p.dy;

          if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
          if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
        });

        animationFrameId = requestAnimationFrame(draw);
      };

      draw();
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="home" className="h-screen relative flex items-center justify-center overflow-hidden">
      {/* Canvas Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full bg-black z-[-1]" 
      />

      {/* Optional Three.js layer */}
      <div className="absolute inset-0 -z-10">
        <ThreeJSBackground />
      </div>

      {/* Content */}
      <div className="container mx-auto text-center z-10">
        <p className="text-lg mb-2 text-gray-300">Hello, I'm</p>
        <h1 className="text-7xl font-bold mb-4">
  <span className="text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>Swapnil</span>
  <span className="text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}> .S</span>
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
          <svg
            className="w-8 h-8 text-tekhelet"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
