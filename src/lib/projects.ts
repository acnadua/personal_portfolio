import type { Project } from "../types/Project";

const projects: Project[] = [
  {
    id: 1,
    title: "Cliquest: A Travel Planning Mobile Application",
    description:
      "Full-stack mobile application for helping solo travelers and small groups find each other, form cliques, and travel with similar people.",
    image: "/projects/cliquest.png",
    tags: ["Flutter", "Dart", "Node.js", "TypeScript", "Express", "PostgreSQL"],
    url: "#cliquest",
    githubUrl: "https://github.com/acnadua/cliquest_travel_app",
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description:
      "A web application for showcasing my personal projects and to share a little bit about myself.",
    image: "/projects/portfolio.gif",
    tags: [
      "React",
      "Tailwind CSS",
      "TypeScript",
    ],
    url: "/",
    githubUrl: "https://github.com/acnadua/personal_portfolio",
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
    url: "/documents/Nadua_SP.pdf",
    downloadName: "Nadua_SP.pdf"
  },
  {
    id: 4,
    title: "Ambience Logger",
    description:
      "A mobile application for recording sounds and location, and tracking the user's motion intensity given their environment.",
    image: "/projects/ambience.png",
    tags: ["Flutter", "Dart", "Firebase"],
    url: "#ambience-logger",
    githubUrl: "https://github.com/acnadua/ambience_logger",
  },
  {
    id: 5,
    title: "Mood Tracker",
    description:
      "A mobile application for tracking a user's mood, share it with their friends, and be updated with their friends' moods.",
    image: "/projects/mood.png",
    tags: ["Flutter", "Dart", "Firebase"],
    url: "#mood-tracker",
    githubUrl: "https://github.com/acnadua/mood_tracker",
  },
  {
    id: 6,
    title: "Expense Tracker",
    description:
      "A mobile application for tracking a user's expenses, and be more mindful of their spending.",
    image: "/projects/expense.png",
    tags: ["Flutter", "Dart", "Firebase"],
    url: "#expense-tracker",
    githubUrl: "https://github.com/acnadua/expense_tracker",
  },

  {
    id: 7,
    title: "LOLCode Interpreter",
    description:
      "Windows desktop application for a LOLCode Programming Language Interpreter, incorporating advanced lexical and syntax analyzers for reliable command parsing.",
    image: "/projects/lolcode.png",
    tags: ["C#", ".NET"],
    url: "#lolcode",
    githubUrl: "https://github.com/acnadua/lolcode_interpreter",
  },
];

export default projects;