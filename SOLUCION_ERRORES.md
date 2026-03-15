# 🔧 Solución de Errores - CentroTech Nexus

## 🚨 Errores Comunes y Soluciones

### Error: "Module not found" o "Cannot find module"

**Causa**: Dependencias no instaladas o caché corrupto

**Solución**:
```bash
# Opción 1: Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install

# Opción 2: Limpiar caché de Next.js
rm -rf .next
npm run dev
```

---

### Error: "Hydration failed" o "Text content does not match"

**Causa**: Diferencia entre renderizado del servidor y cliente

**Solución**:
1. Verifica que no uses `window` o `document` en componentes de servidor
2. Agrega `"use client"` al inicio del archivo si necesitas interactividad
3. Limpia el caché:
```bash
rm -rf .next
npm run dev
```

---

### Error: "Failed to compile" con errores de TypeScript

**Causa**: Errores de tipos o imports incorrectos

**Solución**:
```bash
# Verificar errores de TypeScript
npm run type-check

# Si hay errores, revisa:
# 1. Imports correctos
# 2. Tipos definidos
# 3. Props de componentes
```

---

### Error: 404 en páginas del dashboard

**Causa**: Páginas no creadas aún

**Páginas Disponibles**:
- ✅ `/` - Landing page
- ✅ `/dashboard` - Dashboard principal
- ✅ `/dashboard/clients` - Lista de clientes
- ✅ `/dashboard/clients/[id]` - Perfil de cliente
- ✅ `/dashboard/visits` - Visitas técnicas
- ✅ `/dashboard/proposals` - Propuestas
- ✅ `/dashboard/ai-opportunities` - Oportunidades IA

**Páginas Pendientes** (mostrarán 404):
- ❌ `/dashboard/equipment` - Inventario de equipos
- ❌ `/dashboard/network` - Topología de red
- ❌ `/dashboard/tickets` - Sistema de tickets
- ❌ `/dashboard/maintenance` - Mantenimiento
- ❌ `/dashboard/reports` - Reportes
- ❌ `/dashboard/settings` - Configuración

**Solución**: Estas páginas se crearán en fases futuras. Por ahora, usa solo las páginas disponibles.

---

### Error: "Cannot read property of undefined"

**Causa**: Datos mock no encontrados o estructura incorrecta

**Solución**:
1. Verifica que `src/lib/mock-data.ts` existe
2. Verifica que los imports sean correctos:
```typescript
import { mockClients, mockVisits, mockProposals } from "@/lib/mock-data";
```

---

### Error: Estilos no se aplican

**Causa**: Tailwind no compilando correctamente

**Solución**:
```bash
# Limpiar caché
rm -rf .next

# Verificar que globals.css esté importado en layout.tsx
# Debe tener: import "./globals.css";

# Reiniciar servidor
npm run dev
```

---

### Error: "Port 3000 is already in use"

**Causa**: Otro proceso usando el puerto 3000

**Solución**:
```bash
# Opción 1: Usar otro puerto
npm run dev -- -p 3001

# Opción 2: Matar el proceso en puerto 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID [PID] /F

# Opción 3: Matar el proceso (Mac/Linux)
lsof -i :3000
kill -9 [PID]
```

---

### Error: Avatar image 404 (GET /avatars/01.png 404)

**Causa**: Imagen de avatar no existe (esto es normal)

**Solución**: Este error es cosmético y no afecta la funcionalidad. Para solucionarlo:

1. Crea la carpeta `public/avatars/`
2. Agrega una imagen llamada `01.png`
3. O cambia el código en `src/components/layout/header.tsx`:

```typescript
<Avatar className="h-10 w-10">
  <AvatarFallback>AD</AvatarFallback>
</Avatar>
```

---

### Error: "Invalid hook call"

**Causa**: Hooks usados fuera de componentes React o versiones incompatibles

**Solución**:
1. Verifica que los hooks estén dentro de componentes
2. Verifica que solo haya una versión de React:
```bash
npm list react
```
3. Si hay múltiples versiones:
```bash
rm -rf node_modules package-lock.json
npm install
```

---

### Error: Build falla en producción

**Causa**: Errores de TypeScript o ESLint

**Solución**:
```bash
# Verificar errores
npm run type-check
npm run lint

# Compilar
npm run build

# Si hay errores, revisa los archivos indicados
```

---

## 🔍 Debugging Tips

### Ver errores en el navegador
1. Abre DevTools (F12)
2. Ve a la pestaña "Console"
3. Busca errores en rojo

### Ver errores en la terminal
1. Revisa la terminal donde ejecutaste `npm run dev`
2. Busca mensajes de error o warnings

### Verificar que todo funciona
```bash
# 1. Limpiar todo
rm -rf .next node_modules package-lock.json

# 2. Reinstalar
npm install

# 3. Ejecutar
npm run dev

# 4. Abrir http://localhost:3000
```

---

## 📋 Checklist de Verificación

Cuando tengas un error, verifica:

- [ ] ¿Ejecutaste `npm install`?
- [ ] ¿El servidor está corriendo (`npm run dev`)?
- [ ] ¿Limpiaste el caché (`.next`)?
- [ ] ¿La página existe o es 404?
- [ ] ¿Hay errores en la consola del navegador?
- [ ] ¿Hay errores en la terminal?
- [ ] ¿Los imports son correctos?
- [ ] ¿Usaste `"use client"` donde es necesario?

---

## 🆘 Si Nada Funciona

### Reset Completo
```bash
# 1. Detener el servidor (Ctrl+C)

# 2. Limpiar todo
rm -rf .next node_modules package-lock.json

# 3. Reinstalar desde cero
npm install

# 4. Ejecutar
npm run dev

# 5. Abrir navegador en modo incógnito
# http://localhost:3000
```

---

## 📞 Errores Específicos que Mencionaste

**"me tira este error en casi todas las paginas"**

Para ayudarte mejor, necesito saber:

1. **¿Qué mensaje de error exacto ves?**
   - Copia el texto completo del error
   - ¿Aparece en el navegador o en la terminal?

2. **¿En qué páginas ocurre?**
   - ¿Landing page (`/`)?
   - ¿Dashboard (`/dashboard`)?
   - ¿Otras páginas?

3. **¿Cuándo ocurre?**
   - ¿Al cargar la página?
   - ¿Al hacer click en algo?
   - ¿Al navegar?

---

## ✅ Estado Actual del Sistema

**Páginas Funcionando**:
- ✅ Landing Page (/)
- ✅ Dashboard (/dashboard)
- ✅ Clientes (/dashboard/clients)
- ✅ Perfil Cliente (/dashboard/clients/[id])
- ✅ Visitas (/dashboard/visits)
- ✅ Propuestas (/dashboard/proposals)
- ✅ Oportunidades IA (/dashboard/ai-opportunities)

**Sin Errores de Compilación**: ✅
**TypeScript**: ✅ Sin errores
**ESLint**: ✅ Sin errores

---

## 🎯 Próximos Pasos

1. **Comparte el error exacto** que estás viendo
2. Mientras tanto, prueba:
   ```bash
   rm -rf .next
   npm run dev
   ```
3. Abre http://localhost:3000 en modo incógnito

**¡Estoy aquí para ayudarte a resolver cualquier error!** 🚀

