# 🆓 Guía de Despliegue GRATUITO - Aguas Libres

## ⚠️ Importante: La Realidad del Despliegue Gratuito

### ¿Por qué es difícil desplegar esto gratis?

Tu proyecto tiene 3 componentes que complican el despliegue gratuito:

1. **SQLite como base de datos** - Plataformas gratuitas no soportan bien SQLite (los datos se pierden)
2. **Panel de administración** - Necesita persistencia de datos
3. **Backend completo** - No es un sitio estático

### Solución: Migrar a PostgreSQL

Las plataformas gratuitas (Render, Railway, Supabase) ofrecen **PostgreSQL gratis**. Vamos a migrar tu proyecto a PostgreSQL.

---

## 🌟 Opciones GRATUITAS Disponibles

| Opción | Costo | Limitaciones | ¿Viable? |
|--------|-------|--------------|-----------|
| **Render** | GRATIS | Web service gratis + PostgreSQL 90 días gratis | ✅ MEJOR OPCIÓN |
| **Railway** | $5 crédito | Solo primeros días gratis | ⚠️ Temporal |
| **Supabase** | 500MB gratis | Necesita hosting externo para web | ⚠️ Parcial |
| **Infinity Free** | GRATIS | Hosting PHP, requiere migrar código | ❌ Muy complejo |
| **Vercel/Netlify** | GRATIS | ❌ NO funciona con SQLite | ❌ Imposible |

---

## 🎯 MEJOR OPCIÓN: Render (Gratuito)

### ¿Por qué Render?

✅ Web service GRATUITO (siempre)
✅ PostgreSQL GRATIS por 90 días
✅ SSL automático y gratis
✅ Dominio .onrender.com gratis
✅ Deploy automático desde GitHub
✅ Facilitísimo de usar

### Costos REALES:

- **0-90 días**: $0 (web service + PostgreSQL gratis)
- **Después de 90 días**: ~$7/mes (solo PostgreSQL, web sigue gratis)
- **Opción alternativa**: Migrar a Supabase (500MB gratis permanente)

---

## 📋 PASO A PASO: Despliegue GRATUITO en Render

### Paso 1: Crear cuenta en Render

1. Ve a https://render.com/
2. Clic en "Get Started"
3. Regístrate con GitHub (es gratis y más rápido)
4. Verifica tu email

**Tiempo:** 3-5 minutos

### Paso 2: Subir código a GitHub

Si NO tienes repositorio en GitHub:

```bash
# En tu máquina local, en /home/z/my-project:
git init
git add .
git commit -m "Inicialización de Aguas Libres"
```

**EN EL NAVEGADOR:**
1. Ve a https://github.com/new
2. Nombre del repositorio: `aguas-libres`
3. Clic en "Create repository"
4. Copia los comandos que te da GitHub

**En tu terminal:**
```bash
# Agrega el remote (reemplaza TU_USUARIO con tu nombre de usuario de GitHub)
git remote add origin https://github.com/TU_USUARIO/aguas-libres.git

# Sube el código
git branch -M main
git push -u origin main
```

**Tiempo:** 5-10 minutos

### Paso 3: Actualizar Prisma para PostgreSQL

Primero, necesitamos migrar de SQLite a PostgreSQL.

**1. Actualizar schema.prisma:**

En tu editor, abre `prisma/schema.prisma` y cambia:

