
import React, { useEffect, useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const certificates = [
  {
    title: "AWS Solutions Architect",
    organization: "Amazon Web Services",
    date: "2024",
    thumbnail: "https://example.com/cert1.jpg"
  },
  {
    title: "Google Cloud Professional",
    organization: "Google Cloud",
    date: "2023",
    thumbnail: "https://example.com/cert2.jpg"
  },
  {
    title: "Azure Developer Associate",
    organization: "Microsoft",
    date: "2023",
    thumbnail: "https://example.com/cert3.jpg"
  },
  {
    title: "Kubernetes Administrator",
    organization: "CNCF",
    date: "2023",
    thumbnail: "https://example.com/cert4.jpg"
  },
  {
    title: "Certified Blockchain Expert",
    organization: "Blockchain Council",
    date: "2024",
    thumbnail: "https://example.com/cert5.jpg"
  }
];

const CertificationsSection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!carouselRef.current) return;

    const cards = carouselRef.current.querySelectorAll('.cert-card');
    
    // Auto-scroll animation
    let scrollInterval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += 1;
        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth - carouselRef.current.clientWidth) {
          carouselRef.current.scrollLeft = 0;
        }
      }
    }, 30);

    // Hover handlers to pause scrolling
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        clearInterval(scrollInterval);
      });

      card.addEventListener('mouseleave', () => {
        // Resume scrolling
        scrollInterval = setInterval(() => {
          if (carouselRef.current) {
            carouselRef.current.scrollLeft += 1;
            if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth - carouselRef.current.clientWidth) {
              carouselRef.current.scrollLeft = 0;
            }
          }
        }, 30);
      });
    });

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section id="certifications" className="bg-[#050505] section-padding overflow-hidden">
      <div className="container mx-auto flex flex-col items-center">
        <div className="relative mb-12 inline-block">
          <h2 className="section-heading text-center after:content-none">Certifications</h2>
          <div className="absolute -inset-4 border border-tekhelet/30 rounded-lg -z-10"></div>
        </div>
        
        <div ref={carouselRef} className="section-content relative px-12 overflow-x-hidden w-full">
          <div className="flex gap-6 w-max">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="cert-card flex-none w-[300px] transition-all duration-300"
              >
                <div className="glass-card p-6 rounded-xl h-full">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
