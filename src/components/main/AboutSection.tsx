import { Briefcase, Code, User } from "lucide-react";
import { cn } from "../../lib/utils";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Aspiring Software/Data Engineer
            </h3>

            <p className="text-muted-foreground">
              Creates accessible, reliable, and user-centered mobile
              applications using Flutter with 2 years of experience.
            </p>

            <p className="text-muted-foreground">
              Builds solutions and ideas based on analyzed data, constantly
              learning and staying up-to-date with technological trends.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cta">
                Get In Touch
              </a>

              <a
                href="/documents/Nadua_Resume.pdf"
                download="Nadua_Resume.pdf"
                className={cn(
                  "px-6 py-2 rounded-full border-primary text-primary font-semibold",
                  "hover:bg-primary/10 transition-colors duration-300"
                )}
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid-cols-1 gap-6">
            <div className="gradient-border my-3 p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Mobile Development</h4>
                  <p className="text-muted-foreground">
                    Creating practical user-centered mobile applications with
                    Flutter, utilizing modern technologies to deliver seamless
                    solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border my-3 p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Data-driven Solutions
                  </h4>
                  <p className="text-muted-foreground">
                    Delivering seamless and scalable data solutions that empower
                    clients to make data-driven decisions with confidence and
                    speed.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border my-3 p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Collaborator and Initiator
                  </h4>
                  <p className="text-muted-foreground">
                    Proactive team player who excels at initiating projects,
                    fostering collaborations, and driving innovative solutions
                    to completion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
