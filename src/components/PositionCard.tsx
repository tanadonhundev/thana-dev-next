import React from "react";
import { IconType } from "react-icons";

type ExperienceCardProps = {
  Icon: IconType;
  position: string;
};

export default function PositionCard({ Icon, position }: ExperienceCardProps) {
  return (
    <div className="flex flex-col justify-center items-center p-5 rounded-lg bg-gradient-to-tr from-amber-600 to-amber-400 shadow-2xs">
      {Icon && <Icon className="text-6xl text-white mb-4" />}
      <p className="text-2xl text-neutral-900 font-bold">{position}</p>
    </div>
  );
}
