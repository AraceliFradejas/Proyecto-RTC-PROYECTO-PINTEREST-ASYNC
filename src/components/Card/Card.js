import './Card.css';

const escapeHtml = (value = '') =>
  String(value).replace(
    /[&<>'"]/g,
    (character) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[
        character
      ]
  );

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

// Componente Card para pintar cada tarjeta de foto individual
export const Card = (photo) => {
  // Extraemos los datos necesarios de la API de Unsplash
  const imageUrl = photo.urls?.regular || photo.urls?.small || '';
  const altText = photo.alt_description || photo.description || 'Foto de Unsplash';
  const authorName = photo.user?.name || 'Creador de Unsplash';
  const authorHandle = photo.user?.username ? `@${photo.user.username}` : '';
  const authorAvatar =
    photo.user?.profile_image?.medium || photo.user?.profile_image?.small || '';
  const authorProfileUrl = withAttribution(photo.user?.links?.html);
  const photoUrl = withAttribution(photo.links?.html);
  const likesCount = photo.likes ?? 0;

  return `
    <article class="photo-card">
      <div class="photo-wrapper">
        <img 
          class="photo-img" 
          src="${escapeHtml(imageUrl)}"
          alt="${escapeHtml(altText)}"
          loading="lazy" 
        />
        <div class="photo-overlay">
          <a 
            href="${photoUrl}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="unsplash-link-btn"
          >
            Ver en Unsplash ↗
          </a>
        </div>
      </div>

      <div class="photo-details">
        <a 
          href="${authorProfileUrl}" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="author-link" 
          title="Ver perfil de ${escapeHtml(authorName)} en Unsplash"
        >
          ${
            authorAvatar
              ? `<img
                  class="author-avatar"
                  src="${escapeHtml(authorAvatar)}"
                  alt="Retrato de ${escapeHtml(authorName)}"
                />`
              : ''
          }
          <div class="author-meta">
            <span class="author-name">${escapeHtml(authorName)}</span>
            <span class="author-handle">${escapeHtml(authorHandle)}</span>
          </div>
        </a>
        <div class="photo-likes" title="${likesCount} me gusta">
          <span>❤️ ${likesCount}</span>
        </div>
      </div>
    </article>
  `;
};
