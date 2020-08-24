'use strict';

const food = {
  'Meat': {
    'Pork': {},
    'Beef': {},
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
        <li class="${key}">${key}</li>
      </ul>
    `);

    if (key) {
      createTree(document.querySelector(`.${key}`), data[key]);
    } else {
      return;
    }
  }
}

createTree(tree, food);
