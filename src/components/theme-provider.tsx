"use client";

import * as React from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    // Cargar tema guardado al iniciar
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  return <>{children}</>;
}

