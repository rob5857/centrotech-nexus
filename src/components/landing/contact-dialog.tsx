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
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

interface ContactDialogProps {
  trigger?: React.ReactNode;
  buttonText?: string;
  buttonVariant?: "default" | "outline" | "ghost";
  buttonSize?: "default" | "sm" | "lg";
}

export function ContactDialog({
  trigger,
  buttonText = "Contactar Ahora",
  buttonVariant = "default",
  buttonSize = "lg"
}: ContactDialogProps) {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(
          `¡Gracias ${formData.name}!\n\nHemos recibido tu mensaje.\n\nNos pondremos en contacto contigo pronto al:\n📧 ${formData.email}\n📱 ${formData.phone}\n\n✅ Mensaje guardado exitosamente`
        );

        setOpen(false);

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        alert(`Error: ${data.error || "No se pudo enviar el mensaje"}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al enviar el mensaje. Por favor intenta de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button size={buttonSize} variant={buttonVariant} className="gap-2 text-lg">
            {buttonText}
            <ArrowRight className="h-5 w-5" />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Contáctanos</DialogTitle>
          <DialogDescription>
            Completa el formulario y nos pondremos en contacto contigo lo antes posible.
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

            {/* Mensaje */}
            <div className="grid gap-2">
              <Label htmlFor="message">Mensaje *</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Cuéntanos cómo podemos ayudarte..."
                rows={4}
                required
              />
            </div>
          </div>

          {/* Información de Contacto */}
          <div className="rounded-lg bg-muted p-4 mb-4">
            <h4 className="font-semibold mb-3">Información de Contacto</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@centrotech.pr</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>(787) 555-0100</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>San Juan, Puerto Rico</span>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)} disabled={isLoading}>
              Cancelar
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Enviando..." : "Enviar Mensaje"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

