
import React, { useEffect, useRef } from 'react';

const skills = [
  {
    name: "JavaScript",
    level: "Advanced",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    name: "React",
    level: "Advanced",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    name: "Node.js",
    level: "Intermediate",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  {
    name: "Python",
    level: "Advanced",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  },
  {
    name: "TypeScript",
    level: "Intermediate",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
  }
];

const SkillCard: React.FC<{skill: typeof skills[0], index: number}> = ({ skill, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef} 
      className={`glass-card p-6 rounded-xl tilt-card opacity-0 translate-y-10 transition-all duration-700 ease-out`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex flex-col items-center">
        <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-4" />
        <h3 className="text-xl font-semibold mb-1">{skill.name}</h3>
        <span className="px-3 py-1 rounded-full bg-tekhelet/20 text-tekhelet text-sm font-medium">
          {skill.level}
        </span>
      </div>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="bg-[#050505] section-padding">
      <div className="container mx-auto">
        <h2 className="section-heading">My Skills</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
