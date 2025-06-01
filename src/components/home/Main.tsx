import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";
import { HeroSection } from "./HeroSection";
import { ProjectsSection } from "./ProjectsSection";

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
