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

function createTree(element, data) {
  if (!element || !data || typeof data !== 'object') {
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

    const value = data[key];

    if (value && typeof value === 'object' && Object.keys(value).length > 0) {
      createTree(li, value);
    }

    ul.appendChild(li);
  }

  element.appendChild(ul);
}

if (typeof window !== 'undefined') {
  window.createTree = createTree;
  window.food = food;
}
