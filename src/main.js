import './styles/style.css';
import { renderLayout } from './app/layout.js';
import { createPhotoController } from './app/photoController.js';
import { setupEventListeners } from './app/events.js';

const initApp = async () => {
  const app = document.querySelector('#app');
  const galleryContainer = renderLayout(app);
  const photoController = createPhotoController(galleryContainer);
  setupEventListeners(photoController);
  await photoController.loadPhotos();
};

initApp();
