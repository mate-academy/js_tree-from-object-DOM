'use strict';

export function createTree(element, data) {
  if (!element) return;
  if (typeof data !== 'object' || data === null) return; // stronger validation

  const keys = Object.keys(data);
  if (keys.length === 0) return; // avoid empty ULs

  const ul = document.createElement('ul');

  keys.forEach(key => {
    const li = document.createElement('li');
    li.textContent = key;

    const child = data[key];
    if (typeof child === 'object' && child !== null && Object.keys(child).length > 0) {
      createTree(li, child);
    }

    ul.appendChild(li);
  });

  element.appendChild(ul);
}
