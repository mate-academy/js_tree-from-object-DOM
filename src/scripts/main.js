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

const tree = document.querySelector('#tree');

function createTree(element, data) {
  if (!data || typeof data !== 'object') {
    return;
  }

  const keys = Object.keys(data);

  if (!keys.length) {
    return;
  }

  const ul = document.createElement('ul');

  for (const key of keys) {
    const li = document.createElement('li');

    li.textContent = key;

    createTree(li, data[key]);

    ul.appendChild(li);
  }

  element.appendChild(ul);
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.createElement('div');

  container.id = 'tree';
  document.body.appendChild(container);

  // ✅ Один правильний виклик
  createTree(container, food);
});

createTree(tree, food);
