
import React, { useEffect, useRef, useState } from 'react';

const projects = [
  {
    id: 1,
    title: "Smart Home Dashboard",
    description: "A responsive dashboard for controlling IoT devices with real-time updates using React and Socket.IO.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&q=80",
    category: "Web",
    technologies: ["React", "Node.js", "Socket.IO", "SCSS"]
  },
  {
    id: 2,
    title: "Blockchain Wallet",
    description: "Secure cryptocurrency wallet with multi-signature support and transaction history visualization.",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80",
    category: "Blockchain",
    technologies: ["Ethereum", "Web3.js", "React", "TypeScript"]
  },
  {
    id: 3,
    title: "Neural Network Visualizer",
    description: "Interactive tool for visualizing neural network architectures and training processes.",
    image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?auto=format&fit=crop&q=80",
    category: "AI",
    technologies: ["Python", "TensorFlow", "D3.js", "Flask"]
  },
  {
    id: 4,
    title: "E-commerce Platform",
    description: "Scalable e-commerce solution with advanced product filtering and recommendation engine.",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80",
    category: "Web",
    technologies: ["Next.js", "MongoDB", "Stripe API", "AWS"]
  }
];

const categories = Array.from(new Set(projects.map(project => project.category)));
categories.unshift("All");

const ProjectCard: React.FC<{project: typeof projects[0]}> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  };
  
  return (
    <div 
      ref={cardRef}
      className="glass-card rounded-xl overflow-hidden transition-transform duration-300 ease-out"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-tekhelet">{project.title}</h3>
        <p className="text-gray-300 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-russian-violet/30 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-400">{project.category}</span>
          <button className="bg-tekhelet text-white px-4 py-1 rounded-md hover:bg-russian-violet transition-colors duration-300 text-sm">
            View Project
          </button>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);
  
  return (
    <section id="projects" className="bg-[#080808] section-padding">
      <div className="container mx-auto">
        <h2 className="section-heading">My Projects</h2>
        
        {/* Filter buttons */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category 
                ? "bg-tekhelet text-white" 
                : "bg-transparent border border-tekhelet/30 text-gray-300 hover:border-tekhelet"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
