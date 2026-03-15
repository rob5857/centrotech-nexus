import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Calendar, TrendingUp, Users, DollarSign, Wrench, Ticket } from "lucide-react";
import { StatCard } from "@/components/dashboard/stat-card";

export default function ReportsPage() {
  const reports = [
    {
      id: 1,
      title: "Reporte Mensual de Actividades",
      description: "Resumen completo de visitas, tickets y mantenimientos del mes",
      icon: Calendar,
      color: "text-primary",
    },
    {
      id: 2,
      title: "Análisis de Ingresos",
      description: "Desglose de ingresos por cliente, servicio y período",
      icon: DollarSign,
      color: "text-success",
    },
    {
      id: 3,
      title: "Reporte de Clientes",
      description: "Estado de clientes, health score y oportunidades",
      icon: Users,
      color: "text-info",
    },
    {
      id: 4,
      title: "Tickets de Soporte",
      description: "Estadísticas de tickets, tiempos de respuesta y resolución",
      icon: Ticket,
      color: "text-warning",
    },
    {
      id: 5,
      title: "Mantenimientos Realizados",
      description: "Historial de mantenimientos preventivos y correctivos",
      icon: Wrench,
      color: "text-secondary",
    },
    {
      id: 6,
      title: "Tendencias y Proyecciones",
      description: "Análisis de tendencias y proyecciones de crecimiento",
      icon: TrendingUp,
      color: "text-primary",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <FileText className="h-8 w-8" />
            Reportes y Análisis
          </h1>
          <p className="text-muted-foreground mt-1">
            Genera reportes profesionales y análisis de datos
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Reportes Generados"
          value="24"
          change="Este mes"
          changeType="positive"
          icon={FileText}
          iconColor="text-primary"
        />
        <StatCard
          title="Exportaciones"
          value="18"
          icon={Download}
          iconColor="text-success"
        />
        <StatCard
          title="Reportes Programados"
          value="6"
          icon={Calendar}
          iconColor="text-info"
        />
        <StatCard
          title="Análisis Activos"
          value="12"
          icon={TrendingUp}
          iconColor="text-warning"
        />
      </div>

      {/* Reports Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {reports.map((report) => {
          const Icon = report.icon;
          return (
            <Card key={report.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className={`rounded-lg bg-muted p-3 ${report.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <CardTitle className="mt-4">{report.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {report.description}
                </p>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    <FileText className="h-4 w-4 mr-2" />
                    Generar
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Export Options */}
      <Card>
        <CardHeader>
          <CardTitle>Opciones de Exportación</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Button variant="outline" className="h-20 flex-col gap-2">
              <FileText className="h-6 w-6" />
              <span>Exportar a PDF</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <FileText className="h-6 w-6" />
              <span>Exportar a Excel</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <FileText className="h-6 w-6" />
              <span>Exportar a CSV</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Scheduled Reports */}
      <Card className="bg-gradient-to-br from-primary/5 to-info/5">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="rounded-lg bg-primary/10 p-3">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Reportes Programados</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Configura reportes automáticos que se generen y envíen por email 
                de forma recurrente (diario, semanal, mensual).
              </p>
              <Button variant="outline">
                Configurar Reportes Automáticos
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

