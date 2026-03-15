# 🚀 Instrucciones para Ejecutar CentroTech Platform

## ✅ Estado Actual del Proyecto

El proyecto ha sido completamente configurado con:

- ✅ Arquitectura Next.js 14 con App Router
- ✅ TypeScript configurado
- ✅ Tailwind CSS + shadcn/ui
- ✅ Componentes UI base implementados
- ✅ Layout principal con Sidebar y Header
- ✅ Dashboard con KPIs y métricas
- ✅ Módulo de Clientes completo
- ✅ Perfil detallado de Cliente con tabs
- ✅ Módulo de Visitas Técnicas
- ✅ Módulo de Propuestas de Servicio
- ✅ Módulo de Oportunidades IA
- ✅ Datos mock realistas para demostración
- ✅ Dependencias instaladas (533 paquetes)

## 🎯 Cómo Ejecutar el Proyecto

### Opción 1: Usando npm (Recomendado)

```bash
cd TechServices
npm run dev
```

### Opción 2: Usando npx

```bash
cd TechServices
npx next dev
```

### Opción 3: Usando node directamente

```bash
cd TechServices
node node_modules/next/dist/bin/next dev
```

## 🌐 Acceder a la Aplicación

Una vez que el servidor esté corriendo, abre tu navegador en:

**http://localhost:3000**

Serás redirigido automáticamente a:

**http://localhost:3000/dashboard**

## 📱 Páginas Disponibles

### Implementadas y Funcionales:

1. **Dashboard Principal** - `/dashboard`
   - KPIs visuales
   - Actividad reciente
   - Alertas críticas
   - Métricas de rendimiento

2. **Clientes** - `/dashboard/clients`
   - Tabla interactiva con búsqueda
   - Filtros
   - Estadísticas de clientes

3. **Perfil de Cliente** - `/dashboard/clients/[id]`
   - Información completa del cliente
   - Tabs: Resumen, Equipos, Visitas, Propuestas
   - Health score y métricas

4. **Visitas Técnicas** - `/dashboard/visits`
   - Historial de visitas
   - Hallazgos y recomendaciones
   - Seguimiento

5. **Propuestas** - `/dashboard/proposals`
   - Propuestas de servicio
   - Desglose de servicios
   - Estados y tracking

6. **Oportunidades IA** - `/dashboard/ai-opportunities`
   - Identificación de oportunidades
   - Scoring de impacto
   - Valor potencial

### Próximamente:

- `/dashboard/equipment` - Inventario de Equipos
- `/dashboard/network` - Topología de Red
- `/dashboard/tickets` - Sistema de Tickets
- `/dashboard/maintenance` - Mantenimiento
- `/dashboard/reports` - Reportes
- `/dashboard/settings` - Configuración

## 🎨 Características del Diseño

- **Responsive**: Funciona en móvil, tablet y desktop
- **Moderno**: Diseño premium inspirado en Vercel, Linear, Notion
- **Profesional**: Interfaz limpia y espaciosa
- **Interactivo**: Microinteracciones y animaciones fluidas
- **Accesible**: Cumple con estándares de accesibilidad

## 🔧 Próximos Pasos Recomendados

1. **Configurar Supabase** (Opcional para persistencia de datos)
   - Crear proyecto en Supabase
   - Copiar credenciales a `.env.local`
   - Ejecutar migraciones de base de datos

2. **Implementar Autenticación**
   - Sistema de login
   - Roles y permisos
   - Protección de rutas

3. **Completar Módulos Restantes**
   - Inventario de Equipos
   - Topología de Red con visualización
   - Sistema de Tickets
   - Generación de Reportes PDF

4. **Agregar Funcionalidades Avanzadas**
   - Notificaciones en tiempo real
   - Exportación de datos
   - Dashboard de analytics
   - Búsqueda global

## 📊 Datos de Demostración

El sistema incluye datos mock realistas para 5 clientes:

1. **Clínica Salud Total** - Plan Premium IA
2. **Bufete Legal Rodríguez & Asociados** - Plan Business
3. **Gasolinera El Camino** - Plan Básico
4. **Colegio San Agustín** - Plan Premium IA
5. **Contadores Pérez CPA** - Plan Business (Estado Crítico)

## 🐛 Solución de Problemas

### El servidor no inicia

```bash
# Limpiar caché de Next.js
rm -rf .next

# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install

# Ejecutar de nuevo
npm run dev
```

### Errores de TypeScript

```bash
# Verificar tipos
npm run type-check
```

### Errores de ESLint

```bash
# Ejecutar linter
npm run lint
```

## 📝 Notas Importantes

- El proyecto usa **Next.js 14** con App Router (no Pages Router)
- Todos los componentes son **Server Components** por defecto
- Los componentes con interactividad usan `"use client"`
- Los datos mock están en `src/lib/mock-data.ts`
- Los tipos TypeScript están en `src/types/index.ts`

## 🎯 Estructura de Archivos Clave

```
TechServices/
├── src/
│   ├── app/
│   │   ├── (dashboard)/
│   │   │   ├── dashboard/
│   │   │   │   ├── page.tsx              # Dashboard principal
│   │   │   │   ├── clients/
│   │   │   │   │   ├── page.tsx          # Lista de clientes
│   │   │   │   │   └── [id]/page.tsx     # Perfil de cliente
│   │   │   │   ├── visits/page.tsx       # Visitas técnicas
│   │   │   │   ├── proposals/page.tsx    # Propuestas
│   │   │   │   └── ai-opportunities/page.tsx  # Oportunidades IA
│   │   │   └── layout.tsx                # Layout con sidebar
│   │   ├── globals.css                   # Estilos globales
│   │   └── layout.tsx                    # Layout raíz
│   ├── components/
│   │   ├── ui/                           # Componentes base
│   │   ├── layout/                       # Sidebar, Header
│   │   ├── dashboard/                    # Componentes dashboard
│   │   └── clients/                      # Componentes clientes
│   ├── lib/
│   │   ├── utils.ts                      # Utilidades
│   │   └── mock-data.ts                  # Datos mock
│   └── types/
│       └── index.ts                      # Tipos TypeScript
```

## 🚀 ¡Listo para Usar!

El sistema está completamente funcional y listo para demostración.
Solo necesitas ejecutar `npm run dev` y abrir http://localhost:3000

---

**Desarrollado para CentroTech AI & Networks**
Sistema Profesional de Gestión de Servicios Tecnológicos

