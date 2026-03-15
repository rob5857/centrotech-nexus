# 🏗️ Arquitectura del Sistema CentroTech Platform

## 📐 Visión General

CentroTech Platform es un sistema web profesional de clase empresarial diseñado para gestionar servicios tecnológicos, construido con tecnologías modernas y mejores prácticas de desarrollo.

## 🎯 Principios de Diseño

1. **Modularidad**: Componentes reutilizables y desacoplados
2. **Escalabilidad**: Preparado para crecer a SaaS multi-tenant
3. **Mantenibilidad**: Código limpio y bien documentado
4. **Performance**: Optimizado para carga rápida
5. **UX Premium**: Interfaz moderna y profesional

## 🛠️ Stack Tecnológico

### Frontend

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript 5.3
- **Estilos**: Tailwind CSS 3.4
- **Componentes UI**: shadcn/ui (Radix UI)
- **Animaciones**: Framer Motion
- **State Management**: Zustand
- **Forms**: React Hook Form + Zod
- **Tables**: TanStack Table v8
- **Charts**: Recharts

### Backend (Preparado para)

- **BaaS**: Supabase
- **Database**: PostgreSQL
- **Auth**: Supabase Auth
- **Storage**: Supabase Storage
- **Realtime**: Supabase Realtime

## 📁 Estructura de Carpetas

```
TechServices/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── (dashboard)/             # Grupo de rutas protegidas
│   │   │   ├── dashboard/           # Páginas del dashboard
│   │   │   │   ├── page.tsx         # Dashboard principal
│   │   │   │   ├── clients/         # Módulo de clientes
│   │   │   │   ├── visits/          # Módulo de visitas
│   │   │   │   ├── proposals/       # Módulo de propuestas
│   │   │   │   └── ai-opportunities/ # Módulo de IA
│   │   │   └── layout.tsx           # Layout con sidebar
│   │   ├── globals.css              # Estilos globales + Tailwind
│   │   ├── layout.tsx               # Layout raíz
│   │   └── page.tsx                 # Página de inicio (redirect)
│   │
│   ├── components/
│   │   ├── ui/                      # Componentes base (shadcn/ui)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── tabs.tsx
│   │   │   └── ...
│   │   ├── layout/                  # Componentes de layout
│   │   │   ├── sidebar.tsx
│   │   │   └── header.tsx
│   │   ├── dashboard/               # Componentes del dashboard
│   │   │   ├── stat-card.tsx
│   │   │   └── recent-activity.tsx
│   │   └── clients/                 # Componentes de clientes
│   │       └── client-table.tsx
│   │
│   ├── lib/
│   │   ├── utils.ts                 # Utilidades generales
│   │   └── mock-data.ts             # Datos de demostración
│   │
│   ├── types/
│   │   └── index.ts                 # Tipos TypeScript globales
│   │
│   ├── stores/                      # Zustand stores (futuro)
│   │
│   └── constants/
│       └── index.ts                 # Constantes de la aplicación
│
├── public/                          # Archivos estáticos
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── postcss.config.js
```

## 🎨 Sistema de Diseño

### Paleta de Colores

El sistema usa variables CSS para temas claro/oscuro:

```css
:root {
  --primary: 221.2 83.2% 53.3%;      /* Azul principal */
  --success: 142.1 76.2% 36.3%;      /* Verde éxito */
  --warning: 38 92% 50%;              /* Amarillo advertencia */
  --destructive: 0 84.2% 60.2%;      /* Rojo destructivo */
  --info: 199 89% 48%;                /* Azul información */
}
```

### Componentes Base

Todos los componentes UI están construidos sobre Radix UI:

- **Button**: 7 variantes (default, destructive, outline, secondary, ghost, link, success, warning)
- **Card**: Contenedor principal para secciones
- **Badge**: Indicadores de estado
- **Input**: Campos de formulario
- **Tabs**: Navegación por pestañas
- **Dropdown Menu**: Menús contextuales
- **Avatar**: Imágenes de perfil

### Tipografía

- **Font**: Inter (Google Fonts)
- **Tamaños**: Sistema de escala consistente
- **Pesos**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

## 🔄 Flujo de Datos

