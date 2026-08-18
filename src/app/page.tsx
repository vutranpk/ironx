import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ClassesSection from "@/components/ClassesSection";
import CoachesSection from "@/components/CoachesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <AboutSection />
      <ClassesSection />
      <CoachesSection />
      <CTASection />
      <Footer />
    </main>
  );
}
