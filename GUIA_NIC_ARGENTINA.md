# 🇦🇷 GUIA NIC ARGENTINA - Para dominio .ar

## 🎯 TU DOMINIO: `www.aguaslibres.com.ar`

### Registrar: NIC Argentina

Esto es **ESPECIAL** porque NIC Argentina es el registrador oficial de dominios .ar

---

## 📋 ANTES DE EMPEZAR - COSAS IMPORTANTES

### ¿Tienen cuenta en NIC Argentina?

**Si tu tío compró el dominio:**
- ✅ TIENE cuenta en NIC Argentina
- Tiene usuario y contraseña para entrar

**Si no recuerdan:**
1. Tu tío busca el correo donde compró el dominio
2. Ahí debe venir el usuario/contraseña de NIC Argentina

---

## 📋 PASO 1: Tu tío entra a NIC Argentina

### ¿Quién hace esto? TÚO (el tío)

### Pasos:

1. **Abrir:** `https://www.nic.ar/`

2. **Arriba a la derecha:**
   - Clic en: "Acceso Clientes"
   - O "Ingresar" / "Login"

3. **Ingresar:**
   - Usuario: (el de tu tío)
   - Contraseña: (la de tu tío)
   - Clic en botón de entrar

4. **Verán el panel de control de NIC**

---

## 📋 PASO 2: Buscar el dominio

### ¿Quién hace esto? TÚO

### Pasos:

1. **En el panel de NIC, buscar:**
   - "Mis Dominios"
   - O "Administrar Dominios"
   - O "Dominios"

2. **Deberían ver:** `aguaslibres.com.ar`

3. **Clic en el dominio para administrarlo**

---

## 📋 PASO 3: Configurar DNS

### ¿Qué es DNS?
Es lo que conecta el dominio con tu página web.

### ¿Quién hace esto? TÚO

### IMPORTANTE: NIC Argentina funciona diferente

**En NIC Argentina, pueden:**
- **Opción A:** Configurar DNS directo en NIC (más simple)
- **Opción B:** Cambiar los nameservers a otro servicio (más flexible)

### RECOMIENDO: Opción A (Configurar DNS en NIC)

---

## 📋 PASO 4: Configurar DNS en NIC Argentina

### ¿Quién hace esto? TÚO

### Pasos:

1. **En el dominio, buscar:**
   - "DNS"
   - O "Gestión DNS"
   - O "Administración DNS"

2. **Puede ver registros existentes**

3. **AGREGAR registros CNAME:**

   **IMPORTANTE:** En NIC Argentina, agregar registros así:

   **Registro 1 (para el dominio principal):**
   - Tipo: `CNAME`
   - Nombre/Host: `@` o `aguaslibres.com.ar`
   - Valor/Destino: `aguas-libres.onrender.com`
   - TTL: 3600 (o 1 hora)

   **Registro 2 (para www):**
   - Tipo: `CNAME`
   - Nombre/Host: `www`
   - Valor/Destino: `aguas-libres.onrender.com`
   - TTL: 3600 (o 1 hora)

4. **Clic en "Guardar" o "Agregar"**

5. **Si NIC Argentina pide confirmación:**
   - Confirmar los cambios

---

## ⚠️ IMPORTANTE SOBRE NIC ARGENTINA

### Diferencias con otros registradores:

**NIC Argentina tiene características especiales:**

1. **Los DNS pueden tardar más en activarse**
   - Normal: 2-4 horas
   - NIC: Puede tardar 24-48 horas

2. **La interfaz puede ser lenta**
   - Tienen muchos dominios registrados
   - Sea paciente

3. **Puede pedir autorización por correo**
   - Si hay cambios importantes
   - Tu tío puede recibir un email para confirmar

4. **Es posible que NO permitan CNAME para @**
   - Algunas configuraciones en NIC no lo permiten
   - Si pasa esto, ver PASO 6 (Opción B)

---

## 📋 PASO 5: Verificar que se configuró

### ¿Quién hace esto? TÚO y TÚ observan

### Pasos:

1. **Después de configurar DNS, esperar:**
   - Mínimo: 4 horas
   - Normal: 24 horas
   - Máximo: 48 horas

2. **Verificar si propagó:**
   - Abrir: `https://dnschecker.org/`
   - Escribir: `aguaslibres.com.ar`
   - Clic en "Search"
   - Esperar a ver todos los servidores en verde

3. **Si todos están en verde:**
   - ✅ DNS propagado correctamente
   - ¡Listo para siguiente paso!

---

