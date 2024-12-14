import SkillCard from "@/components/SkillCard";
import React from "react";

export default function SkillSection() {
  return (
    <div>
      <section id="skills" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <SkillCard
              title="Frontend Development"
              skills={["React", "HTML/CSS", "Tailwind CSS"]}
            />
            <SkillCard
              title="Backend Development"
              skills={["Node.js", "Express", "MongoDB"]}
            />
            <SkillCard
              title="Tools & Technologies"
              skills={["Git/GitHub", "Docker", "REST APIs"]}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
