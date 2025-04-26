
import React, { useEffect, useRef } from 'react';

const ThreeJSBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Simulate a three.js or particle effect with canvas
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
    const numberOfParticles = 150;
    
    // Create particles
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle(canvas));
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(10, 10, 10, 0.2)';
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

  return <canvas ref={canvasRef} className="canvas-container" />;
};

// Particle class
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
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 0.5 - 0.25;
    this.speedY = Math.random() * 0.5 - 0.25;
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

// Utility function to get a random color
function getRandomColor() {
  const colors = ['#522377', '#36195B', '#080B38', '#133155', '#254D70'];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Connect particles with lines
function connectParticles(ctx: CanvasRenderingContext2D, particles: Particle[]) {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 100) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(82, 35, 119, ${1 - distance / 100})`;
        ctx.lineWidth = 0.2;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
}

export default ThreeJSBackground;
