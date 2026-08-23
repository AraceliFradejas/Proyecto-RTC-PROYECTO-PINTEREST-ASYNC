import './Footer.css';

// Componente Footer con redes sociales y nota académica bilingüe
export const Footer = () => {
  return `
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-social">
          <p class="social-title">Síguenos en / Follow us:</p>
          <div class="social-icons">
            <!-- Instagram -->
            <a href="https://www.instagram.com/goldilocks1013x/" target="_blank" rel="noopener noreferrer" class="social-link" title="Instagram">
              <svg viewBox="0 0 24 24" class="social-svg" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            <!-- X (Twitter) -->
            <a href="https://x.com/AraceliFradejas" target="_blank" rel="noopener noreferrer" class="social-link" title="X (Twitter)">
              <svg viewBox="0 0 24 24" class="social-svg" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            <!-- TikTok -->
            <a href="https://www.tiktok.com/@arucci1" target="_blank" rel="noopener noreferrer" class="social-link" title="TikTok">
              <svg viewBox="0 0 24 24" class="social-svg" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>

            <!-- YouTube -->
            <a href="https://www.youtube.com/@aracelifradejasmunoz2758" target="_blank" rel="noopener noreferrer" class="social-link" title="YouTube">
              <svg viewBox="0 0 24 24" class="social-svg" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

            <!-- LinkedIn -->
            <a href="https://www.linkedin.com/in/araceli-fradejas-munoz-transformaciondigital/" target="_blank" rel="noopener noreferrer" class="social-link" title="LinkedIn">
              <svg viewBox="0 0 24 24" class="social-svg" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            <!-- Medium -->
            <a href="https://medium.com/@araceli.fradejas" target="_blank" rel="noopener noreferrer" class="social-link" title="Medium">
              <svg viewBox="0 0 24 24" class="social-svg" fill="currentColor">
                <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
            </a>
          </div>
        </div>

        <p class="footer-copy">&copy; 2026 Araceli Fradejas Muñoz</p>
      </div>

      <div class="footer-disclaimer">
        <p class="disclaimer-text">
          <strong>NOTA MUY IMPORTANTE:</strong> Esta página es un ejercicio realizado por <strong>Araceli Fradejas Muñoz</strong> como entrega para el <strong>PROYECTO: PINTEREST ASYNC</strong>, del <em>"módulo 4: Web Design Advanced"</em> del máster <strong>ROCK THE CODE</strong> de la escuela ThePower / Hackio. Es una réplica interactiva de Pinterest desarrollada con Vite, componentes en Vanilla JavaScript (ES6+) y la API de Unsplash. No es la aplicación oficial de Pinterest.
        </p>
        <p class="disclaimer-text disclaimer-en">
          <strong>VERY IMPORTANT NOTE:</strong> This page is an exercise created by <strong>Araceli Fradejas Muñoz</strong> as a submission for the <strong>PROJECT: PINTEREST ASYNC</strong>, from <em>"Module 4: Web Design Advanced"</em> of the <strong>ROCK THE CODE</strong> master program at ThePower / Hackio school. It is an interactive Pinterest replica developed with Vite, Vanilla JavaScript components (ES6+), and the Unsplash API. It is not the official Pinterest application.
        </p>
      </div>
    </footer>
  `;
};
