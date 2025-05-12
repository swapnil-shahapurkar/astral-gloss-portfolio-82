import React, { useState, useEffect, useRef } from 'react';


const allSkills = {
  all: [
    ...Object.values({
      languages: [
        { name: "C", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "C++", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "Python", level: "Basic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Solidity", level: "Basic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" },
        { name: "HTML", level: "Basic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", level: "Basic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", level: "Basic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Assembly", level: "Intermediate", icon: "https://segaretro.org/images/2/2e/CreativeAssembly_logo_2014.svg" }
      ],
      frameworks: [
        { name: "React", level: "Basic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", level: "Basic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" }
      ],
      tools: [
        { name: "Remix IDE", level: "Basic", icon: "https://pbs.twimg.com/profile_images/1477703417636163586/fuv2rwTA_400x400.jpg" },
        { name: "Ganache", level: "Basic", icon: "https://seeklogo.com/images/G/ganache-logo-1EB72084A8-seeklogo.com.png" },
        { name: "Truffle", level: "Basic", icon: "https://seeklogo.com/images/T/truffle-logo-2DC7EBABF2-seeklogo.com.png" },
        { name: "Metamask", level: "Intermediate", icon: "https://seeklogo.com/images/M/metamask-logo-09EDE53DBD-seeklogo.com.png" },
        { name: "Cisco Packet Tracer", level: "Basic", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6X13p44SpCheQhUvzbWamOw3O_AQRMoG2TrjeqdwooyxTB-0wzy9DZoaXrWJUChhlPi0&usqp=CAU" },
        { name: "Wireshark", level: "Basic", icon: "https://preview.redd.it/i-made-a-macos-style-icon-for-wireshark-v0-20d6i256yjmc1.png?width=640&crop=smart&auto=webp&s=ecf932da61ccaa19c607d90542e67d21386d473c" },
        { name: "Burp Suite", level: "Basic", icon: "https://w7.pngwing.com/pngs/286/446/png-transparent-burp-suite-macos-bigsur-icon-thumbnail.png" },
        { name: "Git", level: "Basic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Docker", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Kubernetes", level: "Basic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
        { name: "Jenkins", level: "Basic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
        { name: "VS Code", level: "Basic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Selenium", level: "Basic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" },
        { name: "Linux", level: "Basic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" }
      ],
      libraries: [
        { name: "Pandas", level: "Basic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
        { name: "Numpy", level: "Basic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
        { name: "Matplotlib", level: "Basic", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Created_with_Matplotlib-logo.svg/2048px-Created_with_Matplotlib-logo.png" }
      ],
      databases: [
        { name: "SQL", level: "Basic", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8dbVKyOVjS1mPiVaIqaL3EOTvMSWfANKCcA&s" },
        { name: "MongoDB", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
      ],
      other: [
        { name: "Microcontrollers (Arduino/ATmega32)", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
        { name: "EDA tools", level: "Intermediate", icon: "https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Analytics-512.png" },
        { name: "DevOps", level: "Basic", icon: "https://img.freepik.com/free-vector/flat-design-devops-illustration_23-2149364438.jpg" },
        { name: "AWS", level: "Basic", icon: "https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-AWS-Logo.png" }
      ]
    }).flat()
  ],
  
  languages: [
    { name: "C", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "C++", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Python", level: "Basic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Solidity", level: "Basic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" },
    { name: "HTML", level: "Basic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", level: "Basic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", level: "Basic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Assembly", level: "Intermediate", icon: "https://segaretro.org/images/2/2e/CreativeAssembly_logo_2014.svg" }
  ],
  
  frameworks: [
    { name: "React", level: "Basic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", level: "Basic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" }
  ],
  
  tools: [
    { name: "Remix IDE", level: "Basic", icon: "https://pbs.twimg.com/profile_images/1477703417636163586/fuv2rwTA_400x400.jpg" },
    { name: "Ganache", level: "Basic", icon: "https://seeklogo.com/images/G/ganache-logo-1EB72084A8-seeklogo.com.png" },
    { name: "Truffle", level: "Basic", icon: "https://seeklogo.com/images/T/truffle-logo-2DC7EBABF2-seeklogo.com.png" },
    { name: "Metamask", level: "Intermediate", icon: "https://seeklogo.com/images/M/metamask-logo-09EDE53DBD-seeklogo.com.png" },
    { name: "Cisco Packet Tracer", level: "Basic", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6X13p44SpCheQhUvzbWamOw3O_AQRMoG2TrjeqdwooyxTB-0wzy9DZoaXrWJUChhlPi0&usqp=CAU" },
    { name: "Wireshark", level: "Basic", icon: "https://preview.redd.it/i-made-a-macos-style-icon-for-wireshark-v0-20d6i256yjmc1.png?width=640&crop=smart&auto=webp&s=ecf932da61ccaa19c607d90542e67d21386d473c" },
    { name: "Burp Suite", level: "Basic", icon: "https://w7.pngwing.com/pngs/286/446/png-transparent-burp-suite-macos-bigsur-icon-thumbnail.png" },
    { name: "Git", level: "Basic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Docker", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Kubernetes", level: "Basic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    { name: "Jenkins", level: "Basic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
    { name: "VS Code", level: "Basic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Selenium", level: "Basic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" },
    { name: "Linux", level: "Basic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" }
  ],
  
  libraries: [
    { name: "Pandas", level: "Basic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    { name: "Numpy", level: "Basic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
    { name: "Matplotlib", level: "Basic", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Created_with_Matplotlib-logo.svg/2048px-Created_with_Matplotlib-logo.png" }
  ],
  
  databases: [
    { name: "SQL", level: "Basic", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8dbVKyOVjS1mPiVaIqaL3EOTvMSWfANKCcA&s" },
    { name: "MongoDB", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
  ],
  
  other: [
    { name: "Microcontrollers (Arduino/ATmega32)", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
    { name: "EDA tools", level: "Intermediate", icon: "https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Analytics-512.png" },
    { name: "DevOps", level: "Basic", icon: "https://img.freepik.com/free-vector/flat-design-devops-illustration_23-2149364438.jpg" },
    { name: "AWS", level: "Basic", icon: "https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-AWS-Logo.png" }
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
      className={`glass-card p-6 rounded-xl tilt-card opacity-0 translate-y-5 transition-all duration-700 ease-out`}
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
  const [activeCategory, setActiveCategory] = useState<keyof typeof allSkills>("all");

  return (
    <section id="skills" className="bg-[#050505] section-padding">
      <div className="container mx-auto">
        <h2 className="section-heading">My Skills</h2>

        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {Object.keys(allSkills).map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
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
            <SkillCard key={`${skill.name}-${index}`} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
