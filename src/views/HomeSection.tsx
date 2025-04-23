import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa"; // Import icons

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09, // ความเร็วในการพิมพ์
    },
  },
};

const child = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function HomeSection() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const roles = ["Full Stack Developer", "Back End Developer", "Front End Developer"];
  const [index, setIndex] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();

    const offsetX = ((clientX - rect.left) / rect.width - 0.5) * 60; // -15 to 15 deg
    const offsetY = ((clientY - rect.top) / rect.height - 0.5) * 60; // -15 to 15 deg

    setRotate({ x: -offsetY, y: offsetX }); // หมุนตามแกนตรงข้าม
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 }); // reset เมื่อออกจากกรอบ
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 4000); // เปลี่ยนข้อความทุก 4 วิ
    return () => clearInterval(interval);
  }, [roles.length]);

  const text = roles[index];

  return (
    <section id="home" className="md:h-screen lg:h-screen">
      <div className="flex flex-col md:flex-row h-full">
        {/* ฝั่งซ้าย - ข้อความ พร้อมพื้นหลัง amber */}
        <div className="bg-amber-600 w-full md:w-1/2 flex flex-col items-center justify-center text-center px-6 py-12">
          <div className="flex flex-col items-start md:items-center">
            <p className="text-4xl sm:text-6xl font-bold transition duration-300 hover:scale-105 text-amber-950">
              Hello,
            </p>
            <p className="text-4xl sm:text-6xl font-bold transition duration-300 hover:scale-105 text-amber-900">
              I&apos;am Tanadon Don
            </p>
            <div className="mt-4">
              <AnimatePresence mode="wait">
                <motion.span
                  key={text}
                  variants={container}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="inline-block text-4xl sm:text-3xl text-gray-100 text-left max-w-md"
                >
                  {text.split("").map((char, i) => (
                    <motion.span
                      key={i}
                      variants={child}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.span>
              </AnimatePresence>
            </div>
            <div className="mt-4">
              <p className="text-lg sm:text-xl text-gray-700 text-left max-w-md">
                This website presents the work experience and works of Mr.
                Tanadon Hunsadee. You can see the details on this website.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <a
              href="#contact"
              className="bg-gray-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-200"
            >
              Contact
            </a>
          </div>
        </div>

        {/* ฝั่งขวา - รูปภาพ พร้อมพื้นหลังเทา */}
        <div className="bg-gray-800 md:w-1/2 w-full flex flex-col justify-between items-center p-6">
          <div
            className="flex-grow flex items-center justify-center w-full"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              animate={{
                rotateX: rotate.x,
                rotateY: rotate.y,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              style={{ perspective: 1000 }}
            >
              <Image
                src="/profile.png"
                alt="Profile Image"
                width={500}
                height={500}
              />
            </motion.div>
          </div>
          {/* Social media links */}
          <div className="mt-6 flex space-x-6">
            <a
              href="https://www.facebook.com/tanadon.hunsadee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://github.com/tanadonhundev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.instagram.com/thana_hun"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-500"
            >
              <FaInstagram size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
