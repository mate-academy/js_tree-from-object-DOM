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
    const ulEl = document.createElement('ul');
    const liEl = document.createElement('li');

    liEl.textContent = key;

    if (Object.keys(data[key]).length) {
      createTree(liEl, data[key]);
    }

    element.append(ulEl);
    ulEl.append(liEl);
  }
}

createTree(tree, food);
