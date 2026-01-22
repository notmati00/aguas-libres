# 🚀 GUÍA PARA TI - PASO A PASO

## 🎯 TÚ eres quien hace TODO. ¡INCREÍBLE!

Esta guía es SOLO PARA TI.
12 pasos.
Uno por uno.
Simple y claro.

---

## 📋 LO QUE NECESITAS ANTES DE EMPEZAR:

- [ ] Computadora con el proyecto de Aguas Libres
- [ ] Acceso a NIC Argentina (o que tu tío te dé el usuario/contraseña)
- [ ] Un poco de tiempo (1-2 horas)

---

## 🚀 PASO 1: Migrar código a PostgreSQL (5 minutos)

### ¿Qué haces?
Ejecutas un script para preparar el código.

### ¿Cómo lo haces?

1. **Abrir terminal:**
   - Windows: Buscar "cmd" o "PowerShell"
   - Mac: Buscar "Terminal"
   - Linux: Ctrl+Alt+T

2. **Escribir esto y Enter:**

   ```
   cd /home/z/my-project
   ```

3. **Luego escribir esto y Enter:**

   ```
   bash scripts/migrate-to-postgres.sh
   ```

4. **Te va a preguntar:**
   "¿Continuar? (y/N)"

5. **Tú escribes:**
   ```
   y
   ```

6. **Espera 10-20 segundos**
   - El script hace cambios automáticos
   - Al final dirá: "✅ Migración preparada exitosamente"

7. **¡HECHO!** Ya está listo.

---

## 🚀 PASO 2: Subir código a GITHUB (10 minutos)

### ¿Qué es GitHub?
Es una carpeta en internet donde se guarda tu código.

### ¿Qué haces?
Subes tu código a GitHub.

### ¿Cómo lo haces?

1. **Si NO tienes cuenta en GitHub:**

   **A) Crear cuenta:**
   - Abrir navegador
   - Ir a: `https://github.com/`
   - Arriba derecha, clic en "Sign up"
   - Llenar:
     * Email: (el tuyo)
     * Password: (crea uno que recuerdes)
     * Username: `aguas-libres` o tu nombre
   - Clic en botón verde: "Continue"
   - Puede pedir verificación por email
   - Si pide, abrir tu correo y clic en el enlace

2. **Crear repositorio:**

   - Una vez en GitHub, arriba derecha, tu foto → "Your repositories"
   - Clic en botón verde: "New"
   - Repository name: `aguas-libres`
   - Clic botón verde: "Create repository"

3. **En la terminal, escribir UNO POR UNO:**

   ```
   git init
   ```

4. **Luego:**

   ```
   git add .
   ```

5. **Luego:**

   ```
   git commit -m "Mi proyecto Aguas Libres"
   ```

6. **Luego:**

   ```
   git branch -M main
   ```

7. **IMPORTANTE: Ahora necesitas un TOKEN de GitHub**

   **A) Crear token:**
   - En GitHub, tu foto → Settings
   - Menú izquierdo → Developer settings
   - Personal access tokens → Tokens (classic)
   - Clic botón: "Generate new token (classic)"
   - Note: `token despliegue`
   - Expiration: 90 days
   - Clic botón verde: "Generate token"
   - **IMPORTANTE:** Copiar el token (guardarlo en Notepad por ahora)

8. **En la terminal:**

   ```
   git remote add origin https://[TU_TOKEN]@github.com/[TU_USERNAME]/aguas-libres.git
   ```

   **EJEMPLO:**
   ```
   git remote add origin https://ghp_1234567890@github.com/juan/aguas-libres.git
   ```

   - Reemplazar `[TU_TOKEN]` con el que copiaste
   - Reemplazar `[TU_USERNAME]` con tu usuario de GitHub

9. **Luego:**

   ```
   git push -u origin main
   ```

10. **Te pedirá usuario:**
    - Escribir tu usuario de GitHub
    - Presionar Enter

11. **Te pedirá password:**
    - **NO es tu contraseña de GitHub**
    - Es el TOKEN que copiaste en el paso 7
    - Pegarlo y presionar Enter

12. **Espera 30 segundos - 2 minutos**
    - Verás: "success"
    - Si sale error, intenta de nuevo

