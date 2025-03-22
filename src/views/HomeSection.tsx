import React from "react";

export default function HomeSection() {
  return (
    <div>
      <section id="home" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col md:flex-row items-center justify-between">
          {/* คอลัมน์ข้อความ */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center h-screen">
            <h1 className="text-4xl sm:text-6xl font-bold transition duration-300 hover:scale-105">
              Hello, I'am
            </h1>
            <h1 className="text-4xl sm:text-6xl font-bold transition duration-300 hover:scale-105">
              Tanadon Don
            </h1>
            <div className="overflow-hidden w-full mt-4">
              <p className="text-lg sm:text-xl p-2 ">
                Full Stack Developer • Software Developer
              </p>
            </div>
            <div className="overflow-hidden w-full mt-4">
              <p className="text-lg sm:text-xl p-2  text-left">
                This website presents the work experience and works of Mr.
                Tanadon Hunsadee,You can see the details on this website.
              </p>
            </div>
            <div className="mt-8 animate-bounce">
              <a
                href="#contact"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 animate-bounce"
              >
                Contact
              </a>
            </div>
          </div>

          {/* คอลัมน์รูปภาพ */}
          <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
            <img
              src="/1111.jpg"
              alt="Placeholder Image"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
