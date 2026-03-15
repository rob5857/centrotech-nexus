# ⚡ Deployment Rápido - 15 Minutos

## 🎯 Guía Express para Deploy en Vercel + Supabase

---

## 📋 Checklist Rápido

- [ ] Cuenta en Supabase
- [ ] Cuenta en Vercel (con GitHub)
- [ ] Cuenta en GitHub
- [ ] Código listo

---

## 🚀 Paso 1: Supabase (5 minutos)

### 1.1 Crear Proyecto
```
1. Ve a supabase.com
2. New Project
3. Nombre: centrotech-nexus
4. Password: (guarda bien)
5. Region: East US
6. Create
```

### 1.2 Ejecutar SQL
```
1. SQL Editor → New query
2. Copia TODO de: supabase/schema.sql
3. Pega en editor
4. Run
5. ✅ Success
```

### 1.3 Copiar Credenciales
```
Settings → API

Copia:
- Project URL: https://xxxxx.supabase.co
- anon key: eyJhbGc...
```

---

## 💻 Paso 2: Código Local (3 minutos)

### 2.1 Crear .env.local
```env
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key
JWT_SECRET=clave-secreta-aleatoria
```

### 2.2 Activar Supabase

Edita `src/lib/supabase.ts`:

**Borra:**
```typescript
export const supabase = null;
```

**Descomenta:**
```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

### 2.3 Probar Local
```bash
npm run dev
```

Prueba:
- http://localhost:3001
- Solicitar Consultoría
- Verifica en Supabase

---

## 📦 Paso 3: GitHub (2 minutos)

```bash
git init
git add .
git commit -m "Deploy: CentroTech Nexus"
git remote add origin https://github.com/tu-usuario/centrotech-nexus.git
git push -u origin main
```

---

## 🌐 Paso 4: Vercel (5 minutos)

### 4.1 Importar
```
1. vercel.com
2. New Project
3. Import centrotech-nexus
```

### 4.2 Variables de Entorno

Agrega 3 variables:

```
NEXT_PUBLIC_SUPABASE_URL = https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = tu-anon-key
JWT_SECRET = tu-clave-secreta
```

### 4.3 Deploy
```
Click "Deploy"
Espera 2-3 minutos
¡Listo! 🎉
```

---

## ✅ Verificar

### Tu App:
```
https://centrotech-nexus.vercel.app
```

### Probar:
1. Popup de tema ✅
2. Solicitar Consultoría ✅
3. Contactar Ahora ✅
4. Login ✅
5. Dashboard ✅

### Verificar Supabase:
```
Table Editor → consultation_requests
Deberías ver las solicitudes
```

---

## 🎯 Comandos Útiles

### Actualizar Deploy:
```bash
git add .
git commit -m "Update"
git push
# Vercel auto-deploya
```

### Ver Logs:
```
Vercel Dashboard → Tu Proyecto → Deployments → Logs
```

### Rollback:
```
Vercel Dashboard → Deployments → Click en deploy anterior → Promote to Production
```

---

## 🆘 Problemas Comunes

### Error: Invalid API key
```
Verifica variables de entorno en Vercel
Settings → Environment Variables
```

### Formularios no guardan
```
1. Verifica Supabase URL y Key
2. Revisa Table Editor en Supabase
3. Verifica políticas RLS
```

### Build falla
```
1. Verifica que funcione local: npm run build
2. Revisa logs en Vercel
3. Verifica variables de entorno
```

---

## 📊 Resumen

**Tiempo Total: ~15 minutos**

1. ✅ Supabase: 5 min
2. ✅ Código: 3 min
3. ✅ GitHub: 2 min
4. ✅ Vercel: 5 min

**Resultado:**
- App en producción
- Formularios funcionales
- Base de datos conectada
- URL pública

---

## 🎉 ¡Listo!

Tu app está en:
```
https://centrotech-nexus.vercel.app
```

**Próximos pasos:**
- Configura dominio personalizado
- Agrega notificaciones por email
- Configura analytics

---

**Para más detalles, lee: GUIA_DEPLOYMENT_COMPLETA.md**

