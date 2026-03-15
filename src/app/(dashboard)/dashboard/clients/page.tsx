import { ClientTable } from "@/components/clients/client-table";
import { mockClients } from "@/lib/mock-data";
import { Users, TrendingUp, AlertTriangle, DollarSign } from "lucide-react";
import { StatCard } from "@/components/dashboard/stat-card";
import { formatCurrency } from "@/lib/utils";

export default function ClientsPage() {
  const totalClients = mockClients.length;
  const criticalClients = mockClients.filter(c => c.health_score === "critical").length;
  const premiumClients = mockClients.filter(c => c.plan_type === "premium_ai").length;
  const totalMonthlyRevenue = mockClients.reduce((sum, c) => sum + c.monthly_value, 0);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Clientes</h1>
        <p className="text-muted-foreground mt-1">
          Gestión completa de clientes y relaciones comerciales
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total de Clientes"
          value={totalClients}
          icon={Users}
          iconColor="text-primary"
        />
        <StatCard
          title="Clientes Premium"
          value={premiumClients}
          change={`${Math.round((premiumClients / totalClients) * 100)}% del total`}
          changeType="neutral"
          icon={TrendingUp}
          iconColor="text-success"
        />
        <StatCard
          title="Ingresos Mensuales"
          value={formatCurrency(totalMonthlyRevenue)}
          icon={DollarSign}
          iconColor="text-info"
        />
        <StatCard
          title="Clientes Críticos"
          value={criticalClients}
          change={criticalClients > 0 ? "Requieren atención" : "Todo bien"}
          changeType={criticalClients > 0 ? "negative" : "positive"}
          icon={AlertTriangle}
          iconColor="text-warning"
        />
      </div>

      {/* Client Table */}
      <ClientTable clients={mockClients} />
    </div>
  );
}

