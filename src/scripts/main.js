'use strict';

export function createTree(element, data) {
  if (!(element instanceof Element)) {
    return;
  }

  if (!data || typeof data !== 'object') {
    return;
  }

  const keys = Object.keys(data);

  if (keys.length === 0) {
    return;
  }

  const ul = document.createElement('ul');

  for (const key of keys) {
    const li = document.createElement('li');

    li.textContent = key;

    const child = data[key];

    if (child && typeof child === 'object' && Object.keys(child).length > 0) {
      createTree(li, child);
    }

    ul.appendChild(li);
  }

  element.appendChild(ul);
}

const food = {
  Drink: { Wine: {}, Schnaps: {} },
  Fruit: {
    Red: { Cherry: {}, Strawberry: {} },
    Yellow: { Banana: {}, Pineapple: {} },
  },
};

document.addEventListener('DOMContentLoaded', () => {
  const treeContainer = document.querySelector('#tree');

  createTree(treeContainer, food);
});
