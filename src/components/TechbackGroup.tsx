import { LiaNode } from "react-icons/lia";
import {
  SiDrizzle,
  SiNestjs,
  SiSequelize,
  SiSocketdotio,
  SiTypeorm,
} from "react-icons/si";
import TechGroup from "./ui/TechGroup";

const backEndItems = [
  { icon: <LiaNode className="text-[#339933] text-5xl" />, label: "NodeJS" },
  { icon: <SiNestjs className="text-[#E0234E] text-5xl" />, label: "NestJS" },
  { icon: <SiDrizzle className="text-5xl" />, label: "DrizzleORM" },
  { icon: <SiTypeorm className="text-[#C4473A] text-5xl" />, label: "TypeORM" },
  {
    icon: <SiSequelize className="text-[#52B0E7] text-5xl" />,
    label: "Sequelize",
  },
  { icon: <SiSocketdotio className="text-5xl" />, label: "Socket.io" },
];

export default function TechBackGroup() {
  return <TechGroup title="Back-End" items={backEndItems} />;
}
