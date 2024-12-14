import ExperienceCard from "@/components/ExperienceCard";
import React from "react";

export default function WorkSection() {
  return (
    <div>
      <section id="experience" className="py-16  bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Work Experience
          </h2> 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ExperienceCard
              title="Software Developer"
              company="isoftel thailand co ltd"
              period="2024 Mar - Present"
              description=" Responsible for developing web applications using React and
                Node.js. Lead the development of a major project that increased
                user engagement by 30%.."
            />
            <ExperienceCard
              title="Cooperative training"
              company="Company Name"
              period="2023 Nov - 2024 Feb"
              description=" Assisted in developing responsive web applications and
                maintained codebase for ongoing projects. Gained experience in
                both frontend and backend development."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
