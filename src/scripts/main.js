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
  if (!element || typeof element.append !== 'function') {
    throw new Error('Invalid DOM element provided to createTree');
  }

  if (typeof data !== 'object' || data === null || Array.isArray(data)) {
    return;
  }

  const keys = Object.keys(data);

  if (keys.length === 0) {
    return; // не создаём пустой <ul>
  }

  const ul = document.createElement('ul');

  for (const key of keys) {
    const li = document.createElement('li');

    li.textContent = key;

    const value = data[key];

    if (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      Object.keys(value).length > 0
    ) {
      createTree(li, value);
    }

    ul.append(li);
  }

  element.append(ul);
}

if (typeof document !== 'undefined') {
  const tree = document.querySelector('#tree');

  if (tree) {
    createTree(tree, food);
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { createTree };
}
