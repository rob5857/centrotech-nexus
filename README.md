# CentroTech AI & Networks

```
 ██████╗███████╗███╗   ██╗████████╗██████╗  ██████╗ ████████╗███████╗ ██████╗██╗  ██╗
██╔════╝██╔════╝████╗  ██║╚══██╔══╝██╔══██╗██╔═══██╗╚══██╔══╝██╔════╝██╔════╝██║  ██║
██║     █████╗  ██╔██╗ ██║   ██║   ██████╔╝██║   ██║   ██║   █████╗  ██║     ███████║
██║     ██╔══╝  ██║╚██╗██║   ██║   ██╔══██╗██║   ██║   ██║   ██╔══╝  ██║     ██╔══██║
╚██████╗███████╗██║ ╚████║   ██║   ██║  ██║╚██████╔╝   ██║   ███████╗╚██████╗██║  ██║
 ╚═════╝╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝    ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝
                    AI & Networks - Professional Tech Services Platform
```

## 🎯 Sistema Profesional de Gestión de Servicios Tecnológicos

Plataforma empresarial moderna diseñada para administrar clientes, visitas técnicas, diagnósticos, mantenimiento, topologías de red, automatización empresarial y oportunidades de inteligencia artificial.

### ⚡ Estado: FASE 1 COMPLETADA ✅

---

## 🚀 Características Principales

### Módulos Implementados

- ✅ **Dashboard Principal** - KPIs visuales, métricas clave y actividad reciente
- ✅ **Gestión de Clientes** - CRUD completo con tabla interactiva y perfiles detallados
- ✅ **Visitas Técnicas** - Seguimiento de visitas, hallazgos y recomendaciones
- ✅ **Propuestas de Servicio** - Generación y gestión de propuestas comerciales
- ✅ **Oportunidades IA** - Identificación de oportunidades de automatización
- ✅ **Inventario de Equipos** - Gestión de equipos del cliente
- 🔄 **Topología de Red** - Documentación de infraestructura (próximamente)
- 🔄 **Sistema de Tickets** - Gestión de tickets de soporte (próximamente)
- 🔄 **Reportes PDF** - Generación de reportes profesionales (próximamente)

## 🛠️ Stack Tecnológico

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript
- **UI/UX**: Tailwind CSS, shadcn/ui, Framer Motion
- **State Management**: Zustand
- **Forms**: React Hook Form + Zod
- **Tables**: TanStack Table
- **Charts**: Recharts
- **Backend**: Supabase (PostgreSQL + Auth + Storage)

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.local.example .env.local
# Editar .env.local con tus credenciales de Supabase

# Ejecutar en desarrollo
npm run dev

# Compilar para producción
npm run build

# Ejecutar en producción
npm start
```

## 🏗️ Estructura del Proyecto

```
TechServices/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (dashboard)/       # Rutas protegidas del dashboard
│   │   │   ├── dashboard/     # Páginas del dashboard
│   │   │   └── layout.tsx     # Layout con sidebar y header
│   │   ├── globals.css        # Estilos globales
│   │   └── layout.tsx         # Layout raíz
│   ├── components/
│   │   ├── ui/                # Componentes base de shadcn/ui
│   │   ├── layout/            # Sidebar, Header
│   │   ├── dashboard/         # Componentes del dashboard
│   │   └── clients/           # Componentes de clientes
│   ├── lib/
│   │   ├── utils.ts           # Utilidades
│   │   └── mock-data.ts       # Datos de demostración
│   ├── types/
│   │   └── index.ts           # Tipos TypeScript
│   └── constants/             # Constantes
├── public/                    # Archivos estáticos
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🎨 Diseño y UX

El sistema está diseñado con un enfoque premium, moderno y profesional:

- **Minimalista y tecnológico** - Interfaz limpia y espaciosa
- **Responsive** - Mobile-first, optimizado para todos los dispositivos
- **Accesible** - Cumple con estándares de accesibilidad
- **Microinteracciones** - Animaciones fluidas y profesionales
- **Sistema de diseño consistente** - Componentes reutilizables

## 📊 Módulos Detallados

### Dashboard
- KPIs visuales (clientes activos, ingresos, tickets, oportunidades IA)
- Actividad reciente
- Alertas críticas
- Métricas de rendimiento

### Clientes
- Tabla interactiva con búsqueda y filtros
- Perfil detallado con tabs (Resumen, Equipos, Visitas, Propuestas)
- Health score y scoring de riesgo
- Historial completo de servicios

### Visitas Técnicas
- Registro de visitas con hallazgos y recomendaciones
- Seguimiento de visitas completadas y pendientes
- Indicadores de seguimiento requerido

### Propuestas de Servicio
- Generación de propuestas profesionales
- Desglose de servicios y precios
- Estados: Borrador, Enviada, Aceptada, Rechazada
- Tracking de valor total

### Oportunidades IA
- Identificación de oportunidades de automatización
- Scoring de impacto y ahorro de tiempo
- Categorías: Chatbot, Automatización, Analytics, CRM, Inventario
- Valor potencial estimado

## 🔐 Seguridad

- Autenticación con Supabase Auth
- Row Level Security (RLS)
- Roles y permisos
- Validación de datos con Zod

## 📈 Próximos Pasos

1. Implementar autenticación completa
2. Conectar con Supabase
3. Módulo de Topología de Red con visualización
4. Sistema de Tickets con SLA
5. Generación de Reportes PDF
6. Módulo de Mantenimiento Preventivo
7. Dashboard de Analytics avanzado
8. Notificaciones en tiempo real
9. Exportación de datos
10. Multi-tenant para SaaS

## 🤝 Contribución

Este es un proyecto profesional para CentroTech AI & Networks.

## 📄 Licencia

Propietario - CentroTech AI & Networks © 2024

---

**Desarrollado con ❤️ para servicios tecnológicos profesionales**