```prisma
// ANTES (SQLite):
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

// DESPUÉS (PostgreSQL):
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

**2. Commit y subir cambios:**

```bash
git add prisma/schema.prisma
git commit -m "Migración a PostgreSQL"
git push origin main
```

**Tiempo:** 5 minutos

### Paso 4: Crear PostgreSQL en Render

1. Ve a https://dashboard.render.com/
2. Clic en "New" → "PostgreSQL"
3. Configura:
   - **Name**: `aguas-libres-db`
   - **Database**: `aguaslibres`
   - **User**: `aguaslibres_user`
   - **Region**: Oregón (más rápido y barato)
   - **Plan**: Free (gratis por 90 días)

4. Clic en "Create Database"

5. **Espera 3-5 minutos** mientras se crea la base de datos

6. Una vez creada, verás tu base de datos en el dashboard. Clic en ella.

7. **Copia la DATABASE_URL**:
   - Scroll a "Connections" → "External Database URL"
   - Clic en el ícono de copiar
   - Guárdala temporalmente en un archivo de texto

**Tiempo:** 10 minutos

### Paso 5: Crear Web Service

1. En el dashboard de Render, clic en "New" → "Web Service"
2. Clic en "Connect GitHub"
3. Busca y selecciona tu repositorio `aguas-libres`
4. Clic en "Connect"

5. Configura el Web Service:

   **Name**: `aguas-libres`

   **Environment**: `Node`

   **Region**: Oregon (igual que la BD)

   **Branch**: `main`

   **Root Directory**: (dejar vacío)

   **Runtime**: `Docker` (selecciona en la opción "Advanced")

   **Build Command**:
   ```bash
   bun install && bun run build
   ```

   **Start Command**:
   ```bash
   bun start
   `` ```

6. **Scroll a "Environment Variables"** y agrega:

   ```
   NODE_ENV=production
   DATABASE_URL=[LA_URL_COPIADA_EN_PASO_4]
   NEXTAUTH_URL=https://aguas-libres.onrender.com
   NEXTAUTH_SECRET=tu-secret-aqui
   ADMIN_TOKEN=tu-token-aqui
   ```

   **IMPORTANTE:**
   - DATABASE_URL: Pega la URL que copiaste en el paso 4
   - NEXTAUTH_SECRET: Genera uno único: https://www.uuidgenerator.net/
   - ADMIN_TOKEN: Genera uno único: https://www.uuidgenerator.net/

7. **Instance Type**: Selecciona "Free"

   (Notarás que dice: "Your service will spin down after 15 minutes of inactivity" - Esto significa que el servicio se detendrá si no hay actividad durante 15 minutos, pero se reiniciará automáticamente cuando alguien visite el sitio. Es normal en el plan gratuito.)

8. Clic en "Create Web Service"

9. **Espera 10-15 minutos** mientras se hace el build

**Tiempo:** 15-20 minutos

### Paso 6: Verificar despliegue

Una vez que el estado cambie a "Live":

1. Tu sitio estará en: `https://aguas-libres.onrender.com`
2. El panel de admin estará en: `https://aguas-libres.onrender.com/admin/login`
3. Usa el ADMIN_TOKEN que configuraste en el paso 5

### Paso 7: Configurar Prisma (Importante!)

El primer deploy fallará porque Prisma necesita generar el cliente y crear las tablas.

**Opción A: Automático (Render lo hará automáticamente)**
- Render detectará que es Next.js y ejecutará los comandos necesarios
- Solo espera unos minutos más

**Opción B: Manual (si falla)**
1. Agrega un script personalizado a `package.json`:

```json
"scripts": {
  "postinstall": "prisma generate"
}
```

2. Sube cambios:
```bash
git add package.json
git commit -m "Agregar postinstall"
git push origin main
```

Render detectará los cambios y re-deployará automáticamente.

---

## ✅ ¡Tu sitio está GRATIS en línea!

### ¿Qué tienes ahora?

- ✅ Sitio web accesible globalmente: `https://aguas-libres.onrender.com`
- ✅ Panel de administración funcional
- ✅ Base de datos PostgreSQL con persistencia de datos
- ✅ SSL automático (HTTPS)
- ✅ Actualizaciones automáticas (al hacer push a GitHub)

### Limitaciones del plan gratuito de Render:

1. **Web Service se duerme después de 15 minutos** sin actividad
   - Primer acceso puede tardar 30-60 segundos (el servicio se "despierta")
   - Solución: Solo afecta el primer acceso después de inactividad

2. **PostgreSQL es gratis por 90 días**
   - Después de 90 días, cuesta ~$7/mes
   - Solución gratuita (abajo): Migrar a Supabase

3. **No dominio personalizado gratis**
   - Solo dominio `.onrender.com` gratis
   - Dominio propio requiere plan pago
   - Solución: Usar un servicio de redirección gratuito (ver abajo)

---

## 🔄 Después de 90 días: Opción GRATUITA permanente

### Migrar a Supabase (500MB gratis permanente)

**Paso 1: Crear cuenta en Supabase**
1. Ve a https://supabase.com/
2. Regístrate con GitHub
3. Crea nuevo proyecto: "aguas-libres"

**Paso 2: Obtener DATABASE_URL**
1. En tu proyecto de Supabase, clic en "Settings" → "Database"
2. Copia la "Connection String"
3. Reemplaza `[YOUR-PASSWORD]` con tu contraseña de la BD

