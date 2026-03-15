import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Settings as SettingsIcon,
  User,
  Bell,
  Shield,
  Palette,
  Database,
  Mail,
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
          <SettingsIcon className="h-8 w-8" />
          Configuración
        </h1>
        <p className="text-muted-foreground mt-1">
          Administra las preferencias y configuración del sistema
        </p>
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">Perfil</TabsTrigger>
          <TabsTrigger value="notifications">Notificaciones</TabsTrigger>
          <TabsTrigger value="appearance">Apariencia</TabsTrigger>
          <TabsTrigger value="security">Seguridad</TabsTrigger>
          <TabsTrigger value="integrations">Integraciones</TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Información Personal
              </CardTitle>
              <CardDescription>
                Actualiza tu información de perfil y datos de contacto
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre Completo</Label>
                  <Input id="name" defaultValue="Administrador" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="admin@centrotech.pr" />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input id="phone" defaultValue="(787) 555-TECH" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Rol</Label>
                  <Input id="role" defaultValue="Administrador" disabled />
                </div>
              </div>
              <Separator />
              <div className="flex justify-end">
                <Button>Guardar Cambios</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Preferencias de Notificaciones
              </CardTitle>
              <CardDescription>
                Configura cómo y cuándo quieres recibir notificaciones
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Notificaciones por Email</p>
                    <p className="text-sm text-muted-foreground">
                      Recibe actualizaciones importantes por correo electrónico
                    </p>
                  </div>
                  <input type="checkbox" defaultChecked className="h-4 w-4" />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Alertas de Tickets Críticos</p>
                    <p className="text-sm text-muted-foreground">
                      Notificaciones inmediatas para tickets de alta prioridad
                    </p>
                  </div>
                  <input type="checkbox" defaultChecked className="h-4 w-4" />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Recordatorios de Mantenimiento</p>
                    <p className="text-sm text-muted-foreground">
                      Avisos de mantenimientos programados próximos
                    </p>
                  </div>
                  <input type="checkbox" defaultChecked className="h-4 w-4" />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Resumen Semanal</p>
                    <p className="text-sm text-muted-foreground">
                      Reporte semanal de actividades y métricas
                    </p>
                  </div>
                  <input type="checkbox" className="h-4 w-4" />
                </div>
              </div>
              <Separator />
              <div className="flex justify-end">
                <Button>Guardar Preferencias</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Appearance Tab */}
        <TabsContent value="appearance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Apariencia
              </CardTitle>
              <CardDescription>
                Personaliza la apariencia del sistema
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Tema</Label>
                <p className="text-sm text-muted-foreground mb-4">
                  Usa el botón de sol/luna en el header para cambiar entre modo claro y oscuro
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg border-2 border-muted p-4 hover:border-primary cursor-pointer transition-colors">
                    <div className="aspect-video rounded-md bg-background mb-2" />
                    <p className="font-medium text-center">Claro</p>
                  </div>
                  <div className="rounded-lg border-2 border-primary p-4 cursor-pointer">
                    <div className="aspect-video rounded-md bg-slate-950 mb-2" />
                    <p className="font-medium text-center">Oscuro</p>
                  </div>
                  <div className="rounded-lg border-2 border-muted p-4 hover:border-primary cursor-pointer transition-colors">
                    <div className="aspect-video rounded-md bg-gradient-to-br from-background to-slate-950 mb-2" />
                    <p className="font-medium text-center">Sistema</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Seguridad
              </CardTitle>
              <CardDescription>
                Administra la seguridad de tu cuenta
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Cambiar Contraseña</h3>
                  <div className="space-y-2">
                    <Input type="password" placeholder="Contraseña actual" />
                    <Input type="password" placeholder="Nueva contraseña" />
                    <Input type="password" placeholder="Confirmar nueva contraseña" />
                  </div>
                  <Button className="mt-4">Actualizar Contraseña</Button>
                </div>
                <Separator />
                <div>
                  <h3 className="font-medium mb-2">Autenticación de Dos Factores</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Agrega una capa extra de seguridad a tu cuenta
                  </p>
                  <Button variant="outline">Configurar 2FA</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Integrations Tab */}
        <TabsContent value="integrations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                Integraciones
              </CardTitle>
              <CardDescription>
                Conecta CentroTech Nexus con otras herramientas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Mail className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-medium">Email (SMTP)</p>
                      <p className="text-sm text-muted-foreground">
                        Envío de notificaciones por correo
                      </p>
                    </div>
                  </div>
                  <Button variant="outline">Configurar</Button>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Database className="h-8 w-8 text-success" />
                    <div>
                      <p className="font-medium">Supabase</p>
                      <p className="text-sm text-muted-foreground">
                        Base de datos y autenticación
                      </p>
                    </div>
                  </div>
                  <Button variant="outline">Conectado</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