## 📋 PASO 6: Agregar dominio en RENDER

### ¿Quién hace esto? TÚO

### PERO ANTES: ¡Ya deben tener el sitio en Render!

**¿Cómo saber si ya está en Render?**
- Abrir: `https://aguas-libres.onrender.com`
- ¿Se ve la página? ✅

**Si NO está en Render:**
- PRIMERO seguir la guía: `GUIA_SIMPLE_TIO_Y_TU.md`
- Pasos 1-8 de esa guía
- LUEGO hacer este PASO 6

### Pasos para agregar dominio en Render:

1. **Tu tío abre:** `https://dashboard.render.com/`

2. **Entra con usuario/contraseña de Render**

3. **Clic en su Web Service:** `aguas-libres`

4. **Scroll al final: "Custom Domains"**

5. **Clic en: "Add Domain"**

6. **Escribir:** `aguaslibres.com.ar`
   - **IMPORTANTE:** SIN el "www."
   - Solo el dominio principal

7. **Clic en: "Continue"**

8. **Render mostrará los DNS:**
   ```
   Type: CNAME
   Name: aguaslibres.com.ar
   Value: aguas-libres.onrender.com
   ```

9. **Otra vez, clic en: "Add Domain"**

10. **Escribir:** `www.aguaslibres.com.ar`

11. **Render mostrará:**
    ```
    Type: CNAME
    Name: www
    Value: aguas-libres.onrender.com
    ```

12. **Esperar...** (ver PASO 7)

---

## 📋 PASO 7: Esperar activación en Render

### ¿Quién hace esto? TÚO espera, TÚ observa

### Qué va a pasar:

1. **Al principio:** Status = "Pending"
   - Render está verificando DNS
   - Esto puede tardar: 5 minutos - 2 horas

2. **Cuando DNS esté bien:** Status = "Active"
   - ✅ Render detectó que el dominio funciona
   - SSL se configurará automáticamente
   - ¡Todo funcionará!

3. **Si sigue "Pending" por más de 2 horas:**
   - El DNS de NIC aún no propagó
   - Esperar más tiempo
   - O verificar que los DNS en NIC están correctos

---

## 📋 PASO 8: ¡PROBAR EL DOMINIO!

### ¿Quién hace esto? AMBOS

### Pasos:

1. **JUNTOS abren el navegador**

2. **Escriben:** `https://aguaslibres.com.ar`

3. **¿Qué debe pasar?**
   - Debe aparecer la página de Aguas Libres
   - Debe haber un candado verde (HTTPS)
   - ¡Si pasa eso, ESTÁ LISTO! ✅

4. **Si no pasa:**
   - Esperar más tiempo por propagación DNS
   - O verificar que los DNS están correctos en NIC

5. **TAMBIÉN probar:** `https://www.aguaslibres.com.ar`
   - Debe funcionar también
   - Debe redirigir al mismo sitio

---

## 📋 PASO 9: CAMBIAR NEXTAUTH_URL

### ¿Quién hace esto? TÚO

### Pasos:

1. **En Render → Web Service (`aguas-libres`)**

2. **Environment Variables**

3. **Buscar:** `NEXTAUTH_URL`

4. **Cambiar:**
   - De: `https://aguas-libres.onrender.com`
   - A: `https://aguaslibres.com.ar`

5. **Clic en:** "Save"

6. **Render re-deployará automáticamente**
   - Esperar 5-10 minutos

---

## 📋 PASO 10: ¡LISTO! Todo configurado

### Lo que tienen ahora:

- ✅ Página en: `https://aguaslibres.com.ar`
- ✅ Página en: `https://www.aguaslibres.com.ar`
- ✅ Panel admin en: `https://aguaslibres.com.ar/admin/login`
- ✅ SSL/HTTPS automático
- ✅ GRATIS (los primeros 90 días)

---

## ⚠️ PASO 11: SOLUCIÓN ALTERNATIVA (Opción B)

### ¿Cuándo usar esto?
- Si NIC Argentina NO permite CNAME para @
- Si la opción A no funciona

### ¿Qué es la Opción B?

**Cambiar los nameservers a CLOUDFLARE**

Cloudflare es un servicio DNS GRATIS que:
- Permite configurar DNS fácil
- Provee CDN (más rápido)
- Protege contra ataques
- Funciona perfecto con NIC Argentina

### ¿Quién puede hacer esto? TÚO

### Pasos simples de Opción B:

1. **Tu tío crea cuenta en Cloudflare:** `https://dash.cloudflare.com/`

