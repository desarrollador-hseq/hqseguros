import { Moon, Sun } from "lucide-react";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { useThemeStore } from "@/app/store/useThemeStore";

export function BtnChangeTheme() {
  const { theme, toggleTheme } = useThemeStore();
  return (
    <div className="flex items-center space-x-2">
      <Sun className="h-4 w-4" />
      <Switch
        id="dark-mode"
        checked={theme === "dark"}
        onCheckedChange={toggleTheme}
      />
      <Moon className="h-4 w-4" />
      <Label htmlFor="dark-mode" className="sr-only">
        Cambiar tema
      </Label>
    </div>
  );
}
