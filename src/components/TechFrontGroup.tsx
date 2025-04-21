"use client";
import { FaReact } from "react-icons/fa";
import TechIcon from "./ui/TechIcon";
import { RiNextjsFill } from "react-icons/ri";
import { SiJavascript, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const TechFrontGroup = () => {
  const { ref, isInView } = useInView();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center p-4"
    >
      <p className="text-xl font-semibold mb-4">Front-end</p>
      <div className="flex justify-center gap-6">
        <TechIcon
          icon={<FaReact className="text-blue-500 text-5xl" />}
          label="ReactJS"
        />
        <TechIcon icon={<RiNextjsFill className="text-5xl" />} label="NextJS" />
        <TechIcon
          icon={<SiJavascript className="text-yellow-300 text-5xl" />}
          label="JavaScript"
        />
        <TechIcon
          icon={<SiTypescript className="text-blue-500 text-5xl" />}
          label="TypeScript"
        />
      </div>
    </motion.div>
  );
};

export default TechFrontGroup;
