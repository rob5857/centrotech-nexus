# 🎨 Popup de Selección de Tema

## ✅ IMPLEMENTADO

Popup elegante que aparece al cargar la página por primera vez para que el usuario elija su tema preferido.

---

## 🎯 Características

### ✅ Primera Visita
- Aparece automáticamente al cargar la página
- Solo se muestra la primera vez
- Delay de 500ms para mejor UX
- No interrumpe la navegación

### ✅ Diseño Elegante
- Logo de CentroTech
- 2 opciones grandes y claras
- Iconos animados (Sol y Luna)
- Efectos hover
- Gradientes de color
- Responsive

### ✅ Funcionalidad
- Click en "Modo Claro" → Tema claro
- Click en "Modo Oscuro" → Tema oscuro
- Guarda preferencia en localStorage
- No vuelve a aparecer
- Cierre automático al seleccionar

---

## 🎨 Cómo Se Ve

### Popup de Bienvenida

```
┌─────────────────────────────────┐
│                                 │
│         ✨ (Logo)               │
│                                 │
│  ¡Bienvenido a CentroTech Nexus!│
│  Elige tu tema preferido        │
│                                 │
│  ┌──────────┐  ┌──────────┐    │
│  │    ☀️    │  │    🌙    │    │
│  │          │  │          │    │
│  │   Modo   │  │   Modo   │    │
│  │  Claro   │  │  Oscuro  │    │
│  │          │  │          │    │
│  │ Ideal    │  │ Ideal    │    │
│  │ para el  │  │ para la  │    │
│  │   día    │  │  noche   │    │
│  └──────────┘  └──────────┘    │
│                                 │
│  Puedes cambiar el tema en      │
│  cualquier momento desde el     │
│  header                         │
└─────────────────────────────────┘
```

---

## 🚀 Cómo Funciona

### Primera Visita:

1. **Usuario carga la página**
   ```
   http://localhost:3001
   ```

2. **Espera 500ms** (para que cargue todo)

3. **Popup aparece** con animación

4. **Usuario elige tema:**
   - Click en "Modo Claro" → Tema claro
   - Click en "Modo Oscuro" → Tema oscuro

5. **Popup se cierra** automáticamente

6. **Preferencia guardada** en localStorage

### Visitas Siguientes:

1. **Usuario carga la página**

2. **Sistema verifica** localStorage

3. **Encuentra preferencia** guardada

4. **Popup NO aparece** ✅

5. **Tema se aplica** automáticamente

---

## 🎨 Detalles de Diseño

### Modo Claro (Sol)

```
┌──────────────┐
│   ┌────┐     │
│   │ ☀️ │     │ ← Gradiente naranja-amarillo
│   └────┘     │
│              │
│  Modo Claro  │
│              │
│ Ideal para   │
│   el día     │
└──────────────┘
```

**Características:**
- Gradiente: Naranja → Amarillo
- Icono: Sol (☀️)
- Hover: Escala 110%
- Borde: Cambia a primary

### Modo Oscuro (Luna)

```
┌──────────────┐
│   ┌────┐     │
│   │ 🌙 │     │ ← Gradiente azul-morado
│   └────┘     │
│              │
│ Modo Oscuro  │
│              │
│ Ideal para   │
│  la noche    │
└──────────────┘
```

**Características:**
- Gradiente: Azul → Morado
- Icono: Luna (🌙)
- Hover: Escala 110%
- Borde: Cambia a primary

---

## 💾 Almacenamiento

### LocalStorage

```javascript
// Cuando el usuario elige un tema:
localStorage.setItem("theme-selected", "true");

// Al cargar la página:
const hasSelectedTheme = localStorage.getItem("theme-selected");

if (!hasSelectedTheme) {
  // Mostrar popup
} else {
  // No mostrar popup
}
```

---

## 🔄 Resetear Preferencia

### Para Probar el Popup Nuevamente:

**Opción 1: DevTools**
1. Abre DevTools (F12)
2. Ve a "Application" → "Local Storage"
3. Encuentra "theme-selected"
4. Click derecho → Delete
5. Recarga la página (F5)
6. ¡Popup aparece de nuevo!

**Opción 2: Consola**
```javascript
localStorage.removeItem("theme-selected");
location.reload();
```

**Opción 3: Borrar Todo**
```javascript
localStorage.clear();
location.reload();
```

---

## 🎯 Flujo Completo

### Primera Vez:

```
1. Usuario visita la página
   ↓
2. Página carga (500ms)
   ↓
3. Popup aparece con animación
   ↓
4. Usuario ve 2 opciones:
   - Modo Claro (☀️)
   - Modo Oscuro (🌙)
   ↓
5. Usuario hace click en uno
   ↓
6. Tema se aplica inmediatamente
   ↓
7. Preferencia se guarda
   ↓
8. Popup se cierra
   ↓
9. Usuario continúa navegando
```

