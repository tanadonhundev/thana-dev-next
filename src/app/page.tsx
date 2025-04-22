"use client";
import AboutSection from "../views/AboutSection";
import ContactSection from "../views/ContactSection";
import HomeSection from "../views/HomeSection";
import Navbar from "../components/Navbar";
import SkillSection from "../views/SkillSection";
import WorkSection from "../views/WorkSection";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let frame: number;

    const onMouseMove = (e: MouseEvent) => {
      // batch DOM writes into rAF
      frame = requestAnimationFrame(() => {
        if (!cursorRef.current) return;
        cursorRef.current.style.setProperty("--cx", `${e.clientX}px`);
        cursorRef.current.style.setProperty("--cy", `${e.clientY}px`);
        setActive(true);
      });
    };

    const onMouseLeave = () => {
      cancelAnimationFrame(frame);
      setActive(false);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div>
      <div ref={cursorRef} className={clsx("custom-cursor", { active })} />
      <Navbar />
      <HomeSection />
      <AboutSection />
      <WorkSection />
      <SkillSection />
      <ContactSection />
      <div>
        {/* Call to Action Section */}
       <section className="py-16 bg-amber-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>&copy; 2025 Your Company. All rights reserved.</p>
          </div>
        </section> 
      </div>
    </div>
  );
}
