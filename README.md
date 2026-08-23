# AFM Inspiration

Réplica académica de Pinterest desarrollada con Vite y JavaScript. Permite consultar un feed inicial y buscar fotografías mediante la API de Unsplash. Las tarjetas muestran la imagen, el autor, su avatar, su usuario y el número de likes proporcionados por la API.

## Demo

[Ver la aplicación desplegada en Vercel](https://proyecto-rtc-proyecto-pinterest-asy.vercel.app/)

## Funcionalidades

- Búsqueda asíncrona de fotografías por texto.
- Limpieza automática del buscador después de cada búsqueda.
- Temas sugeridos para realizar búsquedas rápidas.
- Retorno al primer feed cargado pulsando el logo o «Inicio».
- Galería tipo masonry adaptable a escritorio, tablet y móvil.
- Estados de carga, búsqueda sin resultados y error de conexión.
- Datos y perfiles obtenidos de Unsplash, con atribución enlazada.

## Estructura

```text
├── api/
│   └── unsplash.js         # Función serverless que protege la clave
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Card/
│   │   ├── Footer/
│   │   ├── Gallery/
│   │   └── Header/
│   ├── services/
│   │   └── unsplash.js     # Cliente del endpoint interno
│   ├── styles/
│   │   └── style.css
│   └── main.js
├── .env.example
├── index.html
├── package.json
└── vite.config.js          # Proxy de desarrollo hacia Unsplash
```

## Instalación local

1. Instala las dependencias:

   ```bash
   npm install
   ```

2. Crea `.env` a partir de `.env.example` y añade una Access Key nueva:

   ```env
   UNSPLASH_ACCESS_KEY=tu_access_key
   ```

   No utilices el prefijo `VITE_`: las variables con ese prefijo quedan incluidas en el JavaScript público del navegador.

3. Inicia el proyecto:

   ```bash
   npm run dev
   ```

4. Comprueba la compilación:

   ```bash
   npm run build
   ```

## Despliegue en Vercel

Configura `UNSPLASH_ACCESS_KEY` en **Project Settings → Environment Variables** y vuelve a desplegar. La función de `api/unsplash.js` utiliza esa variable en el servidor, por lo que la clave no se incluye en el bundle del navegador.

La clave que estuvo publicada anteriormente debe revocarse desde el panel de Unsplash y sustituirse por una nueva.

## Tecnologías

Vite, JavaScript ES Modules, Fetch API, HTML semántico y CSS responsive con Flexbox, media queries y CSS Columns.

## Autora

Araceli Fradejas Muñoz
