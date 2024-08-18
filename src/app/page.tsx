import Image from "next/image";
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import ProjectsSection from "./components/ProjectsSection"
import EmailSection from "./components/EmailSection"
import AchievementsSection from "./components/AchievementsSection"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col 
    before:animated-background bg-gradient-to-r 
    from-indigo-950 via-[#170132] to-[#170132]">
       <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <EmailSection />
          <Footer />
      </div>
    </main>
  );
}
