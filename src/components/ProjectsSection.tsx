import { ArrowRight, ExternalLink, Github } from "lucide-react";
import type { Project } from "../types/Project";

const projects: Project[] = [
  {
    id: 1,
    title: "Cliquest: A Travel Planning Mobile Application",
    description:
      "Full-stack mobile application for helping solo travelers and small groups find each other, form cliques, and travel with similar people.",
    image: "/projects/cliquest.png",
    tags: ["Flutter", "Dart", "Node.js", "TypeScript", "Express", "PostgreSQL"],
    url: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description:
      "A web application for showcasing my personal projects and to share a little bit about myself.",
    image: "/projects/portfolio.png",
    tags: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "TypeScript",
      "Express",
      "MongoDB",
    ],
    url: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Sentiment Analysis of Tweets",
    description:
      "A system for collecting, preprocessing, analyzing, and categorizing Philippine election tweets using deep learning models such as CNN and Bi-LSTM, with an integrated attention mechanism.",
    image: "/projects/sentiment.png",
    tags: [
      "Artificial Intelligence",
      "Tensorflow",
      "Python",
      "Natural Language Processing",
    ],
    url: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Ambience Logger",
    description:
      "A mobile application for recording sounds and location, and tracking the user's motion intensity given their environment.",
    image: "/projects/ambience.png",
    tags: ["Flutter", "Dart", "Firebase"],
    url: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Mood Tracker",
    description:
      "A mobile application for tracking a user's mood, share it with their friends, and be updated with their friends' moods.",
    image: "/projects/mood.png",
    tags: ["Flutter", "Dart", "Firebase"],
    url: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Expense Tracker",
    description:
      "A mobile application for tracking a user's expenses, and be more mindful of their spending.",
    image: "/projects/expense.png",
    tags: ["Flutter", "Dart", "Firebase"],
    url: "#",
    githubUrl: "#",
  },

  {
    id: 7,
    title: "LOLCode Interpreter",
    description:
      "Windows desktop application for a LOLCode Programming Language Interpreter, incorporating advanced lexical and syntax analyzers for reliable command parsing.",
    image: "/projects/lolcode.png",
    tags: ["C#", ".NET Framework"],
    url: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my previous and present projects. Each project was
          carefully crafted with attention to detail, performance, and user
          experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.url}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/acnadua"
            target="_blank"
            className="cta w-fit flex items-center mx-auto gap-2"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
