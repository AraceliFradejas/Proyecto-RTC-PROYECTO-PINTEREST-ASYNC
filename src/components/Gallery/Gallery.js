import './Gallery.css';
import { Card } from '../Card/Card.js';

const escapeHtml = (value = '') =>
  String(value).replace(
    /[&<>'"]/g,
    (character) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[
        character
      ]
  );

// Componente Gallery para pintar el conjunto de fotos
export const Gallery = (photos = []) => {
  // Si no hay fotos, mostramos el estado vacío
  if (!photos || photos.length === 0) {
    return `
      <section class="empty-state">
        <div class="empty-icon" aria-hidden="true">🔍</div>
        <h2 class="empty-title">No encontramos fotos para tu búsqueda</h2>
        <p class="empty-text">
          No hubo coincidencias exactas. Prueba con otro término o explora alguna de estas ideas populares:
        </p>
        <div class="empty-suggestions">
          <button type="button" class="suggestion-tag" data-query="Naturaleza">Naturaleza</button>
          <button type="button" class="suggestion-tag" data-query="Arquitectura">Arquitectura</button>
          <button type="button" class="suggestion-tag" data-query="Gatos">Gatos</button>
          <button type="button" class="suggestion-tag" data-query="Fondos de pantalla">Fondos de pantalla</button>
          <button type="button" class="suggestion-tag" data-query="Viajes">Viajes</button>
        </div>
      </section>
    `;
  }

  // Si hay fotos, las renderizamos dentro del layout masonry
  return `
    <section class="gallery-grid" id="gallery-grid" aria-label="Galería de fotografías">
      ${photos.map((photo) => Card(photo)).join('')}
    </section>
  `;
};

// Componente Loader auxiliar para mostrar mientras cargan las fotos
export const Loader = () => {
  return `
    <div class="loader-container" role="status" aria-live="polite">
      <div class="loader-spinner" aria-hidden="true"></div>
      <p class="loader-text">Cargando inspiración...</p>
    </div>
  `;
};

export const ErrorState = (message = 'No se pudieron cargar las imágenes.') => `
  <section class="empty-state" role="alert">
    <div class="empty-icon" aria-hidden="true">⚠️</div>
    <h2 class="empty-title">Algo ha ido mal</h2>
    <p class="empty-text">${escapeHtml(message)}</p>
    <button class="topic-chip" id="retry-load" type="button">Reintentar</button>
  </section>
`;
