// Application Constants

export const APP_NAME = "CentroTech AI & Networks";
export const APP_DESCRIPTION = "Professional Tech Services Management Platform";

// Business Types
export const BUSINESS_TYPES = [
  "Clínica Médica",
  "Bufete Legal",
  "Firma Contable",
  "Gasolinera",
  "Institución Educativa",
  "Retail",
  "Restaurante",
  "Oficina Corporativa",
  "Otro",
] as const;

// Plan Types
export const PLAN_TYPES = {
  BASIC: "basic",
  BUSINESS: "business",
  PREMIUM_AI: "premium_ai",
} as const;

export const PLAN_LABELS = {
  [PLAN_TYPES.BASIC]: "Básico",
  [PLAN_TYPES.BUSINESS]: "Empresarial",
  [PLAN_TYPES.PREMIUM_AI]: "Premium IA",
} as const;

// Health Scores
export const HEALTH_SCORES = {
  EXCELLENT: "excellent",
  GOOD: "good",
  FAIR: "fair",
  POOR: "poor",
  CRITICAL: "critical",
} as const;

// Priority Levels
export const PRIORITY_LEVELS = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
  CRITICAL: "critical",
} as const;

// Status Types
export const STATUS_TYPES = {
  PENDING: "pending",
  IN_PROGRESS: "in_progress",
  COMPLETED: "completed",
  CANCELLED: "cancelled",
} as const;

// Equipment Types
export const EQUIPMENT_TYPES = [
  "desktop",
  "laptop",
  "server",
  "printer",
  "network",
  "other",
] as const;

// AI Opportunity Categories
export const AI_CATEGORIES = {
  CHATBOT: "chatbot",
  AUTOMATION: "automation",
  ANALYTICS: "analytics",
  CRM: "crm",
  INVENTORY: "inventory",
  OTHER: "other",
} as const;

// Regions of Puerto Rico
export const PR_REGIONS = [
  "Metro",
  "Norte",
  "Sur",
  "Este",
  "Oeste",
  "Centro",
] as const;

// SLA Response Times (in hours)
export const SLA_RESPONSE_TIMES = {
  CRITICAL: 2,
  HIGH: 4,
  MEDIUM: 8,
  LOW: 24,
} as const;

