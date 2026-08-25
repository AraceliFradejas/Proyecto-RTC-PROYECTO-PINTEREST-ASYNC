import './Footer.css';
import { createElement, createSvgElement } from '../../utils/dom.js';

const SOCIAL_LINKS = [
  ['Instagram', 'https://www.instagram.com/goldilocks1013x/', 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'],
  ['X (Twitter)', 'https://x.com/AraceliFradejas', 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'],
  ['TikTok', 'https://www.tiktok.com/@arucci1', 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72v4.44c-.99-.32-2.15-.23-3.02.37-2.38 1.56-1.22 5.31 1.74 5.14 1.71-.02 3.16-1.51 3.18-3.21z'],
  ['YouTube', 'https://www.youtube.com/@aracelifradejasmunoz2758', 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12z'],
  ['LinkedIn', 'https://www.linkedin.com/in/araceli-fradejas-munoz-transformaciondigital/', 'M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zM8 19H5V8h3zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476z'],
  ['Medium', 'https://medium.com/@araceli.fradejas', 'M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75s-1.19-2.58-1.19-5.75.53-5.75 1.19-5.75S24 8.83 24 12z']
];

const createSocialLink = ([title, href, pathData]) => {
  const svg = createSvgElement('svg', { viewBox: '0 0 24 24', class: 'social-svg', fill: 'currentColor', 'aria-hidden': 'true' });
  svg.append(createSvgElement('path', { d: pathData }));
  return createElement('a', {
    href, target: '_blank', rel: 'noopener noreferrer', className: 'social-link', title,
    ariaLabel: title
  }, svg);
};

export const Footer = () => {
  const icons = createElement('div', { className: 'social-icons' });
  SOCIAL_LINKS.forEach((social) => icons.append(createSocialLink(social)));
  const social = createElement('div', { className: 'footer-social' }, [
    createElement('p', { className: 'social-title', text: 'Síguenos en / Follow us:' }), icons
  ]);
  const container = createElement('div', { className: 'footer-container' }, [
    social, createElement('p', { className: 'footer-copy', text: '© 2026 Araceli Fradejas Muñoz' })
  ]);
  const disclaimer = createElement('div', { className: 'footer-disclaimer' }, [
    createElement('p', { className: 'disclaimer-text', text: 'NOTA MUY IMPORTANTE: Esta página es un ejercicio realizado por Araceli Fradejas Muñoz como entrega para el PROYECTO: PINTEREST ASYNC, del módulo 4: Web Design Advanced del máster ROCK THE CODE de la escuela The Power TECH / Hackio. Es una réplica interactiva de Pinterest desarrollada con Vite, componentes en Vanilla JavaScript (ES6+) y la API de Unsplash. No es la aplicación oficial de Pinterest.' }),
    createElement('p', { className: 'disclaimer-text disclaimer-en', text: 'VERY IMPORTANT NOTE: This page is an exercise created by Araceli Fradejas Muñoz as a submission for the PROJECT: PINTEREST ASYNC, from Module 4: Web Design Advanced of the ROCK THE CODE master program at The Power TECH / Hackio school. It is an interactive Pinterest replica developed with Vite, Vanilla JavaScript components (ES6+), and the Unsplash API. It is not the official Pinterest application.' })
  ]);
  return createElement('footer', { className: 'footer' }, [container, disclaimer]);
};
