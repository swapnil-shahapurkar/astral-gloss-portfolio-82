
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const certificates = [
  {
    title: "AWS Solutions Architect",
    organization: "Amazon Web Services",
    date: "2024",
    thumbnail: "https://example.com/cert1.jpg"
  },
  // Add more certificates as needed
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="bg-[#050505] section-padding">
      <div className="container mx-auto">
        <h2 className="section-heading">Certifications</h2>
        
        <div className="relative px-12">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {certificates.map((cert, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="glass-card p-6 rounded-xl transition-all duration-300 hover:scale-110">
                    <div className="aspect-video mb-4 bg-black/30 rounded-lg overflow-hidden">
                      <img
                        src={cert.thumbnail}
                        alt={cert.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                    <p className="text-gray-400">{cert.organization}</p>
                    <p className="text-sm text-gray-500">{cert.date}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hover:bg-tekhelet/10" />
            <CarouselNext className="hover:bg-tekhelet/10" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
