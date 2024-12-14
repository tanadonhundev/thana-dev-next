import React from "react";

type ExperienceCardProps = {
  title: string;
  company: string;
  period: string;
  description: string;
};

export default function ExperienceCard({
  title,
  company,
  period,
  description,
}: ExperienceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-gray-600">
        {company} - {period}
      </p>
      <p className="mt-4 text-lg">{description}</p>
    </div>
  );
}
