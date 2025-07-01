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

function createTree(container, data) {
  if (!data || typeof data !== 'object') {
    return;
  }

  const ul = document.createElement('ul');

  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;

    const children = data[key];

    if (children && Object.keys(children).length > 0) {
      createTree(li, children);
    }

    ul.appendChild(li);
  }

  container.appendChild(ul);
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('tree');

  if (root) {
    createTree(root, food);
  }
});
