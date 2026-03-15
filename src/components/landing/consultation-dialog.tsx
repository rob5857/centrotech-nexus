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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sparkles } from "lucide-react";

export function ConsultationDialog() {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const formatPhoneNumber = (value: string) => {
    // Remove all non-numeric characters
    const phoneNumber = value.replace(/\D/g, "");

    // Format as (XXX) XXX-XXXX
    if (phoneNumber.length <= 3) {
      return phoneNumber;
    } else if (phoneNumber.length <= 6) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    } else {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData({ ...formData, phone: formatted });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(
          `¡Gracias ${formData.name}!\n\nHemos recibido tu solicitud de consultoría.\n\nNos pondremos en contacto contigo pronto al email:\n${formData.email}\n\n✅ Solicitud guardada exitosamente`
        );

        setOpen(false);

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
      } else {
        alert(`Error: ${data.error || "No se pudo enviar la solicitud"}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al enviar la solicitud. Por favor intenta de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" variant="outline" className="gap-2 text-lg">
          Solicitar Consultoría
          <Sparkles className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Solicitar Consultoría Gratuita</DialogTitle>
          <DialogDescription>
            Completa el formulario y nos pondremos en contacto contigo para agendar una consultoría sin compromiso.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            {/* Nombre */}
            <div className="grid gap-2">
              <Label htmlFor="name">Nombre Completo *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Juan Pérez"
                required
              />
            </div>

            {/* Email y Teléfono */}
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="juan@empresa.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Teléfono *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  placeholder="(787) 555-0100"
                  maxLength={14}
                  required
                />
              </div>
            </div>

            {/* Empresa */}
            <div className="grid gap-2">
              <Label htmlFor="company">Empresa</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Nombre de tu empresa"
              />
            </div>

            {/* Servicio de Interés */}
            <div className="grid gap-2">
              <Label htmlFor="service">Servicio de Interés *</Label>
              <Select
                value={formData.service}
                onValueChange={(value) => setFormData({ ...formData, service: value })}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un servicio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="soporte">Soporte Técnico</SelectItem>
                  <SelectItem value="redes">Infraestructura de Redes</SelectItem>
                  <SelectItem value="servidores">Gestión de Servidores</SelectItem>
                  <SelectItem value="seguridad">Seguridad Informática</SelectItem>
                  <SelectItem value="ia">Automatización con IA</SelectItem>
                  <SelectItem value="consultoria">Consultoría General</SelectItem>
                  <SelectItem value="otro">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Mensaje */}
            <div className="grid gap-2">
              <Label htmlFor="message">Mensaje</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Cuéntanos sobre tu proyecto o necesidad..."
                rows={4}
              />
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)} disabled={isLoading}>
              Cancelar
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Enviando..." : "Enviar Solicitud"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

