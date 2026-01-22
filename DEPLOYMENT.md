# 🚀 Guía de Despliegue - Aguas Libres

## 📋 Tabla de Contenidos
- [Opciones de Despliegue](#opciones-de-despliegue)
- [Requisitos Previos](#requisitos-previos)
- [Opción 1: VPS (Recomendado)](#opción-1-vps-recomendado)
- [Opción 2: Railway](#opción-2-railway)
- [Opción 3: Render](#opción-3-render)
- [Configuración de Base de Datos](#configuración-de-base-de-datos)
- [Configuración de Variables de Entorno](#configuración-de-variables-de-entorno)
- [Dominios Personalizados](#dominios-personalizados)
- [SSL/HTTPS](#sslhttps)
- [Mantenimiento](#mantenimiento)

---

## 🌐 Opciones de Despliegue

### ⚠️ Importante: ¿Por qué NO usar Vercel/Netlify?

Este proyecto usa **SQLite** como base de datos y **z-ai-web-dev-sdk** para capacidades AI:

- **SQLite** es una base de datos basada en archivos
- En plataformas serverless (Vercel, Netlify), cada solicitud crea una nueva instancia del servidor
- Los datos NO se persisten entre solicitudes
- Los pedidos, productos, y contactos se perderían

### ✅ Opciones Recomendadas

| Opción | Costo | Dificultad | Persistencia de BD | Recomendado Para |
|--------|-------|------------|-------------------|------------------|
| **VPS (DigitalOcean, Linode, AWS EC2)** | $5-10/mes | Media | ✅ Total | Producción profesional |
| **Railway** | $5-20/mes | Baja | ✅ Total | Fácil configuración |
| **Render** | $7-25/mes | Baja | ✅ Total | Fácil configuración |

---

## 📦 Requisitos Previos

### Para TODAS las opciones:
1. ✅ Cuenta de Git (GitHub, GitLab, Bitbucket)
2. ✅ Cuenta en el proveedor de hosting
3. ✅ Dominio personalizado (opcional pero recomendado)

### Para VPS:
4. ✅ Conocimientos básicos de Linux/SSH
5. ✅ Cliente SSH (Terminal, PuTTY, etc.)

### Para Railway/Render:
4. ✅ Tarjeta de crédito para facturación

---

## 🚀 Opción 1: VPS (Recomendado)

### Proveedores Recomendados:
- **DigitalOcean** - `$5/mes` (2GB RAM, 1 CPU, 50GB SSD)
- **Linode** - `$5/mes` (2GB RAM, 1 CPU, 50GB SSD)
- **AWS EC2** - `~$8-12/mes` (t2.micro con free tier)
- **Google Cloud** - `~$6/mes` (e2-micro)

### Pasos detallados:

#### 1. Crear cuenta en el proveedor
1. Ve al sitio web del proveedor (ej: https://www.digitalocean.com/)
2. Regístrate con email y contraseña
3. Agrega método de pago (tarjeta)
4. Verifica tu email

#### 2. Crear el servidor (Droplet en DigitalOcean)
1. Entra al panel de control
2. Clic en "Create Droplet" (o equivalente)
3. Selecciona:
   - **Region**: La más cercana a tus usuarios (ej: NYC, São Paulo)
   - **OS**: Ubuntu 22.04 LTS o 24.04 LTS
   - **Size**: Basic, $5/mes (2GB RAM, 1 CPU, 50GB SSD)
   - **Authentication**: SSH Keys (recomendado) o Password
4. Clic en "Create Droplet"
5. Espera 2-3 minutos, recibirás la IP del servidor

#### 3. Subir código al servidor

**Si tienes SSH Key:**
```bash
# Copiar código al servidor
scp -r /home/z/my-project root@TU_IP:/home/aguas-libres

# Conectar al servidor
ssh root@TU_IP
```

**Si usas contraseña:**
```bash
# Conectar al servidor (te pedirá contraseña)
ssh root@TU_IP

# En el servidor:
mkdir -p /home/aguas-libres
exit

# Copiar código (desde tu máquina local)
scp -r /home/z/my-project root@TU_IP:/home/aguas-libres
```

#### 4. Instalar dependencias en el servidor

**Conecta al servidor:**
```bash
ssh root@TU_IP
```

**Instalar Bun:**
```bash
# Ir al directorio del proyecto
cd /home/aguas-libres

# Instalar Bun
curl -fsSL https://bun.sh/install | bash

# Recargar shell
source ~/.bashrc

# Verificar instalación
bun --version
```

#### 5. Configurar el entorno

```bash
# Crear archivo .env
cat > .env << 'EOF'
DATABASE_URL="file:../db/custom.db"

NEXTAUTH_URL="https://tu-dominio.com"
NEXTAUTH_SECRET="aguas-libres-secret-key-$(openssl rand -base64 32)"

GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""

AI_SDK_API_KEY=""

# CAMBIAR ESTE TOKEN EN PRODUCCIÓN
ADMIN_TOKEN="$(openssl rand -base64 32)-admin-secure"
EOF
```

#### 6. Instalar dependencias y construir

```bash
# Instalar dependencias
bun install

# Generar Prisma Client
bunx prisma generate

# Sincronizar base de datos
bun run db:push

# Construir aplicación
bun run build
```

#### 7. Configurar servidor con PM2

**Instalar PM2:**
```bash
bun install -g pm2
```

**Crear configuración PM2:**
```bash
cat > ecosystem.config.cjs << 'EOF'
module.exports = {
  apps: [{
    name: 'aguas-libres',
    script: 'bun',
    args: 'start',
    cwd: '/home/aguas-libres',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true
  }]
}
EOF

# Crear directorio de logs
mkdir -p logs
```

**Iniciar aplicación:**
```bash
# Iniciar con PM2
pm2 start ecosystem.config.cjs

# Verificar estado
pm2 status

# Ver logs en tiempo real
pm2 logs aguas-libres
```

#### 8. Configurar Nginx como reverse proxy

**Instalar Nginx:**
```bash
apt update
apt install nginx -y
```

**Crear configuración Nginx:**
```bash
cat > /etc/nginx/sites-available/aguas-libres << 'EOF'
server {
    listen 80;
    server_name tu-dominio.com www.tu-dominio.com;

    # Limitar tamaño de subida de archivos (imágenes)
    client_max_body_size 10M;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Para API routes (sin cache)
    location /api/ {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF
```

**Activar configuración:**
```bash
# Crear enlace simbólico
ln -s /etc/nginx/sites-available/aguas-libres /etc/nginx/sites-enabled/

# Eliminar configuración por defecto
rm /etc/nginx/sites-enabled/default

# Verificar configuración
nginx -t

# Reiniciar Nginx
systemctl restart nginx
```

#### 9. Configurar SSL con Let's Encrypt

**Instalar Certbot:**
```bash
apt install certbot python3-certbot-nginx -y
```

**Obtener certificado SSL:**
```bash
# Asegúrate que tu dominio apunta a la IP del servidor
certbot --nginx -d tu-dominio.com -d www.tu-dominio.com
```

Certbot te hará preguntas:
1. Email: Ingresa tu email
2. Terms: Acepta los términos (A)
3. Newsletter: Puedes declinar (N)

**Renovación automática:**
```bash
# Verificar renovación automática
certbot renew --dry-run
```

#### 10. Configurar firewall

```bash
# Permitir SSH, HTTP, HTTPS
ufw allow 22/tcp
ufw allow 80/tcp
ufw allow 443/tcp
ufw enable
ufw status
```

#### 11. Configurar backups automáticos (opcional pero recomendado)

**Instalar rclone para backups:**
```bash
curl https://rclone.org/install.sh | bash
```

**Crear script de backup:**
```bash
cat > /home/backup-db.sh << 'EOF'
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/home/backups"
DB_PATH="/home/aguas-libres/db"

# Crear directorio de backups
mkdir -p $BACKUP_DIR

# Backup de base de datos
cp $DB_PATH/custom.db $BACKUP_DIR/custom-$DATE.db

# Mantener solo últimos 7 días
find $BACKUP_DIR -name "custom-*.db" -mtime +7 -delete

echo "Backup completado: $BACKUP_DIR/custom-$DATE.db"
EOF

chmod +x /home/backup-db.sh
```

**Agregar al crontab:**
```bash
# Editar crontab
crontab -e

# Agregar esta línea (backup diario a las 3am)
0 3 * * * /home/backup-db.sh >> /home/backup.log 2>&1
```

#### 12. Monitoreo básico

**Ver logs:**
```bash
# Ver logs de la aplicación
pm2 logs aguas-libres

# Ver logs de Nginx
tail -f /var/log/nginx/access.log
tail -f /var/log/nginx/error.log
```

**Reiniciar aplicación:**
```bash
pm2 restart aguas-libres
```

**Actualizar aplicación:**
```bash
# Ir al directorio
cd /home/aguas-libres

# Actualizar código (desde Git)
git pull origin main

# O si estás subiendo manualmente, usa scp desde tu máquina local

# Instalar dependencias nuevas
bun install

# Construir
bun run build

# Reiniciar
pm2 restart aguas-libres
```

---

## 🚂 Opción 2: Railway

Railway es la opción más fácil para despliegue sin configuración de servidor.

### Pasos detallados:

#### 1. Crear cuenta en Railway
1. Ve a https://railway.app/
2. Clic en "Start a New Project"
3. Regístrate o ingresa con GitHub/GitLab/Bitbucket

#### 2. Conectar repositorio Git

**Opción A: Desde GitHub**
1. Crea un repositorio en GitHub
2. Sube tu código:
```bash
# En tu máquina local
cd /home/z/my-project
git init
git add .
git commit -m "Inicialización de proyecto Aguas Libres"

# Crear repositorio en GitHub primero, luego:
git remote add origin https://github.com/TU_USUARIO/aguas-libres.git
git branch -M main
git push -u origin main
```

3. En Railway: "New Project" → "Deploy from GitHub repo"
4. Selecciona tu repositorio

**Opción B: CLI de Railway**
```bash
# Instalar CLI
npm install -g @railway/cli

# Login
railway login

# Inicializar proyecto
railway init

# Seleccionar: "Deploy from existing repo"
```

#### 3. Configurar Railway

Railway detectará automáticamente que es un proyecto Next.js.

**Variables de entorno:**
Clic en tu proyecto → "Variables" → "New Variable"

Agrega estas variables:
```
NODE_ENV=production
DATABASE_URL=file:./db/custom.db
NEXTAUTH_URL=https://tu-proyecto.railway.app
NEXTAUTH_SECRET=tu-secret-generado
ADMIN_TOKEN=tu-token-admin-unico
```

**Importante:** Copia la URL que Railway te da (ej: `https://aguas-libres-production.up.railway.app`)

#### 4. Configurar persistencia de base de datos

Railway necesita una configuración especial para SQLite.

Crea un archivo `railway.toml` en la raíz del proyecto:

```toml
[build]
builder = "NIXPACKS"

[deploy]
healthcheckPath = "/"
healthcheckTimeout = 300
restartPolicyType = "ON_FAILURE"
restartPolicyMaxRetries = 10

[[services]]
name = "web"
service计划 = "Eco"
```

O mejor aún, para Railway con persistencia de datos, debes agregar un **volumen persistente**:

En Railway dashboard:
1. Ve a tu proyecto
2. Clic en tu servicio
3. "Settings" → "Volumes"
4. Clic en "New Volume"
5. Nombre: `data`
6. Mount path: `/app/db`
7. Clic en "Create Volume"

#### 5. Actualizar DATABASE_URL

Cambia en Railway:
```
DATABASE_URL=file:/app/db/custom.db
```

#### 6. Dominio personalizado (opcional)

1. Ve a "Settings" → "Domains"
2. Clic en "New Domain"
3. Ingresa tu dominio (ej: `aguaslibres.com`)
4. Railway te dará los DNS records que debes configurar en tu registrador

5. **SSL automático**: Railway configura HTTPS automáticamente

#### 7. Monitoreo

En Railway dashboard:
- **Logs**: Ver logs en tiempo real
- **Metrics**: CPU, memoria, red
- **Deployments**: Historial de despliegues

---

## 🎨 Opción 3: Render

Render es similar a Railway pero con algunas diferencias.

### Pasos detallados:

#### 1. Crear cuenta en Render
1. Ve a https://render.com/
2. Clic en "Get Started"
3. Regístrate o ingresa con GitHub

#### 2. Subir código a GitHub
(Same as Railway step 2)

#### 3. Crear Web Service en Render

1. Dashboard → "New" → "Web Service"
2. Connect: GitHub
3. Selecciona tu repositorio
4. Configuración:

**Name:** `aguas-libres`

**Environment:** `Node`

**Build Command:**
```bash
bun install && bun run build
```

**Start Command:**
```bash
bun start
```

**Instance Type:** `Free` (con limitaciones) o `Starter` ($7/mes)

**Variables de entorno:**

Scroll to "Environment Variables" y agrega:
```
NODE_ENV=production
DATABASE_URL=file:./db/custom.db
NEXTAUTH_URL=https://tu-proyecto.onrender.com
NEXTAUTH_SECRET=tu-secret-generado
ADMIN_TOKEN=tu-token-admin-unico
```

#### 4. Configurar persistencia en Render

**IMPORTANTE:** Render Free Tier NO tiene persistencia de disco. Para SQLite, necesitas:

**Opción A: Render Disk (Paid)**
1. En tu Web Service → "Advanced"
2. "Disk" → "Add Disk"
3. Nombre: `db-disk`
4. Mount path: `/app/db`
5. Size: 1GB ($5/mes adicional)
6. Actualiza DATABASE_URL: `file:/app/db/custom.db`

**Opción B: Render PostgreSQL (Recomendado)**
1. Dashboard → "New" → "PostgreSQL"
2. Nombre: `aguas-libres-db`
3. Plan: Free (90 días) o Starter ($7/mes)
4. Render te dará la DATABASE_URL

5. **Actualizar Prisma schema:**
```prisma
// Cambiar en schema.prisma:
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

6. **Re-deploy** para actualizar la BD

#### 5. Dominio personalizado (opcional)

1. Web Service → "Settings" → "Custom Domains"
2. "Add Domain"
3. Ingresa tu dominio
4. Render te dará DNS records para configurar
5. SSL es automático

---

## 💾 Configuración de Base de Datos

### Opción 1: Mantener SQLite (Recomendado para VPS)

SQLite funciona perfectamente en VPS porque tienes un servidor dedicado.

**Ventajas:**
- ✅ Sin costo adicional
- ✅ Sencillo de administrar
- ✅ Buen rendimiento para sitios pequeños/medianos
- ✅ Fácil de hacer backups

**Script de backup:**
```bash
#!/bin/bash
# /home/backup-db.sh

DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/home/backups"
DB_PATH="/home/aguas-libres/db"

mkdir -p $BACKUP_DIR

# Backup
cp $DB_PATH/custom.db $BACKUP_DIR/custom-$DATE.db

# Compresión
gzip $BACKUP_DIR/custom-$DATE.db

# Mantener 7 días
find $BACKUP_DIR -name "custom-*.db.gz" -mtime +7 -delete
```

### Opción 2: Migrar a PostgreSQL

Para Railway o Render, PostgreSQL es mejor opción.

**Pasos para migrar:**

1. **Actualizar schema.prisma:**
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

2. **Exportar datos de SQLite:**
```bash
# Instalar sqlite3
apt install sqlite3 -y

# Exportar a SQL
sqlite3 db/custom.db .dump > backup.sql
```

3. **Importar a PostgreSQL:**
```bash
# Crear BD en PostgreSQL
psql -h TU_HOST -U TU_USUARIO -d postgres -c "CREATE DATABASE aguaslibres;"

# Importar
psql -h TU_HOST -U TU_USUARIO -d aguaslibres < backup.sql
```

4. **Actualizar .env:**
```
DATABASE_URL="postgresql://usuario:contraseña@host:5432/aguaslibres"
```

---

## 🔐 Configuración de Variables de Entorno

### Variables Obligatorias

```bash
# Base de datos
DATABASE_URL="file:../db/custom.db"  # SQLite
# o
DATABASE_URL="postgresql://user:pass@host:5432/dbname"  # PostgreSQL

# Next.js/NextAuth
NEXTAUTH_URL="https://tu-dominio.com"
NEXTAUTH_SECRET="cadena-secreta-aleatoria-generada-con-openssl"

# Token de administración
ADMIN_TOKEN="tu-token-unico-y-secreto"
```

### Generar secretos seguros:

```bash
# Generar NEXTAUTH_SECRET
openssl rand -base64 32

# Generar ADMIN_TOKEN
openssl rand -base64 32
```

### Variables Opcionales (para capacidades AI)

```bash
# z-ai-web-dev-sdk
AI_SDK_API_KEY="tu-api-key"
```

### Google OAuth (si quieres usar Google login)

```bash
GOOGLE_CLIENT_ID="tu-client-id"
GOOGLE_CLIENT_SECRET="tu-client-secret"
```

Para obtener estas credenciales:
1. Ve a https://console.cloud.google.com/
2. Crea nuevo proyecto o usa existente
3. Ve a "APIs & Services" → "Credentials"
4. "Create Credentials" → "OAuth client ID"
5. Configure consent screen
6. Agrega tu dominio a "Authorized redirect URIs":
   - `https://tu-dominio.com/api/auth/callback/google`

---

## 🌐 Dominios Personalizados

### Comprar dominio

Registradores recomendados:
- Namecheap ($9-12/año)
- GoDaddy ($12-15/año)
- Cloudflare ($8-10/año)

### Configurar DNS

**Para VPS con Nginx:**
1. En tu registrador, ve a "DNS Management"
2. Agrega records:

```
Type: A
Name: @
Value: TU_IP_DEL_SERVIDOR
TTL: 3600

Type: A
Name: www
Value: TU_IP_DEL_SERVIDOR
TTL: 3600
```

3. Espera propagación DNS (5 minutos - 48 horas)

**Para Railway:**
1. Railway dashboard → "Settings" → "Domains"
2. "New Domain" → `aguaslibres.com`
3. Copia los DNS records que Railway te da
4. Pega en tu registrador

**Para Render:**
1. Render dashboard → "Custom Domains"
2. "Add Domain"
3. Copia DNS records y agrega en tu registrador

---

## 🔒 SSL/HTTPS

### VPS con Let's Encrypt (GRATIS)

Ya se configuró en paso 9 de la opción VPS.

**Renovación manual si es necesario:**
```bash
certbot renew
systemctl reload nginx
```

### Railway/Render (GRATIS y automático)

SSL/HTTPS está incluido automáticamente:
- Railway: Siempre HTTPS
- Render: Siempre HTTPS

---

## 🔧 Mantenimiento

### Verificar estado del sitio

```bash
# Verificar que el sitio está activo
curl -I https://tu-dominio.com

# Deberías ver: HTTP/2 200
```

### Actualizar aplicación

**Para VPS:**
```bash
ssh root@TU_IP
cd /home/aguas-libres

# Opción 1: Desde Git
git pull origin main

# Opción 2: Subir archivos desde local (en tu máquina)
scp -r /home/z/my-project/* root@TU_IP:/home/aguas-libres/

# Instalar dependencias
bun install

# Construir
bun run build

# Reiniciar
pm2 restart aguas-libres
```

**Para Railway:**
```bash
git push origin main
# Railway detectará cambios y hará deploy automático
```

**Para Render:**
```bash
git push origin main
# Render detectará cambios y hará deploy automático
```

### Backups

**Automatizados (VPS):**
Ya se configuraron en paso 11 de la opción VPS.

**Manuales:**
```bash
# Backup de BD
scp root@TU_IP:/home/aguas-libres/db/custom.db ./backup-$(date +%Y%m%d).db
```

**Restaurar backup:**
```bash
scp ./backup-20240115.db root@TU_IP:/home/aguas-libres/db/custom.db
pm2 restart aguas-libres
```

### Monitoreo

**Logs (VPS):**
```bash
# PM2 logs
pm2 logs aguas-libres --lines 100

# Nginx logs
tail -f /var/log/nginx/access.log
tail -f /var/log/nginx/error.log
```

**Railway/Render:**
- Dashboard tiene sección de "Logs"
- Ver en tiempo real
- Puedes filtrar por deployment

---

## 📊 Comparativa de Costos Mensuales

### VPS (Recomendado)
- Servidor: $5-10
- Dominio: $1-1.5/mes (si se paga anual)
- SSL: GRATIS (Let's Encrypt)
- **TOTAL: ~$6-12/mes**

### Railway
- Starter: $5/mes (512MB RAM)
- Database volume: $5/mes (opcional si usas SQLite)
- Dominio: $1-1.5/mes
- **TOTAL: ~$6-12/mes**

### Render
- Starter: $7/mes (512MB RAM)
- PostgreSQL Free: 90 días gratis, luego $7/mes
- Dominio: $1-1.5/mes
- **TOTAL: ~$15-16/mes**

---

## ✅ Checklist Antes de Lanzar

- [ ] Código en repositorio Git
- [ ] Variables de entorno configuradas
- [ ] Base de datos inicializada
- [ ] Token de admin cambiado
- [ ] NEXTAUTH_SECRET generado correctamente
- [ ] Dominio configurado (si aplica)
- [ ] SSL/HTTPS funcionando
- [ ] Backup automático configurado
- [ ] Firewall activado (VPS)
- [ ] Monitoreo de logs activo
- [ ] Pruebas de checkout completas
- [ ] Pruebas de admin panel completas

---

## 🆘 Troubleshooting

### Sitio no carga
```bash
# Verificar que el servicio está corriendo
pm2 status

# Ver logs
pm2 logs

# Verificar puerto
netstat -tlnp | grep 3000
```

### Errores de base de datos
```bash
# Verificar que el archivo de BD existe
ls -lh db/custom.db

# Verificar permisos
chmod 644 db/custom.db
```

### Errores de Nginx
```bash
# Verificar configuración
nginx -t

# Ver logs
tail -f /var/log/nginx/error.log

# Reiniciar
systemctl restart nginx
```

### Certificados SSL expiraron
```bash
# Renovar manualmente
certbot renew

# Recargar Nginx
systemctl reload nginx
```

---

## 📞 Soporte Adicional

Si necesitas ayuda con el despliegue:
- Revisa los logs para identificar el problema
- Verifica que todas las variables de entorno estén configuradas
- Asegúrate que el puerto 3000 esté libre
- Verifica permisos de archivos

---

## 🎉 ¡Felicidades!

Tu sitio de Aguas Libres ahora debería estar en línea y accesible para todos.

**Accesos:**
- Público: `https://tu-dominio.com`
- Admin: `https://tu-dominio.com/admin/login`
- Token de admin: Revisa tu archivo `.env`

**Recuerda:**
- Guarda tu token de admin en lugar seguro
- Haz backups regularmente
- Mantén tu servidor actualizado
- Monitorea los logs periódicamente
