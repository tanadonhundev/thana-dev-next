import React, { useRef } from "react";
import TechFrontGroup from "@/components/TechFrontGroup";
import TechbackGroup from "@/components/TechbackGroup";
import TechLanguagesGroup from "@/components/TechLanguagesGroup";
import TechDBGroup from "@/components/TechDBGroup";
import TechAndToolGroup from "@/components/TechAndToolGroup";

export default function SkillSection() {
  const sectionRef = useRef(null);
  return (
    <div>
      <section
        id="skills"
        ref={sectionRef}
        className={"py-16 bg-gray-100 transition-opacity duration-1000"}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <p className="text-heading">
              Ski<span className="text-amber-600">ll</span>s
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
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
