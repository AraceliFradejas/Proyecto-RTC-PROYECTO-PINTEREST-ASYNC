# 📌 Réplica de Pinterest (Async Web Design)

Proyecto desarrollado para el módulo **Web Design Advanced** de ThePower / Rock{TheCode}.

Esta aplicación es una réplica funcional de la interfaz y comportamiento de Pinterest, construida con **Vite**, **Vanilla JavaScript modular con componentes (ES6+)**, **CSS responsivo** y consumo asíncrono de la **API de Unsplash**.

---

## 🚀 Características y Requisitos cumplidos

- **Arquitectura de Componentes en Vanilla JS**: Código estructurado y modular dividido en componentes reutilizables (`Header`, `Card`, `Gallery`, `Footer`).
- **Peticiones Asíncronas (API de Unsplash)**: Uso de `async/await` y `fetch` para la obtención dinámica de imágenes y datos de autor.
- **Datos Reales de la API**: Visualización de fotografía, avatar del creador, nombre, nombre de usuario (`@usuario`), contador de likes y enlaces directos a Unsplash.
- **Layout Masonry Responsivo**: Cuadrícula estilo Pinterest que adapta el número de columnas de forma fluida según el tamaño de la pantalla (Desktop, Tablet y Móvil).
- **Limpieza automática del Input**: El campo de búsqueda se vacía automáticamente tras ejecutar cada consulta para facilitar nuevas búsquedas.
- **Reseteo al Estado Inicial**: Al pulsar sobre el logotipo de Pinterest o en el botón "Inicio", se recarga la colección de fotos inicial.
- **Píldoras de Filtro Rápido**: Botones interactivos para buscar tendencias populares en un solo click.
- **Manejo de Estados de Carga y Sin Resultados**: Loader animado durante las peticiones y vista de *Empty State* con sugerencias si una búsqueda no devuelve resultados.

---

## 🛠️ Tecnologías utilizadas

- **HTML5 Semántico**
- **CSS3 Moderno** (Flexbox, CSS Columns / Masonry, Variables CSS, Media Queries)
- **JavaScript (ES6+)** (Async / Await, Fetch API, Módulos ES6, Template Literals, Destructuring)
- **Vite** como empaquetador y entorno de desarrollo
- **Unsplash API**

---

## 💻 Instalación y Uso en Local

### 1. Clonar el repositorio
```bash
git clone <URL_DEL_REPOSITORIO>
cd rtc-proyecto-pinterest-async
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar la clave de la API de Unsplash
1. Crea una cuenta de desarrollador en [Unsplash Developers](https://unsplash.com/developers).
2. Crea una nueva aplicación para obtener tu **Access Key**.
3. Crea un archivo llamado `.env` en la raíz del proyecto (puedes duplicar `.env.example`) y añade tu clave:

```env
VITE_UNSPLASH_ACCESS_KEY=tu_access_key_aqui
```

### 4. Iniciar el servidor de desarrollo
```bash
npm run dev
```

Abre tu navegador en `http://localhost:5173` para ver la aplicación funcionando.

### 5. Compilar para producción
```bash
npm run build
```

---

## 📁 Estructura del Proyecto

```text
├── index.html
├── package.json
├── .env.example
├── .gitignore
├── README.md
├── public/
│   └── favicon.svg
└── src/
    ├── components/
    │   ├── Header/
    │   │   ├── Header.js
    │   │   └── Header.css
    │   ├── Card/
    │   │   ├── Card.js
    │   │   └── Card.css
    │   ├── Gallery/
    │   │   ├── Gallery.js
    │   │   └── Gallery.css
    │   └── Footer/
    │       ├── Footer.js
    │       └── Footer.css
    ├── services/
    │   └── unsplash.js
    ├── styles/
    │   └── style.css
    └── main.js
```
