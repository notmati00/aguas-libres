# 🌊 Aguas Libres - E-commerce Completo con Panel de Administración

## ✅ ESTADO: PRODUCCIÓN LISTA

Sistema e-commerce profesional para "Aguas Libres" con panel de administración completo, perfiles de usuario y gestión en tiempo real.

## 🚀 Características

### Frontend
- ✅ Next.js 16 con App Router y TypeScript
- ✅ Diseño responsive y mobile-first
- ✅ Tailwind CSS 4 + shadcn/ui
- ✅ Animaciones fluidas con Framer Motion
- ✅ Paleta de colores profesionales (azules/aguas)
- ✅ Sticky navbar con navegación suave
- ✅ Footer sticky al fondo

### Secciones Principales
- ✅ Hero Section con animaciones y CTAs
- ✅ Calculadora de consumo de agua
- ✅ Catálogo de productos con filtros y buscador
- ✅ Sección de servicios (limpieza tanques, control plagas, cañerías)
- ✅ Sobre Nosotros con timeline de empresa
- ✅ Testimonios con carrusel interactivo
- ✅ FAQ con acordeón interactivo
- ✅ Contacto con formulario y mapa
- ✅ WhatsApp button flotante
- ✅ Chatbot con IA

### E-commerce
- ✅ Carrito con Zustand + localStorage
- ✅ Página de carrito funcional
- ✅ Checkout completo con validación
- ✅ Página de éxito del pedido
- ✅ Gestión de stock en tiempo real
- ✅ Perfil de usuario persistente
- ✅ Historial de pedidos del usuario

### Autenticación y Administración
- ✅ Panel de administrador con login seguro
- ✅ Token de admin oculto en `.env`
- ✅ Dashboard en tiempo real con métricas
- ✅ CRUD completo de productos:
  * Crear, editar, eliminar productos
  * Gestión de precios
  * Gestión de stock
  * Gestión de imágenes (URLs)
- ✅ Estadísticas de ventas en tiempo real
- ✅ Protección de rutas de admin con middleware
- ✅ Sesiones de 24 horas con cookies HTTP-only

### Backend
- ✅ API REST con Next.js API Routes
- ✅ Prisma ORM con SQLite
- ✅ Protección de endpoints admin
- ✅ Sistema de autenticación de admin

## 🗂️ Estructura del Proyecto

```
/home/z/my-project/
├── public/                 # Archivos estáticos
│   └── images/            # Imágenes de productos
│       ├── products/       # Imágenes de productos
│       └── banners/       # Imágenes de banners
├── src/
│   ├── app/              # App Router de Next.js
│   │   ├── api/          # API Routes
│   │   │   ├── admin/    # APIs de administrador
│   │   │   ├── auth/     # Autenticación NextAuth
│   │   │   ├── products/ # CRUD de productos
│   │   │   ├── orders/   # Gestión de pedidos
│   │   │   ├── categories/ # Gestión de categorías
│   │   │   ├── chatbot/  # API del chatbot
│   │   │   ├── contact/  # Mensajes de contacto
│   │   │   └── register/ # Registro de usuarios
│   │   ├── auth/         # Páginas de autenticación
│   │   │   ├── signin/   # Login
│   │   │   └── signup/   # Registro
│   │   ├── admin/        # Panel de administración
│   │   │   ├── login/    # Login de admin
│   │   │   └── dashboard/# Dashboard
│   │   ├── cart/         # Página del carrito
│   │   ├── checkout/     # Página de checkout
│   │   ├── success/      # Página de éxito
│   │   ├── profile/      # Perfil de usuario
│   │   ├── layout.tsx    # Layout principal
│   │   ├── page.tsx      # Página de inicio
│   │   └── globals.css   # Estilos globales
│   ├── components/       # Componentes React
│   │   ├── ui/          # Componentes shadcn/ui
│   │   ├── sections/    # Secciones de la página
│   │   ├── navbar.tsx   # Barra de navegación
│   │   ├── footer.tsx   # Footer
│   │   ├── chatbot.tsx  # Chatbot
│   │   ├── whatsapp-button.tsx
│   │   └── providers.tsx
│   ├── lib/             # Utilidades
│   │   ├── db.ts        # Cliente Prisma
│   │   ├── admin-auth.ts # Middleware de admin
│   │   ├── auth.ts      # Configuración NextAuth
│   │   ├── ai-sdk.ts    # Wrapper para z-ai-web-dev-sdk
│   │   └── utils.ts     # Utilidades generales
│   └── stores/          # Zustand stores
│       └── cart-store.ts # Store del carrito
├── prisma/
│   └── schema.prisma    # Esquema de base de datos
├── db/
│   └── custom.db        # Base de datos SQLite
├── .env.example         # Plantilla de variables de entorno
└── GUIA_USO.md        # Guía completa de uso
```