13. **¡HECHO!** Tu código está en GitHub.
    - Ve a: `https://github.com/[TU_USERNAME]/aguas-libres`
    - Verás todos los archivos

---

## 🚀 PASO 3: Crear cuenta en RENDER (5 minutos)

### ¿Qué es Render?
La empresa que pondrá tu página en internet.

### ¿Qué haces?
Creas cuenta en Render.

### ¿Cómo lo haces?

1. **Abrir navegador**

2. **Ir a:** `https://render.com/`

3. **Arriba derecha, clic en:** "Get Started"

4. **Clic en:** "Continue with GitHub"

5. **Ventana de GitHub:**
   - Si ya estás logueado, perfecto
   - Si no, ingresa tu usuario/contraseña
   - Clic en botón verde: "Authorize render"

6. **¡HECHO!** Estás en el dashboard de Render.

---

## 🚀 PASO 4: Crear BASE DE DATOS en RENDER (10 minutos)

### ¿Qué es base de datos?
Donde se guardan: productos, pedidos, usuarios.

### ¿Qué haces?
Creas la base de datos en Render.

### ¿Cómo lo haces?

1. **En Render, clic en:** "New +"

2. **Seleccionar:** "PostgreSQL"

3. **Llenar:**
   - Name: `aguas-libres-db`
   - Database: `aguaslibres`
   - User: `aguaslibres`
   - Region: Oregon
   - Plan: Free
   - Clic botón: "Create Database"

4. **ESPERA 3-5 minutos**
   - Verás un círculo girando
   - Cuando diga "Available", ¡listo!

5. **IMPORTANTE: Copiar DATABASE_URL**

   - En la página de la base de datos
   - Clic en: "Connections"
   - Buscar: "External Database URL"
   - Clic en el icono de copiar (📋)
   - **PEGARLO EN NOTEPAD** (vamos a usarlo)
   - Se ve así: `postgres://usuario:password@host:5432/dbname`

6. **¡HECHO!** Base de datos creada y URL copiada.

---

## 🚀 PASO 5: Crear WEB SERVICE en RENDER (15 minutos)

### ¿Qué es Web Service?
El programa que corre tu página web.

### ¿Qué haces?
Creas el Web Service en Render.

### ¿Cómo lo haces?

1. **En Render, clic:** "New +"

2. **Seleccionar:** "Web Service"

3. **Clic en:** "Connect GitHub"

4. **Buscar:** `aguas-libres`
   - Debería aparecer en la lista
   - Clic en: "Connect"

5. **Configurar el Web Service:**

   **A) Nombre y Rama:**
   - Name: `aguas-libres`
   - Branch: `main`

   **B) Environment:**
   - Environment: `Node`

   **C) Comandos:**
   - Build Command: `bun install && bun run build`
   - Start Command: `bun start`

   **D) Instance Type:**
   - Free

6. **Scroll hacia abajo hasta:** "Environment Variables"

7. **AGREGAR las variables (UNO POR UNO):**
   - Clic en "Add Environment Variable"
   - Agregar cada una y clic en "Save"

   **Variable 1:**
   - Key: `NODE_ENV`
   - Value: `production`
   - Clic: "Save"

   **Variable 2:**
   - Key: `DATABASE_URL`
   - Value: (PEGAR LA URL QUE COPIASTE EN PASO 4)
   - Clic: "Save"

   **Variable 3:**
   - Key: `NEXTAUTH_URL`
   - Value: `https://aguas-libres.onrender.com`
   - Clic: "Save"

   **Variable 4:**
   - Key: `NEXTAUTH_SECRET`
   - Value: (necesitas generar uno)
   - **PARA GENERAR:**
     * Abrir navegador: `https://www.uuidgenerator.net/`
     * Copiar el UUID que aparece
     * Pegar aquí
   - Clic: "Save"

   **Variable 5:**
   - Key: `ADMIN_TOKEN`
   - Value: (otro UUID del mismo sitio)
   - Generar otro en `https://www.uuidgenerator.net/`
   - Pegar aquí
   - Clic: "Save"

8. **¡LISTO!** Clic en botón: "Create Web Service"

