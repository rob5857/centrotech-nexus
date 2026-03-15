# 🚀 Cómo Instalar y Configurar Supabase

## ⚠️ IMPORTANTE

Por ahora, Supabase NO está instalado para evitar errores. El sistema funciona con datos mock (de demostración).

Cuando estés listo para conectar con una base de datos real, sigue estos pasos:

---

## 📦 Paso 1: Instalar Supabase

```bash
npm install @supabase/supabase-js
```

---

## 🔧 Paso 2: Configurar Credenciales

### 2.1 Crear Proyecto en Supabase

1. Ve a [https://supabase.com](https://supabase.com)
2. Crea una cuenta (gratis)
3. Click en "New Project"
4. Completa:
   - **Name**: CentroTech-Nexus
   - **Database Password**: (guarda esta contraseña)
   - **Region**: East US
5. Click en "Create new project"
6. Espera 2-3 minutos

### 2.2 Obtener Credenciales

1. En Supabase, ve a **Settings** → **API**
2. Copia:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon public key**: `eyJhbGc...`

### 2.3 Crear .env.local

En la raíz del proyecto, crea el archivo `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key-aqui
```

**⚠️ Reemplaza con TUS credenciales reales**

---

## 🗄️ Paso 3: Crear las Tablas

1. En Supabase, ve a **SQL Editor**
2. Click en "New query"
3. Copia TODO el contenido de `supabase/schema.sql`
4. Pégalo en el editor
5. Click en "Run"
6. Deberías ver: "Success. No rows returned"

---

## 🔓 Paso 4: Activar Supabase en el Código

### 4.1 Editar src/lib/supabase.ts

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

El archivo debería quedar así:
```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

---

## 🔄 Paso 5: Reiniciar el Servidor

```bash
# Detén el servidor (Ctrl+C)
npm run dev
```

---

## ✅ Paso 6: Probar la Conexión

1. Ve a `/dashboard/clients`
2. Click en "Nuevo Cliente"
3. Completa el formulario
4. Click en "Guardar Cliente"
5. Ve a Supabase → **Table Editor** → **clients**
6. ¡Deberías ver tu cliente guardado!

---

## 🎯 Estado Actual

### Sin Supabase (Ahora) ✅
- ✅ Sistema funciona con datos mock
- ✅ No hay errores
- ✅ Puedes ver y probar todo
- ❌ Los datos NO se guardan (solo en memoria)

### Con Supabase (Después de instalarlo) ✅
- ✅ Sistema funciona con base de datos real
- ✅ Los datos SÍ se guardan
- ✅ Persistencia de datos
- ✅ Listo para producción

---

## 📋 Checklist de Instalación

Cuando estés listo para instalar Supabase:

- [ ] Ejecutar `npm install @supabase/supabase-js`
- [ ] Crear proyecto en Supabase
- [ ] Ejecutar schema.sql en Supabase
- [ ] Copiar credenciales
- [ ] Crear archivo .env.local
- [ ] Descomentar código en src/lib/supabase.ts
- [ ] Reiniciar servidor
- [ ] Probar guardado de cliente

---

## 🆘 Troubleshooting

### Error: "Invalid API key"
- Verifica que las credenciales en `.env.local` sean correctas
- Asegúrate de reiniciar el servidor después de crear .env.local

### Error: "relation does not exist"
- Ejecuta el schema SQL en Supabase
- Verifica que las tablas se crearon en Table Editor

### Error: "Module not found: @supabase/supabase-js"
- Ejecuta: `npm install @supabase/supabase-js`
- Reinicia el servidor

---

## 💡 Recomendación

**Por ahora, NO instales Supabase.** El sistema funciona perfectamente con datos mock.

**Instala Supabase cuando:**
- Quieras guardar datos reales
- Estés listo para producción
- Necesites persistencia de datos

---

## 📚 Más Información

Lee **GUIA_SUPABASE_VERCEL.md** para una guía completa paso a paso.

---

**El sistema funciona perfectamente sin Supabase. Instálalo solo cuando estés listo.** ✅

