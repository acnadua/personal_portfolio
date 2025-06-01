import { cn } from "../../lib/utils";

const getImages = (): string[] => {
  const images = [];

  for (let i = 1; i <= 6; i++) {
    images.push(`/projects/cliquest/0${i}.png`);
  }

  return images;
};

export const CliquestSection = () => {
  return (
    <section
      id="cliquest"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10 mt-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          <span className="text-primary text-glow">Cliquest:</span> A Clique for
          Every Conquest
        </h2>
        <div
          className={cn(
            "lg:flex lg:flex-row lg:justify-center lg:items-center",
            "grid grid-cols-2 lg:space-y-0 gap-3",
            "opacity-0 animate-fade-in-delay-2"
          )}
        >
          {getImages().map((image) => (
            <div className="w-full h-full flex justify-center">
              <img
                src={image}
                className="rounded-lg text-center max-h-256 lg:max-w-50"
              />
            </div>
          ))}
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 mt-8">
          A travel planning application for solo travelers or small groups. It
          can be used to find similar people, share plans and itineraries to
          people you meet along the way, and recommend plans based on your
          interests and location! <br />
          <i className="font-"> (Note: Design is still subject to change)</i>
        </p>
      </div>
    </section>
  );
};
