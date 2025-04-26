
import React from 'react';
import { Button } from './ui/button';
import { FileText, ExternalLink } from 'lucide-react';

const publications = [
  {
    title: "Blockchain-Based Secure Data Sharing",
    abstract: "A novel approach to secure data sharing using blockchain technology",
    venue: "IEEE International Conference on Blockchain",
    pdfUrl: "#",
    externalLink: "#"
  },
  // Add more publications as needed
];

const ResearchSection = () => {
  return (
    <section id="research" className="bg-[#080808] section-padding">
      <div className="container mx-auto">
        <div className="relative mb-12 inline-block">
          <h2 className="section-heading after:content-none">Research Publications</h2>
          <div className="absolute -inset-4 border border-tekhelet/30 rounded-lg -z-10"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((pub, index) => (
            <div key={index} className="glass-card p-6 rounded-xl tilt-card">
              <h3 className="text-xl font-bold mb-3 text-tekhelet">{pub.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{pub.abstract}</p>
              <p className="text-gray-400 text-sm mb-6">{pub.venue}</p>
              
              <div className="flex gap-4">
                <Button variant="outline" size="sm">
                  <FileText className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
                <Button variant="outline" size="sm">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Paper
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
