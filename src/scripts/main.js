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
  const list = document.createElement('ul');

  for (const item in data) {
    const listElement = document.createElement('li');

    list.appendChild(listElement);
    listElement.textContent = item;
    element.appendChild(list);
    createTree(listElement, data[item]);
  }
}
createTree(tree, food);
