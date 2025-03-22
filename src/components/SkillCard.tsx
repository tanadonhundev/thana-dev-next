import React from "react";

type SkillCardProps = {
  title: string;
  skills: string[];
};

export default function TestCard({ title, skills }: SkillCardProps) {
  // Split the skills into two arrays for two columns
  const halfIndex = Math.ceil(skills.length / 2);
  const firstHalf = skills.slice(0, halfIndex);
  const secondHalf = skills.slice(halfIndex);

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col h-full">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="flex mt-4 space-x-6">
        <ul className="list-disc pl-5 w-1/2">
          {firstHalf.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <ul className="list-disc pl-5 w-1/2">
          {secondHalf.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
