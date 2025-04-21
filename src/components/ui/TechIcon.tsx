import React from "react";

interface TechIconProps {
  icon: React.ReactNode;
  label: string;
}

const TechIcon: React.FC<TechIconProps> = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center">
      {icon}
      <span className="text-md mt-1">{label}</span>
    </div>
  );
};

export default TechIcon;
