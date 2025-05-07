"use client";
import AboutSection from "../views/AboutSection";
import ContactSection from "../views/ContactSection";
import HomeSection from "../views/HomeSection";
import Navbar from "../components/Navbar";
import SkillSection from "../views/SkillSection";
import WorkSection from "../views/WorkSection";
import FooterSection from "@/views/FooterSection";
import JobPositionSection from "@/views/JobPositionSection";
import ImageSection from "@/views/ImageSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <JobPositionSection />
      <WorkSection />
      <SkillSection />
      <ImageSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
