"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Sparkles } from "lucide-react";

export function ThemeSelectorPopup() {
  const [open, setOpen] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    // Check if user has already selected a theme
    const hasSelectedTheme = localStorage.getItem("theme-selected");
    
    if (!hasSelectedTheme) {
      // Show popup after a short delay for better UX
      const timer = setTimeout(() => {
        setOpen(true);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleThemeSelect = (selectedTheme: "light" | "dark") => {
    setTheme(selectedTheme);
    localStorage.setItem("theme-selected", "true");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            <div className="rounded-full bg-gradient-to-br from-primary to-info p-3">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
          </div>
          <DialogTitle className="text-center text-2xl">
            ¡Bienvenido a CentroTech Nexus!
          </DialogTitle>
          <DialogDescription className="text-center">
            Elige tu tema preferido para comenzar
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-4 py-4">
          {/* Light Theme */}
          <button
            onClick={() => handleThemeSelect("light")}
            className="group relative overflow-hidden rounded-lg border-2 border-muted hover:border-primary transition-all duration-300 p-6 flex flex-col items-center gap-4 hover:shadow-lg"
          >
            <div className="rounded-full bg-gradient-to-br from-orange-400 to-yellow-400 p-4 group-hover:scale-110 transition-transform">
              <Sun className="h-8 w-8 text-white" />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-1">Modo Claro</h3>
              <p className="text-xs text-muted-foreground">
                Ideal para el día
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          {/* Dark Theme */}
          <button
            onClick={() => handleThemeSelect("dark")}
            className="group relative overflow-hidden rounded-lg border-2 border-muted hover:border-primary transition-all duration-300 p-6 flex flex-col items-center gap-4 hover:shadow-lg"
          >
            <div className="rounded-full bg-gradient-to-br from-blue-600 to-purple-600 p-4 group-hover:scale-110 transition-transform">
              <Moon className="h-8 w-8 text-white" />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-1">Modo Oscuro</h3>
              <p className="text-xs text-muted-foreground">
                Ideal para la noche
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>

        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            Puedes cambiar el tema en cualquier momento desde el header
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

