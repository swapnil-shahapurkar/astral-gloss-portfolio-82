
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProfileSection from '@/components/ProfileSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ResearchSection from '@/components/ResearchSection';
import CertificationsSection from '@/components/CertificationsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Initial animations for hero section
    gsap.from('.hero-content > *', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out'
    });

    // Animations for sections as they come into view
    const sections = [
      '.profile-section',
      '.skills-section',
      '.projects-section',
      '.research-section',
      '.certifications-section',
      '.contact-section'
    ];

    sections.forEach(section => {
      gsap.from(section + ' > *', {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out'
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navigation />
      <div className="hero-content">
        <HeroSection />
      </div>
      <div className="profile-section">
        <ProfileSection />
      </div>
      <div className="skills-section">
        <SkillsSection />
      </div>
      <div className="projects-section">
        <ProjectsSection />
      </div>
      <div className="research-section">
        <ResearchSection />
      </div>
      <div className="certifications-section">
        <CertificationsSection />
      </div>
      <div className="contact-section">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
