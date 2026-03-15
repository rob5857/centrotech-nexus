"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  Wrench,
  FileText,
  Ticket,
  Network,
  Sparkles,
  Settings,
  BarChart3,
  Calendar,
  HardDrive,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Clientes", href: "/dashboard/clients", icon: Users },
  { name: "Visitas Técnicas", href: "/dashboard/visits", icon: Calendar },
  { name: "Equipos", href: "/dashboard/equipment", icon: HardDrive },
  { name: "Topología de Red", href: "/dashboard/network", icon: Network },
  { name: "Propuestas", href: "/dashboard/proposals", icon: FileText },
  { name: "Oportunidades IA", href: "/dashboard/ai-opportunities", icon: Sparkles },
  { name: "Tickets", href: "/dashboard/tickets", icon: Ticket },
  { name: "Mantenimiento", href: "/dashboard/maintenance", icon: Wrench },
  { name: "Reportes", href: "/dashboard/reports", icon: BarChart3 },
  { name: "Configuración", href: "/dashboard/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-64 flex-col border-r bg-card">
      {/* Logo */}
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-info">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold leading-none">CentroTech</span>
            <span className="text-xs text-primary leading-none mt-0.5 font-semibold">Nexus</span>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 overflow-y-auto p-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:bg-accent",
                isActive
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t p-4">
        <div className="rounded-lg bg-muted p-3">
          <p className="text-xs font-medium">Sistema Profesional</p>
          <p className="text-xs text-muted-foreground mt-1">
            Versión 1.0.0
          </p>
        </div>
      </div>
    </div>
  );
}

