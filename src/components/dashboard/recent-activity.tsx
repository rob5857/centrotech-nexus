import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatRelativeTime } from "@/lib/utils";
import { AlertCircle, CheckCircle, Clock, Wrench } from "lucide-react";

interface Activity {
  id: string;
  type: "visit" | "ticket" | "maintenance" | "alert";
  title: string;
  description: string;
  timestamp: string;
  status?: "completed" | "pending" | "critical";
}

const mockActivities: Activity[] = [
  {
    id: "1",
    type: "ticket",
    title: "Servidor no responde - Contadores Pérez CPA",
    description: "Ticket crítico resuelto",
    timestamp: "2024-03-08T16:00:00Z",
    status: "completed",
  },
  {
    id: "2",
    type: "visit",
    title: "Mantenimiento preventivo - Clínica Salud Total",
    description: "Visita técnica completada",
    timestamp: "2024-03-10T14:30:00Z",
    status: "completed",
  },
  {
    id: "3",
    type: "alert",
    title: "Temperatura elevada en servidor",
    description: "Clínica Salud Total - Requiere atención",
    timestamp: "2024-03-10T14:30:00Z",
    status: "pending",
  },
  {
    id: "4",
    type: "maintenance",
    title: "Mantenimiento programado",
    description: "Bufete Legal Rodríguez - 20 de Abril",
    timestamp: "2024-03-05T11:15:00Z",
    status: "pending",
  },
];

const getIcon = (type: Activity["type"]) => {
  switch (type) {
    case "visit":
      return CheckCircle;
    case "ticket":
      return AlertCircle;
    case "maintenance":
      return Wrench;
    case "alert":
      return Clock;
  }
};

const getStatusBadge = (status?: Activity["status"]) => {
  if (!status) return null;
  
  const variants = {
    completed: "success",
    pending: "warning",
    critical: "destructive",
  } as const;

  return <Badge variant={variants[status]}>{status}</Badge>;
};

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Actividad Reciente</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockActivities.map((activity) => {
            const Icon = getIcon(activity.type);
            return (
              <div key={activity.id} className="flex items-start gap-4">
                <div className="rounded-lg bg-muted p-2">
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{activity.title}</p>
                    {getStatusBadge(activity.status)}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {activity.description}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {formatRelativeTime(activity.timestamp)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

