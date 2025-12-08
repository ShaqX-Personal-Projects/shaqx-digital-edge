import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Skift til mørk tilstand" : "Skift til lys tilstand"}
      className="h-9 w-9"
    >
      {theme === "light" ? (
        <Moon size={18} className="transition-transform" />
      ) : (
        <Sun size={18} className="transition-transform" />
      )}
    </Button>
  );
}
