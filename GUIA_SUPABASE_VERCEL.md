# 🚀 Guía Completa: Supabase + Vercel Deployment

## 📋 Índice
1. [Configurar Supabase](#1-configurar-supabase)
2. [Configurar Variables de Entorno](#2-configurar-variables-de-entorno)
3. [Deploy en Vercel](#3-deploy-en-vercel)
4. [Conectar Formularios con Supabase](#4-conectar-formularios-con-supabase)

---

## 1. Configurar Supabase

### Paso 1: Crear Cuenta en Supabase

1. Ve a [https://supabase.com](https://supabase.com)
2. Click en "Start your project"
3. Crea una cuenta (puedes usar GitHub)

### Paso 2: Crear Nuevo Proyecto

1. Click en "New Project"
2. Completa:
   - **Name**: CentroTech-Nexus
   - **Database Password**: (guarda esta contraseña)
   - **Region**: East US (más cercano a PR)
   - **Pricing Plan**: Free (para empezar)
3. Click en "Create new project"
4. Espera 2-3 minutos mientras se crea

### Paso 3: Ejecutar el Schema SQL

1. En el dashboard de Supabase, ve a **SQL Editor** (menú izquierdo)
2. Click en "New query"
3. Copia TODO el contenido de `supabase/schema.sql`
4. Pégalo en el editor
5. Click en "Run" (o presiona Ctrl+Enter)
6. Deberías ver: "Success. No rows returned"

### Paso 4: Obtener las Credenciales

1. Ve a **Settings** → **API** (menú izquierdo)
2. Copia estos valores:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon public key**: `eyJhbGc...` (clave larga)

---

## 2. Configurar Variables de Entorno

### Paso 1: Crear archivo .env.local

En la raíz del proyecto:

```bash
# Crea el archivo
cp .env.local.example .env.local
```

### Paso 2: Editar .env.local

Abre `.env.local` y pega tus credenciales:

```env
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key-aqui
```

**⚠️ IMPORTANTE:** 
- Reemplaza con TUS credenciales de Supabase
- NO compartas este archivo
- Ya está en .gitignore

### Paso 3: Reiniciar el Servidor

```bash
# Detén el servidor (Ctrl+C)
npm run dev
```

---

## 3. Deploy en Vercel

### Paso 1: Preparar el Proyecto

1. **Inicializar Git** (si no lo has hecho):
```bash
git init
git add .
git commit -m "Initial commit: CentroTech Nexus"
```

2. **Subir a GitHub**:
   - Ve a [github.com](https://github.com)
   - Click en "New repository"
   - Nombre: `centrotech-nexus`
   - Click en "Create repository"
   - Ejecuta:
```bash
git remote add origin https://github.com/tu-usuario/centrotech-nexus.git
git branch -M main
git push -u origin main
```

### Paso 2: Deploy en Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Click en "Sign Up" (usa tu cuenta de GitHub)
3. Click en "New Project"
4. Importa tu repositorio `centrotech-nexus`
5. Configura:
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: .next

### Paso 3: Configurar Variables de Entorno en Vercel

1. En la configuración del proyecto, ve a **Environment Variables**
2. Agrega:
   - **Name**: `NEXT_PUBLIC_SUPABASE_URL`
   - **Value**: Tu URL de Supabase
   - Click "Add"
   
3. Agrega:
   - **Name**: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **Value**: Tu anon key de Supabase
   - Click "Add"

4. Click en "Deploy"

### Paso 4: Esperar el Deploy

- Vercel compilará tu proyecto (2-3 minutos)
- Te dará una URL: `https://centrotech-nexus.vercel.app`
- ¡Tu app está en vivo! 🎉

---

## 4. Conectar Formularios con Supabase

Ahora voy a actualizar los formularios para que guarden en Supabase.

### Ejemplo: Guardar Cliente

El código ya está preparado. Solo necesitas descomentar las líneas de Supabase.

En `src/components/clients/add-client-dialog.tsx`:

```typescript
// Importar supabase
import { supabase } from "@/lib/supabase";

// En handleSubmit, reemplazar el console.log con:
const { data, error } = await supabase
  .from('clients')
  .insert([
    {
      business_name: formData.business_name,
      contact_person: formData.contact_person,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      region: formData.region,
      business_type: formData.business_type,
      plan_type: formData.plan_type,
    }
  ])
  .select();

if (error) {
  alert('Error al guardar: ' + error.message);
} else {
  alert('Cliente guardado exitosamente!');
  setOpen(false);
}
```

---

## 5. Verificar que Funciona

### Probar Localmente

1. Asegúrate que `.env.local` tiene las credenciales correctas
2. Reinicia el servidor: `npm run dev`
3. Ve a Clientes → Nueva Cliente
4. Completa el formulario
5. Guarda
6. Ve a Supabase → Table Editor → clients
7. ¡Deberías ver tu cliente!

### Probar en Producción

1. Haz cambios en el código
2. Commit y push:
```bash
git add .
git commit -m "Conectar formularios con Supabase"
git push
```
3. Vercel detectará el cambio y re-deployará automáticamente
4. Espera 2-3 minutos
5. Visita tu URL de Vercel
6. ¡Prueba la app en vivo!

---

## 6. Próximos Pasos

### Funcionalidades a Implementar

1. **Autenticación**
   - Login/Logout
   - Registro de usuarios
   - Protección de rutas

2. **CRUD Completo**
   - Editar clientes
   - Eliminar clientes
   - Listar desde Supabase

3. **Relaciones**
   - Visitas por cliente
   - Equipos por cliente
   - Propuestas por cliente

4. **Tiempo Real**
   - Actualización automática de listas
   - Notificaciones en vivo

---

## 7. Comandos Útiles

### Desarrollo Local
```bash
npm run dev          # Iniciar servidor
npm run build        # Compilar
npm run type-check   # Verificar tipos
```

### Git
```bash
git status           # Ver cambios
git add .            # Agregar todos los cambios
git commit -m "msg"  # Commit
git push             # Subir a GitHub
```

### Vercel
```bash
vercel               # Deploy desde CLI
vercel --prod        # Deploy a producción
vercel logs          # Ver logs
```

---

## 8. Troubleshooting

### Error: "Invalid API key"
- Verifica que las credenciales en `.env.local` sean correctas
- Reinicia el servidor

### Error: "relation does not exist"
- Ejecuta el schema SQL en Supabase
- Verifica que las tablas se crearon

### Deploy falla en Vercel
- Verifica que las variables de entorno estén configuradas
- Revisa los logs en Vercel dashboard

---

## 9. Recursos

- [Supabase Docs](https://supabase.com/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Next.js Docs](https://nextjs.org/docs)

---

## ✅ Checklist Final

- [ ] Proyecto creado en Supabase
- [ ] Schema SQL ejecutado
- [ ] Credenciales copiadas
- [ ] .env.local configurado
- [ ] Servidor local funciona
- [ ] Repositorio en GitHub
- [ ] Proyecto en Vercel
- [ ] Variables de entorno en Vercel
- [ ] Deploy exitoso
- [ ] App funciona en producción

---

**¡Tu app está lista para producción!** 🚀

