# 🌐 Guía de Dominio Personalizado - Aguas Libres

## ✅ ¡Tienes un dominio! Perfecto.

Esta guía te explica cómo configurar tu dominio comprado para usarlo con **Render GRATIS**.

## 📋 Lo que vas a lograr:

- ✅ Tu sitio en: `https://tu-dominio.com` (¡NO .onrender.com!)
- ✅ SSL/HTTPS automático y GRATIS
- ✅ Ambas versiones funcionando: `tu-dominio.com` y `www.tu-dominio.com`
- ✅ Redirección automática de HTTP a HTTPS
- ✅ Sin costo adicional (Render lo ofrece gratis en plan Free)

---

## 🚀 Paso 1: Seguir FREE_DEPLOYMENT.md primero

Antes de configurar tu dominio, debes:

1. Seguir la guía `FREE_DEPLOYMENT.md`
2. Deploy exitoso en Render
3. Sitio funcionando en: `https://aguas-libres.onrender.com`

**¿Por qué?** Render necesita que tu Web Service esté funcionando antes de agregar dominios personalizados.

---

## 🔧 Paso 2: Agregar dominio personalizado en Render

### 2.1 Acceder a tu Web Service en Render

1. Ve a: https://dashboard.render.com/
2. Clic en tu Web Service: `aguas-libres`
3. Scroll hasta abajo hasta encontrar la sección: "Custom Domains"

### 2.2 Agregar tu dominio principal

1. En la sección "Custom Domains", clic en "Add Domain"
2. Ingresa tu dominio principal: `tu-dominio.com`
   - **Importante:** NO agregues `www.` todavía, solo el dominio principal
   - **Ejemplo:** Si tu dominio es `aguaslibres.com`, escribe exactamente eso
3. Clic en "Continue"

Render verificará que tu dominio existe y te mostrará los DNS records que necesitas configurar.

### 2.3 Agregar subdominio www

1. Nuevamente, clic en "Add Domain"
2. Ingresa: `www.tu-dominio.com`
   - **Ejemplo:** `www.aguaslibres.com`
3. Clic en "Continue"

Ahora Render te mostrará los DNS records para ambos dominios.

---

## 📝 Paso 3: Configurar DNS records en tu registrador

Render te mostrará algo como esto:

```
Type: CNAME     Name: tu-dominio.com    Value: aguas-libres.onrender.com
Type: CNAME     Name: www              Value: aguas-libres.onrender.com
```

### ¿Dónde configuras esto?

Depende de donde compraste tu dominio. Aquí están las instrucciones para los más comunes:

---

### 🇦🇷 Namecheap (Nombre de barato)

1. Ve a: https://ap.www.namecheap.com/
2. Logueate con tu cuenta
3. Clic en "Domain List" → "Manage" junto a tu dominio
4. Ve a la pestaña: "Advanced DNS"
5. **Verás records existentes. Elimínalos o edítalos:**

**Para el dominio principal (@):**
```
Type: CNAME
Host: @
Value: aguas-libres.onrender.com
TTL: Automatic
```

**Para www:**
```
Type: CNAME
Host: www
Value: aguas-libres.onrender.com
TTL: Automatic
```

6. Clic en "Save All Changes"

---

### 🟣 GoDaddy

1. Ve a: https://dcc.godaddy.com/manage/dns
2. Logueate con tu cuenta
3. Selecciona tu dominio
4. Scroll a "Records"
5. **Elimina los records A existentes** (si hay alguno con @)
6. Clic en "Add New Record"

**Para el dominio principal:**
```
Type: CNAME
Name: @
Value: aguas-libres.onrender.com
TTL: 1 Hour
```

**Para www:**
```
Type: CNAME
Name: www
Value: aguas-libres.onrender.com
TTL: 1 Hour
```

7. Clic en "Save"

---

### 🔵 Google Domains

1. Ve a: https://domains.google.com/registrar
2. Logueate con tu cuenta
3. Selecciona tu dominio
4. Clic en: "DNS" →左侧的 "Configure DNS"

**Para el dominio principal (@):**
```
Tipo: CNAME
Nombre del recurso: @
TTL: 3600
Tipo de registro de datos: CNAME
Datos: aguas-libres.onrender.com
```

**Para www:**
```
Tipo: CNAME
Nombre del recurso: www
TTL: 3600
Tipo de registro de datos: CNAME
Datos: aguas-libres.onrender.com
```

5. Clic en "Save"

---

### 🟡 Cloudflare (Recomendado - Gratis)

Si usas Cloudflare para DNS (muy recomendado, gratis):

