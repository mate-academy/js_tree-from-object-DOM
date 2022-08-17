'use strict';

const food = {
  'Drink': {
    'Wine': {},
    'Schnaps': {},
  },

  'Fruit': {
    'Red': {
      'Cherry': {},
      'Strawberry': {},
    },
    'Yellow': {
      'Banana': {},
      'Pineapple': {},
    },

  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  for (const value in data) {
    element.innerHTML += `
      <ul class="${value}">
        <li>${value}</li>
      </ul>
      `;

    if (typeof data[value] === 'object') {
      const newElement = document.querySelector(`ul.${value}`);

      createTree(newElement, data[value]);
    }
  }
}

createTree(tree, food);
