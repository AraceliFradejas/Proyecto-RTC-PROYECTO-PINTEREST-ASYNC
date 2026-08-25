import { Gallery, Loader, ErrorState } from '../components/Gallery/Gallery.js';
import { searchPhotos, getInitialPhotos } from '../services/unsplash.js';
import { replaceChildren } from '../utils/dom.js';

export const createPhotoController = (galleryContainer) => {
  let initialPhotos = null;
  let activeRequest = null;
  let lastQuery = '';

  const loadPhotos = async (query = '') => {
    activeRequest?.abort();
    activeRequest = new AbortController();
    lastQuery = query;
    replaceChildren(galleryContainer, Loader());

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
      replaceChildren(galleryContainer, Gallery(photos));
    } catch (error) {
      if (error.name !== 'AbortError') replaceChildren(galleryContainer, ErrorState(error.message));
    }
  };

  return { loadPhotos, retry: () => loadPhotos(lastQuery) };
};
