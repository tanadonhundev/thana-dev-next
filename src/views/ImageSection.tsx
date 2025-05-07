import React from "react";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";
import PhotoCard from "@/components/PhotoCard";

export default function ImageSection() {
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
              IM<span className="text-amber-600">AG</span>E
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <PhotoCard src="/images/image1.jpg" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <PhotoCard src="/images/image2.jpg" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <PhotoCard src="/images/image3.jpg" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <PhotoCard src="/images/image4.jpg" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <PhotoCard src="/images/image5.jpg" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <PhotoCard src="/images/image6.jpg" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