**Paso 3: Actualizar en Render**
1. Ve a tu Web Service en Render
2. Clic en "Environment" → "Environment Variables"
3. Actualiza `DATABASE_URL` con la URL de Supabase
4. Clic en "Save Changes"
5. Render re-deployará automáticamente

**Costo:** 0 (¡gratuito para siempre!)

**Limitaciones:**
- 500MB de base de datos
- 500MB de almacenamiento de archivos
- Suficiente para miles de pedidos y productos

---

## 🌐 Dominio Personalizado GRATIS (Opcional)

Si quieres `aguaslibres.com` sin pagar:

### Opción 1: Freenom (Dominios gratuitos)
1. Ve a https://www.freenom.com/
2. Busca dominios gratuitos (.tk, .ml, .ga, .cf)
2. Registra uno gratis por 12 meses
3. En Render: "Custom Domains" → Agrega tu dominio
4. Configura DNS en Freenom con los records que te da Render

### Opción 2: Redirección de DNS (Más simple)
1. Compra un dominio barato (~$10/año) o usa uno gratuito de Freenom
2. Usa Cloudflare (gratis) para DNS y SSL
3. Configura CNAME apuntando a `aguas-libres.onrender.com`

---

## 📊 Resumen de COSTOS TOTALES

| Período | Costo Web Service | Costo PostgreSQL | Total |
|---------|-------------------|------------------|-------|
| **0-90 días** | $0 | $0 | $0 |
| **90 días en adelante** | $0 | $7/mes (Render) **O** $0 (Supabase) | $0-$7/mes |

**Con Supabase (opción gratuita permanente):**
- **Costo total: $0 para siempre** ✅

---

## 🆘 Problemas Comunes y Soluciones

### Problema: "Build failed - Prisma error"

**Causa:** Prisma no generó el cliente

**Solución:**
1. Agrega a `package.json`:
```json
"scripts": {
  "postinstall": "prisma generate && prisma db push"
}
```

2. Commit y push:
```bash
git add package.json
git commit -m "Fix prisma"
git push origin main
```

### Problema: "Database connection refused"

**Causa:** DATABASE_URL incorrecta

**Solución:**
1. Ve a Render → PostgreSQL → Connections
2. Copia la URL exacta (incluyendo el puerto y contraseña)
3. En Render → Web Service → Environment Variables
4. Reemplaza DATABASE_URL con la URL correcta
5. Clic "Save Changes"

### Problema: "Site loads slowly first time"

**Causa:** Servidor "dormido" en el plan gratuito

**Solución:** Normal en plan gratuito. Tarda 30-60 segundos al primer acceso después de 15 minutos de inactividad.

### Problema: "Cannot reach admin panel"

**Causa:** ADMIN_TOKEN incorrecto o no configurado

**Solución:**
1. Ve a Render → Web Service → Environment Variables
2. Verifica que ADMIN_TOKEN está configurado
3. Usa ese token exactamente en `/admin/login`

---

## 🎯 Checklist Final

Antes de declarar éxito:

- [ ] Repositorio subido a GitHub
- [ ] Prisma migrado a PostgreSQL
- [ ] PostgreSQL creada en Render
- [ ] Web Service creado en Render
- [ ] Variables de entorno configuradas
- [ ] Deploy con estado "Live"
- [ ] Sitio accesible en .onrender.com
- [ ] Panel de admin funcional
- [ ] Token de admin guardado en lugar seguro
- [ ] Prueba de checkout completa
- [ ] Prueba de creación de producto en admin

---

## 🚀 ¿Listo para empezar?

**Resumen de pasos:**
1. Cuenta en Render (5 min)
2. Subir a GitHub (10 min)
3. Migrar Prisma (5 min)
4. Crear PostgreSQL en Render (10 min)
5. Crear Web Service en Render (20 min)
6. ¡Listo! 🎉

**Tiempo total:** ~50 minutos
**Costo total:** $0 (gratis)

---

## 📞 ¿Necesitas ayuda?

Si te encuentras con algún problema específico durante el despliegue:
- Revisa los logs en el dashboard de Render
- Verifica las variables de entorno
- Asegúrate que el repositorio en GitHub está actualizado

¡Pregunta si necesitas ayuda en algún paso específico!
