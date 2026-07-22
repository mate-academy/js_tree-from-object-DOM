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
  const ul = document.createElement('ul');

  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;
    ul.appendChild(li);

    if (typeof data[key] === 'object' && Object.keys(data[key]).length > 0) {
      createTree(li, data[key]);
    }
  }
  element.appendChild(ul);
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.createElement('div');

  root.id = 'tree';
  document.body.appendChild(root);
  createTree(root, food);
});
