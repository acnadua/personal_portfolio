import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Background } from "../components/main/Background";
import { ThemeToggle } from "../components/ThemeToggle";
import { Main } from "../components/Main";
import { Projects } from "../components/Projects";

export const Home = ({ isMain }: { isMain: boolean }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const overlay = document.getElementById("toggle-mode")!;
    overlay.classList.add("animate-fade");

    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }

    setTimeout(() => {
      overlay.classList.remove("animate-fade");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle toggleTheme={toggleTheme} isDarkMode={isDarkMode} />

      <Background isDarkMode={isDarkMode} />

      <Navbar />

      <main id="toggle-mode">
        {isMain ? <Main isDarkMode={isDarkMode} /> : <Projects />}
      </main>
    </div>
  );
};
