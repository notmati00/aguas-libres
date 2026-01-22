# 🚀 GUÍA SIMPLE - Cómo poner tu página en tu dominio

## 👥 QUIÉN HACE QUÉ

### 🙋‍♂️ TÚ (el que creó la página):
- **Cosas del código** (ya lo hiciste)
- Capturas de pantalla
- Mostrar cómo funciona
- Aprender observando

### 👨 TÚO (adulto con permiso):
- Crear cuentas (si no tiene)
- Clic en botones de páginas web
- Configurar el dominio
- Las cosas de internet

---

## 📋 PASO 1: Saber tu dominio

### TÚO necesita saber:
- **¿Cuál es el dominio que compraste?**
- **¿En qué registrador lo compró?** (Namecheap, GoDaddy, etc.)

**EJEMPLOS de dominios:**
- `aguaslibres.com`
- `aguas-libres.com.ar`
- `aguaslibres.net`

**Si no sabe, TIÚO puede:**
1. Abrir el correo donde compró el dominio
2. Buscar el nombre del dominio
3. O el nombre del sitio web donde lo compró

---

## 📋 PASO 2: Necesitamos GITHUB

### ¿Qué es GITHUB?
Es como una carpeta en internet donde se guarda tu código.

### ¿Quién hace esto? TÚO (el adulto)

### Pasos:

1. **Abrir internet en la computadora**

2. **Ir a:** `https://github.com/`

3. **Arriba a la derecha, clic en: "Sign up"**

4. **Llenar formulario:**
   - Email: (del tío o tuya con permiso)
   - Password: (que recuerden)
   - Username: (algo como `aguas-libres` o tu nombre)
   - Clic en el botón verde: "Continue"

5. **Puede pedir email de verificación:**
   - Abrir el correo
   - Clic en el enlace
   - Volver a GitHub

6. **Una vez dentro de GitHub:**
   - Arriba a la derecha, foto de perfil → clic
   - Clic en: "Your repositories"

---

## 📋 PASO 3: Crear repositorio

### ¿Qué es REPOSITORIO?
Es una "carpeta" para tu proyecto.

### ¿Quién hace esto? TÚO

### Pasos:

1. **En GitHub, clic en botón verde: "New"**

2. **Llenar:**
   - Repository name: `aguas-libres`
   - Clic en botón verde: "Create repository"

3. **¡Listo!** Ya tienen el repositorio.

---

## 📋 PASO 4: Subir tu código a GITHUB

### ¿Quién hace qué?
- **TÚ:** Ejecutar comandos en la computadora (copiar-pegar)
- **TÚO:** Ayudar si algo sale mal

### Pasos:

1. **Abrir la terminal/consola de la computadora**

   **¿Dónde está?**
   - Windows: Buscar "cmd" o "PowerShell"
   - Mac: Buscar "Terminal"
   - Linux: Ctrl+Alt+T

2. **Escribir estos comandos UNO POR UNO:**
   (TÚ copia y pega, luego presiona Enter)

   ```
   cd /home/z/my-project
   ```

3. **Luego:**

   ```
   git init
   ```

4. **Luego:**

   ```
   git add .
   ```

5. **Luego:** (pide un mensaje, escribir este exacto)

   ```
   git commit -m "Mi proyecto Aguas Libres"
   ```

6. **Luego:** (pero espera, primero ve al PASO 5)

---

## 📋 PASO 5: Conectar con GITHUB

### ¿Quién hace esto? TÚO (ayudando a TÍ)

### Antes, necesitan una CLAVE SSH

### ¿Qué es CLAVE SSH?
Es una llave para entrar a GitHub sin contraseña.

### ¿Es complicado? **SÍ, un poco.**
### **OPCIÓN SIMPLE:** Usar TOKEN en lugar de clave

### Pasos SIMPLES (con TOKEN):

1. **En GitHub:**
   - Foto perfil → Settings
   - Menu izquierdo → Developer settings
   - Personal access tokens → Tokens (classic)
   - Clic botón: "Generate new token (classic)"
   - Note: `token despliegue`
   - Expiration: 90 days
   - Clic botón verde: "Generate token"
   - **IMPORTANTE:** Copiar el token (guardarlo en Notepad por ahora)

