# 📌 Réplica de Pinterest - Async Web Design

> Proyecto realizado como entrega del **PROYECTO: PINTEREST ASYNC** del módulo 4 *"Web Design Advanced"* del máster **Rock{TheCode}** de ThePower / Hackio.

---

## 🌐 Demo

[Ver la aplicación en vivo en Vercel](https://proyecto-rtc-proyecto-pinterest-async.vercel.app/)

---

## 📖 Descripción

Réplica interactiva y funcional de la interfaz de **Pinterest**. La aplicación permite explorar y buscar imágenes en tiempo real consumiendo la **API de Unsplash**. Cuenta con una arquitectura modular basada en componentes de Vanilla JavaScript (ES6+), diseño *Masonry* completamente responsivo con CSS, manejo de estados asíncronos (carga y sin resultados), y limpieza automática de búsquedas.

> **Nota:** Este proyecto es un ejercicio académico. Todas las imágenes, datos de usuarios y enlaces son obtenidos de forma dinámica a través de la API oficial de Unsplash.

---

## 🏗️ Arquitectura del proyecto

```text
Proyecto-RTC-PROYECTO-PINTEREST-ASYNC/
├── index.html              # Estructura HTML5 semántica y punto de entrada
├── package.json          # Configuración de Vite y dependencias
├── vite.config.js          # Configuración del empaquetador Vite
├── .env.example            # Plantilla de variables de entorno para la API Key
├── .gitignore              # Archivos y carpetas ignorados por Git
├── README.md               # Documentación del proyecto
├── public/
│   └── favicon.svg         # Favicon vectorial estilo Pinterest
└── src/
    ├── components/
    │   ├── Header/
    │   │   ├── Header.js   # Barra de navegación, logo interactivo y buscador
    │   │   └── Header.css  # Estilos responsivos del header
    │   ├── Card/
    │   │   ├── Card.js     # Tarjeta individual: foto, autor, avatar, likes y overlay
    │   │   └── Card.css    # Efecto hover, botón guardar y estilos de tarjeta
    │   ├── Gallery/
    │   │   ├── Gallery.js  # Cuadrícula Masonry, Loader y estado vacío
    │   │   └── Gallery.css # Grid responsive (column-count) y animaciones
    │   └── Footer/
    │       ├── Footer.js   # Pie de página semántico
    │       └── Footer.css  # Estilos del footer
    ├── services/
    │   └── unsplash.js     # Peticiones asíncronas (fetch / async-await) a la API de Unsplash
    ├── styles/
    │   └── style.css       # Variables CSS globales, reset y estilos de filtros
    └── main.js             # Orquestador: renderizado inicial y escuchadores de eventos
```

---

## 🧩 Componentes y Funcionalidades

| Componente / Elemento | Descripción |
| :--- | :--- |
| **Header** | Barra fija con logo interactivo (retorno al estado inicial), enlaces de navegación y formulario de búsqueda con icono. |
| **Quick Topics (Píldoras)** | Botones de filtro rápido para buscar temáticas populares con un solo click. |
| **Photo Card** | Tarjeta de foto con imagen optimizada, overlay hover (botón "Guardar" y enlace a Unsplash), avatar del fotógrafo, nombre, `@usuario` y likes. |
| **Gallery (Masonry)** | Disposición en columnas fluidas tipo Pinterest adaptable según la resolución de pantalla. |
| **Loader & Empty State** | Animación de carga durante peticiones y vista amigable con sugerencias si no hay resultados. |
| **Footer** | Pie de página con créditos y enlaces informativos. |

---

## 🛠️ Tecnologías y técnicas utilizadas

- **HTML5 Semántico**: `<header>`, `<main>`, `<nav>`, `<article>`, `<section>`, `<footer>`
- **CSS3 Moderno**: 
  - CSS Columns (`column-count`, `column-gap`) para el efecto *Masonry*
  - Flexbox para alineación y navegación
  - Variables CSS (`:root`) para temas, colores, espaciados y radios de borde
  - Media Queries para diseño **Full Responsive** (móvil, tablet y escritorio)
- **JavaScript (ES6+)**:
  - Peticiones asíncronas con `async / await` y `fetch API`
  - Arquitectura modular basada en componentes y funciones reutilizables
  - Template literals, destructuring, array methods (`map`, `filter`, `join`)
  - Manejo del DOM y delegación de eventos
- **Vite**: Entorno de desarrollo rápido y empaquetador para producción
- **Unsplash API**: Integración de endpoint de búsqueda (`/search/photos`) y feed inicial (`/photos`)

---

## 💻 Instalación y Uso en Local

### 1. Clonar el repositorio
```bash
git clone https://github.com/AraceliFradejas/Proyecto-RTC-PROYECTO-PINTEREST-ASYNC.git
cd Proyecto-RTC-PROYECTO-PINTEREST-ASYNC
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar la clave de Unsplash
Crea un archivo `.env` en la raíz (puedes copiar `.env.example`) y añade tu clave:
```env
VITE_UNSPLASH_ACCESS_KEY=tu_clave_de_unsplash
```

### 4. Iniciar en desarrollo
```bash
npm run dev
```

### 5. Compilar para producción
```bash
npm run build
```

---

## 👩‍💻 Autora

**Araceli Fradejas Muñoz**

- [LinkedIn](https://www.linkedin.com/in/araceli-fradejas-munoz-transformaciondigital/)
- [Instagram](https://www.instagram.com/goldilocks1013x/)
- [X (Twitter)](https://x.com/AraceliFradejas)
- [TikTok](https://www.tiktok.com/@arucci1)
- [YouTube](https://www.youtube.com/@aracelifradejasmunoz2758)

<br>
<hr>
<br>

# 📌 Pinterest Clone - Async Web Design (English Version)

> Project developed as the submission for the **PINTEREST ASYNC PROJECT** of Module 4 *"Web Design Advanced"* in the **Rock{TheCode}** Master by ThePower / Hackio.

---

## 🌐 Demo

[View the live application on Vercel](https://proyecto-rtc-proyecto-pinterest-async.vercel.app/)

---

## 📖 Description

An interactive and functional replica of the **Pinterest** interface. The application allows users to explore and search for images in real-time by consuming the **Unsplash API**. It features a modular architecture built with Vanilla JavaScript components (ES6+), a fully responsive *Masonry* CSS layout, asynchronous state management (loading and empty states), and automatic input clearing upon search.

> **Note:** This project is an academic exercise. All images, author profiles, and links are dynamically retrieved using the official Unsplash API.

---

## 🏗️ Project Architecture

```text
Proyecto-RTC-PROYECTO-PINTEREST-ASYNC/
├── index.html              # Semantic HTML5 structure and entry point
├── package.json          # Vite configuration and dependencies
├── vite.config.js          # Vite bundler configuration
├── .env.example            # Environment variables template for API Key
├── .gitignore              # Files and folders ignored by Git
├── README.md               # Project documentation
├── public/
│   └── favicon.svg         # Pinterest-style vector favicon
└── src/
    ├── components/
    │   ├── Header/
    │   │   ├── Header.js   # Sticky navigation bar, logo, and search input
    │   │   └── Header.css  # Responsive header styling
    │   ├── Card/
    │   │   ├── Card.js     # Single card: photo, author, avatar, likes & overlay
    │   │   └── Card.css    # Hover effect, save button and card styles
    │   ├── Gallery/
    │   │   ├── Gallery.js  # Masonry grid, Loader and empty state
    │   │   └── Gallery.css # Responsive grid (column-count) and animations
    │   └── Footer/
    │       ├── Footer.js   # Semantic footer component
    │       └── Footer.css  # Footer styling
    ├── services/
    │   └── unsplash.js     # Async API requests (fetch / async-await) to Unsplash
    ├── styles/
    │   └── style.css       # Global CSS variables, resets and filter styles
    └── main.js             # Orchestrator: initial render and event listeners
```

---

## 🧩 Components and Features

| Component / Feature | Description |
| :--- | :--- |
| **Header** | Sticky navbar with interactive logo (reset to initial feed), navigation links, and search input with icon. |
| **Quick Topics (Pills)** | Quick-filter chip buttons to explore popular topics in one click. |
| **Photo Card** | Card displaying optimized photo, hover overlay ("Save" button & Unsplash link), photographer avatar, name, `@username`, and likes count. |
| **Gallery (Masonry)** | Pinterest-style fluid multi-column layout adapting across screen sizes. |
| **Loader & Empty State** | Animated loading spinner during fetch requests and friendly empty state with suggestions when no results match. |
| **Footer** | Semantic footer with project credits and informative links. |

---

## 🛠️ Technologies and Techniques Used

- **Semantic HTML5**: `<header>`, `<main>`, `<nav>`, `<article>`, `<section>`, `<footer>`
- **Modern CSS3**: 
  - CSS Columns (`column-count`, `column-gap`) for *Masonry* layout
  - Flexbox for alignment and navigation
  - CSS Variables (`:root`) for colors, theme, spacing, and border radius
  - Media Queries for **Full Responsive** design (mobile, tablet, desktop)
- **JavaScript (ES6+)**:
  - Asynchronous requests with `async / await` and `fetch API`
  - Modular architecture based on reusable functions and components
  - Template literals, destructuring, array methods (`map`, `filter`, `join`)
  - DOM manipulation and event delegation
- **Vite**: Ultra-fast build tool and development server
- **Unsplash API**: Search endpoint (`/search/photos`) and initial curated feed (`/photos`)

---

## 💻 Local Setup & Installation

### 1. Clone repository
```bash
git clone https://github.com/AraceliFradejas/Proyecto-RTC-PROYECTO-PINTEREST-ASYNC.git
cd Proyecto-RTC-PROYECTO-PINTEREST-ASYNC
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up Unsplash API Key
Create a `.env` file in the root folder (you can copy `.env.example`) and add your key:
```env
VITE_UNSPLASH_ACCESS_KEY=your_unsplash_access_key
```

### 4. Start development server
```bash
npm run dev
```

### 5. Build for production
```bash
npm run build
```

---

## 👩‍💻 Author

**Araceli Fradejas Muñoz**

- [LinkedIn](https://www.linkedin.com/in/araceli-fradejas-munoz-transformaciondigital/)
- [Instagram](https://www.instagram.com/goldilocks1013x/)
- [X (Twitter)](https://x.com/AraceliFradejas)
- [TikTok](https://www.tiktok.com/@arucci1)
- [YouTube](https://www.youtube.com/@aracelifradejasmunoz2758)
