# 🔍 Cómo Ver el Botón de Cambio de Tema

## ⚠️ IMPORTANTE: Puerto Correcto

Tu servidor está corriendo en el **puerto 3001** (no 3000).

### ✅ URL Correcta:
```
http://localhost:3001/dashboard
```

### ❌ URL Incorrecta:
```
http://localhost:3000/dashboard  ← NO uses esta
```

---

## 🎯 Pasos para Ver el Botón

### 1. Abre la URL Correcta

Abre tu navegador en:
```
http://localhost:3001/dashboard
```

### 2. Haz Hard Refresh

Para asegurarte de que cargue los cambios más recientes:

**Windows/Linux:**
- Presiona `Ctrl + Shift + R`
- O `Ctrl + F5`

**Mac:**
- Presiona `Cmd + Shift + R`

### 3. Busca el Botón

El botón está en el **header**, arriba a la derecha.

**Ahora se ve así (MUY VISIBLE):**

```
┌────────────────────────────────────────────────────┐
│                                                    │
│  [🔍]  ┌─────────────────────┐  [🔔]  [👤]       │
│        │ Tema: [☀️ ●─── 🌙] │                    │
│        └─────────────────────┘                    │
│                ↑                                   │
│           AQUÍ ESTÁ                                │
└────────────────────────────────────────────────────┘
```

**Características visuales:**
- ✅ Tiene un **borde azul claro**
- ✅ Tiene **fondo azul muy claro**
- ✅ Dice **"Tema:"** antes del switch
- ✅ Tiene el switch con **☀️** y **🌙**

---

## 🔧 Si Aún No Lo Ves

### Opción 1: Reiniciar el Servidor

```bash
# En la terminal, presiona Ctrl+C para detener
# Luego ejecuta:
npm run dev
```

Espera a que diga:
```
✓ Ready in X.Xs
```

Luego abre: http://localhost:3001/dashboard

### Opción 2: Limpiar Caché

```bash
# Detén el servidor (Ctrl+C)
# Ejecuta:
rm -rf .next
npm run dev
```

### Opción 3: Modo Incógnito

Abre el navegador en **modo incógnito** y ve a:
```
http://localhost:3001/dashboard
```

---

## 📸 Cómo Debería Verse

### En el Header (arriba):

```
┌──────────────────────────────────────────────────────────┐
│  CentroTech Nexus                                        │
│                                                          │
│  [🔍 Buscar...]  ┌──────────────────┐  [🔔]  [👤 AD]   │
│                  │ Tema: ☀️ ●─── 🌙 │                   │
│                  └──────────────────┘                   │
│                         ↑                                │
│                    ESTE ES EL                            │
│                  BOTÓN DE TEMA                           │
└──────────────────────────────────────────────────────────┘
```

### Detalles del Botón:

1. **Borde:** Azul claro visible
2. **Fondo:** Azul muy claro
3. **Texto:** "Tema:" en gris
4. **Switch:** Con sol (☀️) y luna (🌙)
5. **Círculo blanco:** Se desliza al hacer click

---

## 🎨 Estados del Botón

### Modo Claro (Default):
```
┌──────────────────┐
│ Tema: ☀️ ●─── 🌙 │
│       ↑          │
│    Amarillo      │
└──────────────────┘
```

### Modo Oscuro:
```
┌──────────────────┐
│ Tema: ☀️ ───● 🌙 │
│           ↑      │
│         Azul     │
└──────────────────┘
```

---

## 🖱️ Cómo Usarlo

1. **Encuentra el botón** (con borde azul que dice "Tema:")
2. **Click en cualquier parte** del switch
3. **Observa** cómo el círculo se desliza
4. **El tema cambia** instantáneamente

---

## 🔍 Verificación Paso a Paso

### Paso 1: Verifica el Puerto
```bash
# En la terminal, deberías ver:
Local: http://localhost:3001
```

### Paso 2: Abre el Navegador
```
http://localhost:3001/dashboard
```

### Paso 3: Busca en el Header
- Mira arriba a la derecha
- Busca un rectángulo con borde azul
- Debe decir "Tema:" seguido del switch

### Paso 4: Si No Lo Ves
- Haz scroll hacia arriba (por si estás abajo)
- Haz zoom out (Ctrl + -) para ver más
- Maximiza la ventana del navegador

---

## 📱 En Móvil/Tablet

Si estás en una pantalla pequeña:
- El botón podría estar oculto
- Haz la ventana más grande
- O rota el dispositivo a horizontal

---

## 🐛 Troubleshooting

### Problema: "No veo nada diferente"

**Solución:**
```bash
# 1. Detén el servidor (Ctrl+C)
# 2. Limpia caché
rm -rf .next
# 3. Reinicia
npm run dev
# 4. Abre en incógnito
http://localhost:3001/dashboard
```

### Problema: "Veo el header pero no el botón"

**Solución:**
- Verifica que estés en `/dashboard` (no en `/`)
- Haz hard refresh (Ctrl+Shift+R)
- Revisa la consola del navegador (F12) por errores

### Problema: "El servidor no inicia"

**Solución:**
```bash
# Mata procesos en puerto 3000 y 3001
# Windows:
netstat -ano | findstr :3000
taskkill /PID [PID] /F

# Luego:
npm run dev
```

---

## ✅ Checklist de Verificación

- [ ] Servidor corriendo en puerto 3001
- [ ] Navegador abierto en http://localhost:3001/dashboard
- [ ] Hard refresh hecho (Ctrl+Shift+R)
- [ ] Buscando en el header (arriba a la derecha)
- [ ] Ventana del navegador maximizada

---

## 📞 Si Aún No Lo Ves

Toma una captura de pantalla de tu header y compártela.

O describe qué ves en el header:
- ¿Ves la barra de búsqueda?
- ¿Ves el icono de campana (notificaciones)?
- ¿Ves el avatar del usuario?
- ¿Qué hay entre la búsqueda y la campana?

---

## 🎯 Resumen

**URL:** http://localhost:3001/dashboard
**Ubicación:** Header → Arriba a la derecha
**Apariencia:** Rectángulo con borde azul que dice "Tema:"
**Acción:** Click para cambiar entre claro y oscuro

---

**¡El botón está ahí y es MUY visible ahora!** 🎨✨

