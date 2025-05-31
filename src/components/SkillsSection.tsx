import { useState } from "react";
import type { Skill } from "../types/Skill";
import { cn } from "../lib/utils";

const skills: Skill[] = [
  // Languages
  { name: "Dart", level: 90, category: "Languages" },
  { name: "Python", level: 80, category: "Languages" },
  { name: "JavaScript/Typescript", level: 70, category: "Languages" },
  { name: "HTML & CSS", level: 70, category: "Languages" },
  { name: "R", level: 60, category: "Languages" },
  { name: "C", level: 60, category: "Languages" },
  { name: "SQL", level: 70, category: "Languages" },

  // Software Development
  { name: "Flutter", level: 90, category: "Software Development" },
  { name: "Git/GitHub", level: 80, category: "Software Development" },
  { name: "Firebase", level: 80, category: "Software Development" },
  { name: "PostgreSQL", level: 70, category: "Software Development" },
  { name: "RESTful API", level: 80, category: "Software Development" },
  { name: "React", level: 60, category: "Software Development" },
  { name: "Node.js", level: 60, category: "Software Development" },
  { name: "MongoDB", level: 70, category: "Software Development" },
  { name: "Tailwind CSS", level: 50, category: "Software Development" },

  // AI Frameworks and libraries
  { name: "pandas", level: 60, category: "AI Frameworks" },
  { name: "numpy", level: 50, category: "AI Frameworks" },
  { name: "scikit-learn", level: 50, category: "AI Frameworks" },
  { name: "Tensorflow/Keras", level: 60, category: "AI Frameworks" },
];

const categories = [
  "All",
  "Languages",
  "Software Development",
  "AI Frameworks",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level} %
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
