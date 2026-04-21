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

  const ul = document.createElement('ul');

  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;

    if (typeof data[key] === 'object') {
      createTree(li, data[key]);
    }

    ul.appendChild(li);
  }

  element.appendChild(ul);
}

// eslint-disable-next-line no-unused-vars
const container = document.getElementById('tree-container');

createTree(tree, food);
