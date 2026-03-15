import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockClients } from "@/lib/mock-data";
import { Wrench, Plus, Calendar, CheckCircle, Clock, AlertTriangle } from "lucide-react";
import { StatCard } from "@/components/dashboard/stat-card";

export default function MaintenancePage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Wrench className="h-8 w-8" />
            Mantenimiento Preventivo
          </h1>
          <p className="text-muted-foreground mt-1">
            Programación y seguimiento de mantenimientos
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Programar Mantenimiento
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Programados"
          value="12"
          icon={Calendar}
          iconColor="text-primary"
        />
        <StatCard
          title="Este Mes"
          value="5"
          icon={Clock}
          iconColor="text-info"
        />
        <StatCard
          title="Completados"
          value="8"
          change="Este mes"
          changeType="positive"
          icon={CheckCircle}
          iconColor="text-success"
        />
        <StatCard
          title="Vencidos"
          value="2"
          change="Requieren atención"
          changeType="negative"
          icon={AlertTriangle}
          iconColor="text-warning"
        />
      </div>

      {/* Maintenance Schedule */}
      <Card>
        <CardHeader>
          <CardTitle>Calendario de Mantenimientos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockClients.slice(0, 5).map((client, index) => {
              const statuses = ["scheduled", "completed", "overdue"];
              const status = statuses[index % 3];
              
              return (
                <div
                  key={client.id}
                  className="flex items-start gap-4 rounded-lg border p-4 hover:bg-muted/50 transition-colors"
                >
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Wrench className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">{client.business_name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Mantenimiento Preventivo Mensual
                        </p>
                      </div>
                      {status === "scheduled" && <Badge variant="info">Programado</Badge>}
                      {status === "completed" && <Badge variant="success">Completado</Badge>}
                      {status === "overdue" && <Badge variant="warning">Vencido</Badge>}
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Próxima Fecha</p>
                        <p className="font-medium">
                          {new Date(Date.now() + (index * 7 * 24 * 60 * 60 * 1000)).toLocaleDateString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Frecuencia</p>
                        <p className="font-medium">Mensual</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Última Visita</p>
                        <p className="font-medium">
                          {new Date(Date.now() - (30 * 24 * 60 * 60 * 1000)).toLocaleDateString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Técnico</p>
                        <p className="font-medium">Juan Pérez</p>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline">Ver Detalles</Button>
                      <Button size="sm" variant="outline">Reprogramar</Button>
                      {status === "scheduled" && (
                        <Button size="sm">Marcar Completado</Button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Info Card */}
      <Card className="bg-gradient-to-br from-primary/5 to-success/5">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="rounded-lg bg-success/10 p-3">
              <CheckCircle className="h-6 w-6 text-success" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Mantenimiento Preventivo Automatizado</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Programa mantenimientos recurrentes para tus clientes y recibe recordatorios 
                automáticos. Mantén un historial completo de todas las actividades de mantenimiento.
              </p>
              <Button variant="outline">
                Configurar Recordatorios
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

