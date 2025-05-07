import ExperienceCard from "../components/ExperienceCard";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { useInView } from "@/hooks/useInView";

export default function WorkSection() {
  const { ref, isInView } = useInView();
  return (
    <div>
      <section
        id="experience"
        ref={ref}
        className={`py-16 bg-gray-100 transition-opacity duration-1000 `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <p className="text-heading">
              Work <span className="text-amber-500">and</span> Experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            {/* Card แรก: เลื่อนจากซ้าย + มีเอฟเฟกต์ hover */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
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
              animate={isInView ? { opacity: 1, x: 0 } : {}}
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
            {/* Additional cards with images */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <ProjectCard
                title="Find Parttime Job Platform"
                period="2023 Nov - 2024 Oct"
                description={[
                  "Frontend: React.js + MUI",
                  "Backend: Node.js(express.js)",
                  "Database: MongoDB",
                ]}
                imgSrc="/pro1.jpg"
                altText="Project Image"
                onButtonClick={() =>
                  alert("Sorry, you can't view the details yet.")
                } // ฟังก์ชันที่จะถูกเรียกเมื่อคลิกปุ่ม
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <ProjectCard
                title="Profile Tanadon"
                period="2024 Dec - persent"
                description={[
                  "Frontend: Next.js + Tailwind CSS",
                  "Backend: -",
                  "Database: -",
                ]}
                imgSrc="/pro2.jpg"
                altText="Project Image"
                onButtonClick={() =>
                  alert("Sorry, you can't view the details yet.")
                } // ฟังก์ชันที่จะถูกเรียกเมื่อคลิกปุ่ม
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
