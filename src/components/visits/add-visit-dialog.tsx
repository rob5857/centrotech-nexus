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
import { Plus } from "lucide-react";
import { mockClients } from "@/lib/mock-data";

export function AddVisitDialog() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    client_id: "",
    visit_date: "",
    purpose: "",
    findings: "",
    recommendations: "",
    duration_hours: "",
    status: "pending",
    follow_up_required: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar que se haya seleccionado un cliente
    if (!formData.client_id) {
      alert("Por favor selecciona un cliente");
      return;
    }

    // Obtener nombre del cliente seleccionado
    const selectedClient = mockClients.find(c => c.id === formData.client_id);
    
    console.log("Nueva visita:", {
      ...formData,
      client_name: selectedClient?.business_name,
    });
    
    alert(`Visita registrada exitosamente para ${selectedClient?.business_name}!\n\n(Funcionalidad de guardado pendiente)`);
    
    setOpen(false);
    
    // Reset form
    setFormData({
      client_id: "",
      visit_date: "",
      purpose: "",
      findings: "",
      recommendations: "",
      duration_hours: "",
      status: "pending",
      follow_up_required: false,
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Nueva Visita
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Registrar Nueva Visita Técnica</DialogTitle>
          <DialogDescription>
            Complete la información de la visita técnica realizada o programada.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            {/* Cliente */}
            <div className="grid gap-2">
              <Label htmlFor="client_id">Cliente *</Label>
              <Select
                value={formData.client_id}
                onValueChange={(value) => setFormData({ ...formData, client_id: value })}
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

            {/* Fecha y Duración */}
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="visit_date">Fecha de Visita *</Label>
                <Input
                  id="visit_date"
                  type="date"
                  value={formData.visit_date}
                  onChange={(e) => setFormData({ ...formData, visit_date: e.target.value })}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="duration_hours">Duración (horas)</Label>
                <Input
                  id="duration_hours"
                  type="number"
                  step="0.5"
                  min="0"
                  value={formData.duration_hours}
                  onChange={(e) => setFormData({ ...formData, duration_hours: e.target.value })}
                  placeholder="Ej: 2.5"
                />
              </div>
            </div>

            {/* Propósito */}
            <div className="grid gap-2">
              <Label htmlFor="purpose">Propósito de la Visita *</Label>
              <Input
                id="purpose"
                value={formData.purpose}
                onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                placeholder="Ej: Mantenimiento preventivo mensual"
                required
              />
            </div>

            {/* Hallazgos */}
            <div className="grid gap-2">
              <Label htmlFor="findings">Hallazgos</Label>
              <Textarea
                id="findings"
                value={formData.findings}
                onChange={(e) => setFormData({ ...formData, findings: e.target.value })}
                placeholder="Describe los hallazgos durante la visita..."
                rows={3}
              />
            </div>

            {/* Recomendaciones */}
            <div className="grid gap-2">
              <Label htmlFor="recommendations">Recomendaciones</Label>
              <Textarea
                id="recommendations"
                value={formData.recommendations}
                onChange={(e) => setFormData({ ...formData, recommendations: e.target.value })}
                placeholder="Recomendaciones para el cliente..."
                rows={3}
              />
            </div>

            {/* Estado y Seguimiento */}
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="status">Estado</Label>
                <Select
                  value={formData.status}
                  onValueChange={(value) => setFormData({ ...formData, status: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pendiente</SelectItem>
                    <SelectItem value="in_progress">En Progreso</SelectItem>
                    <SelectItem value="completed">Completada</SelectItem>
                    <SelectItem value="cancelled">Cancelada</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2 pt-8">
                <input
                  type="checkbox"
                  id="follow_up_required"
                  checked={formData.follow_up_required}
                  onChange={(e) => setFormData({ ...formData, follow_up_required: e.target.checked })}
                  className="h-4 w-4 rounded border-gray-300"
                />
                <Label htmlFor="follow_up_required" className="cursor-pointer">
                  Requiere seguimiento
                </Label>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit">Guardar Visita</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