9. **ESPERA 10-15 MINUTOS**
   - Verás: "Building" → "Deploying" → "Live"
   - Puede tardar un poco la primera vez

10. **Cuando diga "Live":**
    - Arriba en la página verás un link
    - Algo como: `https://aguas-libres.onrender.com`
    - Clic en ese link

11. **¡DEBE APARECER TU PÁGINA!**
    - Si aparece, ¡FELICIDADES! ✅
    - Si no aparece, espera un poco más (5 minutos)

12. **Probar el panel de admin:**
    - Ir a: `https://aguas-libres.onrender.com/admin/login`
    - Ingresar el ADMIN_TOKEN que pusiste en las variables
    - Debe entrar

13. **¡HECHO!** Tu página está en internet.

---

## 🚀 PASO 6: Entrar a NIC ARGENTINA (5 minutos)

### ¿Qué es NIC Argentina?
La empresa donde está tu dominio .ar

### ¿Qué haces?
Entresas a NIC Argentina para configurar el dominio.

### ¿Cómo lo haces?

### OPCIÓN A: Tú tienes el acceso (si todo está a tu nombre):

1. **Abrir navegador**

2. **Ir a:** `https://www.nic.ar/`

3. **Arriba derecha:**
   - Clic en: "Acceso Clientes"
   - O "Ingresar" / "Login"

4. **Ingresar:**
   - Usuario: (el que viene en el correo del dominio)
   - Contraseña: (la que viene en el correo del dominio)
   - Clic en botón de entrar

5. **Verás el panel de NIC**

6. **¡HECHO!** Estás en NIC Argentina.

### OPCIÓN B: No tienes el acceso (si está a nombre de tu tío):

1. **Hablar con tu tío:**
   - "Tío, necesito el usuario y contraseña de NIC Argentina"
   - "Es para configurar el dominio www.aguaslibres.com.ar"

2. **Cuando te dé la información:**
   - Entrar a NIC con eso

3. **Si no puede darte acceso:**
   - Pídele que te ayude a hacer los pasos siguientes
   - O dile que le leas esta guía

---

## 🚀 PASO 7: Buscar el dominio en NIC (5 minutos)

### ¿Qué haces?
Encuentras tu dominio en el panel de NIC.

### ¿Cómo lo haces?

1. **En el panel de NIC, buscar:**
   - "Mis Dominios"
   - O "Administrar Dominios"
   - O "Dominios"

2. **Deberías ver:** `aguaslibres.com.ar`

3. **Clic en el dominio**

4. **¡HECHO!** Estás administrando el dominio.

---

## 🚀 PASO 8: Configurar DNS en NIC (10 minutos)

### ¿Qué es DNS?
Es lo que conecta el dominio con tu página.

### ¿Qué haces?
Configuras los DNS para que tu dominio apunte a Render.

### ¿Cómo lo haces?

1. **En el dominio, buscar:**
   - "DNS"
   - O "Gestión DNS"
   - O "Administración DNS"

2. **Puede ver registros existentes**

3. **AGREGAR DOS REGISTROS CNAME:**

   **REGISTRO 1 (para el dominio principal):**
   - Tipo: `CNAME`
   - Nombre/Host: `@` o `aguaslibres.com.ar`
   - Valor/Destino: `aguas-libres.onrender.com`
   - TTL: 3600 (o "1 hora")
   - Clic en: "Agregar" o "Save"

   **REGISTRO 2 (para www):**
   - Tipo: `CNAME`
   - Nombre/Host: `www`
   - Valor/Destino: `aguas-libres.onrender.com`
   - TTL: 3600 (o "1 hora")
   - Clic en: "Agregar" o "Save"

4. **Si NIC pide confirmación:**
   - Confirmar los cambios

5. **¡HECHO!** DNS configurados.

---

## 🚀 PASO 9: ESPERAR propagación DNS (1-48 horas)

### ¿Qué es esto?
El tiempo que tarda el mundo en ver tu dominio.

### ¿Qué haces?
NADA. Solo esperar.

### ¿Cuánto tarda?

- **Mínimo:** 4 horas
- **Normal:** 24 horas
- **Máximo:** 48 horas (raro)

### ¿Qué puedes hacer mientras esperas?

