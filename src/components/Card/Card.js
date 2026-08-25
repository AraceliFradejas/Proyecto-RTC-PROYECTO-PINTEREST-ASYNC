import './Card.css';
import { createElement } from '../../utils/dom.js';

const withAttribution = (url) => {
  try {
    const attributedUrl = new URL(url);
    attributedUrl.searchParams.set('utm_source', 'afm_inspiration');
    attributedUrl.searchParams.set('utm_medium', 'referral');
    return attributedUrl.toString();
  } catch {
    return 'https://unsplash.com/?utm_source=afm_inspiration&utm_medium=referral';
  }
};

const externalLinkOptions = (href, className) => ({
  href, className, target: '_blank', rel: 'noopener noreferrer'
});

export const Card = (photo) => {
  const imageUrl = photo.urls?.regular || photo.urls?.small || '';
  const altText = photo.alt_description || photo.description || 'Foto de Unsplash';
  const authorName = photo.user?.name || 'Creador de Unsplash';
  const authorHandle = photo.user?.username ? `@${photo.user.username}` : '';
  const authorAvatar = photo.user?.profile_image?.medium || photo.user?.profile_image?.small;

  const image = createElement('img', {
    className: 'photo-img', src: imageUrl, alt: altText, loading: 'lazy', decoding: 'async'
  });
  const unsplashLink = createElement('a', {
    ...externalLinkOptions(withAttribution(photo.links?.html), 'unsplash-link-btn'), text: 'Ver en Unsplash ↗'
  });
  const photoWrapper = createElement('div', { className: 'photo-wrapper' }, [
    image, createElement('div', { className: 'photo-overlay' }, unsplashLink)
  ]);

  const authorChildren = [];
  if (authorAvatar) {
    authorChildren.push(createElement('img', {
      className: 'author-avatar', src: authorAvatar, alt: `Retrato de ${authorName}`
    }));
  }
  authorChildren.push(createElement('div', { className: 'author-meta' }, [
    createElement('span', { className: 'author-name', text: authorName }),
    createElement('span', { className: 'author-handle', text: authorHandle })
  ]));
  const authorLink = createElement('a', {
    ...externalLinkOptions(withAttribution(photo.user?.links?.html), 'author-link'),
    title: `Ver perfil de ${authorName} en Unsplash`
  }, authorChildren);
  const likesCount = photo.likes ?? 0;
  const likes = createElement('div', {
    className: 'photo-likes', title: `${likesCount} me gusta`
  }, createElement('span', { text: `❤️ ${likesCount}` }));

  return createElement('article', { className: 'photo-card' }, [
    photoWrapper, createElement('div', { className: 'photo-details' }, [authorLink, likes])
  ]);
};
