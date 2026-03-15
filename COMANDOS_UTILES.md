# 🛠️ Comandos Útiles - CentroTech Platform

## 🚀 Comandos Principales

### Desarrollo
```bash
# Iniciar servidor de desarrollo
npm run dev

# Iniciar en puerto específico
npm run dev -- -p 3001

# Iniciar con turbopack (más rápido)
npm run dev -- --turbo
```

### Producción
```bash
# Compilar para producción
npm run build

# Iniciar servidor de producción
npm start

# Compilar y ejecutar
npm run build && npm start
```

### Calidad de Código
```bash
# Ejecutar linter
npm run lint

# Ejecutar linter y corregir automáticamente
npm run lint -- --fix

# Verificar tipos TypeScript
npm run type-check
```

---

## 🔧 Comandos de Mantenimiento

### Dependencias
```bash
# Instalar dependencias
npm install

# Actualizar dependencias
npm update

# Auditar vulnerabilidades
npm audit

# Corregir vulnerabilidades automáticamente
npm audit fix

# Ver dependencias desactualizadas
npm outdated

# Limpiar caché de npm
npm cache clean --force
```

### Limpieza
```bash
# Limpiar build de Next.js
rm -rf .next

# Limpiar node_modules y reinstalar
rm -rf node_modules package-lock.json
npm install

# Limpiar todo y empezar de cero
rm -rf .next node_modules package-lock.json
npm install
```

---

## 🐛 Troubleshooting

### Problema: El servidor no inicia

**Solución 1: Limpiar caché**
```bash
rm -rf .next
npm run dev
```

**Solución 2: Reinstalar dependencias**
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

**Solución 3: Verificar puerto**
```bash
# Si el puerto 3000 está ocupado
npm run dev -- -p 3001
```

### Problema: Errores de TypeScript

**Solución 1: Verificar tipos**
```bash
npm run type-check
```

**Solución 2: Reiniciar servidor TypeScript en VS Code**
- Presiona `Ctrl+Shift+P` (o `Cmd+Shift+P` en Mac)
- Escribe "TypeScript: Restart TS Server"
- Presiona Enter

**Solución 3: Limpiar y recompilar**
```bash
rm -rf .next
npm run build
```

### Problema: Estilos no se aplican

**Solución 1: Verificar Tailwind**
```bash
# Asegúrate de que globals.css esté importado en layout.tsx
# Verifica que tailwind.config.ts tenga las rutas correctas
```

**Solución 2: Limpiar caché de PostCSS**
```bash
rm -rf .next
npm run dev
```

### Problema: Componentes no se encuentran

**Solución: Verificar paths en tsconfig.json**
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

---

## 📦 Agregar Nuevas Dependencias

### UI Components
```bash
# Agregar nuevo componente de shadcn/ui
npx shadcn-ui@latest add [component-name]

# Ejemplos:
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add select
npx shadcn-ui@latest add toast
```

### Librerías Comunes
```bash
# React Icons
npm install react-icons

# Date handling
npm install date-fns

# Forms
npm install react-hook-form @hookform/resolvers zod

# State management
npm install zustand

# API client
npm install axios
```

---

## 🔍 Comandos de Inspección

### Ver estructura del proyecto
```bash
# Windows
tree /F

# Mac/Linux
tree -L 3
```

### Ver tamaño de node_modules
```bash
# Windows
dir node_modules

# Mac/Linux
du -sh node_modules
```

### Ver dependencias instaladas
```bash
npm list --depth=0
```

### Ver scripts disponibles
```bash
npm run
```

---

## 🌐 Comandos de Red

### Ver procesos en puerto 3000
```bash
# Windows
netstat -ano | findstr :3000

# Mac/Linux
lsof -i :3000
```

### Matar proceso en puerto 3000
```bash
# Windows
taskkill /PID [PID] /F

# Mac/Linux
kill -9 [PID]
```

---

## 📊 Comandos de Análisis

### Analizar bundle size
```bash
# Instalar analyzer
npm install @next/bundle-analyzer

# Agregar a next.config.js:
# const withBundleAnalyzer = require('@next/bundle-analyzer')({
#   enabled: process.env.ANALYZE === 'true',
# })

# Ejecutar análisis
ANALYZE=true npm run build
```

### Ver estadísticas de build
```bash
npm run build -- --profile
```

---

## 🔐 Variables de Entorno

### Crear archivo .env.local
```bash
cp .env.local.example .env.local
```

### Editar variables
```bash
# Windows
notepad .env.local

# Mac/Linux
nano .env.local
# o
code .env.local
```

### Variables requeridas
```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

---

## 🚀 Deployment

### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy a producción
vercel --prod
```

### Build local para verificar
```bash
npm run build
npm start
```

---

## 📝 Git Commands

### Inicializar repositorio
```bash
git init
git add .
git commit -m "Initial commit: CentroTech Platform"
```

### Crear .gitignore
```bash
# Ya está creado, pero si necesitas verificar:
cat .gitignore
```

### Comandos comunes
```bash
# Ver estado
git status

# Agregar cambios
git add .

# Commit
git commit -m "Descripción del cambio"

# Push
git push origin main
```

---

## 🎯 Comandos Rápidos de Desarrollo

### Abrir en VS Code
```bash
code .
```

### Abrir en navegador
```bash
# Windows
start http://localhost:3000

# Mac
open http://localhost:3000

# Linux
xdg-open http://localhost:3000
```

### Ver logs en tiempo real
```bash
npm run dev | tee dev.log
```

---

## 💡 Tips Útiles

1. **Hot Reload**: Next.js recarga automáticamente al guardar cambios
2. **Fast Refresh**: Preserva el estado de React al editar componentes
3. **TypeScript**: Los errores se muestran en tiempo real
4. **Tailwind**: Usa la extensión de VS Code para autocompletado
5. **Console**: Usa `console.log()` para debugging (se ve en terminal y navegador)

---

**Mantén esta guía a mano para resolver problemas rápidamente**

