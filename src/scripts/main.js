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
    const unorderedList = document.createElement('ul');
    const listElement = document.createElement('li');

    listElement.textContent = key;
    unorderedList.appendChild(listElement);

    if (typeof data[key] !== 'object') {
      return;
    }
    element.appendChild(unorderedList);
    createTree(unorderedList, data[key]);
  }
}

createTree(tree, food);
