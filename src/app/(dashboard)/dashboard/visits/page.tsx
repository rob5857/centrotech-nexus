import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockVisits, mockClients } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";
import { Calendar, Plus, CheckCircle, Clock, AlertCircle, Wrench } from "lucide-react";
import { StatCard } from "@/components/dashboard/stat-card";
import { AddVisitDialog } from "@/components/visits/add-visit-dialog";

export default function VisitsPage() {
  const totalVisits = mockVisits.length;
  const completedVisits = mockVisits.filter(v => v.status === "completed").length;
  const pendingVisits = mockVisits.filter(v => v.status === "pending").length;
  const followUpRequired = mockVisits.filter(v => v.follow_up_required).length;

  const getStatusBadge = (status: typeof mockVisits[0]["status"]) => {
    const variants = {
      pending: { variant: "warning" as const, label: "Pendiente", icon: Clock },
      in_progress: { variant: "info" as const, label: "En Progreso", icon: Wrench },
      completed: { variant: "success" as const, label: "Completada", icon: CheckCircle },
      cancelled: { variant: "secondary" as const, label: "Cancelada", icon: AlertCircle },
    };
    const config = variants[status];
    const Icon = config.icon;
    return (
      <Badge variant={config.variant} className="gap-1">
        <Icon className="h-3 w-3" />
        {config.label}
      </Badge>
    );
  };

  const getClientName = (clientId: string) => {
    return mockClients.find(c => c.id === clientId)?.business_name || "Cliente desconocido";
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Visitas Técnicas</h1>
          <p className="text-muted-foreground mt-1">
            Gestión y seguimiento de visitas a clientes
          </p>
        </div>
        <AddVisitDialog />
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Visitas"
          value={totalVisits}
          icon={Calendar}
          iconColor="text-primary"
        />
        <StatCard
          title="Completadas"
          value={completedVisits}
          change={`${Math.round((completedVisits / totalVisits) * 100)}% del total`}
          changeType="positive"
          icon={CheckCircle}
          iconColor="text-success"
        />
        <StatCard
          title="Pendientes"
          value={pendingVisits}
          icon={Clock}
          iconColor="text-warning"
        />
        <StatCard
          title="Requieren Seguimiento"
          value={followUpRequired}
          change={followUpRequired > 0 ? "Acción requerida" : "Todo al día"}
          changeType={followUpRequired > 0 ? "negative" : "positive"}
          icon={AlertCircle}
          iconColor="text-info"
        />
      </div>

      {/* Visits List */}
      <Card>
        <CardHeader>
          <CardTitle>Historial de Visitas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockVisits.map((visit) => (
              <div
                key={visit.id}
                className="flex items-start gap-4 rounded-lg border p-4 hover:bg-muted/50 transition-colors"
              >
                <div className="rounded-lg bg-primary/10 p-3">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{visit.purpose}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {getClientName(visit.client_id)}
                      </p>
                    </div>
                    {getStatusBadge(visit.status)}
                  </div>

                  <div className="space-y-2">
                    <div>
                      <p className="text-sm font-medium">Hallazgos:</p>
                      <p className="text-sm text-muted-foreground">{visit.findings}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Recomendaciones:</p>
                      <p className="text-sm text-muted-foreground">{visit.recommendations}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-sm pt-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{formatDate(visit.visit_date)}</span>
                    </div>
                    {visit.duration_hours && (
                      <div>
                        <span className="text-muted-foreground">Duración:</span>
                        <span className="ml-2">{visit.duration_hours}h</span>
                      </div>
                    )}
                    {visit.follow_up_required && (
                      <Badge variant="warning">Seguimiento Requerido</Badge>
                    )}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline">
                      Ver Detalles
                    </Button>
                    {visit.follow_up_required && (
                      <Button size="sm">
                        Programar Seguimiento
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Visits */}
      <Card>
        <CardHeader>
          <CardTitle>Próximas Visitas Programadas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
            <p className="text-sm font-medium">No hay visitas programadas</p>
            <p className="text-sm text-muted-foreground mt-1">
              Programa una nueva visita para comenzar
            </p>
            <Button className="mt-4" variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              Programar Visita
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

