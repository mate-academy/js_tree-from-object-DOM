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
  const ulEl = document.createElement('ul');

  Object.keys(data).forEach((key) => {
    const liEl = document.createElement('li');

    liEl.textContent = key;

    if (
      typeof data[key] === 'object' &&
      data[key] !== null &&
      Object.keys(data[key]).length > 0
    ) {
      createTree(liEl, data[key]);
    }

    ulEl.appendChild(liEl);
  });

  element.appendChild(ulEl);
}

createTree(tree, food);
