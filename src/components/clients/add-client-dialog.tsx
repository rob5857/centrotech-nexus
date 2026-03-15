"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";

export function AddClientDialog() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    business_name: "",
    contact_person: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    region: "Centro",
    business_type: "",
    plan_type: "basic",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Aquí irá la lógica para guardar en Supabase
    console.log("Nuevo cliente:", formData);
    alert("Cliente agregado exitosamente! (Funcionalidad de guardado pendiente)");
    setOpen(false);
    // Reset form
    setFormData({
      business_name: "",
      contact_person: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      region: "Centro",
      business_type: "",
      plan_type: "basic",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Nuevo Cliente
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Agregar Nuevo Cliente</DialogTitle>
          <DialogDescription>
            Complete la información del nuevo cliente. Los campos marcados son obligatorios.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            {/* Business Name */}
            <div className="grid gap-2">
              <Label htmlFor="business_name">Nombre del Negocio *</Label>
              <Input
                id="business_name"
                value={formData.business_name}
                onChange={(e) => setFormData({ ...formData, business_name: e.target.value })}
                placeholder="Ej: Clínica Salud Total"
                required
              />
            </div>

            {/* Contact Person */}
            <div className="grid gap-2">
              <Label htmlFor="contact_person">Persona de Contacto *</Label>
              <Input
                id="contact_person"
                value={formData.contact_person}
                onChange={(e) => setFormData({ ...formData, contact_person: e.target.value })}
                placeholder="Ej: Dr. Carlos Méndez"
                required
              />
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="email@ejemplo.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Teléfono *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(787) 555-0000"
                  required
                />
              </div>
            </div>

            {/* Address */}
            <div className="grid gap-2">
              <Label htmlFor="address">Dirección</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="Calle Principal #123"
              />
            </div>

            {/* City and Region */}
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="city">Ciudad *</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="Caguas"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="region">Región</Label>
                <select
                  id="region"
                  value={formData.region}
                  onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                  className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="Centro">Centro</option>
                  <option value="Metro">Metro</option>
                  <option value="Norte">Norte</option>
                  <option value="Sur">Sur</option>
                  <option value="Este">Este</option>
                  <option value="Oeste">Oeste</option>
                </select>
              </div>
            </div>

            {/* Business Type and Plan */}
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="business_type">Tipo de Negocio</Label>
                <Input
                  id="business_type"
                  value={formData.business_type}
                  onChange={(e) => setFormData({ ...formData, business_type: e.target.value })}
                  placeholder="Ej: Clínica Médica"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="plan_type">Plan</Label>
                <select
                  id="plan_type"
                  value={formData.plan_type}
                  onChange={(e) => setFormData({ ...formData, plan_type: e.target.value })}
                  className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="basic">Básico</option>
                  <option value="business">Empresarial</option>
                  <option value="premium_ai">Premium IA</option>
                </select>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit">Guardar Cliente</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

