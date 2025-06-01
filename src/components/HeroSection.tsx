import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

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
      <div className="container max-w-4xl mx-auto text-center z-10 mt-15 sm:mt-0">
        <div className="lg:flex lg:flex-row">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-12 sm:leading-20">
              <span className="opacity-0 animate-fade-in"> Hi, I'm </span>
              <span
                className={cn(
                  "opacity-0 animate-fade-in-delay-1",
                  isDarkMode ? "text-glow" : "text-primary"
                )}
              >
                Abigail
              </span>
              <span
                className={cn(
                  "ml-2 opacity-0 animate-fade-in-delay-2",
                  isDarkMode ? "text-glow" : "text-primary"
                )}
              >
                Nadua
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
              I create seamless mobile applications and scalable data systems
              that transform ideas into impactful, user-focused products
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cta">
                View My Work
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center opacity-0 animate-fade-in-delay-4 mt-10 lg:mt-0">
            <img
              src={profileImage}
              className={cn(
                "max-h-70 max-w-70 lg:max-h-100 lg:max-w-100 lg:ml-20 ml-0 rounded-full",
                isDarkMode
                  ? "shadow-[0_0_40px_rgba(0,71,171,0.8)]"
                  : "shadow-[0_0_40px_rgba(255,105,180,0.8)]"
              )}
            />
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
