import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/contexts/auth-context";
import { ThemeSelectorPopup } from "@/components/theme-selector-popup";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CentroTech Nexus | Servicios Tecnológicos Profesionales",
  description: "Plataforma empresarial para gestión de servicios tecnológicos, infraestructura de red, automatización con IA y relaciones con clientes en Puerto Rico.",
  keywords: ["servicios tecnológicos", "soporte técnico", "redes empresariales", "automatización IA", "Puerto Rico", "CentroTech"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <ThemeSelectorPopup />
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

