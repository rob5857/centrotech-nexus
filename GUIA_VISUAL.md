# 📸 Guía Visual - CentroTech Platform

## 🎨 Recorrido Visual del Sistema

### 1. Dashboard Principal (`/dashboard`)

**Elementos Visuales:**
- 🎯 **4 KPI Cards** en la parte superior:
  - Clientes Activos (icono de usuarios, azul)
  - Ingresos Mensuales (icono de dólar, verde)
  - Tickets Abiertos (icono de ticket, amarillo)
  - Oportunidades IA (icono de estrella, cyan)

- 📊 **3 Cards Secundarias**:
  - Ingresos Totales (con icono de tendencia)
  - Mantenimientos Programados (con icono de reloj)
  - Tasa de Resolución (con icono de check)

- 📋 **2 Secciones Principales**:
  - Actividad Reciente (timeline de eventos)
  - Alertas Críticas (clientes que requieren atención)

**Colores Dominantes:**
- Fondo: Gris muy claro (#FAFAFA)
- Cards: Blanco con sombra suave
- Acentos: Azul (#3B82F6), Verde (#10B981), Amarillo (#F59E0B)

---

### 2. Módulo de Clientes (`/dashboard/clients`)

**Layout:**
- 📊 **4 Stats Cards** arriba
- 🔍 **Barra de búsqueda** con icono de lupa
- 📋 **Tabla interactiva** con columnas:
  - Empresa (nombre + tipo de negocio)
  - Contacto (persona + email)
  - Ubicación (ciudad + región)
  - Plan (badge de color)
  - Estado (badge de health score)
  - Valor Mensual (formato moneda)
  - Última Visita (fecha)
  - Acciones (menú de 3 puntos)

**Badges de Plan:**
- Básico: Gris outline
- Empresarial: Gris sólido
- Premium IA: Azul sólido

**Badges de Health Score:**
- Excelente: Verde
- Bueno: Cyan
- Regular: Amarillo
- Crítico: Rojo

---

### 3. Perfil de Cliente (`/dashboard/clients/[id]`)

**Estructura:**
- ⬅️ **Botón de regreso** a la lista
- 📝 **Header** con nombre de empresa y tipo de negocio
- ✏️ **Botón de editar** en la esquina superior derecha

**4 Cards de Métricas:**
1. Estado de Salud (badge grande)
2. Plan Contratado (badge grande)
3. Valor Mensual (número grande + total pequeño)
4. Cliente Desde (año grande + fecha completa)

**Card de Información de Contacto:**
- Email con icono
- Teléfono con icono
- Dirección con icono de mapa

**Sistema de Tabs:**
- Tab activo: Fondo blanco, texto oscuro
- Tab inactivo: Fondo transparente, texto gris
- Contenido: Cards con información específica

---

### 4. Visitas Técnicas (`/dashboard/visits`)

**Elementos:**
- 📊 **4 Stats Cards**: Total, Completadas, Pendientes, Seguimiento
- 📋 **Lista de visitas** con cards expandibles:
  - Icono de herramienta en círculo azul
  - Título de la visita
  - Cliente asociado
  - Badge de estado
  - Hallazgos (texto gris)
  - Recomendaciones (texto gris)
  - Fecha y duración
  - Botones de acción

**Estados Visuales:**
- Pendiente: Badge amarillo
- En Progreso: Badge cyan
- Completada: Badge verde
- Cancelada: Badge gris

---

### 5. Propuestas (`/dashboard/proposals`)

**Layout:**
- 📊 **4 Stats Cards**: Total, Enviadas, Aceptadas, Valor Total
- 📄 **Lista de propuestas** con cards:
  - Icono de documento en círculo azul claro
  - Título de la propuesta
  - Cliente
  - Badge de estado
  - Descripción
  - Métricas: Valor, Servicios, Validez
  - Botones de acción

**Estados de Propuesta:**
- Borrador: Gris outline
- Enviada: Amarillo
- Aceptada: Verde
- Rechazada: Rojo
- Expirada: Gris

**Sección de Desglose:**
- Lista de servicios con:
  - Nombre del servicio
  - Descripción
  - Cantidad × Precio unitario
  - Total

---

### 6. Oportunidades IA (`/dashboard/ai-opportunities`)

**Diseño Especial:**
- ✨ **Header con icono de estrella** grande
- 📊 **4 Stats Cards** con métricas de IA
- 🎯 **Cards de oportunidades** con gradiente sutil:
  - Icono de categoría en círculo con gradiente
  - Título de la oportunidad
  - Cliente
  - 2 Badges: Estado + Impacto
  - Descripción
  - **3 Mini-cards** con métricas:
    - Valor Estimado (verde)
    - Ahorro de Tiempo (cyan)
    - Impacto Score (azul)
  - Botones de acción contextuales

**Categorías con Iconos:**
- Chatbot: Icono de mensaje (azul)
- Automatización: Icono de rayo (amarillo)
- Analytics: Icono de gráfico (verde)
- CRM: Icono de base de datos (morado)
- Inventario: Icono de base de datos (naranja)
- Otros: Icono de bombilla (gris)

**Sección de Categorías:**
- Grid de 3 columnas
- Cards con icono + nombre + contador

---

## 🎨 Paleta de Colores Completa

### Colores Principales
```
Azul Principal:    #3B82F6  (rgb(59, 130, 246))
Verde Éxito:       #10B981  (rgb(16, 185, 129))
Amarillo Warning:  #F59E0B  (rgb(245, 158, 11))
Rojo Destructivo:  #EF4444  (rgb(239, 68, 68))
Cyan Info:         #06B6D4  (rgb(6, 182, 212))
```

### Colores de Fondo
```
Fondo Principal:   #FAFAFA  (gris muy claro)
Card Background:   #FFFFFF  (blanco)
Muted Background:  #F3F4F6  (gris claro)
```

### Colores de Texto
```
Texto Principal:   #111827  (casi negro)
Texto Secundario:  #6B7280  (gris medio)
Texto Muted:       #9CA3AF  (gris claro)
```

---

## 🖼️ Componentes Visuales Clave

### StatCard
```
┌─────────────────────────────┐
│ Título (gris)               │
│ 42 (número grande, bold)    │
│ +12% vs mes anterior (verde)│
│                    [Icono]  │
└─────────────────────────────┘
```

### Badge
```
┌──────────┐
│ ● Estado │  (redondeado, color según tipo)
└──────────┘
```

### Card con Hover
```
┌─────────────────────────────┐
│                             │  ← Sombra suave
│  Contenido                  │  ← Hover: sombra más fuerte
│                             │  ← Hover: translateY(-4px)
└─────────────────────────────┘
```

### Tabla Interactiva
```
┌──────────┬──────────┬──────────┬──────────┐
│ Empresa  │ Contacto │ Plan     │ Acciones │
├──────────┼──────────┼──────────┼──────────┤
│ Nombre   │ Email    │ [Badge]  │   ⋮      │  ← Hover: fondo gris claro
│ Tipo     │ Persona  │          │          │
└──────────┴──────────┴──────────┴──────────┘
```

---

## 📱 Responsive Breakpoints

### Mobile (< 768px)
- Sidebar oculto (menú hamburguesa)
- Stats en 1 columna
- Tabla con scroll horizontal
- Cards apiladas verticalmente

### Tablet (768px - 1024px)
- Sidebar colapsable
- Stats en 2 columnas
- Tabla completa visible
- Cards en 2 columnas

### Desktop (> 1024px)
- Sidebar fijo visible
- Stats en 4 columnas
- Tabla completa con todas las columnas
- Cards en 2-3 columnas según sección

---

## ✨ Microinteracciones

1. **Hover en Cards**: Elevación con sombra
2. **Hover en Botones**: Cambio de opacidad
3. **Hover en Filas de Tabla**: Fondo gris claro
4. **Click en Tabs**: Transición suave
5. **Badges**: Colores vibrantes con buen contraste
6. **Iconos**: Tamaño consistente (16px-24px)

---

## 🎯 Jerarquía Visual

### Nivel 1: Títulos de Página
- Font: 30px, Bold
- Color: #111827

### Nivel 2: Títulos de Card
- Font: 20px, Semibold
- Color: #111827

### Nivel 3: Subtítulos
- Font: 14px, Medium
- Color: #6B7280

### Nivel 4: Texto Normal
- Font: 14px, Regular
- Color: #6B7280

### Nivel 5: Texto Pequeño
- Font: 12px, Regular
- Color: #9CA3AF

---

**El sistema está diseñado para ser visualmente impresionante y profesional en cada pantalla.**

