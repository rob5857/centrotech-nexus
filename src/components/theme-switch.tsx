"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeSwitch() {
  const [mounted, setMounted] = React.useState(false);
  const [theme, setThemeState] = React.useState<string>("light");

  React.useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") || "light";
    setThemeState(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
    
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  if (!mounted) {
    return (
      <div className="flex h-10 w-20 items-center justify-center rounded-full bg-muted">
        <Sun className="h-4 w-4 text-muted-foreground" />
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="group relative flex h-10 w-20 items-center rounded-full bg-muted p-1 transition-colors hover:bg-muted/80"
      aria-label="Cambiar tema"
    >
      {/* Track */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-warning/20 to-primary/20" />
      
      {/* Slider */}
      <div
        className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-background shadow-md transition-all duration-300 ${
          theme === "dark" ? "translate-x-10" : "translate-x-0"
        }`}
      >
        {theme === "dark" ? (
          <Moon className="h-4 w-4 text-primary" />
        ) : (
          <Sun className="h-4 w-4 text-warning" />
        )}
      </div>

      {/* Labels */}
      <div className="absolute inset-0 flex items-center justify-between px-2 text-xs font-medium">
        <span className={`transition-opacity ${theme === "light" ? "opacity-0" : "opacity-50"}`}>
          ☀️
        </span>
        <span className={`transition-opacity ${theme === "dark" ? "opacity-0" : "opacity-50"}`}>
          🌙
        </span>
      </div>
    </button>
  );
}

