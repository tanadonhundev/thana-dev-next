import { GrMysql } from "react-icons/gr";
import { BiLogoMongodb } from "react-icons/bi";
import { SiMariadb } from "react-icons/si";
import TechGroup from "./ui/TechGroup";

const dbItems = [
  { icon: <GrMysql className="text-[#00758F] text-5xl" />, label: "MySQL" },
  {
    icon: <BiLogoMongodb className="text-[#47A248] text-5xl" />,
    label: "MongoDB",
  },
  { icon: <SiMariadb className="text-[#003545] text-5xl" />, label: "MariaDB" },
];

export default function TechDBGroup() {
  return <TechGroup title="Database" items={dbItems} />;
}
