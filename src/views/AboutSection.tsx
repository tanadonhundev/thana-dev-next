import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

export default function AboutSection() {
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
    <section id="about">
      <div className="flex flex-col md:flex-row h-full">
        {/* ฝั่งซ้าย - ข้อความ พร้อมพื้นหลัง amber */}
        <div className="bg-gray-300 md:w-1/2 flex justify-center items-center p-6 relative shadow-2xl">
          <div
            className="w-full flex justify-center items-center"
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
                src="/profile1.jpg"
                alt="Placeholder Image"
                width={500}
                height={500}
                className="rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
        <div className="bg-amber-500 w-full md:w-1/2 flex flex-col justify-center  px-6 py-12 shadow-2xl">
          <h2 className="text-5xl font-bold text-amber-950 mb-4">About Me</h2>
          <p className="text-lg sm:text-xl text-gray-700 text-left max-w-md">
            I graduated from King Mongkut&apos;s University of Technology North
            Bangkok. Still have little work experience but love to learn new
            things so that the organization can grow.
          </p>
        </div>
      </div>
    </section>
  );
}