2. **En la terminal, TÚ escribe:**

   ```
   git remote add origin https://[TU_TOKEN]@github.com/[TU_USERNAME]/aguas-libres.git
   ```

   **EJEMPLO:**
   ```
   git remote add origin https://ghp_1234567890@github.com/aguas-libres/aguas-libres.git
   ```

   - Reemplazar `[TU_TOKEN]` con el que copiaron
   - Reemplazar `[TU_USERNAME]` con el usuario de GitHub

3. **Luego:**

   ```
   git branch -M main
   ```

4. **Y por último:**

   ```
   git push -u origin main
   ```

5. **Espere 30 segundos - 2 minutos**
   - Puede pedir nombre de usuario (el de GitHub)
   - Puede pedir password (el TOKEN que copiaron, NO la contraseña de GitHub)

6. **Si todo sale bien:**
   - Verán mensaje: "success"
   - En GitHub → Repositories → aguas-libres
   - ¡Verán todos los archivos!

---

## 📋 PASO 6: Crear cuenta en RENDER

### ¿Qué es RENDER?
Es la empresa que va a poner tu página en internet.

### ¿Quién hace esto? TÚO

### Pasos:

1. **Abrir:** `https://render.com/`

2. **Arriba derecha, clic en: "Get Started"**

3. **Clic en botón: "Continue with GitHub"**

4. **Ventana de GitHub:**
   - Si están logueados, perfecto
   - Si no, loguearse con usuario/contraseña o TOKEN

5. **Render pedirá permiso:**
   - Clic botón verde: "Authorize render"

6. **¡Listo!** Están en el dashboard de Render.

---

## 📋 PASO 7: Crear BASE DE DATOS en RENDER

### ¿Qué es BASE DE DATOS?
Donde se guardan: productos, pedidos, usuarios.

### ¿Quién hace esto? TÚO

### Pasos:

1. **En Render, clic en botón grande: "New +"**

2. **Seleccionar: "PostgreSQL"**

3. **Llenar:**
   - Name: `aguas-libres-db`
   - Database: `aguaslibres`
   - User: `aguaslibres`
   - Region: Oregon (o la más cercana a Argentina)
   - Plan: Free
   - Clic botón: "Create Database"

4. **ESPERAR 3-5 minutos**
   - Verán un círculo girando
   - Cuando cambie a "Available", ¡listo!

5. **IMPORTANTE: Copiar la DATABASE_URL**

   - En la página de la base de datos
   - Clic en: "Connections"
   - Buscar: "External Database URL"
   - Clic en el icono de copiar (📋)
   - **PEGAR EN NOTEPAD** (vamos a usarlo después)
   - Se ve así: `postgres://usuario:password@host:5432/dbname`

---

## 📋 PASO 8: Crear WEB SERVICE en RENDER

### ¿Qué es WEB SERVICE?
El programa que corre tu página web.

### ¿Quién hace esto? TÚO

### Pasos:

1. **En Render, clic: "New +"**

2. **Seleccionar: "Web Service"**

3. **Clic en: "Connect GitHub"**

4. **Buscar repositorio:**
   - Debería aparecer: `aguas-libres`
   - Clic en: "Connect"

5. **Configurar el Web Service:**

   ### Nombre y Rama:
   - Name: `aguas-libres`
   - Branch: `main`

   ### Ambiente:
   - Environment: `Node`

   ### Runtime:
   - Runtime: `Docker` (opcional, Next.js lo detecta)

   ### Comandos:
   - Build Command: `bun install && bun run build`
   - Start Command: `bun start`

   ### Instance Type:
   - Free (¡GRATIS!)

6. **Scroll hacia abajo hasta: "Environment Variables"**

