import { useEffect, useState } from "react";
import type { Crystal } from "../types/Crystal";
import { cn } from "../lib/utils";

export const Background = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const [crystals, setCrystals] = useState<Crystal[]>([]);

  useEffect(() => {
    generateCrystals();

    const handleResize = () => {
      generateCrystals();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateCrystals = () => {
    const numberOfCrystals = Math.floor(
      (window.innerWidth * window.innerHeight) / 100000
    );

    const newCrystals: Crystal[] = [];

    for (let i = 0; i < numberOfCrystals; i++) {
      newCrystals.push({
        id: i,
        size: Math.random() * 300 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setCrystals(newCrystals);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="shimmer animate-shimmer"></div>
      {crystals.map((crystal) => (
        <div
          key={crystal.id}
          className={cn(
            "crystal animate-glow",
            isDarkMode ? "opacity-20" : "opacity-0"
          )}
          style={{
            width: `${crystal.size}px`,
            height: `${crystal.size}px`,
            left: `${crystal.x}%`,
            top: `${crystal.y}%`,
            animationDuration: `${crystal.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};
