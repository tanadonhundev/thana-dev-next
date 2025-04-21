import React, { useEffect, useState, useRef } from "react";
import TechFrontGroup from "@/components/TechFrontGroup";
import TechbackGroup from "@/components/TechbackGroup";
import TechLanguagesGroup from "@/components/TechLanguagesGroup";
import TechDBGroup from "@/components/TechDBGroup";
import TechAndToolGroup from "@/components/TechAndToolGroup";

export default function SkillSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const currentSection = sectionRef.current; // เก็บค่า sectionRef.current ไว้ในตัวแปร

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <div>
      <section
        id="skills"
        ref={sectionRef}
        className={`py-16 transition-opacity duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex justify-center">
            <h1>Skills</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <TechLanguagesGroup />
            <TechFrontGroup />
            <TechbackGroup />
            <TechDBGroup />
            <TechAndToolGroup />
          </div>
        </div>
      </section>
    </div>
  );
}
