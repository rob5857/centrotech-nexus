import {
  Users,
  DollarSign,
  Ticket,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Sparkles,
} from "lucide-react";
import { StatCard } from "@/components/dashboard/stat-card";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockClients, mockTickets, mockAIOpportunities } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";

export default function DashboardPage() {
  // Calculate KPIs
  const totalClients = mockClients.length;
  const activeClients = mockClients.filter(c => c.health_score !== "critical").length;
  const monthlyRevenue = mockClients.reduce((sum, c) => sum + c.monthly_value, 0);
  const totalRevenue = mockClients.reduce((sum, c) => sum + c.total_revenue, 0);

  const openTickets = mockTickets.filter(t => t.status !== "completed").length;
  const criticalTickets = mockTickets.filter(t => t.priority === "critical").length;

  const aiOpportunities = mockAIOpportunities.length;
  const aiPotentialValue = mockAIOpportunities.reduce((sum, o) => sum + o.estimated_value, 0);

  const criticalClients = mockClients.filter(c => c.health_score === "critical");

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-1 text-sm md:text-base">
          Vista general de operaciones y métricas clave
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Clientes Activos"
          value={activeClients}
          change={`${totalClients} total`}
          changeType="neutral"
          icon={Users}
          iconColor="text-primary"
        />
        <StatCard
          title="Ingresos Mensuales"
          value={formatCurrency(monthlyRevenue)}
          change="+12% vs mes anterior"
          changeType="positive"
          icon={DollarSign}
          iconColor="text-success"
        />
        <StatCard
          title="Tickets Abiertos"
          value={openTickets}
          change={`${criticalTickets} críticos`}
          changeType={criticalTickets > 0 ? "negative" : "neutral"}
          icon={Ticket}
          iconColor="text-warning"
        />
        <StatCard
          title="Oportunidades IA"
          value={aiOpportunities}
          change={formatCurrency(aiPotentialValue) + " potencial"}
          changeType="positive"
          icon={Sparkles}
          iconColor="text-info"
        />
      </div>

      {/* Secondary Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Ingresos Totales</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalRevenue)}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Desde el inicio de operaciones
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Mantenimientos Programados</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground mt-1">
              Próximos 30 días
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Tasa de Resolución</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <p className="text-xs text-muted-foreground mt-1">
              Últimos 30 días
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Recent Activity */}
        <RecentActivity />

        {/* Critical Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              Alertas Críticas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {criticalClients.length > 0 ? (
                criticalClients.map((client) => (
                  <div key={client.id} className="flex items-start gap-4 rounded-lg border border-destructive/50 bg-destructive/5 p-4">
                    <AlertTriangle className="h-5 w-5 text-destructive mt-0.5" />
                    <div className="flex-1">
                      <p className="font-medium">{client.business_name}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {client.notes}
                      </p>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="destructive">Crítico</Badge>
                        <Badge variant="outline">{client.business_type}</Badge>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="h-12 w-12 text-success mx-auto mb-2" />
                  <p className="text-sm font-medium">No hay alertas críticas</p>
                  <p className="text-sm text-muted-foreground">
                    Todos los sistemas operando normalmente
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

