export const createElement = (tagName, options = {}, children = []) => {
  const element = document.createElement(tagName);
  Object.entries(options).forEach(([key, value]) => {
    if (value === undefined || value === null || value === false) return;
    if (key === 'className') element.className = value;
    else if (key === 'text') element.textContent = value;
    else if (key === 'dataset') Object.assign(element.dataset, value);
    else if (key in element) element[key] = value;
    else element.setAttribute(key, value);
  });
  element.append(...(Array.isArray(children) ? children : [children]).filter(Boolean));
  return element;
};

export const replaceChildren = (container, child) => container.replaceChildren(child);

export const createSvgElement = (tagName, attributes = {}) => {
  const element = document.createElementNS('http://www.w3.org/2000/svg', tagName);
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
  return element;
};