2. **Cloudflare le pide agregar sitio:**
   - Escribir: `aguaslibres.com.ar`
   - Clic en: "Add Site"

3. **Cloudflare le da NAMESERVERS:**
   - Algo como: `lana.ns.cloudflare.com`
   - Otro: `kai.ns.cloudflare.com`

4. **Tu tío va a NIC Argentina**
   - En el dominio
   - Busca: "Nameservers" o "Servidores de Nombre"
   - Cambia los nameservers actuales
   - Por los que dio Cloudflare
   - Guarda cambios

5. **Esperar 24-48 horas** (NIC tarda más)

6. **En Cloudflare, configura DNS:**
   - Type: CNAME
   - Name: @
   - Target: `aguas-libres.onrender.com`
   - Proxy status: Proxied (naranja)
   - Type: CNAME
   - Name: www
   - Target: `aguas-libres.onrender.com`
   - Proxy status: Proxied (naranja)

7. **Luego seguir el PASO 6 (Render) de esta guía**

---

## ✅ CHECKLIST FINAL - Antes de declarar VICTORIA

**CADA uno verificar:**

- [ ] Tío tiene cuenta de NIC Argentina
- [ ] Tío puede entrar a NIC Argentina
- [ ] Sitio funciona en: `https://aguas-libres.onrender.com`
- [ ] DNS configurados en NIC Argentina
- [ ] DNS propagados (verificado en dnschecker.org)
- [ ] Dominio agregado en Render
- [ ] Status en Render: "Active"
- [ ] HTTPS funciona (candado verde)
- [ ] `aguaslibres.com.ar` funciona
- [ ] `www.aguaslibres.com.ar` funciona
- [ ] Panel admin funciona en el nuevo dominio

---

## 🆘 PROBLEMAS COMUNES Y SOLUCIONES

### Problema: No encuentro DNS en NIC Argentina

**Posibles nombres:**
- "Gestión DNS"
- "Administrar DNS"
- "Servidores de Nombre"
- "DNS Management"

**Solución:**
- Tu tío llama al soporte de NIC Argentina
- Teléfono: +54 11 4388-9800
- O email: info@nic.ar

### Problema: DNS "Pending" por más de 24 horas

**Solución:**
- Normal en NIC Argentina, esperar más
- Máximo: 48 horas
- Si no funciona en 48h, llamar a NIC

### Problema: www funciona pero el dominio principal no

**Solución:**
- Usar Opción B (Cloudflare)
- Cloudflare maneja mejor esto

### Problema: No puedo entrar a NIC Argentina

**Solución:**
- Tu tío busca el email donde compró el dominio
- Debe venir usuario y contraseña
- O llama a NIC Argentina

### Problema: Render no detecta el dominio

**Solución:**
- Esperar más propagación de DNS
- Verificar que los DNS en NIC están correctos
- Clic en "Retry" en Render

---

## 📞 ¿NECESITAN AYUDA?

### Llamen a NIC Argentina:
- **Teléfono:** +54 11 4388-9800
- **Email:** info@nic.ar
- **Horario:** Lun-Vie 9:00-18:00 (hora de Buenos Aires)

### Pregúntenme aquí:
- "Estamos en el paso X y tenemos este problema"
- "No entendimos esto"
- "Esto no funciona como dice la guía"

---

## 🎯 RESUMEN FINAL

### Lo que lograron:
- ✅ Página web funcionando
- ✅ En dominio .ar de Argentina
- ✅ Configurado con NIC Argentina
- ✅ Gratis (los primeros 90 días)
- ✅ Tú (13 años) hiciste el código
- ✅ Tu tío ayudó con la parte técnica
- ✅ **¡EQUIPO PERFECTO!**

### Tú (13 años):
- ✅ Aprendiste observando
- ✅ Tienes un proyecto increíble
- ✅ Tu portafolio para el futuro
- ✅ ¡Eres un programador!

### Tu tío:
- ✅ Ayudó con las cuentas
- ✅ Configuró el dominio
- ✅ ¡Es un gran apoyo!

---

## 🚀 ¡FELICIDADES!

¡Cuando terminen todo, su página estará en:
**`https://aguaslibres.com.ar`**

¡Y TODO EL MUNDO podrá verla! 🌍

---

## 📞 PREGUNTEN SIEMPRE

**En cada paso que hagan:**
- "Estamos en el paso X"
- "Hicimos esto: [lo que hicieron]"
- "Nos pasó esto: [lo que salió bien o mal]"

**¡Y les ayudo en cada paso!** 🎯
