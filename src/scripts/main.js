'use strict';

export function createTree(element, data) {
  element.innerHTML = '';

  const ul = document.createElement('ul');

  element.appendChild(ul);

  function buildList(parentUl, obj) {
    for (const key in obj) {
      const value = obj[key];
      const li = document.createElement('li');

      const hasChildren =
        value && typeof value === 'object' && Object.keys(value).length > 0;

      if (hasChildren) {
        li.textContent = `◦ ${key}`;

        const nestedUl = document.createElement('ul');

        li.appendChild(nestedUl);
        buildList(nestedUl, value);
      } else {
        li.textContent = `• ${key}`;
      }

      parentUl.appendChild(li);
    }
  }

  buildList(ul, data);
}
