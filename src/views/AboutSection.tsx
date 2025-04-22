import Image from "next/image";
import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="h-screen">
      <div className="flex flex-col md:flex-row h-full">
        {/* ฝั่งซ้าย - ข้อความ พร้อมพื้นหลัง amber */}
        <div className="bg-gray-300 md:w-1/2 flex justify-center items-center p-6 relative">
          <div className="w-full flex justify-center items-center">
            <Image
              src="/profile1.jpg"
              alt="Placeholder Image"
              width={500}
              height={500}
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
        <div className="bg-amber-500 w-full md:w-1/2 flex flex-col justify-center  px-6 py-12">
          <h2 className="text-5xl font-bold text-black mb-4">About Me</h2>
          <p className="text-3xl text-white">
            I graduated from King Mongkut&apos;s University of Technology North
            Bangkok. Still have little work experience but love to learn new
            things so that the organization can grow.
          </p>
        </div>
      </div>
    </section>
  );
}
