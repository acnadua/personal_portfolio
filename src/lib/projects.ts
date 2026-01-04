import type { Project } from "../types/Project";

const projects: Project[] = [
  // {
  //   title: "End-to-End Reddit Data Pipeline with LLM Analysis",
  //   description:
  //     "Sentiment Analysis Project Redesigned: A data pipeline for collecting data from Reddit via web automation, processing data with PySpark, storing raw data in a PostgreSQL database, and then using the data for sentiment analysis.",
  //   image: "/projects/reddit.png",
  //   tags: ["Python", "PySpark", "PostgreSQL", "LLM", "Web Scraping", "Playwright"],
  //   url: "#reddit",
  //   githubUrl: "https://github.com/acnadua/Reddit-Data-Sentiment-Analysis",
  // },
  {
    title: "NASA Near-Earth Object (NEO) ETL Pipeline",
    description:
      "An ETL pipeline for collecting data from the NASA API, processing data with PySpark, storing raw data in AWS S3 and the processed data in PostgreSQL.",
    image: "/projects/neo.png",
    tags: ["Python", "PySpark", "PostgreSQL", "AWS S3", "NASA API"],
    url: "#neo",
    githubUrl: "https://github.com/acnadua/NASA-NeoWs-Pipeline",
  },
  {
    title: "Kalibrr Job Listings Web Scraper",
    description:
      "A web scraper for collecting job listings from Kalibrr, a public job board, using Python and Playwright, storing collected data in MongoDB and saving them into CSV files.",
    image: "/projects/kalibrr.png",
    tags: ["Python", "Web Scraping", "Playwright", "MongoDB", "pandas"],
    url: "#kalibrr",
    githubUrl: "https://github.com/acnadua/kalibrr-job-listings-scraper",
  },
  {
    title: "Cliquest: A Travel Planning Mobile Application",
    description:
      "Full-stack mobile application for helping solo travelers and small groups find each other, form cliques, and travel with similar people.",
    image: "/projects/cliquest.png",
    tags: ["Flutter", "Dart", "Node.js", "TypeScript", "Express", "PostgreSQL"],
    url: "#cliquest",
    githubUrl: "https://github.com/acnadua/cliquest_travel_app",
  },
  {
    title: "Personal Portfolio",
    description:
      "A web application for showcasing my personal projects and to share a little bit about myself.",
    image: "/projects/portfolio.gif",
    tags: ["React", "Tailwind CSS", "TypeScript"],
    url: "/",
    githubUrl: "https://github.com/acnadua/personal_portfolio",
  },
  {
    title: "Sentiment Analysis of Tweets",
    description:
      "A system for collecting, preprocessing, analyzing, and categorizing Philippine election tweets using deep learning models such as CNN and Bi-LSTM, with an integrated attention mechanism.",
    image: "/projects/sp.png",
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