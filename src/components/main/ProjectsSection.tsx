import { ArrowRight, ExternalLink, Github } from "lucide-react";
import projects from "../../lib/projects";
import { cn } from "../../lib/utils";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my previous and present projects. Each project was
          carefully crafted with attention to detail and performance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 sm:h-64 overflow-hidden">
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

                <div className="flex space-x-3 items-center justify-center">
                  <h3 className="text-xl font-semibold mb-3">
                    {project.title}
                  </h3>

                  <div className="flex space-x-3 justify-center">
                    <a
                      href={`/projects${project.url}`}
                      download={project.downloadName}
                      className={cn(
                        "text-foreground/80 hover:text-primary transition-colors duration-300",
                        project.url ? "" : "hidden"
                      )}
                    >
                      <ExternalLink size={15} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className={cn(
                        "text-foreground/80 hover:text-primary transition-colors duration-300",
                        project.githubUrl ? "" : "hidden"
                      )}
                    >
                      <Github size={15} />
                    </a>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
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
