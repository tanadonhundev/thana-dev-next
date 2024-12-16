import React, { useEffect, useState, useRef } from "react";
import ExperienceCard from "../components/ExperienceCard";

export default function WorkSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        // Update visibility status dynamically
      },
      { threshold: 0.1 } // Trigger when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div>
      <section
        id="experience"
        ref={sectionRef}
        className={`py-16 bg-gray-100 transition-opacity duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Work Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ExperienceCard
              title="Software Developer"
              company="isoftel thailand co ltd"
              period="2024 Mar - Present"
              description="Responsible for developing web applications using React and Node.js..."
            />
            <ExperienceCard
              title="Cooperative training"
              company="Company Name"
              period="2023 Nov - 2024 Feb"
              description="Assisted in developing responsive web applications and maintained codebase..."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