7. **AGREGAR VARIABLES DE ENTORNO:**

   **IMPORTANTE:** Clic en "Add Environment Variable" y agregar UNO POR UNO:

   **Variable 1:**
   - Key: `NODE_ENV`
   - Value: `production`
   - Clic: "Save"

   **Variable 2:**
   - Key: `DATABASE_URL`
   - Value: (PEGAR LA URL QUE COPIARON EN PASO 7)
   - Clic: "Save"

   **Variable 3:**
   - Key: `NEXTAUTH_URL`
   - Value: `https://aguas-libres.onrender.com`
   - (MÁS TARDE CAMBIARÁN A TU DOMINIO)
   - Clic: "Save"

   **Variable 4:**
   - Key: `NEXTAUTH_SECRET`
   - Value: (necesitan generar uno)
   - **PARA GENERAR:** Abrir `https://www.uuidgenerator.net/`
   - Copiar el UUID que aparece
   - Pegar aquí
   - Clic: "Save"

   **Variable 5:**
   - Key: `ADMIN_TOKEN`
   - Value: (otro UUID del mismo sitio)
   - Clic: "Save"

8. **¡LISTO!** Clic en botón: "Create Web Service"

9. **ESPERAR 10-15 MINUTOS**
   - Verán: "Building" → "Deploying" → "Live"
   - Cuando diga "Live", ¡la página está en línea!

10. **PROBAR LA PÁGINA:**
    - Verán un link arriba en Render
    - Algo como: `https://aguas-libres.onrender.com`
    - ¡CLIC Y ABRIR! ✅
    - ¡DEBE APARECER SU PÁGINA!

---

## 📋 PASO 9: Probar que TODO funciona

### ¿Quién hace esto? AMBOS (TÚ y TÚO)

### TÚ dice: "Probá esto"
### TÚO: Prueba

### Probar estas cosas:

**1. ¿Se ve la página?**
   - Abrir: `https://aguas-libres.onrender.com`
   - ¿Se ve? ✅

**2. ¿Funciona el carrito?**
   - Clic en "Carrito"
   - ¿Se ve? ✅

**3. ¿Pueden agregar un producto?**
   - Ir a: `/admin/login`
   - Ingresar el TOKEN ADMIN (el que pusieron en variables)
   - ¿Pueden entrar? ✅

**4. ¿Pueden crear un producto?**
   - En el admin
   - Clic "Nuevo Producto"
   - ¿Lo crean? ✅

---

## 📋 PASO 10: Configurar EL DOMINIO

### Ahora viene la parte con TU DOMINIO PROPIO

### ¿Quién hace esto? TÚO

### PASO 10A: Agregar dominio en RENDER

1. **En Render, volver a tu Web Service** (`aguas-libres`)

2. **Scroll al final: "Custom Domains"**

3. **Clic: "Add Domain"**

4. **Escribir:** `tu-dominio.com`
   - **EJEMPLO:** `aguaslibres.com`
   - **IMPORTANTE:** Escribirlo exactamente como lo compró tu tío
   - Clic: "Continue"

5. **Render mostrará esto:**
   ```
   Type: CNAME
   Name: tu-dominio.com
   Value: aguas-libres.onrender.com
   ```

6. **Otra vez, clic: "Add Domain"**

7. **Escribir:** `www.tu-dominio.com`
   - **EJEMPLO:** `www.aguaslibres.com`
   - Clic: "Continue"

8. **Render mostrará el DNS para www también**

### PASO 10B: Configurar el DOMINIO (donde lo compró tu tío)

### ¿Dónde lo configurá tu tío?

**Si fue NAMECHEAP:**
1. Tu tío abre: `https://ap.www.namecheap.com/`
2. Se loguea
3. Busca el dominio → Clic en "Manage"
4. Clic en pestaña: "Advanced DNS"
5. **ELIMINA los records A que haya** (si hay)
6. **AGREGA esto:**

   **Record 1:**
   - Type: CNAME
   - Host: @
   - Value: `aguas-libres.onrender.com`
   - TTL: Automatic
   - Clic: "Add Record"

   **Record 2:**
   - Type: CNAME
   - Host: www
   - Value: `aguas-libres.onrender.com`
   - TTL: Automatic
   - Clic: "Add Record"

