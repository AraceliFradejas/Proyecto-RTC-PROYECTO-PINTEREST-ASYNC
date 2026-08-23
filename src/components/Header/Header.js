import './Header.css';

// Componente Header (Barra de navegación y buscador con logo AFM)
export const Header = () => {
  return `
    <header class="header">
      <!-- Logo AFM interactivo para volver al inicio -->
      <button class="header-logo" id="logo-btn" type="button" aria-label="Volver al inicio">
        <svg class="logo-icon" viewBox="0 0 100 100" aria-hidden="true">
          <defs>
            <linearGradient id="headerAfmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#e60023"/>
              <stop offset="100%" stop-color="#b6001c"/>
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="24" fill="url(#headerAfmGrad)"/>
          <text x="50" y="62" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="34" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="-1.5">AFM</text>
        </svg>
        <span class="logo-title">Inspiration</span>
      </button>

      <!-- Enlaces de navegación -->
      <nav class="header-nav">
        <button class="nav-link active" id="nav-home" type="button">Inicio</button>
      </nav>

      <!-- Barra de búsqueda -->
      <div class="header-search">
        <form class="search-form" id="search-form">
          <button type="submit" class="search-icon-btn" title="Buscar">🔍</button>
          <input 
            type="text" 
            id="search-input" 
            class="search-input" 
            placeholder="Buscar fotos, ideas, inspiración..." 
            autocomplete="off"
            required
          />
          <button type="submit" class="search-submit-btn">Buscar</button>
        </form>
      </div>

    </header>
  `;
};
