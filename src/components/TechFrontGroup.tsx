import { FaBootstrap, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMui, SiShadcnui } from "react-icons/si";
import TechGroup from "./ui/TechGroup";

const frontEndItems = [
  { icon: <FaReact className="text-blue-500 text-5xl" />, label: "ReactJS" },
  { icon: <RiNextjsFill className="text-5xl" />, label: "NextJS" },
  {
    icon: <RiTailwindCssFill className="text-blue-500 text-5xl" />,
    label: "Tailwind CSS",
  },
  { icon: <SiMui className="text-blue-500 text-5xl" />, label: "Material-UI" },
  { icon: <SiShadcnui className="text-5xl" />, label: "Shadcn-UI" },
  {
    icon: <FaBootstrap className="text-purple-600 text-5xl" />,
    label: "Bootstrap",
  },
];

export default function TechFrontGroup() {
  return <TechGroup title="Front-End" items={frontEndItems} />;
}
