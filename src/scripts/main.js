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
  if (!data || typeof data !== 'object' || Object.keys(data).length === 0) {
    return element;
  }

  const ul = document.createElement('ul');

  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;

    createTree(li, data[key]);

    ul.appendChild(li);
  }

  element.appendChild(ul);
}

document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('#tree');

  if (tree) {
    createTree(tree, food);
  }
});