### Próximas Visitas:

```
1. Usuario visita la página
   ↓
2. Sistema verifica localStorage
   ↓
3. Encuentra "theme-selected": true
   ↓
4. Popup NO aparece
   ↓
5. Tema guardado se aplica
   ↓
6. Usuario continúa navegando
```

---

## 🎨 Animaciones

### Entrada del Popup:
- Fade in (opacidad)
- Scale in (tamaño)
- Duración: 300ms

### Hover en Botones:
- Escala del icono: 110%
- Borde: Cambia a primary
- Overlay con gradiente
- Sombra aumenta

### Cierre del Popup:
- Fade out
- Scale out
- Duración: 200ms

---

## 📱 Responsive

### Móvil (< 640px):
```
┌─────────────┐
│   ✨ Logo   │
│             │
│ Bienvenido  │
│             │
│ ┌─────────┐ │
│ │   ☀️    │ │
│ │  Claro  │ │
│ └─────────┘ │
│             │
│ ┌─────────┐ │
│ │   🌙    │ │
│ │ Oscuro  │ │
│ └─────────┘ │
└─────────────┘
```
- Botones apilados verticalmente
- Ancho completo

### Desktop (> 640px):
```
┌───────────────────────┐
│      ✨ Logo          │
│                       │
│    Bienvenido         │
│                       │
│ ┌────────┐ ┌────────┐│
│ │   ☀️   │ │   🌙   ││
│ │ Claro  │ │ Oscuro ││
│ └────────┘ └────────┘│
└───────────────────────┘
```
- Botones lado a lado
- Grid de 2 columnas

---

## 🔧 Personalización

### Cambiar Delay

Edita `src/components/theme-selector-popup.tsx`:

```typescript
// Línea 24
setTimeout(() => {
  setOpen(true);
}, 500); // Cambia 500 a los ms que quieras
```

### Cambiar Colores

```typescript
// Modo Claro (línea 68)
from-orange-400 to-yellow-400  // Cambia los colores

// Modo Oscuro (línea 86)
from-blue-600 to-purple-600    // Cambia los colores
```

### Forzar Mostrar Siempre

```typescript
// Línea 21 - Comenta esta línea:
// const hasSelectedTheme = localStorage.getItem("theme-selected");

// Línea 23 - Cambia a:
if (true) {  // Siempre muestra el popup
```

---

## 📁 Archivos Creados

### Nuevo Componente:
```
✅ src/components/theme-selector-popup.tsx
   - Popup de selección de tema
   - Lógica de primera visita
   - Animaciones y diseño
```

### Modificado:
```
✅ src/app/layout.tsx
   - Importa ThemeSelectorPopup
   - Agrega componente al layout
```

---

## ✅ Verificación

### Prueba el Popup:

1. **Primera Vez**
   - [ ] Abre http://localhost:3001
   - [ ] Espera 500ms
   - [ ] Popup aparece
   - [ ] Click en "Modo Claro"
   - [ ] Tema cambia
   - [ ] Popup se cierra

2. **Segunda Vez**
   - [ ] Recarga la página (F5)
   - [ ] Popup NO aparece
   - [ ] Tema guardado se aplica

3. **Resetear**
   - [ ] Abre DevTools (F12)
   - [ ] Application → Local Storage
   - [ ] Borra "theme-selected"
   - [ ] Recarga (F5)
   - [ ] Popup aparece de nuevo

---

## 💡 Tips

### Ver el Popup Nuevamente:
```javascript
// En la consola del navegador:
localStorage.removeItem("theme-selected");
location.reload();
```

### Cambiar Tema Después:
- Usa el selector en el header
- El popup no volverá a aparecer
- La preferencia se actualiza

### Modo Incógnito:
- El popup aparece siempre
- No se guarda la preferencia
- Perfecto para probar

---

## 🎉 Resultado Final

**Popup de Tema:**
- ✅ Aparece en primera visita
- ✅ Diseño elegante
- ✅ 2 opciones claras
- ✅ Animaciones suaves
- ✅ Guarda preferencia
- ✅ No vuelve a aparecer
- ✅ Responsive
- ✅ Fácil de usar

**Experiencia de Usuario:**
- ✅ Bienvenida personalizada
- ✅ Elección clara
- ✅ No intrusivo
- ✅ Profesional

---

**¡Popup de selección de tema implementado!** 🎨✨

**Prueba ahora:**
1. Borra localStorage (F12 → Application)
2. Recarga la página
3. ¡Ve el popup en acción!