## 🔧 Instalación

1. **Clonar el repositorio**
   ```bash
   cd /home/z/my-project
   ```

2. **Instalar dependencias**
   ```bash
   bun install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env
   ```

   Editar `.env` con tus credenciales:
   ```env
   DATABASE_URL="file:../db/custom.db"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="aguas-libres-secret-key-2024"
   ADMIN_TOKEN="aguas-libres-admin-token-2024-secure"
   GOOGLE_CLIENT_ID=""
   GOOGLE_CLIENT_SECRET=""
   AI_SDK_API_KEY=""
   ```

4. **Configurar base de datos**
   ```bash
   bun run db:push
   ```

5. **Iniciar servidor de desarrollo**
   ```bash
   bun run dev
   ```

El sitio estará disponible en `http://localhost:3000`

## 🎨 Personalización

### Agregar Productos con Imágenes

1. Coloca las imágenes en `/public/images/products/`
2. Ve a `/admin/dashboard`
3. Haz clic en "Nuevo Producto"
4. Usa la URL de la imagen: `/images/products/tu-imagen.jpg`

### Cambiar Token de Admin

1. Edita el archivo `.env`
2. Cambia `ADMIN_TOKEN` a tu valor seguro
3. Recarga la página de admin

## 📱 Rutas de la Aplicación

### Rutas Principales
- `/` - Página de inicio
- `/cart` - Carrito de compras
- `/checkout` - Proceso de compra
- `/success` - Confirmación de pedido
- `/profile` - Perfil de usuario

### Rutas de Usuario
- `/auth/signin` - Iniciar sesión
- `/auth/signup` - Crear cuenta

### Rutas de Administrador
- `/admin/login` - Login de admin
- `/admin/dashboard` - Panel de administración

## 🔐 Panel de Administración

### Acceso al Panel

1. Ve a `/admin/login`
2. Ingresa el token de administrador: `aguas-libres-admin-token-2024-secure`
3. Serás redirigido al dashboard
4. La sesión dura 24 horas

### Dashboard (En Tiempo Real)

- **Total Productos**: Cantidad de productos activos
- **Total Pedidos**: Cantidad de pedidos realizados
- **Ingresos Totales**: Suma de todas las ventas
- **Stock Bajo**: Productos con menos de 10 unidades

### CRUD de Productos

#### Crear Producto
1. Haz clic en "Nuevo Producto"
2. Completa el formulario
3. Haz clic en "Crear Producto"

#### Editar Producto
1. Haz clic en el icono de lápiz del producto
2. Modifica los campos
3. Haz clic en "Actualizar Producto"

#### Eliminar Producto
1. Haz clic en el icono de basura
2. Confirma la acción

## 👤 Perfiles de Usuario

### Acceder al Perfil

1. Haz clic en el icono de usuario en la navbar
2. Ve a `/profile`

### Funciones del Perfil

- **Información Personal**: Nombre, email, teléfono, dirección
- **Historial de Pedidos**: Todos tus pedidos con su estado
- **Editar Perfil**: Modifica tu información personal

### Estados del Pedido

- **Pendiente**: Pedido recibido
- **Confirmado**: Pedido confirmado
- **Preparando**: En preparación
- **Enviado**: En camino
- **Entregado**: Entregado
- **Cancelado**: Cancelado

