import { createElement } from '../../utils/dom.js';

const SUGGESTED_TOPICS = [
  'Todo', 'Arquitectura', 'Naturaleza', 'Minimalismo', 'Diseño',
  'Gatos', 'Tecnología', 'Viajes', 'Fotografía'
];

export const Topics = () => {
  const nav = createElement('nav', { className: 'quick-topics', ariaLabel: 'Temas sugeridos' });
  SUGGESTED_TOPICS.forEach((topic, index) => {
    nav.append(createElement('button', {
      className: `topic-chip${index === 0 ? ' active' : ''}`,
      type: 'button', text: topic, dataset: { topic }, ariaPressed: String(index === 0)
    }));
  });
  return nav;
};