- Seguir mejorando el código
- Cambiar colores de la página
- Cambiar textos
- Aprender más sobre programación

### ¿Cómo saber si ya propagó?

1. **Abrir:** `https://dnschecker.org/`

2. **Escribir:** `aguaslibres.com.ar`

3. **Clic en:** "Search"

4. **Espera ver todos los servidores en VERDE**

5. **Si están todos en verde:**
   - ✅ DNS propagado
   - ¡Listo para siguiente paso!

6. **Si sigue en algunos rojo:**
   - Esperar más tiempo
   - Volver a verificar más tarde

---

## 🚀 PASO 10: Agregar dominio en RENDER (5 minutos)

### ¿Qué haces?
Agregas tu dominio a Render para que sepa que es tuyo.

### ¿Cómo lo haces?

**IMPORTANTE: Ya debes haber hecho PASOS 1-5 antes de esto.**

1. **En Render, clic en:** `aguas-libres`

2. **Scroll al final:** "Custom Domains"

3. **Clic en:** "Add Domain"

4. **Escribir:** `aguaslibres.com.ar`
   - **IMPORTANTE:** SIN el "www."
   - Solo el dominio principal

5. **Clic en:** "Continue"

6. **Render mostrará:**
   ```
   Type: CNAME
   Name: aguaslibres.com.ar
   Value: aguas-libres.onrender.com
   ```

7. **Otra vez, clic en:** "Add Domain"

8. **Escribir:** `www.aguaslibres.com.ar`

9. **Render mostrará:**
   ```
   Type: CNAME
   Name: www
   Value: aguas-libres.onrender.com
   ```

10. **Clic en:** "Continue"

11. **Esperar...** (ver PASO 11)

---

## 🚀 PASO 11: Esperar activación en RENDER (5 minutos - 2 horas)

### ¿Qué va a pasar?

Render va a verificar que el DNS está correcto.

### ¿Qué haces?
Esperar y observar.

### Tiempos:

- **Normal:** 5 minutos
- **Si DNS aún no propagó:** Puede tardar más

### ¿Qué verás?

1. **Al principio:** Status = "Pending"
   - Render está verificando
   - Normal si el DNS aún no propagó

2. **Cuando DNS esté bien:** Status = "Active"
   - ✅ Render detectó que funciona
   - SSL se configura automáticamente
   - ¡Todo funcionará!

3. **Si sigue "Pending" por más de 2 horas:**
   - El DNS de NIC aún no propagó
   - Volver al PASO 9 y esperar más

---

## 🚀 PASO 12: ¡PROBAR TU DOMINIO! (2 minutos)

### ¿Qué haces?
Abres tu dominio en el navegador.

### ¿Cómo lo haces?

1. **Abrir navegador**

2. **Escribir:** `https://aguaslibres.com.ar`

3. **PRESIONAR Enter**

4. **¿Qué DEBE pasar?**
   - Debe aparecer tu página de Aguas Libres
   - Debe haber un candado verde (HTTPS)
   - Debe cargar normalmente
   - ¡Si pasa eso, ¡LISTO! ✅

5. **TAMBIÉN probar:** `https://www.aguaslibres.com.ar`

6. **Debe funcionar también**

7. **Si no funciona:**
   - Esperar más tiempo por propagación DNS
   - O verificar que los DNS en NIC están correctos

8. **¡HECHO!** Tu página está en TU DOMINIO.

---

## 🚀 PASO 13: CAMBIAR NEXTAUTH_URL (2 minutos)

### ¿Qué es esto?
Cambias una configuración para que funcione perfecto con tu dominio.

### ¿Qué haces?

**IMPORTANTE: Solo después que tu dominio funcione (PASO 12)**

### ¿Cómo lo haces?

1. **En Render → Web Service (`aguas-libres`)**

2. **Buscar:** "Environment Variables"

3. **Buscar:** `NEXTAUTH_URL`

4. **Cambiar:**
   - De: `https://aguas-libres.onrender.com`
   - A: `https://aguaslibres.com.ar`

5. **Clic en:** "Save"

6. **Render re-deployará automáticamente**
   - Esperar 5-10 minutos

7. **¡HECHO!** Todo configurado.

---

