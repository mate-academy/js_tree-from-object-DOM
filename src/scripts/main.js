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
  for (const option in data) {
    const parentElement = document.createElement('ul');
    const row = document.createElement('li');

    row.textContent = `${option}`;
    parentElement.append(row);
    element.append(parentElement);

    createTree(parentElement, data[option]);
  }
}

createTree(tree, food);
