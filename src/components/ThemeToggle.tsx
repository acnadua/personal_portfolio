import { Moon, Sun } from "lucide-react";
import { cn } from "../lib/utils";

type ThemeProps = {
  toggleTheme: () => void;
  isDarkMode: boolean;
};

export const ThemeToggle = ({ toggleTheme, isDarkMode }: ThemeProps) => {
  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-4 right-5 z-50 p-2 rounded-full",
        "transition-colors duration-300 focus:outline-hidden"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
