import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleScroll = () => {
    // ตรวจสอบว่า Scroll สูงเกิน 50px หรือไม่
    setIsScrolled(window.scrollY > 50);
    // ตรวจสอบตำแหน่งของ Scroll และเปลี่ยนแปลง active link
    const sections = ["home", "about", "experience", "skills", "contact"];
    let activeSection = "";
    // ถ้า scroll น้อยกว่า 50px ให้ตั้งค่า active link เป็น "a" (Home)
    if (window.scrollY < 50) {
      activeSection = "home";
    } else {
      // ตรวจสอบตำแหน่งของส่วนต่างๆ เมื่อ scroll มากกว่า 50px
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (
          element &&
          window.scrollY >= element.offsetTop - 50 &&
          window.scrollY < element.offsetTop + element.offsetHeight
        ) {
          activeSection = section;
        }
      });
    }
    setActiveLink(activeSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-blue-500/90 shadow-lg" // เปลี่ยนเป็นพื้นหลังสีเข้มพร้อมความโปร่งใส
          : "bg-blue-500/0 "
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0">
            <a href="#" className="text-lg font-bold">
              ThaNaDev
            </a>
          </div>

          {/* Hamburger Menu (มือถือ) */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md focus:outline-hidden focus:ring-2 focus:ring-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* เมนูหลัก */}
          <div className="hidden md:flex space-x-4">
            <a
              href="#home"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                activeLink === "home" ? "bg-blue-700" : "hover:bg-blue-700"
              }`}
            >
              Home
            </a>
            <a
              href="#about"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                activeLink === "about" ? "bg-blue-700" : "hover:bg-blue-700"
              }`}
            >
              About
            </a>
            <a
              href="#experience"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                activeLink === "experience"
                  ? "bg-blue-700"
                  : "hover:bg-blue-700"
              }`}
            >
              Work
            </a>
            <a
              href="#skills"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                activeLink === "skills" ? "bg-blue-700" : "hover:bg-blue-700"
              }`}
            >
              Skills
            </a>
            <a
              href="#contact"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                activeLink === "contact" ? "bg-blue-700" : "hover:bg-blue-700"
              }`}
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* เมนู Dropdown สำหรับมือถือ */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-500">
          <a href="#" className="block px-4 py-2 text-sm hover:bg-blue-700">
            Home
          </a>
          <a href="#" className="block px-4 py-2 text-sm hover:bg-blue-700">
            About
          </a>
          <a href="#" className="block px-4 py-2 text-sm hover:bg-blue-700">
            Services
          </a>
          <a href="#" className="block px-4 py-2 text-sm hover:bg-blue-700">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
