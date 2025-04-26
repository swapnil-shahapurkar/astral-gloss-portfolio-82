
import React from 'react';

const ProfileSection: React.FC = () => {
  return (
    <section id="about" className="bg-[#080808] section-padding">
      <div className="container mx-auto">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 text-tekhelet">My Journey</h3>
            <p className="text-gray-300 mb-4">
              I'm a passionate software engineer with 5+ years of experience building cutting-edge web and mobile applications.
              My journey in tech started with a fascination for solving complex problems and creating impactful digital experiences.
            </p>
            <p className="text-gray-300 mb-6">
              With a strong background in both frontend and backend development, I bring a holistic approach to every project.
              I'm constantly exploring new technologies and methodologies to stay at the forefront of this rapidly evolving industry.
            </p>
            
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-russian-violet/30 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-tekhelet" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Product-focused Engineer</h4>
                  <p className="text-sm text-gray-400">Developing solutions that solve real problems</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-russian-violet/30 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-tekhelet" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Innovative Thinker</h4>
                  <p className="text-sm text-gray-400">Always exploring new ideas and technologies</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-russian-violet/30 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-tekhelet" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Team Collaborator</h4>
                  <p className="text-sm text-gray-400">Working effectively in diverse team environments</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-[500px] w-full rounded-2xl overflow-hidden perspective">
            <div className="absolute inset-0 animate-float">
              {/* This would ideally be a 3D model viewer with an avatar */}
              <div className="h-full w-full rounded-2xl bg-gradient-radial from-tekhelet/20 to-penn-blue/40 flex items-center justify-center">
                <div className="rounded-full h-80 w-80 bg-gradient-to-br from-indigo-dye to-penn-blue border-4 border-tekhelet/30 flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&q=80" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
