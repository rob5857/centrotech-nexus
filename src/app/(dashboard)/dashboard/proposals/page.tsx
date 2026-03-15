import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockProposals, mockClients } from "@/lib/mock-data";
import { formatCurrency, formatDate } from "@/lib/utils";
import { FileText, Plus, Eye, Send, CheckCircle, XCircle, Clock } from "lucide-react";
import { StatCard } from "@/components/dashboard/stat-card";
import { AddProposalDialog } from "@/components/proposals/add-proposal-dialog";

export default function ProposalsPage() {
  const totalProposals = mockProposals.length;
  const sentProposals = mockProposals.filter(p => p.status === "sent").length;
  const acceptedProposals = mockProposals.filter(p => p.status === "accepted").length;
  const totalValue = mockProposals.reduce((sum, p) => sum + p.total_amount, 0);

  const getStatusBadge = (status: typeof mockProposals[0]["status"]) => {
    const variants = {
      draft: { variant: "outline" as const, label: "Borrador", icon: FileText },
      sent: { variant: "warning" as const, label: "Enviada", icon: Send },
      accepted: { variant: "success" as const, label: "Aceptada", icon: CheckCircle },
      rejected: { variant: "destructive" as const, label: "Rechazada", icon: XCircle },
      expired: { variant: "secondary" as const, label: "Expirada", icon: Clock },
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
          <h1 className="text-3xl font-bold tracking-tight">Propuestas de Servicio</h1>
          <p className="text-muted-foreground mt-1">
            Gestión de propuestas comerciales y cotizaciones
          </p>
        </div>
        <AddProposalDialog />
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Propuestas"
          value={totalProposals}
          icon={FileText}
          iconColor="text-primary"
        />
        <StatCard
          title="Enviadas"
          value={sentProposals}
          change="Pendientes de respuesta"
          changeType="neutral"
          icon={Send}
          iconColor="text-warning"
        />
        <StatCard
          title="Aceptadas"
          value={acceptedProposals}
          change={`${Math.round((acceptedProposals / totalProposals) * 100)}% tasa de éxito`}
          changeType="positive"
          icon={CheckCircle}
          iconColor="text-success"
        />
        <StatCard
          title="Valor Total"
          value={formatCurrency(totalValue)}
          icon={FileText}
          iconColor="text-info"
        />
      </div>

      {/* Proposals List */}
      <Card>
        <CardHeader>
          <CardTitle>Todas las Propuestas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockProposals.map((proposal) => (
              <div
                key={proposal.id}
                className="flex items-start gap-4 rounded-lg border p-4 hover:bg-muted/50 transition-colors"
              >
                <div className="rounded-lg bg-primary/10 p-3">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{proposal.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {getClientName(proposal.client_id)}
                      </p>
                    </div>
                    {getStatusBadge(proposal.status)}
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {proposal.description}
                  </p>

                  <div className="flex items-center gap-6 text-sm">
                    <div>
                      <span className="text-muted-foreground">Valor:</span>
                      <span className="font-bold ml-2">{formatCurrency(proposal.total_amount)}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Servicios:</span>
                      <span className="ml-2">{proposal.services.length}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Válida hasta:</span>
                      <span className="ml-2">{formatDate(proposal.valid_until)}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4 mr-2" />
                      Ver Detalles
                    </Button>
                    {proposal.status === "draft" && (
                      <Button size="sm">
                        <Send className="h-4 w-4 mr-2" />
                        Enviar Propuesta
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Services Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Desglose de Servicios Propuestos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockProposals.flatMap(p => p.services).map((service) => (
              <div key={service.id} className="flex items-center justify-between py-2 border-b last:border-0">
                <div className="flex-1">
                  <p className="font-medium">{service.name}</p>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">{formatCurrency(service.total)}</p>
                  <p className="text-xs text-muted-foreground">
                    {service.quantity} × {formatCurrency(service.unit_price)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

