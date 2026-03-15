// Core Types for CentroTech Platform

export type UserRole = "admin" | "technician" | "supervisor" | "client";

export type Priority = "low" | "medium" | "high" | "critical";

export type Status = "pending" | "in_progress" | "completed" | "cancelled";

export type HealthScore = "excellent" | "good" | "fair" | "poor" | "critical";

export type RiskLevel = "low" | "medium" | "high" | "critical";

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar_url?: string;
  phone?: string;
  created_at: string;
  updated_at: string;
}

export interface Client {
  id: string;
  business_name: string;
  contact_person: string;
  email: string;
  phone: string;
  secondary_phone?: string;
  address: string;
  city: string;
  region: string;
  business_type: string;
  plan_type: "basic" | "business" | "premium_ai";
  health_score: HealthScore;
  monthly_value: number;
  total_revenue: number;
  active_since: string;
  last_visit_date?: string;
  next_maintenance_date?: string;
  notes?: string;
  tags: string[];
  created_at: string;
  updated_at: string;
}

export interface Equipment {
  id: string;
  client_id: string;
  type: "desktop" | "laptop" | "server" | "printer" | "network" | "other";
  brand: string;
  model: string;
  serial_number?: string;
  location: string;
  status: "operational" | "degraded" | "critical" | "offline";
  os?: string;
  ram?: string;
  storage?: string;
  ip_address?: string;
  health_score: HealthScore;
  risk_level: RiskLevel;
  last_maintenance_date?: string;
  next_maintenance_date?: string;
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface Visit {
  id: string;
  client_id: string;
  technician_id: string;
  visit_date: string;
  purpose: string;
  status: Status;
  findings: string;
  recommendations: string;
  photos?: string[];
  client_signature?: string;
  duration_hours?: number;
  follow_up_required: boolean;
  created_at: string;
  updated_at: string;
}

export interface Proposal {
  id: string;
  client_id: string;
  title: string;
  description: string;
  services: ProposalService[];
  total_amount: number;
  status: "draft" | "sent" | "accepted" | "rejected" | "expired";
  valid_until: string;
  terms?: string;
  created_by: string;
  created_at: string;
  updated_at: string;
}

export interface ProposalService {
  id: string;
  name: string;
  description: string;
  quantity: number;
  unit_price: number;
  total: number;
}

export interface Ticket {
  id: string;
  client_id: string;
  title: string;
  description: string;
  priority: Priority;
  status: Status;
  assigned_to?: string;
  category: "hardware" | "software" | "network" | "security" | "other";
  created_by: string;
  resolved_at?: string;
  sla_due_date?: string;
  created_at: string;
  updated_at: string;
}

export interface AIOpportunity {
  id: string;
  client_id: string;
  title: string;
  description: string;
  category: "chatbot" | "automation" | "analytics" | "crm" | "inventory" | "other";
  impact_score: number;
  time_savings_hours: number;
  estimated_value: number;
  status: "identified" | "proposed" | "in_progress" | "implemented" | "rejected";
  created_at: string;
  updated_at: string;
}

export interface NetworkTopology {
  id: string;
  client_id: string;
  isp: string;
  router_model?: string;
  switches: number;
  access_points: number;
  wired_devices: number;
  wireless_devices: number;
  security_level: HealthScore;
  redundancy_level: RiskLevel;
  diagram_url?: string;
  notes?: string;
  last_audit_date?: string;
  created_at: string;
  updated_at: string;
}

