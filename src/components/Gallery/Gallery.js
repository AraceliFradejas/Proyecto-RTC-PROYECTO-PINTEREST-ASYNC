import './Gallery.css';
import { Card } from '../Card/Card.js';

// Componente Gallery para pintar el conjunto de fotos
export const Gallery = (photos = []) => {
  // Si no hay fotos, mostramos el estado vacío
  if (!photos || photos.length === 0) {
    return `
      <section class="empty-state">
        <div class="empty-icon">🔍</div>
        <h2 class="empty-title">No encontramos fotos para tu búsqueda</h2>
        <p class="empty-text">
          No hubo coincidencias exactas. Prueba con otro término o explora alguna de estas ideas populares:
        </p>
        <div class="empty-suggestions">
          <button class="suggestion-tag" data-query="Naturaleza">Naturaleza</button>
          <button class="suggestion-tag" data-query="Arquitectura">Arquitectura</button>
          <button class="suggestion-tag" data-query="Gatos">Gatos</button>
          <button class="suggestion-tag" data-query="Fondos de pantalla">Fondos de pantalla</button>
          <button class="suggestion-tag" data-query="Viajes">Viajes</button>
        </div>
      </section>
    `;
  }

  // Si hay fotos, las renderizamos dentro del layout masonry
  return `
    <section class="gallery-grid" id="gallery-grid">
      ${photos.map((photo) => Card(photo)).join('')}
    </section>
  `;
};

// Componente Loader auxiliar para mostrar mientras cargan las fotos
export const Loader = () => {
  return `
    <div class="loader-container">
      <div class="loader-spinner"></div>
      <p class="loader-text">Cargando inspiración...</p>
    </div>
  `;
};