## 🔧 Scripts Disponibles

- `bun run dev` - Inicia servidor de desarrollo
- `bun run build` - Construye para producción
- `bun run lint` - Ejecuta ESLint
- `bun run db:push` - Sincroniza esquema Prisma con BD
- `bun run db:generate` - Genera cliente Prisma

## 📘 Documentación

- `README.md` - Este archivo
- `FREE_DEPLOYMENT.md` - Guía de despliegue GRATUITO (Render/Supabase)
- `CUSTOM_DOMAIN.md` - Guía para configurar tu dominio propio
- `DEPLOYMENT.md` - Guía completa de despliegue a producción
- `GUIA_USO.md` - Guía detallada de uso
- `MIGRATION_GUIDE.md` - Guía de migración a PostgreSQL
- `scripts/README.md` - Scripts automatizados de despliegue
- `worklog.md` - Historial de desarrollo y checkpoints

## 🚀 Despliegue en Producción

### Opciones de Despliegue

Tu proyecto está **listo para producción**. Puedes desplegarlo en:

1. **VPS (Recomendado)** - DigitalOcean, Linode, AWS EC2 (~$6-12/mes)
   - ✅ SQLite funciona perfectamente
   - ✅ Control total del servidor
   - ✅ Scripts automatizados disponibles
   - 📖 Guía completa: `DEPLOYMENT.md`

2. **Railway** - Plataforma fácil de usar (~$5-20/mes)
   - ✅ Despliegue con un clic
   - ✅ SSL automático
   - ⚠️ Requiere volumen persistente para SQLite
   - 📖 Guía completa: `DEPLOYMENT.md`

3. **Render** - Similar a Railway (~$7-25/mes)
   - ✅ Despliegue fácil
   - ✅ SSL automático
   - ⚠️ Requiere disk adicional o PostgreSQL

### Despliegue Rápido con Scripts Automatizados

#### Para VPS (DigitalOcean, Linode, AWS):

```bash
# 1. Construir el proyecto
bun run build

# 2. Desplegar al servidor (reemplaza con tu IP)
bash scripts/deploy-vps.sh 123.45.67.89 root

# 3. Configurar Nginx (reemplaza con tu dominio)
bash scripts/setup-nginx.sh aguaslibres.com 123.45.67.89

# 4. Configurar SSL gratuito
bash scripts/setup-ssl.sh aguaslibres.com admin@aguaslibres.com root@123.45.67.89
```

#### Para Railway:

```bash
# Ver instrucciones detalladas
bash scripts/deploy-railway.sh
```

### ⚠️ Importante: ¿Por qué NO usar Vercel/Netlify?

Este proyecto usa **SQLite** como base de datos. En plataformas serverless como Vercel o Netlify:
- ❌ Los datos NO se persisten entre solicitudes
- ❌ Los pedidos y productos se perderían
- ❌ Necesitarías migrar a PostgreSQL (adicional)

**Recomendación:** Usa VPS, Railway, o Render para mantener SQLite y tu panel de administración funcional.

### Checklist Antes de Desplegar

- [ ] Cambiar `ADMIN_TOKEN` en `.env`
- [ ] Generar `NEXTAUTH_SECRET` único
- [ ] Configurar `NEXTAUTH_URL` con dominio real
- [ ] Probar el sitio en modo producción
- [ ] Verificar que el panel de admin funciona
- [ ] Hacer backup de la base de datos

### Costos Mensuales Estimados

- **VPS (Recomendado)**: ~$6-12/mes (incluye servidor y dominio)
- **Railway**: ~$6-12/mes
- **Render**: ~$15-16/mes

Para más detalles, consulta `DEPLOYMENT.md`

## 🆓 Despliegue GRATUITO (Sin gastar dinero)

### ¿Es posible desplegar GRATIS?

¡SÍ! Puedes desplegar tu sitio **completamente gratis** usando **Render**.

### Limitaciones

- **0-90 días**: 100% GRATIS (Web service + PostgreSQL)
- **Después de 90 días**: Solo PostgreSQL cuesta ~$7/mes
- **Solución permanente gratuita**: Migrar a Supabase (500MB gratis)
- **Web service sigue gratis para siempre**

