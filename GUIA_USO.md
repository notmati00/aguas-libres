# 📘 Guía de Uso - Sistema de Administración y Perfiles

## 🔐 Acceso al Panel de Administrador

### Token de Administrador

El token de acceso está configurado en el archivo `.env`:

```env
ADMIN_TOKEN="aguas-libres-admin-token-2024-secure"
```

**IMPORTANTE**: En producción, cambia este token por uno seguro y único.

### Iniciar Sesión como Admin

1. Ve a `/admin/login`
2. Ingresa el token de administrador
3. Si el token es correcto, serás redirigido al dashboard
4. La sesión dura 24 horas

### Rutas de Administración

- `/admin/login` - Login de administrador
- `/admin/dashboard` - Panel principal de administración
- `/api/admin/auth` - API de autenticación
- `/api/admin/logout` - API de cierre de sesión

## 📊 Panel de Administración

### Dashboard (En Tiempo Real)

El dashboard muestra 4 métricas clave:
- **Total Productos**: Número total de productos activos
- **Total Pedidos**: Cantidad de pedidos realizados
- **Ingresos Totales**: Suma de todas las ventas
- **Stock Bajo**: Productos con menos de 10 unidades

Todas las métricas se actualizan en tiempo real.

### Gestión de Productos

#### Crear Nuevo Producto
1. Haz clic en "Nuevo Producto"
2. Completa el formulario:
   - Nombre del producto
   - Precio
   - Stock inicial
   - URL de imagen
   - Categoría
   - Producto destacado (opcional)
3. Haz clic en "Crear Producto"

#### Editar Producto Existente
1. Haz clic en el icono de lápiz ✏️ del producto
2. Modifica los campos necesarios
3. Haz clic en "Actualizar Producto"

#### Eliminar Producto
1. Haz clic en el icono de basura 🗑️ del producto
2. Confirma la acción
3. El producto se eliminará inmediatamente

#### Gestión de Imágenes

Actualmente se usan URLs de imagen. Para agregar imágenes:

1. Coloca la imagen en `/public/images/products/`
2. Usa la ruta relativa en el campo de imagen: `/images/products/tu-imagen.jpg`

## 👤 Perfiles de Usuario

### Crear Perfil

Los perfiles de usuario se crean automáticamente cuando:
- Un usuario se registra en `/auth/signup`
- Un usuario hace un pedido en `/checkout`
- Un usuario edita su perfil

### Información del Perfil

El perfil incluye:
- Nombre completo
- Email
- Teléfono
- Dirección
- Ciudad
- Provincia

### Acceder al Perfil

1. Haz clic en el icono de usuario 👤 en la navbar
2. Ve a `/profile`
3. Verás:
   - Tu información personal
   - Historial de pedidos
   - Estado de cada pedido

### Editar Perfil

1. En `/profile`, haz clic en "Editar Perfil"
2. Modifica la información deseada
3. Haz clic en "Guardar"
4. Los cambios se guardarán en localStorage

### Historial de Pedidos

El historial muestra todos los pedidos del usuario:
- Número de pedido
- Fecha del pedido
- Estado (pendiente, confirmado, preparando, enviado, entregado)
- Total del pedido
- Items incluidos con cantidad y precio

## 🛒 Sistema E-commerce

### Carrito de Compras

El carrito se mantiene en localStorage:
- Los productos persisten entre sesiones
- No se pierde al cerrar el navegador
- Actualizaciones en tiempo real

### Proceso de Checkout

1. Agrega productos al carrito desde `/` (productos)
2. Ve a `/cart` para ver el carrito
3. Haz clic en "Proceder al Pago" para ir a `/checkout`
4. Completa el formulario de datos personales
5. Confirma el pedido
6. El pedido se guarda en:
   - Base de datos (para el admin)
   - localStorage (para tu perfil)

### Estados del Pedido

- **Pendiente**: Pedido recibido, sin procesar
- **Confirmado**: Pedido confirmado
- **Preparando**: Pedido en preparación
- **Enviado**: Pedido en camino
- **Entregado**: Pedido entregado
- **Cancelado**: Pedido cancelado

## 🔧 API Endpoints

### Públicas (sin autenticación)

