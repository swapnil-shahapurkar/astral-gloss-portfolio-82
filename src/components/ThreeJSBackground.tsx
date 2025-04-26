
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

    // Tech symbols to randomly display
    const symbols = ['</', '{...}', '()', '[]', '>=', '=>', '{}', '&&', '||', '++', '**'];
    
    // Particle configuration
    const particlesArray: (Particle | Symbol)[] = [];
    const numberOfParticles = 60;
    const numberOfSymbols = 15;
    
    // Create particles and symbols
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle(canvas));
    }
    
    for (let i = 0; i < numberOfSymbols; i++) {
      particlesArray.push(new Symbol(canvas, symbols[Math.floor(Math.random() * symbols.length)]));
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(10, 10, 10, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update particles and symbols
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update(ctx);
      }
      
      // Connect particles
      connectParticles(ctx, particlesArray.filter((p): p is Particle => p instanceof Particle));
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="canvas-container opacity-30" />;
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
    this.size = Math.random() * 2 + 0.5;
    this.speedX = Math.random() * 0.3 - 0.15;
    this.speedY = Math.random() * 0.3 - 0.15;
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

// New Symbol class for tech symbols
class Symbol {
  x: number;
  y: number;
  text: string;
  speedX: number;
  speedY: number;
  opacity: number;
  canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement, symbol: string) {
    this.canvas = canvas;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.text = symbol;
    this.speedX = Math.random() * 0.2 - 0.1;
    this.speedY = Math.random() * 0.2 - 0.1;
    this.opacity = Math.random() * 0.5 + 0.1;
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
    ctx.font = '12px monospace';
    ctx.fillStyle = `rgba(82, 35, 119, ${this.opacity})`;
    ctx.fillText(this.text, this.x, this.y);
  }
}

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

function connectParticles(ctx: CanvasRenderingContext2D, particles: Particle[]) {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 100) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(82, 35, 119, ${0.15 - distance / 1000})`;
        ctx.lineWidth = 0.1;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
}

export default ThreeJSBackground;
