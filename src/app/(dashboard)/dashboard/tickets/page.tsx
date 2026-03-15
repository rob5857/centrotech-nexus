import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockTickets, mockClients } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";
import { Ticket as TicketIcon, Plus, AlertCircle, Clock, CheckCircle, XCircle } from "lucide-react";
import { StatCard } from "@/components/dashboard/stat-card";

export default function TicketsPage() {
  const totalTickets = mockTickets.length;
  const openTickets = mockTickets.filter(t => t.status === "open").length;
  const inProgressTickets = mockTickets.filter(t => t.status === "in_progress").length;
  const resolvedTickets = mockTickets.filter(t => t.status === "resolved" || t.status === "completed").length;

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: "warning" | "info" | "success" | "secondary", label: string, icon: any }> = {
      open: { variant: "warning", label: "Abierto", icon: AlertCircle },
      in_progress: { variant: "info", label: "En Progreso", icon: Clock },
      resolved: { variant: "success", label: "Resuelto", icon: CheckCircle },
      completed: { variant: "success", label: "Completado", icon: CheckCircle },
      closed: { variant: "secondary", label: "Cerrado", icon: XCircle },
    };
    const config = variants[status] || variants.open;
    const Icon = config.icon;
    return (
      <Badge variant={config.variant} className="gap-1">
        <Icon className="h-3 w-3" />
        {config.label}
      </Badge>
    );
  };

  const getPriorityBadge = (priority: string) => {
    const variants: Record<string, { variant: "outline" | "secondary" | "warning" | "destructive", label: string }> = {
      low: { variant: "outline", label: "Baja" },
      medium: { variant: "secondary", label: "Media" },
      high: { variant: "warning", label: "Alta" },
      critical: { variant: "destructive", label: "Crítica" },
    };
    const config = variants[priority] || variants.medium;
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const getClientName = (clientId: string) => {
    return mockClients.find(c => c.id === clientId)?.business_name || "Cliente desconocido";
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Sistema de Tickets</h1>
          <p className="text-muted-foreground mt-1">
            Gestión de tickets de soporte técnico
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Nuevo Ticket
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Tickets"
          value={totalTickets}
          icon={TicketIcon}
          iconColor="text-primary"
        />
        <StatCard
          title="Abiertos"
          value={openTickets}
          icon={AlertCircle}
          iconColor="text-warning"
        />
        <StatCard
          title="En Progreso"
          value={inProgressTickets}
          icon={Clock}
          iconColor="text-info"
        />
        <StatCard
          title="Resueltos"
          value={resolvedTickets}
          change={`${Math.round((resolvedTickets / totalTickets) * 100)}% tasa de resolución`}
          changeType="positive"
          icon={CheckCircle}
          iconColor="text-success"
        />
      </div>

      {/* Tickets List */}
      <Card>
        <CardHeader>
          <CardTitle>Todos los Tickets</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockTickets.map((ticket) => (
              <div
                key={ticket.id}
                className="flex items-start gap-4 rounded-lg border p-4 hover:bg-muted/50 transition-colors"
              >
                <div className="rounded-lg bg-primary/10 p-3">
                  <TicketIcon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-lg">{ticket.title}</h3>
                        {getPriorityBadge(ticket.priority)}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {getClientName(ticket.client_id)}
                      </p>
                    </div>
                    {getStatusBadge(ticket.status)}
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {ticket.description}
                  </p>

                  <div className="flex items-center gap-6 text-sm">
                    <div>
                      <span className="text-muted-foreground">Creado:</span>
                      <span className="ml-2">{formatDate(ticket.created_at)}</span>
                    </div>
                    {ticket.resolved_at && (
                      <div>
                        <span className="text-muted-foreground">Resuelto:</span>
                        <span className="ml-2">{formatDate(ticket.resolved_at)}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline">Ver Detalles</Button>
                    {ticket.status !== "resolved" && ticket.status !== "closed" && (
                      <Button size="sm">Actualizar Estado</Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

