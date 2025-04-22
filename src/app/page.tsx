"use client";
import AboutSection from "../views/AboutSection";
import ContactSection from "../views/ContactSection";
import HomeSection from "../views/HomeSection";
import Navbar from "../components/Navbar";
import SkillSection from "../views/SkillSection";
import WorkSection from "../views/WorkSection";
import { useEffect, useRef } from "react";

export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e: MouseEvent) => {
      if (!cursor) return;

      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;

      // ให้เคอร์เซอร์โปร่งแสงเมื่อไม่ได้ hover
      cursor.style.opacity = "0.5";

      const target = e.target as HTMLElement;
      console.log(target.tagName);

      if (target.tagName !== "DIV") {
        cursor.style.transform = `translate(-50%, -50%) scale(3)`;
      } else {
        cursor.style.backgroundColor = "#1d4ed8"; // กลับเป็นน้ำเงิน
        cursor.style.opacity = "4"; // ให้ชัดเจนเมื่อ hover
        cursor.style.transform = `translate(-50%, -50%) scale(1)`;
      }
    };

    document.addEventListener("mousemove", moveCursor);
    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);
  return (
    <div>
      <div ref={cursorRef} className="custom-cursor" />
      <Navbar />
      <HomeSection />
      <AboutSection />
      <WorkSection />
      <SkillSection />
      <ContactSection />
      <div>
        {/* Call to Action Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>&copy; 2025 Your Company. All rights reserved.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
