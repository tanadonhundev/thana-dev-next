"use client";
import React, { JSX } from "react";
import { motion } from "framer-motion";
import TechIcon from "./TechIcon";
import { useInView } from "@/hooks/useInView";

export type TechItem = {
  icon: JSX.Element;
  label: string;
};

type TechGroupProps = {
  title: string;
  items: TechItem[];
};

function TechGroup({ title, items }: TechGroupProps) {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center p-4 bg-gray-200 rounded-lg shadow-2xl"
    >
      <p className="text-xl font-semibold mb-4">{title}</p>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
        {items.map((tech, idx) => (
          <TechIcon key={idx} icon={tech.icon} label={tech.label} />
        ))}
      </div>
    </motion.div>
  );
}

export default TechGroup;
