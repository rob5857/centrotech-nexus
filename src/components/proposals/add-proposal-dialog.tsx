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
import { Plus, X } from "lucide-react";
import { mockClients } from "@/lib/mock-data";

interface Service {
  id: string;
  name: string;
  description: string;
  quantity: number;
  unit_price: number;
  total: number;
}

export function AddProposalDialog() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    client_id: "",
    title: "",
    description: "",
    valid_until: "",
    status: "draft",
  });

  const [services, setServices] = useState<Service[]>([
    {
      id: "1",
      name: "",
      description: "",
      quantity: 1,
      unit_price: 0,
      total: 0,
    },
  ]);

  const addService = () => {
    setServices([
      ...services,
      {
        id: Date.now().toString(),
        name: "",
        description: "",
        quantity: 1,
        unit_price: 0,
        total: 0,
      },
    ]);
  };

  const removeService = (id: string) => {
    setServices(services.filter((s) => s.id !== id));
  };

  const updateService = (id: string, field: keyof Service, value: any) => {
    setServices(
      services.map((s) => {
        if (s.id === id) {
          const updated = { ...s, [field]: value };
          if (field === "quantity" || field === "unit_price") {
            updated.total = updated.quantity * updated.unit_price;
          }
          return updated;
        }
        return s;
      })
    );
  };

  const totalAmount = services.reduce((sum, s) => sum + s.total, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.client_id) {
      alert("Por favor selecciona un cliente");
      return;
    }

    const selectedClient = mockClients.find((c) => c.id === formData.client_id);

    console.log("Nueva propuesta:", {
      ...formData,
      services,
      total_amount: totalAmount,
      client_name: selectedClient?.business_name,
    });

    alert(
      `Propuesta creada exitosamente para ${selectedClient?.business_name}!\n\nTotal: $${totalAmount.toFixed(2)}\n\n(Funcionalidad de guardado pendiente)`
    );

    setOpen(false);

    // Reset form
    setFormData({
      client_id: "",
      title: "",
      description: "",
      valid_until: "",
      status: "draft",
    });
    setServices([
      {
        id: "1",
        name: "",
        description: "",
        quantity: 1,
        unit_price: 0,
        total: 0,
      },
    ]);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Nueva Propuesta
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Crear Nueva Propuesta de Servicio</DialogTitle>
          <DialogDescription>
            Complete la información de la propuesta y agregue los servicios a cotizar.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            {/* Cliente */}
            <div className="grid gap-2">
              <Label htmlFor="client_id">Cliente *</Label>
              <Select
                value={formData.client_id}
                onValueChange={(value) =>
                  setFormData({ ...formData, client_id: value })
                }
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un cliente" />
                </SelectTrigger>
                <SelectContent>
                  {mockClients.map((client) => (
                    <SelectItem key={client.id} value={client.id}>
                      {client.business_name} - {client.city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Título y Fecha */}
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Título de la Propuesta *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  placeholder="Ej: Actualización de Infraestructura IT"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="valid_until">Válida Hasta *</Label>
                <Input
                  id="valid_until"
                  type="date"
                  value={formData.valid_until}
                  onChange={(e) =>
                    setFormData({ ...formData, valid_until: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            {/* Descripción */}
            <div className="grid gap-2">
              <Label htmlFor="description">Descripción</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="Descripción general de la propuesta..."
                rows={3}
              />
            </div>

            {/* Servicios */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Servicios a Cotizar</Label>
                <Button type="button" size="sm" onClick={addService}>
                  <Plus className="h-4 w-4 mr-2" />
                  Agregar Servicio
                </Button>
              </div>

              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="grid gap-4 p-4 border rounded-lg relative"
                >
                  {services.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-2"
                      onClick={() => removeService(service.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}

                  <div className="grid gap-2">
                    <Label>Nombre del Servicio</Label>
                    <Input
                      value={service.name}
                      onChange={(e) =>
                        updateService(service.id, "name", e.target.value)
                      }
                      placeholder="Ej: Instalación de Servidor"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label>Descripción</Label>
                    <Input
                      value={service.description}
                      onChange={(e) =>
                        updateService(service.id, "description", e.target.value)
                      }
                      placeholder="Descripción del servicio..."
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="grid gap-2">
                      <Label>Cantidad</Label>
                      <Input
                        type="number"
                        min="1"
                        value={service.quantity}
                        onChange={(e) =>
                          updateService(
                            service.id,
                            "quantity",
                            parseInt(e.target.value) || 0
                          )
                        }
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label>Precio Unitario</Label>
                      <Input
                        type="number"
                        min="0"
                        step="0.01"
                        value={service.unit_price}
                        onChange={(e) =>
                          updateService(
                            service.id,
                            "unit_price",
                            parseFloat(e.target.value) || 0
                          )
                        }
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label>Total</Label>
                      <Input
                        value={`$${service.total.toFixed(2)}`}
                        disabled
                        className="bg-muted"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="flex justify-end">
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Total de la Propuesta</p>
                <p className="text-3xl font-bold text-primary">
                  ${totalAmount.toFixed(2)}
                </p>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit">Guardar Propuesta</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

