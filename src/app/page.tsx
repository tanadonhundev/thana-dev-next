"use client";
import AboutSection from "../views/AboutSection";
import ContactSection from "../views/ContactSection";
import HomeSection from "../views/HomeSection";
import Navbar from "../components/Navbar";
import SkillSection from "../views/SkillSection";
import WorkSection from "../views/WorkSection";

export default function Home() {
  return (
    <div>
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
