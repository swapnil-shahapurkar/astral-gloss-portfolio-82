import React, { useState, useEffect, useRef } from 'react';

const allSkills = {
  languages: [
    { name: "JavaScript", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Python", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "TypeScript", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" }
  ],
  frameworks: [
    { name: "React", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" }
  ],
  databases: [
    { name: "MongoDB", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
  ],
  tools: [
    { name: "Git", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Docker", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" }
  ]
};

const SkillCard: React.FC<{ skill: typeof allSkills["languages"][0] }> = ({ skill }) => {
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
  const [activeCategory, setActiveCategory] = useState<keyof typeof allSkills>("languages");

  return (
    <section id="skills" className="bg-[#050505] section-padding">
      <div className="container mx-auto">
        <h2 className="section-heading">My Skills</h2>

        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {Object.keys(allSkills).map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${activeCategory === category
                ? "bg-tekhelet text-white"
                : "bg-transparent border border-tekhelet/30 text-gray-300 hover:border-tekhelet"
                }`}
              onClick={() => setActiveCategory(category as keyof typeof allSkills)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {allSkills[activeCategory].map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
