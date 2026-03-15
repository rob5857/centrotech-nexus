"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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
  Menu,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Clientes", href: "/dashboard/clients", icon: Users },
  { name: "Visitas", href: "/dashboard/visits", icon: Calendar },
  { name: "Equipos", href: "/dashboard/equipment", icon: HardDrive },
  { name: "Red", href: "/dashboard/network", icon: Network },
  { name: "Propuestas", href: "/dashboard/proposals", icon: FileText },
  { name: "IA", href: "/dashboard/ai-opportunities", icon: Sparkles },
  { name: "Tickets", href: "/dashboard/tickets", icon: Ticket },
  { name: "Mantenimiento", href: "/dashboard/maintenance", icon: Wrench },
  { name: "Reportes", href: "/dashboard/reports", icon: BarChart3 },
  { name: "Config", href: "/dashboard/settings", icon: Settings },
];

export function MobileSidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] p-0">
        <div className="flex h-full flex-col">
          {/* Logo */}
          <SheetHeader className="border-b p-6">
            <SheetTitle>
              <Link
                href="/"
                className="flex items-center gap-2"
                onClick={() => setOpen(false)}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-info">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-sm font-bold leading-none">CentroTech</span>
                  <span className="text-xs text-primary leading-none mt-0.5 font-semibold">
                    Nexus
                  </span>
                </div>
              </Link>
            </SheetTitle>
          </SheetHeader>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 overflow-y-auto p-4">
            {navigation.map((item) => {
              const isActive =
                pathname === item.href || pathname?.startsWith(item.href + "/");
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-all",
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="border-t p-4">
            <div className="rounded-lg bg-muted p-3">
              <p className="text-xs font-medium">Sistema Profesional</p>
              <p className="text-xs text-muted-foreground mt-1">Versión 1.0.0</p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