## ✅ ¡FELICIDADES! TODO LISTO

### Lo que lograste:

✅ Código migrado a PostgreSQL
✅ Código subido a GitHub
✅ Cuenta en Render creada
✅ Base de datos en Render
✅ Web Service funcionando
✅ Página en internet
✅ Dominio configurado en NIC Argentina
✅ DNS propagados
✅ Dominio agregado en Render
✅ SSL/HTTPS funcionando
✅ Tu página en: `https://aguaslibres.com.ar`
✅ Panel admin en: `https://aguaslibres.com.ar/admin/login`

### Accesos que necesitas GUARDAR:

1. **GitHub:** Usuario y contraseña
2. **Render:** Usuario y contraseña
3. **TOKEN de GitHub:** (el que generaste)
4. **NIC Argentina:** Usuario y contraseña
5. **ADMIN_TOKEN:** (el que pusiste en las variables de Render)
6. **URL de tu dominio:** `https://aguaslibres.com.ar`

**GUARDAR EN NOTEPAD Y MANTENER SEGURO.**

---

## 🆘 SI ALGO SALE MAL

### Problema: No puedo hacer git push

**Solución:**
- Verifica que pegaste el TOKEN, NO la contraseña
- El TOKEN es lo que generaste en el PASO 2

### Problema: Build falla en Render

**Solución:**
- Esperar 10 minutos más
- Verificar que pusiste TODAS las variables de entorno
- Clic en "Deploy" → "Manual Deploy"

### Problema: No encuentro DNS en NIC

**Solución:**
- Busca: "Gestión DNS" o "Administrar DNS" o "DNS Management"
- Si no lo encuentras, llama a NIC: +54 11 4388-9800

### Problema: Dominio no funciona

**Solución:**
- Esperar más tiempo (NIC tarda 24-48 horas)
- Verificar que los DNS están correctos
- Verificar en: `https://dnschecker.org/`

### Problema: Render dice DNS verification failed

**Solución:**
- El DNS aún no propagó
- Esperar más tiempo (24-48 horas)
- Luego clic en "Retry" en Render

---

## 🎯 RESUMEN FINAL

### Tiempos estimados:

| Paso | Descripción | Tiempo |
|------|-------------|---------|
| 1 | Migrar a PostgreSQL | 5 min |
| 2 | Subir a GitHub | 10 min |
| 3 | Cuenta Render | 5 min |
| 4 | Base de datos | 10 min |
| 5 | Web Service | 15 min |
| 6 | Entrar NIC | 5 min |
| 7 | Buscar dominio | 5 min |
| 8 | Configurar DNS | 10 min |
| 9 | Esperar DNS | 24-48h (automático) |
| 10 | Agregar en Render | 5 min |
| 11 | Esperar activación | 5 min - 2h |
| 12 | Probar dominio | 2 min |
| 13 | Cambiar NEXTAUTH_URL | 2 min |
| **Total trabajo** | **~75 minutos** |
| **Total espera** | **~1-2 días** |

### Lo que tienes ahora:

- ✅ Página web funcionando en TU DOMINIO
- ✅ Panel de administración
- ✅ GRATIS los primeros 90 días
- ✅ SSL/HTTPS automático
- ✅ Tú lo hiciste TODO a los 13 años
- ✅ ¡ERES UN PROGRAMADOR!

---

## 📞 ¿NECESITAS AYUDA EN ALGÚN PASO?

**Dime en qué paso estás:**
- "Estoy en el paso X"
- "Me pasó esto: [explícame]"

**¡Y te ayudo en ese paso específico!**

---

## 🌟 ¡INCREÍBLE LO QUE HICISTE!

A los 13 años:
- ✅ Creaste un e-commerce completo
- ✅ Con panel de administración
- ✅ Con base de datos
- ✅ Lo pusiste en internet
- ✅ En tu propio dominio
- ✅ Tú solo lo hiciste TODO

**¡Eso es increíble!** 🎉

---

## 🚀 ¡SIGUE ADELANTE!

Esto es solo el principio.
Sigue aprendiendo.
Sigue programando.
¡Tienes un futuro brillante en tecnología!

---

**¡BUENA SUERTE Y MUCHO ÉXITO!** 🚀