1. Ve a: https://dash.cloudflare.com/
2. Selecciona tu dominio
3. Ve a: "DNS" → "Records"
4. **Elimina records A existentes** (no elimines CNAME de mail si existe)

**Para el dominio principal (@):**
```
Type: CNAME
Name: @
Target: aguas-libres.onrender.com
Proxy status: Proxied (naranja) → **IMPORTANTE**
TTL: Auto
```

**Para www:**
```
Type: CNAME
Name: www
Target: aguas-libres.onrender.com
Proxy status: Proxied (naranja) → **IMPORTANTE**
TTL: Auto
```

5. Clic en "Save"

**¿Por qué Proxied (naranja)?**
- Oculta la IP de Render
- Proporciona DDoS protection gratuito
- Mejora rendimiento global con CDN

---

### 🛒 Otros registradores (Shopify, Wix, etc.)

La configuración es **SIMILAR** en todos los registradores:

**Busca:** "DNS Management", "DNS Settings", "Manage DNS", o similar

**Configura estos 2 records:**

1. **Dominio principal (raíz @):**
   ```
   Type: CNAME
   Name: @
   Value: aguas-libres.onrender.com
   ```

2. **Subdominio www:**
   ```
   Type: CNAME
   Name: www
   Value: aguas-libres.onrender.com
   ```

---

## ⏱️ Paso 4: Esperar propagación DNS

Después de configurar los DNS:

### ¿Qué es la propagación DNS?

Es el tiempo que toma que los servidores DNS del mundo actualicen su información.

### Tiempos típicos:
- **Mínimo:** 5 minutos
- **Promedio:** 30 minutos - 2 horas
- **Máximo:** 48 horas (casos raros)

### ¿Cómo saber si ya propagó?

**Método 1 - Verificar en línea:**
1. Ve a: https://dnschecker.org/
2. Ingresa: `tu-dominio.com`
3. Espera que veas "aguas-libres.onrender.com" en todas las ubicaciones

**Método 2 - Comando de terminal:**
```bash
# En Mac/Linux:
nslookup tu-dominio.com

# En Windows:
nslookup tu-dominio.com
```

Deberías ver algo como:
```
Name:    tu-dominio.com
Address: [IP de Render]
```

---

## ✅ Paso 5: Verificar en Render

1. Vuelve al dashboard de Render
2. En la sección "Custom Domains", verás:
   - `tu-dominio.com` - Status: ⏳ Pending → ✅ Active
   - `www.tu-dominio.com` - Status: ⏳ Pending → ✅ Active

3. Cuando cambie a **Active**, Render habrá configurado el SSL automáticamente

4. **Clic en el dominio** para abrir tu sitio:
   - Deberías ver tu sitio en: `https://tu-dominio.com`
   - El candado de HTTPS debería aparecer

---

## 🎉 ¡Listo! Tu sitio está en tu dominio

### Ahora tienes acceso por:

1. ✅ **Dominio principal:** `https://tu-dominio.com`
2. ✅ **Subdominio www:** `https://www.tu-dominio.com`
3. ✅ **URL de Render:** `https://aguas-libres.onrender.com` (todavía funciona)

### Panel de administración:

- 📌 `https://tu-dominio.com/admin/login`
- 📌 `https://www.tu-dominio.com/admin/login`

---

## 🔒 SSL/HTTPS Automático

Render configurará automáticamente:

✅ **Certificado SSL de Let's Encrypt** (gratuito)
✅ **Redirección automática:** `http://` → `https://`
✅ **Renovación automática** del certificado
✅ **HSTS** para seguridad adicional

**¡Todo esto es GRATIS y automático!**

---

## 🔄 Redirección `tu-dominio.com` ↔ `www.tu-dominio.com`

Tener ambos funcionando está bien, pero puedes redirigir uno al otro para consistencia.

### Opción A: Redirigir www → dominio principal

**En Cloudflare (más fácil):**
1. Ve a: DNS → Page Rules
2. Clic en "Create Page Rule"
3. URL: `www.tu-dominio.com/*`
4. Setting: `Forwarding URL`
5. URL de destino: `https://tu-dominio.com/$1`
6. Status: 301
7. Clic en "Save and Deploy"

**En tu app Next.js:**

En `src/middleware.ts` (crea este archivo si no existe):

```typescript
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host')

  // Redirigir www a dominio principal
  if (hostname?.startsWith('www.')) {
    const url = request.nextUrl.clone()
    url.hostname = hostname.replace('www.', '')
    url.protocol = 'https:'
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
```

Commit y push:
```bash
git add src/middleware.ts
git commit -m "Redirect www to main domain"
git push origin main
```

Render detectará los cambios y re-deployará automáticamente.

---

