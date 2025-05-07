import React from "react";

type ExperienceCardProps = {
  position: string;
};

export default function PositionCard({ position }: ExperienceCardProps) {
  return (
    <div className="flex flex-col justify-center items-center p-2 rounded-2xl bg-gradient-to-tr from-amber-600 to-amber-400 shadow-2xs">
      <p className="text-2xl font-bold">{position}</p>
    </div>
  );
}
