# AFM Inspiration

## Versión en castellano

Réplica académica de Pinterest desarrollada dentro del máster de ThePower TECH, en el módulo de Web Design Advanced. El proyecto consiste en una galería visual tipo Pinterest que consume la API de Unsplash para mostrar imágenes, información del autor, avatar, likes y permitir la búsqueda dinámica por palabras clave.

### Proyecto académico

Este ejercicio forma parte de la entrega del proyecto final del módulo 4: Web Design Advanced, dentro del máster de ThePower TECH. La aplicación está desarrollada con Vite y JavaScript vanilla, con una estructura modular por componentes y un diseño totalmente responsive.

### Demo

[Ver la aplicación desplegada en Vercel](https://proyecto-rtc-proyecto-pinterest-asy.vercel.app/)

### Funcionalidades

- Búsqueda asíncrona de fotos por texto.
- Carga inicial del feed de imágenes.
- Limpieza automática del input tras cada búsqueda.
- Filtros rápidos por temas sugeridos.
- Volver al estado inicial haciendo click en el logo o en Inicio.
- Galería tipo masonry adaptada a escritorio, tablet y móvil.
- Estados de carga, sin resultados y de error.
- Integración con la API de Unsplash y uso de datos reales del autor y la imagen.

### Estructura del proyecto

```text
├── api/
│   └── unsplash.js         # Proxy interno para proteger la API key
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Card/
│   │   ├── Footer/
│   │   ├── Gallery/
│   │   └── Header/
│   ├── services/
│   │   └── unsplash.js     # Lógica de consulta a la API interna
│   ├── styles/
│   │   └── style.css
│   └── main.js
├── .env.example
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── .gitignore
```

### Instalación local

1. Clona el repositorio.
2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Crea un archivo `.env` a partir de `.env.example` y añade tu clave de Unsplash:

   ```env
   UNSPLASH_ACCESS_KEY=tu_access_key
   ```

4. Ejecuta la aplicación en modo desarrollo:

   ```bash
   npm run dev
   ```

5. Comprueba que el proyecto compila correctamente:

   ```bash
   npm run build
   ```

### Despliegue

La aplicación puede desplegarse en Vercel o cualquier hosting compatible con Vite. En entornos de producción debes configurar la variable de entorno `UNSPLASH_ACCESS_KEY` y mantener la lógica del backend dentro de la carpeta `api/` para no exponer la clave en el cliente.

### Tecnologías utilizadas

- Vite
- JavaScript ES Modules
- Fetch API
- HTML semántico
- CSS responsive
- API de Unsplash

### Autora

Araceli Fradejas Muñoz

### Redes sociales y enlaces

- GitHub: https://github.com/AraceliFradejas
- GitHub - Proyecto Landing Page: https://github.com/AraceliFradejas/Proyecto-LANDING-PAGE
- GitHub - Proyecto Landing Page 1: https://github.com/AraceliFradejas/Proyecto-LANDING-PAGE-1
- LinkedIn: https://www.linkedin.com/in/araceli-fradejas-munoz-transformaciondigital/
- Instagram: https://www.instagram.com/goldilocks1013x/
- X (Twitter): https://x.com/AraceliFradejas
- TikTok: https://www.tiktok.com/@arucci1
- YouTube: https://www.youtube.com/@aracelifradejasmunoz2758
- Medium: https://medium.com/@araceli.fradejas

### Nota final

Este proyecto es una entrega académica desarrollada con fines de formación dentro del máster de ThePower TECH y no representa una copia oficial de Pinterest, sino una recreación funcional y visual con fines educativos.

---

## English version

Academic Pinterest-style replica developed within the ThePower TECH master program, in the Web Design Advanced module. The project is a visual gallery inspired by Pinterest that consumes the Unsplash API to display images, author information, avatars, likes, and enable dynamic search by keywords.

### Academic project

This exercise is part of the final project submission for Module 4: Web Design Advanced, within the ThePower TECH master program. The application is built with Vite and vanilla JavaScript, using a modular component structure and a fully responsive design.

### Demo

[View the deployed application on Vercel](https://proyecto-rtc-proyecto-pinterest-asy.vercel.app/)

### Features

- Asynchronous image search by text.
- Initial feed loading.
- Automatic input clearing after each search.
- Quick topic filters.
- Return to the initial state by clicking the logo or Home.
- Masonry-style gallery adapted for desktop, tablet, and mobile.
- Loading, no-results, and error states.
- Integration with the Unsplash API and use of real author and image data.

### Project structure

```text
├── api/
│   └── unsplash.js         # Internal proxy to protect the API key
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Card/
│   │   ├── Footer/
│   │   ├── Gallery/
│   │   └── Header/
│   ├── services/
│   │   └── unsplash.js     # Internal API query logic
│   ├── styles/
│   │   └── style.css
│   └── main.js
├── .env.example
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── .gitignore
```

### Local installation

1. Clone the repository.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file from `.env.example` and add your Unsplash API key:

   ```env
   UNSPLASH_ACCESS_KEY=your_access_key
   ```

4. Run the app in development mode:

   ```bash
   npm run dev
   ```

5. Verify the project builds correctly:

   ```bash
   npm run build
   ```

### Deployment

The application can be deployed on Vercel or any hosting compatible with Vite. In production environments, configure the `UNSPLASH_ACCESS_KEY` environment variable and keep the backend logic inside the `api/` folder to avoid exposing the key in the client.

### Technologies used

- Vite
- JavaScript ES Modules
- Fetch API
- Semantic HTML
- Responsive CSS
- Unsplash API

### Author

Araceli Fradejas Muñoz

### Social links and profiles

- GitHub: https://github.com/AraceliFradejas
- GitHub - Landing Page Project: https://github.com/AraceliFradejas/Proyecto-LANDING-PAGE
- GitHub - Landing Page Project 1: https://github.com/AraceliFradejas/Proyecto-LANDING-PAGE-1
- LinkedIn: https://www.linkedin.com/in/araceli-fradejas-munoz-transformaciondigital/
- Instagram: https://www.instagram.com/goldilocks1013x/
- X (Twitter): https://x.com/AraceliFradejas
- TikTok: https://www.tiktok.com/@arucci1
- YouTube: https://www.youtube.com/@aracelifradejasmunoz2758
- Medium: https://medium.com/@araceli.fradejas

### Final note

This project is an academic submission developed for training purposes within the ThePower TECH master program and does not represent an official Pinterest product, but a functional and visual recreation for educational use.
