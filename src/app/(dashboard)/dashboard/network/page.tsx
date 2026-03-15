import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockClients } from "@/lib/mock-data";
import { Network, Plus, Wifi, Server, Shield, Activity } from "lucide-react";
import { StatCard } from "@/components/dashboard/stat-card";

export default function NetworkPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Network className="h-8 w-8" />
            Topología de Red
          </h1>
          <p className="text-muted-foreground mt-1">
            Documentación de infraestructura de red de clientes
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Nueva Topología
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Redes Documentadas"
          value={mockClients.length}
          icon={Network}
          iconColor="text-primary"
        />
        <StatCard
          title="Dispositivos Activos"
          value="47"
          icon={Server}
          iconColor="text-success"
        />
        <StatCard
          title="Puntos de Acceso"
          value="23"
          icon={Wifi}
          iconColor="text-info"
        />
        <StatCard
          title="Firewalls"
          value="8"
          icon={Shield}
          iconColor="text-warning"
        />
      </div>

      {/* Network List */}
      <Card>
        <CardHeader>
          <CardTitle>Topologías de Red por Cliente</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockClients.map((client) => (
              <div
                key={client.id}
                className="flex items-start gap-4 rounded-lg border p-4 hover:bg-muted/50 transition-colors"
              >
                <div className="rounded-lg bg-gradient-to-br from-primary/20 to-info/20 p-3">
                  <Network className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{client.business_name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {client.city}, {client.region}
                      </p>
                    </div>
                    <Badge variant="success">Activa</Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Server className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-muted-foreground">Servidores</p>
                        <p className="font-medium">2</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Wifi className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-muted-foreground">WiFi APs</p>
                        <p className="font-medium">4</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Network className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-muted-foreground">Switches</p>
                        <p className="font-medium">3</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Activity className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-muted-foreground">Estado</p>
                        <p className="font-medium text-success">Online</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline">Ver Diagrama</Button>
                    <Button size="sm" variant="outline">Editar</Button>
                    <Button size="sm" variant="outline">Exportar</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Info Card */}
      <Card className="bg-gradient-to-br from-primary/5 to-info/5">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="rounded-lg bg-primary/10 p-3">
              <Network className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Documentación de Red Profesional</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Mantén un registro detallado de la infraestructura de red de cada cliente, 
                incluyendo diagramas, dispositivos, configuraciones y documentación técnica.
              </p>
              <Button variant="outline">
                Crear Primera Topología
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

