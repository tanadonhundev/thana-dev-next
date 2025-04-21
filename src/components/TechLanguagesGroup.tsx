import { SiJavascript, SiTypescript } from "react-icons/si";
import { FaCss3Alt, FaHtml5, FaPhp } from "react-icons/fa";
import TechGroup from "./ui/TechGroup";

const languageItems = [
  {
    icon: <SiJavascript className="text-yellow-300 text-5xl" />,
    label: "JavaScript",
  },
  {
    icon: <SiTypescript className="text-blue-500 text-5xl" />,
    label: "TypeScript",
  },
  { icon: <FaHtml5 className="text-orange-600 text-5xl" />, label: "HTML" },
  { icon: <FaCss3Alt className="text-blue-600 text-5xl" />, label: "CSS" },
  { icon: <FaPhp className="text-indigo-400 text-5xl" />, label: "PHP" },
];

export default function TechLanguagesGroup() {
  return <TechGroup title="Languages" items={languageItems} />;
}
