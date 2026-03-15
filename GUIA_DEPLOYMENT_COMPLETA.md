# 🚀 Guía Completa: Deployment en Vercel con Supabase

## 📋 Índice
1. [Configurar Supabase](#1-configurar-supabase)
2. [Configurar Variables de Entorno](#2-configurar-variables-de-entorno)
3. [Preparar para Deployment](#3-preparar-para-deployment)
4. [Deploy en Vercel](#4-deploy-en-vercel)
5. [Verificar Funcionamiento](#5-verificar-funcionamiento)

---

## 1. Configurar Supabase

### Paso 1.1: Crear Cuenta en Supabase

1. Ve a [https://supabase.com](https://supabase.com)
2. Click en "Start your project"
3. Crea una cuenta (puedes usar GitHub)
4. Verifica tu email

### Paso 1.2: Crear Nuevo Proyecto

1. Click en "New Project"
2. Completa:
   - **Name**: `centrotech-nexus`
   - **Database Password**: (guarda esta contraseña en un lugar seguro)
   - **Region**: `East US (North Virginia)` (más cercano a PR)
   - **Pricing Plan**: `Free` (para empezar)
3. Click en "Create new project"
4. **Espera 2-3 minutos** mientras se crea el proyecto

### Paso 1.3: Ejecutar el Schema SQL

1. En el dashboard de Supabase, ve a **SQL Editor** (menú izquierdo)
2. Click en "New query"
3. Abre el archivo `supabase/schema.sql` de tu proyecto
4. **Copia TODO el contenido** (Ctrl+A, Ctrl+C)
5. **Pégalo** en el editor de Supabase (Ctrl+V)
6. Click en **"Run"** (o presiona Ctrl+Enter)
7. Deberías ver: ✅ "Success. No rows returned"

### Paso 1.4: Verificar las Tablas

1. Ve a **Table Editor** (menú izquierdo)
2. Deberías ver estas tablas:
   - ✅ clients
   - ✅ equipment
   - ✅ visits
   - ✅ proposals
   - ✅ proposal_services
   - ✅ tickets
   - ✅ ai_opportunities
   - ✅ network_topology
   - ✅ maintenance_schedule
   - ✅ **consultation_requests** ← NUEVA
   - ✅ **contact_messages** ← NUEVA

### Paso 1.5: Obtener las Credenciales

1. Ve a **Settings** → **API** (menú izquierdo)
2. Copia estos valores:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon public key**: `eyJhbGc...` (clave muy larga)
3. **Guárdalos en un lugar seguro** (los necesitarás después)

---

## 2. Configurar Variables de Entorno

### Paso 2.1: Crear .env.local (Local)

En la raíz del proyecto:

```bash
# Crea el archivo
touch .env.local
```

O créalo manualmente.

### Paso 2.2: Editar .env.local

Abre `.env.local` y pega:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key-aqui

# JWT Secret (genera uno aleatorio)
JWT_SECRET=tu-clave-secreta-super-segura-cambiala-en-produccion
```

**⚠️ IMPORTANTE:**
- Reemplaza `https://tu-proyecto.supabase.co` con TU URL de Supabase
- Reemplaza `tu-anon-key-aqui` con TU anon key de Supabase
- Cambia `JWT_SECRET` por una clave aleatoria segura

### Paso 2.3: Activar Supabase en el Código

Abre `src/lib/supabase.ts` y:

1. **Elimina** estas líneas:
```typescript
// Temporary placeholder until Supabase is configured
export const supabase = null;
```

2. **Descomenta** estas líneas (quita los `/*` y `*/`):
```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

### Paso 2.4: Reiniciar el Servidor

```bash
# Detén el servidor (Ctrl+C)
npm run dev
```

---

## 3. Preparar para Deployment

### Paso 3.1: Verificar que Todo Funciona Localmente

1. **Prueba los Formularios:**
   - Ve a http://localhost:3001
   - Click en "Solicitar Consultoría"
   - Completa y envía
   - Verifica en Supabase → Table Editor → consultation_requests
   - ¡Deberías ver tu solicitud!

2. **Prueba el Login:**
   - Ve a http://localhost:3001/login
   - Usa: `admin@centrotech.pr` / `admin123`
   - Verifica que accedas al dashboard

### Paso 3.2: Crear Repositorio en GitHub

1. **Inicializar Git** (si no lo has hecho):
```bash
git init
git add .
git commit -m "Initial commit: CentroTech Nexus"
```

2. **Crear Repositorio en GitHub:**
   - Ve a [github.com](https://github.com)
   - Click en "New repository"
   - Nombre: `centrotech-nexus`
   - Descripción: "Sistema de Gestión de Servicios IT"
   - **NO** marques "Initialize with README"
   - Click en "Create repository"

3. **Subir el Código:**
```bash
git remote add origin https://github.com/tu-usuario/centrotech-nexus.git
git branch -M main
git push -u origin main
```

---

## 4. Deploy en Vercel

### Paso 4.1: Crear Cuenta en Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Click en "Sign Up"
3. **Usa tu cuenta de GitHub** (recomendado)
4. Autoriza Vercel

### Paso 4.2: Importar Proyecto

1. En Vercel, click en "New Project"
2. Busca tu repositorio `centrotech-nexus`
3. Click en "Import"

### Paso 4.3: Configurar el Proyecto

1. **Framework Preset**: Next.js (detectado automáticamente)
2. **Root Directory**: `./`
3. **Build Command**: `npm run build` (por defecto)
4. **Output Directory**: `.next` (por defecto)

### Paso 4.4: Configurar Variables de Entorno

**⚠️ MUY IMPORTANTE:**

1. En la sección "Environment Variables", agrega:

```
Name: NEXT_PUBLIC_SUPABASE_URL
Value: https://tu-proyecto.supabase.co
```

2. Click "Add"

3. Agrega:
```
Name: NEXT_PUBLIC_SUPABASE_ANON_KEY
Value: tu-anon-key-de-supabase
```

4. Click "Add"

5. Agrega:
```
Name: JWT_SECRET
Value: tu-clave-secreta-super-segura
```

6. Click "Add"

### Paso 4.5: Deploy

1. Click en **"Deploy"**
2. Espera 2-3 minutos mientras Vercel:
   - Instala dependencias
   - Compila el proyecto
   - Optimiza assets
   - Despliega

3. ¡Verás confeti cuando termine! 🎉

### Paso 4.6: Obtener la URL

Vercel te dará una URL como:
```
https://centrotech-nexus.vercel.app
```

O puedes configurar un dominio personalizado.

---

## 5. Verificar Funcionamiento

### Paso 5.1: Probar la Aplicación

1. **Abre tu URL de Vercel:**
   ```
   https://centrotech-nexus.vercel.app
   ```

2. **Prueba el Popup de Tema:**
   - Debería aparecer al cargar
   - Elige un tema

3. **Prueba "Solicitar Consultoría":**
   - Click en el botón
   - Completa el formulario
   - Envía
   - Verifica confirmación

4. **Verifica en Supabase:**
   - Ve a Supabase → Table Editor
   - Tabla: `consultation_requests`
   - ¡Deberías ver la solicitud!

5. **Prueba "Contactar Ahora":**
   - Scroll abajo
   - Click en "Contactar Ahora"
   - Completa y envía
   - Verifica en tabla `contact_messages`

6. **Prueba el Login:**
   - Ve a `/login`
   - Usa: `admin@centrotech.pr` / `admin123`
   - Accede al dashboard
   - Navega por las páginas

### Paso 5.2: Verificar Datos en Supabase

1. Ve a Supabase Dashboard
2. Table Editor → `consultation_requests`
3. Deberías ver las solicitudes de consultoría
4. Table Editor → `contact_messages`
5. Deberías ver los mensajes de contacto

---

## 6. Configuración Adicional (Opcional)

### Dominio Personalizado

1. En Vercel, ve a tu proyecto
2. Settings → Domains
3. Add Domain
4. Sigue las instrucciones

### Notificaciones por Email

Para recibir emails cuando alguien envía un formulario:

1. **Opción 1: Supabase Database Webhooks**
   - Supabase → Database → Webhooks
   - Configura webhook a tu servicio de email

2. **Opción 2: Resend (Recomendado)**
   ```bash
   npm install resend
   ```
   - Crea cuenta en [resend.com](https://resend.com)
   - Agrega API key a variables de entorno
   - Actualiza las APIs para enviar emails

---

## 7. Troubleshooting

### Error: "Invalid API key"
- Verifica que las credenciales en Vercel sean correctas
- Asegúrate de usar las variables de entorno correctas

### Error: "relation does not exist"
- Ejecuta el schema SQL en Supabase
- Verifica que las tablas se crearon

### Deploy falla en Vercel
- Verifica que las variables de entorno estén configuradas
- Revisa los logs en Vercel dashboard
- Asegúrate de que el build funcione localmente

### Formularios no guardan
- Verifica que Supabase esté configurado
- Revisa la consola del navegador (F12)
- Verifica las políticas RLS en Supabase

---

## 8. Checklist Final

### Supabase
- [ ] Proyecto creado
- [ ] Schema SQL ejecutado
- [ ] 11 tablas creadas
- [ ] Credenciales copiadas

### Local
- [ ] .env.local configurado
- [ ] Supabase activado en código
- [ ] Formularios funcionan
- [ ] Login funciona

### GitHub
- [ ] Repositorio creado
- [ ] Código subido
- [ ] .env.local en .gitignore

### Vercel
- [ ] Proyecto importado
- [ ] Variables de entorno configuradas
- [ ] Deploy exitoso
- [ ] URL funcionando

### Verificación
- [ ] Popup de tema funciona
- [ ] Formularios guardan en Supabase
- [ ] Login funciona
- [ ] Dashboard accesible
- [ ] Todas las páginas cargan

---

## 9. Próximos Pasos

### Mejoras Recomendadas:

1. **Notificaciones por Email**
   - Resend o SendGrid
   - Email al equipo cuando llega solicitud
   - Auto-respuesta al cliente

2. **Analytics**
   - Google Analytics
   - Vercel Analytics
   - Tracking de conversiones

3. **SEO**
   - Meta tags
   - Sitemap
   - robots.txt

4. **Performance**
   - Optimización de imágenes
   - Lazy loading
   - Caching

---

## ✅ Resumen

**Configuración Completa:**
- ✅ Supabase configurado
- ✅ 11 tablas creadas
- ✅ Formularios funcionales
- ✅ APIs creadas
- ✅ Deploy en Vercel
- ✅ Variables de entorno
- ✅ Todo funcionando

**URLs Importantes:**
- Supabase: https://app.supabase.com
- Vercel: https://vercel.com/dashboard
- Tu App: https://centrotech-nexus.vercel.app

---

**¡Tu aplicación está en producción!** 🚀✨

