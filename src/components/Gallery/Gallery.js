import './Gallery.css';
import { Card } from '../Card/Card.js';
import { createElement } from '../../utils/dom.js';

const createEmptyState = () => {
  const suggestions = createElement('div', { className: 'empty-suggestions' });
  ['Naturaleza', 'Arquitectura', 'Gatos', 'Fondos de pantalla', 'Viajes'].forEach((query) => {
    suggestions.append(createElement('button', {
      className: 'suggestion-tag', type: 'button', text: query, dataset: { query }
    }));
  });
  return createElement('section', { className: 'empty-state' }, [
    createElement('div', { className: 'empty-icon', ariaHidden: 'true', text: '🔍' }),
    createElement('h2', { className: 'empty-title', text: 'No encontramos fotos para tu búsqueda' }),
    createElement('p', {
      className: 'empty-text',
      text: 'No hubo coincidencias exactas. Prueba con otro término o explora alguna de estas ideas populares:'
    }),
    suggestions
  ]);
};

export const Gallery = (photos = []) => {
  if (!photos?.length) return createEmptyState();
  const gallery = createElement('section', {
    className: 'gallery-grid', id: 'gallery-grid', ariaLabel: 'Galería de fotografías'
  });
  photos.forEach((photo) => gallery.append(Card(photo)));
  return gallery;
};

export const Loader = () => createElement('div', {
  className: 'loader-container', role: 'status', ariaLive: 'polite'
}, [
  createElement('div', { className: 'loader-spinner', ariaHidden: 'true' }),
  createElement('p', { className: 'loader-text', text: 'Cargando inspiración...' })
]);

export const ErrorState = (message = 'No se pudieron cargar las imágenes.') =>
  createElement('section', { className: 'empty-state', role: 'alert' }, [
    createElement('div', { className: 'empty-icon', ariaHidden: 'true', text: '⚠️' }),
    createElement('h2', { className: 'empty-title', text: 'Algo ha ido mal' }),
    createElement('p', { className: 'empty-text', text: message }),
    createElement('button', { className: 'topic-chip', id: 'retry-load', type: 'button', text: 'Reintentar' })
  ]);
