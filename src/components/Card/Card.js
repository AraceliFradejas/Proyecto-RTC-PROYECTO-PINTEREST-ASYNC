import './Card.css';

// Componente Card para pintar cada tarjeta de foto individual
export const Card = (photo) => {
  // Extraemos los datos necesarios de la API de Unsplash
  const imageUrl = photo.urls?.regular || photo.urls?.small || '';
  const altText = photo.alt_description || photo.description || 'Foto de Unsplash';
  const authorName = photo.user?.name || 'Creador de Unsplash';
  const authorHandle = photo.user?.username ? `@${photo.user.username}` : '';
  const authorAvatar = photo.user?.profile_image?.medium || photo.user?.profile_image?.small || 'https://images.unsplash.com/placeholder-avatars/extra-large.jpg';
  const authorProfileUrl = photo.user?.links?.html || 'https://unsplash.com';
  const photoUrl = photo.links?.html || 'https://unsplash.com';
  const likesCount = photo.likes ?? 0;

  return `
    <article class="photo-card">
      <div class="photo-wrapper">
        <img 
          class="photo-img" 
          src="${imageUrl}" 
          alt="${altText}" 
          loading="lazy" 
        />
        <div class="photo-overlay">
          <button class="save-btn" type="button">Guardar</button>
          <a 
            href="${photoUrl}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="unsplash-link-btn"
          >
            Ver foto ↗
          </a>
        </div>
      </div>

      <div class="photo-details">
        <a 
          href="${authorProfileUrl}" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="author-link" 
          title="Ver perfil de ${authorName}"
        >
          <img 
            class="author-avatar" 
            src="${authorAvatar}" 
            alt="${authorName}" 
          />
          <div class="author-meta">
            <span class="author-name">${authorName}</span>
            <span class="author-handle">${authorHandle}</span>
          </div>
        </a>
        <div class="photo-likes" title="${likesCount} me gusta">
          <span>❤️ ${likesCount}</span>
        </div>
      </div>
    </article>
  `;
};
