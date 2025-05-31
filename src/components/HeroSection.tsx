import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export const HeroSection = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    if (isDarkMode) setProfileImage("/images/profileDark.jpg");
    else setProfileImage("/images/profileLight.jpg");
  }, [isDarkMode]);
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="flex flex-row space-x-3">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in"> Hi, I'm </span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                Abigail
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                Nadua
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
              I create seamless mobile applications and scalable data systems
              that transform ideas into impactful, user-focused products
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
            </div>
          </div>

          <div className="pl-10">
            <div>
              <div>
                <img src={profileImage} className="max-h-100 max-w-100 " />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-4 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
