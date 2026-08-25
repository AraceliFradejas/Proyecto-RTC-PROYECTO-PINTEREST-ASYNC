import './Header.css';
import { createElement, createSvgElement } from '../../utils/dom.js';

const createLogo = () => {
  const icon = createSvgElement('svg', {
    class: 'logo-icon', viewBox: '0 0 100 100', 'aria-hidden': 'true'
  });
  const definitions = createSvgElement('defs');
  const gradient = createSvgElement('linearGradient', {
    id: 'headerAfmGrad', x1: '0%', y1: '0%', x2: '100%', y2: '100%'
  });
  gradient.append(
    createSvgElement('stop', { offset: '0%', 'stop-color': '#e60023' }),
    createSvgElement('stop', { offset: '100%', 'stop-color': '#b6001c' })
  );
  definitions.append(gradient);
  const background = createSvgElement('rect', {
    width: '100', height: '100', rx: '24', fill: 'url(#headerAfmGrad)'
  });
  const initials = createSvgElement('text', {
    x: '50', y: '62', 'font-family': "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    'font-size': '34', 'font-weight': '900', fill: '#ffffff', 'text-anchor': 'middle',
    'letter-spacing': '-1.5'
  });
  initials.textContent = 'AFM';
  icon.append(definitions, background, initials);
  const title = createElement('span', { className: 'logo-title', text: 'Inspiration' });
  return createElement('button', {
    className: 'header-logo', id: 'logo-btn', type: 'button', ariaLabel: 'Volver al inicio'
  }, [icon, title]);
};

const createSearch = () => {
  const iconButton = createElement('button', {
    type: 'button', className: 'search-icon-btn', title: 'Buscar', ariaLabel: 'Buscar', text: '🔍'
  });
  const input = createElement('input', {
    type: 'text', id: 'search-input', className: 'search-input',
    placeholder: 'Buscar fotos, ideas, inspiración...', autocomplete: 'off', required: true
  });
  const submit = createElement('button', {
    type: 'submit', className: 'search-submit-btn', text: 'Buscar'
  });
  const form = createElement('form', { className: 'search-form', id: 'search-form' }, [iconButton, input, submit]);
  return createElement('div', { className: 'header-search' }, form);
};

export const Header = () => {
  const home = createElement('button', {
    className: 'nav-link active', id: 'nav-home', type: 'button', text: 'Inicio'
  });
  const nav = createElement('nav', { className: 'header-nav', ariaLabel: 'Navegación principal' }, home);
  return createElement('header', { className: 'header' }, [createLogo(), nav, createSearch()]);
};
