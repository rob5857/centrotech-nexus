import { notFound } from "next/navigation";
import { mockClients, mockEquipment, mockVisits, mockProposals } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Calendar,
  DollarSign,
  TrendingUp,
  AlertCircle,
  Edit,
  FileText,
  HardDrive,
  Wrench,
  Network,
} from "lucide-react";
import Link from "next/link";
import { formatCurrency, formatDate } from "@/lib/utils";

export default function ClientDetailPage({ params }: { params: { id: string } }) {
  const client = mockClients.find((c) => c.id === params.id);

  if (!client) {
    notFound();
  }

  const clientEquipment = mockEquipment.filter((e) => e.client_id === client.id);
  const clientVisits = mockVisits.filter((v) => v.client_id === client.id);
  const clientProposals = mockProposals.filter((p) => p.client_id === client.id);

  const getHealthScoreBadge = (score: typeof client.health_score) => {
    const variants = {
      excellent: { variant: "success" as const, label: "Excelente" },
      good: { variant: "info" as const, label: "Bueno" },
      fair: { variant: "warning" as const, label: "Regular" },
      poor: { variant: "warning" as const, label: "Pobre" },
      critical: { variant: "destructive" as const, label: "Crítico" },
    };
    return <Badge variant={variants[score].variant}>{variants[score].label}</Badge>;
  };

  const getPlanBadge = (plan: typeof client.plan_type) => {
    const variants = {
      basic: { variant: "outline" as const, label: "Básico" },
      business: { variant: "secondary" as const, label: "Empresarial" },
      premium_ai: { variant: "default" as const, label: "Premium IA" },
    };
    return <Badge variant={variants[plan].variant}>{variants[plan].label}</Badge>;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/dashboard/clients">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{client.business_name}</h1>
            <p className="text-muted-foreground mt-1">{client.business_type}</p>
          </div>
        </div>
        <Button>
          <Edit className="h-4 w-4 mr-2" />
          Editar Cliente
        </Button>
      </div>

      {/* Client Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Estado de Salud</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {getHealthScoreBadge(client.health_score)}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Plan Contratado</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {getPlanBadge(client.plan_type)}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Valor Mensual</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(client.monthly_value)}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Total: {formatCurrency(client.total_revenue)}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Cliente Desde</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {new Date(client.active_since).getFullYear()}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {formatDate(client.active_since)}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle>Información de Contacto</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">{client.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Teléfono</p>
                  <p className="text-sm text-muted-foreground">{client.phone}</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Dirección</p>
                  <p className="text-sm text-muted-foreground">
                    {client.address}, {client.city}, {client.region}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Resumen</TabsTrigger>
          <TabsTrigger value="equipment">Equipos ({clientEquipment.length})</TabsTrigger>
          <TabsTrigger value="visits">Visitas ({clientVisits.length})</TabsTrigger>
          <TabsTrigger value="proposals">Propuestas ({clientProposals.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notas Internas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{client.notes}</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="equipment">
          <Card>
            <CardHeader>
              <CardTitle>Equipos del Cliente</CardTitle>
            </CardHeader>
            <CardContent>
              {clientEquipment.length > 0 ? (
                <div className="space-y-4">
                  {clientEquipment.map((equipment) => (
                    <div key={equipment.id} className="flex items-start gap-4 rounded-lg border p-4">
                      <HardDrive className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{equipment.brand} {equipment.model}</p>
                          <Badge variant={equipment.status === "operational" ? "success" : "warning"}>
                            {equipment.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{equipment.location}</p>
                        <p className="text-xs text-muted-foreground mt-1">{equipment.notes}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground text-center py-8">
                  No hay equipos registrados
                </p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="visits">
          <Card>
            <CardHeader>
              <CardTitle>Historial de Visitas</CardTitle>
            </CardHeader>
            <CardContent>
              {clientVisits.length > 0 ? (
                <div className="space-y-4">
                  {clientVisits.map((visit) => (
                    <div key={visit.id} className="flex items-start gap-4 rounded-lg border p-4">
                      <Wrench className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{visit.purpose}</p>
                          <Badge variant="success">{visit.status}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{formatDate(visit.visit_date)}</p>
                        <p className="text-sm mt-2">{visit.findings}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground text-center py-8">
                  No hay visitas registradas
                </p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="proposals">
          <Card>
            <CardHeader>
              <CardTitle>Propuestas de Servicio</CardTitle>
            </CardHeader>
            <CardContent>
              {clientProposals.length > 0 ? (
                <div className="space-y-4">
                  {clientProposals.map((proposal) => (
                    <div key={proposal.id} className="flex items-start gap-4 rounded-lg border p-4">
                      <FileText className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{proposal.title}</p>
                          <Badge variant="warning">{proposal.status}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{proposal.description}</p>
                        <p className="text-lg font-bold mt-2">{formatCurrency(proposal.total_amount)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground text-center py-8">
                  No hay propuestas registradas
                </p>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

