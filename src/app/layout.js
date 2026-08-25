import { Header } from '../components/Header/Header.js';
import { Topics } from '../components/Topics/Topics.js';
import { Loader } from '../components/Gallery/Gallery.js';
import { Footer } from '../components/Footer/Footer.js';
import { createElement } from '../utils/dom.js';

export const renderLayout = (app) => {
  const galleryContainer = createElement('div', { id: 'gallery-container' }, Loader());
  const main = createElement('main', {}, [Topics(), galleryContainer]);
  app.replaceChildren(Header(), main, Footer());
  return galleryContainer;
};
