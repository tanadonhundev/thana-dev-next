import React from "react";

type SkillCardProps = {
  title: string;
  skills: string[];
};

export default function TestCard({ title, skills }: SkillCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">{title}</h3>
      <ul className="mt-4 list-disc pl-5">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