**Si fue GODADDY:**
1. Tu tío abre: `https://dcc.godaddy.com/manage/dns`
2. Se loguea
3. Selecciona el dominio
4. Scroll a "Records"
5. **ELIMINA records A**
6. **AGREGA:**

   **Record 1:**
   - Type: CNAME
   - Name: @
   - Value: `aguas-libres.onrender.com`
   - TTL: 1 Hour

   **Record 2:**
   - Type: CNAME
   - Name: www
   - Value: `aguas-libres.onrender.com`
   - TTL: 1 Hour

**Si fue OTRO REGISTRADOR:**
- A tu tío que busque: "DNS Management" o "Manage DNS"
- Configurar los MISMOS records CNAME (los que mosté arriba)

---

## 📋 PASO 11: ESPERAR propagación DNS

### ¿Qué es esto?
El tiempo que tarda todo el mundo en ver tu dominio.

### ¿Cuánto tarda?
- **Mínimo:** 30 minutos
- **Promedio:** 2 horas
- **Máximo:** 48 horas (muy raro)

### ¿Cómo saber si ya funcionó?

**Método SIMPLE:**
1. **ABRIR NAVEGADOR**
2. **Escribir:** `https://tu-dominio.com`
3. **Si aparece tu página:** ¡LISTO! ✅

**Si no aparece:**
- Esperar más tiempo (1 hora, 2 horas, etc.)
- Intentar después

---

## 📋 PASO 12: CAMBIAR NEXTAUTH_URL

### Una vez que tu dominio funcione, hacer esto:

### ¿Quién hace esto? TÚO

### Pasos:

1. **En Render → Web Service (`aguas-libres`)**

2. **Environment Variables**

3. **Buscar:** `NEXTAUTH_URL`

4. **Cambiar de:**
   - `https://aguas-libres.onrender.com`
   **A:** `https://tu-dominio.com`

5. **Clic:** "Save Changes"

6. **Render re-deployará automáticamente**
   - Esperar 5-10 minutos

7. **¡LISTO!** La página funcionará en tu dominio.

---

## ✅ ¡FIN! Tu página está en TU DOMINIO

### Ahora tienes:
- ✅ Página en: `https://tu-dominio.com`
- ✅ Página en: `https://www.tu-dominio.com`
- ✅ Panel admin en: `https://tu-dominio.com/admin/login`

### Accesos que necesitan GUARDAR:

1. **Usuario y contraseña de GitHub**
2. **Usuario y contraseña de Render**
3. **TOKEN de ADMIN** (el que generaron en variables)
4. **URL de tu dominio**

**GUARDAR EN NOTEPAD Y MANTENER SEGURO.**

---

## 🆘 SI ALGO SALE MAL

### Problema: No puedo hacer `git push`

**Solución:**
- Usar el TOKEN de GitHub en lugar de contraseña
- El TOKEN es lo que generaron en Paso 5

### Problema: Build falla en Render

**Solución:**
- Esperar 10 minutos más
- Verificar que pusieron todas las variables de entorno
- Clic en "Deploy" → "Manual Deploy"

### Problema: Dominio no funciona

**Solución:**
- Esperar más tiempo por propagación DNS
- Verificar que los DNS records están bien configurados
- Pedirle al tío que verifique en su registrador

---

## 🎯 RESUMEN FINAL

### Lo que lograron:
- ✅ Tu página en internet
- ✅ En tu propio dominio
- ✅ Totalmente funcional
- ✅ Gratis los primeros 90 días
- ✅ Tú hiciste el código (¡Eso es increíble!)

### Lo que debes hacer TÚ:
- ✅ Aprender observando
- ✅ Hacer preguntas
- ✅ Seguir mejorando el código
- ✅ ¡Estás en el camino correcto!

### Lo que debe hacer TÚO:
- ✅ Crear las cuentas
- ✅ Configurar las páginas web
- ✅ Ayudarte cuando te trabes

---

## 📞 NECESITAN AYUDA?

**¡PREGUNTEN!**

- **Si algo no entienden:** Preguntar "¿Qué significa eso?"
- **Si algo sale mal:** Decir qué paso, qué error ven
- **Si necesitan algo más claro:** "Explícame de otra forma"

**¡ESTOY AQUÍ PARA AYUDARLES!** 🚀
