import React from "react";
import TechGroup from "./ui/TechGroup";
import { SiPostman } from "react-icons/si";
import { FaGitAlt, FaGithub, FaGitlab } from "react-icons/fa";

const techAndToolItems = [
  {
    icon: <SiPostman className="text-orange-400 text-5xl" />, 
    label: "Postman",
  },
  {
    icon: <FaGitAlt className="text-orange-500 text-5xl" />, 
    label: "Git",
  },
  {
    icon: <FaGithub className="text-gray-800 text-5xl" />,
    label: "GitHub",
  },
  {
    icon: <FaGitlab className="text-orange-600 text-5xl" />, 
    label: "GitLab",
  },
];

export default function TechAndToolGroup() {
  return <TechGroup title="Tools & Technologies" items={techAndToolItems} />;
}
