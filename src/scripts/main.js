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
  for (const key in data) {
    element.insertAdjacentHTML('beforeend', `
      <ul>
          <li class = "${key}">
            ${key}
          </li>
      </ul>
    `);
    createTree(document.getElementsByClassName(key)[0], data[key]);
  }
}

createTree(tree, food);
