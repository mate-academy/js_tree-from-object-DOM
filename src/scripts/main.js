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
    if (key) {
      if (!element.firstElementChild) {
        element.insertAdjacentHTML('beforeend', '<ul></ul>');
      }

      element.firstElementChild.insertAdjacentHTML('beforeend', `
        <li class="${key}">${key}</li>
      `);
      createTree(document.querySelector(`.${key}`), data[key]);
    } else {
      return;
    }
  }
}

createTree(tree, food);
