'use strict';

// const { createElement } = require('react');

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

    const child = data[key];

    if (child && Object.keys(child).length > 0) {
      createTree(li, child);
    }

    ul.appendChild(li);
  }

  element.appendChild(ul);
}

createTree(tree, food);
