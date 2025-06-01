import { AboutSection } from "./main/AboutSection";
import { ContactSection } from "./main/ContactSection";
import { HeroSection } from "./main/HeroSection";
import { ProjectsSection } from "./main/ProjectsSection";

export const Main = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <>
      <HeroSection isDarkMode={isDarkMode} />

      <AboutSection />

      <ProjectsSection />

      <ContactSection />
    </>
  );
};