- `GET /api/products` - Listar productos
- `GET /api/products/[id]` - Obtener un producto
- `GET /api/categories` - Listar categorías

### Protegidas (requiere autenticación de admin)

- `POST /api/products` - Crear producto
- `PUT /api/products/[id]` - Actualizar producto
- `DELETE /api/products/[id]` - Eliminar producto
- `GET /api/admin/stats` - Obtener estadísticas

### De Administrador

- `POST /api/admin/auth` - Iniciar sesión admin
- `GET /api/admin/auth` - Verificar sesión
- `POST /api/admin/logout` - Cerrar sesión admin

## 🔒 Seguridad

### Token de Admin

- Almacenado en `.env` (no en código)
- Cookies HTTP-only para las sesiones
- Tokens con expiración de 24 horas
- Verificación en cada request a rutas protegidas

### Cookies HTTP-only

```typescript
response.cookies.set('admin-session', 'true', {
  httpOnly: true,           // No accesible desde JavaScript
  secure: process.env.NODE_ENV === 'production',  // Solo HTTPS en producción
  sameSite: 'strict',      // Protección CSRF
  maxAge: 60 * 60 * 24,   // 24 horas
})
```

## 📱 Rutas de la Aplicación

### Rutas Principales
- `/` - Página de inicio
- `/cart` - Carrito de compras
- `/checkout` - Proceso de compra
- `/success` - Confirmación de pedido

### Rutas de Usuario
- `/auth/signin` - Iniciar sesión
- `/auth/signup` - Crear cuenta
- `/profile` - Perfil de usuario

### Rutas de Administrador
- `/admin/login` - Login de admin
- `/admin/dashboard` - Panel de administración

## 💾 Almacenamiento de Datos

### Base de Datos (SQLite)

- **Productos**: Información de inventario
- **Categorías**: Clasificación de productos
- **Pedidos**: Historial de ventas
- **Items de pedido**: Detalle de cada pedido
- **Usuarios**: Información de clientes
- **Testimonios**: Reseñas de clientes
- **FAQ**: Preguntas frecuentes
- **ContactMessages**: Mensajes del formulario

### LocalStorage (Navegador)

- **userProfile**: Información personal del usuario actual
- **userOrders**: Historial de pedidos del usuario actual
- **cart-storage**: Carrito de compras (Zustand)

## 🎨 Personalización

### Cambiar Colores

Edita `/src/app/globals.css` para personalizar la paleta de colores.

### Cambiar Token de Admin

1. Edita el archivo `.env`
2. Cambia `ADMIN_TOKEN` a tu valor seguro
3. Reinicia el servidor de desarrollo

## 🚀 Despliegue en Producción

### Antes de Desplegar

1. Cambia `ADMIN_TOKEN` en `.env` a un token seguro
2. Verifica que `NEXTAUTH_SECRET` sea un string único
3. Configura Google OAuth (opcional)
4. Ejecuta `bun run build`

### Variables de Entorno para Producción

```env
DATABASE_URL="file:../db/custom.db"
NEXTAUTH_URL="https://tu-dominio.com"
NEXTAUTH_SECRET="genera-un-secret-seguro-aquí"
ADMIN_TOKEN="usa-un-token-muy-seguro-aquí"
GOOGLE_CLIENT_ID="tu-google-client-id"
GOOGLE_CLIENT_SECRET="tu-google-client-secret"
```

## 🐛 Solución de Problemas

### No puedo acceder al panel de admin

1. Verifica que el token sea correcto
2. Asegúrate de estar en `/admin/login`
3. Limpia las cookies del navegador

### Los cambios no se reflejan en tiempo real

1. Recarga la página del dashboard
2. Si el problema persiste, espera unos segundos
3. La API puede tardar en actualizar los datos

### No se guarda mi perfil

1. Asegúrate de hacer clic en "Guardar"
2. Verifica que haya un mensaje de éxito (toast)
3. Recarga la página del perfil

### Error al crear producto

1. Verifica que estés autenticado como admin
2. Asegúrate de que la sesión no haya expirado (24 horas)
3. Completa todos los campos requeridos

---

© 2024 Aguas Libres - Sistema de Administración y E-commerce
