import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Enhanced data with "options" (Services/Tags) to satisfy the menu requirement
const projects = [
  { 
    id: 1, 
    title: "The Alpine Trust", 
    category: "Real Estate", 
    img: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1587&auto=format&fit=crop",
    services: ["Asset Acquisition", "Heritage Zoning", "Legacy Transfer"] 
  },
  { 
    id: 2, 
    title: "Monaco Reserve", 
    category: "Private Equity", 
    img: "https://images.unsplash.com/photo-1565514020176-8c2cb45e9945?q=80&w=1587&auto=format&fit=crop",
    services: ["Capital Structures", "Tax Residency", "Liquid Strategies"]
  },
  { 
    id: 3, 
    title: "Silicon Vault", 
    category: "Venture Hedging", 
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    services: ["Pre-IPO Derivatives", "Founder Liquidity", "Risk Shielding"]
  },
  { 
    id: 4, 
    title: "Aviation One", 
    category: "Asset Financing", 
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop",
    services: ["Fleet Management", "Cross-Border Leasing", "Operational Audits"]
  },
];

const SelectedWorks: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // 1. Initial Staggered Entry Animation for the list
      const items = gsap.utils.toArray('.project-item-container');
      gsap.fromTo(items, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );

      // 2. Accordion Interaction Logic
      // We attach listeners manually to ensure GSAP controls the height animation smoothly
      const projectItems = document.querySelectorAll('.project-item-container');
      
      projectItems.forEach((item) => {
        const content = item.querySelector('.project-content');
        const img = item.querySelector('.project-img');
        const title = item.querySelector('.project-title');
        
        // Ensure initial state is closed
        gsap.set(content, { height: 0, opacity: 0 });

        item.addEventListener('mouseenter', () => {
          // Open "Menu"
          gsap.to(content, {
            height: 'auto',
            opacity: 1,
            duration: 0.6,
            ease: "power3.out"
          });
          
          // Image Scale Effect
          gsap.fromTo(img, 
            { scale: 1.1 },
            { scale: 1, duration: 1.2, ease: "power2.out", overwrite: true }
          );

          // Title Interaction
          gsap.to(title, { x: 20, color: "#C9A227", duration: 0.4, ease: "power2.out" });
        });

        item.addEventListener('mouseleave', () => {
          // Close "Menu"
          gsap.to(content, {
            height: 0,
            opacity: 0,
            duration: 0.4,
            ease: "power3.in" // Faster exit
          });

          // Reset Title
          gsap.to(title, { x: 0, color: "#1A1A1A", duration: 0.4, ease: "power2.out" });
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full py-20 bg-[#F9F9F9] border-t border-gray-200">
      
      <div className="container mx-auto px-6 md:px-10">
        <div className="mb-10">
          <h2 className="font-display text-4xl text-[#1A1A1A]">Selected Works</h2>
          <p className="font-['Inter'] text-xs uppercase tracking-widest text-gray-500 mt-2">Interactive Case Studies</p>
        </div>

        <div className="flex flex-col border-t border-gray-300">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="project-item-container border-b border-gray-300 overflow-hidden"
            >
              {/* Trigger / Header */}
              <div className="py-10 cursor-pointer group flex justify-between items-baseline">
                <h3 className="project-title font-display text-4xl md:text-6xl text-[#1A1A1A] transition-colors">
                  {project.title}
                </h3>
                <span className="font-['Inter'] text-xs md:text-sm uppercase tracking-widest text-gray-500 group-hover:text-[#C9A227] transition-colors">
                  {project.category}
                </span>
              </div>

              {/* Collapsible Content (The "Menu Options") */}
              <div className="project-content opacity-0">
                <div className="pb-12 grid grid-cols-1 md:grid-cols-12 gap-10">
                  
                  {/* Option 1: The Visual (Image) */}
                  <div className="md:col-span-8 overflow-hidden">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="project-img w-full h-[300px] md:h-[450px] object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                    />
                  </div>

                  {/* Option 2: The Data (Menu Items) */}
                  <div className="md:col-span-4 flex flex-col justify-end">
                    <h4 className="font-display text-2xl text-[#1A1A1A] mb-6 italic">Strategic Interventions</h4>
                    <ul className="space-y-4">
                      {project.services.map((service, index) => (
                        <li key={index} className="flex items-center gap-3 group/link cursor-pointer">
                          <span className="w-2 h-2 rounded-full bg-[#C9A227] opacity-0 group-hover/link:opacity-100 transition-opacity"></span>
                          <span className="font-['Inter'] text-sm uppercase tracking-wider text-gray-600 group-hover/link:text-[#1A1A1A] transition-colors">
                            {service}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-10">
                       <button className="px-6 py-3 border border-[#1A1A1A] text-[#1A1A1A] font-['Inter'] text-xs uppercase tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-colors">
                         View Full Case
                       </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWorks;