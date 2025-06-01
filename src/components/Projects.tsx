import { AmbienceLoggerSection } from "./projects/AmbienceLoggerSection";
import { CliquestSection } from "./projects/CliquestSection";
import { ExpenseTrackerSection } from "./projects/ExpenseTrackerSection";
import { LolcodeSection } from "./projects/LolcodeSection";
import { MoodTrackerSection } from "./projects/MoodTrackerSection";

export const Projects = () => {
  return (
    <>
      <CliquestSection />

      <AmbienceLoggerSection />

      <MoodTrackerSection />

      <ExpenseTrackerSection />

      <LolcodeSection />
    </>
  );
};
