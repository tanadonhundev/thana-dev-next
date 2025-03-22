import React, { useEffect, useState, useRef } from "react";
import ExperienceCard from "../components/ExperienceCard";
import { motion } from "framer-motion";

export default function WorkSection() {
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
        id="experience"
        ref={sectionRef}
        className={`py-16 bg-gray-100 transition-opacity duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-yellow-600">
            Work and Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card แรก: เลื่อนจากซ้าย + มีเอฟเฟกต์ hover */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <ExperienceCard
                title="Software Developer"
                company="Softel Communication (Thailand) Co., Ltd."
                period="2024 Mar - 2025 Feb"
                description={[
                  "Develop and maintain web applications with React.js, Next.js and tailwind.",
                  "Work with the Backend team to design APIs and test them through Postman.",
                  "Work with the team to resolve issues that arise.",
                  "Deploy the system to Server Test with PM2",
                ]}
              />
            </motion.div>

            {/* Card ที่สอง: เลื่อนจากขวา + มีเอฟเฟกต์ hover */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <ExperienceCard
                title="Cooperative training"
                company="Softel Communication (Thailand) Co., Ltd."
                period="2023 Nov - 2024 Feb"
                description={[
                  "Develop and maintain web applications with React.js + Material-UI.",
                  "Design API to connect to Backend using Express.js and MySQL.",
                  "Improved UI/UX and optimized web application performance.",
                  "Deploy the system to Server Test with PM2",
                ]}
              />
            </motion.div>
            <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
            <img
              src="/1111.jpg"
              alt="Placeholder Image"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
            <img
              src="/1111.jpg"
              alt="Placeholder Image"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
            <img
              src="/1111.jpg"
              alt="Placeholder Image"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
            <img
              src="/1111.jpg"
              alt="Placeholder Image"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}
