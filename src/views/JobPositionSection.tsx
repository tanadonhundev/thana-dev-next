import React from "react";
import PositionCard from "@/components/PositionCard";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

import { VscLayers, VscServerProcess, VscVm } from "react-icons/vsc";

export default function JobPositionSection() {
  const { ref, isInView } = useInView();
  return (
    <div>
      <section
        ref={ref}
        className={"py-16 bg-gray-100 transition-opacity duration-1000"}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <p className="text-heading">
              Position<span className="text-amber-600"> of </span>Interested
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <PositionCard Icon={VscLayers} position="FullStack Developer" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <PositionCard Icon={VscVm} position="FrontEnd Developer" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <PositionCard
                Icon={VscServerProcess}
                position="BackEnd Developer"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
