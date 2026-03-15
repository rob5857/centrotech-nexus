import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockEquipment, mockClients } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";
import { HardDrive, Plus, Server, Laptop, Printer, Network as NetworkIcon } from "lucide-react";
import { StatCard } from "@/components/dashboard/stat-card";

export default function EquipmentPage() {
  const totalEquipment = mockEquipment.length;
  const operational = mockEquipment.filter(e => e.status === "operational").length;
  const maintenance = mockEquipment.filter(e => e.status === "maintenance").length;
  const retired = mockEquipment.filter(e => e.status === "retired").length;

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: "success" | "warning" | "secondary", label: string }> = {
      operational: { variant: "success", label: "Operacional" },
      maintenance: { variant: "warning", label: "Mantenimiento" },
      retired: { variant: "secondary", label: "Retirado" },
    };
    const config = variants[status] || variants.operational;
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const getTypeIcon = (type: string) => {
    const icons = {
      desktop: Server,
      laptop: Laptop,
      server: Server,
      printer: Printer,
      network: NetworkIcon,
      other: HardDrive,
    };
    return icons[type as keyof typeof icons] || HardDrive;
  };

  const getClientName = (clientId: string) => {
    return mockClients.find(c => c.id === clientId)?.business_name || "Cliente desconocido";
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Inventario de Equipos</h1>
          <p className="text-muted-foreground mt-1">
            Gestión de equipos de clientes
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Nuevo Equipo
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Equipos"
          value={totalEquipment}
          icon={HardDrive}
          iconColor="text-primary"
        />
        <StatCard
          title="Operacionales"
          value={operational}
          change={`${Math.round((operational / totalEquipment) * 100)}% del total`}
          changeType="positive"
          icon={Server}
          iconColor="text-success"
        />
        <StatCard
          title="En Mantenimiento"
          value={maintenance}
          icon={NetworkIcon}
          iconColor="text-warning"
        />
        <StatCard
          title="Retirados"
          value={retired}
          icon={HardDrive}
          iconColor="text-secondary"
        />
      </div>

      {/* Equipment List */}
      <Card>
        <CardHeader>
          <CardTitle>Todos los Equipos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockEquipment.map((equipment) => {
              const Icon = getTypeIcon(equipment.type);
              return (
                <div
                  key={equipment.id}
                  className="flex items-start gap-4 rounded-lg border p-4 hover:bg-muted/50 transition-colors"
                >
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">
                          {equipment.brand} {equipment.model}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {getClientName(equipment.client_id)}
                        </p>
                      </div>
                      {getStatusBadge(equipment.status)}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Ubicación</p>
                        <p className="font-medium">{equipment.location}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Serial</p>
                        <p className="font-medium">{equipment.serial_number}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Sistema Operativo</p>
                        <p className="font-medium">{equipment.os || "N/A"}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">RAM</p>
                        <p className="font-medium">{equipment.ram || "N/A"}</p>
                      </div>
                    </div>

                    {equipment.notes && (
                      <p className="text-sm text-muted-foreground">{equipment.notes}</p>
                    )}

                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline">Ver Detalles</Button>
                      <Button size="sm" variant="outline">Editar</Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

