import './Footer.css';

// Componente Footer
export const Footer = () => {
  return `
    <footer class="footer">
      <div class="footer-content">
        <p class="footer-text">
          Proyecto Réplica de Pinterest — Módulo Web Design Advanced (ThePower)
        </p>
        <div class="footer-links">
          <a href="https://unsplash.com/developers" target="_blank" rel="noopener noreferrer" class="footer-link">
            API de Unsplash
          </a>
          <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer" class="footer-link">
            Vite
          </a>
          <span class="footer-link">Desarrollado con Vanilla JavaScript & CSS</span>
        </div>
      </div>
    </footer>
  `;
};
