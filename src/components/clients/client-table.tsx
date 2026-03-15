"use client";

import { useState } from "react";
import Link from "next/link";
import { Client } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { AddClientDialog } from "@/components/clients/add-client-dialog";
import { formatCurrency, formatDate } from "@/lib/utils";
import { MoreHorizontal, Search, Eye, Edit, Trash2 } from "lucide-react";

interface ClientTableProps {
  clients: Client[];
}

const getHealthScoreBadge = (score: Client["health_score"]) => {
  const variants = {
    excellent: { variant: "success" as const, label: "Excelente" },
    good: { variant: "info" as const, label: "Bueno" },
    fair: { variant: "warning" as const, label: "Regular" },
    poor: { variant: "warning" as const, label: "Pobre" },
    critical: { variant: "destructive" as const, label: "Crítico" },
  };

  const config = variants[score];
  return <Badge variant={config.variant}>{config.label}</Badge>;
};

const getPlanBadge = (plan: Client["plan_type"]) => {
  const variants = {
    basic: { variant: "outline" as const, label: "Básico" },
    business: { variant: "secondary" as const, label: "Empresarial" },
    premium_ai: { variant: "default" as const, label: "Premium IA" },
  };

  const config = variants[plan];
  return <Badge variant={config.variant}>{config.label}</Badge>;
};

export function ClientTable({ clients }: ClientTableProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredClients = clients.filter((client) =>
    client.business_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.contact_person.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Clientes</CardTitle>
          <AddClientDialog />
        </div>
        <div className="relative mt-4">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar clientes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Empresa
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Contacto
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Ubicación
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Plan
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Estado
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Valor Mensual
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Última Visita
                </th>
                <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredClients.map((client) => (
                <tr key={client.id} className="border-b hover:bg-muted/50 transition-colors">
                  <td className="py-3 px-4">
                    <div>
                      <p className="font-medium">{client.business_name}</p>
                      <p className="text-sm text-muted-foreground">{client.business_type}</p>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div>
                      <p className="text-sm">{client.contact_person}</p>
                      <p className="text-xs text-muted-foreground">{client.email}</p>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <p className="text-sm">{client.city}</p>
                    <p className="text-xs text-muted-foreground">{client.region}</p>
                  </td>
                  <td className="py-3 px-4">
                    {getPlanBadge(client.plan_type)}
                  </td>
                  <td className="py-3 px-4">
                    {getHealthScoreBadge(client.health_score)}
                  </td>
                  <td className="py-3 px-4">
                    <p className="font-medium">{formatCurrency(client.monthly_value)}</p>
                  </td>
                  <td className="py-3 px-4">
                    <p className="text-sm">
                      {client.last_visit_date ? formatDate(client.last_visit_date) : "N/A"}
                    </p>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                          <Link href={`/dashboard/clients/${client.id}`}>
                            <Eye className="h-4 w-4 mr-2" />
                            Ver Detalles
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" />
                          Editar
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Eliminar
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}