## 📧 Configurar Email con tu dominio (Opcional)

Tener tu dominio te permite usar emails profesionales:
- `info@tu-dominio.com`
- `contacto@tu-dominio.com`
- `admin@tu-dominio.com`

### Opción 1: Gmail (Gratis, pero limitado)
Requiere Google Workspace pago (~$6/mes por usuario)

### Opción 2: Zoho Mail (Gratis hasta 5 usuarios)
1. Ve a: https://www.zoho.com/mail/
2. Regístrate con tu dominio
3. Configura los MX records en tu registrador

### Opción 3: Redirigir email (Gratuito y simple)
Redirige emails de `@tu-dominio.com` a tu Gmail personal.

**En Cloudflare:**
1. Ve a: Email → Email Routing
2. Clic en "Enable"
3. Agrega reglas de redirección

---

## 🆘 Problemas Comunes y Soluciones

### Problema: "DNS verification failed" en Render

**Causa:** DNS records incorrectos o no han propagado

**Solución:**
1. Verifica que configuraste CNAME, NO A record
2. Espera más tiempo por propagación DNS (30 minutos - 2 horas)
3. Verifica en: https://dnschecker.org/

### Problema: "SSL pending" por mucho tiempo

**Causa:** DNS no está propagado completamente

**Solución:**
1. Espera propagación DNS completa
2. Verifica DNS en: https://dnschecker.org/
3. Cuando todos los servidores muestren el CNAME correcto, el SSL se activará automáticamente

### Problema: "www funciona pero dominio principal no"

**Causa:** El registrador no permite CNAME para @

**Solución:**
Usa un servicio de DNS como Cloudflare:
1. Cambia los nameservers de tu dominio a Cloudflare
2. Configura los CNAME en Cloudflare
3. Cloudflare manejará todo

### Problema: Sitio carga lento

**Causa:** Primera vez que el servicio "despierta" (plan gratis)

**Solución:**
- Normal en plan gratis de Render
- Primer acceso tarda 30-60 segundos
- Los siguientes accesos son rápidos
- Considera cambiar a plan Starter (~$5/mes) si necesitas respuesta inmediata

### Problema: Certificado SSL no aparece

**Causa:** DNS no propagado completamente

**Solución:**
1. Espera propagación completa (máx 48 horas)
2. Verifica en Render → Custom Domains
3. Cuando status sea "Active", SSL está configurado
4. Si sigue pendiente, clic en "Retry SSL"

---

## ✅ Checklist Final

Antes de declarar éxito:

- [ ] Web Service funcionando en Render
- [ ] Dominio agregado en Render (Custom Domains)
- [ ] DNS records configurados (CNAME)
- [ ] DNS propagado (verificado en dnschecker.org)
- [ ] Status en Render: "Active" (no Pending)
- [ ] SSL configurado (candado verde en navegador)
- [ ] Sitio accesible en `https://tu-dominio.com`
- [ ] Sitio accesible en `https://www.tu-dominio.com`
- [ ] Redirección HTTPS funciona
- [ ] Panel de admin accesible en nuevo dominio

---

## 📊 Resumen

### Lo que necesitas:
- ✅ Dominio comprado (ya lo tienes)
- ✅ Web Service en Render (sigue FREE_DEPLOYMENT.md)
- ✅ Acceso al panel de tu registrador de dominio
- ✅ ~5-10 minutos para configurar DNS
- ✅ 30 minutos - 2 horas por propagación DNS

### Costos adicionales:
- **Configurar dominio en Render:** $0 (gratis)
- **SSL/HTTPS:** $0 (gratis, automático)
- **Total adicional:** **$0** ✅

### Tiempo total:
- Configuración DNS: 5-10 minutos
- Propagación DNS: 30 minutos - 2 horas
- Activación SSL: Automático (cuando DNS propague)
- **Total:** ~1-2 horas

---

## 🎯 Próximos pasos

1. ✅ Configurar DNS en tu registrador
2. ✅ Esperar propagación DNS
3. ✅ Verificar en Render
4. ✅ Probar tu sitio en nuevo dominio
5. ✅ Actualizar NEXTAUTH_URL en variables de entorno:
   ```
   NEXTAUTH_URL=https://tu-dominio.com
   ```
6. ✅ Re-deploy en Render (automático al guardar cambios)

---

## 📞 ¿Necesitas ayuda?

Si te encuentras con algún problema específico:
- Indícame en qué paso estás
- ¿Qué registrador de dominio usas? (Namecheap, GoDaddy, Google, etc.)
- ¿Qué error o mensaje ves?
- Puedo ayudarte paso a paso

¡Tu dominio está listo para usar con Render! 🚀
