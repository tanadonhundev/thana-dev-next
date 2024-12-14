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
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="mb-8">
              Join thousands of businesses that trust MyWebsite.
            </p>
            <a
              href="#"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-200"
            >
              Get Started
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
