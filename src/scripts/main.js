'use strict';

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

export function createTree(element, data) {
  if (!data || typeof data !== 'object' || Object.keys(data).length === 0) {
    return;
  }

  const ul = document.createElement('ul');

  for (const [key, value] of Object.entries(data)) {
    const li = document.createElement('li');

    li.textContent = key;
    createTree(li, value);

    ul.appendChild(li);
  }

  element.appendChild(ul);
}

// Демонстрація (тільки в браузері)
if (typeof document !== 'undefined') {
  const tree = document.querySelector('#tree');

  if (tree) {
    createTree(tree, food);
  }
}
