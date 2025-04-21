import React from "react";

interface TechIconProps {
  icon: React.ReactNode;
  label: string;
}

const TechIcon: React.FC<TechIconProps> = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center">
      {icon}
      <p className="mt-1">{label}</p>
    </div>
  );
};

export default TechIcon;
