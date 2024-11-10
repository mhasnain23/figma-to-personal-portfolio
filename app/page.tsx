import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillSection from "@/components/SkillSection";
import WorkSection from "@/components/WorkSection";
import ReviewSection from "@/components/Review";
import Contact from "@/components/ContactSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <WorkSection />
      <ReviewSection />
      <Contact />
    </div>
  );
}
