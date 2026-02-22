# Clínica Cadent GT

Sitio web oficial de **Clínica Cadent GT**, ubicada en Monte Real II, Mixco, Guatemala. Desarrollado como una landing page de una sola página con integración a Google Sheets para la recepción de citas.

## Tecnologías

- HTML5, CSS3 y JavaScript vanilla
- Google Fonts (Poppins, Playfair Display, Roboto)
- Google Apps Script (integración del formulario con Google Sheets)
- Google Maps Embed

## Estructura del proyecto

```
├── index.html          # Página principal (HTML + CSS + JS)
├── apps-script.js      # Script para Google Apps Script (backend del formulario)
├── iconos/             # Íconos del sitio
└── *.jpg / *.svg       # Imágenes y logo
```

## Secciones

- **Hero** — presentación principal con llamada a la acción
- **Servicios** — catálogo de tratamientos dentales
- **Galería** — carrusel de imágenes
- **Testimonios** — reseñas de pacientes
- **Contacto** — formulario de agendamiento de citas
- **Ubicación** — mapa y datos de contacto

## Formulario de contacto

El formulario recopila:

| Campo | Tipo |
|-------|------|
| Nombre | Texto |
| Correo | Email |
| Fecha de cita | Fecha |
| Hora de cita | Hora |
| Mensaje | Texto largo |

Los datos se envían a Google Sheets mediante un Google Apps Script. Para configurarlo:

1. Crea una hoja de cálculo en Google Sheets con las columnas: `Timestamp`, `Nombre`, `Correo`, `Fecha de cita`, `Hora de cita`, `Mensaje`.
2. Ve a **Extensiones → Apps Script** y pega el contenido de `apps-script.js`.
3. Despliega como aplicación web (acceso: cualquier usuario).
4. Copia la URL generada y reemplaza `TU_URL_DE_GOOGLE_APPS_SCRIPT_AQUI` en `index.html`.

## Contacto clínica

- **Correo:** DraCinthia@clinicacadent.com
- **Teléfono:** (+502) 2431-0668
- **Dirección:** Cadent GT, Monte Real II, Mixco, Guatemala
