import React, { useEffect, useState, useRef } from "react";
import SkillCard from "@/components/SkillCard";
import { motion } from "framer-motion";

export default function SkillSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div>
      <section
        id="skills"
        ref={sectionRef}
        className={`py-16 transition-opacity duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <h2 className="font-roboto text-3xl font-bold text-center mb-8 text-yellow-600">
            Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <SkillCard
                title="Frontend Development"
                skills={[
                  "React.js",
                  "Next.js",
                  "HTML/CSS",
                  "JavaScript",
                  "TyprScript",
                  "Tailwind CSS",
                  "Material-UI",
                  "Bootstrap",
                ]}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <SkillCard
                title="Backend Development"
                skills={[
                  "Node.js",
                  "Nest.js",
                  "Express.js",
                  "RESTful APIs",
                  "Socket.IO",
                  "TypeORM",
                  "Sequelize",
                ]}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <SkillCard title="Database" skills={["MySql", "MongoDB"]} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <SkillCard
                title="Tools & Technologies"
                skills={["Git/GitHub", "Postman", "HeidiSQL", "PM2"]}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
