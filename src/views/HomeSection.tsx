import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa"; // Import icons

export default function HomeSection() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

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

  return (
    <div>
      <section id="home" className="h-screen">
        <div className="flex flex-col md:flex-row h-full">
          {/* ฝั่งซ้าย - ข้อความ พร้อมพื้นหลัง amber */}
          <div className="bg-amber-600 w-full md:w-1/2 flex flex-col items-center justify-center text-center px-6 py-12">
            <p className="text-4xl sm:text-6xl font-bold transition duration-300 hover:scale-105 text-white">
              Hello, I&apos;m
            </p>
            <p className="text-4xl sm:text-6xl font-bold transition duration-300 hover:scale-105 text-white">
              Tanadon Don
            </p>
            <div className="mt-4">
              <p className="text-lg sm:text-xl text-white">
                Full Stack Developer • Software Developer
              </p>
            </div>
            <div className="mt-4">
              <p className="text-lg sm:text-xl text-white text-left max-w-md">
                This website presents the work experience and works of Mr.
                Tanadon Hunsadee. You can see the details on this website.
              </p>
            </div>
            <div className="mt-8 animate-bounce">
              <a
                href="#contact"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-200"
              >
                Contact
              </a>
            </div>
          </div>

          {/* ฝั่งขวา - รูปภาพ พร้อมพื้นหลังเทา */}
          <div className="bg-gray-100 w-full md:w-1/2 not-first:flex items-center justify-center p-6 relative">
            <div
              className="w-full h-screen flex items-center justify-center bg-gray-100 "
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
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-6">
              <a
                href="https://www.facebook.com/tanadon.hunsadee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <FaFacebook size={30} />
              </a>
              <a
                href="https://github.com/tanadonhundev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-600"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://www.instagram.com/thana_hun"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-800"
              >
                <FaInstagram size={30} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
