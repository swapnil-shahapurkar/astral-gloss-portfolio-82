
import React, { useEffect, useRef } from 'react';

const ThreeJSBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle configuration
    const particlesArray: Particle[] = [];
    const numberOfParticles = 80; // Reduced number for subtlety
    
    // Create particles
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle(canvas));
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(10, 10, 10, 0.1)'; // More transparent background
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update particles
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update(ctx);
      }
      
      // Connect particles
      connectParticles(ctx, particlesArray);
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="canvas-container opacity-40" />; // Reduced opacity
};

// Particle class with slower movement
class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 0.5; // Smaller particles
    this.speedX = Math.random() * 0.2 - 0.1; // Slower movement
    this.speedY = Math.random() * 0.2 - 0.1; // Slower movement
    this.color = getRandomColor();
  }

  update(ctx: CanvasRenderingContext2D) {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > this.canvas.width || this.x < 0) {
      this.speedX = -this.speedX;
    }
    if (this.y > this.canvas.height || this.y < 0) {
      this.speedY = -this.speedY;
    }

    this.draw(ctx);
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

// Updated color function with more subtle colors
function getRandomColor() {
  const colors = [
    'rgba(82, 35, 119, 0.3)',
    'rgba(54, 25, 91, 0.3)',
    'rgba(8, 11, 56, 0.3)',
    'rgba(19, 49, 85, 0.3)',
    'rgba(37, 77, 112, 0.3)'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Connect particles with very subtle lines
function connectParticles(ctx: CanvasRenderingContext2D, particles: Particle[]) {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 100) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(82, 35, 119, ${0.15 - distance / 1000})`; // More transparent lines
        ctx.lineWidth = 0.1; // Thinner lines
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
}

export default ThreeJSBackground;
