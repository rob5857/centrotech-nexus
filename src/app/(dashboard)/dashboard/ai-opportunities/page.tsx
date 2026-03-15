import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockAIOpportunities, mockClients } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";
import {
  Sparkles,
  Plus,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  Lightbulb,
  Bot,
  BarChart3,
  Database,
  MessageSquare,
  Zap,
} from "lucide-react";
import { StatCard } from "@/components/dashboard/stat-card";

export default function AIOpportunitiesPage() {
  const totalOpportunities = mockAIOpportunities.length;
  const identifiedOpportunities = mockAIOpportunities.filter(o => o.status === "identified").length;
  const proposedOpportunities = mockAIOpportunities.filter(o => o.status === "proposed").length;
  const implementedOpportunities = mockAIOpportunities.filter(o => o.status === "implemented").length;
  const totalPotentialValue = mockAIOpportunities.reduce((sum, o) => sum + o.estimated_value, 0);
  const totalTimeSavings = mockAIOpportunities.reduce((sum, o) => sum + o.time_savings_hours, 0);

  const getCategoryIcon = (category: typeof mockAIOpportunities[0]["category"]) => {
    const icons = {
      chatbot: MessageSquare,
      automation: Zap,
      analytics: BarChart3,
      crm: Database,
      inventory: Database,
      other: Lightbulb,
    };
    return icons[category];
  };

  const getStatusBadge = (status: typeof mockAIOpportunities[0]["status"]) => {
    const variants = {
      identified: { variant: "outline" as const, label: "Identificada", icon: Lightbulb },
      proposed: { variant: "warning" as const, label: "Propuesta", icon: TrendingUp },
      in_progress: { variant: "info" as const, label: "En Progreso", icon: Clock },
      implemented: { variant: "success" as const, label: "Implementada", icon: CheckCircle },
      rejected: { variant: "secondary" as const, label: "Rechazada", icon: XCircle },
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

  const getImpactBadge = (score: number) => {
    if (score >= 8) return <Badge variant="success">Alto Impacto</Badge>;
    if (score >= 5) return <Badge variant="warning">Impacto Medio</Badge>;
    return <Badge variant="outline">Bajo Impacto</Badge>;
  };

  const getClientName = (clientId: string) => {
    return mockClients.find(c => c.id === clientId)?.business_name || "Cliente desconocido";
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Sparkles className="h-8 w-8 text-primary" />
            Oportunidades de IA
          </h1>
          <p className="text-muted-foreground mt-1">
            Identificación y seguimiento de oportunidades de automatización con inteligencia artificial
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Nueva Oportunidad
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Oportunidades"
          value={totalOpportunities}
          icon={Sparkles}
          iconColor="text-primary"
        />
        <StatCard
          title="Valor Potencial"
          value={formatCurrency(totalPotentialValue)}
          change="En oportunidades identificadas"
          changeType="positive"
          icon={TrendingUp}
          iconColor="text-success"
        />
        <StatCard
          title="Ahorro de Tiempo"
          value={`${totalTimeSavings}h`}
          change="Por mes estimado"
          changeType="positive"
          icon={Clock}
          iconColor="text-info"
        />
        <StatCard
          title="Implementadas"
          value={implementedOpportunities}
          change={`${Math.round((implementedOpportunities / totalOpportunities) * 100)}% tasa de éxito`}
          changeType="positive"
          icon={CheckCircle}
          iconColor="text-success"
        />
      </div>

      {/* Opportunities List */}
      <Card>
        <CardHeader>
          <CardTitle>Todas las Oportunidades</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockAIOpportunities.map((opportunity) => {
              const CategoryIcon = getCategoryIcon(opportunity.category);
              return (
                <div
                  key={opportunity.id}
                  className="flex items-start gap-4 rounded-lg border p-4 hover:bg-muted/50 transition-colors"
                >
                  <div className="rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 p-3">
                    <CategoryIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">{opportunity.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {getClientName(opportunity.client_id)}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        {getStatusBadge(opportunity.status)}
                        {getImpactBadge(opportunity.impact_score)}
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground">
                      {opportunity.description}
                    </p>

                    <div className="grid grid-cols-3 gap-4 pt-2">
                      <div className="rounded-lg bg-muted p-3">
                        <p className="text-xs text-muted-foreground">Valor Estimado</p>
                        <p className="text-lg font-bold text-success">
                          {formatCurrency(opportunity.estimated_value)}
                        </p>
                      </div>
                      <div className="rounded-lg bg-muted p-3">
                        <p className="text-xs text-muted-foreground">Ahorro de Tiempo</p>
                        <p className="text-lg font-bold text-info">
                          {opportunity.time_savings_hours}h/mes
                        </p>
                      </div>
                      <div className="rounded-lg bg-muted p-3">
                        <p className="text-xs text-muted-foreground">Impacto</p>
                        <p className="text-lg font-bold text-primary">
                          {opportunity.impact_score}/10
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline">
                        Ver Detalles
                      </Button>
                      {opportunity.status === "identified" && (
                        <Button size="sm">
                          Crear Propuesta
                        </Button>
                      )}
                      {opportunity.status === "proposed" && (
                        <Button size="sm" variant="success">
                          Iniciar Implementación
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* AI Categories Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Categorías de Automatización</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { category: "chatbot", label: "Chatbots", icon: MessageSquare, color: "text-blue-500" },
              { category: "automation", label: "Automatización", icon: Zap, color: "text-yellow-500" },
              { category: "analytics", label: "Análisis IA", icon: BarChart3, color: "text-green-500" },
              { category: "crm", label: "CRM Inteligente", icon: Database, color: "text-purple-500" },
              { category: "inventory", label: "Inventario IA", icon: Database, color: "text-orange-500" },
              { category: "other", label: "Otros", icon: Lightbulb, color: "text-gray-500" },
            ].map(({ category, label, icon: Icon, color }) => {
              const count = mockAIOpportunities.filter(o => o.category === category).length;
              return (
                <div key={category} className="flex items-center gap-3 rounded-lg border p-4">
                  <Icon className={`h-8 w-8 ${color}`} />
                  <div>
                    <p className="font-medium">{label}</p>
                    <p className="text-sm text-muted-foreground">{count} oportunidades</p>
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

