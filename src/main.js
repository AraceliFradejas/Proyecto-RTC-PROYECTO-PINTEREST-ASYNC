import './styles/style.css';
import { Header } from './components/Header/Header.js';
import { Gallery, Loader, ErrorState } from './components/Gallery/Gallery.js';
import { Footer } from './components/Footer/Footer.js';
import { searchPhotos, getInitialPhotos } from './services/unsplash.js';

// Elemento raíz donde montamos toda la aplicación
const app = document.querySelector('#app');
let initialPhotos = null;
let activeRequest = null;
let lastQuery = '';

// Temas sugeridos para las píldoras de filtrado rápido
const SUGGESTED_TOPICS = [
  'Todo',
  'Arquitectura',
  'Naturaleza',
  'Minimalismo',
  'Diseño',
  'Gatos',
  'Tecnología',
  'Viajes',
  'Fotografía'
];

/**
 * Función para generar el HTML de las píldoras de temas sugeridos
 */
const renderTopicChips = () => {
  return `
    <nav class="quick-topics" aria-label="Temas sugeridos">
      ${SUGGESTED_TOPICS.map(
        (topic, index) => `
          <button class="topic-chip ${index === 0 ? 'active' : ''}" data-topic="${topic}">
            ${topic}
          </button>
        `
      ).join('')}
    </nav>
  `;
};

/**
 * Estructura inicial del layout de la página
 */
const renderLayout = () => {
  app.innerHTML = `
    ${Header()}
    <main>
      ${renderTopicChips()}
      <div id="gallery-container">
        ${Loader()}
      </div>
    </main>
    ${Footer()}
  `;
};

/**
 * Función para cargar y renderizar fotos en el contenedor de la galería
 * @param {string} query - Término de búsqueda opcional. Si no se pasa, carga fotos iniciales.
 */
const loadPhotos = async (query = '') => {
  const galleryContainer = document.querySelector('#gallery-container');
  if (!galleryContainer) return;

  activeRequest?.abort();
  activeRequest = new AbortController();
  lastQuery = query;
  galleryContainer.innerHTML = Loader();

  try {
    let photos;
    if (query && query !== 'Todo') {
      photos = await searchPhotos(query, 30, activeRequest.signal);
    } else if (initialPhotos) {
      photos = initialPhotos;
    } else {
      photos = await getInitialPhotos(30, activeRequest.signal);
      initialPhotos = photos;
    }

    galleryContainer.innerHTML = Gallery(photos);
  } catch (error) {
    if (error.name !== 'AbortError') {
      galleryContainer.innerHTML = ErrorState(error.message);
    }
  }
};

/**
 * Configuración de todos los eventos interactivos de la aplicación
 */
const setupEventListeners = () => {
  const searchForm = document.querySelector('#search-form');
  const searchInput = document.querySelector('#search-input');
  const logoBtn = document.querySelector('#logo-btn');
  const navHomeBtn = document.querySelector('#nav-home');
  const mainElement = document.querySelector('main');

  // 1. Manejo del formulario de búsqueda
  if (searchForm && searchInput) {
    searchForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const query = searchInput.value.trim();

      if (query) {
        searchInput.value = '';
        searchInput.blur();

        // Desactivamos píldoras seleccionadas previamente
        document.querySelectorAll('.topic-chip').forEach((chip) => chip.classList.remove('active'));

        // Realizamos la búsqueda
        await loadPhotos(query);
      }
    });
  }

  // 2. Volver al estado inicial al hacer click en el logo
  if (logoBtn) {
    logoBtn.addEventListener('click', async () => {
      // Marcamos la píldora 'Todo' como activa
      document.querySelectorAll('.topic-chip').forEach((chip, i) => {
        chip.classList.toggle('active', i === 0);
      });

      // Recargamos el feed inicial
      await loadPhotos();
    });
  }

  // 3. Volver al estado inicial al hacer click en el botón de Inicio
  if (navHomeBtn) {
    navHomeBtn.addEventListener('click', async () => {
      document.querySelectorAll('.topic-chip').forEach((chip, i) => {
        chip.classList.toggle('active', i === 0);
      });
      await loadPhotos();
    });
  }

  // 4. Delegación de eventos para clicks en píldoras y sugerencias de búsquedas
  if (mainElement) {
    mainElement.addEventListener('click', async (e) => {
      if (e.target.closest('#retry-load')) {
        await loadPhotos(lastQuery);
        return;
      }

      // Click en una píldora de tema rápido
      const topicChip = e.target.closest('.topic-chip');
      if (topicChip) {
        document.querySelectorAll('.topic-chip').forEach((chip) => chip.classList.remove('active'));
        topicChip.classList.add('active');

        const topic = topicChip.dataset.topic;
        await loadPhotos(topic === 'Todo' ? '' : topic);
        return;
      }

      // Click en una sugerencia del estado vacío
      const suggestionTag = e.target.closest('.suggestion-tag');
      if (suggestionTag) {
        const query = suggestionTag.dataset.query;
        await loadPhotos(query);
        return;
      }
    });
  }
};

/**
 * Inicialización de la aplicación
 */
const initApp = async () => {
  renderLayout();
  setupEventListeners();
  await loadPhotos();
};

// Arrancamos la aplicación cuando el DOM esté listo
initApp();
