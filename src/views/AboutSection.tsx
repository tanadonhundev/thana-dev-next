import Image from "next/image";
import React from "react";

export default function AboutSection() {
  return (
    <div>
      <section id="about" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col md:flex-row items-center justify-between">
            {/* คอลัมน์รูปภาพ */}
            <div className="mt-8 md:mt-0 md:w-10/12 flex justify-center">
              <Image
                src="/profile1.jpg"
                alt="Placeholder Image"
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
            {/* คอลัมน์ข้อความ */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center h-screen">
              <h2 className="text-3xl font-bold text-yellow-600 mb-4">
                About Me
              </h2>
              <p className="text-lg">
                I graduated from King Mongkut&apos;s University of Technology North
                Bangkok, Still have little work experience but like to learn new
                things so that the organization can develop.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
