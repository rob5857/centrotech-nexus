import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ConsultationDialog } from "@/components/landing/consultation-dialog";
import { ContactDialog } from "@/components/landing/contact-dialog";
import {
  Sparkles,
  Network,
  Wrench,
  Shield,
  Zap,
  Brain,
  Server,
  Wifi,
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp,
  Clock,
  Award,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-info/5" />

        <div className="container relative mx-auto px-4 py-20 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            {/* Logo/Brand */}
            <div className="mb-8 flex items-center justify-center gap-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-info shadow-lg">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl font-bold tracking-tight">CentroTech</h1>
                <p className="text-xl font-semibold text-primary">Nexus</p>
              </div>
            </div>

            {/* Headline */}
            <h2 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Transformamos tu{" "}
              <span className="bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">
                Infraestructura Tecnológica
              </span>
            </h2>

            <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
              Servicios profesionales de soporte técnico, redes empresariales y automatización con inteligencia artificial para el centro de Puerto Rico
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="gap-2 text-lg" asChild>
                <Link href="/login">
                  Acceder al Sistema
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <ConsultationDialog />
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span>Certificados y Licenciados</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span>Soporte 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span>Garantía de Servicio</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight">Nuestros Servicios</h2>
            <p className="text-xl text-muted-foreground">
              Soluciones tecnológicas integrales para tu negocio
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Service 1: Soporte Técnico */}
            <Card className="card-hover border-2">
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Wrench className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-2xl">Soporte Técnico Profesional</CardTitle>
                <CardDescription className="text-base">
                  Mantenimiento preventivo y correctivo de equipos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                    <span>Diagnóstico y reparación de computadoras</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                    <span>Mantenimiento preventivo programado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                    <span>Actualización de hardware y software</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                    <span>Soporte remoto y en sitio</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Service 2: Redes */}
            <Card className="card-hover border-2">
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-info/10">
                  <Network className="h-7 w-7 text-info" />
                </div>
                <CardTitle className="text-2xl">Infraestructura de Red</CardTitle>
                <CardDescription className="text-base">
                  Diseño, implementación y optimización de redes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                    <span>Diseño de topología de red empresarial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                    <span>Instalación de cableado estructurado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                    <span>Configuración de routers y switches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                    <span>WiFi empresarial de alto rendimiento</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Service 3: IA y Automatización */}
            <Card className="card-hover border-2 md:col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-info/20">
                  <Sparkles className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-2xl">Automatización e IA</CardTitle>
                <CardDescription className="text-base">
                  Inteligencia artificial para optimizar tu negocio
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                    <span>Chatbots inteligentes para atención al cliente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                    <span>Automatización de procesos empresariales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                    <span>Análisis predictivo y reportes automáticos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                    <span>Integración de sistemas con IA</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight">Servicios Adicionales</h2>
            <p className="text-xl text-muted-foreground">
              Soluciones especializadas para cada necesidad
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-success/10">
                  <Shield className="h-6 w-6 text-success" />
                </div>
                <CardTitle>Seguridad IT</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Protección de datos, antivirus empresarial y auditorías de seguridad
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-warning/10">
                  <Server className="h-6 w-6 text-warning" />
                </div>
                <CardTitle>Servidores</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Configuración, mantenimiento y optimización de servidores
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-info/10">
                  <Wifi className="h-6 w-6 text-info" />
                </div>
                <CardTitle>Conectividad</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Soluciones de internet, VPN y acceso remoto seguro
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Consultoría</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Asesoría tecnológica y planificación estratégica IT
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight">Industrias que Servimos</h2>
            <p className="text-xl text-muted-foreground">
              Experiencia comprobada en diversos sectores
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            {[
              "Clínicas y Consultorios Médicos",
              "Bufetes Legales",
              "Firmas Contables",
              "Instituciones Educativas",
              "Gasolineras y Retail",
              "Restaurantes",
              "Oficinas Corporativas",
              "Pequeñas y Medianas Empresas",
              "Organizaciones sin Fines de Lucro",
              "Comercios Locales",
            ].map((industry, index) => (
              <div
                key={index}
                className="flex items-center gap-2 rounded-lg border bg-card p-4 transition-all hover:border-primary hover:shadow-md"
              >
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-primary to-info py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <Users className="mx-auto mb-4 h-12 w-12" />
              <div className="mb-2 text-5xl font-bold">50+</div>
              <div className="text-lg opacity-90">Clientes Satisfechos</div>
            </div>
            <div className="text-center">
              <TrendingUp className="mx-auto mb-4 h-12 w-12" />
              <div className="mb-2 text-5xl font-bold">98%</div>
              <div className="text-lg opacity-90">Tasa de Satisfacción</div>
            </div>
            <div className="text-center">
              <Clock className="mx-auto mb-4 h-12 w-12" />
              <div className="mb-2 text-5xl font-bold">24/7</div>
              <div className="text-lg opacity-90">Soporte Disponible</div>
            </div>
            <div className="text-center">
              <Award className="mx-auto mb-4 h-12 w-12" />
              <div className="mb-2 text-5xl font-bold">5+</div>
              <div className="text-lg opacity-90">Años de Experiencia</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-primary/10 to-info/10 p-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight">
              ¿Listo para Transformar tu Infraestructura Tecnológica?
            </h2>
            <p className="mb-8 text-xl text-muted-foreground">
              Agenda una consultoría gratuita y descubre cómo podemos optimizar tu negocio
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <ContactDialog buttonText="Contactar Ahora" />
              <Button size="lg" variant="outline" className="gap-2 text-lg" asChild>
                <Link href="/login">
                  Ver Sistema de Gestión
                  <Sparkles className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-bold">CentroTech</div>
                  <div className="text-sm text-primary">Nexus</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Servicios profesionales de tecnología, redes e inteligencia artificial para el centro de Puerto Rico.
              </p>
            </div>

            <div>
              <h3 className="mb-4 font-semibold">Servicios</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Soporte Técnico</li>
                <li>Infraestructura de Red</li>
                <li>Automatización e IA</li>
                <li>Seguridad IT</li>
                <li>Consultoría Tecnológica</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold">Contacto</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Centro de Puerto Rico</li>
                <li>info@centrotech.pr</li>
                <li>(787) 555-TECH</li>
                <li>Lun - Vie: 8:00 AM - 6:00 PM</li>
                <li>Emergencias: 24/7</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 CentroTech Nexus. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

