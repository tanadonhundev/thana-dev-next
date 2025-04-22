import { AnimatePresence, motion } from "framer-motion";
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100); // แสดงปุ่มเมื่อเลื่อนมากกว่า 100px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ฟังก์ชั่นสำหรับเลื่อนขึ้นไปที่ด้านบน
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // ทำให้การเลื่อนลื่น
    });
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-amber-700/90 shadow-lg" // เปลี่ยนเป็นพื้นหลังสีเข้มพร้อมความโปร่งใส
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
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            >
              {isMenuOpen ? (
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
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
              )}
            </button>
          </div>

          {/* เมนูหลัก */}
          <div className="hidden md:flex space-x-6">
            <a
              href="#home"
              className={`${
                activeLink === "home"
                  ? "text-white underline underline-offset-5 decoration-2 decoration-amber-600"
                  : "text-white hover:underline underline-offset-5 decoration-2 decoration-amber-600"
              }`}
            >
              Home
            </a>

            <a
              href="#about"
              className={`${
                activeLink === "about"
                  ? "text-white underline underline-offset-5 decoration-2 decoration-amber-600"
                  : "text-white hover:underline underline-offset-5 decoration-2 decoration-amber-600"
              }`}
            >
              About
            </a>
            <a
              href="#experience"
              className={` ${
                activeLink === "experience"
                  ? "text-white underline underline-offset-5 decoration-2 decoration-amber-600"
                  : "text-white hover:underline underline-offset-5 decoration-2 decoration-amber-600"
              }`}
            >
              Work
            </a>
            <a
              href="#skills"
              className={` ${
                activeLink === "skills"
                  ? "text-white underline underline-offset-5 decoration-2 decoration-amber-600"
                  : "text-white hover:underline underline-offset-5 decoration-2 decoration-amber-600"
              }`}
            >
              Skills
            </a>
            <a
              href="#contact"
              className={`  ${
                activeLink === "contact"
                  ? "text-white underline underline-offset-5 decoration-2 decoration-amber-600"
                  : "text-white hover:underline underline-offset-5 decoration-2 decoration-amber-600"
              }`}
            >
              Contact
            </a>
          </div>
        </div>
        {isScrolled && (
          <button
            onClick={scrollToTop}
            className="fixed  bottom-6 right-6 bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hidden md:block"
          >
            ↑
          </button>
        )}
      </div>

      {/* เมนู Dropdown สำหรับมือถือ */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <a
              href="#home"
              className="block px-4 py-2 hover:bg-amber-600 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-4 py-2 hover:bg-amber-600 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#experience"
              className="block px-4 py-2 hover:bg-amber-600 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Work
            </a>
            <a
              href="#skills"
              className="block px-4 py-2 hover:bg-amber-600 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 hover:bg-amber-600 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
