CrmActiva | Implementación CRM HubSpot para pymes
Dominio: https://implementacioncrm.com/
Repositorio: https://github.com/inmaculadaoc81/CrmActiva

Web estática: index.html, crmactiva.css, crmactiva.js, crm-hero-pattern.svg, img/crm-icono-check.svg. Incluye logotipo y las dos ilustraciones existentes del repositorio en img/. crmactiva.js carga en tiempo real crmactiva-icons.css y crmactiva-icons.js (no van enlazados con <link>/<script> en el <head>, se inyectan desde crmactiva.js — comportamiento correcto, verificado).
Formulario: POST a /api/contacto (función serverless Vercel con nodemailer). NO enlaza a WhatsApp. Para activar el envío configurar en Vercel SMTP_HOST, SMTP_USER, SMTP_PASS; opcionales SMTP_PORT (465), SMTP_SECURE (true/false), CONTACT_EMAIL. Probar el envío tras configurar las variables.
Chatbot n8n: carga del widget real mediante el webhook compartido previamente; revisar el flujo n8n para confirmar que la identidad y las respuestas correspondan a CrmActiva. El banner negro de cookies ofrece Aceptar, Rechazar y Política de privacidad; el chat necesita consentimiento o una interacción explícita posterior.
Mapa y ficha: https://maps.app.goo.gl/Lz9BfypVpAEh8Wxs5
Contacto: +34 910 05 40 12 | WhatsApp +34 638 61 95 88
Calendario: https://cal.com/n8n-automatizaciones/30min (comprobar la información del evento dentro de Cal.com).
CrmActiva es un servicio independiente. No se indica ninguna afiliación, certificación ni estatus oficial con HubSpot.

────────────────────────────────────────────────────────────
REVISIÓN COMPLETA (a petición del cliente, mismo alcance que en
FlujoPro/DataLabs/PowerFlow: title/meta/og/JSON-LD, teléfono/
WhatsApp, Google Maps, robots.txt/sitemap.xml, anclas internas,
formulario/backend, package.json, archivos enlazados, contaminación
de otras marcas)
────────────────────────────────────────────────────────────
Sin bugs — repositorio limpio, a diferencia de FlujoPro/PowerFlow
(archivos huérfanos) y DataLabs (CSS sin enlazar):
- crmactiva-icons.css/.js sí se cargan correctamente (vía JS desde
  crmactiva.js), no son huérfanos.
- El iframe de Google Maps que proporcionó el cliente ya estaba
  presente en el HTML con el place_id correcto de CrmActiva
  ("CrmActiva Consultoría CRM") — no hacía falta tocarlo.
- Todas las anclas internas (#inicio, #soluciones, #beneficios,
  #como-funciona, #cita, #nosotros, #contacto) resuelven a su id
  correspondiente.
- Los campos del formulario coinciden exactamente con lo que espera
  api/contacto.js; package.json con el nombre correcto del paquete.
- Sin ninguna referencia cruzada a SmartSheets, FlujoPro, DataLabs,
  PowerFlow ni ThermomixTech en ningún archivo.
