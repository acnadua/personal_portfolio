export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  url: string | undefined;
  githubUrl: string | undefined;
}