### Arquitectura Actual (Mock Data)

```
Component → Mock Data (lib/mock-data.ts) → Render
```

### Arquitectura Futura (Supabase)

```
Component → Zustand Store → Supabase Client → PostgreSQL
                ↓
          Local State
```

## 📊 Modelos de Datos

### Client (Cliente)

```typescript
interface Client {
  id: string;
  business_name: string;
  contact_person: string;
  email: string;
  phone: string;
  plan_type: "basic" | "business" | "premium_ai";
  health_score: "excellent" | "good" | "fair" | "poor" | "critical";
  monthly_value: number;
  // ... más campos
}
```

### Visit (Visita Técnica)

```typescript
interface Visit {
  id: string;
  client_id: string;
  technician_id: string;
  visit_date: string;
  purpose: string;
  findings: string;
  recommendations: string;
  status: "pending" | "in_progress" | "completed" | "cancelled";
  // ... más campos
}
```

### Proposal (Propuesta)

```typescript
interface Proposal {
  id: string;
  client_id: string;
  title: string;
  services: ProposalService[];
  total_amount: number;
  status: "draft" | "sent" | "accepted" | "rejected" | "expired";
  // ... más campos
}
```

## 🔐 Seguridad (Futuro)

### Autenticación

- Supabase Auth con email/password
- JWT tokens
- Refresh tokens automáticos

### Autorización

- Row Level Security (RLS) en PostgreSQL
- Roles: admin, technician, supervisor, client
- Políticas por tabla

### Validación

- Zod schemas para validación de formularios
- Validación en cliente y servidor
- Sanitización de inputs

## 🚀 Optimizaciones

### Performance

- **Server Components**: Renderizado en servidor por defecto
- **Code Splitting**: Carga automática de código
- **Image Optimization**: Next.js Image component
- **Font Optimization**: Fuentes optimizadas automáticamente

### SEO

- Metadata dinámica por página
- Open Graph tags
- Sitemap automático

## 📱 Responsive Design

### Breakpoints

```css
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1400px /* Extra large */
```

### Mobile-First

Todos los componentes están diseñados mobile-first y escalan hacia arriba.

## 🧪 Testing (Futuro)

### Estrategia de Testing

- **Unit Tests**: Vitest
- **Integration Tests**: React Testing Library
- **E2E Tests**: Playwright
- **Type Safety**: TypeScript

## 📈 Roadmap Técnico

### Fase 1: Fundamentos ✅ (Completado)

- [x] Arquitectura Next.js 14
- [x] Sistema de diseño
- [x] Componentes UI base
- [x] Layout principal
- [x] Dashboard con KPIs
- [x] Módulo de Clientes
- [x] Módulo de Visitas
- [x] Módulo de Propuestas
- [x] Módulo de Oportunidades IA

### Fase 2: Backend y Auth 🔄 (Próximo)

- [ ] Configuración de Supabase
- [ ] Migraciones de base de datos
- [ ] Sistema de autenticación
- [ ] Row Level Security
- [ ] API routes

### Fase 3: Módulos Avanzados

- [ ] Inventario de Equipos
- [ ] Topología de Red con visualización
- [ ] Sistema de Tickets con SLA
- [ ] Mantenimiento Preventivo
- [ ] Generación de Reportes PDF

### Fase 4: Features Premium

- [ ] Notificaciones en tiempo real
- [ ] Dashboard de Analytics avanzado
- [ ] Exportación de datos (CSV, Excel)
- [ ] Búsqueda global
- [ ] Modo oscuro completo

### Fase 5: SaaS Multi-Tenant

- [ ] Arquitectura multi-tenant
- [ ] Planes y facturación
- [ ] Onboarding de clientes
- [ ] Admin panel
- [ ] Métricas de uso

## 🔧 Herramientas de Desarrollo

- **IDE**: VS Code recomendado
- **Extensions**: ESLint, Prettier, Tailwind CSS IntelliSense
- **Package Manager**: npm
- **Version Control**: Git

## 📚 Recursos y Documentación

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Supabase Docs](https://supabase.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

**Arquitectura diseñada para escalar y evolucionar con el negocio**