### Despliegue GRATIS en 3 pasos:

```bash
# Paso 1: Preparar proyecto para PostgreSQL
bash scripts/migrate-to-postgres.sh

# Paso 2: Subir a GitHub
git add .
git commit -m "Migración a PostgreSQL"
git push origin main

# Paso 3: Seguir guía de despliegue gratuito
# Consulta: FREE_DEPLOYMENT.md
```

### Costos TOTALES del despliegue gratuito:

| Período | Costo Web | Costo BD | Total |
|---------|-----------|-----------|-------|
| **0-90 días** | $0 | $0 | **$0** ✅ |
| **90 días+** | $0 | $7 (Render) **O** $0 (Supabase) | **$0-$7** |

### Guía Completa GRATUITA:

📘 **`FREE_DEPLOYMENT.md`** - Guía paso a paso para despliegue 100% gratis
📘 **`CUSTOM_DOMAIN.md`** - Guía para configurar tu dominio propio

**Incluye:**
- Configuración de cuenta en Render (gratis)
- Migración a PostgreSQL
- Creación de PostgreSQL gratis (90 días)
- Creación de Web Service gratis
- Configuración de variables de entorno
- Opción permanente gratuita con Supabase
- **Configuración de dominio personalizado (si ya tienes uno)**
- Instrucciones para: Namecheap, GoDaddy, Google Domains, Cloudflare
- SSL/HTTPS automático y gratis
- Redirección www ↔ dominio principal

### Tiempo estimado para despliegue gratuito:

- **Tiempo total**: ~50 minutos (sin dominio) o ~2 horas (con dominio)
- **Costo total**: $0

### Pasos resumidos:

1. Cuenta en Render (5 min)
2. Subir a GitHub (10 min)
3. Migrar a PostgreSQL (5 min)
4. Crear PostgreSQL en Render (10 min)
5. Crear Web Service en Render (20 min)
6. ✅ ¡Listo! Tu sitio estará en `https://aguas-libres.onrender.com`

**Para desplegar gratis, consulta:** `FREE_DEPLOYMENT.md`

## 🎯 Rutas Protegidas

### Públicas (sin autenticación)
- `GET /api/products` - Listar productos
- `GET /api/products/[id]` - Obtener producto
- `GET /api/categories` - Listar categorías

### Protegidas (requiere token de admin)
- `POST /api/products` - Crear producto
- `PUT /api/products/[id]` - Actualizar producto
- `DELETE /api/products/[id] - Eliminar producto
- `GET /api/admin/stats` - Estadísticas

### De Administrador
- `POST /api/admin/auth` - Iniciar sesión
- `GET /api/admin/auth` - Verificar sesión
- `POST /api/admin/logout` - Cerrar sesión

## 🎨 Paleta de Colores

- **Primario**: Cyan-600 a Blue-600
- **Fondo**: Grises claros
- **Texto**: Gris oscuro para legibilidad
- **Acentos**: Verde para éxito, Rojo para errores

## 📞 Contacto

- **WhatsApp flotante**: Botón funcional para contacto rápido
- **Formulario de contacto**: Con validación y envío
- **Información de contacto**: Disponible en header y footer

## 🤖 Chatbot IA

El chatbot utiliza z-ai-web-dev-sdk para responder preguntas sobre:
- Productos y precios
- Servicios disponibles
- Horarios de atención
- Información de contacto

## 🌟 Próximas Mejoras

- [ ] Integración con pasarela de pago real (Mercado Pago)
- [ ] Sistema de reseñas de productos
- [ ] Newsletter con sistema de envío
- [ ] Búsqueda predictiva en tiempo real
- [ ] Panel de estadísticas avanzado
- [ ] Notificaciones push

## 📄 Licencia

Este proyecto es propiedad de Aguas Libres.

## 👨‍💻 Desarrollado por

Z.ai Code - Sistema de desarrollo con IA

---

© 2024 Aguas Libres. Todos los derechos reservados.
